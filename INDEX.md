# MỤC LỤC TỔNG — SGK LỊCH SỬ VÀ ĐỊA LÍ 6

- **Bộ sách:** Kết nối tri thức với cuộc sống (Tái bản lần thứ năm, có chỉnh lí, bổ sung)
- **Nhà xuất bản:** Nhà xuất bản Giáo dục Việt Nam
- **File PDF gốc:** [06-sgk-lich-su-va-dia-li-6.pdf](06-sgk-lich-su-va-dia-li-6.pdf) (203 trang)
- **Kho ảnh từng trang:** thư mục [pages/](pages/) (`page-001.jpg` → `page-203.jpg`)
- **Quy luật quy đổi trang:** `Trang PDF = Trang SGK + 2`

---

## Cách tra cứu nhanh (Dành cho Người dùng & AI Agent)
1. **Tra cứu Sản phẩm Đầu ra (HTML/Bản đồ/Chuyên đề) & Bản đồ tọa độ dòng (Code Map):** Xem ngay bảng **DANH MỤC SẢN PHẨM ĐẦU RA & CODE MAP** bên dưới để biết bài nào đã làm và vị trí từng vùng code trong file lớn.
2. **Tra nội dung chữ SGK (Đầu vào):** Mở file `.md` tương ứng theo bảng Mục lục SGK bên dưới (không đọc file PDF gốc).
3. **Tra lại đúng trang gốc & hình ảnh/bản đồ/lược đồ:** Mỗi file `.md` có gắn mốc `<!-- page: PDF XXX | SGK YY | img: ... -->` ở đầu mỗi trang và link trực tiếp tới ảnh `pages/page-XXX.jpg` (`Trang PDF = Trang SGK + 2`).

---

## DANH MỤC SẢN PHẨM ĐẦU RA (DELIVERABLES REGISTRY)

> **Quy tắc bắt buộc:** Khi tạo mới bất kỳ file kết quả nào hoặc thêm Tab/tính năng mới vào file tổng hợp, phải cập nhật ngay vào bảng dưới đây.

