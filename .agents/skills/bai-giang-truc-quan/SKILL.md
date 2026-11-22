---
name: bai-giang-truc-quan
description: >-
  Quy chuẩn thiết kế, khung code mẫu (HTML/Tailwind/SVG/TTS/Dark Mode) và quy trình tích hợp
  cho các trang bài giảng giải mã trực quan hoặc thêm Tab chuyên đề mới vào ban-do-dia-li-lop-6.html.
  Kích hoạt ngay khi người dùng yêu cầu làm trang HTML trực quan, mô phỏng, sơ đồ tư duy,
  cẩm nang bố kèm con học, hoặc thêm tab mới vào bản đồ môn học.
---

# Skill: Tạo Bài Giảng Trực Quan & Tích Hợp Bản Đồ Môn Học

Sử dụng tài liệu này để tạo mới hoặc mở rộng các trang HTML bài giảng trực quan mà **không cần đọc lại hàng trăm dòng code của các file HTML cũ**.

---

## 1. Quy chuẩn Giao diện & Công nghệ (Design System)

Mọi trang HTML bài giảng trong dự án đều thống nhất bộ tiêu chuẩn sau:
1. **Stack:** Single-file HTML5 + Tailwind CSS CDN (`https://cdn.tailwindcss.com`) + Font `Be Vietnam Pro` từ Google Fonts.
2. **Dark Mode đồng bộ toàn dự án:**
   - Cấu hình `darkMode: 'class'` trong `tailwind.config`.
   - Dùng chung khóa `localStorage.getItem('dialy6_theme')` (`'dark'` / `'light'`) để khi chuyển trang giữa Bản đồ chính và các trang chuyên đề, chế độ Sáng/Tối được giữ nguyên.
3. **Thanh điều hướng Header (Cross-Navigation):**
   - Luôn có nút quay về trang trung tâm: `<a href="ban-do-dia-li-lop-6.html">← Bản đồ Địa lí 6</a>` (hoặc trang trung tâm tương ứng) và link sang các bài giải mã cùng chương.
   - Có nút `🔊 Nghe giảng toàn bộ bài` và nút chuyển đổi Sáng/Tối (`#themeToggle`).
4. **Hệ thống Đọc giọng nói Tiếng Việt (Chunked Web Speech TTS):**
   - Mọi phần kiến thức quan trọng, hộp công thức và mô phỏng đều có nút `🔊 Nghe giảng...` (`class="tts-btn" data-tts-id="..."`).
   - Tự động chia câu dài thành các đoạn `< 170 ký tự` để không bị ngắt quãng trên Chrome/Edge.
   - Có thanh điều khiển nổi ở góc dưới phải (`#ttsBar`) hỗ trợ: **Tạm dừng / Tiếp tục**, **Dừng đọc**, và chỉnh tốc độ **`0.85x` | `1.0x` | `1.15x`**.
5. **Phương pháp Sư phạm ("Bố & Con — Nhìn là hiểu ngay"):**
   - Luôn bắt đầu bằng **"Bẫy trực giác / Hiểu lầm phổ biến"** hoặc **"Câu hỏi cốt lõi"**.
   - Minh họa bằng **Mô phỏng tương tác SVG / Canvas** (có nút bấm chuyển trạng thái, thanh trượt hoặc hoạt ảnh trực quan).
   - Kết thúc mỗi mục bằng hộp **"Mẹo nhớ nhanh 10 giây"** hoặc **"Thí nghiệm tại nhà (Đèn pin / Quả cam)"**.

---

## 2. Khung Code Chuẩn (Boilerplate) cho Trang Chuyên Đề Độc Lập

Khi tạo một file chuyên đề mới (ví dụ `giai-ma-<chu-de>.html`), sử dụng khung chuẩn dưới đây:

