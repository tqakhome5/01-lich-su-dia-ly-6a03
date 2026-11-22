# QUY TẮC TỐI ƯU TRA CỨU & XỬ LÝ NHANH — DỰ ÁN LỊCH SỬ & ĐỊA LÍ 6

Tài liệu này được nạp tự động cho mọi Model. Mọi yêu cầu trong workspace này **BẮT BUỘC** tuân thủ quy trình tra cứu nhanh (Fast-Path) dưới đây để đạt tốc độ xử lý nhanh nhất, tốn ít bước gọi công cụ nhất và đồng nhất chất lượng giữa mọi Model.

---

## 1. Kiến trúc dữ liệu của Dự án (Nắm ngay lập tức — Không cần quét thư mục)

- **Sổ cái trung tâm (Đầu vào & Đầu ra):** [INDEX.md](INDEX.md)
  - Chứa toàn bộ **Mục lục SGK** (ánh xạ từng Chương/Bài sang file `.md`, số trang SGK, số trang PDF) **VÀ** **Danh mục Sản phẩm Đầu ra + Bản đồ tọa độ code (Code Map)**.
- **Dữ liệu Đầu vào (SGK đã chuẩn hóa 100% sang Markdown):**
  - `00-mo-dau/00-loi-noi-dau-huong-dan.md` (Trang SGK 1–6 | PDF 3–8)
  - `01-lich-su/chuong-1..5/` (20 bài học + 5 trang mở chương | Trang SGK 7–94 | PDF 9–96)
  - `02-dia-ly/bai-00-mo-dau.md` & `02-dia-ly/chuong-1..7/` (30 bài học + 7 trang mở chương | Trang SGK 95–189 | PDF 97–191)
  - `03-phu-luc/bang-tra-cuu-thuat-ngu.md` & `bang-phien-am.md` (Trang SGK 190–199 | PDF 192–201)
- **Kho ảnh trang gốc SGK:** `pages/page-001.jpg` → `pages/page-203.jpg`
  - **Công thức quy đổi bất biến:** `Trang PDF = Trang SGK + 2` (Ví dụ: Trang SGK 122 → `pages/page-124.jpg`).
- **File PDF gốc:** `06-sgk-lich-su-va-dia-li-6.pdf` *(Chỉ lưu trữ, KHÔNG dùng để đọc khi xử lý tác vụ)*.

---

## 2. Năm Quy Tắc Tối Ưu Tốc Độ (Fast-Path Rules — Bắt buộc)

### Quy tắc 1: CẤM quét thư mục mù & CẤM đọc file PDF gốc
- **KHÔNG** chạy `Get-ChildItem -Recurse` toàn thư mục hoặc quét danh sách 203 ảnh trong `pages/`.
- **KHÔNG** đọc file `06-sgk-lich-su-va-dia-li-6.pdf`. Toàn bộ văn bản, bảng biểu, câu hỏi và mô tả chi tiết từng hình (`> **[Hình X...]**`) đã có đầy đủ 100% trong các file `.md`.

### Quy tắc 2: Định tuyến Đầu vào (SGK) trong 1 bước duy nhất
- Khi người dùng nhắc tới tên bài, chủ đề hoặc số trang SGK:
  1. Đọc [INDEX.md](INDEX.md) để lấy chính xác đường dẫn file `.md` của bài học đó (hoặc mở trực tiếp file `.md` nếu đã rõ số Chương/Bài).
  2. Mỗi file `.md` đều có YAML frontmatter (`trang_sgk`, `trang_pdf`, `anh_trang`) và mốc `<!-- page: PDF XXX | SGK YY | img: ... -->` ở đầu mỗi trang.
  3. **Chỉ mở file ảnh `pages/page-XXX.jpg`** khi cần quan sát trực tiếp chi tiết đồ họa/bản đồ/lược đồ gốc để vẽ mô phỏng SVG/Canvas hoặc khi mô tả chữ trong file `.md` chưa đủ.

