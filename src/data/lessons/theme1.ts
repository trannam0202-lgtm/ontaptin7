import { Lesson } from '../../types';

export const LESSONS_THEME1: Lesson[] = [
  {
    id: 'lesson_1',
    number: 1,
    title: 'Bài 1: Thiết bị vào – ra',
    themeId: 'theme_1',
    themeTitle: 'Chủ đề 1: Máy tính và cộng đồng',
    summary: [
      {
        title: '1. Thiết bị vào – ra và chức năng',
        content: [
          'Thiết bị vào (Input Devices): Dùng để đưa thông tin và lệnh vào máy tính. Ví dụ: Bàn phím, chuột, micro, máy quét (scanner), camera...',
          'Thiết bị ra (Output Devices): Dùng để đưa dữ liệu từ máy tính ra bên ngoài cho con người nhận biết. Ví dụ: Màn hình, máy in, loa, máy chiếu...',
          'Thiết bị vừa là thiết bị vào vừa là thiết bị ra: Màn hình cảm ứng (Touchscreen), tai nghe có kèm micro...'
        ],
        illustrationType: 'lesson_1_1'
      },
      {
        title: '2. An toàn khi sử dụng thiết bị',
        content: [
          'Nên làm: Đọc kỹ hướng dẫn nhà sản xuất, giữ tay khô sạch khi thao tác, cắm đúng chiều cổng kết nối, tắt máy bằng nút Shut down, rút phích điện trước khi lau chùi.',
          'Không nên làm: Thao tác tùy tiện, để đồ uống gần thiết bị, dùng vật sắc nhọn chạm vào màn hình, ngắt điện đột ngột.'
        ],
        illustrationType: 'lesson_1_2'
      }
    ],
    questions: [
      // 12 Nhận biết
      {
        id: 'b1_nb_1',
        category: 'recall',
        questionText: 'Thiết bị nào sau đây là thiết bị vào của máy tính?',
        options: [{ key: 'A', text: 'Màn hình' }, { key: 'B', text: 'Máy in' }, { key: 'C', text: 'Bàn phím' }, { key: 'D', text: 'Loa' }],
        correctAnswer: 'C',
        explanation: 'Bàn phím dùng để nhập văn bản và lệnh vào máy tính.'
      },
      {
        id: 'b1_nb_2',
        category: 'recall',
        questionText: 'Thiết bị nào dưới đây nhận thông tin từ máy tính đưa ra bên ngoài?',
        options: [{ key: 'A', text: 'Micro' }, { key: 'B', text: 'Máy quét (Scanner)' }, { key: 'C', text: 'Chuột máy tính' }, { key: 'D', text: 'Máy in' }],
        correctAnswer: 'D',
        explanation: 'Máy in xuất thông tin từ máy tính ra giấy nên là thiết bị ra.'
      },
      {
        id: 'b1_nb_3',
        category: 'recall',
        questionText: 'Thiết bị nào sau đây thực hiện cả hai chức năng vào và ra?',
        options: [{ key: 'A', text: 'Chuột quang' }, { key: 'B', text: 'Màn hình cảm ứng' }, { key: 'C', text: 'Máy chiếu' }, { key: 'D', text: 'Bàn phím không dây' }],
        correctAnswer: 'B',
        explanation: 'Màn hình cảm ứng vừa hiển thị hình ảnh (ra) vừa nhận thao tác vuốt chạm (vào).'
      },
      {
        id: 'b1_nb_4',
        category: 'recall',
        questionText: 'Micro là thiết bị làm việc với dữ liệu dạng nào?',
        options: [{ key: 'A', text: 'Văn bản' }, { key: 'B', text: 'Hình ảnh' }, { key: 'C', text: 'Âm thanh' }, { key: 'D', text: 'Con số' }],
        correctAnswer: 'C',
        explanation: 'Micro thu nhận âm thanh từ môi trường chuyển thành dữ liệu số.'
      },
      {
        id: 'b1_nb_5',
        category: 'recall',
        questionText: 'Loa là thiết bị xuất dữ liệu dưới dạng nào ra bên ngoài?',
        options: [{ key: 'A', text: 'Âm thanh' }, { key: 'B', text: 'Hình ảnh' }, { key: 'C', text: 'Văn bản' }, { key: 'D', text: 'Ký tự' }],
        correctAnswer: 'A',
        explanation: 'Loa chuyển dữ liệu âm thanh trong máy tính thành sóng âm.'
      },
      {
        id: 'b1_nb_6',
        category: 'recall',
        questionText: 'Cổng kết nối phổ biến nhất hiện nay cho chuột và bàn phím là cổng nào?',
        options: [{ key: 'A', text: 'VGA' }, { key: 'B', text: 'USB' }, { key: 'C', text: 'HDMI' }, { key: 'D', text: 'Jack 3.5mm' }],
        correctAnswer: 'B',
        explanation: 'Cổng USB là chuẩn kết nối ngoại vi phổ biến nhất.'
      },
      {
        id: 'b1_nb_7',
        category: 'recall',
        questionText: 'Thao tác nào sau đây giúp tắt máy tính một cách an toàn?',
        options: [{ key: 'A', text: 'Rút phích cắm điện trực tiếp' }, { key: 'B', text: 'Nhấn giữ nút nguồn ổ cắm' }, { key: 'C', text: 'Chọn lệnh Shut down trong hệ điều hành' }, { key: 'D', text: 'Gập màn hình laptop ngay lập tức' }],
        correctAnswer: 'C',
        explanation: 'Sử dụng nút lệnh Shut down giúp hệ điều hành tắt máy an toàn.'
      },
      {
        id: 'b1_nb_8',
        category: 'recall',
        questionText: 'Bộ điều khiển game (Game controller) thuộc nhóm thiết bị nào?',
        options: [{ key: 'A', text: 'Thiết bị ra' }, { key: 'B', text: 'Thiết bị vào' }, { key: 'C', text: 'Bộ xử lý trung tâm' }, { key: 'D', text: 'Bộ nhớ trong' }],
        correctAnswer: 'B',
        explanation: 'Bộ điều khiển game truyền tín hiệu nút bấm vào máy tính.'
      },
      {
        id: 'b1_nb_9',
        category: 'recall',
        questionText: 'Máy chiếu (Projector) là loại thiết bị gì?',
        options: [{ key: 'A', text: 'Thiết bị vào' }, { key: 'B', text: 'Thiết bị ra' }, { key: 'C', text: 'Thiết bị lưu trữ' }, { key: 'D', text: 'Bộ nhớ RAM' }],
        correctAnswer: 'B',
        explanation: 'Máy chiếu hiển thị nội dung màn hình lên tường/màn chắn lớn.'
      },
      {
        id: 'b1_nb_10',
        category: 'recall',
        questionText: 'Tấm cảm ứng (Touchpad) trên máy tính xách tay có chức năng tương tự thiết bị nào?',
        options: [{ key: 'A', text: 'Bàn phím' }, { key: 'B', text: 'Chuột máy tính' }, { key: 'C', text: 'Màn hình' }, { key: 'D', text: 'Máy in' }],
        correctAnswer: 'B',
        explanation: 'Touchpad nhận thao tác ngón tay để điều khiển con trỏ giống chuột.'
      },
      {
        id: 'b1_nb_11',
        category: 'recall',
        questionText: 'Để tránh bị điện giật hay làm hỏng thiết bị, khi vệ sinh máy tính em cần làm gì trước?',
        options: [{ key: 'A', text: 'Bật máy tính lên' }, { key: 'B', text: 'Rút nguồn điện khỏi máy tính' }, { key: 'C', text: 'Cắm thêm dây sạc' }, { key: 'D', text: 'Bật máy in' }],
        correctAnswer: 'B',
        explanation: 'Ngắt nguồn điện trước khi lau chùi vệ sinh đảm bảo an toàn.'
      },
      {
        id: 'b1_nb_12',
        category: 'recall',
        questionText: 'Thiết bị nào sau đây dùng để số hóa tài liệu giấy thành tệp hình ảnh vào máy tính?',
        options: [{ key: 'A', text: 'Máy in' }, { key: 'B', text: 'Máy quét (Scanner)' }, { key: 'C', text: 'Máy chiếu' }, { key: 'D', text: 'Màn hình' }],
        correctAnswer: 'B',
        explanation: 'Máy quét (Scanner) quét tài liệu giấy thành dữ liệu tệp.'
      },

      // 8 Thông hiểu
      {
        id: 'b1_th_1',
        category: 'comprehension',
        questionText: 'Tại sao không nên cắm nhầm đầu nối thiết bị vào cổng không đúng chuẩn?',
        options: [{ key: 'A', text: 'Vì máy tính sẽ chạy nhanh hơn' }, { key: 'B', text: 'Vì có thể làm hỏng chân cắm, gây chập điện hỏng thiết bị' }, { key: 'C', text: 'Vì bàn phím sẽ biến thành chuột' }, { key: 'D', text: 'Vì dung lượng ổ cứng sẽ bị giảm' }],
        correctAnswer: 'B',
        explanation: 'Cố tình cắm sai cổng làm cong chân cắm, hỏng cổng và có thể gây chập cháy điện.'
      },
      {
        id: 'b1_th_2',
        category: 'comprehension',
        questionText: 'Camera an ninh ghi hình đường phố gửi về trung tâm đóng vai trò là thiết bị gì?',
        options: [{ key: 'A', text: 'Thiết bị ra để phát tín hiệu' }, { key: 'B', text: 'Thiết bị vào thu hình ảnh truyền về máy tính trung tâm' }, { key: 'C', text: 'Bộ xử lý trung tâm CPU' }, { key: 'D', text: 'Thiết bị lưu trữ đĩa cứng' }],
        correctAnswer: 'B',
        explanation: 'Camera thu hình ảnh thực tế và gửi dữ liệu vào máy tính.'
      },
      {
        id: 'b1_th_3',
        category: 'comprehension',
        questionText: 'Loa thông minh vừa phát nhạc vừa nghe câu lệnh giọng nói thuộc loại thiết bị nào?',
        options: [{ key: 'A', text: 'Chỉ là thiết bị vào' }, { key: 'B', text: 'Chỉ là thiết bị ra' }, { key: 'C', text: 'Kết hợp cả chức năng thiết bị vào (thu giọng nói) và thiết bị ra (phát âm thanh)' }, { key: 'D', text: 'Không thuộc nhóm thiết bị máy tính' }],
        correctAnswer: 'C',
        explanation: 'Thu giọng nói là vào, phát âm thanh là ra.'
      },
      {
        id: 'b1_th_4',
        category: 'comprehension',
        questionText: 'Hành động nào sau đây có nguy cơ cao làm hỏng phần cứng máy tính?',
        options: [{ key: 'A', text: 'Đóng các ứng dụng trước khi tắt máy' }, { key: 'B', text: 'Đặt ly nước ngọt sát bàn phím máy tính đang hoạt động' }, { key: 'C', text: 'Dùng khăn khô mềm lau màn hình' }, { key: 'D', text: 'Giữ tay khô ráo khi cắm cáp USB' }],
        correctAnswer: 'B',
        explanation: 'Đặt ly nước gần máy tính dễ bị đụng đổ gây chập điện tử.'
      },
      {
        id: 'b1_th_5',
        category: 'comprehension',
        questionText: 'Khi kết nối máy tính với máy chiếu trong buổi thuyết trình, máy chiếu đảm nhận chức năng gì?',
        options: [{ key: 'A', text: 'Nhập dữ liệu bài thuyết trình' }, { key: 'B', text: 'Xuất hình ảnh bài thuyết trình lên màn chắn lớn' }, { key: 'C', text: 'Lưu trữ tệp bài trình chiếu' }, { key: 'D', text: 'Tính toán điểm số bài thuyết trình' }],
        correctAnswer: 'B',
        explanation: 'Máy chiếu phóng to dữ liệu hình ảnh ra không gian lớn.'
      },
      {
        id: 'b1_th_6',
        category: 'comprehension',
        questionText: 'Điều gì xảy ra nếu bạn ngắt nguồn điện đột ngột bằng cách rút phích cắm khi máy tính đang ghi dữ liệu?',
        options: [{ key: 'A', text: 'Máy tính sẽ tự động lưu xong dữ liệu' }, { key: 'B', text: 'Có thể làm mất dữ liệu chưa lưu và tổn hại hệ điều hành/ổ cứng' }, { key: 'C', text: 'Máy tính sẽ chạy mượt hơn ở lần bật sau' }, { key: 'D', text: 'Không ảnh hưởng gì đến máy tính' }],
        correctAnswer: 'B',
        explanation: 'Mất điện đột ngột khi đang làm việc dễ làm lỗi hệ thống tệp và hỏng phần cứng.'
      },
      {
        id: 'b1_th_7',
        category: 'comprehension',
        questionText: 'Trong giờ học trực tuyến, thiết bị nào giúp giáo viên nghe thấy tiếng học sinh phát biểu?',
        options: [{ key: 'A', text: 'Micro của học sinh (VÀO) và Loa/Tai nghe của giáo viên (RA)' }, { key: 'B', text: 'Máy in của học sinh và Màn hình của giáo viên' }, { key: 'C', text: 'Bàn phím học sinh và Chuột giáo viên' }, { key: 'D', text: 'Máy quét học sinh và Máy chiếu giáo viên' }],
        correctAnswer: 'A',
        explanation: 'Micro thu âm thanh (vào), loa/tai nghe phát âm thanh (ra).'
      },
      {
        id: 'b1_th_8',
        category: 'comprehension',
        questionText: 'Để gõ văn bản tiếng Việt có dấu trên máy tính, học sinh sử dụng kết hợp thiết bị vào nào?',
        options: [{ key: 'A', text: 'Chuột và máy in' }, { key: 'B', text: 'Bàn phím và phần mềm gõ tiếng Việt (như Unikey)' }, { key: 'C', text: 'Loa và tai nghe' }, { key: 'D', text: 'Máy quét và camera' }],
        correctAnswer: 'B',
        explanation: 'Bàn phím nhập ký tự kết hợp phần mềm bộ gõ xử lý dấu.'
      },

      // 5 Đúng - Sai (4 ý mỗi câu)
      {
        id: 'b1_ds_1',
        category: 'true_false',
        questionText: 'Khi xem xét về thiết bị vào và thiết bị ra của máy tính, hãy xác định các nhận định sau Đúng hay Sai:',
        statements: [
          { id: 'b1_ds_1_a', text: 'a) Bàn phím và chuột là hai thiết bị vào phổ biến nhất.', isTrue: true },
          { id: 'b1_ds_1_b', text: 'b) Màn hình và máy in là các thiết bị ra dùng để hiển thị và xuất kết quả.', isTrue: true },
          { id: 'b1_ds_1_c', text: 'c) Micro là thiết bị ra dùng để phát âm thanh ra bên ngoài.', isTrue: false },
          { id: 'b1_ds_1_d', text: 'd) Màn hình cảm ứng vừa có khả năng nhập dữ liệu vừa hiển thị thông tin.', isTrue: true }
        ],
        explanation: 'Micro là thiết bị VÀO (thu âm), còn Loa mới là thiết bị RA (phát âm).'
      },
      {
        id: 'b1_ds_2',
        category: 'true_false',
        questionText: 'Các phát biểu sau đây về thao tác an toàn khi sử dụng máy tính Đúng hay Sai:',
        statements: [
          { id: 'b1_ds_2_a', text: 'a) Nên đọc kỹ hướng dẫn sử dụng của nhà sản xuất trước khi dùng thiết bị.', isTrue: true },
          { id: 'b1_ds_2_b', text: 'b) Tắt máy tính bằng cách nhấn chọn nút Shut down trên hệ điều hành.', isTrue: true },
          { id: 'b1_ds_2_c', text: 'c) Vừa ăn uống vừa sử dụng máy tính giúp làm việc hiệu quả và không gây hại.', isTrue: false },
          { id: 'b1_ds_2_d', text: 'd) Rút phích cắm điện trực tiếp khi máy đang chạy là cách tắt máy nhanh và an toàn nhất.', isTrue: false }
        ],
        explanation: 'Ăn uống gần máy tính có nguy cơ đụng vãi nước; rút điện trực tiếp gây hỏng dữ liệu.'
      },
      {
        id: 'b1_ds_3',
        category: 'true_false',
        questionText: 'Về cổng kết nối và cáp thiết bị ngoại vi, xác định tính Đúng/Sai của các câu sau:',
        statements: [
          { id: 'b1_ds_3_a', text: 'a) Cổng USB cho phép kết nối nhiều loại thiết bị như chuột, bàn phím, thẻ nhớ.', isTrue: true },
          { id: 'b1_ds_3_b', text: 'b) Có thể cắm dây nối vào bất kỳ cổng nào mà không cần quan tâm đến hình dạng đầu cắm.', isTrue: false },
          { id: 'b1_ds_3_c', text: 'c) Dây nguồn cung cấp điện cho máy tính cần được cắm chắc chắn.', isTrue: true },
          { id: 'b1_ds_3_d', text: 'd) Cáp HDMI thường được dùng để truyền dữ liệu hình ảnh và âm thanh chất lượng cao.', isTrue: true }
        ],
        explanation: 'Cổng cắm có hình dạng chuẩn xác, cố tình cắm sai sẽ làm hỏng thiết bị.'
      },
      {
        id: 'b1_ds_4',
        category: 'true_false',
        questionText: 'Xét các thiết bị thu âm và ghi hình số hóa:',
        statements: [
          { id: 'b1_ds_4_a', text: 'a) Máy ảnh kỹ thuật số không thể làm thiết bị vào.', isTrue: false },
          { id: 'b1_ds_4_b', text: 'b) Máy quét (Scanner) chuyển thông tin văn bản giấy thành dữ liệu tệp trong máy.', isTrue: true },
          { id: 'b1_ds_4_c', text: 'c) Web camera (Webcam) giúp nhập dữ liệu hình ảnh video trực tiếp vào máy tính.', isTrue: true },
          { id: 'b1_ds_4_d', text: 'd) Loa thùng kết nối qua jack 3.5mm là thiết bị vào âm thanh.', isTrue: false }
        ],
        explanation: 'Máy ảnh kĩ thuật số thu ảnh vào máy (thiết bị vào). Loa thùng là thiết bị ra.'
      },
      {
        id: 'b1_ds_5',
        category: 'true_false',
        questionText: 'Xét về các hành vi bảo quản và giữ gìn máy tính tại phòng thực hành:',
        statements: [
          { id: 'b1_ds_5_a', text: 'a) Giữ vệ sinh phòng máy, giữ tay khô ráo khi chạm vào bàn phím và chuột.', isTrue: true },
          { id: 'b1_ds_5_b', text: 'b) Dùng bút nhọn gõ mạnh lên bề mặt màn hình để chọn đối tượng.', isTrue: false },
          { id: 'b1_ds_5_c', text: 'c) Đóng các ứng dụng và thực hiện Shut down trước khi rời phòng máy.', isTrue: true },
          { id: 'b1_ds_5_d', text: 'd) Khi máy tính hỏng hóc, học sinh nên tự tháo tung thùng máy ra để sửa chữa.', isTrue: false }
        ],
        explanation: 'Không dùng vật nhọn đâm màn hình; không tự tháo mở điện khi chưa có kiến thức.'
      }
    ]
  },

  {
    id: 'lesson_2',
    number: 2,
    title: 'Bài 2: Phần mềm máy tính',
    themeId: 'theme_1',
    themeTitle: 'Chủ đề 1: Máy tính và cộng đồng',
    summary: [
      {
        title: '1. Hệ điều hành (Operating System)',
        content: [
          'Hệ điều hành là phần mềm hệ thống quản lý và điều khiển hoạt động chung của máy tính, cung cấp môi trường cho các phần mềm ứng dụng chạy.',
          'Chức năng chính: Quản lý phần cứng và dữ liệu, điều khiển các thiết bị, cung cấp giao diện tương tác giữa người dùng và máy tính.',
          'Ví dụ cho máy tính: Windows, macOS, Linux... Cho điện thoại/máy tính bảng: Android, iOS...'
        ],
        illustrationType: 'software_tree'
      },
      {
        title: '2. Phần mềm ứng dụng và Phần mở rộng tệp',
        content: [
          'Phần mềm ứng dụng: Giúp con người thực hiện những công việc cụ thể (soạn thảo văn bản, bảng tính, trình chiếu, duyệt web...). Ví dụ: MS Word, Excel, PowerPoint, Google Chrome, Scratch...',
          'Phần mở rộng của tên tệp: Gồm các ký tự sau dấu chấm cuối cùng trong tên tệp. Nhờ phần mở rộng, hệ điều hành nhận biết loại tệp và chọn phần mềm mở phù hợp.',
          'Ví dụ: .docx (Word), .xlsx (Excel), .pptx (PowerPoint), .jpg/.png (hình ảnh), .mp3 (âm thanh), .mp4 (video), .pdf (tài liệu), .exe (chương trình).'
        ]
      }
    ],
    questions: [
      // 12 Recall
      {
        id: 'b2_nb_1',
        category: 'recall',
        questionText: 'Phần mềm nào sau đây là Hệ điều hành dành cho máy tính cá nhân?',
        options: [{ key: 'A', text: 'Microsoft Word' }, { key: 'B', text: 'Windows 10' }, { key: 'C', text: 'Google Chrome' }, { key: 'D', text: 'Unikey' }],
        correctAnswer: 'B',
        explanation: 'Windows 10 là hệ điều hành quản lý điều khiển máy tính.'
      },
      {
        id: 'b2_nb_2',
        category: 'recall',
        questionText: 'Phần mềm ứng dụng dùng để làm gì?',
        options: [{ key: 'A', text: 'Điều khiển toàn bộ phần cứng máy tính' }, { key: 'B', text: 'Giúp người dùng thực hiện một công việc cụ thể' }, { key: 'C', text: 'Cung cấp nguồn điện cho thùng máy' }, { key: 'D', text: 'Quản lý bộ nhớ RAM' }],
        correctAnswer: 'B',
        explanation: 'Phần mềm ứng dụng hỗ trợ giải quyết công việc cụ thể.'
      },
      {
        id: 'b2_nb_3',
        category: 'recall',
        questionText: 'Hệ điều hành nào sau đây phổ biến nhất trên các điện thoại thông minh Android?',
        options: [{ key: 'A', text: 'Windows 11' }, { key: 'B', text: 'MS DOS' }, { key: 'C', text: 'Android' }, { key: 'D', text: 'macOS' }],
        correctAnswer: 'C',
        explanation: 'Android là hệ điều hành di động mã nguồn mở phổ biến.'
      },
      {
        id: 'b2_nb_4',
        category: 'recall',
        questionText: 'Tệp văn bản tạo bởi Microsoft Word thường có phần mở rộng mặc định là gì?',
        options: [{ key: 'A', text: '.xlsx' }, { key: 'B', text: '.docx' }, { key: 'C', text: '.pptx' }, { key: 'D', text: '.mp3' }],
        correctAnswer: 'B',
        explanation: '.docx là phần mở rộng của tài liệu MS Word.'
      },
      {
        id: 'b2_nb_5',
        category: 'recall',
        questionText: 'Tệp có phần mở rộng là .jpg hoặc .png thuộc loại dữ liệu nào?',
        options: [{ key: 'A', text: 'Âm thanh' }, { key: 'B', text: 'Văn bản' }, { key: 'C', text: 'Hình ảnh' }, { key: 'D', text: 'Video' }],
        correctAnswer: 'C',
        explanation: '.jpg và .png là định dạng hình ảnh số.'
      },
      {
        id: 'b2_nb_6',
        category: 'recall',
        questionText: 'Thành phần nào giúp hệ điều hành biết được tệp thuộc loại nào để chọn phần mềm mở phù hợp?',
        options: [{ key: 'A', text: 'Tên thư mục mẹ' }, { key: 'B', text: 'Phần mở rộng của tên tệp' }, { key: 'C', text: 'Dung lượng ổ C' }, { key: 'D', text: 'Ngày giờ tạo tệp' }],
        correctAnswer: 'B',
        explanation: 'Phần mở rộng đứng sau dấu chấm cuối cùng trong tên tệp.'
      },
      {
        id: 'b2_nb_7',
        category: 'recall',
        questionText: 'Đâu KHÔNG PHẢI là một hệ điều hành?',
        options: [{ key: 'A', text: 'Linux' }, { key: 'B', text: 'iOS' }, { key: 'C', text: 'Microsoft Excel' }, { key: 'D', text: 'Windows 7' }],
        correctAnswer: 'C',
        explanation: 'Microsoft Excel là phần mềm ứng dụng bảng tính.'
      },
      {
        id: 'b2_nb_8',
        category: 'recall',
        questionText: 'Phần mở rộng .pptx thuộc loại tệp tạo bởi ứng dụng nào?',
        options: [{ key: 'A', text: 'Microsoft PowerPoint' }, { key: 'B', text: 'Microsoft Word' }, { key: 'C', text: 'Notepad' }, { key: 'D', text: 'Paint' }],
        correctAnswer: 'A',
        explanation: '.pptx là đuôi định dạng tệp trình chiếu PowerPoint.'
      },
      {
        id: 'b2_nb_9',
        category: 'recall',
        questionText: 'Phần mở rộng của tên tệp thường nằm ở vị trí nào trong tên tệp?',
        options: [{ key: 'A', text: 'Ở đầu tên tệp' }, { key: 'B', text: 'Sau dấu chấm cuối cùng trong tên tệp' }, { key: 'C', text: 'Trong tên thư mục chứa tệp' }, { key: 'D', text: 'Không nằm trong tên tệp' }],
        correctAnswer: 'B',
        explanation: 'Ví dụ: TapLamVan.docx thì .docx đứng sau dấu chấm cuối.'
      },
      {
        id: 'b2_nb_10',
        category: 'recall',
        questionText: 'Để duyệt các trang web trên Internet, người dùng cần sử dụng loại phần mềm nào?',
        options: [{ key: 'A', text: 'Hệ điều hành Windows' }, { key: 'B', text: 'Phần mềm ứng dụng trình duyệt web (Google Chrome, Edge, Firefox)' }, { key: 'C', text: 'Phần mềm diệt virus' }, { key: 'D', text: 'Phần mềm gõ tiếng Việt' }],
        correctAnswer: 'B',
        explanation: 'Trình duyệt web dùng để truy cập các trang tin trên Internet.'
      },
      {
        id: 'b2_nb_11',
        category: 'recall',
        questionText: 'Tệp chương trình thực thi trực tiếp trên hệ điều hành Windows thường có đuôi là gì?',
        options: [{ key: 'A', text: '.exe' }, { key: 'B', text: '.txt' }, { key: 'C', text: '.mp3' }, { key: 'D', text: '.png' }],
        correctAnswer: 'A',
        explanation: '.exe là ký hiệu viết tắt của executable file.'
      },
      {
        id: 'b2_nb_12',
        category: 'recall',
        questionText: 'Thiết bị thông minh muốn vận hành phần mềm ứng dụng thì bắt buộc phải có cái gì trước?',
        options: [{ key: 'A', text: 'Thẻ nhớ ngoài 128GB' }, { key: 'B', text: 'Hệ điều hành (như Android hoặc iOS)' }, { key: 'C', text: 'Tai nghe Bluetooth' }, { key: 'D', text: 'Máy in wifi' }],
        correctAnswer: 'B',
        explanation: 'Hệ điều hành tạo môi trường cho tất cả ứng dụng.'
      },

      // 8 Comprehension
      {
        id: 'b2_th_1',
        category: 'comprehension',
        questionText: 'Phát biểu nào sau đây thể hiện đúng mối quan hệ giữa Hệ điều hành và Phần mềm ứng dụng?',
        options: [{ key: 'A', text: 'Phần mềm ứng dụng chạy độc lập không cần hệ điều hành' }, { key: 'B', text: 'Hệ điều hành tạo môi trường để phần mềm ứng dụng chạy' }, { key: 'C', text: 'Hệ điều hành là một phần mềm ứng dụng nhỏ' }, { key: 'D', text: 'Khi bật máy tính, phần mềm ứng dụng sẽ chạy trước hệ điều hành' }],
        correctAnswer: 'B',
        explanation: 'Hệ điều hành nạp trước, cung cấp nền tảng cho phần mềm ứng dụng.'
      },
      {
        id: 'b2_th_2',
        category: 'comprehension',
        questionText: 'Bạn An có tệp tên BàiHọc.mp4. Khi nháy kép chuột vào tệp này, hệ điều hành sẽ làm gì?',
        options: [{ key: 'A', text: 'Mở tệp bằng phần mềm Word' }, { key: 'B', text: 'Nhận biết tệp video (.mp4) và mở bằng phần mềm phát video' }, { key: 'C', text: 'Báo lỗi vì tệp không có tên' }, { key: 'D', text: 'Tự động xóa tệp' }],
        correctAnswer: 'B',
        explanation: '.mp4 là định dạng video, hệ điều hành chọn trình phát video tương ứng.'
      },
      {
        id: 'b2_th_3',
        category: 'comprehension',
        questionText: 'Tại sao khi tải ứng dụng cho điện thoại, ta cần chọn bản phù hợp với Android hoặc iOS?',
        options: [{ key: 'A', text: 'Vì ứng dụng viết cho iOS không thể chạy trực tiếp trên Android do khác biệt môi trường hệ điều hành' }, { key: 'B', text: 'Vì điện thoại nào cũng giống nhau' }, { key: 'C', text: 'Vì kích thước màn hình giống nhau' }, { key: 'D', text: 'Vì ứng dụng điều khiển pin' }],
        correctAnswer: 'A',
        explanation: 'Mỗi hệ điều hành cung cấp các tập lệnh và cấu trúc riêng.'
      },
      {
        id: 'b2_th_4',
        category: 'comprehension',
        questionText: 'Điểm khác biệt cơ bản giữa Hệ điều hành và Phần mềm ứng dụng là gì?',
        options: [{ key: 'A', text: 'Hệ điều hành đắt tiền hơn' }, { key: 'B', text: 'Hệ điều hành quản lý chung máy tính, phần mềm ứng dụng phục vụ công việc cụ thể' }, { key: 'C', text: 'Phần mềm ứng dụng có trước hệ điều hành' }, { key: 'D', text: 'Hệ điều hành nằm trong bàn phím' }],
        correctAnswer: 'B',
        explanation: 'Hệ điều hành quản lý toàn hệ thống, ứng dụng làm việc chuyên biệt.'
      },
      {
        id: 'b2_th_5',
        category: 'comprehension',
        questionText: 'Nếu đổi phần mở rộng tệp BaiTap.docx thành BaiTap.xlsx, điều gì xảy ra khi mở tệp?',
        options: [{ key: 'A', text: 'Văn bản tự thành bảng tính' }, { key: 'B', text: 'Hệ điều hành sẽ dùng Excel mở và có thể bị lỗi cấu trúc không đọc được' }, { key: 'C', text: 'Tệp bị xóa' }, { key: 'D', text: 'Máy tính ngắt điện' }],
        correctAnswer: 'B',
        explanation: 'Đổi phần mở rộng làm hệ điều hành mở sai phần mềm đọc tệp.'
      },
      {
        id: 'b2_th_6',
        category: 'comprehension',
        questionText: 'Phần mềm nào sau đây giúp học sinh luyện tập lập trình kéo thả trực quan?',
        options: [{ key: 'A', text: 'Windows Defender' }, { key: 'B', text: 'Scratch' }, { key: 'C', text: 'Unikey' }, { key: 'D', text: 'WinRAR' }],
        correctAnswer: 'B',
        explanation: 'Scratch là môi trường học lập trình kéo thả.'
      },
      {
        id: 'b2_th_7',
        category: 'comprehension',
        questionText: 'Người dùng có thể cài đặt nhiều phần mềm ứng dụng khác nhau trên cùng một hệ điều hành vì sao?',
        options: [{ key: 'A', text: 'Vì hệ điều hành cung cấp môi trường chung cho phép cài đặt và vận hành nhiều ứng dụng' }, { key: 'B', text: 'Vì ứng dụng tự xóa hệ điều hành' }, { key: 'C', text: 'Vì phần cứng không cần bộ nhớ' }, { key: 'D', text: 'Vì máy tính chỉ mở 1 tệp' }],
        correctAnswer: 'A',
        explanation: 'Hệ điều hành quản lý đa nhiệm tài nguyên phần cứng.'
      },
      {
        id: 'b2_th_8',
        category: 'comprehension',
        questionText: 'Phần mềm soạn thảo văn bản như Word giúp người dùng giải quyết công việc nào?',
        options: [{ key: 'A', text: 'Tính toán bảng lương phức tạp' }, { key: 'B', text: 'Soạn thảo đơn từ, thông báo, giáo án, sách báo' }, { key: 'C', text: 'Điều khiển quạt CPU' }, { key: 'D', text: 'Quét virus' }],
        correctAnswer: 'B',
        explanation: 'Word chuyên xử lý và định dạng văn bản.'
      },

      // 5 True/False
      {
        id: 'b2_ds_1',
        category: 'true_false',
        questionText: 'Xác định tính Đúng/Sai của các nhận định về Hệ điều hành:',
        statements: [
          { id: 'b2_ds_1_a', text: 'a) Hệ điều hành điều khiển và quản lý hoạt động chung của toàn bộ máy tính.', isTrue: true },
          { id: 'b2_ds_1_b', text: 'b) Máy tính không thể hoạt động được nếu chưa được cài đặt Hệ điều hành.', isTrue: true },
          { id: 'b2_ds_1_c', text: 'c) Windows 10 và Android đều thuộc nhóm các hệ điều hành.', isTrue: true },
          { id: 'b2_ds_1_d', text: 'd) Hệ điều hành là phần mềm do người dùng gõ chạy không cần nạp vào RAM.', isTrue: false }
        ],
        explanation: 'Hệ điều hành bắt buộc phải được nạp vào RAM khi khởi động máy.'
      },
      {
        id: 'b2_ds_2',
        category: 'true_false',
        questionText: 'Các phát biểu sau đây về phần mềm ứng dụng Đúng hay Sai:',
        statements: [
          { id: 'b2_ds_2_a', text: 'a) Phần mềm ứng dụng giúp con người xử lý công việc cụ thể.', isTrue: true },
          { id: 'b2_ds_2_b', text: 'b) Microsoft PowerPoint là phần mềm ứng dụng dùng để tạo bài trình chiếu.', isTrue: true },
          { id: 'b2_ds_2_c', text: 'c) Mọi máy tính khi sản xuất ra đều đã tự động cài sẵn đầy đủ các phần mềm ứng dụng.', isTrue: false },
          { id: 'b2_ds_2_d', text: 'd) Phần mềm ứng dụng được cài đặt và vận hành trên nền tảng của hệ điều hành.', isTrue: true }
        ],
        explanation: 'Phần mềm ứng dụng do người dùng cài đặt thêm theo nhu cầu.'
      },
      {
        id: 'b2_ds_3',
        category: 'true_false',
        questionText: 'Xét về phần mở rộng của tên tệp:',
        statements: [
          { id: 'b2_ds_3_a', text: 'a) Phần mở rộng giúp hệ điều hành phân loại tệp và chọn chương trình mở phù hợp.', isTrue: true },
          { id: 'b2_ds_3_b', text: 'b) Tệp TapLamVan.docx có phần mở rộng là .docx.', isTrue: true },
          { id: 'b2_ds_3_c', text: 'c) Phần mở rộng luôn nằm ở trước tên chính của tệp.', isTrue: false },
          { id: 'b2_ds_3_d', text: 'd) Có thể thoải mái thay đổi phần mở rộng tệp mà không gây ảnh hưởng đến dữ liệu.', isTrue: false }
        ],
        explanation: 'Phần mở rộng đứng sau dấu chấm cuối; đổi sai sẽ gây lỗi mở tệp.'
      },
      {
        id: 'b2_ds_4',
        category: 'true_false',
        questionText: 'Xét tính đúng sai của các khớp nối phần mềm với chức năng:',
        statements: [
          { id: 'b2_ds_4_a', text: 'a) Google Chrome: Trình duyệt web truy cập Internet.', isTrue: true },
          { id: 'b2_ds_4_b', text: 'b) Unikey: Phần mềm gõ tiếng Việt trên máy tính.', isTrue: true },
          { id: 'b2_ds_4_c', text: 'c) Windows Media Player: Phần mềm thiết kế sơ đồ tư duy.', isTrue: false },
          { id: 'b2_ds_4_d', text: 'd) Microsoft Excel: Phần mềm xử lý bảng tính số liệu.', isTrue: true }
        ],
        explanation: 'Windows Media Player là trình phát nhạc/video.'
      },
      {
        id: 'b2_ds_5',
        category: 'true_false',
        questionText: 'Khi chọn cài đặt phần mềm cho thiết bị di động:',
        statements: [
          { id: 'b2_ds_5_a', text: 'a) Điện thoại iPhone chạy iOS sử dụng cửa hàng App Store để tải phần mềm.', isTrue: true },
          { id: 'b2_ds_5_b', text: 'b) Điện thoại Android sử dụng CH Play (Google Play) để tải phần mềm.', isTrue: true },
          { id: 'b2_ds_5_c', text: 'c) Tất cả tệp cài đặt cho Windows PC đều cài trực tiếp lên điện thoại được.', isTrue: false },
          { id: 'b2_ds_5_d', text: 'd) Phần mềm ứng dụng giúp mở rộng tính năng cho thiết bị thông minh.', isTrue: true }
        ],
        explanation: 'Ứng dụng Windows dành cho PC không cài trực tiếp lên điện thoại.'
      }
    ]
  },

  {
    id: 'lesson_3',
    number: 3,
    title: 'Bài 3: Quản lí dữ liệu trong máy tính',
    themeId: 'theme_1',
    themeTitle: 'Chủ đề 1: Máy tính và cộng đồng',
    summary: [
      {
        title: '1. Tên tệp và Thư mục',
        content: [
          'Dữ liệu trong máy tính được lưu trữ dưới dạng các tệp (files) và thư mục (folders).',
          'Tên tệp và thư mục nên đặt ngắn gọn, dễ nhớ, phản ánh nội dung bên trong để dễ tìm kiếm.',
          'Cấu trúc cây thư mục (Folder Tree) giúp tổ chức lưu trữ dữ liệu khoa học.',
          'Thao tác tệp/thư mục: Tạo mới (New Folder), Đổi tên (Rename), Sao chép (Copy/Paste), Di chuyển (Cut/Paste), Xóa (Delete).'
        ],
        illustrationType: 'file_structure'
      },
      {
        title: '2. Các biện pháp bảo vệ dữ liệu',
        content: [
          'Sao lưu dữ liệu (Backup): Tạo bản sao tệp/thư mục và lưu ở thiết bị khác (USB, ổ cứng ngoài) hoặc trên đám mây (Google Drive, OneDrive...) để phục hồi khi mất.',
          'Đặt mật khẩu bảo vệ tài khoản: Mật khẩu mạnh gồm tối thiểu 8 ký tự, kết hợp chữ hoa, chữ thường, con số và ký tự đặc biệt (@, #, $...).',
          'Phần mềm chống virus: Cài đặt và bật thường xuyên các phần mềm chống virus (Windows Defender, Avast, Kaspersky, Bkav...) để ngăn chặn mã độc.'
        ]
      }
    ],
    questions: [
      // 12 Recall
      {
        id: 'b3_nb_1',
        category: 'recall',
        questionText: 'Thao tác nào dùng để tạo một thư mục mới trong hệ điều hành Windows?',
        options: [{ key: 'A', text: 'Nháy chuột phải -> New -> Folder' }, { key: 'B', text: 'Nhấn phím Delete' }, { key: 'C', text: 'Chọn lệnh Cut và Paste' }, { key: 'D', text: 'Nhấn Alt + F4' }],
        correctAnswer: 'A',
        explanation: 'Nháy chuột phải chọn New -> Folder là thao tác tạo thư mục mới.'
      },
      {
        id: 'b3_nb_2',
        category: 'recall',
        questionText: 'Lệnh nào dùng để đổi tên tệp hoặc thư mục đang chọn?',
        options: [{ key: 'A', text: 'Copy' }, { key: 'B', text: 'Delete' }, { key: 'C', text: 'Rename' }, { key: 'D', text: 'Cut' }],
        correctAnswer: 'C',
        explanation: 'Rename có nghĩa là đổi tên.'
      },
      {
        id: 'b3_nb_3',
        category: 'recall',
        questionText: 'Lệnh Copy kết hợp với lệnh nào để thực hiện sao chép tệp/thư mục?',
        options: [{ key: 'A', text: 'Delete' }, { key: 'B', text: 'Paste' }, { key: 'C', text: 'Rename' }, { key: 'D', text: 'Cut' }],
        correctAnswer: 'B',
        explanation: 'Copy đi kèm Paste để dán kết quả sao chép.'
      },
      {
        id: 'b3_nb_4',
        category: 'recall',
        questionText: 'Sao lưu dữ liệu là gì?',
        options: [{ key: 'A', text: 'Xóa bớt tệp dư thừa' }, { key: 'B', text: 'Tạo bản sao của dữ liệu và lưu trữ ở nơi an toàn' }, { key: 'C', text: 'Đổi tên tệp thành ký tự bí mật' }, { key: 'D', text: 'Nén tệp bằng WinRAR' }],
        correctAnswer: 'B',
        explanation: 'Sao lưu dữ liệu (backup) giúp phục hồi khi bản gốc gặp sự cố.'
      },
      {
        id: 'b3_nb_5',
        category: 'recall',
        questionText: 'Đâu là đặc điểm của một mật khẩu mạnh?',
        options: [{ key: 'A', text: 'Chỉ gồm 4 chữ số ngày sinh' }, { key: 'B', text: 'Đặt là "12345678"' }, { key: 'C', text: 'Tối thiểu 8 ký tự, gồm chữ hoa, chữ thường, số và ký tự đặc biệt' }, { key: 'D', text: 'Tên của chính người dùng' }],
        correctAnswer: 'C',
        explanation: 'Mật khẩu mạnh kết hợp đa dạng loại ký tự và đủ độ dài.'
      },
      {
        id: 'b3_nb_6',
        category: 'recall',
        questionText: 'Ứng dụng File Explorer trong hệ điều hành Windows có chức năng chính là gì?',
        options: [{ key: 'A', text: 'Soạn thảo văn bản' }, { key: 'B', text: 'Quản lý tệp và thư mục trên đĩa' }, { key: 'C', text: 'Tính toán điểm thi' }, { key: 'D', text: 'Vẽ tranh' }],
        correctAnswer: 'B',
        explanation: 'File Explorer là trình quản lý tệp/thư mục của Windows.'
      },
      {
        id: 'b3_nb_7',
        category: 'recall',
        questionText: 'Để di chuyển tệp sang thư mục khác (không giữ lại tệp gốc), ta dùng cặp lệnh nào?',
        options: [{ key: 'A', text: 'Copy và Paste' }, { key: 'B', text: 'Cut và Paste' }, { key: 'C', text: 'Delete và Undo' }, { key: 'D', text: 'Rename và Save' }],
        correctAnswer: 'B',
        explanation: 'Cut (Cắt) đi kèm Paste (Dán) giúp di chuyển tệp.'
      },
      {
        id: 'b3_nb_8',
        category: 'recall',
        questionText: 'Phần mềm nào sau đây là phần mềm diệt virus?',
        options: [{ key: 'A', text: 'Kaspersky / Bkav' }, { key: 'B', text: 'PowerPoint' }, { key: 'C', text: 'Google Chrome' }, { key: 'D', text: 'Foxit Reader' }],
        correctAnswer: 'A',
        explanation: 'Kaspersky và Bkav là các phần mềm phòng chống diệt virus.'
      },
      {
        id: 'b3_nb_9',
        category: 'recall',
        questionText: 'Sao lưu dữ liệu đám mây là lưu bản sao dữ liệu lên đâu?',
        options: [{ key: 'A', text: 'USB trong túi' }, { key: 'B', text: 'Máy chủ lưu trữ trên Internet (như Google Drive, OneDrive)' }, { key: 'C', text: 'Màn hình máy tính' }, { key: 'D', text: 'Bàn phím' }],
        correctAnswer: 'B',
        explanation: 'Sao lưu đám mây đưa tệp lên máy chủ lưu trữ trên Internet.'
      },
      {
        id: 'b3_nb_10',
        category: 'recall',
        questionText: 'Khi xóa một thư mục, tất cả tệp và thư mục con bên trong sẽ như thế nào?',
        options: [{ key: 'A', text: 'Vẫn còn nguyên' }, { key: 'B', text: 'Được di chuyển ra Desktop' }, { key: 'C', text: 'Cũng bị xóa theo thư mục mẹ' }, { key: 'D', text: 'Tự động biến thành tệp Word' }],
        correctAnswer: 'C',
        explanation: 'Xóa thư mục mẹ xóa toàn bộ nội dung chứa bên trong.'
      },
      {
        id: 'b3_nb_11',
        category: 'recall',
        questionText: 'Phím tắt sao chép (Copy) tệp/thư mục đang chọn là gì?',
        options: [{ key: 'A', text: 'Ctrl + C' }, { key: 'B', text: 'Ctrl + V' }, { key: 'C', text: 'Ctrl + X' }, { key: 'D', text: 'Ctrl + Z' }],
        correctAnswer: 'A',
        explanation: 'Ctrl + C là phím tắt của Copy.'
      },
      {
        id: 'b3_nb_12',
        category: 'recall',
        questionText: 'Phím tắt dán (Paste) tệp/thư mục vừa sao chép hoặc cắt là gì?',
        options: [{ key: 'A', text: 'Ctrl + C' }, { key: 'B', text: 'Ctrl + V' }, { key: 'C', text: 'Ctrl + X' }, { key: 'D', text: 'Ctrl + A' }],
        correctAnswer: 'B',
        explanation: 'Ctrl + V là phím tắt của Paste.'
      },

      // 8 Comprehension
      {
        id: 'b3_th_1',
        category: 'comprehension',
        questionText: 'Tại sao chúng ta nên tổ chức lưu trữ dữ liệu theo cấu trúc cây thư mục phân cấp?',
        options: [{ key: 'A', text: 'Để máy tính khởi động nhanh hơn' }, { key: 'B', text: 'Giúp việc tìm kiếm, quản lý và truy cập tệp tin dễ dàng, khoa học' }, { key: 'C', text: 'Để tăng gấp đôi dung lượng ổ cứng' }, { key: 'D', text: 'Để phần mềm tự gõ chữ' }],
        correctAnswer: 'B',
        explanation: 'Tổ chức thư mục phân cấp khoa học giúp tiết kiệm thời gian quản lý tệp.'
      },
      {
        id: 'b3_th_2',
        category: 'comprehension',
        questionText: 'Mật khẩu nào sau đây thể hiện độ bảo mật cao và khó bị đoán nhất?',
        options: [{ key: 'A', text: '12345678' }, { key: 'B', text: 'NamPro2010' }, { key: 'C', text: '2n#M1nhKh0a' }, { key: 'D', text: 'nguyenvannam' }],
        correctAnswer: 'C',
        explanation: '2n#M1nhKh0a có ký tự đặc biệt, số, chữ hoa chữ thường đủ 8 ký tự.'
      },
      {
        id: 'b3_th_3',
        category: 'comprehension',
        questionText: 'Nếu máy tính bị nhiễm virus nguy hại, nguy cơ lớn nhất có thể xảy ra là gì?',
        options: [{ key: 'A', text: 'Màn hình đổi sang màu hồng' }, { key: 'B', text: 'Dữ liệu bị xóa, bị mã hóa tống tiền hoặc bị đánh cắp thông tin cá nhân' }, { key: 'C', text: 'Bàn phím tự động gõ bài học' }, { key: 'D', text: 'Con trỏ chuột chạy nhanh hơn' }],
        correctAnswer: 'B',
        explanation: 'Virus độc hại gây mất mát, hư hỏng hoặc rò rỉ dữ liệu quan trọng.'
      },
      {
        id: 'b3_th_4',
        category: 'comprehension',
        questionText: 'Ưu điểm lớn nhất của việc sao lưu dữ liệu đám mây (Google Drive/OneDrive) là gì?',
        options: [{ key: 'A', text: 'Không cần tài khoản' }, { key: 'B', text: 'Có thể truy cập dữ liệu từ bất kỳ đâu có Internet và không sợ hỏng mất USB vật lý' }, { key: 'C', text: 'Tự động dịch tệp sang tiếng Anh' }, { key: 'D', text: 'Giúp máy tính không cần dùng điện' }],
        correctAnswer: 'B',
        explanation: 'Sao lưu đám mây truy cập linh hoạt từ xa và tránh rủi ro mất thiết bị phần cứng.'
      },
      {
        id: 'b3_th_5',
        category: 'comprehension',
        questionText: 'Khi đặt tên cho thư mục chứa ảnh tham quan học tập của lớp, tên nào sau đây phù hợp nhất?',
        options: [{ key: 'A', text: 'New Folder' }, { key: 'B', text: 'An_Binh_Khoa' }, { key: 'C', text: 'Anh_ThamQuan_Lop7A' }, { key: 'D', text: '123456' }],
        correctAnswer: 'C',
        explanation: 'Anh_ThamQuan_Lop7A rõ ràng, ngắn gọn và mô tả chính xác nội dung.'
      },
      {
        id: 'b3_th_6',
        category: 'comprehension',
        questionText: 'Tại sao cần phải quét virus thường xuyên cho các thiết bị lưu trữ ngoài như ổ USB trước khi mở tệp?',
        options: [{ key: 'A', text: 'Để USB chạy nhanh hơn' }, { key: 'B', text: 'Để ngăn chặn virus lây nhiễm từ USB vào hệ thống máy tính' }, { key: 'C', text: 'Để tăng dung lượng cho USB' }, { key: 'D', text: 'Để tự động sửa lỗi văn bản' }],
        correctAnswer: 'B',
        explanation: 'USB ngoài là nguồn lây nhiễm virus phổ biến giữa các máy tính.'
      },
      {
        id: 'b3_th_7',
        category: 'comprehension',
        questionText: 'Sao lưu cục bộ (Local Backup) là việc lưu bản sao tệp ở đâu?',
        options: [{ key: 'A', text: 'Lưu trên cùng máy tính chứa bản gốc hoặc trên đĩa cứng ngoài, đĩa CD/USB' }, { key: 'B', text: 'Gửi qua thư bưu điện' }, { key: 'C', text: 'Gõ ra giấy' }, { key: 'D', text: 'Đọc cho bạn nhớ' }],
        correctAnswer: 'A',
        explanation: 'Sao lưu cục bộ sử dụng các thiết bị phần cứng lưu trữ trực tiếp.'
      },
      {
        id: 'b3_th_8',
        category: 'comprehension',
        questionText: 'Để đảm bảo an toàn tài khoản học trực tuyến, em KHÔNG NÊN làm điều nào sau đây?',
        options: [{ key: 'A', text: 'Đặt mật khẩu phức tạp' }, { key: 'B', text: 'Cho bạn bè mượn tài khoản và tiết lộ mật khẩu cá nhân' }, { key: 'C', text: 'Đăng xuất tài khoản khi dùng xong máy tính công cộng' }, { key: 'D', text: 'Đổi mật khẩu định kỳ' }],
        correctAnswer: 'B',
        explanation: 'Tiết lộ mật khẩu cá nhân cho người khác khiến tài khoản mất an toàn.'
      },

      // 5 True/False
      {
        id: 'b3_ds_1',
        category: 'true_false',
        questionText: 'Các nhận định sau đây về cách quản lý tệp và thư mục Đúng hay Sai:',
        statements: [
          { id: 'b3_ds_1_a', text: 'a) Tên tệp và thư mục nên gợi nhớ nội dung chứa bên trong.', isTrue: true },
          { id: 'b3_ds_1_b', text: 'b) Trong cùng một thư mục mẹ, có thể tạo hai thư mục con có tên giống hệt nhau.', isTrue: false },
          { id: 'b3_ds_1_c', text: 'c) Thư mục có thể chứa các tệp và các thư mục con khác.', isTrue: true },
          { id: 'b3_ds_1_d', text: 'd) Cấu trúc cây thư mục giúp sắp xếp dữ liệu khoa học.', isTrue: true }
        ],
        explanation: 'Trong cùng một thư mục mẹ không được chứa hai tệp/thư mục con trùng tên.'
      },
      {
        id: 'b3_ds_2',
        category: 'true_false',
        questionText: 'Nhận định về việc sao lưu dữ liệu máy tính:',
        statements: [
          { id: 'b3_ds_2_a', text: 'a) Sao lưu dữ liệu giúp phục hồi lại tệp tin nếu bị hỏng hoặc mất mát bản gốc.', isTrue: true },
          { id: 'b3_ds_2_b', text: 'b) Chỉ cần sao lưu dữ liệu một lần duy nhất khi mua máy tính.', isTrue: false },
          { id: 'b3_ds_2_c', text: 'c) Thẻ nhớ USB, đĩa cứng ngoài và Google Drive là các phương tiện sao lưu tốt.', isTrue: true },
          { id: 'b3_ds_2_d', text: 'd) Sao lưu đám mây cho phép truy cập dữ liệu qua kết nối Internet.', isTrue: true }
        ],
        explanation: 'Sao lưu dữ liệu nên được thực hiện định kỳ thường xuyên.'
      },
      {
        id: 'b3_ds_3',
        category: 'true_false',
        questionText: 'Xác định Đúng/Sai đối với việc đặt mật khẩu bảo vệ tài khoản:',
        statements: [
          { id: 'b3_ds_3_a', text: 'a) Mật khẩu "123456" là mật khẩu rất dễ đoán và không an toàn.', isTrue: true },
          { id: 'b3_ds_3_b', text: 'b) Mật khẩu mạnh nên chứa kết hợp cả chữ hoa, chữ thường, số và ký tự đặc biệt.', isTrue: true },
          { id: 'b3_ds_3_c', text: 'c) Nên dùng ngày tháng năm sinh của mình làm mật khẩu cho dễ nhớ.', isTrue: false },
          { id: 'b3_ds_3_d', text: 'd) Nên chia sẻ mật khẩu cho các bạn trong lớp cùng dùng.', isTrue: false }
        ],
        explanation: 'Ngày sinh dễ bị dò tìm; mật khẩu phải giữ bí mật cá nhân.'
      },
      {
        id: 'b3_ds_4',
        category: 'true_false',
        questionText: 'Xét tính đúng/sai của các tác hại do virus máy tính gây ra:',
        statements: [
          { id: 'b3_ds_4_a', text: 'a) Virus có thể tự động làm chậm hoặc làm hỏng hệ điều hành.', isTrue: true },
          { id: 'b3_ds_4_b', text: 'b) Virus có thể xóa tệp dữ liệu hoặc mã hóa tệp tống tiền.', isTrue: true },
          { id: 'b3_ds_4_c', text: 'c) Bật tính năng diệt virus của Windows Defender giúp tăng cường bảo mật.', isTrue: true },
          { id: 'b3_ds_4_d', text: 'd) Virus máy tính có thể lây sang con người khi sờ vào bàn phím.', isTrue: false }
        ],
        explanation: 'Virus máy tính là chương trình phần mềm, không phải virus sinh học.'
      },
      {
        id: 'b3_ds_5',
        category: 'true_false',
        questionText: 'Về các phím tắt quản lý tệp trong Windows:',
        statements: [
          { id: 'b3_ds_5_a', text: 'a) Ctrl + C: Lệnh sao chép tệp/thư mục.', isTrue: true },
          { id: 'b3_ds_5_b', text: 'b) Ctrl + X: Lệnh cắt (di chuyển) tệp/thư mục.', isTrue: true },
          { id: 'b3_ds_5_c', text: 'c) Ctrl + V: Lệnh xóa vĩnh viễn tệp/thư mục.', isTrue: false },
          { id: 'b3_ds_5_d', text: 'd) Phím Delete: Chuyển tệp/thư mục vào thùng rác (Recycle Bin).', isTrue: true }
        ],
        explanation: 'Ctrl + V là lệnh dán (Paste).'
      }
    ]
  }
];
