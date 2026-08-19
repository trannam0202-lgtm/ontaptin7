import { Lesson } from '../../types';

export const LESSONS_THEME3: Lesson[] = [
  {
    id: 'lesson_5',
    number: 5,
    title: 'Bài 5: Ứng xử trên mạng xã hội và văn hóa giao tiếp trong không gian mạng',
    themeId: 'theme_3',
    themeTitle: 'Chủ đề 3: Đạo đức, pháp luật và văn hóa trong môi trường số',
    summary: [
      {
        title: '1. Văn hóa giao tiếp trong không gian mạng',
        content: [
          'Giao tiếp trên mạng cần đảm bảo tính văn minh, lịch sự, tôn trọng người khác.',
          'Không sử dụng ngôn từ tục tĩu, xúc phạm danh dự, miệt thị vùng miền, giới tính.',
          'Biết lắng nghe, ứng xử có văn hóa ngay cả khi có bất đồng ý kiến.'
        ],
        illustrationType: 'cyber_ethics'
      },
      {
        title: '2. Quy tắc ứng xử và Bảo vệ bản thân',
        content: [
          'Tôn trọng bản quyền tác giả: Không tự ý sao chép, phân phối nội dung của người khác mà không có sự đồng ý hoặc không ghi rõ nguồn.',
          'Không chia sẻ thông tin chưa kiểm chứng, tin đồn thất thiệt hoặc thông tin cá nhân của người khác.',
          'Khi bị bắt nạt trực tuyến (Cyberbullying): Cần thông báo ngay cho cha mẹ, thầy cô giáo hoặc người lớn đáng tin cậy.'
        ]
      }
    ],
    questions: [
      // 12 Recall
      {
        id: 'b5_nb_1',
        category: 'recall',
        questionText: 'Hành vi nào sau đây đúng văn hóa giao tiếp trong không gian mạng?',
        options: [{ key: 'A', text: 'Sử dụng ngôn ngữ lịch sự, tôn trọng người đọc' }, { key: 'B', text: 'Chửi thề, lăng mạ người có ý kiến trái chiều' }, { key: 'C', text: 'Spam bình luận quảng cáo vào bài đăng người khác' }, { key: 'D', text: 'Công khai số điện thoại cá nhân người khác để trả thù' }],
        correctAnswer: 'A',
        explanation: 'Văn hóa mạng đòi hỏi sử dụng ngôn từ văn minh và lịch sự.'
      },
      {
        id: 'b5_nb_2',
        category: 'recall',
        questionText: 'Hành vi tự ý lấy bài viết hoặc tranh ảnh của người khác đăng lên mạng mạo nhận là của mình vi phạm điều gì?',
        options: [{ key: 'A', text: 'Quyền tác giả (Bản quyền)' }, { key: 'B', text: 'Luật giao thông đường bộ' }, { key: 'C', text: 'Quy định bảo vệ môi trường' }, { key: 'D', text: 'Luật bảo vệ rừng' }],
        correctAnswer: 'A',
        explanation: 'Mạo nhận tác phẩm của người khác là vi phạm nghiêm trọng luật bản quyền.'
      },
      {
        id: 'b5_nb_3',
        category: 'recall',
        questionText: 'Thuật ngữ "Cyberbullying" trong tiếng Việt có nghĩa là gì?',
        options: [{ key: 'A', text: 'Bắt nạt trên không gian mạng' }, { key: 'B', text: 'Học tập trực tuyến' }, { key: 'C', text: 'Mua sắm qua mạng' }, { key: 'D', text: 'Xem phim HD' }],
        correctAnswer: 'A',
        explanation: 'Cyberbullying là hành vi đe dọa, bắt nạt người khác thông qua các công cụ mạng.'
      },
      {
        id: 'b5_nb_4',
        category: 'recall',
        questionText: 'Nghị định số 15/2020/NĐ-CP quy định xử phạt vi phạm hành chính trong lĩnh vực nào?',
        options: [{ key: 'A', text: 'Bưu chính, viễn thông, tần số vô tuyến điện, công nghệ thông tin và giao dịch điện tử' }, { key: 'B', text: 'Giao thông đường sắt' }, { key: 'C', text: 'An toàn thực phẩm' }, { key: 'D', text: 'Khai thác khoáng sản' }],
        correctAnswer: 'A',
        explanation: 'Nghị định 15 quy định mức phạt đối với các hành vi vi phạm trên mạng xã hội và CNTT.'
      },
      {
        id: 'b5_nb_5',
        category: 'recall',
        questionText: 'Khi trích dẫn nội dung từ một trang web khác vào bài làm của mình, em cần làm gì?',
        options: [{ key: 'A', text: 'Ghi rõ nguồn thông tin tham khảo và tên tác giả (nếu có)' }, { key: 'B', text: 'Xóa tên tác giả gốc đi' }, { key: 'C', text: 'Viết tên mình vào thay thế' }, { key: 'D', text: 'Tự nhận mình nghĩ ra' }],
        correctAnswer: 'A',
        explanation: 'Trích dẫn nguồn rõ ràng thể hiện sự tôn trọng bản quyền tác giả.'
      },
      {
        id: 'b5_nb_6',
        category: 'recall',
        questionText: 'Đâu là hậu quả của hành vi chia sẻ tin giả trên không gian mạng?',
        options: [{ key: 'A', text: 'Gây hoang mang dư luận và có thể bị phạt tiền theo quy định pháp luật' }, { key: 'B', text: 'Được tặng quà thưởng' }, { key: 'C', text: 'Máy tính chạy nhanh hơn' }, { key: 'D', text: 'Tăng tốc độ mạng Internet' }],
        correctAnswer: 'A',
        explanation: 'Chia sẻ tin giả gây tổn hại xã hội và bị xử lý theo Luật An ninh mạng.'
      },
      {
        id: 'b5_nb_7',
        category: 'recall',
        questionText: 'Trường hợp bị người lạ nhắn tin đe dọa hoặc tống tiền trên mạng, em nên làm gì?',
        options: [{ key: 'A', text: 'Lưu lại bằng chứng và báo ngay cho cha mẹ, thầy cô hoặc công an' }, { key: 'B', text: 'Chuyển tiền theo yêu cầu' }, { key: 'C', text: 'Giấu kín không nói với ai' }, { key: 'D', text: 'Nhắn tin chửi lại' }],
        correctAnswer: 'A',
        explanation: 'Báo cáo ngay cho người lớn và cơ quan chức năng để được bảo vệ.'
      },
      {
        id: 'b5_nb_8',
        category: 'recall',
        questionText: 'Quy tắc ứng xử trên mạng xã hội dành cho học sinh gồm những tiêu chí cốt lõi nào?',
        options: [{ key: 'A', text: 'An toàn, Bối cảnh, Lịch sự, Trách nhiệm' }, { key: 'B', text: 'Tốc độ, Cạnh tranh, Dấu tên' }, { key: 'C', text: 'Mua bán, Trao đổi, Đặt hàng' }, { key: 'D', text: 'Quảng cáo, Khuyến mãi, Tải game' }],
        correctAnswer: 'A',
        explanation: 'Ứng xử mạng luôn đề cao sự an toàn, văn minh lịch sự và tinh thần trách nhiệm.'
      },
      {
        id: 'b5_nb_9',
        category: 'recall',
        questionText: 'Dấu tích xanh trên trang cá nhân hoặc Fanpage Facebook thể hiện điều gì?',
        options: [{ key: 'A', text: 'Xác minh chính chủ của cá nhân hoặc tổ chức' }, { key: 'B', text: 'Trang web bị khóa' }, { key: 'C', text: 'Trang web có virus' }, { key: 'D', text: 'Người dùng dưới 18 tuổi' }],
        correctAnswer: 'A',
        explanation: 'Huy hiệu tích xanh giúp phân biệt tài khoản chính chủ đã được xác thực.'
      },
      {
        id: 'b5_nb_10',
        category: 'recall',
        questionText: 'Hành vi vi phạm Luật An ninh mạng ở Việt Nam bao gồm:',
        options: [{ key: 'A', text: 'Tuyên truyền chống nhà nước, xuyên tạc lịch sử, vu khống cá nhân' }, { key: 'B', text: 'Đọc báo điện tử mỗi ngày' }, { key: 'C', text: 'Tra cứu điểm thi trực tuyến' }, { key: 'D', text: 'Tải sách giáo khoa điện tử' }],
        correctAnswer: 'A',
        explanation: 'Các hành vi tuyên truyền xuyên tạc, vu khống là vi phạm Luật An ninh mạng.'
      },
      {
        id: 'b5_nb_11',
        category: 'recall',
        questionText: 'Học sinh có nên đăng ảnh chụp giấy khen hoặc chứng minh nhân dân/CCCD của mình công khai lên mạng không?',
        options: [{ key: 'A', text: 'Không nên, vì kẻ xấu có thể lợi dụng thông tin cá nhân để lừa đảo' }, { key: 'B', text: 'Rất nên để khoe với mọi người' }, { key: 'C', text: 'Đăng càng nhiều càng tốt' }, { key: 'D', text: 'Không ảnh hưởng gì' }],
        correctAnswer: 'A',
        explanation: 'Lộ thông tin cá nhân (CCCD, mã định danh) tạo kẽ hở cho kẻ xấu giả mạo.'
      },
      {
        id: 'b5_nb_12',
        category: 'recall',
        questionText: 'Khi gặp nội dung bạo lực hoặc khiêu dâm trên mạng xã hội, nút chức năng nào giúp thông báo cho quản trị viên?',
        options: [{ key: 'A', text: 'Báo cáo (Report)' }, { key: 'B', text: 'Chia sẻ (Share)' }, { key: 'C', text: 'Thích (Like)' }, { key: 'D', text: 'Lưu bài viết (Save)' }],
        correctAnswer: 'A',
        explanation: 'Chức năng Report gửi yêu cầu cho nền tảng xem xét và gỡ bỏ nội dung vi phạm.'
      },

      // 8 Comprehension
      {
        id: 'b5_th_1',
        category: 'comprehension',
        questionText: 'Bạn An thấy một tin đồn thất thiệt về trường mình trên mạng xã hội. An nên xử lý như thế nào là đúng đắn?',
        options: [{ key: 'A', text: 'Không chia sẻ, báo cáo bài viết vi phạm và báo thầy cô giáo' }, { key: 'B', text: 'Chia sẻ ngay lên trang cá nhân kèm lời bình kích động' }, { key: 'C', text: 'Nhắn tin chửi bới người đăng tin' }, { key: 'D', text: 'Tag toàn bộ bạn bè vào chia sẻ' }],
        correctAnswer: 'A',
        explanation: 'Ngăn chặn tin giả bằng cách báo cáo vi phạm và không phát tán tiếp.'
      },
      {
        id: 'b5_th_2',
        category: 'comprehension',
        questionText: 'Việc cài đặt mật khẩu mạnh (bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt) giúp ích gì?',
        options: [{ key: 'A', text: 'Bảo vệ tài khoản tránh bị tin tặc dò đoán hoặc bẻ khóa' }, { key: 'B', text: 'Giúp đăng nhập không cần gõ chữ' }, { key: 'C', text: 'Giúp máy tính chạy mát hơn' }, { key: 'D', text: 'Tự động tải game về máy' }],
        correctAnswer: 'A',
        explanation: 'Mật khẩu phức tạp nâng cao độ an toàn bảo mật tài khoản số.'
      },
      {
        id: 'b5_th_3',
        category: 'comprehension',
        questionText: 'Tại sao việc đăng tải hình ảnh riêng tư của bạn học mà chưa được sự đồng ý lại là vi phạm pháp luật?',
        options: [{ key: 'A', text: 'Xâm phạm quyền hình ảnh và danh dự riêng tư của cá nhân' }, { key: 'B', text: 'Vì tốn dung lượng máy chủ' }, { key: 'C', text: 'Vì làm giảm chất lượng ảnh' }, { key: 'D', text: 'Vì máy ảnh sẽ bị hỏng' }],
        correctAnswer: 'A',
        explanation: 'Mỗi cá nhân có quyền bảo vệ hình ảnh và đời sống riêng tư theo Bộ luật Dân sự.'
      },
      {
        id: 'b5_th_4',
        category: 'comprehension',
        questionText: 'Thuật ngữ "Dấu chân số" (Digital Footprint) dùng để chỉ điều gì?',
        options: [{ key: 'A', text: 'Toàn bộ dấu vết thông tin, hoạt động mà người dùng để lại trên môi trường mạng' }, { key: 'B', text: 'Dấu chân in trên bàn phím' }, { key: 'C', text: 'Kích thước màn hình máy tính' }, { key: 'D', text: 'Tốc độ chuột máy tính' }],
        correctAnswer: 'A',
        explanation: 'Digital Footprint là lịch sử tương tác, bài đăng, bình luận tồn tại lâu dài trên mạng.'
      },
      {
        id: 'b5_th_5',
        category: 'comprehension',
        questionText: 'Làm thế nào để xây dựng một "Dấu chân số" tích cực cho bản thân?',
        options: [{ key: 'A', text: 'Chia sẻ kiến thức bổ ích, hình ảnh đẹp, thái độ học tập nghiêm túc' }, { key: 'B', text: 'Thường xuyên bình luận gây gổ, miệt thị' }, { key: 'C', text: 'Đăng hình ảnh vi phạm nội quy trường học' }, { key: 'D', text: 'Sử dụng phần mềm gian lận' }],
        correctAnswer: 'A',
        explanation: 'Nội dung tích cực xây dựng uy tín cá nhân tốt đẹp trên môi trường số.'
      },
      {
        id: 'b5_th_6',
        category: 'comprehension',
        questionText: 'Khi tham gia các nhóm học tập trực tuyến, em nên tuân thủ điều gì?',
        options: [{ key: 'A', text: 'Tôn trọng nội quy nhóm, trao đổi đúng chủ đề học tập' }, { key: 'B', text: 'Gửi tin nhắn rác liên tục' }, { key: 'C', text: 'Đăng video giải trí không liên quan' }, { key: 'D', text: 'Xóa bài viết của các bạn khác' }],
        correctAnswer: 'A',
        explanation: 'Tôn trọng mục tiêu chung của nhóm giúp môi trường học tập hiệu quả.'
      },
      {
        id: 'b5_th_7',
        category: 'comprehension',
        questionText: 'Ý nghĩa của việc kiểm tra tính xác thực nguồn tin trước khi chia sẻ là gì?',
        options: [{ key: 'A', text: 'Đảm bảo cung cấp thông tin đúng sự thật, bảo vệ uy tín bản thân' }, { key: 'B', text: 'Được trả thêm tiền mặt' }, { key: 'C', text: 'Giúp mạng khỏe hơn' }, { key: 'D', text: 'Tăng lượng người theo dõi tức thì' }],
        correctAnswer: 'A',
        explanation: 'Kiểm chứng nguồn tin giúp ngăn chặn sự lan truyền của tin vô căn cứ.'
      },
      {
        id: 'b5_th_8',
        category: 'comprehension',
        questionText: 'Nếu em bị kẻ xấu tống tiền bằng hình ảnh cắt ghép riêng tư, thái độ xử lý đúng nhất là gì?',
        options: [{ key: 'A', text: 'Bình tĩnh tìm kiếm sự trợ giúp từ cha mẹ và cơ quan công an' }, { key: 'B', text: 'Làm theo mọi yêu cầu kẻ xấu' }, { key: 'C', text: 'Nghỉ học giấu cha mẹ' }, { key: 'D', text: 'Xóa toàn bộ tin nhắn bằng chứng' }],
        correctAnswer: 'A',
        explanation: 'Không thỏa hiệp với tội phạm, cần giữ bằng chứng và nhờ pháp luật bảo vệ.'
      },

      // 5 True/False
      {
        id: 'b5_ds_1',
        category: 'true_false',
        questionText: 'Về văn hóa ứng dụng và giao tiếp trong không gian mạng:',
        statements: [
          { id: 'b5_ds_1_a', text: 'a) Luôn tôn trọng người nghe/người đọc dù giao tiếp trực tiếp hay qua màn hình.', isTrue: true },
          { id: 'b5_ds_1_b', text: 'b) Có thể thoải mái xúc phạm người khác nếu dùng tài khoản ẩn danh.', isTrue: false },
          { id: 'b5_ds_1_c', text: 'c) Ngôn từ sử dụng trên mạng cần đúng mực, văn minh, lịch sự.', isTrue: true },
          { id: 'b5_ds_1_d', text: 'd) Tôn trọng sự khác biệt ý kiến cá nhân của mọi người.', isTrue: true }
        ],
        explanation: 'Dùng tài khoản ẩn danh xúc phạm người khác vẫn bị truy cứu trách nhiệm.'
      },
      {
        id: 'b5_ds_2',
        category: 'true_false',
        questionText: 'Quy định pháp luật và bản quyền trong môi trường số:',
        statements: [
          { id: 'b5_ds_2_a', text: 'a) Mọi sản phẩm trí tuệ trên mạng đều được bảo hộ quyền tác giả.', isTrue: true },
          { id: 'b5_ds_2_b', text: 'b) Việc sao chép phần mềm có bản quyền mà không trả phí là trái pháp luật.', isTrue: true },
          { id: 'b5_ds_2_c', text: 'c) Luật An ninh mạng nghiêm cấm hành vi chia sẻ tin giả, vu khống.', isTrue: true },
          { id: 'b5_ds_2_d', text: 'd) Học sinh được quyền tùy ý tải nhạc bản quyền về bán lấy tiền.', isTrue: false }
        ],
        explanation: 'Tự ý bán sản phẩm bản quyền là vi phạm pháp luật sở hữu trí tuệ.'
      },
      {
        id: 'b5_ds_3',
        category: 'true_false',
        questionText: 'Hành vi ứng xử trước hiện tượng Bắt nạt trực tuyến (Cyberbullying):',
        statements: [
          { id: 'b5_ds_3_a', text: 'a) Cyberbullying gây ra tổn thương tâm lý nghiêm trọng cho nạn nhân.', isTrue: true },
          { id: 'b5_ds_3_b', text: 'b) Khi thấy bạn bị bắt nạt trên mạng, nên hùa theo bới móc.', isTrue: false },
          { id: 'b5_ds_3_c', text: 'c) Cần chụp màn hình bằng chứng và báo cáo bài viết vi phạm.', isTrue: true },
          { id: 'b5_ds_3_d', text: 'd) Chia sẻ câu chuyện với người lớn đáng tin cậy để tìm giải pháp.', isTrue: true }
        ],
        explanation: 'Hùa theo bắt nạt là hành vi tiếp tay cho cái xấu.'
      },
      {
        id: 'b5_ds_4',
        category: 'true_false',
        questionText: 'Bảo vệ thông tin cá nhân trên mạng xã hội:',
        statements: [
          { id: 'b5_ds_4_a', text: 'a) Mật khẩu nên thay đổi định kỳ và không tiết lộ cho người lạ.', isTrue: true },
          { id: 'b5_ds_4_b', text: 'b) Nên công khai địa chỉ nhà và lịch trình sinh hoạt hàng ngày.', isTrue: false },
          { id: 'b5_ds_4_c', text: 'c) Cẩn trọng trước khi chấp nhận lời mời kết bạn từ người không quen biết.', isTrue: true },
          { id: 'b5_ds_4_d', text: 'd) Kiểm tra cẩn thận cài đặt quyền riêng tư của tài khoản.', isTrue: true }
        ],
        explanation: 'Công khai lịch trình sinh hoạt tạo kẽ hở cho trộm cắp và bám đuôi.'
      },
      {
        id: 'b5_ds_5',
        category: 'true_false',
        questionText: 'Xây dựng hình ảnh cá nhân lành mạnh trên mạng:',
        statements: [
          { id: 'b5_ds_5_a', text: 'a) Những nội dung đã đăng tải trên mạng có thể tồn tại vĩnh viễn.', isTrue: true },
          { id: 'b5_ds_5_b', text: 'b) Suy nghĩ kỹ trước khi nhấn nút Đăng bài (Post) hoặc Bình luận (Comment).', isTrue: true },
          { id: 'b5_ds_5_c', text: 'c) Đăng tải các clip bạo lực để thu hút sự chú ý.', isTrue: false },
          { id: 'b5_ds_5_d', text: 'd) Tích cực tham gia các phong trào trực tuyến có ý nghĩa cộng đồng.', isTrue: true }
        ],
        explanation: 'Đăng clip bạo lực gây hại cho cộng đồng và vi phạm quy chuẩn cộng đồng.'
      }
    ]
  }
];