### Quy tắc 3: Định tuyến Đầu ra (Sản phẩm đã làm) trong 1 bước duy nhất
- Trước khi tạo sản phẩm mới hoặc sửa sản phẩm cũ, xem mục **"DANH MỤC SẢN PHẨM ĐẦU RA & CODE MAP"** ở đầu [INDEX.md](INDEX.md) để biết:
  - Bài học/chủ đề đó đã có file `.html` hay Tab chuyên đề nào chưa.
  - Các file đang liên kết với nhau như thế nào để đảm bảo gắn link điều hướng hai chiều đồng bộ.

### Quy tắc 4: CẤM đọc tuần tự từ đầu đến cuối các file HTML lớn (>500 dòng)
- Với các file tổng hợp lớn như [ban-do-dia-li-lop-6.html](ban-do-dia-li-lop-6.html) (~2.800 dòng):
  - **KHÔNG** gọi `read_file` đọc nối tiếp từ dòng 1 đến hết file.
  - **BẮT BUỘC** xem bảng **Code Map** trong [INDEX.md](INDEX.md) hoặc chạy `Select-String` theo từ khóa mốc (`id="tabBtn-`, `id="tabPanel-`, `const CHAPTERS`, `function switchTab`, v.v.) để lấy số dòng chính xác, sau đó chỉ gọi `read_file` với `StartLine` và `EndLine` khoanh đúng vùng cần đọc/sửa.

### Quy tắc 5: Dùng Skill khung chuẩn & Tự động cập nhật Sổ cái (`INDEX.md`)
- Khi được yêu cầu **tạo trang HTML bài giảng trực quan mới** hoặc **thêm Tab chuyên đề mới** vào bản đồ tổng hợp:
  - Đọc ngay Skill `bai-giang-truc-quan` tại [.agents/skills/bai-giang-truc-quan/SKILL.md](.agents/skills/bai-giang-truc-quan/SKILL.md) để lấy khung giao diện chuẩn (Tailwind CSS, font `Be Vietnam Pro`, Dark Mode `dialy6_theme`, bộ đọc giọng nói `TTS` tiếng Việt phân đoạn, cấu trúc tích hợp Tab) mà **không cần đọc lại các file `.html` cũ để học mẫu**.
- Sau khi tạo xong bất kỳ file kết quả mới nào (hoặc thêm Tab mới vào file tổng hợp), **BẮT BUỘC cập nhật ngay** vào bảng **Danh mục Sản phẩm Đầu ra & Code Map** trong [INDEX.md](INDEX.md) và thêm thẻ liên kết vào trang chủ [index.html](index.html).

### Quy tắc 6: Xuất bản GitHub Pages & Quản lý nhiệm vụ bằng GitHub Issues
- **Kho GitHub (Public):** `https://github.com/tqakhome5/01-lich-su-dia-ly-6a03`
- **Link Web GitHub Pages (cho con & bạn bè):** `https://tqakhome5.github.io/01-lich-su-dia-ly-6a03/`
- **Bảo vệ bản quyền:** Tuyệt đối giữ `.gitignore` chặn đẩy `06-sgk-lich-su-va-dia-li-6.pdf`, `pages/`, và các thư mục `.md` trích từ SGK lên kho Public.
- **Quy trình Issue khi nhận nhiệm vụ mới (tạo bài giảng, sửa lỗi, thêm tính năng):**
  1. Tạo Issue ghi nhận nhiệm vụ: `gh issue create --repo tqakhome5/01-lich-su-dia-ly-6a03 --title "..." --body "..."`
  2. Thực hiện công việc, cập nhật [index.html](index.html) và [INDEX.md](INDEX.md).
  3. Commit & đẩy lên GitHub: `git add . && git commit -m "... (closes #<số_issue>)" && git push`
  4. Bình luận đường link web đầu ra (`https://tqakhome5.github.io/01-lich-su-dia-ly-6a03/<ten-file>.html`) vào Issue và gửi link đó cho người dùng.
