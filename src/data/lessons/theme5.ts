import { Lesson } from '../../types';

export const LESSONS_THEME5: Lesson[] = [
  {
    id: 'lesson_14',
    number: 14,
    title: 'Bài 14: Thuật toán tìm kiếm tuần tự (Sequential Search)',
    themeId: 'theme_5',
    themeTitle: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính',
    summary: [
      {
        title: '1. Khái niệm bài toán tìm kiếm và Thuật toán tìm kiếm tuần tự',
        content: [
          'Bài toán tìm kiếm: Cho một danh sách các phần tử và giá trị Cần tìm X. Nhiệm vụ là xác định X có trong danh sách không, nếu có thì ở vị trí nào.',
          'Nguyên lý tìm kiếm tuần tự: Thực hiện lần lượt (từ đầu đến cuối danh sách) so sánh từng phần tử với giá trị X cần tìm.'
        ],
        illustrationType: 'sequential_search'
      },
      {
        title: '2. Các bước thực hiện của thuật toán',
        content: [
          'Bước 1: Bắt đầu từ phần tử đầu tiên của danh sách (vị trí i = 1).',
          'Bước 2: So sánh giá trị của phần tử thứ i với X.',
          '  - Nếu bằng X: Kết luận "Tìm thấy X ở vị trí i" và KẾT THÚC thuật toán.',
          '  - Nếu khác X: Tăng vị trí i lên 1 (i = i + 1) để xét phần tử tiếp theo.',
          'Bước 3: Nếu đã xét hết danh sách mà vẫn chưa thấy X: Kết luận "Không tìm thấy X" và KẾT THÚC.'
        ]
      },
      {
        title: '3. Phạm vi áp dụng và Đặc điểm',
        content: [
          'Áp dụng: Áp dụng được cho MỌI loại danh sách (kể cả danh sách chưa sắp xếp hoặc đã sắp xếp).',
          'Đặc điểm: Đơn giản, dễ cài đặt. Tuy nhiên nếu danh sách rất lớn thì thời gian tìm kiếm có thể chậm.'
        ]
      }
    ],
    questions: [
      // 12 Recall
      {
        id: 'b14_nb_1',
        category: 'recall',
        questionText: 'Thuật toán tìm kiếm tuần tự thực hiện việc tìm kiếm phần tử X như thế nào trong danh sách?',
        options: [{ key: 'A', text: 'Lần lượt so sánh X với từng phần tử từ đầu đến cuối danh sách' }, { key: 'B', text: 'Chia đôi danh sách liên tục' }, { key: 'C', text: 'Nhảy ngẫu nhiên các vị trí' }, { key: 'D', text: 'So sánh từ cuối ngược lên đầu' }],
        correctAnswer: 'A',
        explanation: 'Tìm kiếm tuần tự kiểm tra lần lượt theo thứ tự từ phần tử thứ nhất đến hết.'
      },
      {
        id: 'b14_nb_2',
        category: 'recall',
        questionText: 'Thuật toán tìm kiếm tuần tự sẽ KẾT THÚC khi nào?',
        options: [{ key: 'A', text: 'Khi tìm thấy phần tử X hoặc khi đã kiểm tra hết danh sách mà không thấy X' }, { key: 'B', text: 'Chỉ khi kiểm tra đến phần tử cuối cùng' }, { key: 'C', text: 'Sau đúng 3 bước' }, { key: 'D', text: 'Khi máy tính bị đơ' }],
        correctAnswer: 'A',
        explanation: 'Thuật toán dừng ngay khi gặp X hoặc dừng khi duyệt xong toàn bộ dãy.'
      },
      {
        id: 'b14_nb_3',
        category: 'recall',
        questionText: 'Đâu là ĐIỀU KIỆN để áp dụng thuật toán tìm kiếm tuần tự đối với dữ liệu đầu vào?',
        options: [{ key: 'A', text: 'Không cần điều kiện gì đặc biệt (danh sách chưa sắp xếp hay đã sắp xếp đều áp dụng được)' }, { key: 'B', text: 'Danh sách bắt buộc phải được sắp xếp tăng dần' }, { key: 'C', text: 'Danh sách phải gồm các số nguyên tố' }, { key: 'D', text: 'Danh sách phải có đúng 100 phần tử' }],
        correctAnswer: 'A',
        explanation: 'Tìm kiếm tuần tự hoạt động trên bất kỳ danh sách nào.'
      },
      {
        id: 'b14_nb_4',
        category: 'recall',
        questionText: 'Đầu vào (Input) của bài toán tìm kiếm là gì?',
        options: [{ key: 'A', text: 'Danh sách các phần tử và Giá trị X cần tìm' }, { key: 'B', text: 'Vị trí của phần tử X' }, { key: 'C', text: 'Tổng các số trong danh sách' }, { key: 'D', text: 'Phần mềm Word' }],
        correctAnswer: 'A',
        explanation: 'Input gồm danh sách dữ liệu ban đầu và mục tiêu X.'
      },
      {
        id: 'b14_nb_5',
        category: 'recall',
        questionText: 'Đầu ra (Output) của bài toán tìm kiếm là gì?',
        options: [{ key: 'A', text: 'Thông báo "Tìm thấy" kèm vị trí hoặc thông báo "Không tìm thấy"' }, { key: 'B', text: 'Danh sách đã được sắp xếp' }, { key: 'C', text: 'Số lượng phần tử trong danh sách' }, { key: 'D', text: 'Màu sắc danh sách' }],
        correctAnswer: 'A',
        explanation: 'Output xác định sự tồn tại và vị trí của X.'
      },
      {
        id: 'b14_nb_6',
        category: 'recall',
        questionText: 'Cho danh sách A = [5, 3, 8, 2, 9]. Để tìm giá trị X = 8 bằng tìm kiếm tuần tự, ta cần thực hiện bao nhiêu lần so sánh?',
        options: [{ key: 'A', text: '3 lần so sánh (so sánh với 5, 3 và 8)' }, { key: 'B', text: '1 lần' }, { key: 'C', text: '5 lần' }, { key: 'D', text: '8 lần' }],
        correctAnswer: 'A',
        explanation: 'X = 8 nằm ở vị trí thứ 3 nên cần 3 bước so sánh.'
      },
      {
        id: 'b14_nb_7',
        category: 'recall',
        questionText: 'Trong trường hợp TỐT NHẤT của thuật toán tìm kiếm tuần tự, ta chỉ cần thực hiện bao nhiêu lần so sánh?',
        options: [{ key: 'A', text: '1 lần so sánh (khi X nằm ngay ở vị trí đầu tiên)' }, { key: 'B', text: '10 lần' }, { key: 'C', text: 'Không cần so sánh nào' }, { key: 'D', text: 'So sánh hết cả danh sách' }],
        correctAnswer: 'A',
        explanation: 'Nếu X đứng đầu danh sách thì chỉ tốn 1 lần so sánh.'
      },
      {
        id: 'b14_nb_8',
        category: 'recall',
        questionText: 'Trong trường hợp XẤU NHẤT đối với danh sách N phần tử, thuật toán tìm kiếm tuần tự phải so sánh tối đa bao nhiêu lần?',
        options: [{ key: 'A', text: 'N lần so sánh' }, { key: 'B', text: '1 lần' }, { key: 'C', text: 'N/2 lần' }, { key: 'D', text: '2N lần' }],
        correctAnswer: 'A',
        explanation: 'Nếu X nằm ở cuối hoặc không có trong danh sách thì phải so sánh đủ N lần.'
      },
      {
        id: 'b14_nb_9',
        category: 'recall',
        questionText: 'Ví dụ nào sau đây thể hiện công việc tìm kiếm tuần tự trong đời sống?',
        options: [{ key: 'A', text: 'Lần lượt tìm tên bạn "An" trong danh sách lớp không xếp thứ tự bằng cách dò từng dòng từ trên xuống' }, { key: 'B', text: 'Lật đôi cuốn từ điển Tiếng Anh' }, { key: 'C', text: 'Sắp xếp sách lên kệ' }, { key: 'D', text: 'Tính tổng tiền đi chợ' }],
        correctAnswer: 'A',
        explanation: 'Dò từng dòng từ trên xuống chính là mô hình tìm kiếm tuần tự.'
      },
      {
        id: 'b14_nb_10',
        category: 'recall',
        questionText: 'Khi so sánh phần tử thứ i với X mà KHÔNG BẰNG NHAU, thuật toán thực hiện thao tác gì tiếp theo?',
        options: [{ key: 'A', text: 'Tăng i lên 1 (chuyển sang phần tử tiếp theo)' }, { key: 'B', text: 'Dừng thuật toán lập tức' }, { key: 'C', text: 'Xóa phần tử đó' }, { key: 'D', text: 'In ra kết quả ngay' }],
        correctAnswer: 'A',
        explanation: 'Nếu chưa khớp thì tăng chỉ số i để xét phần tử kề tiếp.'
      },
      {
        id: 'b14_nb_11',
        category: 'recall',
        questionText: 'Cho danh sách B = [12, 45, 23, 67, 89]. Nếu tìm X = 100 bằng tìm kiếm tuần tự, số lần so sánh sẽ là bao nhiêu?',
        options: [{ key: 'A', text: '5 lần (so sánh hết 5 phần tử rồi kết luận không tìm thấy)' }, { key: 'B', text: '0 lần' }, { key: 'C', text: '1 lần' }, { key: 'D', text: '100 lần' }],
        correctAnswer: 'A',
        explanation: 'Vì 100 không có trong danh sách nên phải duyệt đủ cả 5 phần tử.'
      },
      {
        id: 'b14_nb_12',
        category: 'recall',
        questionText: 'Thuật toán tìm kiếm tuần tự còn được gọi bằng tên tiếng Anh là gì?',
        options: [{ key: 'A', text: 'Sequential Search (hoặc Linear Search)' }, { key: 'B', text: 'Binary Search' }, { key: 'C', text: 'Bubble Sort' }, { key: 'D', text: 'Selection Sort' }],
        correctAnswer: 'A',
        explanation: 'Sequential Search / Linear Search là thuật toán tìm kiếm tuyến tính/tuần tự.'
      },

      // 8 Comprehension
      {
        id: 'b14_th_1',
        category: 'comprehension',
        questionText: 'Nhược điểm chính của thuật toán tìm kiếm tuần tự khi làm việc với danh sách gồm 1 triệu dữ liệu là gì?',
        options: [{ key: 'A', text: 'Tốc độ thực hiện rất chậm vì có thể phải kiểm tra lần lượt tới 1 triệu lần' }, { key: 'B', text: 'Không thể tìm ra kết quả' }, { key: 'C', text: 'Bắt buộc phải sắp xếp danh sách trước' }, { key: 'D', text: 'Làm hỏng dữ liệu' }],
        correctAnswer: 'A',
        explanation: 'Với dữ liệu cực lớn, việc dò tuần tự từ đầu đến cuối rất tốn thời gian.'
      },
      {
        id: 'b14_th_2',
        category: 'comprehension',
        questionText: 'Ưu điểm nổi bật nhất của thuật toán tìm kiếm tuần tự là gì?',
        options: [{ key: 'A', text: 'Đơn giản, dễ hiểu, áp dụng được cho mọi tập dữ liệu chưa cần sắp xếp' }, { key: 'B', text: 'Chạy nhanh nhất trong mọi trường hợp' }, { key: 'C', text: 'Tự động sửa lỗi dữ liệu' }, { key: 'D', text: 'Không tốn bộ nhớ' }],
        correctAnswer: 'A',
        explanation: 'Ưu điểm là tính linh hoạt, áp dụng ngay mà không cần tiền xử lý sắp xếp.'
      },
      {
        id: 'b14_th_3',
        category: 'comprehension',
        questionText: 'Cho danh sách C = [10, 20, 30, 40, 50]. Nếu thực hiện tìm kiếm tuần tự với X = 30 và X = 50, tổng số lần so sánh của cả 2 lượt tìm kiếm là bao nhiêu?',
        options: [{ key: 'A', text: '8 lần (3 lần cho X=30 + 5 lần cho X=50)' }, { key: 'B', text: '5 lần' }, { key: 'C', text: '2 lần' }, { key: 'D', text: '10 lần' }],
        correctAnswer: 'A',
        explanation: 'X=30 đứng ở vị trí 3 (3 lần), X=50 đứng ở vị trí 5 (5 lần). Tổng = 3 + 5 = 8.'
      },
      {
        id: 'b14_th_4',
        category: 'comprehension',
        questionText: 'Nên sử dụng thuật toán tìm kiếm tuần tự trong tình huống nào sau đây?',
        options: [{ key: 'A', text: 'Khi danh sách có số lượng phần tử nhỏ và dữ liệu xáo trộn chưa được sắp xếp' }, { key: 'B', text: 'Khi tìm từ trong cuốn từ điển 100.000 từ' }, { key: 'C', text: 'Khi danh sách đã sắp xếp tuyệt đối' }, { key: 'D', text: 'Khi không có dữ liệu đầu vào' }],
        correctAnswer: 'A',
        explanation: 'Danh sách nhỏ và chưa sắp xếp là môi trường lý tưởng cho tìm kiếm tuần tự.'
      },
      {
        id: 'b14_th_5',
        category: 'comprehension',
        questionText: 'Khi thực hiện tìm kiếm tuần tự tên bạn "Hoàng" trong danh sách, nếu trong danh sách có 2 bạn cùng tên "Hoàng", thuật toán sẽ trả về kết quả nào đầu tiên?',
        options: [{ key: 'A', text: 'Trả về vị trí của bạn "Hoàng" xuất hiện trước (gần đầu danh sách hơn)' }, { key: 'B', text: 'Trả về vị trí bạn Hoàng ở cuối' }, { key: 'C', text: 'Trả về cả 2 cùng lúc' }, { key: 'D', text: 'Báo lỗi' }],
        correctAnswer: 'A',
        explanation: 'Tìm kiếm tuần tự duyệt từ đầu nên gặp bản ghi nào đầu tiên sẽ dừng trả về ngay.'
      },
      {
        id: 'b14_th_6',
        category: 'comprehension',
        questionText: 'Giả sử thuật toán tìm kiếm tuần tự thực hiện trên danh sách N phần tử, giá trị so sánh trung bình là bao nhiêu lần?',
        options: [{ key: 'A', text: 'Khoảng N / 2 lần so sánh' }, { key: 'B', text: 'N lần' }, { key: 'C', text: '1 lần' }, { key: 'D', text: 'N * N lần' }],
        correctAnswer: 'A',
        explanation: 'Trung bình X sẽ nằm ở giữa danh sách nên tốn khoảng N/2 phép so sánh.'
      },
      {
        id: 'b14_th_7',
        category: 'comprehension',
        questionText: 'Nếu viết thuật toán bằng ngôn ngữ tự nhiên, bước so sánh "Nếu i > N" (vượt quá độ dài danh sách) có ý nghĩa gì?',
        options: [{ key: 'A', text: 'Kiểm tra xem đã duyệt hết danh sách chưa để kết luận không tìm thấy X' }, { key: 'B', text: 'Bắt đầu vòng lặp mới' }, { key: 'C', text: 'In ra giá trị i' }, { key: 'D', text: 'Tăng giá trị X' }],
        correctAnswer: 'A',
        explanation: 'i > N chứng tỏ đã duyệt qua toàn bộ N phần tử mà không tìm được X.'
      },
      {
        id: 'b14_th_8',
        category: 'comprehension',
        questionText: 'Nêu sự khác nhau khi tìm thấy X ở vị trí đầu tiên so với vị trí cuối cùng trong danh sách bằng tìm kiếm tuần tự:',
        options: [{ key: 'A', text: 'Tìm thấy ở đầu tốn 1 lần so sánh (nhanh nhất); tìm thấy ở cuối tốn N lần so sánh (chậm nhất)' }, { key: 'B', text: 'Cả hai đều tốn N lần' }, { key: 'C', text: 'Tìm ở cuối nhanh hơn ở đầu' }, { key: 'D', text: 'Không khác nhau' }],
        correctAnswer: 'A',
        explanation: 'Vị trí phần tử quyết định số bước thực hiện trong duyệt tuần tự.'
      },

      // 5 True/False
      {
        id: 'b14_ds_1',
        category: 'true_false',
        questionText: 'Đặc điểm thuật toán tìm kiếm tuần tự:',
        statements: [
          { id: 'b14_ds_1_a', text: 'a) So sánh lần lượt từng phần tử từ đầu đến cuối danh sách.', isTrue: true },
          { id: 'b14_ds_1_b', text: 'b) Bắt buộc danh sách phải được sắp xếp trước.', isTrue: false },
          { id: 'b14_ds_1_c', text: 'c) Thuật toán dừng ngay khi tìm thấy X.', isTrue: true },
          { id: 'b14_ds_1_d', text: 'd) Áp dụng được cho cả danh sách chưa sắp xếp.', isTrue: true }
        ],
        explanation: 'Tìm kiếm tuần tự không yêu cầu danh sách phải sắp xếp trước.'
      },
      {
        id: 'b14_ds_2',
        category: 'true_false',
        questionText: 'Số lần so sánh trong thuật toán tìm kiếm tuần tự:',
        statements: [
          { id: 'b14_ds_2_a', text: 'a) Trường hợp tốt nhất là 1 lần so sánh.', isTrue: true },
          { id: 'b14_ds_2_b', text: 'b) Trường hợp xấu nhất với danh sách N phần tử là N lần so sánh.', isTrue: true },
          { id: 'b14_ds_2_c', text: 'c) Nếu X không có trong danh sách, thuật toán so sánh đúng N lần.', isTrue: true },
          { id: 'b14_ds_2_d', text: 'd) Số lần so sánh luôn cố định không phụ thuộc vào vị trí của X.', isTrue: false }
        ],
        explanation: 'Số lần so sánh biến đổi tùy thuộc vào vị trí X đứng ở đâu trong dãy.'
      },
      {
        id: 'b14_ds_3',
        category: 'true_false',
        questionText: 'Input và Output của bài toán tìm kiếm tuần tự:',
        statements: [
          { id: 'b14_ds_3_a', text: 'a) Input gồm danh sách dữ liệu và giá trị X cần tìm.', isTrue: true },
          { id: 'b14_ds_3_b', text: 'b) Output là vị trí của X nếu tìm thấy.', isTrue: true },
          { id: 'b14_ds_3_c', text: 'c) Output báo không tìm thấy nếu đã duyệt hết danh sách.', isTrue: true },
          { id: 'b14_ds_3_d', text: 'd) Output luôn là danh sách đã được sắp xếp tăng dần.', isTrue: false }
        ],
        explanation: 'Output bài toán tìm kiếm là kết quả tìm thấy/vị trí, không phải danh sách sắp xếp.'
      },
      {
        id: 'b14_ds_4',
        category: 'true_false',
        questionText: 'Ứng dụng thực tế của tìm kiếm tuần tự:',
        statements: [
          { id: 'b14_ds_4_a', text: 'a) Tìm chìa khóa trong chùm chìa khóa chưa đánh số.', isTrue: true },
          { id: 'b14_ds_4_b', text: 'b) Tìm tên học sinh trong danh sách chưa xếp thứ tự A-Z.', isTrue: true },
          { id: 'b14_ds_4_c', text: 'c) Dùng khi tập dữ liệu nhỏ gọn.', isTrue: true },
          { id: 'b14_ds_4_d', text: 'd) Là thuật toán tối ưu nhất cho cơ sở dữ liệu hàng triệu kỷ lục.', isTrue: false }
        ],
        explanation: 'Cơ sở dữ liệu lớn dùng chỉ mục (Index) hoặc tìm kiếm nhị phân/cây tìm kiếm, không dùng tuần tự.'
      },
      {
        id: 'b14_ds_5',
        category: 'true_false',
        questionText: 'Các bước triển khai thuật toán:',
        statements: [
          { id: 'b14_ds_5_a', text: 'a) Khởi tạo chỉ số vị trí i = 1.', isTrue: true },
          { id: 'b14_ds_5_b', text: 'b) Nếu A[i] = X thì thông báo vị trí i và dừng.', isTrue: true },
          { id: 'b14_ds_5_c', text: 'c) Nếu A[i] khác X thì tăng i = i + 1.', isTrue: true },
          { id: 'b14_ds_5_d', text: 'd) Nếu i vượt quá số phần tử N thì quay lại kiểm tra từ i = 1 liên tục không dừng.', isTrue: false }
        ],
        explanation: 'Khi i > N phải kết luận không tìm thấy và dừng lại, tránh vòng lặp vô tận.'
      }
    ]
  },
  {
    id: 'lesson_15',
    number: 15,
    title: 'Bài 15: Thuật toán tìm kiếm nhị phân (Binary Search)',
    themeId: 'theme_5',
    themeTitle: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính',
    summary: [
      {
        title: '1. Điều kiện tiên quyết và Nguyên lý Tìm kiếm Nhị phân',
        content: [
          '⚠️ ĐIỀU KIỆN TIÊN QUYẾT: Danh sách BẮT BUỘC ĐÃ ĐƯỢC SẮP XẾP theo một thứ tự xác định (ví dụ: tăng dần từ nhỏ đến lớn).',
          'Nguyên lý chia đôi: Lấy vị trí ở GIỮA danh sách ra so sánh với X. Dựa vào kết quả để loại bỏ ngay một nửa danh sách không chứa X.'
        ],
        illustrationType: 'binary_search'
      },
      {
        title: '2. Các bước thực hiện của thuật toán (Sắp xếp tăng dần)',
        content: [
          'Bước 1: Xác định phạm vi tìm kiếm (Đầu = 1, Cuối = N).',
          'Bước 2: Tính vị trí Giữa = (Đầu + Cuối) / 2 (lấy phần nguyên).',
          'Bước 3: So sánh giá trị ở Giữa với X:',
          '  - Nếu BẰNG X: Thông báo "Tìm thấy ở vị trí Giữa" và KẾT THÚC.',
          '  - Nếu X NHO NHO HƠN Giữa: Thu hẹp phạm vi tìm kiếm sang NỬA TRƯỚC (Cuối = Giữa - 1).',
          '  - Nếu X LỚN HƠN Giữa: Thu hẹp phạm vi tìm kiếm sang NỬA SAU (Đầu = Giữa + 1).',
          'Bước 4: Lặp lại từ Bước 2 cho đến khi tìm thấy X hoặc khi Đầu > Cuối (Kết luận "Không tìm thấy" và KẾT THÚC).'
        ]
      },
      {
        title: '3. Ưu điểm vượt trội',
        content: [
          'Tốc độ cực nhanh: Mỗi lần so sánh loại bỏ được 50% số phần tử remaining.',
          'Hiệu quả cao: Danh sách 1 triệu phần tử chỉ tốn tối đa khoảng 20 lần so sánh (so với 1 triệu lần của tìm kiếm tuần tự).'
        ]
      }
    ],
    questions: [
      // 12 Recall
      {
        id: 'b15_nb_1',
        category: 'recall',
        questionText: 'ĐIỀU KIỆN TIÊN QUYẾT để áp dụng thuật toán tìm kiếm nhị phân là gì?',
        options: [{ key: 'A', text: 'Danh sách phải được SẮP XẾP theo một thứ tự nhất định (tăng dần hoặc giảm dần)' }, { key: 'B', text: 'Danh sách phải chứa toàn số chẵn' }, { key: 'C', text: 'Danh sách phải có số lượng phần tử là số lẻ' }, { key: 'D', text: 'Không cần điều kiện gì' }],
        correctAnswer: 'A',
        explanation: 'Tìm kiếm nhị phân chỉ hoạt động đúng khi danh sách đã qua sắp xếp.'
      },
      {
        id: 'b15_nb_2',
        category: 'recall',
        questionText: 'Trong thuật toán tìm kiếm nhị phân, ở mỗi bước ta thực hiện so sánh giá trị cần tìm X với phần tử nào?',
        options: [{ key: 'A', text: 'Phần tử nằm ở GIỮA vùng tìm kiếm' }, { key: 'B', text: 'Phần tử đầu tiên' }, { key: 'C', text: 'Phần tử cuối cùng' }, { key: 'D', text: 'Phần tử ngẫu nhiên' }],
        correctAnswer: 'A',
        explanation: 'Thuật toán chia đôi danh sách bằng cách luôn chọn phần tử ở Giữa.'
      },
      {
        id: 'b15_nb_3',
        category: 'recall',
        questionText: 'Nếu phần tử ở GIỮA lớn hơn giá trị X cần tìm (trong dãy sắp xếp tăng dần), bước tiếp theo ta tìm kiếm ở nửa nào?',
        options: [{ key: 'A', text: 'Nửa TRƯỚC (bên trái) của phần tử ở giữa' }, { key: 'B', text: 'Nửa SAU (bên phải)' }, { key: 'C', text: 'Dừng thuật toán lập tức' }, { key: 'D', text: 'Tìm kiếm trên toàn bộ danh sách lại từ đầu' }],
        correctAnswer: 'A',
        explanation: 'Vì dãy tăng dần, X nhỏ hơn Giữa nên X chỉ có thể nằm ở nửa bên trái.'
      },
      {
        id: 'b15_nb_4',
        category: 'recall',
        questionText: 'Nếu phần tử ở GIỮA nhỏ hơn giá trị X cần tìm (trong dãy sắp xếp tăng dần), bước tiếp theo ta tìm kiếm ở nửa nào?',
        options: [{ key: 'A', text: 'Nửa SAU (bên phải) của phần tử ở giữa' }, { key: 'B', text: 'Nửa TRƯỚC (bên trái)' }, { key: 'C', text: 'Kết luận không tìm thấy' }, { key: 'D', text: 'Xóa phần tử ở giữa' }],
        correctAnswer: 'A',
        explanation: 'X lớn hơn Giữa nên X chỉ có thể xuất hiện ở nửa bên phải.'
      },
      {
        id: 'b15_nb_5',
        category: 'recall',
        questionText: 'Khi nào thuật toán tìm kiếm nhị phân báo KẾT LUẬN không tìm thấy giá trị X?',
        options: [{ key: 'A', text: 'Khi phạm vi tìm kiếm bị rỗng (chỉ số Đầu lớn hơn chỉ số Cuối)' }, { key: 'B', text: 'Ngay ở bước so sánh đầu tiên' }, { key: 'C', text: 'Sau khi so sánh 100 lần' }, { key: 'D', text: 'Khi máy tính hết pin' }],
        correctAnswer: 'A',
        explanation: 'Khi Đầu > Cuối nghĩa là không còn phần tử nào trong phạm vi nghi vấn.'
      },
      {
        id: 'b15_nb_6',
        category: 'recall',
        questionText: 'Cho dãy số đã sắp xếp: [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]. Phần tử ở GIỮA trong bước đầu tiên là số nào?',
        options: [{ key: 'A', text: 'Số 16 (hoặc 23 tùy công thức làm tròn vị trí 5)' }, { key: 'B', text: 'Số 2' }, { key: 'C', text: 'Số 91' }, { key: 'D', text: 'Số 56' }],
        correctAnswer: 'A',
        explanation: 'Dãy có 10 phần tử, vị trí Giữa = (1+10)/2 = 5 -> Phần tử thứ 5 là 16.'
      },
      {
        id: 'b15_nb_7',
        category: 'recall',
        questionText: 'Mỗi lần so sánh trong tìm kiếm nhị phân giúp thu hẹp phạm vi tìm kiếm đi bao nhiêu phần?',
        options: [{ key: 'A', text: 'Giảm đi một nửa (50% số phần tử còn lại)' }, { key: 'B', text: 'Giảm đi 1 phần tử' }, { key: 'C', text: 'Giảm đi 10%' }, { key: 'D', text: 'Không giảm' }],
        correctAnswer: 'A',
        explanation: 'Tìm kiếm nhị phân loại bỏ đúng 1/2 danh sách sau mỗi phép so sánh.'
      },
      {
        id: 'b15_nb_8',
        category: 'recall',
        questionText: 'Công việc đời sống nào áp dụng nguyên lý của Tìm kiếm nhị phân?',
        options: [{ key: 'A', text: 'Tra một từ trong cuốn từ điển Tiếng Anh bằng cách lật đôi cuốn sách' }, { key: 'B', text: 'Đếm số lượng tiền lẻ trong túi' }, { key: 'C', text: 'Rửa từng chiếc bát trong chậu' }, { key: 'D', text: 'Chép phạt bài học' }],
        correctAnswer: 'A',
        explanation: 'Lật đôi cuốn từ điển đã xếp A-Z chính là nguyên lý nhị phân.'
      },
      {
        id: 'b15_nb_9',
        category: 'recall',
        questionText: 'Cho danh sách A = [1, 3, 5, 7, 9]. Để tìm X = 5, ngay bước so sánh đầu tiên vị trí Giữa = 3 (giá trị 5). Số lần so sánh tốn là bao nhiêu?',
        options: [{ key: 'A', text: '1 lần so sánh' }, { key: 'B', text: '3 lần' }, { key: 'C', text: '5 lần' }, { key: 'D', text: '2 lần' }],
        correctAnswer: 'A',
        explanation: 'Vị trí giữa trùng đúng X=5 nên tìm thấy ngay ở bước 1.'
      },
      {
        id: 'b15_nb_10',
        category: 'recall',
        questionText: 'Nếu danh sách chưa được sắp xếp mà dùng tìm kiếm nhị phân thì kết quả sẽ ra sao?',
        options: [{ key: 'A', text: 'Kết quả tìm kiếm có thể bị SAI LỆCH hoàn toàn' }, { key: 'B', text: 'Vẫn đúng 100%' }, { key: 'C', text: 'Máy tính tự sắp xếp hộ' }, { key: 'D', text: 'Không ảnh hưởng' }],
        correctAnswer: 'A',
        explanation: 'Chưa sắp xếp mà chia đôi loại bỏ 1/2 danh sách sẽ vô tình bỏ mất X.'
      },
      {
        id: 'b15_nb_11',
        category: 'recall',
        questionText: 'Tên tiếng Anh của thuật toán tìm kiếm nhị phân là gì?',
        options: [{ key: 'A', text: 'Binary Search' }, { key: 'B', text: 'Sequential Search' }, { key: 'C', text: 'Bubble Sort' }, { key: 'D', text: 'Quick Sort' }],
        correctAnswer: 'A',
        explanation: 'Binary Search có nghĩa là Tìm kiếm nhị phân (chia đôi).'
      },
      {
        id: 'b15_nb_12',
        category: 'recall',
        questionText: 'Với danh sách gồm 16 phần tử, số lần so sánh TỐI ĐA của tìm kiếm nhị phân là bao nhiêu?',
        options: [{ key: 'A', text: '4 đến 5 lần so sánh' }, { key: 'B', text: '16 lần' }, { key: 'C', text: '32 lần' }, { key: 'D', text: '8 lần' }],
        correctAnswer: 'A',
        explanation: '16 -> 8 -> 4 -> 2 -> 1 (tối đa 4-5 bước so sánh).'
      },

      // 8 Comprehension
      {
        id: 'b15_th_1',
        category: 'comprehension',
        questionText: 'Tại sao tìm kiếm nhị phân lại nhanh vượt trội hơn nhiều so với tìm kiếm tuần tự trên các cơ sở dữ liệu khổng lồ?',
        options: [{ key: 'A', text: 'Vì mỗi bước nhị phân loại bỏ ngay 50% dữ liệu, còn tuần tự chỉ loại bỏ được 1 phần tử' }, { key: 'B', text: 'Vì nhị phân dùng siêu máy tính' }, { key: 'C', text: 'Vì nhị phân không cần so sánh' }, { key: 'D', text: 'Vì tuần tự bị lỗi' }],
        correctAnswer: 'A',
        explanation: 'Tốc độ giảm theo cấp số nhân 1/2 giúp nhị phân cực kỳ tối ưu.'
      },
      {
        id: 'b15_th_2',
        category: 'comprehension',
        questionText: 'Cho dãy A = [10, 20, 30, 40, 50, 60, 70]. Tìm X = 60 theo nhị phân. Các phần tử ở GIỮA lần lượt được chọn so sánh là gì?',
        options: [{ key: 'A', text: 'Lần 1: Giữa = 40. Do 60 > 40 -> Nửa sau [50, 60, 70]. Lần 2: Giữa = 60 (Tìm thấy)' }, { key: 'B', text: '10, 20, 30' }, { key: 'C', text: '70, 60' }, { key: 'D', text: '40, 50' }],
        correctAnswer: 'A',
        explanation: 'B1: Giữa=40 (60>40). B2: Xét [50,60,70] Giữa=60 (khớp X).'
      },
      {
        id: 'b15_th_3',
        category: 'comprehension',
        questionText: 'Trò chơi "Đoán số từ 1 đến 100": Bạn A nghĩ số 68. Bạn B áp dụng thuật toán tìm kiếm nhị phân sẽ hỏi số nào ĐẦU TIÊN?',
        options: [{ key: 'A', text: 'Số 50 (vì 50 nằm ở chính giữa từ 1 đến 100)' }, { key: 'B', text: 'Số 1' }, { key: 'C', text: 'Số 68' }, { key: 'D', text: 'Số 100' }],
        correctAnswer: 'A',
        explanation: 'Chiến thuật nhị phân luôn chọn số ở giữa khoảng (1+100)/2 = 50.'
      },
      {
        id: 'b15_th_4',
        category: 'comprehension',
        questionText: 'Trong trò chơi đoán số từ 1 đến 100 ở câu trên, sau khi B hỏi "50" và A đáp "SỐ TÔI NGHĨ LỚN HƠN 50", B sẽ thu hẹp khoảng đoán thành bao nhiêu?',
        options: [{ key: 'A', text: 'Khoảng từ 51 đến 100' }, { key: 'B', text: 'Khoảng từ 1 đến 49' }, { key: 'C', text: 'Khoảng từ 1 đến 100' }, { key: 'D', text: 'Khoảng từ 50 đến 60' }],
        correctAnswer: 'A',
        explanation: 'Lớn hơn 50 nên thu hẹp phạm vi sang nửa sau: [51..100].'
      },
      {
        id: 'b15_th_5',
        category: 'comprehension',
        questionText: 'Nếu một danh sách có 1.000 phần tử ĐÃ SẮP XẾP, số lần so sánh tối đa của tìm kiếm nhị phân chỉ khoảng 10 lần. Con số này của tìm kiếm tuần tự là bao nhiêu?',
        options: [{ key: 'A', text: '1.000 lần so sánh' }, { key: 'B', text: '10 lần' }, { key: 'C', text: '100 lần' }, { key: 'D', text: '500 lần' }],
        correctAnswer: 'A',
        explanation: 'Tuần tự trường hợp xấu nhất phải so sánh đủ 1.000 phần tử.'
      },
      {
        id: 'b15_th_6',
        category: 'comprehension',
        questionText: 'Nêu sự chi phí đánh đổi giữa Tìm kiếm tuần tự và Tìm kiếm nhị phân:',
        options: [{ key: 'A', text: 'Nhị phân tìm kiếm siêu nhanh nhưng phải tốn chi phí Sắp xếp dữ liệu trước; Tuần tự không cần sắp xếp nhưng tìm kiếm chậm' }, { key: 'B', text: 'Nhị phân tốn nhiều giấy hơn' }, { key: 'C', text: 'Tuần tự bắt buộc dùng máy tính xách tay' }, { key: 'D', text: 'Không có sự đánh đổi' }],
        correctAnswer: 'A',
        explanation: 'Muốn dùng nhị phân phải đầu tư chi phí sắp xếp dữ liệu ban đầu.'
      },
      {
        id: 'b15_th_7',
        category: 'comprehension',
        questionText: 'Khi nào nên sử dụng Tìm kiếm nhị phân thay vì Tìm kiếm tuần tự?',
        options: [{ key: 'A', text: 'Khi tập dữ liệu lớn và đã được sắp xếp cố định (hoặc được tìm kiếm nhiều lần)' }, { key: 'B', text: 'Khi tập dữ liệu chỉ có 2 phần tử' }, { key: 'C', text: 'Khi dữ liệu thường xuyên thay đổi xáo trộn liên tục' }, { key: 'D', text: 'Khi không quan tâm đến thời gian' }],
        correctAnswer: 'A',
        explanation: 'Dữ liệu lớn đã sắp xếp đem lại hiệu quả khổng lồ cho thuật toán nhị phân.'
      },
      {
        id: 'b15_th_8',
        category: 'comprehension',
        questionText: 'Công thức tính chỉ số Giữa (Mid) từ chỉ số Đầu (Left) và Cuối (Right) trong lập trình là gì?',
        options: [{ key: 'A', text: 'Mid = (Left + Right) / 2 (lấy phần nguyên)' }, { key: 'B', text: 'Mid = Left + Right' }, { key: 'C', text: 'Mid = Right - Left' }, { key: 'D', text: 'Mid = Left * Right' }],
        correctAnswer: 'A',
        explanation: 'Trung bình cộng chỉ số vị trí biên ra điểm giữa.'
      },

      // 5 True/False
      {
        id: 'b15_ds_1',
        category: 'true_false',
        questionText: 'Điều kiện và nguyên lý Tìm kiếm Nhị phân:',
        statements: [
          { id: 'b15_ds_1_a', text: 'a) Yêu cầu danh sách phải được sắp xếp trước.', isTrue: true },
          { id: 'b15_ds_1_b', text: 'b) Luôn so sánh giá trị X với phần tử ở Giữa.', isTrue: true },
          { id: 'b15_ds_1_c', text: 'c) Mỗi bước loại bỏ 50% dữ liệu nghi vấn.', isTrue: true },
          { id: 'b15_ds_1_d', text: 'd) Áp dụng được cho danh sách chưa sắp xếp mà vẫn chính xác 100%.', isTrue: false }
        ],
        explanation: 'Danh sách chưa sắp xếp dùng nhị phân sẽ bị sai sót.'
      },
      {
        id: 'b15_ds_2',
        category: 'true_false',
        questionText: 'Diễn tiến các bước thu hẹp phạm vi (Dãy sắp xếp tăng dần):',
        statements: [
          { id: 'b15_ds_2_a', text: 'a) Nếu X < Giữa -> Cuối = Giữa - 1 (xét nửa trước).', isTrue: true },
          { id: 'b15_ds_2_b', text: 'b) Nếu X > Giữa -> Đầu = Giữa + 1 (xét nửa sau).', isTrue: true },
          { id: 'b15_ds_2_c', text: 'c) Nếu X = Giữa -> Tìm thấy và dừng.', isTrue: true },
          { id: 'b15_ds_2_d', text: 'd) Nếu Đầu > Cuối -> Tiếp tục lặp vô tận.', isTrue: false }
        ],
        explanation: 'Đầu > Cuối nghĩa là hết phạm vi nghi vấn, phải kết luận không tìm thấy và dừng.'
      },
      {
        id: 'b15_ds_3',
        category: 'true_false',
        questionText: 'So sánh tốc độ Nhị phân và Tuần tự:',
        statements: [
          { id: 'b15_ds_3_a', text: 'a) Với 1 triệu phần tử, Nhị phân tốn tối đa khoảng 20 phép so sánh.', isTrue: true },
          { id: 'b15_ds_3_b', text: 'b) Với 1 triệu phần tử, Tuần tự có thể tốn 1 triệu phép so sánh.', isTrue: true },
          { id: 'b15_ds_3_c', text: 'c) Nhị phân nhanh hơn Tuần tự rất nhiều trên tập dữ liệu lớn.', isTrue: true },
          { id: 'b15_ds_3_d', text: 'd) Tuần tự luôn nhanh hơn Nhị phân trong mọi trường hợp.', isTrue: false }
        ],
        explanation: 'Nhị phân vượt trội tốc độ gấp hàng ngàn lần so với tuần tự trên dữ liệu lớn.'
      },
      {
        id: 'b15_ds_4',
        category: 'true_false',
        questionText: 'Ví dụ minh họa thực tế:',
        statements: [
          { id: 'b15_ds_4_a', text: 'a) Tra từ điển sách giấy là mô hình tìm kiếm nhị phân.', isTrue: true },
          { id: 'b15_ds_4_b', text: 'b) Lật danh bạ điện thoại xếp theo tên A-Z là mô hình nhị phân.', isTrue: true },
          { id: 'b15_ds_4_c', text: 'c) Đoán số trong khoảng [1..100] bằng chọn số giữa là nhị phân.', isTrue: true },
          { id: 'b15_ds_4_d', text: 'd) Tìm tất cả các lá thư rác trong hòm thư chưa phân loại là nhị phân.', isTrue: false }
        ],
        explanation: 'Hòm thư chưa phân loại phải duyệt tuần tự từng thư.'
      },
      {
        id: 'b15_ds_5',
        category: 'true_false',
        questionText: 'Tính dừng và hiệu năng thuật toán nhị phân:',
        statements: [
          { id: 'b15_ds_5_a', text: 'a) Thuật toán luôn dừng sau một số bước hữu hạn.', isTrue: true },
          { id: 'b15_ds_5_b', text: 'b) Số bước tối đa tỷ lệ thuận với log2(N).', isTrue: true },
          { id: 'b15_ds_5_c', text: 'c) Trường hợp tốt nhất tốn 1 lần so sánh.', isTrue: true },
          { id: 'b15_ds_5_d', text: 'd) Trường hợp xấu nhất tốn N*N lần so sánh.', isTrue: false }
        ],
        explanation: 'Trường hợp xấu nhất nhị phân chỉ tốn khoảng log2(N) lần, không phải N*N.'
      }
    ]
  },
  {
    id: 'lesson_16',
    number: 16,
    title: 'Bài 16: Thuật toán sắp xếp (Sorting Algorithms)',
    themeId: 'theme_5',
    themeTitle: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính',
    summary: [
      {
        title: '1. Khái niệm và Vai trò của Sắp xếp',
        content: [
          'Khái niệm: Sắp xếp là quá trình đổi chỗ các phần tử trong danh sách để chúng đạt được thứ tự mong muốn (Tăng dần hoặc Giảm dần).',
          'Ý nghĩa: Sắp xếp dữ liệu giúp việc tìm kiếm, tra cứu và quản lý thông tin trở nên cực kỳ nhanh chóng và hiệu quả.'
        ],
        illustrationType: 'sorting_algorithms'
      },
      {
        title: '2. Thuật toán Sắp xếp Nổi bọt (Bubble Sort)',
        content: [
          'Nguyên lý: Lần lượt so sánh các cặp phần tử LIỀN KỀ. Nếu chúng sai thứ tự thì ĐỔI CHỖ cho nhau.',
          'Quá trình: Sau mỗi vòng duyệt, phần tử lớn nhất sẽ "nổi" về vị trí cuối danh sách (tương tự bọt khí nổi lên mặt nước).'
        ]
      },
      {
        title: '3. Thuật toán Sắp xếp Chọn (Selection Sort)',
        content: [
          'Nguyên lý: Tìm phần tử NHỎ NHẤT trong vùng dữ liệu chưa sắp xếp, sau đó ĐỔI CHỖ phần tử đó về vị trí đầu tiên của vùng chưa sắp xếp.',
          'Quá trình: Xây dựng dần từng phần tử chuẩn thứ tự ở đầu danh sách cho đến khi hoàn tất.'
        ]
      }
    ],
    questions: [
      // 12 Recall
      {
        id: 'b16_nb_1',
        category: 'recall',
        questionText: 'Mục đích chính của bài toán SẮP XẾP trong tin học là gì?',
        options: [{ key: 'A', text: 'Sắp đặt các phần tử trong danh sách theo một thứ tự tăng dần hoặc giảm dần xác định' }, { key: 'B', text: 'Xóa bớt các phần tử trùng lặp' }, { key: 'C', text: 'Tính trung bình cộng các số' }, { key: 'D', text: 'Đổi phông chữ cho danh sách' }],
        correctAnswer: 'A',
        explanation: 'Sắp xếp giúp dữ liệu đạt trật tự tăng/giảm quy chuẩn.'
      },
      {
        id: 'b16_nb_2',
        category: 'recall',
        questionText: 'Thuật toán Sắp xếp Nổi bọt (Bubble Sort) so sánh và đổi chỗ các phần tử như thế nào?',
        options: [{ key: 'A', text: 'So sánh cặp phần tử LIỀN KỀ nhau và đổi chỗ nếu chúng sai thứ tự' }, { key: 'B', text: 'So sánh phần tử đầu tiên với phần tử cuối cùng' }, { key: 'C', text: 'Đổi chỗ hai phần tử ngẫu nhiên' }, { key: 'D', text: 'Không đổi chỗ phần tử nào' }],
        correctAnswer: 'A',
        explanation: 'Bubble Sort làm việc trên các cặp phần tử kề nhau.'
      },
      {
        id: 'b16_nb_3',
        category: 'recall',
        questionText: 'Trong thuật toán Sắp xếp Nổi bọt (tăng dần), sau lượt duyệt thứ nhất, phần tử nào chắc chắn sẽ dời về ĐÚNG VỊ TRÍ CỦA NÓ ở cuối dãy?',
        options: [{ key: 'A', text: 'Phần tử LỚN NHẤT trong toàn bộ danh sách' }, { key: 'B', text: 'Phần tử nhỏ nhất' }, { key: 'C', text: 'Phần tử ở giữa' }, { key: 'D', text: 'Số 0' }],
        correctAnswer: 'A',
        explanation: 'Phần tử lớn nhất nổi dần về vị trí cuối cùng sau lượt duyệt thứ nhất.'
      },
      {
        id: 'b16_nb_4',
        category: 'recall',
        questionText: 'Thuật toán Sắp xếp Chọn (Selection Sort) hoạt động theo nguyên lý nào?',
        options: [{ key: 'A', text: 'Tìm phần tử NHỎ NHẤT trong phần chưa sắp xếp rồi đổi chỗ về đầu vùng chưa sắp xếp' }, { key: 'B', text: 'So sánh cặp phần tử kề nhau' }, { key: 'C', text: 'Chia đôi danh sách' }, { key: 'D', text: 'Xóa phần tử nhỏ nhất' }],
        correctAnswer: 'A',
        explanation: 'Selection Sort chọn phần tử cực trị (min) đưa về đầu vùng.'
      },
      {
        id: 'b16_nb_5',
        category: 'recall',
        questionText: 'Ý nghĩa của tên gọi "Nổi bọt" (Bubble Sort) xuất phát từ đâu?',
        options: [{ key: 'A', text: 'Do các phần tử lớn/nhỏ dần di chuyển "nổi" về phía cuối danh sách giống như bọt khí nổi lên' }, { key: 'B', text: 'Do màn hình máy tính có bọt xà phòng' }, { key: 'C', text: 'Do thuật toán làm máy tính bị nóng' }, { key: 'D', text: 'Do người tạo ra thích uống nước ngọt' }],
        correctAnswer: 'A',
        explanation: 'Sự di chuyển từng bước của phần tử lớn tương tự bọt khí nổi lên mặt nước.'
      },
      {
        id: 'b16_nb_6',
        category: 'recall',
        questionText: 'Cho dãy A = [5, 1, 4, 2]. Nếu sắp xếp tăng dần, kết quả Output mong muốn là gì?',
        options: [{ key: 'A', text: '[1, 2, 4, 5]' }, { key: 'B', text: '[5, 4, 2, 1]' }, { key: 'C', text: '[1, 5, 2, 4]' }, { key: 'D', text: '[2, 1, 4, 5]' }],
        correctAnswer: 'A',
        explanation: 'Tăng dần nghĩa là con số sau lớn hơn hoặc bằng con số trước.'
      },
      {
        id: 'b16_nb_7',
        category: 'recall',
        questionText: 'Nếu hai phần tử liền kề ĐÃ ĐÚNG THỨ TỰ (ví dụ 3 và 7 khi xếp tăng dần), thuật toán Bubble Sort sẽ làm gì?',
        options: [{ key: 'A', text: 'GIỮ NGUYÊN vị trí, không đổi chỗ' }, { key: 'B', text: 'Vẫn đổi chỗ cho nhau' }, { key: 'C', text: 'Xóa hai số đó' }, { key: 'D', text: 'Dừng thuật toán' }],
        correctAnswer: 'A',
        explanation: 'Đã đúng thứ tự thì giữ nguyên, tiếp tục kiểm tra cặp kề sau.'
      },
      {
        id: 'b16_nb_8',
        category: 'recall',
        questionText: 'Để sắp xếp danh sách N phần tử bằng thuật toán Sắp xếp chọn, ta cần thực hiện tối đa bao nhiêu lượt chọn?',
        options: [{ key: 'A', text: 'N - 1 lượt' }, { key: 'B', text: '1 lượt' }, { key: 'C', text: 'N * N lượt' }, { key: 'D', text: '2N lượt' }],
        correctAnswer: 'A',
        explanation: 'Khi xếp chuẩn được N-1 phần tử thì phần tử cuối tự động đúng vị trí.'
      },
      {
        id: 'b16_nb_9',
        category: 'recall',
        questionText: 'Công việc đời sống nào minh họa thuật toán Sắp xếp Chọn?',
        options: [{ key: 'A', text: 'Chọn người thấp nhất trong hàng đứng vào vị trí thứ nhất, rồi chọn người thấp nhất còn lại đứng thứ hai...' }, { key: 'B', text: 'Chạy việt dã' }, { key: 'C', text: 'Chia bài tây' }, { key: 'D', text: 'Đọc báo' }],
        correctAnswer: 'A',
        explanation: 'Lần lượt chọn người thấp nhất xếp về đầu hàng chính là Selection Sort.'
      },
      {
        id: 'b16_nb_10',
        category: 'recall',
        questionText: 'Đâu là thuật toán sắp xếp thuộc chương trình Tin học lớp 7?',
        options: [{ key: 'A', text: 'Sắp xếp nổi bọt (Bubble Sort) và Sắp xếp chọn (Selection Sort)' }, { key: 'B', text: 'Quick Sort' }, { key: 'C', text: 'Merge Sort' }, { key: 'D', text: 'Heap Sort' }],
        correctAnswer: 'A',
        explanation: 'Bubble Sort và Selection Sort là 2 thuật toán mô phỏng nền tảng lớp 7.'
      },
      {
        id: 'b16_nb_11',
        category: 'recall',
        questionText: 'Khi sắp xếp danh sách tên học sinh theo thứ tự GIẢM DẦN theo bảng chữ cái, tên nào sau đây sẽ đứng ĐẦU DANH SÁCH?',
        options: [{ key: 'A', text: 'Vũ' }, { key: 'B', text: 'An' }, { key: 'C', text: 'Bình' }, { key: 'D', text: 'Cường' }],
        correctAnswer: 'A',
        explanation: 'Giảm dần thì chữ V đứng trước chữ C, B, A.'
      },
      {
        id: 'b16_nb_12',
        category: 'recall',
        questionText: 'Tên tiếng Anh của thuật toán Sắp xếp chọn là gì?',
        options: [{ key: 'A', text: 'Selection Sort' }, { key: 'B', text: 'Bubble Sort' }, { key: 'C', text: 'Insertion Sort' }, { key: 'D', text: 'Binary Sort' }],
        correctAnswer: 'A',
        explanation: 'Selection Sort là thuật toán sắp xếp chọn.'
      },

      // 8 Comprehension
      {
        id: 'b16_th_1',
        category: 'comprehension',
        questionText: 'Cho dãy số A = [4, 2, 1, 3]. Sau lượt duyệt ĐẦU TIÊN của thuật toán Bubble Sort (sắp xếp tăng dần), dãy A trở thành:',
        options: [{ key: 'A', text: '[2, 1, 3, 4] (số 4 nổi về cuối)' }, { key: 'B', text: '[1, 2, 3, 4]' }, { key: 'C', text: '[4, 3, 2, 1]' }, { key: 'D', text: '[2, 4, 1, 3]' }],
        correctAnswer: 'A',
        explanation: 'Cặp (4,2)->(2,4); Cặp (4,1)->(1,4); Cặp (4,3)->(3,4). Dãy thành [2,1,3,4].'
      },
      {
        id: 'b16_th_2',
        category: 'comprehension',
        questionText: 'Cho dãy số B = [5, 2, 4, 1]. Sau lượt chọn ĐẦU TIÊN của thuật toán Selection Sort (sắp xếp tăng dần), dãy B trở thành:',
        options: [{ key: 'A', text: '[1, 2, 4, 5] (tìm thấy 1 nhỏ nhất, đổi chỗ 1 và 5)' }, { key: 'B', text: '[2, 5, 4, 1]' }, { key: 'C', text: '[5, 4, 2, 1]' }, { key: 'D', text: '[1, 5, 4, 2]' }],
        correctAnswer: 'A',
        explanation: 'Nhỏ nhất là 1 ở vị trí 4. Đổi chỗ B[1]=5 với B[4]=1 -> [1, 2, 4, 5].'
      },
      {
        id: 'b16_th_3',
        category: 'comprehension',
        questionText: 'Sắp xếp dữ liệu mang lại lợi ích to lớn gì cho các bài toán khác trong tin học?',
        options: [{ key: 'A', text: 'Giúp bài toán TÌM KIẾM thực hiện được bằng thuật toán Nhị phân siêu nhanh' }, { key: 'B', text: 'Giúp máy tính không bị đầy ổ cứng' }, { key: 'C', text: 'Giúp tiết kiệm điện năng' }, { key: 'D', text: 'Giúp xóa hết dữ liệu lỗi' }],
        correctAnswer: 'A',
        explanation: 'Sắp xếp là tiền đề bắt buộc để chạy Tìm kiếm Nhị phân.'
      },
      {
        id: 'b16_th_4',
        category: 'comprehension',
        questionText: 'Sự khác biệt về chiến lược làm việc giữa Bubble Sort và Selection Sort là gì?',
        options: [{ key: 'A', text: 'Bubble Sort đổi chỗ nhiều lần các cặp kề nhau; Selection Sort tìm giá trị nhỏ nhất rồi đổi chỗ đúng 1 lần mỗi lượt' }, { key: 'B', text: 'Bubble Sort chỉ dùng cho số; Selection Sort dùng cho chữ' }, { key: 'C', text: 'Bubble Sort chạy nhị phân; Selection Sort chạy tuần tự' }, { key: 'D', text: 'Không có điểm khác biệt' }],
        correctAnswer: 'A',
        explanation: 'Bubble hoán đổi liên tục cặp kề; Selection quét tìm min rồi hoán đổi 1 lần.'
      },
      {
        id: 'b16_th_5',
        category: 'comprehension',
        questionText: 'Nếu một danh sách ĐÃ ĐƯỢC SẮP XẾP ĐÚNG sẵn từ trước, thuật toán Bubble Sort cải tiến có nhận biết được không?',
        options: [{ key: 'A', text: 'Có, nếu trong 1 lượt duyệt không có bất kỳ phép đổi chỗ nào xảy ra thì thuật toán dừng sớm' }, { key: 'B', text: 'Không, vẫn chạy đủ số vòng' }, { key: 'C', text: 'Sẽ báo lỗi' }, { key: 'D', text: 'Sẽ làm xáo trộn lại' }],
        correctAnswer: 'A',
        explanation: 'Biến cờ kiểm tra đổi chỗ giúp Bubble Sort dừng sớm khi dãy đã chuẩn.'
      },
      {
        id: 'b16_th_6',
        category: 'comprehension',
        questionText: 'Khi sắp xếp điểm thi của lớp để trao thưởng, bạn điểm cao nhất đứng trên cùng. Đó là sắp xếp theo thứ tự gì?',
        options: [{ key: 'A', text: 'Sắp xếp Giảm dần (Descending)' }, { key: 'B', text: 'Sắp xếp Tăng dần (Ascending)' }, { key: 'C', text: 'Sắp xếp ngẫu nhiên' }, { key: 'D', text: 'Sắp xếp nhị phân' }],
        correctAnswer: 'A',
        explanation: 'Điểm lớn nhất đứng đầu tiên là trật tự Giảm dần.'
      },
      {
        id: 'b16_th_7',
        category: 'comprehension',
        questionText: 'Thao tác "Đổi chỗ 2 biến x và y" sử dụng biến tạm temp được viết như thế nào?',
        options: [{ key: 'A', text: 'temp = x; x = y; y = temp;' }, { key: 'B', text: 'x = y; y = x;' }, { key: 'C', text: 'x = temp; y = temp;' }, { key: 'D', text: 'temp = x + y;' }],
        correctAnswer: 'A',
        explanation: 'Biến tạm temp giữ giá trị của x trước khi gán x = y.'
      },
      {
        id: 'b16_th_8',
        category: 'comprehension',
        questionText: 'Tại sao việc nắm vững tư duy thuật toán sắp xếp lại quan trọng đối với học sinh?',
        options: [{ key: 'A', text: 'Rèn luyện tư duy logic, kỹ năng phân tích các bước giải quyết vấn đề khoa học' }, { key: 'B', text: 'Để biết cách dùng chuột' }, { key: 'C', text: 'Để vẽ hình đẹp hơn' }, { key: 'D', text: 'Để gõ phím nhanh hơn' }],
        correctAnswer: 'A',
        explanation: 'Tư duy thuật toán nâng cao năng lực giải quyết vấn đề trong học tập và đời sống.'
      },

      // 5 True/False
      {
        id: 'b16_ds_1',
        category: 'true_false',
        questionText: 'Thuật toán Sắp xếp Nổi bọt (Bubble Sort):',
        statements: [
          { id: 'b16_ds_1_a', text: 'a) So sánh các cặp phần tử liền kề.', isTrue: true },
          { id: 'b16_ds_1_b', text: 'b) Đổi chỗ hai phần tử nếu sai thứ tự.', isTrue: true },
          { id: 'b16_ds_1_c', text: 'c) Sau lượt 1 (xếp tăng), phần tử lớn nhất dời về vị trí cuối.', isTrue: true },
          { id: 'b16_ds_1_d', text: 'd) Chỉ so sánh phần tử đầu và phần tử cuối của dãy.', isTrue: false }
        ],
        explanation: 'Bubble Sort so sánh cặp kề nhau, không phải chỉ so sánh phần tử đầu và cuối.'
      },
      {
        id: 'b16_ds_2',
        category: 'true_false',
        questionText: 'Thuật toán Sắp xếp Chọn (Selection Sort):',
        statements: [
          { id: 'b16_ds_2_a', text: 'a) Tìm phần tử nhỏ nhất trong vùng chưa sắp xếp.', isTrue: true },
          { id: 'b16_ds_2_b', text: 'b) Đổi chỗ phần tử nhỏ nhất đó về đầu vùng chưa sắp xếp.', isTrue: true },
          { id: 'b16_ds_2_c', text: 'c) Cần thực hiện tối đa N-1 lượt chọn.', isTrue: true },
          { id: 'b16_ds_2_d', text: 'd) Đổi chỗ liên tục mọi cặp phần tử kề nhau.', isTrue: false }
        ],
        explanation: 'Đổi chỗ liên tục cặp kề nhau là Bubble Sort, Selection Sort chỉ hoán đổi 1 lần mỗi lượt chọn.'
      },
      {
        id: 'b16_ds_3',
        category: 'true_false',
        questionText: 'Mối quan hệ giữa Sắp xếp và Tìm kiếm:',
        statements: [
          { id: 'b16_ds_3_a', text: 'a) Sắp xếp giúp việc tìm kiếm dễ dàng và nhanh chóng hơn.', isTrue: true },
          { id: 'b16_ds_3_b', text: 'b) Sắp xếp là điều kiện bắt buộc để chạy Tìm kiếm Nhị phân.', isTrue: true },
          { id: 'b16_ds_3_c', text: 'c) Tìm kiếm tuần tự không bắt buộc danh sách phải sắp xếp.', isTrue: true },
          { id: 'b16_ds_3_d', text: 'd) Sắp xếp dữ liệu làm giảm hiệu quả tìm kiếm.', isTrue: false }
        ],
        explanation: 'Sắp xếp dữ liệu giúp tăng vọt hiệu quả tìm kiếm.'
      },
      {
        id: 'b16_ds_4',
        category: 'true_false',
        questionText: 'Ứng dụng của Sắp xếp trong phần mềm thực tế:',
        statements: [
          { id: 'b16_ds_4_a', text: 'a) Sắp xếp sản phẩm theo giá từ thấp đến cao trên trang thương mại điện tử.', isTrue: true },
          { id: 'b16_ds_4_b', text: 'b) Sắp xếp danh bạ điện thoại theo tên chữ cái A-Z.', isTrue: true },
          { id: 'b16_ds_4_c', text: 'c) Sắp xếp tệp tin theo ngày sửa đổi gần nhất trong máy tính.', isTrue: true },
          { id: 'b16_ds_4_d', text: 'd) Sắp xếp chỉ có tác dụng trang trí không có ứng dụng thực tế.', isTrue: false }
        ],
        explanation: 'Sắp xếp là một trong những tính năng cốt lõi được ứng dụng khắp các ứng dụng công nghệ.'
      },
      {
        id: 'b16_ds_5',
        category: 'true_false',
        questionText: 'So sánh Tăng dần và Giảm dần:',
        statements: [
          { id: 'b16_ds_5_a', text: 'a) Tăng dần là từ nhỏ đến lớn (1, 2, 3... hoặc A đến Z).', isTrue: true },
          { id: 'b16_ds_5_b', text: 'b) Giảm dần là từ lớn đến nhỏ (10, 9, 8... hoặc Z về A).', isTrue: true },
          { id: 'b16_ds_5_c', text: 'c) Muốn đổi từ xếp tăng sang xếp giảm chỉ cần đổi dấu điều kiện so sánh.', isTrue: true },
          { id: 'b16_ds_5_d', text: 'd) Sắp xếp tăng dần và giảm dần cho ra kết quả giống hệt nhau.', isTrue: false }
        ],
        explanation: 'Tăng dần và giảm dần cho ra hai thứ tự ngược chiều nhau.'
      }
    ]
  }
];