```html
<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Giải mã Trực quan: [Tên Chủ Đề] — Lịch sử & Địa lí 6</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Be Vietnam Pro"', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
          }
        }
      }
    };
  </script>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  <style>
    body { font-family: 'Be Vietnam Pro', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif; }
  </style>
</head>
<body class="bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-100 antialiased">

  <!-- HERO HEADER -->
  <header class="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-sky-800 text-white shadow-xl">
    <div class="relative max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
      <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
        <div class="flex flex-wrap items-center gap-2">
          <a href="ban-do-dia-li-lop-6.html"
            class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 hover:bg-white/25 border border-white/25 text-xs sm:text-sm font-bold transition">
            ← Bản đồ Địa lí 6
          </a>
        </div>
        <div class="flex items-center gap-2">
          <button onclick="speakFullPage()" data-tts-id="full" type="button"
            class="tts-btn inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white text-xs sm:text-sm font-bold shadow cursor-pointer transition">
            🔊 Nghe giảng toàn bộ bài
          </button>
          <button id="themeToggle" type="button"
            class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 hover:bg-white/25 border border-white/25 text-xs font-bold cursor-pointer transition">
            <span id="themeIcon">🌙</span> <span id="themeLabel">Tối</span>
          </button>
        </div>
      </div>
      <span class="inline-block px-3 py-1 rounded-full bg-amber-400/25 border border-amber-300/40 text-amber-200 text-xs font-extrabold mb-2">
        🌟 BÀI GIẢNG TRỰC QUAN CHO BỐ &amp; CON
      </span>
      <h1 class="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">[Tiêu đề chính]</h1>
      <p class="mt-2 text-sm sm:text-base text-sky-100 max-w-3xl leading-relaxed">[Mô tả ngắn gọn câu hỏi cốt lõi]</p>
    </div>
  </header>

  <main class="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-8">
    <!-- NỘI DUNG & MÔ PHỎNG TƯƠNG TÁC ĐẶT TẠI ĐÂY -->
  </main>

  <!-- FLOATING TTS CONTROL BAR -->
  <div id="ttsBar" class="hidden fixed bottom-4 right-4 z-50 w-80 sm:w-96 rounded-2xl bg-slate-900/95 text-white shadow-2xl border border-indigo-500/40 p-3.5 backdrop-blur-md">
    <div class="flex items-center justify-between gap-2 mb-2">
      <div class="flex items-center gap-2 min-w-0">
        <span class="flex h-2.5 w-2.5 relative">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <div id="ttsTitle" class="text-xs font-extrabold truncate">Đang đọc...</div>
      </div>
      <button onclick="stopTTS()" type="button" class="px-2 py-0.5 rounded-lg bg-rose-500/20 hover:bg-rose-500/40 text-rose-200 text-xs font-bold cursor-pointer">✕ Dừng</button>
    </div>
    <div class="flex items-center justify-between gap-2 pt-2 border-t border-white/10">
      <button id="ttsPauseBtn" onclick="togglePauseTTS()" type="button" class="px-3 py-1 rounded-lg bg-white/15 hover:bg-white/25 text-xs font-bold cursor-pointer">⏸ Tạm dừng</button>
      <div class="flex items-center gap-1 text-[11px]">
        <span class="text-slate-300 mr-1">Tốc độ:</span>
        <button onclick="setTTSRate(0.85)" data-rate="0.85" class="tts-rate px-2 py-0.5 rounded bg-white/10 font-bold cursor-pointer">0.85x</button>
        <button onclick="setTTSRate(1.0)" data-rate="1.0" class="tts-rate px-2 py-0.5 rounded bg-emerald-500 text-white font-bold cursor-pointer">1.0x</button>
        <button onclick="setTTSRate(1.15)" data-rate="1.15" class="tts-rate px-2 py-0.5 rounded bg-white/10 font-bold cursor-pointer">1.15x</button>
      </div>
    </div>
  </div>

  <script>
    // ==================== VIETNAMESE TTS ENGINE ====================
    let ttsId = null, ttsRate = 1.0, ttsPaused = false, ttsChunks = [], ttsIdx = 0;
    function getViVoice() {
      if (!('speechSynthesis' in window)) return null;
      const voices = window.speechSynthesis.getVoices() || [];
      const vi = voices.filter(v => (v.lang || '').toLowerCase().startsWith('vi'));
      if (!vi.length) return null;
      for (const kw of ['hoaimy', 'namminh', 'google', 'natural', 'online']) {
        const f = vi.find(v => v.name.toLowerCase().includes(kw));
        if (f) return f;
      }
      return vi[0];
    }
    function updateTTSUI() {
      document.querySelectorAll('.tts-btn').forEach(b => {
        if (!b.dataset.orig) b.dataset.orig = b.textContent.trim();
        b.textContent = (ttsId && b.getAttribute('data-tts-id') === ttsId) ? '⏹ Dừng đọc' : b.dataset.orig;
      });
    }
    function speakNext() {
      if (!ttsId || ttsIdx >= ttsChunks.length) { stopTTS(); return; }
      const u = new SpeechSynthesisUtterance(ttsChunks[ttsIdx]);
      u.lang = 'vi-VN'; u.rate = ttsRate;
      const v = getViVoice(); if (v) u.voice = v;
      u.onend = () => { if (ttsId) { ttsIdx++; speakNext(); } };
      u.onerror = () => stopTTS();
      window.speechSynthesis.speak(u);
    }
    function startTTS(id, title, text) {
      if (!('speechSynthesis' in window)) return alert('Trình duyệt chưa hỗ trợ đọc giọng nói.');
      if (ttsId === id) { stopTTS(); return; }
      window.speechSynthesis.cancel();
      ttsId = id; ttsPaused = false; ttsIdx = 0;
      const parts = text.match(/[^.!?;\n]+[.!?;\n]?/g) || [text];
      ttsChunks = []; let buf = '';
      for (const p of parts) {
        if ((buf + ' ' + p).length > 170 && buf) { ttsChunks.push(buf.trim()); buf = p; }
        else buf = (buf + ' ' + p).trim();
      }
      if (buf) ttsChunks.push(buf.trim());
      document.getElementById('ttsTitle').textContent = title;
      document.getElementById('ttsPauseBtn').textContent = '⏸ Tạm dừng';
      document.getElementById('ttsBar').classList.remove('hidden');
      updateTTSUI(); speakNext();
    }
    function stopTTS() {
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
      ttsId = null; ttsPaused = false; ttsChunks = []; ttsIdx = 0;
      document.getElementById('ttsBar').classList.add('hidden');
      updateTTSUI();
    }
    function togglePauseTTS() {
      if (!ttsId) return;
      if (!ttsPaused) { window.speechSynthesis.pause(); ttsPaused = true; document.getElementById('ttsPauseBtn').textContent = '▶️ Tiếp tục'; }
      else { window.speechSynthesis.resume(); ttsPaused = false; document.getElementById('ttsPauseBtn').textContent = '⏸ Tạm dừng'; }
    }
    function setTTSRate(r) {
      ttsRate = r;
      document.querySelectorAll('.tts-rate').forEach(b => {
        b.className = Math.abs(parseFloat(b.dataset.rate) - r) < 0.01
          ? 'tts-rate px-2 py-0.5 rounded bg-emerald-500 text-white font-bold cursor-pointer'
          : 'tts-rate px-2 py-0.5 rounded bg-white/10 font-bold cursor-pointer';
      });
      if (ttsId) { window.speechSynthesis.cancel(); ttsPaused = false; document.getElementById('ttsPauseBtn').textContent = '⏸ Tạm dừng'; speakNext(); }
    }

    // ==================== THEME TOGGLE ====================
    const themeToggle = document.getElementById('themeToggle');
    function applyTheme(d) {
      document.documentElement.classList.toggle('dark', d);
      document.getElementById('themeIcon').textContent = d ? '☀️' : '🌙';
      document.getElementById('themeLabel').textContent = d ? 'Sáng' : 'Tối';
    }
    if (localStorage.getItem('dialy6_theme') === 'dark') applyTheme(true);
    themeToggle.addEventListener('click', () => {
      const next = !document.documentElement.classList.contains('dark');
      applyTheme(next);
      localStorage.setItem('dialy6_theme', next ? 'dark' : 'light');
    });
    window.addEventListener('beforeunload', () => { if ('speechSynthesis' in window) window.speechSynthesis.cancel(); });
  </script>
</body>
</html>
```