| STT | File Sản phẩm | Loại sản phẩm | Gắn với Phần / Chương / Bài SGK | Mô tả & Các tính năng chính | Liên kết chéo (Cross-links) |
| :-: | :--- | :--- | :--- | :--- | :--- |
| 0 | [index.html](index.html) | Trang chủ Cổng học tập (`GitHub Pages`) | Toàn bộ dự án Lớp 6A03 | Trang menu tổng hợp dẫn tới tất cả các bài giảng & bài ôn tập, dùng [assets/common.js](assets/common.js) (Dark Mode `dialy6_theme` + sao chép link chia sẻ). | Link web: `https://tqakhome5.github.io/01-lich-su-dia-ly-6a03/` |
| — | [assets/common.js](assets/common.js) | Thư viện dùng chung (`175 dòng`) | Mọi trang bài giảng mới | Đóng gói sẵn Dark Mode (`dialy6_theme`), TTS Tiếng Việt phân đoạn + tự chèn `#ttsBar`, và `copyShareLink()` — giúp mỗi bài mới tiết kiệm ~200 dòng code lặp. | Nhúng bằng `<script src="assets/common.js"></script>` |
| 1 | [ban-do-dia-li-lop-6.html](ban-do-dia-li-lop-6.html) | Dashboard tổng hợp (`2.794 dòng`) | Toàn bộ **Phần Địa lí** (7 Chương, 31 Bài) + Chuyên sâu Chương 2 | Bản đồ trực quan Địa lí 6 & Cẩm nang Phụ huynh gồm **5 Tab**: <br/>• **Tab 1:** Sơ đồ 7 chương, quan hệ Tiên quyết/Hệ quả, mô phỏng góc nghiêng trục Trái Đất.<br/>• **Tab 2:** Biểu đồ độ khó & Giải mã 3 nút thắt khó nhất.<br/>• **Tab 3:** Bảng tra cứu & lọc 31 bài học.<br/>• **Tab 4:** Chuyên đề Chí tuyến (`23°27'`) & Vòng cực (`66°33'`).<br/>• **Tab 5:** Chuyên đề 4 Mùa, Gần/Xa Mặt Trời & Ngày ngắn đêm dài.<br/>• Tích hợp giọng đọc Tiếng Việt (`TTS`) & Dark Mode (`dialy6_theme`). | Liên kết 2 chiều với [giai-ma-chi-tuyen-vong-cuc.html](giai-ma-chi-tuyen-vong-cuc.html) và [giai-ma-bon-mua-gan-xa-mat-troi.html](giai-ma-bon-mua-gan-xa-mat-troi.html) |
| 2 | [giai-ma-chi-tuyen-vong-cuc.html](giai-ma-chi-tuyen-vong-cuc.html) | Bài giảng trực quan độc lập (`658 dòng`) | **Địa lí — Chương 2** (Bài 6, Bài 7, Bài 8; trọng tâm tr. 116–124) | Giải mã trực quan cặp số `23°27'` (Chí tuyến) & `66°33'` (Vòng cực):<br/>• Mô phỏng SVG quả cầu quay 24h ở 3 mùa (`22/6`, `21/3 & 23/9`, `22/12`).<br/>• Thí nghiệm đèn pin chiếu vuông góc vs chiếu xiên.<br/>• Sơ đồ 5 đới khí hậu + Giọng đọc `TTS` từng phần. | Nút quay về [ban-do-dia-li-lop-6.html](ban-do-dia-li-lop-6.html); được nhúng vào **Tab 4** của Bản đồ chính |
| 3 | [giai-ma-bon-mua-gan-xa-mat-troi.html](giai-ma-bon-mua-gan-xa-mat-troi.html) | Bài giảng trực quan độc lập (`855 dòng`) | **Địa lí — Chương 2 — Bài 8** (Chuyển động quanh Mặt Trời & Hệ quả, tr. 122–124) | Giải mã 3 câu hỏi hóc búa:<br/>• Vì sao có 4 mùa Xuân – Hạ – Thu – Đông?<br/>• Bẫy trực giác: Mùa đông Việt Nam Trái Đất đang **gần** Mặt Trời nhất (~147,1 triệu km) nhưng vẫn lạnh.<br/>• Vì sao mùa đông ngày ngắn đêm dài? + Mô phỏng quỹ đạo 4 vị trí & câu đố Việt Nam – Úc + Giọng đọc `TTS`. | Liên kết 2 chiều với [ban-do-dia-li-lop-6.html](ban-do-dia-li-lop-6.html) và [giai-ma-chi-tuyen-vong-cuc.html](giai-ma-chi-tuyen-vong-cuc.html); được nhúng vào **Tab 5** của Bản đồ chính |
| 4 | [on-tap-chuong-1-ban-do.html](on-tap-chuong-1-ban-do.html) | Bài ôn tập trực quan (`1.224 dòng`) | **Địa lí — Chương 1** (Bài 1 → Bài 5, tr. 101–114) | Ôn tập trực quan Chương 1: Bản đồ — kinh/vĩ tuyến, toạ độ, phương hướng, tỉ lệ bản đồ, kí hiệu & lược đồ trí nhớ. | Được gắn trên trang chủ [index.html](index.html) |
| 5 | [on-tap-chuong-2-trai-dat-vu-tru.html](on-tap-chuong-2-trai-dat-vu-tru.html) | Bài ôn tập trực quan (`911 dòng`) | **Địa lí — Chương 2** (Bài 6 → Bài 9, tr. 115–127) | Ôn tập trực quan Chương 2: Trái Đất & Hệ Mặt Trời — tự quay, quay quanh Mặt Trời, hệ quả và xác định phương hướng ngoài thực tế. | Được gắn trên trang chủ [index.html](index.html) |
| 6 | [giai-ma-kinh-vi-do-mui-gio-3d.html](giai-ma-kinh-vi-do-mui-gio-3d.html) | Bài giảng 3D tương tác (`~760 dòng`) | **Địa lí — Chương 1** (Bài 1–5) &amp; **Chương 2** (Bài 7 — 24 Múi giờ) | 2 Quả Địa Cầu 3D độc lập:<br/>• **Quả cầu #1 (Khái niệm sạch):** Cực Bắc/Nam, 5 vĩ tuyến đặc biệt (Xích đạo, Chí tuyến, Vòng cực), 4 Bán cầu &amp; Kinh độ gắn nhãn kép Múi giờ (`0 / + / −`).<br/>• **Quả cầu #2 (Đời sống &amp; Bạn bè):** Đồng hồ Hà Nội chạy giờ thực tế + 4 kịch bản sinh hoạt, đủ 12 địa điểm (Hà Nội, Hokkaido, Singapore, Sydney, Paris, Berlin, Greenwich, New York, Denver `−7`, Hollywood `−8`, Alaska `−9`, Hawaii `−10`).<br/>• Thước 24 Múi giờ GMT, mô phỏng Google Maps + Bảng đối chiếu Chương 1, Quiz 15 câu &amp; TTS (`assets/common.js`). | Liên kết 2 chiều với [index.html](index.html), [ban-do-dia-li-lop-6.html](ban-do-dia-li-lop-6.html) và [on-tap-chuong-1-ban-do.html](on-tap-chuong-1-ban-do.html) |

