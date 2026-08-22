---
title: "Hòa Hợp Chủ Ngữ & Động Từ (Subject–Verb Agreement) – 8 Quy Tắc Vàng & Chiến Thuật Bắt Bẫy TOEIC"
description: "Tổng hợp toàn bộ quy tắc hòa hợp S–V trong TOEIC: danh từ đếm được/không đếm được, cụm từ nối, đại từ bất định, the number of / a number of, V-ing làm chủ ngữ, đảo ngữ, và 15 câu luyện tập có giải thích chi tiết."
pubDate: 2026-08-23
order: 22
category: "grammar"
categoryLabel: "Ngữ Pháp"
categoryIcon: "🔗"
categoryColor: "#7c3aed"
---

<style>
/* ===== DESIGN SYSTEM – HÒA HỢP S–V ===== */
.sv-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 14px;
  border-radius: 20px;
  font-size: 0.82rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.9rem;
}
.sv-badge.violet { background: rgba(124,58,237,0.1);  color: #7c3aed; border: 1px solid rgba(124,58,237,0.25); }
.sv-badge.sky    { background: rgba(3,105,161,0.1);   color: #0369a1; border: 1px solid rgba(3,105,161,0.25); }
.sv-badge.teal   { background: rgba(13,148,136,0.1);  color: #0d9488; border: 1px solid rgba(13,148,136,0.25); }
.sv-badge.rose   { background: rgba(225,29,72,0.1);   color: #e11d48; border: 1px solid rgba(225,29,72,0.25); }
.sv-badge.amber  { background: rgba(180,83,9,0.1);    color: #b45309; border: 1px solid rgba(180,83,9,0.25); }
.sv-badge.emerald{ background: rgba(5,150,105,0.1);   color: #059669; border: 1px solid rgba(5,150,105,0.25); }

/* ===== TABLE ===== */
.sv-table-wrapper {
  margin: 1.5rem 0;
  overflow-x: auto;
  border-radius: 16px;
  box-shadow: 0 10px 25px -5px rgba(0,0,0,0.06), 0 4px 10px -3px rgba(0,0,0,0.03);
  border: 1px solid #e2e8f0;
}
.sv-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  font-size: 0.93rem;
  background: #ffffff;
}
.sv-table thead th {
  padding: 14px 18px;
  font-weight: 800;
  text-align: left;
  color: #ffffff;
  letter-spacing: 0.03em;
}
.sv-table tbody td {
  padding: 12px 18px;
  border-bottom: 1px solid #f1f5f9;
  vertical-align: top;
  line-height: 1.65;
  color: #334155;
}
.sv-table tbody tr:last-child td { border-bottom: none; }
.sv-table tbody tr:hover { background: rgba(241,245,249,0.7); }

.sv-table.g-violet thead th { background: linear-gradient(135deg, #5b21b6, #8b5cf6); }
.sv-table.g-sky    thead th { background: linear-gradient(135deg, #075985, #0ea5e9); }
.sv-table.g-teal   thead th { background: linear-gradient(135deg, #0f766e, #14b8a6); }
.sv-table.g-rose   thead th { background: linear-gradient(135deg, #9f1239, #f43f5e); }
.sv-table.g-amber  thead th { background: linear-gradient(135deg, #92400e, #f59e0b); }
.sv-table.g-emerald thead th { background: linear-gradient(135deg, #065f46, #10b981); }

[data-theme='dark'] .sv-table-wrapper { border-color: #334155; }
[data-theme='dark'] .sv-table { background: #0f172a; }
[data-theme='dark'] .sv-table tbody td { color: #cbd5e1; border-bottom-color: #1e293b; }
[data-theme='dark'] .sv-table tbody tr:hover { background: rgba(30,41,59,0.8); }

/* ===== CALLOUT BOXES ===== */
.sv-box {
  padding: 1.2rem 1.5rem;
  border-radius: 14px;
  margin: 1.4rem 0;
  border-left: 5px solid;
  box-shadow: 0 4px 12px rgba(0,0,0,0.03);
  line-height: 1.7;
}
.sv-box.info    { background: #f0f9ff;  border-color: #0284c7; color: #0c4a6e; }
.sv-box.warn    { background: #fffbeb;  border-color: #f59e0b; color: #78350f; }
.sv-box.danger  { background: #fef2f2;  border-color: #ef4444; color: #7f1d1d; }
.sv-box.success { background: #f0fdf4;  border-color: #10b981; color: #064e3b; }
.sv-box.purple  { background: #f5f3ff;  border-color: #7c3aed; color: #4c1d95; }

[data-theme='dark'] .sv-box.info    { background: rgba(2,132,199,0.15);   color: #e0f2fe; }
[data-theme='dark'] .sv-box.warn    { background: rgba(245,158,11,0.15);  color: #fef3c7; }
[data-theme='dark'] .sv-box.danger  { background: rgba(239,68,68,0.15);   color: #fee2e2; }
[data-theme='dark'] .sv-box.success { background: rgba(16,185,129,0.15);  color: #d1fae5; }
[data-theme='dark'] .sv-box.purple  { background: rgba(124,58,237,0.15);  color: #ede9fe; }

/* ===== STEP CARDS ===== */
.sv-step-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  padding: 1.2rem 1.5rem;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.03);
}
.sv-step-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px -5px rgba(0,0,0,0.09);
  border-color: #8b5cf6;
}
.sv-step-header {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 800;
  font-size: 1.05rem;
  margin-bottom: 0.6rem;
  color: #1e293b;
}
.sv-step-num {
  width: 32px; height: 32px;
  border-radius: 50%;
  background: linear-gradient(135deg, #5b21b6, #a78bfa);
  color: #fff;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.95rem; font-weight: 900;
  flex-shrink: 0;
}
[data-theme='dark'] .sv-step-card { background: #1e293b; border-color: #334155; }
[data-theme='dark'] .sv-step-header { color: #f8fafc; }

/* ===== FORMULA CARD ===== */
.sv-formula {
  display: flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(135deg, #4c1d95, #7c3aed);
  color: #fff;
  border-radius: 12px;
  padding: 1rem 1.4rem;
  font-size: 1rem;
  font-weight: 700;
  margin: 0.8rem 0;
  box-shadow: 0 8px 20px rgba(124,58,237,0.3);
  letter-spacing: 0.02em;
  flex-wrap: wrap;
}
.sv-formula span.sep { opacity: 0.5; font-weight: 400; font-size: 1.2rem; }

/* ===== SIGNAL WORD PILL ===== */
.pill {
  display: inline-block;
  padding: 2px 10px;
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 700;
  margin: 2px 2px;
}
.pill.sky    { background: #e0f2fe; color: #0369a1; }
.pill.rose   { background: #ffe4e6; color: #be123c; }
.pill.teal   { background: #ccfbf1; color: #0f766e; }
.pill.amber  { background: #fef3c7; color: #92400e; }
.pill.violet { background: #ede9fe; color: #5b21b6; }
.pill.emerald{ background: #d1fae5; color: #065f46; }

/* ===== QUIZ SECTION ===== */
.sv-quiz {
  background: #ffffff;
  border: 2px solid #e2e8f0;
  border-radius: 16px;
  padding: 1.4rem 1.6rem;
  margin: 1.2rem 0;
  counter-increment: quiz-counter;
  transition: all 0.3s ease;
}
.sv-quiz:hover {
  border-color: #8b5cf6;
  box-shadow: 0 8px 20px rgba(124,58,237,0.08);
}
.sv-quiz-q {
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #1e293b;
}
.sv-quiz-ans {
  margin-top: 0.8rem;
  padding: 0.8rem 1.2rem;
  background: #f0fdf4;
  border-radius: 10px;
  border-left: 4px solid #10b981;
  color: #064e3b;
  font-size: 0.92rem;
  line-height: 1.7;
}
.sv-quiz-ans strong { color: #059669; }

[data-theme='dark'] .sv-quiz { background: #1e293b; border-color: #334155; }
[data-theme='dark'] .sv-quiz-q { color: #f8fafc; }
[data-theme='dark'] .sv-quiz-ans { background: rgba(16,185,129,0.12); color: #d1fae5; }
[data-theme='dark'] .sv-quiz-ans strong { color: #34d399; }

/* ===== COMPARISON CARD ===== */
.sv-vs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin: 1.2rem 0;
}
.sv-vs-item {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  padding: 1.1rem 1.3rem;
  text-align: center;
  transition: all 0.3s ease;
}
.sv-vs-item:hover { transform: translateY(-2px); box-shadow: 0 8px 16px rgba(0,0,0,0.06); }
.sv-vs-item.singular { border-top: 4px solid #7c3aed; }
.sv-vs-item.plural   { border-top: 4px solid #0ea5e9; }
.sv-vs-label {
  font-weight: 900;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 0.4rem;
}
.sv-vs-item.singular .sv-vs-label { color: #7c3aed; }
.sv-vs-item.plural   .sv-vs-label { color: #0284c7; }

[data-theme='dark'] .sv-vs-item { background: #1e293b; border-color: #334155; }

@media (max-width: 640px) {
  .sv-vs { grid-template-columns: 1fr; }
  .sv-formula { font-size: 0.9rem; padding: 0.9rem 1.1rem; }
}
</style>

Trong đề thi **TOEIC Part 5**, dạng bài **Hòa hợp Chủ ngữ – Động từ (Subject–Verb Agreement)** xuất hiện đều đặn **2 – 5 câu mỗi đề**. Đây là dạng bẫy "kinh điển" — đề thi thường **xen cụm giới từ dài** giữa chủ ngữ và động từ để đánh lừa thí sinh chọn sai số ít / số nhiều.

Bài viết này tổng hợp **8 nhóm quy tắc — bảng tóm tắt nhanh — chiến thuật nhận dạng bẫy — và 15 câu luyện tập có giải thích chi tiết** để bạn tự tin chinh phục mọi câu hỏi dạng này!

---

## 🎯 Mục Tiêu Bài Học

<div class="sv-step-card">
  <div class="sv-step-header"><span class="sv-step-num">1</span> Nắm quy tắc nền tảng S–V</div>
  <div>Phân biệt rõ khi nào dùng <strong>động từ số ít</strong> (V-s/es, is, has, was) và khi nào dùng <strong>động từ số nhiều</strong> (V-nguyên thể, are, have, were).</div>
</div>

<div class="sv-step-card">
  <div class="sv-step-header"><span class="sv-step-num">2</span> Thuộc 8 nhóm quy tắc đặc biệt</div>
  <div>Ghi nhớ các trường hợp hay bị bẫy: <strong>Cụm từ nối</strong>, <strong>Đại từ bất định</strong>, <strong>Either/Neither</strong>, <strong>V-ing làm chủ ngữ</strong>, <strong>The number of / A number of</strong>, v.v.</div>
</div>

<div class="sv-step-card">
  <div class="sv-step-header"><span class="sv-step-num">3</span> Chiến thuật "gạch bỏ" tìm chủ ngữ thực</div>
  <div>Áp dụng mẹo <strong>gạch bỏ cụm giới từ</strong> (bắt đầu bằng <em>of, with, in, along with...</em>) để nhanh chóng xác định chủ ngữ chính trong câu dài.</div>
</div>

<div class="sv-step-card">
  <div class="sv-step-header"><span class="sv-step-num">4</span> Luyện tập 15 câu đa dạng</div>
  <div>Thực hành với các dạng bẫy thường gặp trong đề thi thật, kèm <strong>giải thích chi tiết</strong> từng câu để hiểu sâu logic chọn đáp án.</div>
</div>

---

## 1. QUY TẮC NỀN TẢNG

<span class="sv-badge violet">Bắt buộc nhớ</span>

> **Nguyên tắc vàng:** Động từ trong câu phải **hòa hợp** (agree) về số lượng với **chủ ngữ chính** — không phải danh từ gần nhất hay danh từ trong cụm giới từ.

<div class="sv-vs">
  <div class="sv-vs-item singular">
    <div class="sv-vs-label">🔹 Chủ ngữ SỐ ÍT</div>
    <div><strong>→ Động từ số ít</strong></div>
    <div style="font-size:0.88rem; margin-top:0.4rem; color:#64748b;">V + s/es &nbsp;|&nbsp; is &nbsp;|&nbsp; has &nbsp;|&nbsp; was</div>
  </div>
  <div class="sv-vs-item plural">
    <div class="sv-vs-label">🔸 Chủ ngữ SỐ NHIỀU</div>
    <div><strong>→ Động từ số nhiều</strong></div>
    <div style="font-size:0.88rem; margin-top:0.4rem; color:#64748b;">V nguyên thể &nbsp;|&nbsp; are &nbsp;|&nbsp; have &nbsp;|&nbsp; were</div>
  </div>
</div>

<div class="sv-box info">
  💡 <strong>Ví dụ đơn giản:</strong><br>
  • <em>The <strong>information</strong> <strong>is</strong> helpful.</em> → "information" = danh từ không đếm được → <strong>số ít</strong>.<br>
  • <em>The <strong>employees</strong> <strong>work</strong> hard.</em> → "employees" = danh từ số nhiều → <strong>số nhiều</strong>.
</div>

---

## 2. BẢNG TỔNG HỢP 8 NHÓM QUY TẮC

<span class="sv-badge sky">Bảng tra cứu nhanh</span>

<div class="sv-table-wrapper">
  <table class="sv-table g-violet">
    <thead>
      <tr>
        <th style="width:5%;">#</th>
        <th style="width:16%;">Nhóm</th>
        <th style="width:30%;">Quy Tắc (Chủ ngữ)</th>
        <th style="width:17%;">Động Từ (V)</th>
        <th style="width:32%;">Ví Dụ Minh Hoạ</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="2" style="font-weight:800; color:#7c3aed;">1</td>
        <td rowspan="2" style="font-weight:800;">Đếm được vs. Không đếm được</td>
        <td>Danh từ số ít / Danh từ không đếm được</td>
        <td><strong>Số ít</strong> (V-s/es / is / has)</td>
        <td><em>The <strong>information</strong> <strong>is</strong> helpful.</em></td>
      </tr>
      <tr>
        <td>Danh từ số nhiều (thường có -s/es)</td>
        <td><strong>Số nhiều</strong> (V-nguyên thể / are / have)</td>
        <td><em>The <strong>employees</strong> <strong>work</strong> hard.</em></td>
      </tr>
      <tr>
        <td rowspan="3" style="font-weight:800; color:#0369a1;">2</td>
        <td rowspan="3" style="font-weight:800;">Cụm từ nối</td>
        <td>N1 <strong>and</strong> N2 (2 đối tượng khác nhau)</td>
        <td><strong>Số nhiều</strong></td>
        <td><em><strong>Kate and her cat</strong> <strong>are</strong> playing.</em></td>
      </tr>
      <tr>
        <td>N1 <strong>or</strong> N2</td>
        <td><strong>Chia theo N2</strong> (N gần V nhất)</td>
        <td><em>Either the manager or the <strong>employees</strong> <strong>prepare</strong> the report.</em></td>
      </tr>
      <tr>
        <td>Each / Every / Either / Neither + N</td>
        <td><strong>Số ít</strong></td>
        <td><em>Each <strong>student</strong> <strong>has</strong> a book.</em></td>
      </tr>
      <tr>
        <td style="font-weight:800; color:#0d9488;">3</td>
        <td style="font-weight:800;">Đại từ bất định</td>
        <td>Someone, Everyone, Anything, Nobody...</td>
        <td><strong>Số ít</strong></td>
        <td><em><strong>Someone</strong> <strong>is</strong> calling you.</em></td>
      </tr>
      <tr>
        <td style="font-weight:800; color:#e11d48;">4</td>
        <td style="font-weight:800;">Khoảng cách (bẫy xen giữa)</td>
        <td>N1 + <strong>along with / as well as / together with</strong> + N2</td>
        <td><strong>Chia theo N1</strong></td>
        <td><em>The <strong>manager</strong>, as well as his staff, <strong>is</strong> here.</em></td>
      </tr>
      <tr>
        <td rowspan="2" style="font-weight:800; color:#b45309;">5</td>
        <td rowspan="2" style="font-weight:800;">Lựa chọn</td>
        <td><strong>Either N1 or N2 / Neither N1 nor N2</strong></td>
        <td><strong>Chia theo N2</strong> (N đứng gần V nhất)</td>
        <td><em>Neither Jane nor her <strong>friends</strong> <strong>are</strong> going.</em></td>
      </tr>
      <tr>
        <td><strong>Not only N1 but also N2</strong> (Không chỉ… mà còn…)</td>
        <td><strong>Chia theo N2</strong></td>
        <td><em>Not only the boss but also his <strong>assistants</strong> <strong>are</strong> at the meeting.</em></td>
      </tr>
      <tr>
        <td style="font-weight:800; color:#059669;">6</td>
        <td style="font-weight:800;">Đơn vị</td>
        <td>Tiền bạc, Thời gian, Khoảng cách, Trọng lượng (xem là 1 khối)</td>
        <td><strong>Số ít</strong></td>
        <td><em><strong>Ten dollars</strong> <strong>is</strong> too expensive.</em></td>
      </tr>
      <tr>
        <td style="font-weight:800; color:#7c3aed;">7</td>
        <td style="font-weight:800;">V-ing làm chủ ngữ</td>
        <td>Danh động từ (V-ing) đứng đầu câu</td>
        <td><strong>Số ít</strong></td>
        <td><em><strong>Playing</strong> badminton <strong>is</strong> my hobby.</em></td>
      </tr>
      <tr>
        <td rowspan="2" style="font-weight:800; color:#0369a1;">8</td>
        <td rowspan="2" style="font-weight:800;">The number of / A number of</td>
        <td><strong>The number of</strong> + N số nhiều</td>
        <td><strong>V số ít</strong> (Nghĩa: Con số của…)</td>
        <td><em>The number of employees <strong>is</strong> increasing.</em></td>
      </tr>
      <tr>
        <td><strong>A number of</strong> + N số nhiều</td>
        <td><strong>V số nhiều</strong> (Nghĩa: Nhiều…)</td>
        <td><em>A number of employees <strong>are</strong> taking leave.</em></td>
      </tr>
    </tbody>
  </table>
</div>

---

## 3. PHÂN TÍCH CHI TIẾT TỪNG NHÓM

### 📌 Nhóm 1: Đếm Được vs. Không Đếm Được

<span class="sv-badge violet">Nền tảng</span>

Đây là quy tắc **cơ bản nhất** — nhưng thí sinh vẫn mất điểm vì **không nhận ra danh từ không đếm được**.

<div class="sv-box purple">
  📋 <strong>Danh từ KHÔNG ĐẾM ĐƯỢC thường gặp trong TOEIC:</strong><br>
  <span class="pill violet">information</span>
  <span class="pill violet">equipment</span>
  <span class="pill violet">furniture</span>
  <span class="pill violet">luggage</span>
  <span class="pill violet">advice</span>
  <span class="pill violet">research</span>
  <span class="pill violet">knowledge</span>
  <span class="pill violet">progress</span>
  <span class="pill violet">traffic</span>
  <span class="pill violet">news</span>
  <span class="pill violet">merchandise</span>
  <span class="pill violet">machinery</span>
  <br><br>
  → Tất cả luôn chia <strong>động từ số ít</strong>.
</div>

**Ví dụ TOEIC:**

- ✅ *The **equipment** in the laboratories **has** been upgraded.* 
- ❌ ~~The equipment in the laboratories **have** been upgraded.~~
- ✅ *All the **furniture** **was** delivered yesterday.*

<div class="sv-box warn">
  ⚠️ <strong>Bẫy thường gặp:</strong> Đề thi hay đặt danh từ số nhiều (<em>laboratories</em>) trong cụm giới từ ngay trước động từ → khiến bạn nhầm tưởng chủ ngữ là số nhiều. Hãy <strong>gạch bỏ cụm giới từ</strong> để tìm chủ ngữ thực!
</div>

---

### 📌 Nhóm 2: Cụm Từ Nối (And / Or)

<span class="sv-badge sky">Quan trọng</span>

<div class="sv-formula">
  📐 N1 <strong>and</strong> N2 <span class="sep">→</span> <strong>V số nhiều</strong>
</div>

- *The **manager** and the **director** **are** attending the meeting.*

<div class="sv-formula">
  📐 N1 <strong>or</strong> N2 <span class="sep">→</span> <strong>V chia theo N2</strong> (danh từ gần V nhất)
</div>

- *The manager or the **employees** **have** to submit the form.* → "employees" = số nhiều → V số nhiều.
- *The employees or the **manager** **has** to submit the form.* → "manager" = số ít → V số ít.

<div class="sv-box info">
  💡 <strong>Mẹo:</strong> Khi thấy <strong>or / nor</strong>, nhìn vào <strong>danh từ đứng ngay trước chỗ trống</strong> để chọn dạng V.
</div>

---

### 📌 Nhóm 3: Đại Từ Bất Định — Luôn Số Ít

<span class="sv-badge teal">Hay bị bẫy</span>

<div class="sv-box success">
  ✅ <strong>Quy tắc:</strong> Các đại từ bất định luôn đi với <strong>động từ số ít</strong>, dù nghĩa có vẻ "nhiều":<br><br>
  <span class="pill teal">everyone</span>
  <span class="pill teal">everybody</span>
  <span class="pill teal">everything</span>
  <span class="pill teal">someone</span>
  <span class="pill teal">somebody</span>
  <span class="pill teal">something</span>
  <span class="pill teal">anyone</span>
  <span class="pill teal">anybody</span>
  <span class="pill teal">anything</span>
  <span class="pill teal">no one</span>
  <span class="pill teal">nobody</span>
  <span class="pill teal">nothing</span>
  <span class="pill teal">each</span>
  <span class="pill teal">every</span>
  <span class="pill teal">either</span>
  <span class="pill teal">neither</span>
</div>

**Ví dụ TOEIC:**

- ✅ *<strong>Everyone</strong> who submitted an application <strong>has</strong> been notified.*
- ✅ *<strong>Each</strong> of the candidates <strong>is</strong> required to provide a portfolio.*
- ✅ *<strong>Nobody</strong> in the office <strong>knows</strong> the password.*

<div class="sv-box danger">
  🚫 <strong>Bẫy:</strong> <em>"Each of the <strong>candidates</strong> ______ required..."</em> → Nhiều thí sinh thấy "candidates" (số nhiều) và chọn <em>are</em>. Nhưng chủ ngữ thực là <strong>Each</strong> → luôn <strong>is</strong>!
</div>

---

### 📌 Nhóm 4: Khoảng Cách — Bẫy "Xen Giữa" Kinh Điển

<span class="sv-badge rose">Dạng bẫy #1 trong TOEIC</span>

Đề thi TOEIC **rất hay** đặt cụm giới từ dài giữa chủ ngữ và động từ để đánh lừa:

<div class="sv-formula">
  📐 S + <em style="opacity:0.6;">(cụm giới từ / mệnh đề quan hệ)</em> <span class="sep">→</span> <strong>V chia theo S</strong>
</div>

<div class="sv-box warn">
  ⚠️ <strong>Các cụm KHÔNG thay đổi số lượng chủ ngữ:</strong><br>
  <span class="pill rose">along with</span>
  <span class="pill rose">as well as</span>
  <span class="pill rose">together with</span>
  <span class="pill rose">accompanied by</span>
  <span class="pill rose">in addition to</span>
  <span class="pill rose">including</span>
  <br><br>
  → Khác với <strong>and</strong>, các cụm này chỉ là <strong>modifier</strong> (bổ sung) — <strong>KHÔNG</strong> biến chủ ngữ thành số nhiều!
</div>

**Ví dụ phân tích:**

| Câu đầy đủ | Gạch bỏ modifier | Chủ ngữ thực → V |
|---|---|---|
| The **manager**, as well as his assistants, ______ attending. | ~~as well as his assistants~~ | **manager** → **is** attending |
| The **list** of new safety protocols ______ available online. | ~~of new safety protocols~~ | **list** → **is** available |
| The **results** of the quality control test ______ been finalized. | ~~of the quality control test~~ | **results** → **have** been |

<div class="sv-box info">
  💡 <strong>Chiến thuật "GẠT BỎ":</strong><br>
  1️⃣ Tìm cụm giới từ (bắt đầu bằng <em>of, with, in, along with, as well as...</em>).<br>
  2️⃣ Đặt dấu ngoặc hoặc gạch chéo cụm đó.<br>
  3️⃣ Xác định <strong>danh từ đứng đầu</strong> — đó là chủ ngữ chính.<br>
  4️⃣ Chia V theo chủ ngữ chính.
</div>

---

### 📌 Nhóm 5: Either/Or — Neither/Nor — Not only...but also

<span class="sv-badge amber">Luật "Gần nhất"</span>

<div class="sv-formula">
  📐 Either N1 or <strong>N2</strong> <span class="sep">→</span> V chia theo <strong>N2</strong>
</div>

<div class="sv-formula">
  📐 Neither N1 nor <strong>N2</strong> <span class="sep">→</span> V chia theo <strong>N2</strong>
</div>

<div class="sv-formula">
  📐 Not only N1 but also <strong>N2</strong> <span class="sep">→</span> V chia theo <strong>N2</strong>
</div>

**Ví dụ:**

- *Neither the **accountant** nor the department **heads** <strong>know</strong> about the changes.* → "heads" = số nhiều → V số nhiều.
- *Neither the department heads nor the **accountant** <strong>knows</strong> about the changes.* → "accountant" = số ít → V số ít.

<div class="sv-box warn">
  ⚠️ <strong>Mẹo thi:</strong> Khi thấy <em>Either...or / Neither...nor / Not only...but also</em> → Nhìn ngay vào <strong>danh từ đứng SAU or / nor / but also</strong> (danh từ gần V nhất) để chọn dạng V.
</div>

---

### 📌 Nhóm 6: Tiền Bạc, Thời Gian, Khoảng Cách — Luôn Số Ít

<span class="sv-badge emerald">Dễ nhớ</span>

Khi số tiền, khoảng thời gian, hay khoảng cách được xem như **một khối duy nhất**, luôn chia **V số ít**.

<div class="sv-box success">
  ✅ <strong>Ví dụ:</strong><br>
  • <em><strong>Twenty thousand dollars</strong> <strong>is</strong> a significant budget for this project.</em><br>
  • <em><strong>Three years</strong> <strong>is</strong> the standard duration of the contract.</em><br>
  • <em><strong>Five kilometers</strong> <strong>is</strong> not a long distance.</em>
</div>

**Tương tự:** Các môn học, bệnh tật, quốc gia có đuôi **-s** cũng chia **V số ít**:

<span class="pill emerald">Physics</span>
<span class="pill emerald">Mathematics</span>
<span class="pill emerald">Economics</span>
<span class="pill emerald">News</span>
<span class="pill emerald">The United States</span>
<span class="pill emerald">Measles</span>

- *Economics **is** my favorite subject.*
- *The news **was** surprising.*

---

### 📌 Nhóm 7: V-ing (Danh Động Từ) Làm Chủ Ngữ — Luôn Số Ít

<span class="sv-badge violet">Quy tắc vàng</span>

<div class="sv-formula">
  📐 <strong>V-ing</strong> (làm chủ ngữ) <span class="sep">→</span> <strong>V số ít</strong>
</div>

Khi thấy danh động từ đứng đầu câu làm chủ ngữ → Động từ **luôn** chia **số ít**, bất kể tân ngữ theo sau là gì.

**Ví dụ TOEIC:**

- ✅ *<strong>Playing</strong> badminton <strong>is</strong> my hobby.*
- ✅ *<strong>Integrating</strong> modern CRM software <strong>takes</strong> a lot of time and effort.*
- ✅ *<strong>Reviewing</strong> all the financial reports <strong>requires</strong> patience.*

<div class="sv-box info">
  💡 <strong>Mẹo:</strong> Dù tân ngữ sau V-ing là danh từ số nhiều (<em>reports</em>), động từ vẫn chia <strong>số ít</strong> vì chủ ngữ là <strong>hành động</strong> (V-ing) chứ không phải danh từ đó.
</div>

---

### 📌 Nhóm 8: The Number Of vs. A Number Of

<span class="sv-badge rose">Cặp dễ nhầm nhất</span>

Đây là cặp "kinh điển" trong TOEIC — **hai cấu trúc giống nhau về hình thức nhưng ngược nhau về cách chia V**:

<div class="sv-vs">
  <div class="sv-vs-item singular">
    <div class="sv-vs-label">📊 THE number of + N(s)</div>
    <div style="font-size:0.92rem; margin-top:0.3rem;"><strong>→ V SỐ ÍT</strong></div>
    <div style="font-size:0.85rem; color:#64748b; margin-top:0.3rem;">Nghĩa: "<strong>Con số</strong> của…"</div>
    <div style="font-size:0.88rem; margin-top:0.5rem;"><em>The number of students <strong>is</strong> increasing.</em></div>
  </div>
  <div class="sv-vs-item plural">
    <div class="sv-vs-label">📊 A number of + N(s)</div>
    <div style="font-size:0.92rem; margin-top:0.3rem;"><strong>→ V SỐ NHIỀU</strong></div>
    <div style="font-size:0.85rem; color:#64748b; margin-top:0.3rem;">Nghĩa: "<strong>Nhiều</strong>…"</div>
    <div style="font-size:0.88rem; margin-top:0.5rem;"><em>A number of students <strong>are</strong> taking leave.</em></div>
  </div>
</div>

<div class="sv-box danger">
  🚫 <strong>Nhầm lẫn phổ biến:</strong> Thí sinh thấy "<em>number</em>" (số ít) nên luôn chọn V số ít cho cả hai → SAI!<br>
  Hãy nhớ: <strong>"A number of" = Many</strong> → V số nhiều.
</div>

**Tương tự:** Phân số, phần trăm, lượng từ (**All, Some, Most, None, Half**) + **of** → V chia theo **danh từ đứng sau of**:

- *Some of the **money** <strong>is</strong> missing.* → money = không đếm được → V số ít.
- *Some of the **books** <strong>are</strong> missing.* → books = số nhiều → V số nhiều.

---

## 4. CÂU ĐẢO NGỮ — KHI ĐỘNG TỪ ĐỨNG TRƯỚC CHỦ NGỮ

<span class="sv-badge amber">Nâng cao</span>

Trong một số cấu trúc, **chủ ngữ đứng SAU động từ** → phải tìm đúng chủ ngữ ở phía sau.

### a) Cấu trúc There is / There are

<div class="sv-formula">
  📐 There <strong>is</strong> + N số ít / N không đếm được
</div>

<div class="sv-formula">
  📐 There <strong>are</strong> + N số nhiều
</div>

- *There **is** a **meeting** at 3 PM.* → meeting = số ít → is.
- *There **are** several **options** available.* → options = số nhiều → are.

### b) Đảo ngữ với trạng từ phủ định

Khi câu bắt đầu bằng **Never, Seldom, Hardly, Not only**, trật tự S–V bị đảo:

- *Not only **does** the **manager** arrive on time, but he also prepares the reports.*
- *Never **has** the **company** experienced such rapid growth.*

<div class="sv-box info">
  💡 <strong>Mẹo:</strong> Trong câu đảo ngữ, tìm <strong>danh từ đứng SAU trợ động từ</strong> — đó là chủ ngữ thực. Chia V theo nó.
</div>

---

## 5. DANH TỪ TẬP HỢP (COLLECTIVE NOUNS)

<span class="sv-badge teal">Bổ sung</span>

Danh từ tập hợp chỉ một nhóm người/vật:

<span class="pill teal">team</span>
<span class="pill teal">staff</span>
<span class="pill teal">committee</span>
<span class="pill teal">family</span>
<span class="pill teal">government</span>
<span class="pill teal">company</span>
<span class="pill teal">board</span>

<div class="sv-box success">
  ✅ <strong>Trong TOEIC:</strong> Danh từ tập hợp thường được coi là <strong>một đơn vị → V số ít</strong>:<br>
  • <em>The <strong>committee</strong> <strong>has</strong> reached a decision.</em><br>
  • <em>The <strong>staff</strong> <strong>is</strong> required to attend the training session.</em><br>
  • <em>The <strong>board</strong> <strong>has</strong> approved the budget.</em>
</div>

---

## 6. BẢNG CÔNG THỨC NHANH

<span class="sv-badge violet">Cheat sheet</span>

<div class="sv-table-wrapper">
  <table class="sv-table g-emerald">
    <thead>
      <tr>
        <th style="width:8%;">#</th>
        <th style="width:46%;">Dạng Chủ Ngữ</th>
        <th style="width:18%;">Chia V</th>
        <th style="width:28%;">Ví Dụ Nhanh</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="font-weight:800;">1</td>
        <td>S (số ít / không đếm được)</td>
        <td><strong>+ V-s/es</strong></td>
        <td><em>The news <strong>is</strong>…</em></td>
      </tr>
      <tr>
        <td style="font-weight:800;">2</td>
        <td>S (số nhiều)</td>
        <td><strong>+ V-nguyên thể</strong></td>
        <td><em>The results <strong>show</strong>…</em></td>
      </tr>
      <tr>
        <td style="font-weight:800;">3</td>
        <td>V-ing (làm chủ ngữ)</td>
        <td><strong>+ V số ít</strong></td>
        <td><em>Running <strong>is</strong>…</em></td>
      </tr>
      <tr>
        <td style="font-weight:800;">4</td>
        <td>N1 + of + N2</td>
        <td><strong>+ V chia theo N1</strong></td>
        <td><em>The quality of the products <strong>is</strong>…</em></td>
      </tr>
      <tr>
        <td style="font-weight:800;">5</td>
        <td>The number of + N(s)</td>
        <td><strong>+ V số ít</strong></td>
        <td><em>The number of orders <strong>has</strong>…</em></td>
      </tr>
      <tr>
        <td style="font-weight:800;">6</td>
        <td>A number of + N(s)</td>
        <td><strong>+ V số nhiều</strong></td>
        <td><em>A number of clients <strong>have</strong>…</em></td>
      </tr>
      <tr>
        <td style="font-weight:800;">7</td>
        <td>Either N1 or N2 / Neither…nor…</td>
        <td><strong>+ V chia theo N2</strong></td>
        <td><em>Neither he nor they <strong>are</strong>…</em></td>
      </tr>
      <tr>
        <td style="font-weight:800;">8</td>
        <td>S + along with / as well as + N</td>
        <td><strong>+ V chia theo S</strong></td>
        <td><em>The CEO, along with staff, <strong>is</strong>…</em></td>
      </tr>
      <tr>
        <td style="font-weight:800;">9</td>
        <td>Everyone / Each / Nobody…</td>
        <td><strong>+ V số ít</strong></td>
        <td><em>Each employee <strong>receives</strong>…</em></td>
      </tr>
      <tr>
        <td style="font-weight:800;">10</td>
        <td>Tiền / Thời gian / Khoảng cách (1 khối)</td>
        <td><strong>+ V số ít</strong></td>
        <td><em>$500 <strong>is</strong> enough.</em></td>
      </tr>
    </tbody>
  </table>
</div>

---

## 7. CHIẾN THUẬT LÀM BÀI TOEIC PART 5

<span class="sv-badge rose">Mẹo thi quan trọng</span>

<div class="sv-step-card">
  <div class="sv-step-header"><span class="sv-step-num">1</span> Xác định đây là câu hỏi S-V Agreement</div>
  <div>Khi 4 đáp án là <strong>cùng 1 động từ</strong> nhưng <strong>khác dạng số ít / số nhiều</strong> (ví dụ: <em>is/are</em>, <em>has/have</em>, <em>was/were</em>), đây chắc chắn là dạng bài hòa hợp S–V.</div>
</div>

<div class="sv-step-card">
  <div class="sv-step-header"><span class="sv-step-num">2</span> Gạch bỏ cụm giới từ xen giữa</div>
  <div>Tìm và <strong>gạch bỏ</strong> tất cả cụm giới từ, mệnh đề quan hệ, cụm <em>along with / as well as</em> xen giữa S và V. Chủ ngữ chính là <strong>danh từ đứng đầu tiên</strong> (trước cụm giới từ).</div>
</div>

<div class="sv-step-card">
  <div class="sv-step-header"><span class="sv-step-num">3</span> Kiểm tra chủ ngữ: số ít hay số nhiều?</div>
  <div>
    • Danh từ không có <strong>-s/es</strong> hoặc danh từ không đếm được → <strong>số ít</strong>.<br>
    • Danh từ có <strong>-s/es</strong> → <strong>số nhiều</strong>.<br>
    • <strong>V-ing</strong>, <strong>each</strong>, <strong>every</strong>, <strong>everyone</strong>… → luôn <strong>số ít</strong>.
  </div>
</div>

<div class="sv-step-card">
  <div class="sv-step-header"><span class="sv-step-num">4</span> Chọn đáp án phù hợp</div>
  <div>Chủ ngữ số ít → chọn <strong>V-s/es, is, has, was</strong>. Chủ ngữ số nhiều → chọn <strong>V-nguyên thể, are, have, were</strong>.</div>
</div>

<div class="sv-box danger">
  🚫 <strong>3 lỗi sai phổ biến nhất:</strong><br>
  <strong>1.</strong> Nhầm danh từ trong cụm giới từ là chủ ngữ: <em>The list <strong><del>of items</del></strong> <strong>is</strong>...</em> (không phải <em>are</em>).<br>
  <strong>2.</strong> Nghĩ <em>as well as</em> = <em>and</em>: <em>The CEO, as well as managers, <strong>is</strong>...</em> (không phải <em>are</em>).<br>
  <strong>3.</strong> Quên <em>A number of</em> → V số nhiều: <em>A number of clients <strong>have</strong>...</em> (không phải <em>has</em>).
</div>

---

## 8. 🏋️ LUYỆN TẬP — 15 CÂU ĐA DẠNG

<span class="sv-badge emerald">Thực hành</span>

> Chọn đáp án đúng cho mỗi chỗ trống. Sau đó xem đáp án và giải thích bên dưới.

<div class="sv-quiz">
  <div class="sv-quiz-q">
    <strong>Câu 1.</strong> The results of the quality control test, despite the errors found earlier, ______ been finalized.
    <br><em>(A) has &nbsp;&nbsp; (B) have &nbsp;&nbsp; (C) is &nbsp;&nbsp; (D) are</em>
  </div>
  <div class="sv-quiz-ans">
    ✅ <strong>(B) have</strong><br>
    Gạch bỏ: <em><del>of the quality control test</del></em>, <em><del>despite the errors found earlier</del></em> → Chủ ngữ = <strong>results</strong> (số nhiều) → <strong>have</strong> been finalized.
  </div>
</div>

<div class="sv-quiz">
  <div class="sv-quiz-q">
    <strong>Câu 2.</strong> Neither the accountant nor the department heads ______ about the recent policy changes.
    <br><em>(A) know &nbsp;&nbsp; (B) knows &nbsp;&nbsp; (C) knowing &nbsp;&nbsp; (D) is known</em>
  </div>
  <div class="sv-quiz-ans">
    ✅ <strong>(A) know</strong><br>
    Neither…nor → chia theo <strong>N2</strong> (danh từ gần V nhất) = <strong>heads</strong> (số nhiều) → <strong>know</strong>.
  </div>
</div>

<div class="sv-quiz">
  <div class="sv-quiz-q">
    <strong>Câu 3.</strong> Every employee, including the temporary staff, ______ invited to the annual company luncheon.
    <br><em>(A) are &nbsp;&nbsp; (B) is &nbsp;&nbsp; (C) were &nbsp;&nbsp; (D) have been</em>
  </div>
  <div class="sv-quiz-ans">
    ✅ <strong>(B) is</strong><br>
    Chủ ngữ = <strong>Every employee</strong> (every + N = luôn số ít). Cụm <em>"including the temporary staff"</em> chỉ là modifier → không thay đổi số lượng S → <strong>is</strong>.
  </div>
</div>

<div class="sv-quiz">
  <div class="sv-quiz-q">
    <strong>Câu 4.</strong> The number of participants who registered for the workshop ______ exceeded our expectations.
    <br><em>(A) have &nbsp;&nbsp; (B) has &nbsp;&nbsp; (C) are &nbsp;&nbsp; (D) were</em>
  </div>
  <div class="sv-quiz-ans">
    ✅ <strong>(B) has</strong><br>
    <strong>The number of</strong> + N(s) → luôn chia <strong>V số ít</strong>. "The number" = con số → <strong>has</strong> exceeded.
  </div>
</div>

<div class="sv-quiz">
  <div class="sv-quiz-q">
    <strong>Câu 5.</strong> A number of clients ______ expressed dissatisfaction with the new billing system.
    <br><em>(A) has &nbsp;&nbsp; (B) have &nbsp;&nbsp; (C) is &nbsp;&nbsp; (D) was</em>
  </div>
  <div class="sv-quiz-ans">
    ✅ <strong>(B) have</strong><br>
    <strong>A number of</strong> + N(s) = "Nhiều…" → luôn chia <strong>V số nhiều</strong> → <strong>have</strong> expressed.
  </div>
</div>

<div class="sv-quiz">
  <div class="sv-quiz-q">
    <strong>Câu 6.</strong> The marketing team, along with the regional sales representatives, ______ to meet on Friday to discuss the new strategy.
    <br><em>(A) plan &nbsp;&nbsp; (B) plans &nbsp;&nbsp; (C) are planning &nbsp;&nbsp; (D) have planned</em>
  </div>
  <div class="sv-quiz-ans">
    ✅ <strong>(B) plans</strong><br>
    Gạch bỏ: <em><del>along with the regional sales representatives</del></em> → Chủ ngữ = <strong>team</strong> (số ít) → <strong>plans</strong>.
  </div>
</div>

<div class="sv-quiz">
  <div class="sv-quiz-q">
    <strong>Câu 7.</strong> Integrating modern CRM software into the existing infrastructure ______ a lot of time and effort.
    <br><em>(A) take &nbsp;&nbsp; (B) takes &nbsp;&nbsp; (C) are taking &nbsp;&nbsp; (D) have taken</em>
  </div>
  <div class="sv-quiz-ans">
    ✅ <strong>(B) takes</strong><br>
    Chủ ngữ = <strong>Integrating</strong> (V-ing làm chủ ngữ) → luôn chia <strong>V số ít</strong> → <strong>takes</strong>.
  </div>
</div>

<div class="sv-quiz">
  <div class="sv-quiz-q">
    <strong>Câu 8.</strong> Twenty thousand dollars ______ a significant budget for the renovation project.
    <br><em>(A) are &nbsp;&nbsp; (B) is &nbsp;&nbsp; (C) were &nbsp;&nbsp; (D) have been</em>
  </div>
  <div class="sv-quiz-ans">
    ✅ <strong>(B) is</strong><br>
    Số tiền xem là <strong>một khối duy nhất</strong> → luôn chia <strong>V số ít</strong> → Twenty thousand dollars <strong>is</strong>.
  </div>
</div>

<div class="sv-quiz">
  <div class="sv-quiz-q">
    <strong>Câu 9.</strong> Each of the candidates ______ required to submit a portfolio before the interview deadline.
    <br><em>(A) are &nbsp;&nbsp; (B) is &nbsp;&nbsp; (C) were &nbsp;&nbsp; (D) have been</em>
  </div>
  <div class="sv-quiz-ans">
    ✅ <strong>(B) is</strong><br>
    Chủ ngữ = <strong>Each</strong> (đại từ bất định) → luôn chia <strong>V số ít</strong>. Đừng bị đánh lừa bởi "candidates" (số nhiều) trong cụm giới từ!
  </div>
</div>

<div class="sv-quiz">
  <div class="sv-quiz-q">
    <strong>Câu 10.</strong> The equipment in the research laboratories ______ been upgraded to meet the new safety standards.
    <br><em>(A) have &nbsp;&nbsp; (B) has &nbsp;&nbsp; (C) are &nbsp;&nbsp; (D) were</em>
  </div>
  <div class="sv-quiz-ans">
    ✅ <strong>(B) has</strong><br>
    Gạch bỏ: <em><del>in the research laboratories</del></em> → Chủ ngữ = <strong>equipment</strong> (danh từ không đếm được) → luôn <strong>số ít</strong> → <strong>has</strong> been.
  </div>
</div>

<div class="sv-quiz">
  <div class="sv-quiz-q">
    <strong>Câu 11.</strong> Not only the supervisor but also the technicians ______ responsible for ensuring workplace safety.
    <br><em>(A) is &nbsp;&nbsp; (B) are &nbsp;&nbsp; (C) has been &nbsp;&nbsp; (D) was</em>
  </div>
  <div class="sv-quiz-ans">
    ✅ <strong>(B) are</strong><br>
    Not only…but also → chia theo <strong>N2</strong> = <strong>technicians</strong> (số nhiều) → <strong>are</strong>.
  </div>
</div>

<div class="sv-quiz">
  <div class="sv-quiz-q">
    <strong>Câu 12.</strong> There ______ a variety of options available for upgrading the company's software system.
    <br><em>(A) is &nbsp;&nbsp; (B) are &nbsp;&nbsp; (C) has &nbsp;&nbsp; (D) have</em>
  </div>
  <div class="sv-quiz-ans">
    ✅ <strong>(B) are</strong><br>
    Trong cấu trúc "There is/are", V chia theo danh từ đứng sau. Ở đây "a variety of options" — nghĩa tương đương "nhiều lựa chọn" → <strong>options</strong> (số nhiều) → <strong>are</strong>.
  </div>
</div>

<div class="sv-quiz">
  <div class="sv-quiz-q">
    <strong>Câu 13.</strong> The quality of the new joggers that were recently released ______ excellent according to customer reviews.
    <br><em>(A) are &nbsp;&nbsp; (B) is &nbsp;&nbsp; (C) were &nbsp;&nbsp; (D) have been</em>
  </div>
  <div class="sv-quiz-ans">
    ✅ <strong>(B) is</strong><br>
    Gạch bỏ: <em><del>of the new joggers that were recently released</del></em> → Chủ ngữ = <strong>quality</strong> (số ít) → <strong>is</strong>. Đừng nhầm chủ ngữ là "joggers"!
  </div>
</div>

<div class="sv-quiz">
  <div class="sv-quiz-q">
    <strong>Câu 14.</strong> Some of the information provided in the annual report ______ outdated and needs to be revised.
    <br><em>(A) are &nbsp;&nbsp; (B) is &nbsp;&nbsp; (C) were &nbsp;&nbsp; (D) have been</em>
  </div>
  <div class="sv-quiz-ans">
    ✅ <strong>(B) is</strong><br>
    Some of + <strong>information</strong> (không đếm được) → V chia theo "information" → <strong>số ít</strong> → <strong>is</strong>.
  </div>
</div>

<div class="sv-quiz">
  <div class="sv-quiz-q">
    <strong>Câu 15.</strong> The CEO, accompanied by senior executives from three regional offices, ______ scheduled to visit the new manufacturing plant next Monday.
    <br><em>(A) are &nbsp;&nbsp; (B) is &nbsp;&nbsp; (C) were &nbsp;&nbsp; (D) have been</em>
  </div>
  <div class="sv-quiz-ans">
    ✅ <strong>(B) is</strong><br>
    Gạch bỏ: <em><del>accompanied by senior executives from three regional offices</del></em> → Chủ ngữ = <strong>CEO</strong> (số ít). "Accompanied by" là modifier, giống "along with" → không thay đổi số lượng S → <strong>is</strong>.
  </div>
</div>

---

## 9. TÓM TẮT — GHI NHỚ NHANH

<div class="sv-box purple">
  <strong>📌 5 BƯỚC LÀM BÀI S–V AGREEMENT TRONG 15 GIÂY:</strong><br><br>
  <strong>Bước 1:</strong> Nhận dạng → 4 đáp án cùng 1 động từ, khác số ít/nhiều.<br>
  <strong>Bước 2:</strong> Gạch bỏ cụm giới từ + modifier xen giữa.<br>
  <strong>Bước 3:</strong> Xác định chủ ngữ chính → số ít hay số nhiều?<br>
  <strong>Bước 4:</strong> Kiểm tra: V-ing? Each/Every? The/A number of? Either...or?<br>
  <strong>Bước 5:</strong> Chọn V phù hợp → Xong! ✅
</div>

<div class="sv-table-wrapper">
  <table class="sv-table g-violet">
    <thead>
      <tr>
        <th>Luôn SỐ ÍT ✋</th>
        <th>Luôn SỐ NHIỀU ✌️</th>
        <th>Chia theo danh từ gần nhất 🎯</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          • N không đếm được<br>
          • V-ing làm chủ ngữ<br>
          • Each / Every / Either / Neither + N<br>
          • Everyone, Someone, Nobody…<br>
          • The number of + N(s)<br>
          • Tiền, thời gian, khoảng cách (1 khối)<br>
          • Danh từ tập hợp (team, staff…)<br>
          • Môn học, bệnh tật đuôi -s
        </td>
        <td>
          • N1 <strong>and</strong> N2<br>
          • A number of + N(s)<br>
          • Danh từ số nhiều (-s/es)
        </td>
        <td>
          • Either N1 <strong>or</strong> N2 → chia theo N2<br>
          • Neither N1 <strong>nor</strong> N2 → chia theo N2<br>
          • Not only…<strong>but also</strong> N2 → chia theo N2<br>
          • Some/All/Most + <strong>of</strong> + N → chia theo N
        </td>
      </tr>
    </tbody>
  </table>
</div>
