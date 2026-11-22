---
name: bai-giang-truc-quan
description: >-
  Quy chuẩn thiết kế siêu gọn (dùng assets/common.js), khung code mẫu (HTML/Tailwind/SVG/TTS/Dark Mode)
  và quy trình tích hợp cho các trang bài giảng giải mã trực quan hoặc thêm Tab chuyên đề mới vào ban-do-dia-li-lop-6.html.
  Kích hoạt ngay khi người dùng yêu cầu làm trang HTML trực quan, mô phỏng, sơ đồ tư duy,
  cẩm nang bố kèm con học, hoặc thêm tab mới vào bản đồ môn học.
---

# Skill: Tạo Bài Giảng Trực Quan & Tích Hợp Bản Đồ Môn Học (Bản Tối Ưu Tốc Độ & Token)

Sử dụng tài liệu này để tạo mới hoặc mở rộng các trang HTML bài giảng trực quan **siêu nhanh, tiết kiệm token** bằng cách tái sử dụng [assets/common.js](../../../assets/common.js) mà **không cần viết lại 200+ dòng code TTS/Dark Mode lặp lại hay đọc các file HTML cũ**.

---

## 1. Quy chuẩn Giao diện & Tối ưu Tốc độ (Bắt buộc)

1. **Stack Siêu Gọn:** HTML5 + Tailwind CSS CDN (`https://cdn.tailwindcss.com`) + Font `Be Vietnam Pro` + **`<script src="assets/common.js"></script>`**.
2. **Tái sử dụng `assets/common.js` (Tiết kiệm ~200 dòng/bài):**
   - **KHÔNG** tự viết lại mã HTML của `#ttsBar`, **KHÔNG** viết lại `startTTS()`, `stopTTS()`, `togglePauseTTS()`, `setTTSRate()`, **KHÔNG** viết lại logic `themeToggle` / `dialy6_theme` hay `copyShareLink()`.
   - Tất cả đã có sẵn và tự động khởi tạo khi nhúng `<script src="assets/common.js"></script>` ở cuối `<body>`.
3. **CẤM nhúng ảnh Base64 (`data:image/...`):**
   - Để giữ file nhẹ (<50 KB), sinh code nhanh và dễ chỉnh sửa về sau, **tuyệt đối KHÔNG chạy script encode ảnh SGK sang Base64** nhúng vào HTML.
   - Ưu tiên vẽ **SVG tương tác gọn nhẹ** (như quả cầu, quỹ đạo, sơ đồ, biểu đồ).
4. **Thanh điều hướng Header (Cross-Navigation):**
   - Luôn có nút quay về Trang chủ `<a href="index.html">🏠 Trang chủ</a>` và Bản đồ chính `<a href="ban-do-dia-li-lop-6.html">← Bản đồ Địa lí 6</a>`.
   - Có nút `🔊 Nghe giảng toàn bộ bài` (`onclick="speakFullPage()" data-tts-id="full" class="tts-btn ..."`) và nút `#themeToggle`.
5. **Phương pháp Sư phạm ("Dành riêng cho Học sinh Lớp 6 — Nhìn là hiểu ngay!"):**
   - **Đúng lứa tuổi 11–12:** Xưng hô thân thiện với các bạn học sinh (*"mình / các bạn / em"*), không dùng giọng văn "nhà bác học" hay "cẩm nang phụ huynh".
   - **Câu ngắn, ví dụ đời thường:** Giải thích mọi khái niệm bằng đồ vật/hiện tượng quen thuộc (đèn pin, quả cam, đi xe đạp, mùa đông Việt Nam…). Mọi thuật ngữ SGK phải có chú thích dễ hiểu ngay bên cạnh.
   - **Chống tường chữ:** Mỗi ý tối đa 2–3 dòng; luôn bắt đầu bằng **"Câu hỏi tò mò / Chỗ hay nhầm nhất"**, minh họa bằng **Mô phỏng SVG tương tác**, và kết thúc bằng **"Mẹo nhớ nhanh 10 giây"** hoặc **Quiz vui**.