### Bản đồ Tọa độ Vùng (Code Map) — `ban-do-dia-li-lop-6.html`
*(Dùng để nhảy thẳng tới đúng dòng bằng `read_file(StartLine, EndLine)` mà không cần đọc toàn bộ 2.794 dòng)*

| Vùng cấu trúc / Thành phần | Khoảng dòng | Điểm neo tìm nhanh (`Select-String`) | Ghi chú khi chỉnh sửa |
| :--- | :---: | :--- | :--- |
| **Head, Tailwind & CSS Custom** | `1 – 70` | `<head>`, `tailwind.config` | Cấu hình font `Be Vietnam Pro`, class `.ring-selected`, `.tab-btn` |
| **Hero Header & Dải 7 Chương** | `71 – 150` | `<!-- HERO HEADER -->` | Nút Nghe giới thiệu, Hướng dẫn 3 bước, Dark mode, 7 nút chọn nhanh chương |
| **Thanh Điều hướng Tab (`<nav>`)** | `152 – 184` | `id="tabBtn-1"` .. `id="tabBtn-5"` | Nơi thêm nút bấm khi mở rộng Tab mới |
| **Tab 1: Sơ đồ 7 Chương & Mô phỏng Trục** | `188 – 387` | `<section id="tabPanel-1"` | Lưới thẻ 7 chương (`#chaptersGrid`), khung chi tiết (`#detailPanel`), Simulator góc nghiêng |
| **Tab 2: Độ khó & 3 Nút thắt** | `388 – 639` | `<section id="tabPanel-2"` | Biểu đồ độ khó (`#difficultyChart`), 3 thẻ nút thắt (`#bottlenecksContainer`) |
| **Tab 3: Danh mục 31 Bài học** | `640 – 714` | `<section id="tabPanel-3"` | Ô tìm kiếm, bộ lọc chương, bảng danh sách 31 bài (`#lessonsTableBody`) |
| **Tab 4: Chí tuyến (`23°27'`) & Vòng cực (`66°33'`)** | `715 – 958` | `<section id="tabPanel-4"` | Nội dung chuyên đề Chí tuyến & Vòng cực (prefix ID/hàm: `t4_`) |
| **Tab 5: 4 Mùa, Gần/Xa Mặt Trời & Ngày/Đêm** | `959 – 1408` | `<section id="tabPanel-5"` | Nội dung chuyên đề 4 Mùa & Gần/Xa Mặt Trời (prefix ID/hàm: `t5_`) |
| **Thanh TTS Bar & Modal / Lightbox** | `1410 – 1457` | `id="ttsBar"`, `id="guideModal"` | Thanh điều khiển giọng đọc nổi, Modal hướng dẫn, Lightbox xem ảnh SGK |
| **Dữ liệu JS (`CHAPTERS`, `LESSONS`, `BOTTLENECKS`)** | `1460 – 1767` | `const CHAPTERS = [`, `const LESSONS = [` | Dữ liệu chi tiết 7 chương (dòng 1461), 31 bài (dòng 1687), 3 nút thắt (dòng 1729) |
| **Hàm Render UI & Chuyển Tab (`switchTab`)** | `1768 – 2278` | `function switchTab(tabNum)` | Hàm `switchTab` ở dòng `2201` (quản lý mảng `[1, 2, 3, 4, 5]`) |
| **Bộ đọc Giọng nói Tiếng Việt (`TTS Engine`)** | `2279 – 2493` | `function getBestVietnameseVoice()` | Hàm `startTTS`, `stopTTS`, `setTTSRate` và các hàm đọc từng phần |
| **JS Simulator Tab 1, Tab 4 (`t4_`), Tab 5 (`t5_`)** | `2494 – 2794` | `function updateTiltSimulator`, `function t4_`, `function t5_` | Logic tương tác của các mô phỏng SVG và khởi tạo trang |

