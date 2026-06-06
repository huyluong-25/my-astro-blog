---
title: 'Ansible Là Gì? Hướng Dẫn A-Z Step-By-Step Cho DevOps Mới Nhập Môn (Bản Nâng Cấp Chuyên Sâu)'
description: 'Từ khái niệm đến thực chiến: cài đặt, inventory, playbook, role, vault, CI/CD và best practices để bạn tự động hóa hạ tầng với Ansible đúng chuẩn kỹ thuật.'
pubDate: '2026-04-10'
heroImage: 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1600&q=80'
---

Ansible là công cụ tự động hóa hạ tầng theo hướng agentless, dùng SSH để cấu hình server, deploy ứng dụng và vận hành hệ thống theo cách lặp lại được. Nếu bạn mới vào DevOps, đây là một trong những kỹ năng quan trọng nhất để đi từ "run lệnh thủ công" sang "hạ tầng có quy trình".

![Ansible automation workspace](https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1400&q=80)

## Mục tiêu bài viết

Sau bài này, bạn sẽ làm được:

- Hiểu đúng bản chất Ansible và khi nào nên dùng.
- Dùng inventory tách môi trường dev/staging/prod.
- Viết playbook idempotent, có handler, có tag.
- Quản lý bí mật bằng Ansible Vault.
- Tổ chức role và chuẩn hóa workflow thực chiến.

## 1. Ansible là gì và vì sao nó mạnh?

Ansible hoạt động theo mô hình:

- **Control node**: máy chạy Ansible.
- **Managed node**: server đích (VPS, VM, on-prem).
- **Inventory**: danh sách host và group.
- **Playbook**: tập hợp task mô tả trạng thái mong muốn.

Khác biệt lớn nhất của Ansible:

- Không cần cài agent trên server đích.
- Các module đã đóng gói logic (apt, yum, systemd, user, file...).
- Tư duy "desired state": hệ thống đã đúng rồi thì chạy lại vẫn không phá vỡ (idempotent).

## 2. Lab thực hành (khuyến nghị)

Tối thiểu bạn cần:

- 1 control node: Ubuntu 22.04.
- 2 managed node: `web-01`, `web-02`.
- SSH key login hoạt động.

Mô phỏng nhanh:

~~~text
Control Node: 10.10.10.10
Web-01:      10.10.10.21
Web-02:      10.10.10.22
~~~

## 3. Cài đặt Ansible

### Trên Ubuntu/Debian

~~~bash
sudo apt update
sudo apt install -y ansible sshpass
ansible --version
~~~

### Trên RHEL/Rocky/AlmaLinux

~~~bash
sudo dnf install -y epel-release
sudo dnf install -y ansible
ansible --version
~~~

## 4. Chuẩn bị SSH key (bắt buộc để vận hành ổn định)

Tạo key trên control node (nếu chưa có):

~~~bash
ssh-keygen -t ed25519 -C "ansible@control"
~~~

Copy key sang các node:

~~~bash
ssh-copy-id ubuntu@10.10.10.21
ssh-copy-id ubuntu@10.10.10.22
~~~

Test:

~~~bash
ssh ubuntu@10.10.10.21 "hostname"
ssh ubuntu@10.10.10.22 "hostname"
~~~

## 5. Tạo cấu trúc project đúng chuẩn

~~~bash
mkdir -p ansible-lab/{inventories/{dev,staging,prod},group_vars,host_vars,playbooks,roles}
cd ansible-lab
~~~

Tạo file `ansible.cfg`:

~~~ini
[defaults]
inventory = inventories/dev/hosts.yml
host_key_checking = False
timeout = 30
forks = 20
interpreter_python = auto_silent
stdout_callback = yaml
retry_files_enabled = False

[privilege_escalation]
become = True
become_method = sudo
become_ask_pass = False
~~~

## 6. Inventory dùng YAML (dễ đọc, dễ mở rộng)

`inventories/dev/hosts.yml`

~~~yaml
all:
	children:
		web:
			hosts:
				web-01:
					ansible_host: 10.10.10.21
					ansible_user: ubuntu
				web-02:
					ansible_host: 10.10.10.22
					ansible_user: ubuntu
~~~

Kiểm tra inventory:

~~~bash
ansible-inventory --graph
ansible all -m ping
~~~

Nếu `pong` trả về từ cả 2 host, bạn đã thông kết nối thành công.

## 7. Ad-hoc command: dùng để debug nhanh

~~~bash
ansible web -m shell -a "uptime"
ansible web -m apt -a "update_cache=yes" -b
ansible web -m service -a "name=nginx state=started" -b
~~~

Ad-hoc rất tiện để test nhanh, nhưng không phải cách vận hành lâu dài. Thực chiến nên dựa vào playbook + git.

## 8. Viết playbook đầu tiên (step-by-step)

Tạo file `playbooks/bootstrap-web.yml`:

