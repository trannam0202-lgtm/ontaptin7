import { Lesson } from '../../types';

export const LESSONS_THEME4_EXTRA: Lesson[] = [
  {
    id: 'lesson_8_t4',
    number: 8,
    title: 'Bài 8: Công cụ hỗ trợ tính toán - Tìm kiếm, Thay thế, Sắp xếp và Lọc dữ liệu',
    themeId: 'theme_4',
    themeTitle: 'Chủ đề 4: Ứng dụng tin học',
    summary: [
      {
        title: '1. Tìm kiếm và thay thế dữ liệu trong bảng tính',
        content: [
          'Công cụ Tìm kiếm (Find): Nhấn tổ hợp phím Ctrl + F để mở hộp thoại Find. Dùng để định vị nhanh một từ, cụm từ hoặc con số trong bảng tính.',
          'Công cụ Thay thế (Replace): Nhấn tổ hợp phím Ctrl + H để mở hộp thoại Replace. Cho phép tìm chuỗi ký tự và thay thế bằng chuỗi ký tự mới tự động.'
        ],
        illustrationType: 'excel_tools'
      },
      {
        title: '2. Sắp xếp dữ liệu (Sort)',
        content: [
          'Mục đích: Đổi vị trí các hàng trong bảng tính theo thứ tự tăng dần (A-Z, từ nhỏ đến lớn) hoặc giảm dần (Z-A, từ lớn đến nhỏ).',
          'Các bước thực hiện: Chọn vùng dữ liệu -> Vào thẻ Data -> Chọn nút lệnh Sort A-Z hoặc Sort Z-A.'
        ]
      },
      {
        title: '3. Lọc dữ liệu (Filter)',
        content: [
          'Mục đích: Chọn và hiển thị các hàng thỏa mãn tiêu chuẩn nhất định, tạm thời ẩn các hàng còn lại.',
          'Các bước thực hiện: Chọn 1 ô trong bảng -> Vào thẻ Data -> Chọn Filter (xuất hiện các nút mũi tên ở tiêu đề cột) -> Nhấp mũi tên để chọn tiêu chuẩn lọc.'
        ]
      }
    ],
    questions: [
      // 12 Recall
      {
        id: 'b8t4_nb_1',
        category: 'recall',
        questionText: 'Tổ hợp phím nào dùng để mở hộp thoại TÌM KIẾM (Find) trong phần mềm bảng tính?',
        options: [{ key: 'A', text: 'Ctrl + F' }, { key: 'B', text: 'Ctrl + H' }, { key: 'C', text: 'Ctrl + S' }, { key: 'D', text: 'Ctrl + P' }],
        correctAnswer: 'A',
        explanation: 'Ctrl + F (Find) mở nhanh hộp thoại tìm kiếm chuỗi ký tự.'
      },
      {
        id: 'b8t4_nb_2',
        category: 'recall',
        questionText: 'Tổ hợp phím nào dùng để mở hộp thoại THAY THẾ (Replace) trong bảng tính?',
        options: [{ key: 'A', text: 'Ctrl + H' }, { key: 'B', text: 'Ctrl + F' }, { key: 'C', text: 'Ctrl + Z' }, { key: 'D', text: 'Ctrl + N' }],
        correctAnswer: 'A',
        explanation: 'Ctrl + H (Replace) mở hộp thoại thay thế nội dung.'
      },
      {
        id: 'b8t4_nb_3',
        category: 'recall',
        questionText: 'Để sắp xếp dữ liệu trong Excel, em truy cập vào thẻ (tab) nào trên thanh công cụ?',
        options: [{ key: 'A', text: 'Thẻ Data' }, { key: 'B', text: 'Thẻ View' }, { key: 'C', text: 'Thẻ Insert' }, { key: 'D', text: 'Thẻ Page Layout' }],
        correctAnswer: 'A',
        explanation: 'Thẻ Data chứa các công cụ quản lý dữ liệu như Sort và Filter.'
      },
      {
        id: 'b8t4_nb_4',
        category: 'recall',
        questionText: 'Biểu tượng nút lệnh Sort A-Z dùng để sắp xếp dữ liệu theo thứ tự nào?',
        options: [{ key: 'A', text: 'Thứ tự tăng dần (từ A đến Z hoặc từ nhỏ đến lớn)' }, { key: 'B', text: 'Thứ tự giảm dần' }, { key: 'C', text: 'Thứ tự ngẫu nhiên' }, { key: 'D', text: 'Giữ nguyên không đổi' }],
        correctAnswer: 'A',
        explanation: 'Sort A-Z sắp xếp dữ liệu tăng dần.'
      },
      {
        id: 'b8t4_nb_5',
        category: 'recall',
        questionText: 'Biểu tượng nút lệnh Sort Z-A dùng để sắp xếp dữ liệu theo thứ tự nào?',
        options: [{ key: 'A', text: 'Thứ tự giảm dần (từ Z về A hoặc từ lớn đến nhỏ)' }, { key: 'B', text: 'Thứ tự tăng dần' }, { key: 'C', text: 'Mặc định bàn phím' }, { key: 'D', text: 'Không sắp xếp' }],
        correctAnswer: 'A',
        explanation: 'Sort Z-A sắp xếp dữ liệu giảm dần.'
      },
      {
        id: 'b8t4_nb_6',
        category: 'recall',
        questionText: 'Công cụ LỌC DỮ LIỆU (Filter) có biểu tượng hình gì trên thanh Ribbon?',
        options: [{ key: 'A', text: 'Hình chiếc phễu' }, { key: 'B', text: 'Hình kính lúp' }, { key: 'C', text: 'Hình chiếc máy in' }, { key: 'D', text: 'Hình cái kéo' }],
        correctAnswer: 'A',
        explanation: 'Công cụ Filter hiển thị biểu tượng chiếc phễu lọc.'
      },
      {
        id: 'b8t4_nb_7',
        category: 'recall',
        questionText: 'Khi bật tính năng Filter, ở hàng tiêu đề cột xuất hiện các ký hiệu gì?',
        options: [{ key: 'A', text: 'Nút hình mũi tên trỏ xuống' }, { key: 'B', text: 'Dấu cộng đỏ' }, { key: 'C', text: 'Hình ngôi sao' }, { key: 'D', text: 'Dấu gạch ngang' }],
        correctAnswer: 'A',
        explanation: 'Các nút tam giác trỏ xuống xuất hiện ở tiêu đề từng cột.'
      },
      {
        id: 'b8t4_nb_8',
        category: 'recall',
        questionText: 'Sau khi lọc dữ liệu, các hàng không thỏa mãn điều kiện lọc sẽ ra sao?',
        options: [{ key: 'A', text: 'Tạm thời bị ẩn đi, không bị xóa khỏi bảng' }, { key: 'B', text: 'Bị xóa vĩnh viễn' }, { key: 'C', text: 'Bị đổi màu thành đỏ' }, { key: 'D', text: 'Chuyển sang trang mới' }],
        correctAnswer: 'A',
        explanation: 'Lọc chỉ ẩn tạm thời các hàng không thỏa mãn tiêu chuẩn.'
      },
      {
        id: 'b8t4_nb_9',
        category: 'recall',
        questionText: 'Để bỏ tính năng Lọc dữ liệu và hiển thị lại toàn bộ danh sách, em nhấp chuột lại vào nút lệnh nào?',
        options: [{ key: 'A', text: 'Nút Filter' }, { key: 'B', text: 'Nút Save' }, { key: 'C', text: 'Nút Copy' }, { key: 'D', text: 'Nút Print' }],
        correctAnswer: 'A',
        explanation: 'Nhấp chọn nút Filter lần nữa sẽ hủy chế độ lọc.'
      },
      {
        id: 'b8t4_nb_10',
        category: 'recall',
        questionText: 'Chức năng Replace All trong hộp thoại Find and Replace có tác dụng gì?',
        options: [{ key: 'A', text: 'Thay thế tất cả các kết quả tìm thấy cùng một lúc' }, { key: 'B', text: 'Chỉ thay thế vị trí đầu tiên' }, { key: 'C', text: 'Xóa toàn bộ trang tính' }, { key: 'D', text: 'Tắt máy tính' }],
        correctAnswer: 'A',
        explanation: 'Replace All thực hiện thay thế đồng loạt mọi vị trí trùng khớp.'
      },
      {
        id: 'b8t4_nb_11',
        category: 'recall',
        questionText: 'Tính năng Sắp xếp (Sort) có làm thay đổi vị trí ban đầu của các hàng trong bảng tính không?',
        options: [{ key: 'A', text: 'Có, các hàng được hoán đổi thứ tự dựa theo cột sắp xếp' }, { key: 'B', text: 'Không, vị trí giữ nguyên' }, { key: 'C', text: 'Chỉ làm mờ văn bản' }, { key: 'D', text: 'Chỉ xóa số thứ tự' }],
        correctAnswer: 'A',
        explanation: 'Sắp xếp đảo lại trật tự các hàng theo giá trị cột tiêu chuẩn.'
      },
      {
        id: 'b8t4_nb_12',
        category: 'recall',
        questionText: 'Khi lọc danh sách học sinh theo Nam/Nữ, nếu chọn "Nữ" thì kết quả hiển thị gồm những ai?',
        options: [{ key: 'A', text: 'Chỉ gồm các học sinh có giới tính là Nữ' }, { key: 'B', text: 'Tất cả học sinh Nam và Nữ' }, { key: 'C', text: 'Chỉ học sinh Nam' }, { key: 'D', text: 'Bảng trống không có ai' }],
        correctAnswer: 'A',
        explanation: 'Filter sẽ lọc chính xác các bản ghi khớp với lựa chọn "Nữ".'
      },

      // 8 Comprehension
      {
        id: 'b8t4_th_1',
        category: 'comprehension',
        questionText: 'Muốn tìm danh sách học sinh có điểm trung bình từ 8.0 trở lên, em nên sử dụng công cụ nào trong Excel?',
        options: [{ key: 'A', text: 'Công cụ Lọc dữ liệu (Filter) chọn Number Filters > Greater Than or Equal To 8.0' }, { key: 'B', text: 'Công cụ Find tìm chữ "Tốt"' }, { key: 'C', text: 'Dùng bút đỏ tô màu' }, { key: 'D', text: 'Đổi phông chữ' }],
        correctAnswer: 'A',
        explanation: 'Number Filters cho phép đặt điều kiện lọc số như >= 8.0.'
      },
      {
        id: 'b8t4_th_2',
        category: 'comprehension',
        questionText: 'Khi thực hiện sắp xếp danh sách học sinh theo tên tăng dần, cột Số thứ tự (STT) bị đảo lộn không còn từ 1, 2, 3... Em cần xử lý thế nào để STT chuẩn lại?',
        options: [{ key: 'A', text: 'Gõ lại chuỗi số 1, 2 rồi sử dụng kéo tay cầm AutoFill để điền lại STT' }, { key: 'B', text: 'Xóa cột STT đi không cần dùng nữa' }, { key: 'C', text: 'Tắt phần mềm không lưu' }, { key: 'D', text: 'Nhấn Alt + F4' }],
        correctAnswer: 'A',
        explanation: 'Sau khi xáo trộn hàng, điền lại STT bằng AutoFill là cách đúng.'
      },
      {
        id: 'b8t4_th_3',
        category: 'comprehension',
        questionText: 'Điểm khác biệt chính giữa Sắp xếp (Sort) và Lọc (Filter) là gì?',
        options: [{ key: 'A', text: 'Sort đổi thứ tự các hàng; Filter ẩn bớt các hàng không thỏa mãn điều kiện' }, { key: 'B', text: 'Sort xóa dữ liệu; Filter lưu tệp' }, { key: 'C', text: 'Sort chỉ dùng cho chữ; Filter chỉ dùng cho số' }, { key: 'D', text: 'Hai công cụ giống hệt nhau' }],
        correctAnswer: 'A',
        explanation: 'Sort trật tự dữ liệu, Filter sàng lọc tập hợp hiển thị.'
      },
      {
        id: 'b8t4_th_4',
        category: 'comprehension',
        questionText: 'Nếu em vô tình dùng Replace All và thay thế sai toàn bộ từ trong bảng, thao tác nào giúp khôi phục lại nhanh nhất?',
        options: [{ key: 'A', text: 'Nhấn tổ hợp phím Ctrl + Z (Undo)' }, { key: 'B', text: 'Nhấn Ctrl + S' }, { key: 'C', text: 'Gõ lại tay từng ô' }, { key: 'D', text: 'Rút phích cắm điện' }],
        correctAnswer: 'A',
        explanation: 'Ctrl + Z lập tức hoàn tác thao tác vừa thực hiện.'
      },
      {
        id: 'b8t4_th_5',
        category: 'comprehension',
        questionText: 'Muốn xếp thứ hạng thi đua các bạn trong lớp từ điểm cao nhất xuống điểm thấp nhất, em sử dụng tiêu chuẩn sắp xếp nào?',
        options: [{ key: 'A', text: 'Sắp xếp cột Điểm trung bình theo thứ tự Giảm dần (Sort Z-A)' }, { key: 'B', text: 'Sắp xếp Tăng dần (Sort A-Z)' }, { key: 'C', text: 'Sắp xếp theo thứ tự bảng chữ cái tên' }, { key: 'D', text: 'Sắp xếp theo ngày sinh' }],
        correctAnswer: 'A',
        explanation: 'Điểm cao nhất đứng đầu là trật tự Giảm dần.'
      },
      {
        id: 'b8t4_th_6',
        category: 'comprehension',
        questionText: 'Trường hợp nào sau đây nên dùng tính năng Find and Replace?',
        options: [{ key: 'A', text: 'Sửa lỗi gõ sai tên môn "Tin Hok" thành "Tin học" ở tất cả 100 hàng trong bảng' }, { key: 'B', text: 'Tính tổng điểm trung bình' }, { key: 'C', text: 'In bảng điểm ra giấy A4' }, { key: 'D', text: 'Vẽ biểu đồ hình tròn' }],
        correctAnswer: 'A',
        explanation: 'Sửa lỗi chính tả đồng loạt là thế mạnh của Find & Replace.'
      },
      {
        id: 'b8t4_th_7',
        category: 'comprehension',
        questionText: 'Nếu chọn một vùng dữ liệu không bao gồm hết các cột rồi thực hiện Sort, điều gì nguy hiểm có thể xảy ra?',
        options: [{ key: 'A', text: 'Dữ liệu các cột bị lệch hàng, sai lệch thông tin giữa các cá nhân' }, { key: 'B', text: 'Excel sẽ tự động đóng' }, { key: 'C', text: 'Màn hình bị đen' }, { key: 'D', text: 'Không ảnh hưởng gì' }],
        correctAnswer: 'A',
        explanation: 'Sắp xếp không bôi chọn đủ các cột liên quan gây râu ông nọ chắp cằm bà kia.'
      },
      {
        id: 'b8t4_th_8',
        category: 'comprehension',
        questionText: 'Nút Select All trong khoang tùy chọn Lọc (Filter) có công dụng gì?',
        options: [{ key: 'A', text: 'Tích chọn hoặc bỏ tích toàn bộ các giá trị để hiển thị lại đầy đủ' }, { key: 'B', text: 'Xóa toàn bộ bảng tính' }, { key: 'C', text: 'Tô màu vàng cho tất cả ô' }, { key: 'D', text: 'Đổi tên các cột' }],
        correctAnswer: 'A',
        explanation: 'Select All hỗ trợ chọn/bỏ chọn nhanh toàn danh mục.'
      },

      // 5 True/False
      {
        id: 'b8t4_ds_1',
        category: 'true_false',
        questionText: 'Tính năng Tìm kiếm và Thay thế (Find & Replace):',
        statements: [
          { id: 'b8t4_ds_1_a', text: 'a) Ctrl+F mở công cụ Find.', isTrue: true },
          { id: 'b8t4_ds_1_b', text: 'b) Ctrl+H mở công cụ Replace.', isTrue: true },
          { id: 'b8t4_ds_1_c', text: 'c) Công cụ Replace chỉ thay thế được dữ liệu dạng chữ, không thay được dạng số.', isTrue: false },
          { id: 'b8t4_ds_1_d', text: 'd) Nút Replace All giúp thay thế tất cả kết quả trùng khớp cùng lúc.', isTrue: true }
        ],
        explanation: 'Replace thay thế được cả văn bản lẫn con số.'
      },
      {
        id: 'b8t4_ds_2',
        category: 'true_false',
        questionText: 'Sắp xếp dữ liệu (Sort) trong bảng tính:',
        statements: [
          { id: 'b8t4_ds_2_a', text: 'a) Nút lệnh Sort A-Z sắp xếp dữ liệu tăng dần.', isTrue: true },
          { id: 'b8t4_ds_2_b', text: 'b) Nút lệnh Sort Z-A sắp xếp dữ liệu giảm dần.', isTrue: true },
          { id: 'b8t4_ds_2_c', text: 'c) Sắp xếp dữ liệu làm ẩn đi các hàng không thỏa mãn.', isTrue: false },
          { id: 'b8t4_ds_2_d', text: 'd) Thẻ Data chứa công cụ Sort.', isTrue: true }
        ],
        explanation: 'Sắp xếp chỉ thay đổi trật tự hàng, không làm ẩn hàng (Lọc mới ẩn hàng).'
      },
      {
        id: 'b8t4_ds_3',
        category: 'true_false',
        questionText: 'Lọc dữ liệu (Filter) trong bảng tính:',
        statements: [
          { id: 'b8t4_ds_3_a', text: 'a) Biểu tượng của Filter là hình chiếc phễu.', isTrue: true },
          { id: 'b8t4_ds_3_b', text: 'b) Khi lọc, các hàng bị che đi sẽ bị xóa mất vĩnh viễn.', isTrue: false },
          { id: 'b8t4_ds_3_c', text: 'c) Có thể lọc theo màu sắc ô tính hoặc điều kiện con số.', isTrue: true },
          { id: 'b8t4_ds_3_d', text: 'd) Nhấp lại nút Filter để tắt chế độ lọc.', isTrue: true }
        ],
        explanation: 'Lọc dữ liệu không xóa thông tin, chỉ tạm thời che giấu.'
      },
      {
        id: 'b8t4_ds_4',
        category: 'true_false',
        questionText: 'Thao tác chuẩn bị trước khi Sắp xếp và Lọc:',
        statements: [
          { id: 'b8t4_ds_4_a', text: 'a) Bảng tính nên có hàng tiêu đề cột rõ ràng.', isTrue: true },
          { id: 'b8t4_ds_4_b', text: 'b) Không nên gộp ô (Merge) ở vùng dữ liệu cần sắp xếp.', isTrue: true },
          { id: 'b8t4_ds_4_c', text: 'c) Đặt chuột vào trong bảng trước khi chọn Data > Filter.', isTrue: true },
          { id: 'b8t4_ds_4_d', text: 'd) Bắt buộc phải bôi đen toàn bộ máy tính mới sắp xếp được.', isTrue: false }
        ],
        explanation: 'Excel tự động nhận diện vùng dữ liệu liên tục xung quanh ô chọn.'
      },
      {
        id: 'b8t4_ds_5',
        category: 'true_false',
        questionText: 'Lợi ích của công cụ hỗ trợ tính toán trong Excel:',
        statements: [
          { id: 'b8t4_ds_5_a', text: 'a) Tiết kiệm thời gian xử lý các bảng dữ liệu lớn.', isTrue: true },
          { id: 'b8t4_ds_5_b', text: 'b) Tránh sai sót thủ công so với dò bằng mắt.', isTrue: true },
          { id: 'b8t4_ds_5_c', text: 'c) Giúp truy xuất nhanh học sinh giỏi, học sinh yếu.', isTrue: true },
          { id: 'b8t4_ds_5_d', text: 'd) Làm cho dung lượng tệp bảng tính tăng gấp 10 lần.', isTrue: false }
        ],
        explanation: 'Sắp xếp và lọc chỉ là thao tác xử lý hiển thị, không tăng dung lượng tệp.'
      }
    ]
  },
  {
    id: 'lesson_9',
    number: 9,
    title: 'Bài 9: Trình bày bảng tính - Định dạng Phông chữ, Căn lề, Gộp ô và Kẻ đường biên',
    themeId: 'theme_4',
    themeTitle: 'Chủ đề 4: Ứng dụng tin học',
    summary: [
      {
        title: '1. Định dạng phông chữ và màu sắc (Font & Color)',
        content: [
          'Các thuộc tính phông chữ: Font (Tên phông: Arial, Times New Roman, Calibri...), Size (Cỡ chữ), Bold (In đậm Ctrl+B), Italic (In nghiêng Ctrl+I), Underline (Gạch chân Ctrl+U).',
          'Màu sắc: Fill Color (Màu nền ô - biểu tượng thùng sơn), Font Color (Màu chữ - biểu tượng chữ A có gạch màu).'
        ],
        illustrationType: 'excel_format'
      },
      {
        title: '2. Căn lề và gộp ô tính (Alignment & Merge)',
        content: [
          'Căn vị trí dữ liệu trong ô: Căn lề ngang (Trái, Giữa, Phải) và Căn lề dọc (Trên, Giữa, Dưới).',
          'Gộp các ô tính: Sử dụng nút lệnh Merge & Center để gộp nhiều ô liền kề thành 1 ô duy nhất và căn giữa văn bản (Thường dùng cho tiêu đề bảng).'
        ]
      },
      {
        title: '3. Kẻ đường biên (Borders) và định dạng hiển thị số',
        content: [
          'Kẻ đường biên: Chọn khối ô -> Vào biểu tượng Borders -> Chọn All Borders để hiện khung đen rõ ràng khi in.',
          'Định dạng số: Thêm ký hiệu tiền tệ ($/VNĐ), định dạng phần trăm (%), thêm/bớt số chữ số thập phân (Increase/Decrease Decimal).'
        ]
      }
    ],
    questions: [
      // 12 Recall
      {
        id: 'b9_nb_1',
        category: 'recall',
        questionText: 'Nút lệnh Merge & Center có chức năng chính là gì?',
        options: [{ key: 'A', text: 'Gộp nhiều ô được chọn thành 1 ô và căn giữa nội dung' }, { key: 'B', text: 'Xóa toàn bộ nội dung ô' }, { key: 'C', text: 'In đậm chữ' }, { key: 'D', text: 'Tạo công thức tính tổng' }],
        correctAnswer: 'A',
        explanation: 'Merge & Center gộp các ô lại và căn văn bản vào giữa.'
      },
      {
        id: 'b9_nb_2',
        category: 'recall',
        questionText: 'Tổ hợp phím tắt Ctrl + B dùng để định dạng kiểu chữ nào?',
        options: [{ key: 'A', text: 'In đậm (Bold)' }, { key: 'B', text: 'In nghiêng (Italic)' }, { key: 'C', text: 'Gạch chân (Underline)' }, { key: 'D', text: 'Tô màu đỏ' }],
        correctAnswer: 'A',
        explanation: 'Ctrl + B (Bold) làm chữ in đậm nổi bật.'
      },
      {
        id: 'b9_nb_3',
        category: 'recall',
        questionText: 'Tổ hợp phím tắt Ctrl + I dùng để định dạng kiểu chữ nào?',
        options: [{ key: 'A', text: 'In nghiêng (Italic)' }, { key: 'B', text: 'In đậm' }, { key: 'C', text: 'Gạch chân' }, { key: 'D', text: 'Đổi phông chữ' }],
        correctAnswer: 'A',
        explanation: 'Ctrl + I (Italic) làm chữ in nghiêng.'
      },
      {
        id: 'b9_nb_4',
        category: 'recall',
        questionText: 'Tổ hợp phím tắt Ctrl + U dùng để định dạng kiểu chữ nào?',
        options: [{ key: 'A', text: 'Gạch chân (Underline)' }, { key: 'B', text: 'In đậm' }, { key: 'C', text: 'In nghiêng' }, { key: 'D', text: 'Xóa chữ' }],
        correctAnswer: 'A',
        explanation: 'Ctrl + U (Underline) tạo nét gạch bên dưới chữ.'
      },
      {
        id: 'b9_nb_5',
        category: 'recall',
        questionText: 'Để tô màu nền cho ô tính trong Excel, em chọn biểu tượng nào trong nhóm Font?',
        options: [{ key: 'A', text: 'Biểu tượng thùng sơn đổ (Fill Color)' }, { key: 'B', text: 'Biểu tượng chữ A gạch màu (Font Color)' }, { key: 'C', text: 'Biểu tượng cây kéo' }, { key: 'D', text: 'Biểu tượng đĩa mềm' }],
        correctAnswer: 'A',
        explanation: 'Fill Color (thùng sơn) thay đổi màu nền ô.'
      },
      {
        id: 'b9_nb_6',
        category: 'recall',
        questionText: 'Để đổi màu chữ của văn bản trong ô tính, em dùng biểu tượng nào?',
        options: [{ key: 'A', text: 'Biểu tượng chữ A có dải màu phía dưới (Font Color)' }, { key: 'B', text: 'Biểu tượng thùng sơn' }, { key: 'C', text: 'Nút Merge & Center' }, { key: 'D', text: 'Nút Wrap Text' }],
        correctAnswer: 'A',
        explanation: 'Font Color (chữ A) dùng để đổi màu sắc chữ.'
      },
      {
        id: 'b9_nb_7',
        category: 'recall',
        questionText: 'Mặc định khi xem trên màn hình Excel có các lưới ô xám, nhưng khi IN RA GIẤY nếu không kẻ Borders thì sao?',
        options: [{ key: 'A', text: 'Bảng sẽ trắng tinh không có viền kẻ phân cách' }, { key: 'B', text: 'Bảng tự động kẻ viền đen đậm' }, { key: 'C', text: 'Bảng sẽ bị biến mất' }, { key: 'D', text: 'Máy in báo lỗi' }],
        correctAnswer: 'A',
        explanation: 'Lưới xám chỉ là đường hướng dẫn màn hình, phải kẻ Borders mới in ra khung.'
      },
      {
        id: 'b9_nb_8',
        category: 'recall',
        questionText: 'Lựa chọn nào trong mục Borders dùng để kẻ đầy đủ các đường khung ngang dọc cho toàn bộ khối ô?',
        options: [{ key: 'A', text: 'All Borders' }, { key: 'B', text: 'No Border' }, { key: 'C', text: 'Top Border' }, { key: 'D', text: 'Thick Outside Borders' }],
        correctAnswer: 'A',
        explanation: 'All Borders bao phủ kẻ khung cho mọi đường lưới bên trong và ngoài.'
      },
      {
        id: 'b9_nb_9',
        category: 'recall',
        questionText: 'Nút lệnh Wrap Text có tác dụng gì đối với văn bản quá dài trong một ô?',
        options: [{ key: 'A', text: 'Tự động ngắt dòng văn bản xuống nhiều dòng bên trong cùng một ô' }, { key: 'B', text: 'Xóa bớt văn bản thừa' }, { key: 'C', text: 'Chuyển văn bản sang ô bên phải' }, { key: 'D', text: 'Tăng kích thước phông chữ' }],
        correctAnswer: 'A',
        explanation: 'Wrap Text ngắt dòng tự động giúp hiển thị hết chữ trong độ rộng cột.'
      },
      {
        id: 'b9_nb_10',
        category: 'recall',
        questionText: 'Các tùy chọn định dạng cơ bản như Font, Alignment, Number nằm ở thẻ (tab) nào trên thanh Ribbon?',
        options: [{ key: 'A', text: 'Thẻ Home' }, { key: 'B', text: 'Thẻ Data' }, { key: 'C', text: 'Thẻ Formulas' }, { key: 'D', text: 'Thẻ Review' }],
        correctAnswer: 'A',
        explanation: 'Thẻ Home chứa toàn bộ các công cụ định dạng thiết yếu.'
      },
      {
        id: 'b9_nb_11',
        category: 'recall',
        questionText: 'Nút lệnh % (Percent Style) dùng để chuyển định dạng số 0.15 thành dạng hiển thị nào?',
        options: [{ key: 'A', text: '15%' }, { key: 'B', text: '0.15%' }, { key: 'C', text: '150%' }, { key: 'D', text: '1.5%' }],
        correctAnswer: 'A',
        explanation: '0.15 x 100% = 15%.'
      },
      {
        id: 'b9_nb_12',
        category: 'recall',
        questionText: 'Nút lệnh Increase Decimal dùng để làm gì trong định dạng số?',
        options: [{ key: 'A', text: 'Tăng thêm số chữ số ở phần thập phân (sau dấu phẩy)' }, { key: 'B', text: 'Giảm số chữ số thập phân' }, { key: 'C', text: 'Xóa dấu phẩy' }, { key: 'D', text: 'Nhân số đó với 10' }],
        correctAnswer: 'A',
        explanation: 'Increase Decimal làm tăng số chữ số hiển thị sau phần thập phân.'
      },

      // 8 Comprehension
      {
        id: 'b9_th_1',
        category: 'comprehension',
        questionText: 'Để dòng tiêu đề "BẢNG ĐIỂM LỚP 7A" nằm đẹp mắt ở chính giữa phía trên bảng gồm 5 cột A, B, C, D, E, em cần thực hiện thao tác gì?',
        options: [{ key: 'A', text: 'Bôi đen khối ô A1:E1 rồi chọn nút Merge & Center' }, { key: 'B', text: 'Gõ chữ vào ô C1 rồi bấm dấu cách' }, { key: 'C', text: 'Kéo độ rộng cột A thật to' }, { key: 'D', text: 'Chọn Wrap Text' }],
        correctAnswer: 'A',
        explanation: 'Merge & Center A1:E1 gộp 5 ô tiêu đề và căn chính giữa chuẩn.'
      },
      {
        id: 'b9_th_2',
        category: 'comprehension',
        questionText: 'Một bảng dữ liệu có màu sắc lòe loẹt, phông chữ lung tung 3-4 loại khác nhau thì bị coi là định dạng ra sao?',
        options: [{ key: 'A', text: 'Trình bày thiếu chuyên nghiệp, gây rối mắt và khó theo dõi' }, { key: 'B', text: 'Rất đẹp và ấn tượng' }, { key: 'C', text: 'Giúp máy tính chạy nhanh hơn' }, { key: 'D', text: 'Đạt chuẩn quốc tế' }],
        correctAnswer: 'A',
        explanation: 'Định dạng bảng tính cần nhất quán, trang nhã và đồng bộ phông chữ.'
      },
      {
        id: 'b9_th_3',
        category: 'comprehension',
        questionText: 'Nút Format Painter (biểu tượng cây chổi quét) giúp em làm công việc gì nhanh chóng?',
        options: [{ key: 'A', text: 'Sao chép toàn bộ định dạng (màu sắc, phông chữ, đường viền) từ ô này sang ô khác' }, { key: 'B', text: 'Xóa dữ liệu trong ô' }, { key: 'C', text: 'Quét sạch virus trong tệp' }, { key: 'D', text: 'Đổi tên tệp Excel' }],
        correctAnswer: 'A',
        explanation: 'Format Painter copy trang phục/định dạng của ô chọn sang ô mới.'
      },
      {
        id: 'b9_th_4',
        category: 'comprehension',
        questionText: 'Nếu ô A1 hiển thị con số 1234567, sau khi áp dụng định dạng Currency (Tiền tệ VNĐ) sẽ đổi thành dạng hiển thị nào?',
        options: [{ key: 'A', text: '1.234.567 VNĐ (dễ đọc hơn nhờ phân cách hàng nghìn)' }, { key: 'B', text: '1234567' }, { key: 'C', text: 'Báo lỗi ###' }, { key: 'D', text: 'Chuyển thành chữ' }],
        correctAnswer: 'A',
        explanation: 'Định dạng tiền tệ bổ sung dấu phân cách lớp hàng nghìn và đơn vị tiền.'
      },
      {
        id: 'b9_th_5',
        category: 'comprehension',
        questionText: 'Khi gộp ô bằng Merge & Center, nếu trong các ô ban đầu đều có chữ thì điều gì xảy ra với dữ liệu?',
        options: [{ key: 'A', text: 'Excel chỉ giữ lại dữ liệu của ô góc trên bên trái, dữ liệu các ô khác bị hủy' }, { key: 'B', text: 'Tất cả chữ gộp chung lại' }, { key: 'C', text: 'Chữ biến thành số' }, { key: 'D', text: 'Không cho phép gộp' }],
        correctAnswer: 'A',
        explanation: 'Cảnh báo của Excel nêu rõ Merge chỉ giữ nội dung của ô đầu tiên.'
      },
      {
        id: 'b9_th_6',
        category: 'comprehension',
        questionText: 'Tác dụng của việc tô màu nền khác biệt cho hàng Tiêu đề cột (Header row) trong bảng tính là gì?',
        options: [{ key: 'A', text: 'Giúp phân biệt rõ ràng giữa tên cột và các hàng dữ liệu bên dưới' }, { key: 'B', text: 'Bắt buộc để Excel tính đúng công thức' }, { key: 'C', text: 'Để in ra đỡ tốn mực' }, { key: 'D', text: 'Để khóa bảng tính lại' }],
        correctAnswer: 'A',
        explanation: 'Nền nổi bật cho hàng tiêu đề giúp người đọc định vị cột dễ dàng.'
      },
      {
        id: 'b9_th_7',
        category: 'comprehension',
        questionText: 'Muốn bỏ gộp ô cho một ô đã Merge & Center trước đó, em làm gì?',
        options: [{ key: 'A', text: 'Chọn lại ô đó rồi nhấp chuột vào nút Merge & Center một lần nữa' }, { key: 'B', text: 'Nhấn phím Delete' }, { key: 'C', text: 'Nhấn Alt + Tab' }, { key: 'D', text: 'Xóa luôn hàng đó' }],
        correctAnswer: 'A',
        explanation: 'Nhấp chọn lại nút Merge & Center sẽ hủy thao tác gộp ô (Unmerge).'
      },
      {
        id: 'b9_th_8',
        category: 'comprehension',
        questionText: 'Khi định dạng điểm số 8.333333333 thành 8.33 bằng nút Decrease Decimal, giá trị thực sự lưu trong bộ nhớ máy tính có bị đổi không?',
        options: [{ key: 'A', text: 'Không, giá trị gốc vẫn là 8.333333333, chỉ là hiển thị 8.33 cho gọn' }, { key: 'B', text: 'Có, giá trị gốc bị xén bớt còn 8.33' }, { key: 'C', text: 'Chuyển thành số 8' }, { key: 'D', text: 'Chuyển thành số 9' }],
        correctAnswer: 'A',
        explanation: 'Định dạng hiển thị chỉ thay đổi cách nhìn ngoài màn hình, độ chính xác gốc vẫn lưu đủ.'
      },

      // 5 True/False
      {
        id: 'b9_ds_1',
        category: 'true_false',
        questionText: 'Định dạng kiểu chữ và phông chữ trong Excel:',
        statements: [
          { id: 'b9_ds_1_a', text: 'a) Thẻ Home chứa nhóm lệnh Font.', isTrue: true },
          { id: 'b9_ds_1_b', text: 'b) Ctrl+B là in đậm, Ctrl+I là in nghiêng, Ctrl+U là gạch chân.', isTrue: true },
          { id: 'b9_ds_1_c', text: 'c) Không thể đổi màu chữ trong phần mềm bảng tính.', isTrue: false },
          { id: 'b9_ds_1_d', text: 'd) Nên chọn phông chữ đồng nhất cho toàn bộ bảng tính.', isTrue: true }
        ],
        explanation: 'Màu chữ hoàn toàn thay đổi được bằng nút Font Color.'
      },
      {
        id: 'b9_ds_2',
        category: 'true_false',
        questionText: 'Thao tác Căn lề và Gộp ô:',
        statements: [
          { id: 'b9_ds_2_a', text: 'a) Merge & Center gộp các ô chọn và căn giữa.', isTrue: true },
          { id: 'b9_ds_2_b', text: 'b) Có thể căn lề dữ liệu theo chiều dọc (Top, Middle, Bottom).', isTrue: true },
          { id: 'b9_ds_2_c', text: 'c) Wrap Text giúp tự động xuống dòng trong ô.', isTrue: true },
          { id: 'b9_ds_2_d', text: 'd) Khi gộp ô, tất cả dữ liệu ở mọi ô sẽ được tự động giữ nguyên 100%.', isTrue: false }
        ],
        explanation: 'Gộp ô chỉ giữ lại nội dung của ô góc trên bên trái.'
      },
      {
        id: 'b9_ds_3',
        category: 'true_false',
        questionText: 'Kẻ đường biên (Borders) cho bảng tính:',
        statements: [
          { id: 'b9_ds_3_a', text: 'a) Lưới xám mặc định trên màn hình sẽ tự động in ra đường viền đen đậm.', isTrue: false },
          { id: 'b9_ds_3_b', text: 'b) Nút lệnh All Borders kẻ khung cho toàn bộ khối ô.', isTrue: true },
          { id: 'b9_ds_3_c', text: 'c) Có thể thay đổi màu sắc và độ dày đường viền kẻ khung.', isTrue: true },
          { id: 'b9_ds_3_d', text: 'd) Kẻ khung giúp bảng tính rõ ràng và đẹp mắt hơn.', isTrue: true }
        ],
        explanation: 'Lưới xám chỉ là đường dựng màn hình, cần All Borders để in ra đường viền.'
      },
      {
        id: 'b9_ds_4',
        category: 'true_false',
        questionText: 'Định dạng số trong Excel:',
        statements: [
          { id: 'b9_ds_4_a', text: 'a) % biến số 0.2 thành 20%.', isTrue: true },
          { id: 'b9_ds_4_b', text: 'b) Increase Decimal tăng số chữ số thập phân.', isTrue: true },
          { id: 'b9_ds_4_c', text: 'c) Decrease Decimal giảm số chữ số thập phân.', isTrue: true },
          { id: 'b9_ds_4_d', text: 'd) Định dạng số làm thay đổi vĩnh viễn kết quả công thức tính toán.', isTrue: false }
        ],
        explanation: 'Định dạng số chỉ thay đổi diện mạo hiển thị, không làm đổi bản chất giá trị số.'
      },
      {
        id: 'b9_ds_5',
        category: 'true_false',
        questionText: 'Công cụ Format Painter:',
        statements: [
          { id: 'b9_ds_5_a', text: 'a) Biểu tượng của Format Painter là chiếc phễu.', isTrue: false },
          { id: 'b9_ds_5_b', text: 'b) Giúp chép nhanh định dạng từ ô mẫu sang các ô khác.', isTrue: true },
          { id: 'b9_ds_5_c', text: 'c) Giúp tiết kiệm thời gian thiết kế trang tính.', isTrue: true },
          { id: 'b9_ds_5_d', text: 'd) Nhấp đúp vào Format Painter cho phép dán định dạng nhiều lần liên tiếp.', isTrue: true }
        ],
        explanation: 'Biểu tượng của Format Painter là cây chổi quét, không phải chiếc phễu (phễu là Filter).'
      }
    ]
  },
  {
    id: 'lesson_10',
    number: 10,
    title: 'Bài 10: Hoàn thiện bảng tính - Thiết lập trang in, Ngắt trang và In ấn',
    themeId: 'theme_4',
    themeTitle: 'Chủ đề 4: Ứng dụng tin học',
    summary: [
      {
        title: '1. Thiết lập trang in (Page Setup)',
        content: [
          'Hướng giấy (Orientation): Hướng đứng (Portrait) hoặc Hướng ngang (Landscape). Chọn hướng ngang khi bảng có nhiều cột.',
          'Kích thước khổ giấy (Size): Chọn khổ giấy chuẩn như A4, A3, Letter...',
          'Lề trang in (Margins): Điều chỉnh lề Trên (Top), Dưới (Bottom), Trái (Left), Phải (Right).'
        ],
        illustrationType: 'excel_sheet'
      },
      {
        title: '2. Căn chỉnh trang in và ngắt trang (Page Break)',
        content: [
          'Chế độ xem trang in: Chế độ Normal, Page Layout, Page Break Preview.',
          'Điều chỉnh đường ngắt trang: Kéo thả các đường nét đứt màu xanh trong Page Break Preview để điều chỉnh nội dung nằm vừa vặn trên 1 trang in.',
          'Lặp lại hàng tiêu đề (Print Titles): Giúp các trang sau tự động in lại hàng tiêu đề cột, dễ đọc.'
        ]
      },
      {
        title: '3. Xem trước và In ấn (Print Preview & Print)',
        content: [
          'Tổ hợp phím Ctrl + P: Mở giao diện Print xem trước toàn bộ trang in trước khi xuất ra máy in.',
          'Các tùy chọn in: In trang tính hiện tại (Print Active Sheets), In toàn bộ sổ tính (Print Entire Workbook), In vùng bôi đen (Print Selection).'
        ]
      }
    ],
    questions: [
      // 12 Recall
      {
        id: 'b10_nb_1',
        category: 'recall',
        questionText: 'Tổ hợp phím tắt nào dùng để xem trước và mở nhanh giao diện IN (Print)?',
        options: [{ key: 'A', text: 'Ctrl + P' }, { key: 'B', text: 'Ctrl + S' }, { key: 'C', text: 'Ctrl + O' }, { key: 'D', text: 'Ctrl + N' }],
        correctAnswer: 'A',
        explanation: 'Ctrl + P (Print) mở cửa sổ thiết lập in ấn.'
      },
      {
        id: 'b10_nb_2',
        category: 'recall',
        questionText: 'Tùy chọn Orientation > Landscape dùng để đặt hướng giấy in như thế nào?',
        options: [{ key: 'A', text: 'Hướng giấy nằm ngang' }, { key: 'B', text: 'Hướng giấy nằm đứng' }, { key: 'C', text: 'Hướng giấy hình vuông' }, { key: 'D', text: 'Hướng giấy hình tròn' }],
        correctAnswer: 'A',
        explanation: 'Landscape cài đặt trang in nằm ngang.'
      },
      {
        id: 'b10_nb_3',
        category: 'recall',
        questionText: 'Tùy chọn Orientation > Portrait dùng để đặt hướng giấy in như thế nào?',
        options: [{ key: 'A', text: 'Hướng giấy nằm đứng' }, { key: 'B', text: 'Hướng giấy nằm ngang' }, { key: 'C', text: 'In hai mặt' }, { key: 'D', text: 'In thu nhỏ' }],
        correctAnswer: 'A',
        explanation: 'Portrait cài đặt trang in nằm đứng.'
      },
      {
        id: 'b10_nb_4',
        category: 'recall',
        questionText: 'Đối với bảng tính có rất NHIỀU CỘT trải rộng theo chiều ngang, em nên chọn hướng giấy nào khi in?',
        options: [{ key: 'A', text: 'Hướng nằm ngang (Landscape)' }, { key: 'B', text: 'Hướng nằm đứng (Portrait)' }, { key: 'C', text: 'Không chọn hướng giấy' }, { key: 'D', text: 'Xóa bớt cột' }],
        correctAnswer: 'A',
        explanation: 'Hướng ngang giúp hiển thị trọn vẹn nhiều cột trên một trang in.'
      },
      {
        id: 'b10_nb:5',
        category: 'recall',
        questionText: 'Khổ giấy tiêu chuẩn được sử dụng phổ biến nhất trong in ấn học tập và văn phòng tại Việt Nam là gì?',
        options: [{ key: 'A', text: 'Khổ giấy A4' }, { key: 'B', text: 'Khổ giấy A0' }, { key: 'C', text: 'Khổ giấy Letter' }, { key: 'D', text: 'Khổ giấy B5' }],
        correctAnswer: 'A',
        explanation: 'Khổ A4 là chuẩn văn bản phổ biến nhất.'
      },
      {
        id: 'b10_nb_6',
        category: 'recall',
        questionText: 'Để điều chỉnh khoảng cách lề trên, lề dưới, lề trái, lề phải của trang in, em vào mục nào trong Page Setup?',
        options: [{ key: 'A', text: 'Margins' }, { key: 'B', text: 'Orientation' }, { key: 'C', text: 'Size' }, { key: 'D', text: 'Background' }],
        correctAnswer: 'A',
        explanation: 'Margins quản lý khoảng cách lề canh trang.'
      },
      {
        id: 'b10_nb_7',
        category: 'recall',
        questionText: 'Chế độ xem nào giúp em thấy rõ ranh giới các trang in và cho phép kéo thả đường ngắt trang xanh?',
        options: [{ key: 'A', text: 'Page Break Preview' }, { key: 'B', text: 'Normal' }, { key: 'C', text: 'Full Screen' }, { key: 'D', text: 'Web Layout' }],
        correctAnswer: 'A',
        explanation: 'Page Break Preview hiển thị các đường phân trang trực quan.'
      },
      {
        id: 'b10_nb_8',
        category: 'recall',
        questionText: 'Tính năng Print Titles trong thẻ Page Layout dùng để làm gì?',
        options: [{ key: 'A', text: 'Cài đặt lặp lại hàng tiêu đề ở tất cả các trang khi in ra' }, { key: 'B', text: 'Tạo màu chữ cho tiêu đề' }, { key: 'C', text: 'Xóa tiêu đề bảng' }, { key: 'D', text: 'Đổi phông chữ' }],
        correctAnswer: 'A',
        explanation: 'Print Titles giúp lặp lại hàng tiêu đề cột qua nhiều trang in.'
      },
      {
        id: 'b10_nb_9',
        category: 'recall',
        questionText: 'Các công cụ như Margins, Orientation, Size, Print Titles nằm ở thẻ (tab) nào trên thanh Ribbon?',
        options: [{ key: 'A', text: 'Thẻ Page Layout' }, { key: 'B', text: 'Thẻ Insert' }, { key: 'C', text: 'Thẻ View' }, { key: 'D', text: 'Thẻ Home' }],
        correctAnswer: 'A',
        explanation: 'Thẻ Page Layout chứa các thiết lập trang in.'
      },
      {
        id: 'b10_nb_10',
        category: 'recall',
        questionText: 'Tùy chọn Print Selection trong giao diện in có ý nghĩa gì?',
        options: [{ key: 'A', text: 'Chỉ in vùng dữ liệu đang được bôi đen chọn' }, { key: 'B', text: 'In toàn bộ file Excel' }, { key: 'C', text: 'In trang đầu tiên' }, { key: 'D', text: 'In 10 bản' }],
        correctAnswer: 'A',
        explanation: 'Print Selection giới hạn chỉ in vùng ô được đánh dấu chọn.'
      },
      {
        id: 'b10_nb_11',
        category: 'recall',
        questionText: 'Tại sao cần phải xem trước trang in (Print Preview) trước khi bấm lệnh In?',
        options: [{ key: 'A', text: 'Để kiểm tra xem bảng tính có bị ngắt đôi, lệch trang hay tràn lề không nhằm tránh lãng phí giấy' }, { key: 'B', text: 'Bắt buộc nếu không máy tính sẽ hỏng' }, { key: 'C', text: 'Để máy in tự sửa lỗi' }, { key: 'D', text: 'Để đổi phông chữ tự động' }],
        correctAnswer: 'A',
        explanation: 'Print Preview giúp phát hiện lỗi lệch trang bảo vệ tiết kiệm mực và giấy.'
      },
      {
        id: 'b10_nb_12',
        category: 'recall',
        questionText: 'Mục Copies trong cửa sổ In dùng để chọn điều gì?',
        options: [{ key: 'A', text: 'Số lượng bản in ra giấy' }, { key: 'B', text: 'Số trang in' }, { key: 'C', text: 'Tên máy in' }, { key: 'D', text: 'Màu mực in' }],
        correctAnswer: 'A',
        explanation: 'Copies quyết định số bản sao muốn in ra.'
      },

      // 8 Comprehension
      {
        id: 'b10_th_1',
        category: 'comprehension',
        questionText: 'Bảng điểm lớp 7A có 10 cột, khi bấm Ctrl+P thấy cột thứ 10 bị đẩy sang trang in thứ 2 cô độc. Cách xử lý nào sau đây hợp lý nhất?',
        options: [{ key: 'A', text: 'Đổi hướng giấy sang Landscape (Ngang) hoặc thu nhỏ bớt độ rộng các cột / giảm Margins' }, { key: 'B', text: 'Xóa bỏ cột thứ 10' }, { key: 'C', text: 'Dùng kéo cắt trang 2 dán vào trang 1' }, { key: 'D', text: 'Tắt máy tính' }],
        correctAnswer: 'A',
        explanation: 'Đổi hướng giấy sang nằm ngang và co lề giúp thu toàn bộ cột vào 1 trang.'
      },
      {
        id: 'b10_th_2',
        category: 'comprehension',
        questionText: 'Một danh sách gồm 300 học sinh in ra 6 trang giấy. Từ trang thứ 2 trở đi người đọc không biết cột nào là điểm Toán, cột nào là điểm Tin. Cần dùng tính năng gì?',
        options: [{ key: 'A', text: 'Dùng Print Titles chọn hàng tiêu đề (Rows to repeat at top)' }, { key: 'B', text: 'Copy thủ công hàng tiêu đề chèn vào giữa bảng' }, { key: 'C', text: 'Gõ lại tên từng trang' }, { key: 'D', text: 'In trên khổ A0' }],
        correctAnswer: 'A',
        explanation: 'Rows to repeat at top lặp tiêu đề tự động chuyên nghiệp.'
      },
      {
        id: 'b10_th_3',
        category: 'comprehension',
        questionText: 'Trong Page Setup, tính năng Fit to 1 page wide by 1 page tall có ý nghĩa gì?',
        options: [{ key: 'A', text: 'Tự động thu nhỏ tỷ lệ bảng tính vừa khít đúng trong 1 trang in' }, { key: 'B', text: 'Phóng to bảng tính gấp 10 lần' }, { key: 'C', text: 'Xóa hết định dạng' }, { key: 'D', text: 'In làm 2 bản' }],
        correctAnswer: 'A',
        explanation: 'Fit to ép toàn bộ dữ liệu tự co dãn vừa vặn 1 trang.'
      },
      {
        id: 'b10_th_4',
        category: 'comprehension',
        questionText: 'Đường nét đứt màu xanh dương xuất hiện trong chế độ Page Break Preview thể hiện điều gì?',
        options: [{ key: 'A', text: 'Vị trí tự động ngắt trang in của Excel' }, { key: 'B', text: 'Đường biên được kẻ All Borders' }, { key: 'C', text: 'Vùng bị lỗi công thức' }, { key: 'D', text: 'Vùng bị khóa' }],
        correctAnswer: 'A',
        explanation: 'Đường nét đứt biểu thị ranh giới chia trang tự động.'
      },
      {
        id: 'b10_th_5',
        category: 'comprehension',
        questionText: 'Muốn đưa bảng tính ra chính giữa trang in theo chiều ngang (không bị lệch sang trái), em chọn tùy chọn nào trong Margins > Custom Margins?',
        options: [{ key: 'A', text: 'Tích chọn Horizontally trong mục Center on page' }, { key: 'B', text: 'Tích chọn Vertically' }, { key: 'C', text: 'Tăng lề trái thật to' }, { key: 'D', text: 'Đổi khổ giấy' }],
        correctAnswer: 'A',
        explanation: 'Center on page > Horizontally giúp căn bảng cân đối giữa trang in.'
      },
      {
        id: 'b10_th_6',
        category: 'comprehension',
        questionText: 'Lợi ích của việc thiết lập Header và Footer (Tiêu đề đầu trang và chân trang) khi in bảng tính là gì?',
        options: [{ key: 'A', text: 'Hiển thị tự động số trang (ví dụ Trang 1/5), tên tệp, ngày giờ in ở đỉnh hoặc đáy trang' }, { key: 'B', text: 'Giúp tính toán công thức nhanh hơn' }, { key: 'C', text: 'Tự động tô màu bảng' }, { key: 'D', text: 'Diệt virus tệp in' }],
        correctAnswer: 'A',
        explanation: 'Header/Footer thêm các thông tin quản lý hồ sơ chuyên nghiệp.'
      },
      {
        id: 'b10_th_7',
        category: 'comprehension',
        questionText: 'Trường hợp nào nên chọn tùy chọn Print Active Sheets?',
        options: [{ key: 'A', text: 'Khi chỉ muốn in duy nhất Sheet đang mở làm việc hiện tại' }, { key: 'B', text: 'Khi muốn in tất cả 20 Sheet trong file' }, { key: 'C', text: 'Khi muốn in 1 dòng' }, { key: 'D', text: 'Khi máy in hết giấy' }],
        correctAnswer: 'A',
        explanation: 'Print Active Sheets chỉ in nội dung trang tính hiện thời.'
      },
      {
        id: 'b10_th_8',
        category: 'comprehension',
        questionText: 'Nếu máy in in ra trang giấy trắng tinh không có chữ, nguyên nhân phổ biến nhất về thiết lập in là gì?',
        options: [{ key: 'A', text: 'Đặt sai vùng Print Area ở ô trống hoặc máy in bị tắc mực/hết mực' }, { key: 'B', text: 'Do chưa bấm Ctrl+S' }, { key: 'C', text: 'Do dùng phông chữ Times New Roman' }, { key: 'D', text: 'Do lưu tệp dạng .xlsx' }],
        correctAnswer: 'A',
        explanation: 'Thiết lập sai Print Area vào ô trống sẽ khiến máy in ra trang giấy trắng.'
      },

      // 5 True/False
      {
        id: 'b10_ds_1',
        category: 'true_false',
        questionText: 'Thiết lập hướng giấy và khổ giấy trong Excel:',
        statements: [
          { id: 'b10_ds_1_a', text: 'a) Portrait là hướng giấy đứng.', isTrue: true },
          { id: 'b10_ds_1_b', text: 'b) Landscape là hướng giấy ngang.', isTrue: true },
          { id: 'b10_ds_1_c', text: 'c) Bảng tính rộng nhiều cột nên ưu tiên chọn Landscape.', isTrue: true },
          { id: 'b10_ds_1_d', text: 'd) Không thể thay đổi khổ giấy A4 trong phần mềm Excel.', isTrue: false }
        ],
        explanation: 'Excel hỗ trợ đổi rất nhiều khổ giấy như A3, A4, Letter, Legal...'
      },
      {
        id: 'b10_ds_2',
        category: 'true_false',
        questionText: 'Chế độ ngắt trang và căn chỉnh trang in:',
        statements: [
          { id: 'b10_ds_2_a', text: 'a) Page Break Preview hỗ trợ điều chỉnh đường ngắt trang.', isTrue: true },
          { id: 'b10_ds_2_b', text: 'b) Kéo đường nét đứt màu xanh giúp thay đổi ranh giới phân trang.', isTrue: true },
          { id: 'b10_ds_2_c', text: 'c) Thẻ Page Layout chứa nút lệnh Margins.', isTrue: true },
          { id: 'b10_ds_2_d', text: 'd) Căn lề Margins càng to thì nội dung chứa trên trang in càng được nhiều.', isTrue: false }
        ],
        explanation: 'Lề càng to thì vùng chứa dữ liệu bên trong càng bị thu hẹp.'
      },
      {
        id: 'b10_ds_3',
        category: 'true_false',
        questionText: 'Lặp lại hàng tiêu đề khi in (Print Titles):',
        statements: [
          { id: 'b10_ds_3_a', text: 'a) Giúp trang 2, 3... tự động xuất hiện hàng tiêu đề cột.', isTrue: true },
          { id: 'b10_ds_3_b', text: 'b) Giúp người đọc dễ theo dõi thông tin ở các trang sau.', isTrue: true },
          { id: 'b10_ds_3_c', text: 'c) Bắt buộc phải copy hàng tiêu đề dán thủ công từng trang.', isTrue: false },
          { id: 'b10_ds_3_d', text: 'd) Lựa chọn Rows to repeat at top dùng để chỉ định hàng tiêu đề.', isTrue: true }
        ],
        explanation: 'Print Titles lặp tự động, tuyệt đối không copy thủ công làm hỏng bảng.'
      },
      {
        id: 'b10_ds_4',
        category: 'true_false',
        questionText: 'Xem trước và thực hiện lệnh in (Print):',
        statements: [
          { id: 'b10_ds_4_a', text: 'a) Phím tắt Ctrl+P mở cửa sổ in.', isTrue: true },
          { id: 'b10_ds_4_b', text: 'b) Print Preview giúp phát hiện trang in bị lệch ranh giới.', isTrue: true },
          { id: 'b10_ds_4_c', text: 'c) Copies chọn số lượng bản in.', isTrue: true },
          { id: 'b10_ds_4_d', text: 'd) Đã bấm lệnh in thì không thể hủy được trang in.', isTrue: false }
        ],
        explanation: 'Có thể hủy lệnh in trong cửa sổ quản lý máy in (Printer Queue).'
      },
      {
        id: 'b10_ds_5',
        category: 'true_false',
        questionText: 'Thói quen hoàn thiện trang tính tiết kiệm và bảo vệ môi trường:',
        statements: [
          { id: 'b10_ds_5_a', text: 'a) Kiểm tra kỹ Print Preview trước khi bấm in.', isTrue: true },
          { id: 'b10_ds_5_b', text: 'b) Tận dụng in 2 mặt giấy đối với tài liệu nháp.', isTrue: true },
          { id: 'b10_ds_5_c', text: 'c) Điều chỉnh vừa vặn trang in tránh in thừa 1 dòng ở trang sau.', isTrue: true },
          { id: 'b10_ds_5_d', text: 'd) Luôn luôn in màu tất cả mọi tài liệu.', isTrue: false }
        ],
        explanation: 'In trắng đen tiết kiệm mực và chi phí hơn so với in màu.'
      }
    ]
  },
  {
    id: 'lesson_11',
    number: 11,
    title: 'Bài 11: Tạo bài trình chiếu - Phần mềm PowerPoint và Cấu trúc Trang chiếu',
    themeId: 'theme_4',
    themeTitle: 'Chủ đề 4: Ứng dụng tin học',
    summary: [
      {
        title: '1. Phần mềm trình chiếu và Vai trò',
        content: [
          'Phần mềm trình chiếu (PowerPoint, Google Slides): Dùng để tạo các bài trình chiếu điện tử phục vụ thuyết trình, giảng dạy, báo cáo.',
          'Sản phẩm tạo ra: Tệp bài trình chiếu bao gồm tập hợp các trang chiếu (Slides).'
        ],
        illustrationType: 'powerpoint_layout'
      },
      {
        title: '2. Cấu trúc bài trình chiếu và Trang chiếu mới',
        content: [
          'Trang tiêu đề (Title Slide): Trang đầu tiên của bài trình chiếu, chứa Tên đề tài và Tên người/nhóm thực hiện.',
          'Các trang nội dung (Content Slides): Các trang tiếp theo, chứa Tiêu đề trang (Slide Title) và Nội dung chi tiết (Văn bản dạng Bullet, hình ảnh, sơ đồ).',
          'Thao tác thêm trang mới: Chọn New Slide (Ctrl + M) hoặc chọn bố cục mẫu (Layout).'
        ]
      },
      {
        title: '3. Chèn văn bản và hình ảnh vào trang chiếu',
        content: [
          'Khung chứa văn bản (Text Box): Mọi văn bản trên trang chiếu phải nằm trong một khung Text Box.',
          'Chèn hình ảnh: Vào thẻ Insert -> Pictures -> Chọn ảnh từ máy tính để tăng tính trực quan cho bài thuyết trình.'
        ]
      }
    ],
    questions: [
      // 12 Recall
      {
        id: 'b11_nb_1',
        category: 'recall',
        questionText: 'Tổ hợp phím tắt nào dùng để TẠO MỚI MỘT TRANG CHIẾU (New Slide) trong PowerPoint?',
        options: [{ key: 'A', text: 'Ctrl + M' }, { key: 'B', text: 'Ctrl + N' }, { key: 'C', text: 'Ctrl + S' }, { key: 'D', text: 'Ctrl + P' }],
        correctAnswer: 'A',
        explanation: 'Ctrl + M tạo thêm một slide mới vào bài trình chiếu.'
      },
      {
        id: 'b11_nb_2',
        category: 'recall',
        questionText: 'Trang chiếu ĐẦU TIÊN trong bài trình chiếu thường là loại trang nào?',
        options: [{ key: 'A', text: 'Trang tiêu đề (Title Slide)' }, { key: 'B', text: 'Trang nội dung' }, { key: 'C', text: 'Trang cảm ơn' }, { key: 'D', text: 'Trang bảng biểu' }],
        correctAnswer: 'A',
        explanation: 'Trang đầu tiên là trang tiêu đề giới thiệu tên chủ đề và người thực hiện.'
      },
      {
        id: 'b11_nb_3',
        category: 'recall',
        questionText: 'Tổ hợp phím Ctrl + N trong phần mềm PowerPoint có chức năng gì?',
        options: [{ key: 'A', text: 'Tạo một tệp BÀI TRÌNH CHIẾU MỚI hoàn toàn' }, { key: 'B', text: 'Tạo thêm 1 trang chiếu' }, { key: 'C', text: 'Tải ảnh lên' }, { key: 'D', text: 'Lưu tệp' }],
        correctAnswer: 'A',
        explanation: 'Ctrl + N tạo mới toàn bộ tệp trình chiếu (Presentation).'
      },
      {
        id: 'b11_nb_4',
        category: 'recall',
        questionText: 'Phím nào trên bàn phím dùng để BẮT ĐẦU TRÌNH CHIẾU bài thuyết trình từ trang đầu tiên?',
        options: [{ key: 'A', text: 'Phím F5' }, { key: 'B', text: 'Phím F1' }, { key: 'C', text: 'Phím Esc' }, { key: 'D', text: 'Phím Enter' }],
        correctAnswer: 'A',
        explanation: 'Phím F5 phát trình chiếu từ trang slide thứ nhất.'
      },
      {
        id: 'b11_nb_5',
        category: 'recall',
        questionText: 'Tổ hợp phím Shift + F5 có chức năng gì khi trình chiếu?',
        options: [{ key: 'A', text: 'Bắt đầu trình chiếu từ TRANG CHIẾU HIỆN TẠI đang chọn' }, { key: 'B', text: 'Trình chiếu từ trang đầu' }, { key: 'C', text: 'Thoát khỏi trình chiếu' }, { key: 'D', text: 'Xóa trang chiếu' }],
        correctAnswer: 'A',
        explanation: 'Shift + F5 phát trình chiếu ngay tại trang đang làm việc.'
      },
      {
        id: 'b11_nb_6',
        category: 'recall',
        questionText: 'Phím nào dùng để THOÁT KHỎI chế độ trình chiếu quay về màn hình soạn thảo?',
        options: [{ key: 'A', text: 'Phím Esc' }, { key: 'B', text: 'Phím F5' }, { key: 'C', text: 'Phím Spacebar' }, { key: 'D', text: 'Phím Alt' }],
        correctAnswer: 'A',
        explanation: 'Phím Esc (Escape) thoát khỏi màn hình trình chiếu toàn màn hình.'
      },
      {
        id: 'b11_nb_7',
        category: 'recall',
        questionText: 'Văn bản trên trang chiếu bắt buộc phải gõ vào đâu?',
        options: [{ key: 'A', text: 'Khung chứa văn bản (Text Box / Placeholder)' }, { key: 'B', text: 'Gõ trực tiếp lên nền slide' }, { key: 'C', text: 'Thanh trạng thái' }, { key: 'D', text: 'Thanh công thức' }],
        correctAnswer: 'A',
        explanation: 'Mọi chữ trên trang chiếu đều nằm trong khung Text Box.'
      },
      {
        id: 'b11_nb_8',
        category: 'recall',
        questionText: 'Để chèn hình ảnh từ máy tính vào trang chiếu, em chọn thẻ nào trên thanh công cụ?',
        options: [{ key: 'A', text: 'Thẻ Insert > Pictures' }, { key: 'B', text: 'Thẻ View' }, { key: 'C', text: 'Thẻ Animations' }, { key: 'D', text: 'Thẻ Transitions' }],
        correctAnswer: 'A',
        explanation: 'Insert > Pictures chèn tệp ảnh vào slide.'
      },
      {
        id: 'b11_nb_9',
        category: 'recall',
        questionText: 'Mẫu bố cục định sẵn trên trang chiếu (ví dụ: Title and Content, Two Content) được gọi là gì?',
        options: [{ key: 'A', text: 'Layout' }, { key: 'B', text: 'Theme' }, { key: 'C', text: 'Font' }, { key: 'D', text: 'Effect' }],
        correctAnswer: 'A',
        explanation: 'Layout định nghĩa vị trí sắp xếp khung văn bản và hình ảnh.'
      },
      {
        id: 'b11_nb_10',
        category: 'recall',
        questionText: 'Đuôi mở rộng mặc định của tệp trình chiếu Microsoft PowerPoint là gì?',
        options: [{ key: 'A', text: '.pptx' }, { key: 'B', text: '.docx' }, { key: 'C', text: '.xlsx' }, { key: 'D', text: '.mp4' }],
        correctAnswer: 'A',
        explanation: '.pptx là định dạng chính của PowerPoint.'
      },
      {
        id: 'b11_nb_11',
        category: 'recall',
        questionText: 'Thao tác nhấp chuột phải vào một trang chiếu ở cột bên trái rồi chọn Delete Slide có tác dụng gì?',
        options: [{ key: 'A', text: 'Xóa trang chiếu đó khỏi bài trình chiếu' }, { key: 'B', text: 'Nhân đôi trang chiếu' }, { key: 'C', text: 'Ẩn trang chiếu' }, { key: 'D', text: 'Đổi phông chữ' }],
        correctAnswer: 'A',
        explanation: 'Delete Slide loại bỏ slide khỏi bài.'
      },
      {
        id: 'b11_nb_12',
        category: 'recall',
        questionText: 'Lựa chọn Duplicate Slide có tác dụng gì đối với trang chiếu?',
        options: [{ key: 'A', text: 'Tạo ra một bản sao giống hệt trang chiếu đang chọn' }, { key: 'B', text: 'Xóa trang chiếu' }, { key: 'C', text: 'Lưu bài trình chiếu' }, { key: 'D', text: 'In bài trình chiếu' }],
        correctAnswer: 'A',
        explanation: 'Duplicate Slide nhân bản slide hiện tại.'
      },

      // 8 Comprehension
      {
        id: 'b11_th_1',
        category: 'comprehension',
        questionText: 'Yêu cầu quan trọng nhất về mặt nội dung văn bản trên một trang chiếu là gì?',
        options: [{ key: 'A', text: 'Cô đọng, ngắt thành các ý chính (Bullet points), tránh viết thành đoạn văn quá dài' }, { key: 'B', text: 'Viết càng nhiều chữ đầy kín trang càng tốt' }, { key: 'C', text: 'Không được gõ chữ Tiếng Việt' }, { key: 'D', text: 'Dùng toàn chữ in hoa' }],
        correctAnswer: 'A',
        explanation: 'Trang chiếu cần cô đọng để người nghe nắm bắt từ khóa nhanh.'
      },
      {
        id: 'b11_th_2',
        category: 'comprehension',
        questionText: 'Sự khác biệt giữa bài thuyết trình dùng phần mềm trình chiếu và thuyết trình bằng lời nói thuần túy là gì?',
        options: [{ key: 'A', text: 'Bài trình chiếu kết hợp hình ảnh, sơ đồ, video giúp minh họa sinh động, cuốn hút hơn' }, { key: 'B', text: 'Phần mềm trình chiếu tự nói thay con người' }, { key: 'C', text: 'Trình chiếu không cần người thuyết trình' }, { key: 'D', text: 'Không có điểm khác biệt' }],
        correctAnswer: 'A',
        explanation: 'Trình chiếu bổ sung trực quan đa phương tiện minh họa thuyết phục.'
      },
      {
        id: 'b11_th_3',
        category: 'comprehension',
        questionText: 'Khi thuyết trình về "Các loài động vật quý hiếm", trang chiếu nên bổ sung thành phần nào để đạt hiệu quả cao nhất?',
        options: [{ key: 'A', text: 'Hình ảnh thực tế sinh động của các loài động vật đó' }, { key: 'B', text: 'Thật nhiều đoạn văn bản chữ nhỏ' }, { key: 'C', text: 'Các công thức toán học' }, { key: 'D', text: 'Mã nguồn lập trình' }],
        correctAnswer: 'A',
        explanation: 'Hình ảnh thực tế động vật làm sinh động và cuốn hút người xem.'
      },
      {
        id: 'b11_th_4',
        category: 'comprehension',
        questionText: 'Thao tác kéo thả các trang chiếu ở ngăn danh sách bên trái giúp em thực hiện công việc gì?',
        options: [{ key: 'A', text: 'Thay đổi thứ tự xuất hiện của các trang chiếu trong bài' }, { key: 'B', text: 'Đổi màu nền slide' }, { key: 'C', text: 'Sửa lỗi chính tả' }, { key: 'D', text: 'Phóng to chữ' }],
        correctAnswer: 'A',
        explanation: 'Kéo thả danh sách điều chỉnh thứ tự diễn tiến trình chiếu.'
      },
      {
        id: 'b11_th_5',
        category: 'comprehension',
        questionText: 'Nếu chữ trên trang chiếu quá nhỏ người ngồi cuối phòng không đọc được, em xử lý ra sao?',
        options: [{ key: 'A', text: 'Chọn văn bản và tăng cỡ chữ (Font size) lên khoảng 24-32pt cho nội dung, 36-44pt cho tiêu đề' }, { key: 'B', text: 'Đổi màu chữ sang màu vàng' }, { key: 'C', text: 'Gõ thêm nhiều chữ' }, { key: 'D', text: 'Tắt màn hình máy chiếu' }],
        correctAnswer: 'A',
        explanation: 'Cỡ chữ slide chuẩn cần tối thiểu 24pt cho nội dung để đảm bảo người xem rõ ràng.'
      },
      {
        id: 'b11_th_6',
        category: 'comprehension',
        questionText: 'Tại sao không nên chọn phông chữ quá cầu kỳ, uốn lượn ngoằn ngoèo khi làm bài trình chiếu?',
        options: [{ key: 'A', text: 'Gây rối mắt, rất khó đọc khi chiếu lên màn hình lớn' }, { key: 'B', text: 'Vì PowerPoint sẽ báo lỗi' }, { key: 'C', text: 'Vì ảnh hưởng đến dung lượng đĩa' }, { key: 'D', text: 'Vì chữ sẽ bị biến mất' }],
        correctAnswer: 'A',
        explanation: 'Phông chữ uốn lượn khó quan sát từ khoảng cách xa.'
      },
      {
        id: 'b11_th_7',
        category: 'comprehension',
        questionText: 'Tại sao trang tiêu đề (Slide 1) thường chỉ có Tên đề tài và Tên người làm mà không chứa nội dung chi tiết?',
        options: [{ key: 'A', text: 'Để người nghe tập trung nắm được chủ đề tổng quan trước khi đi vào chi tiết' }, { key: 'B', text: 'Vì trang 1 không gõ được nhiều chữ' }, { key: 'C', text: 'Do PowerPoint bắt buộc' }, { key: 'D', text: 'Để tiết kiệm điện' }],
        correctAnswer: 'A',
        explanation: 'Trang đầu giữ vai trò định hướng sự chú ý ban đầu.'
      },
      {
        id: 'b11_th_8',
        category: 'comprehension',
        questionText: 'Khi bấm phím Spacebar (Thanh cách) hoặc Mũi tên sang phải trong lúc trình chiếu, điều gì xảy ra?',
        options: [{ key: 'A', text: 'Chuyển sang hiệu ứng hoặc trang chiếu kế tiếp' }, { key: 'B', text: 'Quay lại trang chiếu trước' }, { key: 'C', text: 'Thoát bài trình chiếu' }, { key: 'D', text: 'Xóa trang chiếu' }],
        correctAnswer: 'A',
        explanation: 'Mũi tên phải/Spacebar điều khiển tiến tới slide tiếp theo.'
      },

      // 5 True/False
      {
        id: 'b11_ds_1',
        category: 'true_false',
        questionText: 'Các phím tắt trình chiếu trong PowerPoint:',
        statements: [
          { id: 'b11_ds_1_a', text: 'a) Phím F5 bắt đầu trình chiếu từ slide đầu tiên.', isTrue: true },
          { id: 'b11_ds_1_b', text: 'b) Shift+F5 trình chiếu từ slide đang làm việc.', isTrue: true },
          { id: 'b11_ds_1_c', text: 'c) Esc dùng để thoát chế độ trình chiếu.', isTrue: true },
          { id: 'b11_ds_1_d', text: 'd) Ctrl+M dùng để lưu tệp trình chiếu.', isTrue: false }
        ],
        explanation: 'Ctrl+M là thêm slide mới, Ctrl+S mới là lưu tệp.'
      },
      {
        id: 'b11_ds_2',
        category: 'true_false',
        questionText: 'Cấu trúc bài trình chiếu chuẩn:',
        statements: [
          { id: 'b11_ds_2_a', text: 'a) Trang đầu tiên thường là Trang tiêu đề.', isTrue: true },
          { id: 'b11_ds_2_b', text: 'b) Các trang sau chứa nội dung chi tiết bài báo cáo.', isTrue: true },
          { id: 'b11_ds_2_c', text: 'c) Nên có trang kết luận hoặc lời cảm ơn ở cuối bài.', isTrue: true },
          { id: 'b11_ds_2_d', text: 'd) Mọi trang chiếu phải có cấu trúc giống hệt trang 1.', isTrue: false }
        ],
        explanation: 'Mỗi slide có thể chọn bối cảnh bố cục Layout khác nhau.'
      },
      {
        id: 'b11_ds_3',
        category: 'true_false',
        questionText: 'Chèn văn bản và hình ảnh vào trang chiếu:',
        statements: [
          { id: 'b11_ds_3_a', text: 'a) Văn bản gõ trong khung Text Box.', isTrue: true },
          { id: 'b11_ds_3_b', text: 'b) Thẻ Insert > Pictures dùng để chèn ảnh.', isTrue: true },
          { id: 'b11_ds_3_c', text: 'c) Có thể thay đổi kích thước và di chuyển hình ảnh dễ dàng.', isTrue: true },
          { id: 'b11_ds_3_d', text: 'd) Bài trình chiếu không được phép chèn hình ảnh.', isTrue: false }
        ],
        explanation: 'Chèn hình ảnh giúp bài trình chiếu trực quan và hấp dẫn hơn.'
      },
      {
        id: 'b11_ds_4',
        category: 'true_false',
        questionText: 'Quy tắc thiết kế nội dung văn bản slide:',
        statements: [
          { id: 'b11_ds_4_a', text: 'a) Nội dung nên cô đọng, viết dưới dạng các ý ngắn (Bullet points).', isTrue: true },
          { id: 'b11_ds_4_b', text: 'b) Cỡ chữ nên đủ to (từ 24pt trở lên) để dễ quan sát.', isTrue: true },
          { id: 'b11_ds_4_c', text: 'c) Tránh đưa cả đoạn văn bản quá dài lên trang chiếu.', isTrue: true },
          { id: 'b11_ds_4_d', text: 'd) Càng gõ nhiều chữ thì bài thuyết trình càng thành công.', isTrue: false }
        ],
        explanation: 'Slide quá nhiều chữ khiến người xem mệt mỏi và không tập trung.'
      },
      {
        id: 'b11_ds_5',
        category: 'true_false',
        questionText: 'Thao tác quản lý các trang chiếu:',
        statements: [
          { id: 'b11_ds_5_a', text: 'a) Delete Slide xóa trang chiếu chọn.', isTrue: true },
          { id: 'b11_ds_5_b', text: 'b) Duplicate Slide tạo bản sao trang chiếu.', isTrue: true },
          { id: 'b11_ds_5_c', text: 'c) Có thể thay đổi thứ tự slide bằng kéo thả chuột.', isTrue: true },
          { id: 'b11_ds_5_d', text: 'd) PowerPoint chỉ cho phép tạo tối đa 5 trang chiếu.', isTrue: false }
        ],
        explanation: 'PowerPoint cho phép tạo số lượng slide tùy thích theo nhu cầu.'
      }
    ]
  },
  {
    id: 'lesson_12',
    number: 12,
    title: 'Bài 12: Định dạng đối tượng trên trang chiếu - Mẫu giao diện, Màu sắc và Hiệu ứng',
    themeId: 'theme_4',
    themeTitle: 'Chủ đề 4: Ứng dụng tin học',
    summary: [
      {
        title: '1. Sử dụng Mẫu giao diện định sẵn (Theme)',
        content: [
          'Thẻ Design: Chứa các mẫu giao diện Theme có sẵn thiết kế hài hòa về màu nền, phông chữ, định dạng khung.',
          'Lợi ích: Giúp toàn bộ bài trình chiếu có phong cách đồng nhất, đẹp mắt chỉ sau một nhấp chuột.'
        ],
        illustrationType: 'powerpoint_format'
      },
      {
        title: '2. Định dạng văn bản và hình ảnh nâng cao',
        content: [
          'Tương phản màu sắc: Chọn màu chữ tương phản cao với màu nền (Nền sáng - Chữ tối hoặc Nền tối - Chữ sáng).',
          'Định dạng hình ảnh: Thay đổi kích thước, cắt ảnh (Crop), tạo viền khung ảnh, áp dụng kiểu dáng khung ảnh trong Picture Format.'
        ]
      },
      {
        title: '3. Tạo hiệu ứng chuyển trang và hiệu ứng đối tượng',
        content: [
          'Hiệu ứng chuyển trang (Transitions): Hiệu ứng xuất hiện khi chuyển từ slide này sang slide khác (Vào thẻ Transitions).',
          'Hiệu ứng đối tượng (Animations): Hiệu ứng xuất hiện, nhấn mạnh hoặc biến mất của từng văn bản, hình ảnh trong slide (Vào thẻ Animations).'
        ]
      }
    ],
    questions: [
      // 12 Recall
      {
        id: 'b12_nb_1',
        category: 'recall',
        questionText: 'Thẻ (tab) nào trên thanh Ribbon chứa các MẪU GIAO DIỆN (Themes) định sẵn cho bài trình chiếu?',
        options: [{ key: 'A', text: 'Thẻ Design' }, { key: 'B', text: 'Thẻ Insert' }, { key: 'C', text: 'Thẻ Animations' }, { key: 'D', text: 'Thẻ Review' }],
        correctAnswer: 'A',
        explanation: 'Thẻ Design chứa kho bộ mẫu giao diện Theme.'
      },
      {
        id: 'b12_nb_2',
        category: 'recall',
        questionText: 'Hiệu ứng CHUYỂN TRANG CHIẾU (chuyển từ slide này sang slide khác) được thiết lập ở thẻ nào?',
        options: [{ key: 'A', text: 'Thẻ Transitions' }, { key: 'B', text: 'Thẻ Animations' }, { key: 'C', text: 'Thẻ Home' }, { key: 'D', text: 'Thẻ View' }],
        correctAnswer: 'A',
        explanation: 'Thẻ Transitions chứa các hiệu ứng chuyển đổi slide.'
      },
      {
        id: 'b12_nb_3',
        category: 'recall',
        questionText: 'Hiệu ứng ĐỐI TƯỢNG (làm cho từng dòng chữ, bức ảnh xuất hiện lần lượt) được thiết lập ở thẻ nào?',
        options: [{ key: 'A', text: 'Thẻ Animations' }, { key: 'B', text: 'Thẻ Transitions' }, { key: 'C', text: 'Thẻ Design' }, { key: 'D', text: 'Thẻ File' }],
        correctAnswer: 'A',
        explanation: 'Thẻ Animations quy định hiệu ứng chuyển động của các đối tượng.'
      },
      {
        id: 'b12_nb_4',
        category: 'recall',
        questionText: 'Trong thẻ Animations, nhóm hiệu ứng màu XANH LÁ CÂY (Entrance) có tác dụng gì?',
        options: [{ key: 'A', text: 'Hiệu ứng XUẤT HIỆN đối tượng trên slide' }, { key: 'B', text: 'Hiệu ứng biến mất' }, { key: 'C', text: 'Hiệu ứng nhấn mạnh' }, { key: 'D', text: 'Hiệu ứng di chuyển' }],
        correctAnswer: 'A',
        explanation: 'Nhóm màu xanh Entrance làm đối tượng xuất hiện lên màn hình.'
      },
      {
        id: 'b12_nb_5',
        category: 'recall',
        questionText: 'Trong thẻ Animations, nhóm hiệu ứng màu ĐỎ (Exit) có tác dụng gì?',
        options: [{ key: 'A', text: 'Hiệu ứng BIẾN MẤT (Thoát) đối tượng khỏi slide' }, { key: 'B', text: 'Hiệu ứng xuất hiện' }, { key: 'C', text: 'Hiệu ứng đổi màu' }, { key: 'D', text: 'Hiệu ứng xoay tròn' }],
        correctAnswer: 'A',
        explanation: 'Nhóm màu đỏ Exit làm đối tượng biến mất khỏi màn hình.'
      },
      {
        id: 'b12_nb_6',
        category: 'recall',
        questionText: 'Trong thẻ Animations, nhóm hiệu ứng màu VÀNG (Emphasis) có tác dụng gì?',
        options: [{ key: 'A', text: 'Hiệu ứng NHẤN MẠNH (nhấp nháy, đổi màu, phóng to đối tượng đang có sẵn)' }, { key: 'B', text: 'Hiệu ứng làm biến mất' }, { key: 'C', text: 'Hiệu ứng chèn ảnh' }, { key: 'D', text: 'Hiệu ứng đổi phông' }],
        correctAnswer: 'A',
        explanation: 'Nhóm màu vàng Emphasis giúp thu hút sự chú ý vào đối tượng.'
      },
      {
        id: 'b12_nb_7',
        category: 'recall',
        questionText: 'Công cụ Crop trong thẻ Picture Format có chức năng gì?',
        options: [{ key: 'A', text: 'Cắt bớt phần thừa không muốn hiển thị của bức ảnh' }, { key: 'B', text: 'Xóa toàn bộ bức ảnh' }, { key: 'C', text: 'Xoay ảnh 180 độ' }, { key: 'D', text: 'Đổi màu bức ảnh' }],
        correctAnswer: 'A',
        explanation: 'Crop giúp xén cắt các mép dư thừa của hình ảnh.'
      },
      {
        id: 'b12_nb_8',
        category: 'recall',
        questionText: 'Để áp dụng một hiệu ứng chuyển trang (Transition) cho TẤT CẢ các slide trong bài, em nhấp chuột vào nút lệnh nào?',
        options: [{ key: 'A', text: 'Apply to All' }, { key: 'B', text: 'Select All' }, { key: 'C', text: 'Copy All' }, { key: 'D', text: 'Delete All' }],
        correctAnswer: 'A',
        explanation: 'Apply to All áp dụng đồng bộ hiệu ứng chuyển trang cho toàn bài.'
      },
      {
        id: 'b12_nb_9',
        category: 'recall',
        questionText: 'Cửa sổ Animation Pane có tác dụng gì?',
        options: [{ key: 'A', text: 'Hiển thị danh sách và quản lý thứ tự thực hiện các hiệu ứng đối tượng' }, { key: 'B', text: 'Đổi phông chữ' }, { key: 'C', text: 'Lưu file' }, { key: 'D', text: 'Xem trước in' }],
        correctAnswer: 'A',
        explanation: 'Animation Pane giúp xem và sắp xếp dòng thời gian hiệu ứng.'
      },
      {
        id: 'b12_nb_10',
        category: 'recall',
        questionText: 'Mục Start > On Click trong cài đặt hiệu ứng có ý nghĩa gì?',
        options: [{ key: 'A', text: 'Hiệu ứng chỉ chạy khi người dùng NHẤP CHUỘT' }, { key: 'B', text: 'Hiệu ứng tự động chạy ngay khi mở slide' }, { key: 'C', text: 'Hiệu ứng chạy sau 10 phút' }, { key: 'D', text: 'Không chạy hiệu ứng' }],
        correctAnswer: 'A',
        explanation: 'On Click chờ hành động nhấp chuột mới phát hiệu ứng.'
      },
      {
        id: 'b12_nb_11',
        category: 'recall',
        questionText: 'Quy tắc kết hợp màu sắc chuẩn giữa màu chữ và màu nền là gì?',
        options: [{ key: 'A', text: 'Tương phản rõ rệt (Nền sáng thì chữ tối; Nền tối thì chữ sáng)' }, { key: 'B', text: 'Nền vàng chữ trắng' }, { key: 'C', text: 'Nền xanh dương chữ xanh lá' }, { key: 'D', text: 'Nền xám chữ ghi' }],
        correctAnswer: 'A',
        explanation: 'Độ tương phản cao đảm bảo tính rõ ràng khi chiếu ra không gian rộng.'
      },
      {
        id: 'b12_nb_12',
        category: 'recall',
        questionText: 'Để xem trước hiệu ứng vừa cài đặt ngay trên màn hình soạn thảo, em nhấp vào nút lệnh nào ở góc trái thẻ Animations/Transitions?',
        options: [{ key: 'A', text: 'Nút Preview' }, { key: 'B', text: 'Nút Play' }, { key: 'C', text: 'Nút Save' }, { key: 'D', text: 'Nút Stop' }],
        correctAnswer: 'A',
        explanation: 'Preview chạy thử hiệu ứng ngay lập tức.'
      },

      // 8 Comprehension
      {
        id: 'b12_th_1',
        category: 'comprehension',
        questionText: 'Nếu gán quá nhiều hiệu ứng quay cuồng, nảy tưng tưng cho mọi dòng chữ trong bài thuyết trình thì hậu quả là gì?',
        options: [{ key: 'A', text: 'Gây mất tập trung, làm người xem mệt mỏi và phân tán khỏi nội dung cốt lõi' }, { key: 'B', text: 'Bài thuyết trình càng trở nên hoàn hảo' }, { key: 'C', text: 'PowerPoint sẽ tính điểm cao hơn' }, { key: 'D', text: 'Giúp tiết kiệm thời gian thuyết trình' }],
        correctAnswer: 'A',
        explanation: 'Lạm dụng hiệu ứng gây rối mắt và làm nhạt nhòa nội dung.'
      },
      {
        id: 'b12_th_2',
        category: 'comprehension',
        questionText: 'Điểm khác biệt căn bản giữa Transitions và Animations là gì?',
        options: [{ key: 'A', text: 'Transitions là hiệu ứng chuyển trang slide; Animations là hiệu ứng của các đối tượng bên trong slide' }, { key: 'B', text: 'Transitions dùng cho chữ; Animations dùng cho số' }, { key: 'C', text: 'Transitions là màu sắc; Animations là phông chữ' }, { key: 'D', text: 'Hai công cụ hoàn toàn giống nhau' }],
        correctAnswer: 'A',
        explanation: 'Transitions = chuyển Slide; Animations = chuyển đối tượng bên trong.'
      },
      {
        id: 'b12_th_3',
        category: 'comprehension',
        questionText: 'Tác dụng của hiệu ứng xuất hiện lần lượt từng ý (Bullet points) trong lúc thuyết trình là gì?',
        options: [{ key: 'A', text: 'Giúp khán giả tập trung lắng nghe người nói giải thích từng ý một, không bị đọc trước' }, { key: 'B', text: 'Để kéo dài thời gian thuyết trình' }, { key: 'C', text: 'Để giấu bớt thông tin' }, { key: 'D', text: 'Để làm đơ máy tính' }],
        correctAnswer: 'A',
        explanation: 'Xuất hiện từng bước dẫn dắt sự chú ý đồng điệu với lời nói.'
      },
      {
        id: 'b12_th_4',
        category: 'comprehension',
        questionText: 'Khi chọn một Mẫu giao diện (Theme) trong thẻ Design, những yếu tố nào của bài trình chiếu sẽ tự động thay đổi đồng bộ?',
        options: [{ key: 'A', text: 'Màu nền slide, phông chữ tiêu đề, phông chữ nội dung và màu sắc khung đường viền' }, { key: 'B', text: 'Chỉ đổi màu nền' }, { key: 'C', text: 'Sửa nội dung chữ sang tiếng Anh' }, { key: 'D', text: 'Xóa toàn bộ hình ảnh' }],
        correctAnswer: 'A',
        explanation: 'Theme là bộ nhận diện tổng thể bao gồm màu sắc, phông chữ và bố cục.'
      },
      {
        id: 'b12_th_5',
        category: 'comprehension',
        questionText: 'Một trang chiếu có nền màu Xanh đen đậm (Dark Blue), màu chữ nào sau đây sẽ đảm bảo tương phản tốt nhất?',
        options: [{ key: 'A', text: 'Màu Trắng hoặc màu Vàng tươi' }, { key: 'B', text: 'Màu Đen' }, { key: 'C', text: 'Màu Xanh lá cây đậm' }, { key: 'D', text: 'Màu Tím than' }],
        correctAnswer: 'A',
        explanation: 'Nền tối cần đi với chữ sáng màu như Trắng/Vàng để nổi bật.'
      },
      {
        id: 'b12_th_6',
        category: 'comprehension',
        questionText: 'Khi thuyết trình chủ đề nghiêm túc như "Báo cáo an toàn giao thông", nên chọn loại hiệu ứng chuyển trang (Transition) nào?',
        options: [{ key: 'A', text: 'Hiệu ứng nhẹ nhàng, đơn giản (như Fade, Wipe, Push)' }, { key: 'B', text: 'Hiệu ứng nham nhở quay cuồng như Origami hay Xé giấy' }, { key: 'C', text: 'Không dùng hiệu ứng gì cả' }, { key: 'D', text: 'Mỗi slide chọn 1 hiệu ứng giật gân' }],
        correctAnswer: 'A',
        explanation: 'Chủ đề nghiêm túc cần phong cách chuyển trang tinh tế nhẹ nhàng.'
      },
      {
        id: 'b12_th_7',
        category: 'comprehension',
        questionText: 'Cài đặt Duration trong thiết lập hiệu ứng quyết định điều gì?',
        options: [{ key: 'A', text: 'Thời gian kéo dài (tốc độ diễn ra nhanh hay chậm) của hiệu ứng' }, { key: 'B', text: 'Thời gian chờ trước khi chạy' }, { key: 'C', text: 'Số lần lặp lại' }, { key: 'D', text: 'Màu sắc hiệu ứng' }],
        correctAnswer: 'A',
        explanation: 'Duration chỉ độ dài khoảng thời gian thực thi chuyển động.'
      },
      {
        id: 'b12_th_8',
        category: 'comprehension',
        questionText: 'Nếu muốn hình ảnh xuất hiện cùng lúc với âm thanh vỗ tay khi nhấp chuột, em cài đặt Start như thế nào?',
        options: [{ key: 'A', text: 'Cài đặt With Previous cho hiệu ứng âm thanh đi kèm hình ảnh' }, { key: 'B', text: 'Cài đặt After Previous' }, { key: 'C', text: 'Cài đặt On Click' }, { key: 'D', text: 'Không cài đặt được' }],
        correctAnswer: 'A',
        explanation: 'With Previous giúp hai hành động chạy đồng thời song song.'
      },

      // 5 True/False
      {
        id: 'b12_ds_1',
        category: 'true_false',
        questionText: 'Phân biệt Transitions và Animations:',
        statements: [
          { id: 'b12_ds_1_a', text: 'a) Transitions áp dụng cho chuyển đổi giữa các slide.', isTrue: true },
          { id: 'b12_ds_1_b', text: 'b) Animations áp dụng cho các đối tượng (chữ, ảnh) trên slide.', isTrue: true },
          { id: 'b12_ds_1_c', text: 'c) Thẻ Transitions chứa nút Apply to All.', isTrue: true },
          { id: 'b12_ds_1_d', text: 'd) Animations chỉ dùng được cho văn bản, không dùng được cho ảnh.', isTrue: false }
        ],
        explanation: 'Animations áp dụng cho mọi đối tượng: chữ, ảnh, bảng, hình vẽ, video.'
      },
      {
        id: 'b12_ds_2',
        category: 'true_false',
        questionText: 'Các nhóm hiệu ứng đối tượng trong Animations:',
        statements: [
          { id: 'b12_ds_2_a', text: 'a) Entrance (Xanh) là hiệu ứng xuất hiện.', isTrue: true },
          { id: 'b12_ds_2_b', text: 'b) Emphasis (Vàng) là hiệu ứng nhấn mạnh.', isTrue: true },
          { id: 'b12_ds_2_c', text: 'c) Exit (Đỏ) là hiệu ứng biến mất.', isTrue: true },
          { id: 'b12_ds_2_d', text: 'd) Mỗi đối tượng chỉ được nhận duy nhất 1 hiệu ứng.', isTrue: false }
        ],
        explanation: 'Có thể thêm nhiều hiệu ứng (Add Animation) cho cùng một đối tượng.'
      },
      {
        id: 'b12_ds_3',
        category: 'true_false',
        questionText: 'Sử dụng Mẫu giao diện (Themes):',
        statements: [
          { id: 'b12_ds_3_a', text: 'a) Thẻ Design chứa kho Themes định sẵn.', isTrue: true },
          { id: 'b12_ds_3_b', text: 'b) Theme giúp đồng bộ thiết kế thẩm mỹ cho bài trình chiếu.', isTrue: true },
          { id: 'b12_ds_3_c', text: 'c) Áp dụng Theme làm mất toàn bộ nội dung văn bản đã gõ.', isTrue: false },
          { id: 'b12_ds_3_d', text: 'd) Có thể thay đổi tông màu (Variants) của Theme tùy thích.', isTrue: true }
        ],
        explanation: 'Theme chỉ đổi trang phục thể hiện, nội dung văn bản giữ nguyên.'
      },
      {
        id: 'b12_ds_4',
        category: 'true_false',
        questionText: 'Nguyên tắc phối màu tương phản:',
        statements: [
          { id: 'b12_ds_4_a', text: 'a) Nền sáng đi với chữ màu tối.', isTrue: true },
          { id: 'b12_ds_4_b', text: 'b) Nền tối đi với chữ màu sáng.', isTrue: true },
          { id: 'b12_ds_4_c', text: 'c) Nền màu đỏ đi với chữ màu cam rất dễ đọc.', isTrue: false },
          { id: 'b12_ds_4_d', text: 'd) Độ tương phản tốt giúp người ngồi xa đọc rõ.', isTrue: true }
        ],
        explanation: 'Nền đỏ chữ cam có độ tương phản quá kém, chói mắt và không đọc được.'
      },
      {
        id: 'b12_ds_5',
        category: 'true_false',
        questionText: 'Lưu ý khi sử dụng hiệu ứng:',
        statements: [
          { id: 'b12_ds_5_a', text: 'a) Lạm dụng quá nhiều hiệu ứng làm phân tán khán giả.', isTrue: true },
          { id: 'b12_ds_5_b', text: 'b) Nên chọn hiệu ứng nhất quán trong cùng một bài trình chiếu.', isTrue: true },
          { id: 'b12_ds_5_c', text: 'c) Animation Pane giúp điều chỉnh thứ tự hiệu ứng.', isTrue: true },
          { id: 'b12_ds_5_d', text: 'd) Bài trình chiếu bắt buộc phải có hiệu ứng mới phát được.', isTrue: false }
        ],
        explanation: 'Bài trình chiếu không có hiệu ứng vẫn phát và thuyết trình bình thường.'
      }
    ]
  },
  {
    id: 'lesson_13',
    number: 13,
    title: 'Bài 13: Thực hành tổng hợp - Hoàn thiện Bài trình chiếu Báo cáo',
    themeId: 'theme_4',
    themeTitle: 'Chủ đề 4: Ứng dụng tin học',
    summary: [
      {
        title: '1. Quy trình thiết kế bài trình chiếu báo cáo hoàn chỉnh',
        content: [
          'Bước 1: Lập dàn ý nội dung (Xác định chủ đề, số lượng trang chiếu, từ khóa chính).',
          'Bước 2: Tạo khung bài trình chiếu (Trang tiêu đề, các trang nội dung, trang kết luận).',
          'Bước 3: Nhập văn bản và chèn hình ảnh, bảng biểu minh họa.',
          'Bước 4: Áp dụng Mẫu giao diện (Theme) và định dạng nâng cao.',
          'Bước 5: Cài đặt hiệu ứng chuyển trang (Transitions) và đối tượng (Animations) hợp lý.',
          'Bước 6: Trình chiếu kiểm tra, chạy thử và hoàn thiện tệp.'
        ],
        illustrationType: 'powerpoint_effects'
      },
      {
        title: '2. Kỹ năng thuyết trình kết hợp bài trình chiếu',
        content: [
          'Sử dụng các công cụ hỗ trợ khi trình chiếu: Con trỏ laser (Laser Pointer Ctrl+L), Bút vẽ đánh dấu (Pen Ctrl+P), Màn hình đen (B) / Màn hình trắng (W).',
          'Tương tác tốt với khán giả: Giao tiếp bằng mắt, làm chủ tốc độ nói, không đọc nguyên văn từng chữ trên slide.'
        ]
      }
    ],
    questions: [
      // 12 Recall
      {
        id: 'b13_nb_1',
        category: 'recall',
        questionText: 'Bước ĐẦU TIÊN khi bắt tay vào xây dựng một bài trình chiếu báo cáo là gì?',
        options: [{ key: 'A', text: 'Lập dàn ý nội dung và xác định cấu trúc các trang chiếu' }, { key: 'B', text: 'Chọn ngay hiệu ứng chuyển động bay lượn' }, { key: 'C', text: 'In bài ra giấy' }, { key: 'D', text: 'Tải nhạc nền' }],
        correctAnswer: 'A',
        explanation: 'Lập dàn ý giúp định hình logic toàn bộ bài thuyết trình.'
      },
      {
        id: 'b13_nb_2',
        category: 'recall',
        questionText: 'Trong lúc đang trình chiếu full màn hình, nhấn phím B trên bàn phím có tác dụng gì?',
        options: [{ key: 'A', text: 'Màn hình tạm thời chuyển sang MÀU ĐEN (Black screen)' }, { key: 'B', text: 'Màn hình chuyển màu trắng' }, { key: 'C', text: 'Tắt máy tính' }, { key: 'D', text: 'Thoát PowerPoint' }],
        correctAnswer: 'A',
        explanation: 'Phím B (Black) tạm che màn hình bằng sắc đen để thu hút chú ý về người nói.'
      },
      {
        id: 'b13_nb_3',
        category: 'recall',
        questionText: 'Trong lúc đang trình chiếu full màn hình, nhấn phím W trên bàn phím có tác dụng gì?',
        options: [{ key: 'A', text: 'Màn hình tạm thời chuyển sang MÀU TRẮNG (White screen)' }, { key: 'B', text: 'Màn hình chuyển màu đen' }, { key: 'C', text: 'Bật máy chiếu' }, { key: 'D', text: 'Xóa bài trình chiếu' }],
        correctAnswer: 'A',
        explanation: 'Phím W (White) tạm che màn hình bằng sắc trắng.'
      },
      {
        id: 'b13_nb_4',
        category: 'recall',
        questionText: 'Tổ hợp phím Ctrl + P trong lúc đang TRÌNH CHIẾU có tác dụng gì đặc biệt?',
        options: [{ key: 'A', text: 'Chuyển con trỏ chuột thành BÚT VẼ (Pen) để viết/vẽ trực tiếp lên slide' }, { key: 'B', text: 'In bài trình chiếu' }, { key: 'C', text: 'Tạm dừng video' }, { key: 'D', text: 'Thoát bài' }],
        correctAnswer: 'A',
        explanation: 'Ctrl + P khi chiếu bật công cụ Pen vẽ chú thích.'
      },
      {
        id: 'b13_nb_5',
        category: 'recall',
        questionText: 'Tổ hợp phím Ctrl + A trong lúc đang TRÌNH CHIẾU giúp đưa con trỏ chuột về dạng nào?',
        options: [{ key: 'A', text: 'Đưa con trỏ quay lại dạng MŨI TÊN thường (Arrow)' }, { key: 'B', text: 'Dạng bút chì' }, { key: 'C', text: 'Dạng con trỏ laser' }, { key: 'D', text: 'Dạng tẩy' }],
        correctAnswer: 'A',
        explanation: 'Ctrl + A (Arrow) khôi phục con trỏ chuột mặc định.'
      },
      {
        id: 'b13_nb_6',
        category: 'recall',
        questionText: 'Tổ hợp phím Ctrl + L trong lúc đang trình chiếu có tác dụng gì?',
        options: [{ key: 'A', text: 'Biến con trỏ chuột thành chấm Laser đỏ chiếu điểm nhấn' }, { key: 'B', text: 'Xóa slide' }, { key: 'C', text: 'Khóa màn hình' }, { key: 'D', text: 'Bật loa' }],
        correctAnswer: 'A',
        explanation: 'Ctrl + L bật giả lập con trỏ Laser Pointer.'
      },
      {
        id: 'b13_nb_7',
        category: 'recall',
        questionText: 'Để xóa toàn bộ các nét vẽ tay trên slide trong lúc trình chiếu, em nhấn phím tắt nào?',
        options: [{ key: 'A', text: 'Phím E (Erase)' }, { key: 'B', text: 'Phím Delete' }, { key: 'C', text: 'Phím Backspace' }, { key: 'D', text: 'Phím Ctrl + Z' }],
        correctAnswer: 'A',
        explanation: 'Phím E (Erase) dọn dẹp sạch nét bút vẽ trên slide.'
      },
      {
        id: 'b13_nb_8',
        category: 'recall',
        questionText: 'Trang KẾT LUẬN của bài trình chiếu thường có nội dung gì?',
        options: [{ key: 'A', text: 'Tóm tắt các thông điệp chính và gửi lời cảm ơn khán giả' }, { key: 'B', text: 'Mục lục bài viết' }, { key: 'C', text: 'Giới thiệu bản thân' }, { key: 'D', text: 'Hình ảnh nguyên liệu' }],
        correctAnswer: 'A',
        explanation: 'Trang cuối tóm tắt thông điệp cốt lõi và gửi lời tri ân.'
      },
      {
        id: 'b13_nb_9',
        category: 'recall',
        questionText: 'Để chạy thử toàn bộ bài thuyết trình từ đầu đến cuối trước khi báo cáo thật, em dùng tính năng nào?',
        options: [{ key: 'A', text: 'Phím F5 trình chiếu và tổng duyệt' }, { key: 'B', text: 'In bài ra giấy' }, { key: 'C', text: 'Save as PDF' }, { key: 'D', text: 'Xóa bớt ảnh' }],
        correctAnswer: 'A',
        explanation: 'F5 tổng duyệt từ đầu đến cuối phát hiện chi tiết chưa mượt.'
      },
      {
        id: 'b13_nb_10',
        category: 'recall',
        questionText: 'Giao diện Presenter View trong PowerPoint dành cho ai?',
        options: [{ key: 'A', text: 'Dành riêng cho NGƯỜI THUYẾT TRÌNH xem ghi chú và trang kế tiếp trên màn hình máy tính' }, { key: 'B', text: 'Dành cho khán giả' }, { key: 'C', text: 'Dành cho giáo viên chấm điểm' }, { key: 'D', text: 'Dành cho người in ấn' }],
        correctAnswer: 'A',
        explanation: 'Presenter View hỗ trợ người nói xem trước Note và slide tiếp theo.'
      },
      {
        id: 'b13_nb_11',
        category: 'recall',
        questionText: 'Công cụ Rehearse Timings dùng để làm gì?',
        options: [{ key: 'A', text: 'Luyện tập và đo thời gian thuyết trình thực tế cho từng trang chiếu' }, { key: 'B', text: 'Đếm số từ trong bài' }, { key: 'C', text: 'Ghi âm tiếng hát' }, { key: 'D', text: 'Tạo ảnh động GIF' }],
        correctAnswer: 'A',
        explanation: 'Rehearse Timings hỗ trợ tập luyện làm chủ thời gian.'
      },
      {
        id: 'b13_nb_12',
        category: 'recall',
        questionText: 'Khi sao lưu tệp bài trình chiếu để mang đi thuyết trình ở máy khác, em nên lưu tệp ở đâu?',
        options: [{ key: 'A', text: 'Lưu vào USB hoặc tải lên dịch vụ đám mây (Google Drive, OneDrive)' }, { key: 'B', text: 'Lưu vào thùng rác' }, { key: 'C', text: 'Không cần lưu' }, { key: 'D', text: 'Chụp ảnh màn hình' }],
        correctAnswer: 'A',
        explanation: 'Lưu USB/Đám mây đảm bảo tính sẵn sàng di động.'
      },

      // 8 Comprehension
      {
        id: 'b13_th_1',
        category: 'comprehension',
        questionText: 'Thói quen xấu nào sau đây người thuyết trình CẦN TRÁNH tuyệt đối khi báo cáo bài trình chiếu?',
        options: [{ key: 'A', text: 'Quay lưng lại khán giả và đọc nguyên văn từng chữ từ trên màn chiếu' }, { key: 'B', text: 'Nhìn thẳng vào mắt khán giả và tự tin diễn đạt' }, { key: 'C', text: 'Nhấn mạnh các từ khóa quan trọng' }, { key: 'D', text: 'Mỉm cười thân thiện' }],
        correctAnswer: 'A',
        explanation: 'Chỉ đọc nguyên văn chữ trên màn hình khiến bài báo cáo vô cùng nhàm chán.'
      },
      {
        id: 'b13_th_2',
        category: 'comprehension',
        questionText: 'Tại sao nên chèn thêm các sơ đồ (SmartArt) hoặc biểu đồ thay vì dùng toàn văn bản gạch đầu dòng?',
        options: [{ key: 'A', text: 'Giúp trực quan hóa mối quan hệ logic, số liệu và quy trình một cách nhanh gọn' }, { key: 'B', text: 'Để kéo dài bài trình chiếu' }, { key: 'C', text: 'Do PowerPoint bắt buộc' }, { key: 'D', text: 'Để làm màu bài báo cáo' }],
        correctAnswer: 'A',
        explanation: 'SmartArt biến logic văn bản khô khan thành hình khối trực quan.'
      },
      {
        id: 'b13_th_3',
        category: 'comprehension',
        questionText: 'Khi mang file PowerPoint sang máy tính khác chiếu bị lỗi phông chữ (chữ nhảy lung tung), giải pháp phòng ngừa tốt nhất là gì?',
        options: [{ key: 'A', text: 'Bật tính năng Embed Fonts (Nhúng phông chữ) trong Options hoặc xuất thêm 1 bản PDF dự phòng' }, { key: 'B', text: 'Tắt máy tính đi về' }, { key: 'C', text: 'Xóa phông chữ đi' }, { key: 'D', text: 'Gõ chữ không dấu' }],
        correctAnswer: 'A',
        explanation: 'Nhúng phông (Embed Fonts) hoặc có tệp PDF backup giúp an toàn tuyệt đối.'
      },
      {
        id: 'b13_th_4',
        category: 'comprehension',
        questionText: 'Việc tính toán phân bổ thời gian (ví dụ: bài 5 phút có 5 slide -> trung bình 1 phút/slide) có ý nghĩa gì?',
        options: [{ key: 'A', text: 'Giúp bài thuyết trình đúng tiến độ, không bị cháy giáo án hoặc kết thúc quá sớm' }, { key: 'B', text: 'Để máy tính tự chạy slide' }, { key: 'C', text: 'Không có ý nghĩa gì' }, { key: 'D', text: 'Để giám khảo cho điểm tối đa' }],
        correctAnswer: 'A',
        explanation: 'Kế hoạch thời gian chuẩn xác thể hiện sự chuẩn bị chuyên nghiệp.'
      },
      {
        id: 'b13_th_5',
        category: 'comprehension',
        questionText: 'Trong lúc thuyết trình, nếu khán giả đặt câu hỏi ngoài lề gây xao nhãng, người thuyết trình nên xử lý ra sao?',
        options: [{ key: 'A', text: 'Lịch sự ghi nhận câu hỏi và xin phép trả lời ở phần Thảo luận Q&A cuối bài' }, { key: 'B', text: 'Cãi nhau với khán giả' }, { key: 'C', text: 'Bỏ về giữa chừng' }, { key: 'D', text: 'Giả vờ không nghe thấy' }],
        correctAnswer: 'A',
        explanation: 'Dời câu hỏi phụ về phần Q&A giúp mạch bài trình chiếu không bị đứt đoạn.'
      },
      {
        id: 'b13_th_6',
        category: 'comprehension',
        questionText: 'Lợi ích của việc gửi bài trình chiếu trước cho người nghe hoặc giáo viên kiểm duyệt là gì?',
        options: [{ key: 'A', text: 'Nhận góp ý để hoàn thiện nội dung và chuẩn bị tâm lý tự tin hơn' }, { key: 'B', text: 'Để người khác làm hộ' }, { key: 'C', text: 'Để không phải thuyết trình nữa' }, { key: 'D', text: 'Để xóa file' }],
        correctAnswer: 'A',
        explanation: 'Góp ý tiền bối giúp hoàn thiện các góc sót của bài.'
      },
      {
        id: 'b13_th_7',
        category: 'comprehension',
        questionText: 'Nếu video chèn trong slide không thể chạy được khi chiếu ở hội trường, em nên có phương án dự phòng nào?',
        options: [{ key: 'A', text: 'Chuẩn bị sẵn tệp video riêng trong USB hoặc giải thích bằng lời/hình ảnh tĩnh' }, { key: 'B', text: 'Hủy buổi thuyết trình' }, { key: 'C', text: 'Ngồi đợi sửa video 30 phút' }, { key: 'D', text: 'Bỏ qua không báo cáo nữa' }],
        correctAnswer: 'A',
        explanation: 'Luôn có phương án B linh hoạt cho các sự cố kỹ thuật đa phương tiện.'
      },
      {
        id: 'b13_th_8',
        category: 'comprehension',
        questionText: 'Sự tự tin và giọng nói truyền cảm của người thuyết trình đóng vai trò như thế nào so với bài slide PowerPoint?',
        options: [{ key: 'A', text: 'Là yếu tố quyết định thành công chính, slide chỉ đóng vai trò phương tiện hỗ trợ' }, { key: 'B', text: 'Slide mới là quyết định tất cả, con người không quan trọng' }, { key: 'C', text: 'Hai yếu tố không liên quan' }, { key: 'D', text: 'Không có tác dụng gì' }],
        correctAnswer: 'A',
        explanation: 'Con người là trung tâm của bài thuyết trình, công nghệ chỉ là công cụ hỗ trợ.'
      },

      // 5 True/False
      {
        id: 'b13_ds_1',
        category: 'true_false',
        questionText: 'Các phím tắt điều khiển khi đang trình chiếu:',
        statements: [
          { id: 'b13_ds_1_a', text: 'a) B phím tạm thời làm đen màn hình.', isTrue: true },
          { id: 'b13_ds_1_b', text: 'b) W phím tạm thời làm trắng màn hình.', isTrue: true },
          { id: 'b13_ds_1_c', text: 'c) Ctrl+P biến chuột thành bút vẽ.', isTrue: true },
          { id: 'b13_ds_1_d', text: 'd) Phím E xóa toàn bộ các trang slide.', isTrue: false }
        ],
        explanation: 'Phím E chỉ xóa các nét bút vẽ tay trên slide hiện tại (Erase).'
      },
      {
        id: 'b13_ds_2',
        category: 'true_false',
        questionText: 'Quy trình chuẩn bị bài trình chiếu báo cáo:',
        statements: [
          { id: 'b13_ds_2_a', text: 'a) Bắt đầu bằng việc lập dàn ý nội dung.', isTrue: true },
          { id: 'b13_ds_2_b', text: 'b) Thiết kế trang tiêu đề, trang nội dung và kết luận.', isTrue: true },
          { id: 'b13_ds_2_c', text: 'c) Tổng duyệt thử nghiệm phím F5 trước buổi báo cáo.', isTrue: true },
          { id: 'b13_ds_2_d', text: 'd) Không cần chuẩn bị tệp dự phòng khi mang đi xa.', isTrue: false }
        ],
        explanation: 'Luôn luôn chuẩn bị tệp sao lưu trên USB hoặc Google Drive.'
      },
      {
        id: 'b13_ds_3',
        category: 'true_false',
        questionText: 'Kỹ năng tương tác khi thuyết trình:',
        statements: [
          { id: 'b13_ds_3_a', text: 'a) Tương tác mắt với người nghe.', isTrue: true },
          { id: 'b13_ds_3_b', text: 'b) Tránh đọc nguyên văn chữ trên slide.', isTrue: true },
          { id: 'b13_ds_3_c', text: 'c) Diễn đạt bằng giọng nói rõ ràng, làm chủ tốc độ.', isTrue: true },
          { id: 'b13_ds_3_d', text: 'd) Giữ thái độ căng thẳng và quay lưng lại khán giả.', isTrue: false }
        ],
        explanation: 'Nên duy trì sự tự tin, cởi mở và giao lưu tích cực với khán giả.'
      },
      {
        id: 'b13_ds_4',
        category: 'true_false',
        questionText: 'Giải pháp an toàn cho bài trình chiếu:',
        statements: [
          { id: 'b13_ds_4_a', text: 'a) Nhúng phông chữ Embed Fonts tránh lỗi font.', isTrue: true },
          { id: 'b13_ds_4_b', text: 'b) Xuất bản PDF làm tài liệu dự phòng.', isTrue: true },
          { id: 'b13_ds_4_c', text: 'c) Kiểm tra máy chiếu và âm thanh trước khi báo cáo.', isTrue: true },
          { id: 'b13_ds_4_d', text: 'd) Không cần kiểm tra lại lỗi chính tả văn bản.', isTrue: false }
        ],
        explanation: 'Lỗi chính tả ảnh hưởng nghiêm trọng đến sự chuyên nghiệp của báo cáo.'
      },
      {
        id: 'b13_ds_5',
        category: 'true_false',
        questionText: 'Vai trò của các công cụ hỗ trợ trực quan:',
        statements: [
          { id: 'b13_ds_5_a', text: 'a) Sơ đồ SmartArt giúp trực quan hóa quy trình.', isTrue: true },
          { id: 'b13_ds_5_b', text: 'b) Hình ảnh minh họa làm tăng sự hứng thú cho người xem.', isTrue: true },
          { id: 'b13_ds_5_c', text: 'c) Biểu đồ giúp so sánh số liệu dễ hiểu hơn văn bản.', isTrue: true },
          { id: 'b13_ds_5_d', text: 'd) Sử dụng càng nhiều hiệu ứng giật gân càng tốt.', isTrue: false }
        ],
        explanation: 'Hiệu ứng nên chừng mực, tránh gây rối mắt và làm xao nhãng nội dung chính.'
      }
    ]
  }
];