---

## MỞ ĐẦU

| Mục | Nội dung | Trang SGK | Trang PDF | File Markdown |
| :--- | :--- | :---: | :---: | :--- |
| Mở đầu | Trang tên sách, Lời nói đầu, Hướng dẫn sử dụng sách | 1–6 | 3–8 | [00-loi-noi-dau-huong-dan.md](00-mo-dau/00-loi-noi-dau-huong-dan.md) |

---

## PHẦN LỊCH SỬ (SGK tr. 7–94 | PDF tr. 9–96)

### Chương 1. Vì sao phải học lịch sử?
| Mục | Nội dung | Trang SGK | Trang PDF | File Markdown |
| :--- | :--- | :---: | :---: | :--- |
| Mở chương | Giới thiệu Phần Lịch sử & Chương 1 | 7–8 | 9–10 | [00-mo-dau-chuong-1.md](01-lich-su/chuong-1/00-mo-dau-chuong-1.md) |
| Bài 1 | Lịch sử và cuộc sống | 9–10 | 11–12 | [bai-01-lich-su-va-cuoc-song.md](01-lich-su/chuong-1/bai-01-lich-su-va-cuoc-song.md) |
| Bài 2 | Dựa vào đâu để biết và phục dựng lại lịch sử? | 11–13 | 13–15 | [bai-02-dua-vao-dau-de-biet-va-phuc-dung-lai-lich-su.md](01-lich-su/chuong-1/bai-02-dua-vao-dau-de-biet-va-phuc-dung-lai-lich-su.md) |
| Bài 3 | Thời gian trong lịch sử | 14–15 | 16–17 | [bai-03-thoi-gian-trong-lich-su.md](01-lich-su/chuong-1/bai-03-thoi-gian-trong-lich-su.md) |

### Chương 2. Xã hội nguyên thuỷ
| Mục | Nội dung | Trang SGK | Trang PDF | File Markdown |
| :--- | :--- | :---: | :---: | :--- |
| Mở chương | Giới thiệu Chương 2 | 16 | 18 | [00-mo-dau-chuong-2.md](01-lich-su/chuong-2/00-mo-dau-chuong-2.md) |
| Bài 4 | Nguồn gốc loài người | 17–19 | 19–21 | [bai-04-nguon-goc-loai-nguoi.md](01-lich-su/chuong-2/bai-04-nguon-goc-loai-nguoi.md) |
| Bài 5 | Xã hội nguyên thuỷ | 20–23 | 22–25 | [bai-05-xa-hoi-nguyen-thuy.md](01-lich-su/chuong-2/bai-05-xa-hoi-nguyen-thuy.md) |
| Bài 6 | Sự chuyển biến và phân hoá của xã hội nguyên thuỷ | 24–27 | 26–29 | [bai-06-su-chuyen-bien-va-phan-hoa-cua-xa-hoi-nguyen-thuy.md](01-lich-su/chuong-2/bai-06-su-chuyen-bien-va-phan-hoa-cua-xa-hoi-nguyen-thuy.md) |

### Chương 3. Xã hội cổ đại
| Mục | Nội dung | Trang SGK | Trang PDF | File Markdown |
| :--- | :--- | :---: | :---: | :--- |
| Mở chương | Giới thiệu Chương 3 | 28 | 30 | [00-mo-dau-chuong-3.md](01-lich-su/chuong-3/00-mo-dau-chuong-3.md) |
| Bài 7 | Ai Cập và Lưỡng Hà cổ đại | 29–33 | 31–35 | [bai-07-ai-cap-va-luong-ha-co-dai.md](01-lich-su/chuong-3/bai-07-ai-cap-va-luong-ha-co-dai.md) |
| Bài 8 | Ấn Độ cổ đại | 34–38 | 36–40 | [bai-08-an-do-co-dai.md](01-lich-su/chuong-3/bai-08-an-do-co-dai.md) |
| Bài 9 | Trung Quốc cổ đại | 39–43 | 41–45 | [bai-09-trung-quoc-co-dai.md](01-lich-su/chuong-3/bai-09-trung-quoc-co-dai.md) |
| Bài 10 | Hy Lạp và La Mã cổ đại | 44–49 | 46–51 | [bai-10-hy-lap-va-la-ma-co-dai.md](01-lich-su/chuong-3/bai-10-hy-lap-va-la-ma-co-dai.md) |

