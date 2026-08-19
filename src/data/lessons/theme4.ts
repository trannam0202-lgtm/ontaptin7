import { Lesson } from '../../types';

export const LESSONS_THEME4: Lesson[] = [
  {
    id: 'lesson_6',
    number: 6,
    title: 'Bài 6: Làm quen với phần mềm bảng tính (Microsoft Excel / Google Sheets)',
    themeId: 'theme_4',
    themeTitle: 'Chủ đề 4: Ứng dụng tin học',
    summary: [
      {
        title: '1. Màn hình làm việc của phần mềm bảng tính',
        content: [
          'Hàng (Row): Được đánh thứ tự bằng các số (1, 2, 3...).',
          'Cột (Column): Được đánh thứ tự bằng các chữ cái (A, B, C...).',
          'Ô tính (Cell): Giao điểm giữa một cột và một hàng. Địa chỉ ô = Tên cột + Tên hàng (Ví dụ: A1, C5).',
          'Khối (Range): Tập hợp các ô tính liền nhau tạo thành hình chữ nhật. Địa chỉ khối = Ô góc trên bên trái : Ô góc dưới bên phải (Ví dụ: A1:B10).'
        ],
        illustrationType: 'spreadsheet_cell'
      },
      {
        title: '2. Nhập và chỉnh sửa dữ liệu',
        content: [
          'Các dạng dữ liệu cơ bản: Dữ liệu văn bản (căn trái mặc định), Dữ liệu số (căn phải mặc định).',
          'Thanh công thức (Formula Bar): Hiển thị nội dung hoặc công thức thực sự của ô đang chọn.',
          'Các thao tác: Chèn/Xóa hàng, cột; Đổi tên trang tính (Sheet); Lưu tệp dạng .xlsx.'
        ]
      }
    ],
    questions: [
      // 12 Recall
      {
        id: 'b6_nb_1',
        category: 'recall',
        questionText: 'Trong phần mềm bảng tính, các CỘT được định danh bằng cái gì?',
        options: [{ key: 'A', text: 'Các chữ cái (A, B, C...)' }, { key: 'B', text: 'Các số (1, 2, 3...)' }, { key: 'C', text: 'Các ký tự đặc biệt (@, #, $)' }, { key: 'D', text: 'Các la mã (I, II, III)' }],
        correctAnswer: 'A',
        explanation: 'Cột trong bảng tính được ký hiệu bằng các chữ cái A, B, C...'
      },
      {
        id: 'b6_nb_2',
        category: 'recall',
        questionText: 'Trong phần mềm bảng tính, các HÀNG được định danh bằng cái gì?',
        options: [{ key: 'A', text: 'Các số (1, 2, 3...)' }, { key: 'B', text: 'Các chữ cái (A, B, C...)' }, { key: 'C', text: 'Các hình ảnh' }, { key: 'D', text: 'Tên giáo viên' }],
        correctAnswer: 'A',
        explanation: 'Hàng trong bảng tính được đánh số thứ tự 1, 2, 3...'
      },
      {
        id: 'b6_nb_3',
        category: 'recall',
        questionText: 'Cách viết địa chỉ Ô TÍNH nào sau đây là DÚNG?',
        options: [{ key: 'A', text: 'B5' }, { key: 'B', text: '5B' }, { key: 'C', text: 'B-5' }, { key: 'D', text: '5-B' }],
        correctAnswer: 'A',
        explanation: 'Địa chỉ ô gồm Tên cột trước, Tên hàng sau (B5).'
      },
      {
        id: 'b6_nb_4',
        category: 'recall',
        questionText: 'Địa chỉ của một KHỐI ô tính được biểu diễn như thế nào?',
        options: [{ key: 'A', text: 'Ô góc trên trái : Ô góc dưới phải (ví dụ A1:C5)' }, { key: 'B', text: 'Ô góc trên trái - Ô góc dưới phải' }, { key: 'C', text: 'Ô góc trên trái + Ô góc dưới phải' }, { key: 'D', text: 'Ô góc trên trái * Ô góc dưới phải' }],
        correctAnswer: 'A',
        explanation: 'Khối sử dụng dấu hai chấm (:) nối giữa ô đầu và ô cuối.'
      },
      {
        id: 'b6_nb_5',
        category: 'recall',
        questionText: 'Mặc định trong bảng tính, dữ liệu dạng SỐ được căn lề nào?',
        options: [{ key: 'A', text: 'Căn lề Phải' }, { key: 'B', text: 'Căn lề Trái' }, { key: 'C', text: 'Căn Giữa' }, { key: 'D', text: 'Căn đều hai bên' }],
        correctAnswer: 'A',
        explanation: 'Dữ liệu dạng số mặc định tự động căn lề Phải.'
      },
      {
        id: 'b6_nb_6',
        category: 'recall',
        questionText: 'Mặc định trong bảng tính, dữ liệu dạng CHỮ (Văn bản) được căn lề nào?',
        options: [{ key: 'A', text: 'Căn lề Trái' }, { key: 'B', text: 'Căn lề Phải' }, { key: 'C', text: 'Căn Giữa' }, { key: 'D', text: 'Căn đều hai bên' }],
        correctAnswer: 'A',
        explanation: 'Dữ liệu chữ (văn bản) mặc định tự động căn lề Trái.'
      },
      {
        id: 'b6_nb_7',
        category: 'recall',
        questionText: 'Thành phần nào dùng để hiển thị hoặc nhập nội dung/công thức của ô đang được chọn?',
        options: [{ key: 'A', text: 'Thanh công thức (Formula Bar)' }, { key: 'B', text: 'Thanh trạng thái' }, { key: 'C', text: 'Thanh cuộn dọc' }, { key: 'D', text: 'Thước đo Margin' }],
        correctAnswer: 'A',
        explanation: 'Thanh công thức hiển thị chi tiết dữ liệu/công thức của ô được kích hoạt.'
      },
      {
        id: 'b6_nb_8',
        category: 'recall',
        questionText: 'Đuôi mở rộng mặc định của tệp Microsoft Excel là gì?',
        options: [{ key: 'A', text: '.xlsx' }, { key: 'B', text: '.docx' }, { key: 'C', text: '.pptx' }, { key: 'D', text: '.mp3' }],
        correctAnswer: 'A',
        explanation: '.xlsx là định dạng lưu trữ chính của Excel.'
      },
      {
        id: 'b6_nb_9',
        category: 'recall',
        questionText: 'Giao điểm giữa một Cột và một Hàng gọi là gì?',
        options: [{ key: 'A', text: 'Ô tính (Cell)' }, { key: 'B', text: 'Khối' }, { key: 'C', text: 'Trang tính' }, { key: 'D', text: 'Bảng phụ' }],
        correctAnswer: 'A',
        explanation: 'Ô tính là đơn vị nhỏ nhất chứa dữ liệu trong bảng tính.'
      },
      {
        id: 'b6_nb_10',
        category: 'recall',
        questionText: 'Để chọn toàn bộ một cột trong Excel, em kích chuột vào đâu?',
        options: [{ key: 'A', text: 'Tên chữ cái của cột đó trên thanh tiêu đề cột' }, { key: 'B', text: 'Chữ số của hàng' }, { key: 'C', text: 'Nhấn phím F5' }, { key: 'D', text: 'Gõ phím Enter' }],
        correctAnswer: 'A',
        explanation: 'Nhấp vào tên chữ cái đại diện cột để chọn cả cột.'
      },
      {
        id: 'b6_nb_11',
        category: 'recall',
        questionText: 'Mỗi tệp bảng tính có thể chứa bao nhiêu trang tính (Sheet)?',
        options: [{ key: 'A', text: 'Nhiều trang tính khác nhau' }, { key: 'B', text: 'Duy nhất 1 trang tính' }, { key: 'C', text: 'Tối đa 2 trang tính' }, { key: 'D', text: 'Không chứa trang tính nào' }],
        correctAnswer: 'A',
        explanation: 'Mỗi tệp Excel (Workbook) có thể tạo nhiều Sheet.'
      },
      {
        id: 'b6_nb_12',
        category: 'recall',
        questionText: 'Phím tắt nào dùng để lưu tệp bảng tính đang soạn thảo?',
        options: [{ key: 'A', text: 'Ctrl + S' }, { key: 'B', text: 'Ctrl + C' }, { key: 'C', text: 'Ctrl + V' }, { key: 'D', text: 'Ctrl + Z' }],
        correctAnswer: 'A',
        explanation: 'Ctrl + S là phím tắt lưu tệp chuẩn hệ thống.'
      },

      // 8 Comprehension
      {
        id: 'b6_th_1',
        category: 'comprehension',
        questionText: 'Khi gõ dữ liệu "0974191944" vào ô tính mà Excel tự động căn phải và mất số 0 đầu tiên, đó là do Excel hiểu dữ liệu thuộc dạng nào?',
        options: [{ key: 'A', text: 'Dữ liệu số (Number)' }, { key: 'B', text: 'Dữ liệu văn bản (Text)' }, { key: 'C', text: 'Dữ liệu công thức' }, { key: 'D', text: 'Dữ liệu ngày tháng' }],
        correctAnswer: 'A',
        explanation: 'Trong số học, số 0 đứng đầu không có giá trị nên Excel tự bỏ đi nếu coi là Number.'
      },
      {
        id: 'b6_th_2',
        category: 'comprehension',
        questionText: 'Để Excel giữ nguyên số 0 ở đầu số điện thoại (ví dụ \'0974191944\'), em nên làm gì?',
        options: [{ key: 'A', text: 'Gõ dấu nháy đơn (\') trước dãy số hoặc định dạng ô thành dạng Text' }, { key: 'B', text: 'Gõ hai dấu cộng ++' }, { key: 'C', text: 'Tô màu đỏ cho ô' }, { key: 'D', text: 'Nhấn phím Caps Lock' }],
        correctAnswer: 'A',
        explanation: 'Dấu nháy đơn (\') buộc Excel hiểu chuỗi tiếp theo là dữ liệu chữ (Text).'
      },
      {
        id: 'b6_th_3',
        category: 'comprehension',
        questionText: 'Khi ô tính xuất hiện dãy ký tự "###", điều đó có nghĩa là gì?',
        options: [{ key: 'A', text: 'Độ rộng của cột quá hẹp không đủ hiển thị hết dữ liệu số' }, { key: 'B', text: 'Công thức bị tính sai' }, { key: 'C', text: 'Máy tính bị nhiễm virus' }, { key: 'D', text: 'Ổ cứng bị đầy' }],
        correctAnswer: 'A',
        explanation: 'Dấu ### xuất hiện khi dữ liệu số dài hơn kích thước hiển thị của cột.'
      },
      {
        id: 'b6_th_4',
        category: 'comprehension',
        questionText: 'Cách khắc phục nhanh khi ô tính hiển thị dãy "###" là gì?',
        options: [{ key: 'A', text: 'Kéo mở rộng độ rộng của cột đó ra' }, { key: 'B', text: 'Xóa toàn bộ trang tính' }, { key: 'C', text: 'Tắt máy tính đi bật lại' }, { key: 'D', text: 'Đổi phông chữ sang Tiếng Anh' }],
        correctAnswer: 'A',
        explanation: 'Mở rộng đường ranh giới cột sẽ hiển thị đầy đủ con số.'
      },
      {
        id: 'b6_th_5',
        category: 'comprehension',
        questionText: 'Khối ô A1:B3 chứa tổng cộng bao nhiêu ô tính?',
        options: [{ key: 'A', text: '6 ô (gồm A1, A2, A3, B1, B2, B3)' }, { key: 'B', text: '3 ô' }, { key: 'C', text: '2 ô' }, { key: 'D', text: '4 ô' }],
        correctAnswer: 'A',
        explanation: 'Cột A có 3 ô (A1,A2,A3), cột B có 3 ô (B1,B2,B3). Tổng = 2 x 3 = 6 ô.'
      },
      {
        id: 'b6_th_6',
        category: 'comprehension',
        questionText: 'Sự khác biệt chính giữa phần mềm soạn thảo văn bản (Word) và phần mềm bảng tính (Excel) là gì?',
        options: [{ key: 'A', text: 'Excel có khả năng xử lý, tính toán dữ liệu số và vẽ biểu đồ tự động rất mạnh mẽ' }, { key: 'B', text: 'Word không thể gõ chữ' }, { key: 'C', text: 'Excel không thể in ra giấy' }, { key: 'D', text: 'Word dùng để chơi game' }],
        correctAnswer: 'A',
        explanation: 'Excel chuyên về lưu trữ, quản lý dữ liệu số và tự động hóa tính toán.'
      },
      {
        id: 'b6_th_7',
        category: 'comprehension',
        questionText: 'Thao tác nhấp đúp chuột vào tên một Sheet ở góc dưới màn hình giúp em làm gì?',
        options: [{ key: 'A', text: 'Đổi tên cho trang tính (Sheet) đó' }, { key: 'B', text: 'Xóa trang tính đó vĩnh viễn' }, { key: 'C', text: 'In trang tính ra máy in' }, { key: 'D', text: 'Khóa trang tính bằng mật khẩu' }],
        correctAnswer: 'A',
        explanation: 'Nhấp đúp chuột vào tab Sheet giúp đổi tên tùy chọn nhanh.'
      },
      {
        id: 'b6_th_8',
        category: 'comprehension',
        questionText: 'Muốn chọn đồng thời nhiều ô không liền nhau trong bảng tính, em giữ phím nào trong khi nhấp chuột?',
        options: [{ key: 'A', text: 'Phím Ctrl' }, { key: 'B', text: 'Phím Shift' }, { key: 'C', text: 'Phím Alt' }, { key: 'D', text: 'Phím Spacebar' }],
        correctAnswer: 'A',
        explanation: 'Giữ phím Ctrl giúp chọn các vùng dữ liệu phân tán không liên tục.'
      },

      // 5 True/False
      {
        id: 'b6_ds_1',
        category: 'true_false',
        questionText: 'Xét tính đúng sai về địa chỉ ô và khối trong bảng tính:',
        statements: [
          { id: 'b6_ds_1_a', text: 'a) A5 là địa chỉ ô nằm ở cột A, hàng 5.', isTrue: true },
          { id: 'b6_ds_1_b', text: 'b) Địa chỉ 5A là một địa chỉ ô hợp lệ trong Excel.', isTrue: false },
          { id: 'b6_ds_1_c', text: 'c) B2:D4 là khối bao gồm tất cả các ô từ hàng 2 đến hàng 4 thuộc các cột B, C, D.', isTrue: true },
          { id: 'b6_ds_1_d', text: 'd) Dấu hai chấm (:) dùng để ngăn cách giữa ô bắt đầu và ô kết thúc của khối.', isTrue: true }
        ],
        explanation: 'Địa chỉ ô luôn viết Tên cột trước Tên hàng (A5 đúng, 5A sai).'
      },
      {
        id: 'b6_ds_2',
        category: 'true_false',
        questionText: 'Về các kiểu dữ liệu trong ô tính:',
        statements: [
          { id: 'b6_ds_2_a', text: 'a) Mặc định dữ liệu kiểu văn bản căn lề trái.', isTrue: true },
          { id: 'b6_ds_2_b', text: 'b) Mặc định dữ liệu kiểu số căn lề phải.', isTrue: true },
          { id: 'b6_ds_2_c', text: 'c) Chuỗi "123a" được Excel hiểu là dữ liệu kiểu số.', isTrue: false },
          { id: 'b6_ds_2_d', text: 'd) Ta có thể thay đổi căn lề cho dữ liệu tùy ý bằng các nút lệnh.', isTrue: true }
        ],
        explanation: 'Chuỗi chứa ký tự chữ "a" sẽ được phân loại là dữ liệu chữ (Text).'
      },
      {
        id: 'b6_ds_3',
        category: 'true_false',
        questionText: 'Thao tác với cột và hàng trong phần mềm bảng tính:',
        statements: [
          { id: 'b6_ds_3_a', text: 'a) Có thể chèn thêm hàng mới hoặc cột mới vào bảng tính.', isTrue: true },
          { id: 'b6_ds_3_b', text: 'b) Khi xóa một hàng, các hàng phía dưới sẽ tự động đẩy lên.', isTrue: true },
          { id: 'b6_ds_3_c', text: 'c) Độ rộng của cột là cố định, không thể thay đổi được.', isTrue: false },
          { id: 'b6_ds_3_d', text: 'd) Có thể ẩn (Hide) cột hoặc hàng chưa muốn hiển thị.', isTrue: true }
        ],
        explanation: 'Độ rộng cột hoàn toàn có thể điều chỉnh linh hoạt.'
      },
      {
        id: 'b6_ds_4',
        category: 'true_false',
        questionText: 'Màn hình làm việc và lưu tệp bảng tính:',
        statements: [
          { id: 'b6_ds_4_a', text: 'a) Thanh công thức hiển thị nội dung chi tiết ô đang chọn.', isTrue: true },
          { id: 'b6_ds_4_b', text: 'b) Mặc định tệp Excel mới có tên là Book1.', isTrue: true },
          { id: 'b6_ds_4_c', text: 'c) Nút Save (Ctrl+S) dùng để lưu lại các thay đổi.', isTrue: true },
          { id: 'b6_ds_4_d', text: 'd) Bảng tính Excel không cho phép chèn hình ảnh.', isTrue: false }
        ],
        explanation: 'Excel hỗ trợ chèn hình ảnh, sơ đồ và biểu đồ phong phú.'
      },
      {
        id: 'b6_ds_5',
        category: 'true_false',
        questionText: 'Quy tắc chọn các đối tượng trên bảng tính:',
        statements: [
          { id: 'b6_ds_5_a', text: 'a) Nhấp chuột vào nút giao giữa cột A và hàng 1 để chọn toàn bộ bảng tính.', isTrue: true },
          { id: 'b6_ds_5_b', text: 'b) Kéo thả chuột qua các ô để chọn một khối ô liên tục.', isTrue: true },
          { id: 'b6_ds_5_c', text: 'c) Phím Ctrl+A giúp chọn tất cả ô trong bảng tính.', isTrue: true },
          { id: 'b6_ds_5_d', text: 'd) Không thể chọn đồng thời nhiều trang tính (Sheets).', isTrue: false }
        ],
        explanation: 'Giữ Shift hoặc Ctrl có thể chọn nhóm nhiều Sheets cùng lúc.'
      }
    ]
  },
  {
    id: 'lesson_7',
    number: 7,
    title: 'Bài 7: Tính toán tự động trên bảng tính - Sử dụng Công thức và Hàm',
    themeId: 'theme_4',
    themeTitle: 'Chủ đề 4: Ứng dụng tin học',
    summary: [
      {
        title: '1. Công thức trong phần mềm bảng tính',
        content: [
          'Ký tự bắt đầu công thức: Mọi công thức hoặc hàm bắt buộc phải bắt đầu bằng dấu bằng (=).',
          'Các phép toán cơ bản: Cộng (+), Trừ (-), Nhân (*), Chia (/), Lũy thừa (^), Phần trăm (%).',
          'Sử dụng địa chỉ ô trong công thức: Giúp tự động cập nhật kết quả khi dữ liệu nguồn thay đổi.'
        ]
      },
      {
        title: '2. Các hàm tính toán thông dụng',
        content: [
          'Hàm tính tổng: SUM(danh_sách_đối_tượng) -> Ví dụ: =SUM(A1:A5)',
          'Hàm tính trung bình cộng: AVERAGE(danh_sách_đối_tượng) -> Ví dụ: =AVERAGE(B1:B10)',
          'Hàm tìm giá trị lớn nhất: MAX(danh_sách_đối_tượng) -> Ví dụ: =MAX(C1:C20)',
          'Hàm tìm giá trị nhỏ nhất: MIN(danh_sách_đối_tượng) -> Ví dụ: =MIN(C1:C20)',
          'Hàm đếm dữ liệu số: COUNT(danh_sách_đối_tượng) -> Ví dụ: =COUNT(A1:A50)'
        ]
      }
    ],
    questions: [
      // 12 Recall
      {
        id: 'b7_nb_1',
        category: 'recall',
        questionText: 'Mọi công thức hoặc hàm trong bảng tính bắt buộc phải bắt đầu bằng ký tự nào?',
        options: [{ key: 'A', text: 'Dấu bằng (=)' }, { key: 'B', text: 'Dấu cộng (+)' }, { key: 'C', text: 'Dấu hỏi (?)' }, { key: 'D', text: 'Dấu thăng (#)' }],
        correctAnswer: 'A',
        explanation: 'Dấu = thông báo cho Excel biết chuỗi nhập vào là công thức tính toán.'
      },
      {
        id: 'b7_nb_2',
        category: 'recall',
        questionText: 'Ký hiệu của phép toán NHÂN trong công thức bảng tính là gì?',
        options: [{ key: 'A', text: 'Dấu sao (*)' }, { key: 'B', text: 'Chữ x' }, { key: 'C', text: 'Dấu chấm (.)' }, { key: 'D', text: 'Dấu hai chấm (:)' }],
        correctAnswer: 'A',
        explanation: 'Phép nhân trong tin học được ký hiệu bằng dấu sao (*).'
      },
      {
        id: 'b7_nb_3',
        category: 'recall',
        questionText: 'Ký hiệu của phép toán CHIA trong công thức bảng tính là gì?',
        options: [{ key: 'A', text: 'Dấu xuyệt tới (/)' }, { key: 'B', text: 'Dấu hai chấm (:)' }, { key: 'C', text: 'Dấu chia (÷)' }, { key: 'D', text: 'Dấu xuyệt ngược (\\)' }],
        correctAnswer: 'A',
        explanation: 'Phép chia trong tin học ký hiệu bằng dấu xuyệt tới (/).'
      },
      {
        id: 'b7_nb_4',
        category: 'recall',
        questionText: 'Hàm nào dùng để TÍNH TỔNG các giá trị số?',
        options: [{ key: 'A', text: 'SUM' }, { key: 'B', text: 'AVERAGE' }, { key: 'C', text: 'MAX' }, { key: 'D', text: 'MIN' }],
        correctAnswer: 'A',
        explanation: 'Hàm SUM tính tổng danh sách các số hoặc vùng dữ liệu.'
      },
      {
        id: 'b7_nb_5',
        category: 'recall',
        questionText: 'Hàm nào dùng để TÍNH TRUNG BÌNH CỘNG các giá trị số?',
        options: [{ key: 'A', text: 'AVERAGE' }, { key: 'B', text: 'SUM' }, { key: 'C', text: 'COUNT' }, { key: 'D', text: 'MAX' }],
        correctAnswer: 'A',
        explanation: 'Hàm AVERAGE trả về giá trị trung bình cộng.'
      },
      {
        id: 'b7_nb_6',
        category: 'recall',
        questionText: 'Hàm nào dùng để TÌM GIÁ TRỊ LỚN NHẤT trong dãy số?',
        options: [{ key: 'A', text: 'MAX' }, { key: 'B', text: 'MIN' }, { key: 'C', text: 'SUM' }, { key: 'D', text: 'COUNT' }],
        correctAnswer: 'A',
        explanation: 'Hàm MAX trả về số lớn nhất trong danh sách.'
      },
      {
        id: 'b7_nb_7',
        category: 'recall',
        questionText: 'Hàm nào dùng để TÌM GIÁ TRỊ NHỎ NHẤT trong dãy số?',
        options: [{ key: 'A', text: 'MIN' }, { key: 'B', text: 'MAX' }, { key: 'C', text: 'SUM' }, { key: 'D', text: 'AVERAGE' }],
        correctAnswer: 'A',
        explanation: 'Hàm MIN trả về số nhỏ nhất trong danh sách.'
      },
      {
        id: 'b7_nb_8',
        category: 'recall',
        questionText: 'Hàm nào dùng để ĐẾM số lượng các ô chứa dữ liệu số?',
        options: [{ key: 'A', text: 'COUNT' }, { key: 'B', text: 'SUM' }, { key: 'C', text: 'MAX' }, { key: 'D', text: 'MIN' }],
        correctAnswer: 'A',
        explanation: 'Hàm COUNT đếm số ô chứa dữ liệu số.'
      },
      {
        id: 'b7_nb_9',
        category: 'recall',
        questionText: 'Ký hiệu của phép toán LŨY THỪA (Mũ) trong công thức là gì?',
        options: [{ key: 'A', text: 'Dấu mũ (^)' }, { key: 'B', text: 'Dấu sao (*)' }, { key: 'C', text: 'Dấu phần trăm (%)' }, { key: 'D', text: 'Dấu ngã (~)' }],
        correctAnswer: 'A',
        explanation: 'Dấu mũ (^) tính lũy thừa, ví dụ 2^3 = 8.'
      },
      {
        id: 'b7_nb_10',
        category: 'recall',
        questionText: 'Nếu gõ vào ô tính chuỗi "5+3" mà không có dấu = đứng trước, ô đó sẽ hiển thị gì?',
        options: [{ key: 'A', text: 'Chính chuỗi "5+3"' }, { key: 'B', text: 'Số 8' }, { key: 'C', text: 'Báo lỗi #VALUE!' }, { key: 'D', text: 'Số 15' }],
        correctAnswer: 'A',
        explanation: 'Không có dấu = Excel sẽ hiểu đây là chuỗi văn bản thuần túy.'
      },
      {
        id: 'b7_nb_11',
        category: 'recall',
        questionText: 'Để sao chép nhanh công thức xuống các ô bên dưới, em dùng công cụ nào ở góc dưới bên phải ô tính?',
        options: [{ key: 'A', text: 'Nút điền tự động AutoFill (Nút vuông nhỏ màu xanh)' }, { key: 'B', text: 'Phím F1' }, { key: 'C', text: 'Thước kẻ' }, { key: 'D', text: 'Nút Caps Lock' }],
        correctAnswer: 'A',
        explanation: 'Kéo tay cầm AutoFill giúp sao chép công thức linh hoạt.'
      },
      {
        id: 'b7_nb_12',
        category: 'recall',
        questionText: 'Công thức =SUM(A1,A3) khác gì với =SUM(A1:A3)?',
        options: [{ key: 'A', text: '=SUM(A1,A3) chỉ cộng ô A1 và A3; =SUM(A1:A3) cộng từ A1 đến A3 (A1, A2, A3)' }, { key: 'B', text: 'Hai công thức giống hệt nhau' }, { key: 'C', text: 'Công thức dùng dấu phẩy bị sai syntax' }, { key: 'D', text: 'Công thức dùng dấu hai chấm bị lỗi' }],
        correctAnswer: 'A',
        explanation: 'Dấu phẩy liệt kê ô đơn lẻ, dấu hai chấm chỉ vùng khối liên tục.'
      },

      // 8 Comprehension
      {
        id: 'b7_th_1',
        category: 'comprehension',
        questionText: 'Giả sử ô A1=10, A2=20, A3=30. Kết quả của công thức =AVERAGE(A1:A3) là bao nhiêu?',
        options: [{ key: 'A', text: '20' }, { key: 'B', text: '60' }, { key: 'C', text: '10' }, { key: 'D', text: '30' }],
        correctAnswer: 'A',
        explanation: 'Trung bình cộng = (10 + 20 + 30) / 3 = 60 / 3 = 20.'
      },
      {
        id: 'b7_th_2',
        category: 'comprehension',
        questionText: 'Giả sử ô B1=5, B2=8, B3=2. Kết quả của công thức =MAX(B1:B3) - MIN(B1:B3) là bao nhiêu?',
        options: [{ key: 'A', text: '6' }, { key: 'B', text: '8' }, { key: 'C', text: '2' }, { key: 'D', text: '15' }],
        correctAnswer: 'A',
        explanation: 'MAX = 8, MIN = 2. Kết quả = 8 - 2 = 6.'
      },
      {
        id: 'b7_th_3',
        category: 'comprehension',
        questionText: 'Tại sao nên dùng địa chỉ ô (như =A1+B1) thay vì dùng số trực tiếp (như =10+20) trong công thức Excel?',
        options: [{ key: 'A', text: 'Vì khi giá trị trong ô A1 hoặc B1 thay đổi, kết quả công thức sẽ tự động cập nhật' }, { key: 'B', text: 'Vì viết địa chỉ ô tốn ít thời gian hơn' }, { key: 'C', text: 'Vì gõ số trực tiếp Excel sẽ bị đơ' }, { key: 'D', text: 'Vì không thể gõ số trực tiếp' }],
        correctAnswer: 'A',
        explanation: 'Địa chỉ ô tạo tính tự động hóa khi dữ liệu nguồn thay đổi.'
      },
      {
        id: 'b7_th_4',
        category: 'comprehension',
        questionText: 'Giả sử ô C1 chứa công thức =A1+B1. Khi sao chép công thức từ C1 xuống ô C2, công thức tại C2 sẽ tự động đổi thành gì?',
        options: [{ key: 'A', text: '=A2+B2' }, { key: 'B', text: '=A1+B1' }, { key: 'C', text: '=A3+B3' }, { key: 'D', text: '=A1+B2' }],
        correctAnswer: 'A',
        explanation: 'Địa chỉ tương đối sẽ tự thay đổi chỉ số hàng khi sao chép xuống dưới.'
      },
      {
        id: 'b7_th_5',
        category: 'comprehension',
        questionText: 'Nếu ô D1 chứa số 0, công thức =10/D1 trong Excel sẽ trả về lỗi gì?',
        options: [{ key: 'A', text: '#DIV/0!' }, { key: 'B', text: '#VALUE!' }, { key: 'C', text: '#NAME?' }, { key: 'D', text: '#REF!' }],
        correctAnswer: 'A',
        explanation: '#DIV/0! là lỗi chia cho số 0 trong toán học và tin học.'
      },
      {
        id: 'b7_th_6',
        category: 'comprehension',
        questionText: 'Nếu viết sai tên hàm (ví dụ gõ =SUUM(A1:A5) thay vì =SUM(A1:A5)), Excel sẽ thông báo lỗi nào?',
        options: [{ key: 'A', text: '#NAME?' }, { key: 'B', text: '#DIV/0!' }, { key: 'C', text: '###' }, { key: 'D', text: '#N/A' }],
        correctAnswer: 'A',
        explanation: '#NAME? xuất hiện khi Excel không nhận diện được tên hàm.'
      },
      {
        id: 'b7_th_7',
        category: 'comprehension',
        questionText: 'Kết quả của công thức =2^3 + 4*2 là bao nhiêu?',
        options: [{ key: 'A', text: '16' }, { key: 'B', text: '24' }, { key: 'C', text: '20' }, { key: 'D', text: '32' }],
        correctAnswer: 'A',
        explanation: 'Thứ tự ưu tiên: Lũy thừa trước -> 2^3 = 8. Phép nhân -> 4*2 = 8. Cộng -> 8 + 8 = 16.'
      },
      {
        id: 'b7_th_8',
        category: 'comprehension',
        questionText: 'Ô A1 chứa điểm Tin học (8), B1 chứa điểm Toán (9). Công thức nào tính điểm Trung bình 2 môn đúng nhất?',
        options: [{ key: 'A', text: '=(A1+B1)/2 hoặc =AVERAGE(A1,B1)' }, { key: 'B', text: '=A1+B1/2' }, { key: 'C', text: '=A1*B1/2' }, { key: 'D', text: '=SUM(A1:B1)' }],
        correctAnswer: 'A',
        explanation: 'Cần có ngoặc đơn (A1+B1)/2 để ưu tiên tính tổng trước khi chia.'
      },

      // 5 True/False
      {
        id: 'b7_ds_1',
        category: 'true_false',
        questionText: 'Đánh giá tính đúng sai về công thức trong bảng tính:',
        statements: [
          { id: 'b7_ds_1_a', text: 'a) Bắt buộc phải có dấu bằng (=) ở đầu công thức.', isTrue: true },
          { id: 'b7_ds_1_b', text: 'b) Có thể dùng phím Enter để hoàn thành việc nhập công thức.', isTrue: true },
          { id: 'b7_ds_1_c', text: 'c) Phép toán nhân ký hiệu là dấu x.', isTrue: false },
          { id: 'b7_ds_1_d', text: 'd) Dấu ngoặc đơn () dùng để thay đổi thứ tự ưu tiên tính toán.', isTrue: true }
        ],
        explanation: 'Phép nhân ký hiệu là dấu sao (*), không phải chữ x.'
      },
      {
        id: 'b7_ds_2',
        category: 'true_false',
        questionText: 'Về cách hoạt động của các hàm tính toán cơ bản:',
        statements: [
          { id: 'b7_ds_2_a', text: 'a) Hàm SUM tính tổng tất cả các số trong vùng tham chiếu.', isTrue: true },
          { id: 'b7_ds_2_b', text: 'b) Tên hàm có thể viết bằng chữ hoa hoặc chữ thường (ví dụ sum hay SUM đều được).', isTrue: true },
          { id: 'b7_ds_2_c', text: 'c) Hàm AVERAGE bỏ qua các ô trống hoặc chứa chữ khi tính trung bình.', isTrue: true },
          { id: 'b7_ds_2_d', text: 'd) Hàm MAX trả về số nhỏ nhất trong bảng.', isTrue: false }
        ],
        explanation: 'Hàm MAX trả về số lớn nhất, MIN mới trả về số nhỏ nhất.'
      },
      {
        id: 'b7_ds_3',
        category: 'true_false',
        questionText: 'Các lỗi phổ biến khi tính toán trên bảng tính:',
        statements: [
          { id: 'b7_ds_3_a', text: 'a) #DIV/0! xảy ra khi thực hiện phép chia cho số 0.', isTrue: true },
          { id: 'b7_ds_3_b', text: 'b) #NAME? xuất hiện khi viết sai tên hàm.', isTrue: true },
          { id: 'b7_ds_3_c', text: 'c) ### là lỗi do máy tính hỏng.', isTrue: false },
          { id: 'b7_ds_3_d', text: 'd) #VALUE! thường xuất hiện khi thực hiện phép tính số học trên ô chứa văn bản.', isTrue: true }
        ],
        explanation: '### là do độ hẹp của cột, không phải hỏng máy tính.'
      },
      {
        id: 'b7_ds_4',
        category: 'true_false',
        questionText: 'Tính năng tự động cập nhật và sao chép công thức:',
        statements: [
          { id: 'b7_ds_4_a', text: 'a) Khi thay đổi số liệu trong ô nguồn, kết quả công thức tự động tính lại.', isTrue: true },
          { id: 'b7_ds_4_b', text: 'b) Kéo tay cầm AutoFill giúp sao chép công thức nhanh chóng.', isTrue: true },
          { id: 'b7_ds_4_c', text: 'c) Sao chép công thức luôn giữ nguyên 100% địa chỉ ô tuyệt đối.', isTrue: false },
          { id: 'b7_ds_4_d', text: 'd) Sử dụng công thức giúp giảm thiểu sai sót so với tính tay.', isTrue: true }
        ],
        explanation: 'Địa chỉ tương đối sẽ thay đổi chỉ số theo hướng sao chép.'
      },
      {
        id: 'b7_ds_5',
        category: 'true_false',
        questionText: 'Ứng dụng thực tế của bảng tính trong học tập:',
        statements: [
          { id: 'b7_ds_5_a', text: 'a) Lập bảng điểm học tập cá nhân và tính điểm trung bình các môn.', isTrue: true },
          { id: 'b7_ds_5_b', text: 'b) Quản lý thu chi quỹ lớp học.', isTrue: true },
          { id: 'b7_ds_5_c', text: 'c) Tìm ra bạn có điểm thi cao nhất lớp bằng hàm MAX.', isTrue: true },
          { id: 'b7_ds_5_d', text: 'd) Excel không thể lập biểu đồ theo dõi sự tiến bộ học tập.', isTrue: false }
        ],
        explanation: 'Excel hỗ trợ vẽ nhiều loại biểu đồ trực quan.'
      }
    ]
  }
];
