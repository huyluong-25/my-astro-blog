---
title: 'Bye Bye PuTTY: Dùng Sshwifty để SSH VPS trực tiếp từ trình duyệt mọi lúc mọi nơi'
description: 'Hướng dẫn cài đặt Sshwifty bằng Docker Compose để SSH vào VPS ngay trên trình duyệt, không cần PuTTY hay MobaXterm.'
pubDate: '2026-03-11'
heroImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80'
---

Đã bao giờ bạn đang ngồi cafe, không mang theo laptop cá nhân nhưng lại nhận được cuộc gọi khẩn cần xử lý server chưa? Hoặc bạn đang mượn máy của đồng nghiệp, ngại cài thêm PuTTY hay MobaXterm chỉ để vào SSH 5 phút?

Nếu bạn làm IT Support, Helpdesk, Sysadmin hoặc vận hành hệ thống, việc truy cập server mọi lúc mọi nơi là nhu cầu thật. Bài viết này sẽ hướng dẫn bạn cài đặt **Sshwifty** bằng Docker để SSH vào VPS trực tiếp từ trình duyệt, gọn nhẹ, dễ dùng và rất linh hoạt.

## 1. Sshwifty là gì?

Sshwifty là một ứng dụng Web SSH/Telnet client mã nguồn mở. Nó cho phép mở terminal và kết nối đến server ngay trong trình duyệt (Chrome, Edge, Firefox, Safari), không cần cài SSH client trên máy đang dùng.

**Điểm mạnh để dùng thực tế:**

- Không cần cài app client trên máy tính mượn hoặc máy công cộng.
- Dùng được trên cả điện thoại, tablet, laptop.
- Hỗ trợ copy/paste, phím tắt terminal, làm việc đa tab.
- Triển khai nhanh bằng Docker, dễ backup và dễ di dời.

## 2. Kịch bản sử dụng phù hợp

Sshwifty rất hợp với các trường hợp:

- Đang đi công tác, cần vào server gấp.
- Làm on-call, cần check log và restart service nhanh.
- Môi trường homelab, cần một công cụ SSH web để dùng chung.

Không nên xem Sshwifty là giải pháp thay thế hoàn toàn cho bastion host chuyên nghiệp trong hệ thống enterprise lớn. Hãy coi đây là công cụ linh hoạt, cần tối ưu bảo mật khi public lên Internet.

## 3. Chuẩn bị trước khi cài đặt

Bạn cần:

- Một VPS đã cài Docker và Docker Compose.
- Một domain (khuyến nghị) để setup HTTPS qua reverse proxy.
- Firewall chỉ mở cổng cần thiết.

Kiểm tra nhanh trên VPS:

~~~bash
docker --version
docker compose version
~~~

## 4. Cài đặt Sshwifty bằng Docker Compose

Tạo thư mục triển khai:

~~~bash
mkdir -p /opt/sshwifty
cd /opt/sshwifty
~~~

Tạo file docker-compose.yml:

~~~yaml
services:
  sshwifty:
        image: niruix/sshwifty:latest
        container_name: sshwifty
        restart: unless-stopped
        ports:
            - "8182:8182"
        environment:
            - SSHWIFTY_SHAREDKEY=ThayBangMatKhauManh_CuaBan
            - SSHWIFTY_LISTENINTERFACE=0.0.0.0
~~~

Khởi động dịch vụ:

~~~bash
docker compose up -d
docker compose ps
~~~

Sau đó mở trình duyệt và truy cập:

~~~text
http://IP_VPS:8182
~~~

## 5. Tạo kết nối SSH trên giao diện web

Khi vào Sshwifty, bạn tạo session mới với các thông tin:

- Host: IP hoặc domain của server đích.
- Port: Thường là 22 (hoặc port SSH bạn đã đổi).
- Username: Tài khoản đăng nhập SSH.
- Authentication: Mật khẩu hoặc private key.

Nếu server dùng xác thực key, bạn nên ưu tiên key thay vì mật khẩu để an toàn hơn.

## 6. Bảo mật bắt buộc khi đưa vào sử dụng thật

Đây là phần quan trọng nhất.

**Khuyến nghị bảo mật tối thiểu:**

- Đặt mật khẩu SSHWIFTY_SHAREDKEY dài và khó đoán.
- Đặt reverse proxy (Nginx/Traefik/Caddy) + HTTPS.
- Giới hạn IP truy cập bằng firewall nếu có thể.
- Tắt đăng nhập root trực tiếp qua SSH trên server đích.
- Bật fail2ban và dùng key auth cho SSH.

Nếu public ra Internet mà không có HTTPS và không giới hạn truy cập, rủi ro sẽ rất cao.

## 7. Ví dụ reverse proxy Nginx (có SSL)

Nếu bạn đã có Nginx, có thể proxy về cổng 8182:

~~~nginx
server {
    listen 80;
    server_name ssh.your-domain.com;

    location / {
        proxy_pass http://127.0.0.1:8182;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
~~~

Sau đó cấp SSL bằng Let's Encrypt và bật redirect HTTPS.

## 8. Xử lý sự cố thường gặp

1. Không vào được trang Sshwifty: kiểm tra container có đang chạy không bằng docker compose ps và log bằng docker compose logs -f.
2. Kết nối SSH thất bại: kiểm tra firewall server đích, port SSH, user và key.
3. Bị disconnect giữa chừng: kiểm tra timeout của reverse proxy và chất lượng mạng.

Lệnh kiểm tra log nhanh:

~~~bash
docker compose logs -f sshwifty
~~~

## 9. Tổng kết

Sshwifty là một công cụ rất đáng có trong bộ đồ nghề của anh em IT Support và homelab. Ưu điểm lớn nhất là sự linh hoạt: mở trình duyệt là có thể SSH ngay, không phụ thuộc vào máy đang dùng có cài sẵn công cụ hay không.

Nếu bạn cần thao tác server mọi lúc mọi nơi, đây là giải pháp nhẹ, dễ triển khai và rất thực dụng. Chỉ cần nhớ một điều: triển khai nhanh là một chuyện, triển khai an toàn mới là chuyện quan trọng.

---

Nếu bạn muốn, ở bài tiếp theo mình sẽ viết thêm cách đặt Sshwifty sau Cloudflare Tunnel để an toàn hơn mà vẫn không cần mở cổng trực tiếp trên VPS.