### Chương 4. Đông Nam Á từ những thế kỉ tiếp giáp đầu Công nguyên đến thế kỉ X
| Mục | Nội dung | Trang SGK | Trang PDF | File Markdown |
| :--- | :--- | :---: | :---: | :--- |
| Mở chương | Giới thiệu Chương 4 | 50 | 52 | [00-mo-dau-chuong-4.md](01-lich-su/chuong-4/00-mo-dau-chuong-4.md) |
| Bài 11 | Các quốc gia sơ kì ở Đông Nam Á | 51–53 | 53–55 | [bai-11-cac-quoc-gia-so-ki-o-dong-nam-a.md](01-lich-su/chuong-4/bai-11-cac-quoc-gia-so-ki-o-dong-nam-a.md) |
| Bài 12 | Sự hình thành và bước đầu phát triển của các vương quốc phong kiến ở Đông Nam Á (từ thế kỉ VII đến thế kỉ X) | 54–55 | 56–57 | [bai-12-cac-vuong-quoc-phong-kien-o-dong-nam-a.md](01-lich-su/chuong-4/bai-12-cac-vuong-quoc-phong-kien-o-dong-nam-a.md) |
| Bài 13 | Giao lưu văn hoá ở Đông Nam Á từ đầu Công nguyên đến thế kỉ X | 56–58 | 58–60 | [bai-13-giao-luu-van-hoa-o-dong-nam-a.md](01-lich-su/chuong-4/bai-13-giao-luu-van-hoa-o-dong-nam-a.md) |

### Chương 5. Việt Nam từ khoảng thế kỉ VII trước Công nguyên đến đầu thế kỉ X
| Mục | Nội dung | Trang SGK | Trang PDF | File Markdown |
| :--- | :--- | :---: | :---: | :--- |
| Mở chương | Giới thiệu Chương 5 | 59 | 61 | [00-mo-dau-chuong-5.md](01-lich-su/chuong-5/00-mo-dau-chuong-5.md) |
| Bài 14 | Nhà nước Văn Lang, Âu Lạc | 60–64 | 62–66 | [bai-14-nha-nuoc-van-lang-au-lac.md](01-lich-su/chuong-5/bai-14-nha-nuoc-van-lang-au-lac.md) |
| Bài 15 | Chính sách cai trị của các triều đại phong kiến phương Bắc và sự chuyển biến của xã hội Âu Lạc | 65–69 | 67–71 | [bai-15-chinh-sach-cai-tri-cua-phuong-bac.md](01-lich-su/chuong-5/bai-15-chinh-sach-cai-tri-cua-phuong-bac.md) |
| Bài 16 | Các cuộc khởi nghĩa tiêu biểu giành độc lập trước thế kỉ X | 70–77 | 72–79 | [bai-16-cac-cuoc-khoi-nghia-tieu-bieu.md](01-lich-su/chuong-5/bai-16-cac-cuoc-khoi-nghia-tieu-bieu.md) |
| Bài 17 | Cuộc đấu tranh bảo tồn và phát triển văn hoá dân tộc của người Việt | 78–79 | 80–81 | [bai-17-dau-tranh-bao-ton-van-hoa-dan-toc.md](01-lich-su/chuong-5/bai-17-dau-tranh-bao-ton-van-hoa-dan-toc.md) |
| Bài 18 | Bước ngoặt lịch sử đầu thế kỉ X | 80–85 | 82–87 | [bai-18-buoc-ngoat-lich-su-dau-the-ki-x.md](01-lich-su/chuong-5/bai-18-buoc-ngoat-lich-su-dau-the-ki-x.md) |
| Bài 19 | Vương quốc Chăm-pa từ thế kỉ II đến thế kỉ X | 86–90 | 88–92 | [bai-19-vuong-quoc-cham-pa.md](01-lich-su/chuong-5/bai-19-vuong-quoc-cham-pa.md) |
| Bài 20 | Vương quốc Phù Nam | 91–94 | 93–96 | [bai-20-vuong-quoc-phu-nam.md](01-lich-su/chuong-5/bai-20-vuong-quoc-phu-nam.md) |

---

## PHẦN ĐỊA LÍ (SGK tr. 95–189 | PDF tr. 97–191)