~~~yaml
---
- name: Bootstrap web servers
	hosts: web
	become: true
	vars:
		nginx_pkg: nginx

	tasks:
		- name: Cập nhật apt cache
			apt:
				update_cache: yes
				cache_valid_time: 3600

		- name: Cài đặt Nginx
			apt:
				name: "{{ nginx_pkg }}"
				state: present
			notify: Restart nginx

		- name: Đảm bảo service Nginx đang chạy và enable
			systemd:
				name: nginx
				state: started
				enabled: true

		- name: Tạo trang index demo
			copy:
				dest: /var/www/html/index.html
				content: |
					<h1>Ansible Deploy OK - {{ inventory_hostname }}</h1>
			notify: Reload nginx

	handlers:
		- name: Restart nginx
			systemd:
				name: nginx
				state: restarted

		- name: Reload nginx
			systemd:
				name: nginx
				state: reloaded
~~~

Chạy playbook:

~~~bash
ansible-playbook playbooks/bootstrap-web.yml
~~~

Test từ local:

~~~bash
curl http://10.10.10.21
curl http://10.10.10.22
~~~

## 9. Idempotent, check mode, diff mode (3 kỹ thuật bắt buộc)

### Idempotent

Playbook chạy lần 2 không được thay đổi hệ thống nếu đã đúng trạng thái.

### Check mode

~~~bash
ansible-playbook playbooks/bootstrap-web.yml --check
~~~

### Diff mode

~~~bash
ansible-playbook playbooks/bootstrap-web.yml --diff
~~~

Nếu team bạn chưa có check/diff trong pipeline, đó là lỗ hổng chất lượng rất dễ gặp.

## 10. Dùng tags để chạy đúng phần cần thiết

Thêm tag trong task:

~~~yaml
		- name: Cài đặt Nginx
			apt:
				name: "{{ nginx_pkg }}"
				state: present
			tags: ["nginx", "packages"]
~~~

Chạy theo tag:

~~~bash
ansible-playbook playbooks/bootstrap-web.yml --tags nginx
~~~

## 11. Tách biến theo môi trường với group_vars

`group_vars/web.yml`

~~~yaml
nginx_pkg: nginx
app_port: 8080
~~~

Khi lên production, bạn có thể tạo `inventories/prod/group_vars/web.yml` với biến riêng, không sửa playbook gốc.

## 12. Bảo mật bí mật bằng Ansible Vault

Tạo file secrets:

~~~bash
ansible-vault create group_vars/all/vault.yml
~~~

Ví dụ nội dung:

~~~yaml
vault_db_password: "SuperStrongPassword@2026"
vault_api_token: "replace_me"
~~~

Chạy playbook với vault:

~~~bash
ansible-playbook playbooks/bootstrap-web.yml --ask-vault-pass
~~~

Trong CI, nên dùng `--vault-password-file` lấy từ secret manager thay vì nhập tay.

## 13. Chuyển sang Roles để mở rộng dự án

Tạo role:

~~~bash
ansible-galaxy init roles/nginx
~~~

Cấu trúc role giúp bạn tách:

- `tasks/main.yml`
- `handlers/main.yml`
- `templates/`
- `defaults/main.yml`

Khi dự án lớn dần, role là cách duy trì code "dễ test, dễ tái sử dụng, dễ review".

## 14. Workflow chuẩn cho team DevOps

Quy trình khuyến nghị:

1. Code playbook/role trên branch riêng.
2. Chạy `ansible-lint` + `yamllint`.
3. Chạy `--check --diff` trên staging.
4. Merge PR.
5. Deploy prod có giới hạn blast radius (serial, limit).

Lệnh hay dùng khi rollout an toàn:

~~~bash
ansible-playbook playbooks/bootstrap-web.yml --limit web-01
ansible-playbook playbooks/bootstrap-web.yml --limit web-02
~~~

## 15. Lỗi thường gặp và cách xử lý nhanh

- `UNREACHABLE!`: sai user, sai key, firewall chặn SSH.
- `FAILED! => sudo`: user không có sudo hoặc cần `become_password`.
- Python module error: server đích thiếu Python.
- Drift cấu hình: có thay đổi thủ công trên server, cần enforce lại bằng playbook.

Debug chi tiết hơn:

~~~bash
ansible-playbook playbooks/bootstrap-web.yml -vvv
~~~

## Tổng kết

Nếu bạn học DevOps nghiêm túc, Ansible là điểm bắt đầu rất hợp lý: dễ tiếp cận, dễ mở rộng, và rất thực dụng khi đi vào vận hành thực tế. Cẩm nang nhanh để nhớ:

- Dùng inventory + group_vars để tách môi trường.
- Viết playbook idempotent, có handler, có tag.
- Bảo mật secret bằng Vault.
- Chuẩn hóa theo role và đưa vào CI/CD.

Từ đây, bạn đã có nền tảng để tiến tới các bài thực chiến cao hơn như deploy Kubernetes component, hardening server, và patching hệ thống theo lịch.