---

## 2. Khung Code Siêu Gọn (~45 dòng) cho Trang Bài Giảng Mới

Khi tạo file mới (ví dụ `giai-ma-<chu-de>.html` hoặc `on-tap-chuong-<n>.html`), chỉ cần dùng đúng khung ngắn này:

```html
<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>[Tên Chủ Đề] — Lịch sử &amp; Địa lí 6</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: { extend: { fontFamily: { sans: ['"Be Vietnam Pro"', 'system-ui', 'sans-serif'] } } }
    };
  </script>
  <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  <style>body { font-family: 'Be Vietnam Pro', system-ui, sans-serif; }</style>
</head>
<body class="bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-100 antialiased">

  <header class="bg-gradient-to-br from-slate-900 via-indigo-900 to-sky-800 text-white shadow-xl">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
      <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
        <div class="flex flex-wrap items-center gap-2">
          <a href="index.html" class="px-3 py-1.5 rounded-full bg-white/15 hover:bg-white/25 border border-white/25 text-xs sm:text-sm font-bold transition">🏠 Trang chủ</a>
          <a href="ban-do-dia-li-lop-6.html" class="px-3 py-1.5 rounded-full bg-white/15 hover:bg-white/25 border border-white/25 text-xs sm:text-sm font-bold transition">← Bản đồ Địa lí 6</a>
        </div>
        <div class="flex items-center gap-2">
          <button onclick="speakFullPage()" data-tts-id="full" type="button" class="tts-btn px-3.5 py-1.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white text-xs sm:text-sm font-bold shadow cursor-pointer transition">🔊 Nghe giảng toàn bộ</button>
          <button id="themeToggle" type="button" class="px-3 py-1.5 rounded-full bg-white/15 hover:bg-white/25 border border-white/25 text-xs font-bold cursor-pointer transition"><span id="themeIcon">🌙</span> <span id="themeLabel">Tối</span></button>
        </div>
      </div>
      <span class="inline-block px-3 py-1 rounded-full bg-amber-400/25 border border-amber-300/40 text-amber-200 text-xs font-extrabold mb-2">🌟 BÀI GIẢNG TRỰC QUAN • LỚP 6A03</span>
      <h1 class="text-2xl sm:text-4xl font-extrabold tracking-tight">[Tiêu đề chính]</h1>
      <p class="mt-2 text-sm sm:text-base text-sky-100 max-w-3xl">[Mô tả ngắn gọn câu hỏi cốt lõi]</p>
    </div>
  </header>

  <main class="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-8">
    <!-- NỘI DUNG, MÔ PHỎNG SVG & QUIZ ĐẶT TẠI ĐÂY -->
  </main>

  <script src="assets/common.js"></script>
  <script>
    // Chỉ viết logic riêng của bài này (simulator, quiz, hàm speakFullPage gọi startTTS('full', ...))
  </script>
</body>
</html>
```

---

## 3. Quy trình 4 bước khi Thêm Tab Mới vào `ban-do-dia-li-lop-6.html`

Khi cần nhúng một chuyên đề vào `ban-do-dia-li-lop-6.html` dưới dạng Tab mới (`Tab N`), **KHÔNG đọc toàn bộ file**, chỉ sửa đúng 4 điểm neo (tra dòng trong bảng Code Map của `INDEX.md`):
1. **Thanh `<nav>`:** Thêm `<button id="tabBtn-N" onclick="switchTab(N)" ...>`.
2. **Vùng `<main>` (trước `<!-- FLOATING TTS CONTROL BAR -->`):** Thêm `<section id="tabPanel-N" class="hidden animate-fade-up space-y-8">...</section>` (tiền tố hóa `id`/hàm theo dạng `tN_...`).
3. **Hàm `switchTab(tabNum)`:** Cập nhật mảng `[1, 2, 3, 4, 5, ..., N]`.
4. **Cuối `<script>`:** Thêm hàm simulator & hàm đọc TTS `tN_speak...()`, sau đó cập nhật lại `INDEX.md`.