### Bài mở đầu
| Mục | Nội dung | Trang SGK | Trang PDF | File Markdown |
| :--- | :--- | :---: | :---: | :--- |
| Bài mở đầu | Giới thiệu Phần Địa lí & Bài mở đầu | 95–100 | 97–102 | [bai-00-mo-dau.md](02-dia-ly/bai-00-mo-dau.md) |

### Chương 1. Bản đồ – Phương tiện thể hiện bề mặt Trái Đất
| Mục | Nội dung | Trang SGK | Trang PDF | File Markdown |
| :--- | :--- | :---: | :---: | :--- |
| Mở chương | Giới thiệu Chương 1 | 101 | 103 | [00-mo-dau-chuong-1.md](02-dia-ly/chuong-1/00-mo-dau-chuong-1.md) |
| Bài 1 | Hệ thống kinh, vĩ tuyến. Toạ độ địa lí | 102–103 | 104–105 | [bai-01-he-thong-kinh-vi-tuyen-toa-do-dia-li.md](02-dia-ly/chuong-1/bai-01-he-thong-kinh-vi-tuyen-toa-do-dia-li.md) |
| Bài 2 | Bản đồ. Một số lưới kinh, vĩ tuyến. Phương hướng trên bản đồ | 104–105 | 106–107 | [bai-02-ban-do-luoi-kinh-vi-tuyen-phuong-huong.md](02-dia-ly/chuong-1/bai-02-ban-do-luoi-kinh-vi-tuyen-phuong-huong.md) |
| Bài 3 | Tỉ lệ bản đồ. Tính khoảng cách thực tế dựa vào tỉ lệ bản đồ | 106–107 | 108–109 | [bai-03-ti-le-ban-do.md](02-dia-ly/chuong-1/bai-03-ti-le-ban-do.md) |
| Bài 4 | Kí hiệu và bảng chú giải bản đồ. Tìm đường đi trên bản đồ | 108–112 | 110–114 | [bai-04-ki-hieu-va-bang-chu-giai-ban-do.md](02-dia-ly/chuong-1/bai-04-ki-hieu-va-bang-chu-giai-ban-do.md) |
| Bài 5 | Lược đồ trí nhớ | 113–114 | 115–116 | [bai-05-luoc-do-tri-nho.md](02-dia-ly/chuong-1/bai-05-luoc-do-tri-nho.md) |

### Chương 2. Trái Đất – Hành tinh của Hệ Mặt Trời
> **Sản phẩm trực quan đã làm cho Chương 2:** [giai-ma-chi-tuyen-vong-cuc.html](giai-ma-chi-tuyen-vong-cuc.html) (Tab 4 Bản đồ chính) • [giai-ma-bon-mua-gan-xa-mat-troi.html](giai-ma-bon-mua-gan-xa-mat-troi.html) (Tab 5 Bản đồ chính)

| Mục | Nội dung | Trang SGK | Trang PDF | File Markdown |
| :--- | :--- | :---: | :---: | :--- |
| Mở chương | Giới thiệu Chương 2 | 115 | 117 | [00-mo-dau-chuong-2.md](02-dia-ly/chuong-2/00-mo-dau-chuong-2.md) |
| Bài 6 | Trái Đất trong hệ Mặt Trời | 116–117 | 118–119 | [bai-06-trai-dat-trong-he-mat-troi.md](02-dia-ly/chuong-2/bai-06-trai-dat-trong-he-mat-troi.md) |
| Bài 7 | Chuyển động tự quay quanh trục của Trái Đất và hệ quả | 118–121 | 120–123 | [bai-07-chuyen-dong-tu-quay-quanh-truc.md](02-dia-ly/chuong-2/bai-07-chuyen-dong-tu-quay-quanh-truc.md) |
| Bài 8 | Chuyển động của Trái Đất quanh Mặt Trời và hệ quả | 122–124 | 124–126 | [bai-08-chuyen-dong-quanh-mat-troi.md](02-dia-ly/chuong-2/bai-08-chuyen-dong-quanh-mat-troi.md) |
| Bài 9 | Xác định phương hướng ngoài thực tế | 125–127 | 127–129 | [bai-09-xac-dinh-phuong-huong-ngoai-thuc-te.md](02-dia-ly/chuong-2/bai-09-xac-dinh-phuong-huong-ngoai-thuc-te.md) |