---

## 3. Quy trình 4 bước khi Thêm Tab Mới vào `ban-do-dia-li-lop-6.html`

Khi cần nhúng một chuyên đề vào `ban-do-dia-li-lop-6.html` dưới dạng Tab mới (ví dụ `Tab N`), **KHÔNG đọc toàn bộ file**, chỉ cần sửa đúng 4 điểm neo sau (tra dòng trong bảng Code Map của `INDEX.md`):

1. **Thanh `<nav>` (quanh dòng 155–183):** Thêm nút `<button id="tabBtn-N" onclick="switchTab(N)" ...>`.
2. **Vùng `<main>` (ngay trước kết thúc `</main>` và `<!-- FLOATING TTS CONTROL BAR -->`, quanh dòng 1400–1415):** Thêm `<section id="tabPanel-N" class="hidden animate-fade-up space-y-8">...</section>`. Lưu ý tiền tố hóa các `id` và hàm JS riêng của Tab theo dạng `tN_...` (như `t4_`, `t5_`) để không trùng `id` với các Tab khác.
3. **Hàm `switchTab(tabNum)` (quanh dòng 2201–2215):** Cập nhật mảng `[1, 2, 3, 4, 5]` thành `[1, 2, 3, 4, 5, N]`.
4. **Cuối thẻ `<script>` (quanh dòng 2780–2794):** Thêm các hàm điều khiển simulator và hàm đọc TTS `tN_speak...()` của Tab mới, sau đó cập nhật lại số dòng vào bảng **Code Map** trong `INDEX.md`.
