---
title: "Phần 18: Câu Điều Kiện (Conditional Sentences) – 3 Loại, Chiến Thuật Làm Bài & Bẫy TOEIC"
description: "Cẩm nang toàn diện về Câu Điều Kiện trong TOEIC: Phân biệt 3 loại, công thức ghi nhớ nhanh, đảo ngữ (bỏ IF), cấu trúc WISH và chiến thuật 3 bước chốt đáp án chỉ trong 2 giây."
pubDate: 2026-08-06
order: 18
category: "clause-patterns"
categoryLabel: "Mệnh Đề & Cấu Trúc Câu"
categoryIcon: "book"
categoryColor: "#2563eb"
---

<style>
/* ===== DESIGN SYSTEM & CUSTOM COMPONENTS ===== */
.lt-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.82rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 0.8rem;
}
.lt-badge.blue { background: rgba(37, 99, 235, 0.1); color: #2563eb; border: 1px solid rgba(37, 99, 235, 0.2); }
.lt-badge.emerald { background: rgba(5, 150, 105, 0.1); color: #059669; border: 1px solid rgba(5, 150, 105, 0.2); }
.lt-badge.purple { background: rgba(124, 58, 237, 0.1); color: #7c3aed; border: 1px solid rgba(124, 58, 237, 0.2); }
.lt-badge.amber { background: rgba(217, 119, 6, 0.1); color: #d97706; border: 1px solid rgba(217, 119, 6, 0.2); }
.lt-badge.rose { background: rgba(225, 29, 72, 0.1); color: #e11d48; border: 1px solid rgba(225, 29, 72, 0.2); }

/* Table Wrapper & Custom Tables */
.lt-table-wrapper {
  margin: 1.5rem 0;
  overflow-x: auto;
  border-radius: 16px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01);
  border: 1px solid #e2e8f0;
}
.lt-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  font-size: 0.93rem;
  background: #ffffff;
}
.lt-table thead th {
  padding: 14px 18px;
  font-weight: 800;
  text-align: left;
  color: #ffffff;
  letter-spacing: 0.02em;
}
.lt-table tbody td {
  padding: 12px 18px;
  border-bottom: 1px solid #f1f5f9;
  vertical-align: top;
  line-height: 1.6;
  color: #334155;
}
.lt-table tbody tr:last-child td { border-bottom: none; }
.lt-table tbody tr:hover { background: rgba(241, 245, 249, 0.7); }

.lt-table.gradient-blue thead th { background: linear-gradient(135deg, #1e40af, #3b82f6); }
.lt-table.gradient-emerald thead th { background: linear-gradient(135deg, #047857, #10b981); }
.lt-table.gradient-purple thead th { background: linear-gradient(135deg, #6d28d9, #8b5cf6); }

[data-theme='dark'] .lt-table-wrapper { border-color: #334155; }
[data-theme='dark'] .lt-table { background: #0f172a; }
[data-theme='dark'] .lt-table tbody td { color: #cbd5e1; border-bottom-color: #1e293b; }
[data-theme='dark'] .lt-table tbody tr:hover { background: rgba(30, 41, 59, 0.8); }

/* Callout Box */
.lt-box {
  padding: 1.25rem 1.5rem;
  border-radius: 14px;
  margin: 1.5rem 0;
  position: relative;
  border-left: 5px solid;
  box-shadow: 0 4px 12px rgba(0,0,0,0.03);
}
.lt-box.info { background: #f0f9ff; border-color: #0284c7; color: #0c4a6e; }
.lt-box.warning { background: #fffbeeb0; border-color: #f59e0b; color: #78350f; }
.lt-box.danger { background: #fef2f2; border-color: #ef4444; color: #7f1d1d; }
.lt-box.success { background: #f0fdf4; border-color: #10b981; color: #064e3b; }
.lt-box.purple { background: #faf5ff; border-color: #7c3aed; color: #3b0764; }

[data-theme='dark'] .lt-box.info { background: rgba(2, 132, 199, 0.15); color: #e0f2fe; }
[data-theme='dark'] .lt-box.warning { background: rgba(245, 158, 11, 0.15); color: #fef3c7; }
[data-theme='dark'] .lt-box.danger { background: rgba(239, 68, 68, 0.15); color: #fee2e2; }
[data-theme='dark'] .lt-box.success { background: rgba(16, 185, 129, 0.15); color: #d1fae5; }
[data-theme='dark'] .lt-box.purple { background: rgba(124, 58, 237, 0.15); color: #f3e8ff; }

/* Step Cards */
.lt-step-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  padding: 1.25rem 1.5rem;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.03);
}
.lt-step-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.08);
  border-color: #3b82f6;
}
.lt-step-header {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 800;
  font-size: 1.05rem;
  margin-bottom: 0.6rem;
  color: #1e293b;
}
.lt-step-num {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #3b82f6;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 0.9rem;
  flex-shrink: 0;
}
.lt-step-num.emerald { background: #10b981; }
.lt-step-num.purple { background: #7c3aed; }
[data-theme='dark'] .lt-step-card { background: #0f172a; border-color: #334155; }
[data-theme='dark'] .lt-step-header { color: #f8fafc; }

/* Type Cards */
.lt-type-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.25rem;
  margin: 1.5rem 0;
}
.lt-type-card {
  border-radius: 16px;
  padding: 1.5rem;
  border: 2px solid;
  transition: all 0.3s ease;
}
.lt-type-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 28px -8px rgba(0,0,0,0.12);
}
.lt-type-card.type1 { background: #eff6ff; border-color: #3b82f6; }
.lt-type-card.type2 { background: #fdf4ff; border-color: #a855f7; }
.lt-type-card.type3 { background: #fff7ed; border-color: #f97316; }
.lt-type-title { font-size: 1.1rem; font-weight: 900; margin-bottom: 0.5rem; }
.lt-type-card.type1 .lt-type-title { color: #1d4ed8; }
.lt-type-card.type2 .lt-type-title { color: #7e22ce; }
.lt-type-card.type3 .lt-type-title { color: #c2410c; }
.lt-type-tag {
  display: inline-block;
  padding: 2px 10px;
  border-radius: 20px;
  font-size: 0.78rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
}
.lt-type-card.type1 .lt-type-tag { background: rgba(59, 130, 246, 0.15); color: #1d4ed8; }
.lt-type-card.type2 .lt-type-tag { background: rgba(168, 85, 247, 0.15); color: #7e22ce; }
.lt-type-card.type3 .lt-type-tag { background: rgba(249, 115, 22, 0.15); color: #c2410c; }
.lt-type-formula {
  font-family: monospace;
  font-size: 0.88rem;
  padding: 0.5rem 0.8rem;
  border-radius: 8px;
  margin: 0.5rem 0;
  font-weight: 700;
}
.lt-type-card.type1 .lt-type-formula { background: rgba(59, 130, 246, 0.1); color: #1e3a8a; }
.lt-type-card.type2 .lt-type-formula { background: rgba(168, 85, 247, 0.1); color: #581c87; }
.lt-type-card.type3 .lt-type-formula { background: rgba(249, 115, 22, 0.1); color: #7c2d12; }
[data-theme='dark'] .lt-type-card.type1 { background: rgba(59, 130, 246, 0.1); }
[data-theme='dark'] .lt-type-card.type2 { background: rgba(168, 85, 247, 0.1); }
[data-theme='dark'] .lt-type-card.type3 { background: rgba(249, 115, 22, 0.1); }
[data-theme='dark'] .lt-type-card.type1 .lt-type-title { color: #93c5fd; }
[data-theme='dark'] .lt-type-card.type2 .lt-type-title { color: #d8b4fe; }
[data-theme='dark'] .lt-type-card.type3 .lt-type-title { color: #fdba74; }
[data-theme='dark'] .lt-type-card.type1 .lt-type-formula { background: rgba(59,130,246,0.2); color: #bfdbfe; }
[data-theme='dark'] .lt-type-card.type2 .lt-type-formula { background: rgba(168,85,247,0.2); color: #e9d5ff; }
[data-theme='dark'] .lt-type-card.type3 .lt-type-formula { background: rgba(249,115,22,0.2); color: #fed7aa; }

/* Cheat Sheet */
.lt-cheat {
  background: linear-gradient(135deg, #1e1b4b, #312e81);
  border-radius: 16px;
  padding: 1.5rem 2rem;
  margin: 1.5rem 0;
  color: #e0e7ff;
}
.lt-cheat h4 { color: #a5b4fc; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 1rem; margin-top: 0; }
.lt-cheat-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.6rem 0;
  border-bottom: 1px solid rgba(255,255,255,0.07);
  font-size: 0.9rem;
}
.lt-cheat-row:last-child { border-bottom: none; }
.lt-cheat-label {
  flex-shrink: 0;
  padding: 3px 12px;
  border-radius: 20px;
  font-weight: 800;
  font-size: 0.78rem;
}
.lt-cheat-label.l1 { background: #3b82f6; color: white; }
.lt-cheat-label.l2 { background: #a855f7; color: white; }
.lt-cheat-label.l3 { background: #f97316; color: white; }
.lt-cheat-formula { font-family: monospace; color: #f0abfc; font-weight: 600; flex: 1; }
.lt-cheat-note { color: #94a3b8; font-size: 0.83rem; }

/* Practice */
.lt-practice {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 1.5rem;
  margin: 1.5rem 0;
}
.lt-practice-title {
  font-weight: 900;
  font-size: 1.05rem;
  color: #1e293b;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 8px;
}
.lt-q {
  margin-bottom: 1.2rem;
  padding: 1rem 1.2rem;
  background: white;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
}
.lt-q-text { font-size: 0.95rem; color: #1e293b; margin-bottom: 0.6rem; font-weight: 600; line-height: 1.7; }
.lt-q-opts { display: flex; flex-wrap: wrap; gap: 0.5rem; }
.lt-q-opt {
  padding: 4px 14px;
  border-radius: 20px;
  font-size: 0.85rem;
  border: 1px solid #e2e8f0;
  color: #475569;
}
.lt-q-opt.correct { background: #dcfce7; border-color: #22c55e; color: #166534; font-weight: 700; }
.lt-q-opt.wrong { background: #fee2e2; border-color: #ef4444; color: #991b1b; }
.lt-q-explain { margin-top: 0.7rem; font-size: 0.88rem; color: #475569; background: #f1f5f9; padding: 0.6rem 0.9rem; border-radius: 8px; }
[data-theme='dark'] .lt-practice { background: #0f172a; border-color: #334155; }
[data-theme='dark'] .lt-practice-title { color: #f8fafc; }
[data-theme='dark'] .lt-q { background: #1e293b; border-color: #334155; }
[data-theme='dark'] .lt-q-text { color: #f1f5f9; }
[data-theme='dark'] .lt-q-opt { color: #94a3b8; border-color: #475569; }
[data-theme='dark'] .lt-q-opt.correct { background: rgba(34,197,94,0.15); color: #86efac; border-color: #22c55e; }
[data-theme='dark'] .lt-q-opt.wrong { background: rgba(239,68,68,0.15); color: #fca5a5; border-color: #ef4444; }
[data-theme='dark'] .lt-q-explain { background: #0f172a; color: #94a3b8; }
</style>

## 🎯 Mục tiêu bài học

Sau khi học xong bài này, bạn sẽ:

1. **Phân biệt chính xác 3 loại câu điều kiện** và biết chọn đúng động từ ở cả hai mệnh đề.
2. **Nắm vững chiến thuật "nhìn mệnh đề chính → chọn mệnh đề IF"** để làm bài Part 5 trong 2 giây.
3. **Xử lý thành thạo 2 dạng đặc biệt**: Đảo ngữ (bỏ IF) và cấu trúc WISH.
4. **Nhận diện và né 3 bẫy điển hình** mà đề TOEIC hay đặt ra với câu điều kiện.

---

## 1. Khái Niệm Câu Điều Kiện

<span class="lt-badge blue">Lý thuyết nền tảng</span>

<div class="lt-box info">
  💡 <strong>Câu điều kiện là câu có 2 vế:</strong><br>
  &nbsp;&nbsp;• <strong>Mệnh đề IF (Giả định):</strong> Nêu điều kiện / tình huống giả định.<br>
  &nbsp;&nbsp;• <strong>Mệnh đề CHÍNH (Kết quả):</strong> Nêu kết quả xảy ra nếu điều kiện được thỏa mãn.<br><br>
  ✅ Chỉ cần biết thì của <strong>1 vế</strong>, bạn suy ra được vế còn lại!
</div>

---

## 2. Ba Loại Câu Điều Kiện (Công Thức Đầy Đủ)

<span class="lt-badge blue">Công thức cốt lõi</span>

<div class="lt-type-grid">
  <div class="lt-type-card type1">
    <div class="lt-type-tag">Loại 1 – Có thể xảy ra</div>
    <div class="lt-type-title">Điều Kiện Thật Ở Tương Lai</div>
    <p style="font-size:0.9rem;color:#1e40af;margin:0.4rem 0 0.8rem">Tình huống <strong>CÓ THỂ xảy ra</strong> ở hiện tại hoặc tương lai.</p>
    <div class="lt-type-formula">IF + Hiện tại đơn (V/V-s/es)</div>
    <div style="text-align:center;font-size:1rem;margin:0.2rem 0;opacity:0.5">+</div>
    <div class="lt-type-formula">Will / Can / May + V-nguyên thể</div>
    <hr style="border:none;border-top:1px solid rgba(59,130,246,0.2);margin:0.8rem 0">
    <p style="font-size:0.88rem;color:#374151;margin:0">📌 <em>If it <strong>rains</strong>, I <strong>will stay</strong> home.</em><br>(Nếu trời mưa, tôi sẽ ở nhà.)</p>
  </div>

  <div class="lt-type-card type2">
    <div class="lt-type-tag">Loại 2 – Không có thật ở hiện tại</div>
    <div class="lt-type-title">Điều Kiện Giả Định Hiện Tại</div>
    <p style="font-size:0.9rem;color:#6b21a8;margin:0.4rem 0 0.8rem">Tình huống <strong>KHÔNG có thật</strong> ở hiện tại (ước muốn, giả thiết ngược thực tế).</p>
    <div class="lt-type-formula">IF + Quá khứ đơn (V2/ed / Were)</div>
    <div style="text-align:center;font-size:1rem;margin:0.2rem 0;opacity:0.5">+</div>
    <div class="lt-type-formula">Would / Could / Might + V-nguyên thể</div>
    <hr style="border:none;border-top:1px solid rgba(168,85,247,0.2);margin:0.8rem 0">
    <p style="font-size:0.88rem;color:#374151;margin:0">📌 <em>If I <strong>were</strong> rich, I <strong>would travel</strong> the world.</em><br>(Nếu tôi giàu, tôi đã đi du lịch khắp nơi.)</p>
  </div>

  <div class="lt-type-card type3">
    <div class="lt-type-tag">Loại 3 – Không có thật ở quá khứ</div>
    <div class="lt-type-title">Điều Kiện Giả Định Quá Khứ</div>
    <p style="font-size:0.9rem;color:#9a3412;margin:0.4rem 0 0.8rem">Tình huống đã <strong>KHÔNG xảy ra trong quá khứ</strong>. Hối hận / tiếc nuối về điều đã rồi.</p>
    <div class="lt-type-formula">IF + Had + V3/ed (Quá khứ hoàn thành)</div>
    <div style="text-align:center;font-size:1rem;margin:0.2rem 0;opacity:0.5">+</div>
    <div class="lt-type-formula">Would / Could / Might + have + V3/ed</div>
    <hr style="border:none;border-top:1px solid rgba(249,115,22,0.2);margin:0.8rem 0">
    <p style="font-size:0.88rem;color:#374151;margin:0">📌 <em>If I <strong>had studied</strong> harder, I <strong>would have passed</strong>.</em><br>(Nếu tôi học chăm hơn, tôi đã đậu rồi.)</p>
  </div>
</div>

---

## 3. Bảng So Sánh Tổng Hợp

<span class="lt-badge emerald">Cheat Sheet – Học 1 lần, nhớ mãi mãi</span>

<div class="lt-table-wrapper">
  <table class="lt-table gradient-blue">
    <thead>
      <tr>
        <th>Loại</th>
        <th>Ý nghĩa</th>
        <th>Mệnh đề IF</th>
        <th>Mệnh đề CHÍNH</th>
        <th>Ví dụ TOEIC</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong style="color:#2563eb">Loại 1</strong><br><small>Có thể xảy ra</small></td>
        <td>Tình huống <strong>có thể xảy ra</strong> ở hiện tại/tương lai</td>
        <td><strong>Hiện tại đơn</strong><br><code>V / V-s/es</code></td>
        <td><strong>Will / Can / May</strong><br><code>+ V-nguyên thể</code></td>
        <td><em>If the order <strong>arrives</strong> today, we <strong>will ship</strong> it immediately.</em></td>
      </tr>
      <tr>
        <td><strong style="color:#7c3aed">Loại 2</strong><br><small>Không có thật<br>ở hiện tại</small></td>
        <td>KHÔNG có thật ở <strong>hiện tại</strong></td>
        <td><strong>Quá khứ đơn</strong><br><code>V2/ed / Were</code></td>
        <td><strong>Would / Could / Might</strong><br><code>+ V-nguyên thể</code></td>
        <td><em>If the CEO <strong>were</strong> here, he <strong>would sign</strong> the contract.</em></td>
      </tr>
      <tr>
        <td><strong style="color:#ea580c">Loại 3</strong><br><small>Không có thật<br>ở quá khứ</small></td>
        <td>KHÔNG xảy ra trong <strong>quá khứ</strong></td>
        <td><strong>Quá khứ hoàn thành</strong><br><code>Had + V3/ed</code></td>
        <td><strong>Would / Could / Might</strong><br><code>+ have + V3/ed</code></td>
        <td><em>If the team <strong>had met</strong> the deadline, they <strong>would have received</strong> the bonus.</em></td>
      </tr>
    </tbody>
  </table>
</div>

---

## 4. Chiến Thuật Làm Bài TOEIC (3 Bước Thần Tốc)

<span class="lt-badge purple">Quy trình thực chiến</span>

<div class="lt-box success">
  🔑 <strong>BÍ QUYẾT VÀNG:</strong> Nhìn vào <strong>mệnh đề CHÍNH</strong> (kết quả) trước → xác định loại → suy ra mệnh đề IF cần điền.
</div>

<div class="lt-step-card">
  <div class="lt-step-header">
    <div class="lt-step-num">1</div>
    <span>Bước 1: Nhìn mệnh đề CHÍNH — xác định "tín hiệu" modal</span>
  </div>
  <ul>
    <li>Thấy <strong>will / can / may + V</strong> ở mệnh đề chính → Chọn <strong>Hiện tại đơn</strong> cho mệnh đề IF → (Loại 1)</li>
    <li>Thấy <strong>would / could / might + V</strong> ở mệnh đề chính → Chọn <strong>Quá khứ đơn</strong> cho mệnh đề IF → (Loại 2)</li>
    <li>Thấy <strong>would / could / might + have + V3</strong> ở mệnh đề chính → Chọn <strong>Had + V3/ed</strong> cho mệnh đề IF → (Loại 3)</li>
  </ul>
</div>

<div class="lt-step-card">
  <div class="lt-step-header">
    <div class="lt-step-num emerald">2</div>
    <span>Bước 2: Lưu ý đặc biệt với "WERE" trong Loại 2</span>
  </div>
  <div class="lt-box warning" style="margin:0.5rem 0 0">
    ⚠️ <strong>Lưu ý chữ "WERE":</strong> Trong câu điều kiện loại 2, bất kể chủ ngữ là <em>I, he, she, it</em>, chúng ta đều <strong>ưu tiên dùng WERE</strong> — đây là dấu hiệu nhận biết đặc trưng của loại 2.<br><br>
    &nbsp;&nbsp;✅ <em>If I <strong>were</strong> the manager, I would change this policy.</em><br>
    &nbsp;&nbsp;❌ <em>If I <strong>was</strong> the manager...</em> (sai trong văn viết trang trọng / TOEIC)
  </div>
</div>

<div class="lt-step-card">
  <div class="lt-step-header">
    <div class="lt-step-num purple">3</div>
    <span>Bước 3: Thay thế "Unless" = "If... not" để kiểm tra</span>
  </div>
  <ul>
    <li><strong>Unless</strong> = <strong>If... not</strong> (Trừ khi / Nếu không)</li>
    <li>Khi làm bài, hãy thử thay <em>"Unless"</em> bằng <em>"If... not"</em> để dịch nghĩa và kiểm tra xem hợp lý không.</li>
  </ul>
  <div class="lt-box info" style="margin:0.5rem 0 0">
    📌 <em><strong>Unless</strong> you confirm the order, we <strong>will cancel</strong> it.</em><br>
    = <em>If you <strong>do not confirm</strong> the order, we <strong>will cancel</strong> it.</em><br>
    (Trừ khi bạn xác nhận đơn hàng, chúng tôi sẽ huỷ nó.)
  </div>
</div>

---

## 5. Bảng Công Thức Nhanh – Chỉ Cần Nhớ Bảng Này!

<div class="lt-cheat">
  <h4>BẢNG TỔNG HỢP CÔNG THỨC NHANH</h4>
  <div class="lt-cheat-row">
    <span class="lt-cheat-label l1">Loại 1</span>
    <span class="lt-cheat-formula">IF + V1 (s/es) → will + V</span>
    <span class="lt-cheat-note">Có thể xảy ra</span>
  </div>
  <div class="lt-cheat-row">
    <span class="lt-cheat-label l2">Loại 2</span>
    <span class="lt-cheat-formula">IF + V2/ed (were) → would + V</span>
    <span class="lt-cheat-note">Không có thật hiện tại</span>
  </div>
  <div class="lt-cheat-row">
    <span class="lt-cheat-label l3">Loại 3</span>
    <span class="lt-cheat-formula">IF + had + V3 → would have + V3</span>
    <span class="lt-cheat-note">Không có thật quá khứ</span>
  </div>
</div>

---

## 6. Các Trường Hợp Đặc Biệt (Nâng Cao – Hay Ra TOEIC)

<span class="lt-badge rose">Chủ điểm nâng cao</span>

### 6.1 Đảo Ngữ (Bỏ IF – Inversion)

<div class="lt-box purple">
  🔄 <strong>Khi nào dùng đảo ngữ?</strong><br>
  Trong văn viết trang trọng (formal writing), người ta có thể <strong>bỏ từ IF</strong> và đảo động từ lên trước chủ ngữ. TOEIC hay ra dạng này để đánh lừa!
</div>

<div class="lt-table-wrapper">
  <table class="lt-table gradient-purple">
    <thead>
      <tr>
        <th>Loại</th>
        <th>Câu điều kiện thường (có IF)</th>
        <th>Dạng Đảo Ngữ (Bỏ IF)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Loại 1</strong></td>
        <td><em>If you <strong>need</strong> any help...</em></td>
        <td><em><strong>Should</strong> you need any help, please contact us.</em></td>
      </tr>
      <tr>
        <td><strong>Loại 2</strong></td>
        <td><em>If I <strong>were</strong> you...</em></td>
        <td><em><strong>Were</strong> I you, I would reconsider.</em></td>
      </tr>
      <tr>
        <td><strong>Loại 3</strong></td>
        <td><em>If I <strong>had known</strong> the truth...</em></td>
        <td><em><strong>Had</strong> I known the truth, I would have acted differently.</em></td>
      </tr>
    </tbody>
  </table>
</div>

<div class="lt-box info">
  💡 <strong>Công thức Đảo Ngữ theo loại:</strong><br>
  &nbsp;&nbsp;• Loại 1: <strong>Should + S + V-inf</strong> (...)<br>
  &nbsp;&nbsp;• Loại 2: <strong>Were + S</strong> (...)<br>
  &nbsp;&nbsp;• Loại 3: <strong>Had + S + V3/ed</strong> (...)
</div>

---

### 6.2 Cấu Trúc WISH (Ước Muốn)

<div class="lt-box success">
  🌟 <strong>WISH</strong> diễn đạt ước muốn về những điều <strong>KHÔNG có thật</strong> hoặc <strong>KHÔNG thể xảy ra</strong>. Công thức của WISH gần giống câu điều kiện loại 2 và 3.
</div>

<div class="lt-table-wrapper">
  <table class="lt-table gradient-emerald">
    <thead>
      <tr>
        <th>Diễn đạt</th>
        <th>Công thức</th>
        <th>Ví dụ</th>
        <th>Dịch nghĩa</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Ước hiện tại</strong><br>(Muốn điều ĐANG không có thật)</td>
        <td><code>Wish + Quá khứ đơn</code><br>(were / V2/ed)</td>
        <td><em>I wish I <strong>had</strong> a car.</em></td>
        <td>Ước gì tôi có chiếc ô tô. (thực ra không có)</td>
      </tr>
      <tr>
        <td><strong>Ước quá khứ</strong><br>(Muốn điều ĐÃ không xảy ra)</td>
        <td><code>Wish + Quá khứ hoàn thành</code><br>(had + V3/ed)</td>
        <td><em>I wish I <strong>had gone</strong> to the meeting.</em></td>
        <td>Ước gì tôi đã tham dự cuộc họp. (thực ra không đi)</td>
      </tr>
    </tbody>
  </table>
</div>

---

## 7. Các "Bẫy Kinh Điển" Cần Tránh Khi Làm Bài

<span class="lt-badge amber">Cảnh báo bẫy thi</span>

<div class="lt-box danger">
  🚫 <strong>BẪY 1: Nhầm lẫn "will" trong mệnh đề IF</strong><br>
  Đây là bẫy phổ biến nhất! Trong câu điều kiện loại 1, mệnh đề IF <strong>KHÔNG BAO GIỜ</strong> dùng <em>will</em>.<br><br>
  &nbsp;&nbsp;❌ <em>If it <strong>will rain</strong>, I will stay home.</em><br>
  &nbsp;&nbsp;✅ <em>If it <strong>rains</strong>, I will stay home.</em>
</div>

<div class="lt-box warning">
  ⚠️ <strong>BẪY 2: Chọn sai "was" thay vì "were" ở Loại 2</strong><br>
  Đề TOEIC thường đặt <em>"was"</em> làm đáp án nhiễu cho câu điều kiện loại 2 với chủ ngữ ngôi 1 hoặc ngôi 3 số ít.<br><br>
  &nbsp;&nbsp;❌ <em>If she <strong>was</strong> the director, she would approve it.</em><br>
  &nbsp;&nbsp;✅ <em>If she <strong>were</strong> the director, she would approve it.</em>
</div>

<div class="lt-box success">
  💡 <strong>BẪY 3: Nhầm "would have + V3" với "would + V"</strong><br>
  Khi thấy mệnh đề IF dùng <em>had + V3</em> → bắt buộc mệnh đề chính phải dùng <strong>would/could/might + have + V3</strong>, KHÔNG được dùng <em>would + V</em>.<br><br>
  &nbsp;&nbsp;❌ <em>If he had called, I <strong>would answer</strong>.</em><br>
  &nbsp;&nbsp;✅ <em>If he had called, I <strong>would have answered</strong>.</em>
</div>

---

## 8. Luyện Tập – Practice Part 5 TOEIC

<span class="lt-badge purple">Thực chiến Part 5</span>

<div class="lt-practice">
  <div class="lt-practice-title">Bài Tập Có Giải Thích Chi Tiết</div>

  <div class="lt-q">
    <div class="lt-q-text">1. If the client _______ satisfied with the proposal, she will sign the contract today.</div>
    <div class="lt-q-opts">
      <span class="lt-q-opt correct">(A) is</span>
      <span class="lt-q-opt wrong">(B) will be</span>
      <span class="lt-q-opt wrong">(C) were</span>
      <span class="lt-q-opt wrong">(D) had been</span>
    </div>
    <div class="lt-q-explain">✅ <strong>Đáp án: (A) is</strong> — Mệnh đề chính dùng <em>"will sign"</em> → Câu điều kiện <strong>Loại 1</strong> → Mệnh đề IF dùng <strong>Hiện tại đơn</strong> → Chọn <strong>"is"</strong>.</div>
  </div>

  <div class="lt-q">
    <div class="lt-q-text">2. If the company _______ more resources, it could expand its operations overseas.</div>
    <div class="lt-q-opts">
      <span class="lt-q-opt wrong">(A) has</span>
      <span class="lt-q-opt wrong">(B) will have</span>
      <span class="lt-q-opt correct">(C) had</span>
      <span class="lt-q-opt wrong">(D) had had</span>
    </div>
    <div class="lt-q-explain">✅ <strong>Đáp án: (C) had</strong> — Mệnh đề chính dùng <em>"could expand"</em> (would/could + V) → Câu điều kiện <strong>Loại 2</strong> → Mệnh đề IF dùng <strong>Quá khứ đơn</strong> → Chọn <strong>"had"</strong>.</div>
  </div>

  <div class="lt-q">
    <div class="lt-q-text">3. If the team _______ the deadline last month, they would have received a bonus.</div>
    <div class="lt-q-opts">
      <span class="lt-q-opt wrong">(A) meets</span>
      <span class="lt-q-opt wrong">(B) met</span>
      <span class="lt-q-opt wrong">(C) would meet</span>
      <span class="lt-q-opt correct">(D) had met</span>
    </div>
    <div class="lt-q-explain">✅ <strong>Đáp án: (D) had met</strong> — Mệnh đề chính dùng <em>"would have received"</em> (would + have + V3) → Câu điều kiện <strong>Loại 3</strong> → Mệnh đề IF dùng <strong>Had + V3</strong> → Chọn <strong>"had met"</strong>.</div>
  </div>

  <div class="lt-q">
    <div class="lt-q-text">4. _______ you have any questions about the new policy, please contact the HR department.</div>
    <div class="lt-q-opts">
      <span class="lt-q-opt wrong">(A) If</span>
      <span class="lt-q-opt correct">(B) Should</span>
      <span class="lt-q-opt wrong">(C) Were</span>
      <span class="lt-q-opt wrong">(D) Had</span>
    </div>
    <div class="lt-q-explain">✅ <strong>Đáp án: (B) Should</strong> — Câu không có <em>IF</em>, cấu trúc <em>"_______ you have..."</em> → Đây là dạng <strong>Đảo Ngữ Loại 1</strong>: <strong>Should + S + V-inf</strong>. Dịch: "Nếu bạn có bất kỳ câu hỏi nào, xin hãy liên hệ phòng Nhân sự."</div>
  </div>

  <div class="lt-q">
    <div class="lt-q-text">5. I wish I _______ to the conference last year. It would have been a great opportunity.</div>
    <div class="lt-q-opts">
      <span class="lt-q-opt wrong">(A) go</span>
      <span class="lt-q-opt wrong">(B) went</span>
      <span class="lt-q-opt correct">(C) had gone</span>
      <span class="lt-q-opt wrong">(D) have gone</span>
    </div>
    <div class="lt-q-explain">✅ <strong>Đáp án: (C) had gone</strong> — Cấu trúc <strong>WISH</strong> diễn đạt ước muốn về <strong>quá khứ</strong> (thực ra đã không đi) → <strong>Wish + Had + V3/ed</strong> → Chọn <strong>"had gone"</strong>.</div>
  </div>

  <div class="lt-q">
    <div class="lt-q-text">6. Unless the manager _______ the budget report by Friday, the project will be delayed.</div>
    <div class="lt-q-opts">
      <span class="lt-q-opt correct">(A) approves</span>
      <span class="lt-q-opt wrong">(B) will approve</span>
      <span class="lt-q-opt wrong">(C) approved</span>
      <span class="lt-q-opt wrong">(D) would approve</span>
    </div>
    <div class="lt-q-explain">✅ <strong>Đáp án: (A) approves</strong> — <strong>Unless = If... not</strong>. Câu này = <em>"If the manager does not approve..."</em>. Mệnh đề chính dùng <em>"will be delayed"</em> → Loại 1 → Dùng <strong>Hiện tại đơn</strong> → Chọn <strong>"approves"</strong>.</div>
  </div>
</div>

---

## 9. Tóm Tắt Siêu Tốc – Nhớ 3 Điều Này Là Đủ!

<div class="lt-box success">
  <strong>3 ĐIỀU VÀNG ĐỂ CHINH PHỤC CÂU ĐIỀU KIỆN TOEIC:</strong>
  <ol style="margin-top:0.8rem;margin-bottom:0">
    <li style="margin-bottom:0.5rem"><strong>Nhìn mệnh đề CHÍNH trước</strong> → Thấy <em>will+V</em> → Loại 1 | Thấy <em>would+V</em> → Loại 2 | Thấy <em>would+have+V3</em> → Loại 3.</li>
    <li style="margin-bottom:0.5rem"><strong>Loại 2 luôn dùng WERE</strong> dù chủ ngữ là I / he / she / it. Ví dụ: <em>If she <strong>were</strong>...</em></li>
    <li><strong>Đảo ngữ:</strong> Should (Loại 1) | Were (Loại 2) | Had (Loại 3) — bỏ IF, đảo trợ động từ lên đầu câu.</li>
  </ol>
</div>