### Chương 3. Cấu tạo của Trái Đất. Vỏ Trái Đất
| Mục | Nội dung | Trang SGK | Trang PDF | File Markdown |
| :--- | :--- | :---: | :---: | :--- |
| Mở chương | Giới thiệu Chương 3 | 128 | 130 | [00-mo-dau-chuong-3.md](02-dia-ly/chuong-3/00-mo-dau-chuong-3.md) |
| Bài 10 | Cấu tạo của Trái Đất. Các mảng kiến tạo | 129–130 | 131–132 | [bai-10-cau-tao-trai-dat-cac-mang-kien-tao.md](02-dia-ly/chuong-3/bai-10-cau-tao-trai-dat-cac-mang-kien-tao.md) |
| Bài 11 | Quá trình nội sinh và quá trình ngoại sinh. Hiện tượng tạo núi | 131–132 | 133–134 | [bai-11-noi-sinh-ngoai-sinh-tao-nui.md](02-dia-ly/chuong-3/bai-11-noi-sinh-ngoai-sinh-tao-nui.md) |
| Bài 12 | Núi lửa và động đất | 133–134 | 135–136 | [bai-12-nui-lua-va-dong-dat.md](02-dia-ly/chuong-3/bai-12-nui-lua-va-dong-dat.md) |
| Bài 13 | Các dạng địa hình chính trên Trái Đất. Khoáng sản | 135–138 | 137–140 | [bai-13-cac-dang-dia-hinh-chinh-khoang-san.md](02-dia-ly/chuong-3/bai-13-cac-dang-dia-hinh-chinh-khoang-san.md) |
| Bài 14 | Thực hành: Đọc lược đồ địa hình tỉ lệ lớn và lát cắt địa hình đơn giản | 139–140 | 141–142 | [bai-14-thuc-hanh-doc-luoc-do-dia-hinh.md](02-dia-ly/chuong-3/bai-14-thuc-hanh-doc-luoc-do-dia-hinh.md) |

### Chương 4. Khí hậu và biến đổi khí hậu
| Mục | Nội dung | Trang SGK | Trang PDF | File Markdown |
| :--- | :--- | :---: | :---: | :--- |
| Mở chương | Giới thiệu Chương 4 | 141 | 143 | [00-mo-dau-chuong-4.md](02-dia-ly/chuong-4/00-mo-dau-chuong-4.md) |
| Bài 15 | Lớp vỏ khí của Trái Đất. Khí áp và gió | 142–145 | 144–147 | [bai-15-lop-vo-khi-khi-ap-va-gio.md](02-dia-ly/chuong-4/bai-15-lop-vo-khi-khi-ap-va-gio.md) |
| Bài 16 | Nhiệt độ không khí. Mây và mưa | 146–149 | 148–151 | [bai-16-nhiet-do-khong-khi-may-va-mua.md](02-dia-ly/chuong-4/bai-16-nhiet-do-khong-khi-may-va-mua.md) |
| Bài 17 | Thời tiết và khí hậu. Biến đổi khí hậu | 150–152 | 152–154 | [bai-17-thoi-tiet-khi-hau-bien-doi-khi-hau.md](02-dia-ly/chuong-4/bai-17-thoi-tiet-khi-hau-bien-doi-khi-hau.md) |
| Bài 18 | Thực hành: Phân tích biểu đồ nhiệt độ, lượng mưa | 153–154 | 155–156 | [bai-18-thuc-hanh-bieu-do-nhiet-do-luong-mua.md](02-dia-ly/chuong-4/bai-18-thuc-hanh-bieu-do-nhiet-do-luong-mua.md) |

### Chương 5. Nước trên Trái Đất
| Mục | Nội dung | Trang SGK | Trang PDF | File Markdown |
| :--- | :--- | :---: | :---: | :--- |
| Mở chương | Giới thiệu Chương 5 | 155 | 157 | [00-mo-dau-chuong-5.md](02-dia-ly/chuong-5/00-mo-dau-chuong-5.md) |
| Bài 19 | Thuỷ quyển và vòng tuần hoàn lớn của nước | 156–157 | 158–159 | [bai-19-thuy-quyen-vong-tuan-hoan-nuoc.md](02-dia-ly/chuong-5/bai-19-thuy-quyen-vong-tuan-hoan-nuoc.md) |
| Bài 20 | Sông và hồ. Nước ngầm và băng hà | 158–162 | 160–164 | [bai-20-song-ho-nuoc-ngam-bang-ha.md](02-dia-ly/chuong-5/bai-20-song-ho-nuoc-ngam-bang-ha.md) |
| Bài 21 | Biển và đại dương | 163–166 | 165–168 | [bai-21-bien-va-dai-duong.md](02-dia-ly/chuong-5/bai-21-bien-va-dai-duong.md) |

