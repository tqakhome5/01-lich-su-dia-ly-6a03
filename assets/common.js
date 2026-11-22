/**
 * assets/common.js — Khung dùng chung cho Cổng học tập Lớp 6A03 (Lịch sử & Địa lí 6)
 * Gồm:
 *  1. Dark Mode đồng bộ toàn dự án (localStorage key: 'dialy6_theme')
 *  2. Bộ đọc giọng nói Tiếng Việt phân đoạn (Chunked Web Speech TTS) + tự chèn #ttsBar
 *  3. Hàm sao chép link chia sẻ cho bạn bè (copyShareLink)
 */
(function () {
  // ==================== 1. AUTO-INJECT FLOATING TTS BAR ====================
  function ensureTTSBar() {
    if (document.getElementById('ttsBar')) return;
    const bar = document.createElement('div');
    bar.id = 'ttsBar';
    bar.className = 'hidden fixed bottom-4 right-4 z-50 w-80 sm:w-96 rounded-2xl bg-slate-900/95 text-white shadow-2xl border border-indigo-500/40 p-3.5 backdrop-blur-md';
    bar.innerHTML = `
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
    `;
    document.body.appendChild(bar);
  }

  // ==================== 2. VIETNAMESE CHUNKED TTS ENGINE ====================
  let ttsId = null;
  let ttsRate = 1.0;
  let ttsPaused = false;
  let ttsChunks = [];
  let ttsIdx = 0;

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
    u.lang = 'vi-VN';
    u.rate = ttsRate;
    const v = getViVoice();
    if (v) u.voice = v;
    u.onend = () => { if (ttsId) { ttsIdx++; speakNext(); } };
    u.onerror = () => stopTTS();
    window.speechSynthesis.speak(u);
  }

  function startTTS(id, title, text) {
    if (!('speechSynthesis' in window)) {
      alert('Trình duyệt chưa hỗ trợ đọc giọng nói.');
      return;
    }
    ensureTTSBar();
    if (ttsId === id) { stopTTS(); return; }
    window.speechSynthesis.cancel();
    ttsId = id;
    ttsPaused = false;
    ttsIdx = 0;

    const parts = (text || '').match(/[^.!?;\n]+[.!?;\n]?/g) || [text || ''];
    ttsChunks = [];
    let buf = '';
    for (const p of parts) {
      if ((buf + ' ' + p).length > 170 && buf) {
        ttsChunks.push(buf.trim());
        buf = p;
      } else {
        buf = (buf + ' ' + p).trim();
      }
    }
    if (buf) ttsChunks.push(buf.trim());

    const titleEl = document.getElementById('ttsTitle');
    const pauseEl = document.getElementById('ttsPauseBtn');
    const barEl = document.getElementById('ttsBar');
    if (titleEl) titleEl.textContent = title;
    if (pauseEl) pauseEl.textContent = '⏸ Tạm dừng';
    if (barEl) barEl.classList.remove('hidden');
    updateTTSUI();
    speakNext();
  }

  function stopTTS() {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    ttsId = null;
    ttsPaused = false;
    ttsChunks = [];
    ttsIdx = 0;
    const barEl = document.getElementById('ttsBar');
    if (barEl) barEl.classList.add('hidden');
    updateTTSUI();
  }

  function togglePauseTTS() {
    if (!ttsId) return;
    const pauseEl = document.getElementById('ttsPauseBtn');
    if (!ttsPaused) {
      window.speechSynthesis.pause();
      ttsPaused = true;
      if (pauseEl) pauseEl.textContent = '▶️ Tiếp tục';
    } else {
      window.speechSynthesis.resume();
      ttsPaused = false;
      if (pauseEl) pauseEl.textContent = '⏸ Tạm dừng';
    }
  }

  function setTTSRate(r) {
    ttsRate = r;
    document.querySelectorAll('.tts-rate').forEach(b => {
      b.className = Math.abs(parseFloat(b.dataset.rate) - r) < 0.01
        ? 'tts-rate px-2 py-0.5 rounded bg-emerald-500 text-white font-bold cursor-pointer'
        : 'tts-rate px-2 py-0.5 rounded bg-white/10 font-bold cursor-pointer';
    });
    if (ttsId) {
      window.speechSynthesis.cancel();
      ttsPaused = false;
      const pauseEl = document.getElementById('ttsPauseBtn');
      if (pauseEl) pauseEl.textContent = '⏸ Tạm dừng';
      speakNext();
    }
  }

  // ==================== 3. SHARED DARK MODE (dialy6_theme) ====================
  function applyTheme(isDark) {
    document.documentElement.classList.toggle('dark', isDark);
    const icon = document.getElementById('themeIcon');
    const label = document.getElementById('themeLabel');
    if (icon) icon.textContent = isDark ? '☀️' : '🌙';
    if (label) label.textContent = isDark ? 'Sáng' : 'Tối';
  }

  function initTheme() {
    const isDark = localStorage.getItem('dialy6_theme') === 'dark';
    applyTheme(isDark);
    const toggleBtn = document.getElementById('themeToggle');
    if (toggleBtn && !toggleBtn.dataset.commonBound) {
      toggleBtn.dataset.commonBound = '1';
      toggleBtn.addEventListener('click', () => {
        const next = !document.documentElement.classList.contains('dark');
        applyTheme(next);
        localStorage.setItem('dialy6_theme', next ? 'dark' : 'light');
      });
    }
  }

  // ==================== 4. SHARE LINK HELPER ====================
  function copyShareLink(btnId) {
    const btn = document.getElementById(btnId || 'copyLinkBtn');
    const url = window.location.href;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(() => {
        if (!btn) return;
        const orig = btn.dataset.orig || btn.textContent;
        btn.dataset.orig = orig;
        btn.textContent = '✅ Đã sao chép link!';
        setTimeout(() => { btn.textContent = orig; }, 2000);
      });
    }
  }

  // Expose globals for inline onclick handlers
  window.getViVoice = getViVoice;
  window.startTTS = startTTS;
  window.stopTTS = stopTTS;
  window.togglePauseTTS = togglePauseTTS;
  window.setTTSRate = setTTSRate;
  window.applyTheme = applyTheme;
  window.copyShareLink = copyShareLink;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => { initTheme(); ensureTTSBar(); });
  } else {
    initTheme();
    ensureTTSBar();
  }
  window.addEventListener('beforeunload', () => {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  });
})();