### Chương 6. Đất và sinh vật trên Trái Đất
| Mục | Nội dung | Trang SGK | Trang PDF | File Markdown |
| :--- | :--- | :---: | :---: | :--- |
| Mở chương | Giới thiệu Chương 6 | 167 | 169 | [00-mo-dau-chuong-6.md](02-dia-ly/chuong-6/00-mo-dau-chuong-6.md) |
| Bài 22 | Lớp đất trên Trái Đất | 168–170 | 170–172 | [bai-22-lop-dat-tren-trai-dat.md](02-dia-ly/chuong-6/bai-22-lop-dat-tren-trai-dat.md) |
| Bài 23 | Sự sống trên Trái Đất | 171–172 | 173–174 | [bai-23-su-song-tren-trai-dat.md](02-dia-ly/chuong-6/bai-23-su-song-tren-trai-dat.md) |
| Bài 24 | Rừng nhiệt đới | 173–174 | 175–176 | [bai-24-rung-nhiet-doi.md](02-dia-ly/chuong-6/bai-24-rung-nhiet-doi.md) |
| Bài 25 | Sự phân bố các đới thiên nhiên trên Trái Đất | 175–176 | 177–178 | [bai-25-su-phan-bo-cac-doi-thien-nhien.md](02-dia-ly/chuong-6/bai-25-su-phan-bo-cac-doi-thien-nhien.md) |
| Bài 26 | Thực hành: Tìm hiểu môi trường tự nhiên địa phương | 177–178 | 179–180 | [bai-26-thuc-hanh-moi-truong-tu-nhien-dia-phuong.md](02-dia-ly/chuong-6/bai-26-thuc-hanh-moi-truong-tu-nhien-dia-phuong.md) |

### Chương 7. Con người và thiên nhiên
| Mục | Nội dung | Trang SGK | Trang PDF | File Markdown |
| :--- | :--- | :---: | :---: | :--- |
| Mở chương | Giới thiệu Chương 7 | 179 | 181 | [00-mo-dau-chuong-7.md](02-dia-ly/chuong-7/00-mo-dau-chuong-7.md) |
| Bài 27 | Dân số và sự phân bố dân cư trên thế giới | 180–183 | 182–185 | [bai-27-dan-so-va-phan-bo-dan-cu.md](02-dia-ly/chuong-7/bai-27-dan-so-va-phan-bo-dan-cu.md) |
| Bài 28 | Mối quan hệ giữa con người và thiên nhiên | 184–186 | 186–188 | [bai-28-moi-quan-he-con-nguoi-va-thien-nhien.md](02-dia-ly/chuong-7/bai-28-moi-quan-he-con-nguoi-va-thien-nhien.md) |
| Bài 29 | Bảo vệ tự nhiên và khai thác thông minh các tài nguyên thiên nhiên vì sự phát triển bền vững | 187–188 | 189–190 | [bai-29-bao-ve-tu-nhien-tai-nguyen.md](02-dia-ly/chuong-7/bai-29-bao-ve-tu-nhien-tai-nguyen.md) |
| Bài 30 | Thực hành: Tìm hiểu mối quan hệ giữa con người và thiên nhiên ở địa phương | 189 | 191 | [bai-30-thuc-hanh-con-nguoi-va-thien-nhien-dia-phuong.md](02-dia-ly/chuong-7/bai-30-thuc-hanh-con-nguoi-va-thien-nhien-dia-phuong.md) |

---

## PHỤ LỤC (SGK tr. 190–199 | PDF tr. 192–201)

| Mục | Nội dung | Trang SGK | Trang PDF | File Markdown |
| :--- | :--- | :---: | :---: | :--- |
| Phụ lục 1 | Bảng tra cứu thuật ngữ | 190–193 | 192–195 | [bang-tra-cuu-thuat-ngu.md](03-phu-luc/bang-tra-cuu-thuat-ngu.md) |
| Phụ lục 2 | Bảng phiên âm | 194–199 | 196–201 | [bang-phien-am.md](03-phu-luc/bang-phien-am.md) |
