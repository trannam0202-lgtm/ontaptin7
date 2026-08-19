import { Lesson } from '../../types';

export const LESSONS_THEME2: Lesson[] = [
  {
    id: 'lesson_4',
    number: 4,
    title: 'Bài 4: Mạng xã hội và một số kênh trao đổi thông tin trên Internet',
    themeId: 'theme_2',
    themeTitle: 'Chủ đề 2: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin',
    summary: [
      {
        title: '1. Mạng xã hội (Social Network)',
        content: [
          'Mạng xã hội là kênh trao đổi thông tin trên Internet, cho phép người dùng kết nối, chia sẻ văn bản, hình ảnh, video, trò chuyện trực tuyến và tham gia các cộng đồng có cùng sở thích.',
          'Các mạng xã hội phổ biến: Facebook, YouTube, Zalo, Instagram, TikTok...',
          'Chức năng chính: Chia sẻ thông tin đa phương tiện, kết nối bạn bè, thảo luận, tìm kiếm cơ hội học tập và kinh doanh.'
        ],
        illustrationType: 'social_media'
      },
      {
        title: '2. Thư điện tử và Diễn đàn trực tuyến',
        content: [
          'Thư điện tử (Email): Kênh gửi nhận tin nhắn văn bản kèm tệp tin chính thức. Có tính bảo mật và lưu trữ cao. Ví dụ: Gmail, Outlook.',
          'Diễn đàn (Forum): Kênh thảo luận tập trung theo từng chủ đề cụ thể. Người tham gia có thể đăng câu hỏi, bài viết và bình luận góp ý.',
          'Chú ý khi tham gia: Cảnh giác với tin giả, bảo mật thông tin cá nhân, không truy cập liên kết lạ.'
        ]
      }
    ],
    questions: [
      // 12 Recall
      {
        id: 'b4_nb_1',
        category: 'recall',
        questionText: 'Mạng xã hội là gì?',
        options: [{ key: 'A', text: 'Là một phần mềm diệt virus trên máy tính' }, { key: 'B', text: 'Là dịch vụ Internet giúp kết nối, chia sẻ và trao đổi thông tin giữa các người dùng' }, { key: 'C', text: 'Là hệ điều hành dùng cho điện thoại' }, { key: 'D', text: 'Là thiết bị nối mạng máy tính' }],
        correctAnswer: 'B',
        explanation: 'Mạng xã hội cho phép người dùng tương tác chia sẻ thông tin qua Internet.'
      },
      {
        id: 'b4_nb_2',
        category: 'recall',
        questionText: 'Ứng dụng nào sau đây là một Mạng xã hội chia sẻ video lớn nhất thế giới?',
        options: [{ key: 'A', text: 'YouTube' }, { key: 'B', text: 'Microsoft Word' }, { key: 'C', text: 'Excel' }, { key: 'D', text: 'Unikey' }],
        correctAnswer: 'A',
        explanation: 'YouTube là nền tảng chia sẻ video trực tuyến phổ biến nhất.'
      },
      {
        id: 'b4_nb_3',
        category: 'recall',
        questionText: 'Kênh nào sau đây chuyên phục vụ việc gửi và nhận thư điện tử chính thức?',
        options: [{ key: 'A', text: 'Gmail' }, { key: 'B', text: 'Paint' }, { key: 'C', text: 'Scratch' }, { key: 'D', text: 'PowerPoint' }],
        correctAnswer: 'A',
        explanation: 'Gmail là dịch vụ thư điện tử (email) của Google.'
      },
      {
        id: 'b4_nb_4',
        category: 'recall',
        questionText: 'Yếu tố nào cấu thành địa chỉ thư điện tử (Email)?',
        options: [{ key: 'A', text: 'Tên người dùng + ký tự @ + Tên nhà cung cấp dịch vụ' }, { key: 'B', text: 'Tên người dùng + số điện thoại' }, { key: 'C', text: 'Địa chỉ nhà riêng' }, { key: 'D', text: 'Số CMND/CCCD' }],
        correctAnswer: 'A',
        explanation: 'Cú pháp Email chuẩn: tentaikhoan@domain.com.'
      },
      {
        id: 'b4_nb_5',
        category: 'recall',
        questionText: 'Tính năng nào sau đây thường có trên các Mạng xã hội?',
        options: [{ key: 'A', text: 'Đăng bài (Post), Bày tỏ cảm xúc (Like/Love), Bình luận (Comment), Chia sẻ (Share)' }, { key: 'B', text: 'Tính tiền điện thoại hàng tháng' }, { key: 'C', text: 'Sửa chữa phần cứng máy tính' }, { key: 'D', text: 'Tự động quét virus ổ C' }],
        correctAnswer: 'A',
        explanation: 'Đó là các tính năng tương tác cơ bản của mạng xã hội.'
      },
      {
        id: 'b4_nb_6',
        category: 'recall',
        questionText: 'Kênh thảo luận trực tuyến theo từng chủ đề chuyên biệt được gọi là gì?',
        options: [{ key: 'A', text: 'Diễn đàn (Forum)' }, { key: 'B', text: 'Ổ đĩa cứng' }, { key: 'C', text: 'Màn hình cảm ứng' }, { key: 'D', text: 'Hệ điều hành' }],
        correctAnswer: 'A',
        explanation: 'Diễn đàn (Forum) là nơi các thành viên thảo luận theo chủ đề.'
      },
      {
        id: 'b4_nb_7',
        category: 'recall',
        questionText: 'Để tham gia Mạng xã hội, trước tiên người dùng cần tạo cái gì?',
        options: [{ key: 'A', text: 'Tài khoản người dùng (Account)' }, { key: 'B', text: 'Một trang web riêng' }, { key: 'C', text: 'Một máy chủ server' }, { key: 'D', text: 'Một chiếc máy in mới' }],
        correctAnswer: 'A',
        explanation: 'Đăng ký tài khoản giúp xác thực danh tính cá nhân trên mạng.'
      },
      {
        id: 'b4_nb_8',
        category: 'recall',
        questionText: 'Ưu điểm nổi bật của Thư điện tử (Email) so với thư bưu điện truyền thống là gì?',
        options: [{ key: 'A', text: 'Tốc độ chuyển thư gần như tức thời và chi phí rất thấp' }, { key: 'B', text: 'Thư làm bằng giấy đẹp hơn' }, { key: 'C', text: 'Không cần có kết nối Internet' }, { key: 'D', text: 'Gửi được hàng thật vật lý' }],
        correctAnswer: 'A',
        explanation: 'Email gửi nhanh chóng qua mạng Internet trong vài giây.'
      },
      {
        id: 'b4_nb_9',
        category: 'recall',
        questionText: 'Mạng xã hội nào sau đây rất phổ biến tại Việt Nam do VNG phát triển?',
        options: [{ key: 'A', text: 'Zalo' }, { key: 'B', text: 'Twitter' }, { key: 'C', text: 'LinkedIn' }, { key: 'D', text: 'Reddit' }],
        correctAnswer: 'A',
        explanation: 'Zalo là nền tảng nhắn tin và mạng xã hội do VNG phát triển.'
      },
      {
        id: 'b4_nb_10',
        category: 'recall',
        questionText: 'Thư điện tử cho phép đính kèm tệp tin dạng nào?',
        options: [{ key: 'A', text: 'Văn bản, hình ảnh, âm thanh, video, tệp nén...' }, { key: 'B', text: 'Chỉ đính kèm được chữ' }, { key: 'C', text: 'Chỉ đính kèm được tệp Word' }, { key: 'D', text: 'Không thể đính kèm tệp' }],
        correctAnswer: 'A',
        explanation: 'Email cho phép gửi kèm nhiều định dạng tệp số hóa.'
      },
      {
        id: 'b4_nb_11',
        category: 'recall',
        questionText: 'Thành phần nào sau đây bắt buộc phải có trong địa chỉ email?',
        options: [{ key: 'A', text: 'Ký tự @' }, { key: 'B', text: 'Dấu gạch ngang -' }, { key: 'C', text: 'Ký tự #' }, { key: 'D', text: 'Số điện thoại' }],
        correctAnswer: 'A',
        explanation: 'Ký tự @ phân tách tên tài khoản và tên miền dịch vụ email.'
      },
      {
        id: 'b4_nb_12',
        category: 'recall',
        questionText: 'Tin nhắn tức thời (Instant Messaging) trên ứng dụng như Zalo hay Messenger có đặc điểm gì?',
        options: [{ key: 'A', text: 'Trò chuyện thời gian thực theo từng giây' }, { key: 'B', text: 'Phải chờ 3 ngày mới nhận được' }, { key: 'C', text: 'Chỉ gửi được vào ban đêm' }, { key: 'D', text: 'Mỗi lần gửi tốn 100.000 VNĐ' }],
        correctAnswer: 'A',
        explanation: 'Tin nhắn tức thời cho phản hồi giao tiếp trực tiếp ngay lập tức.'
      },

      // 8 Comprehension
      {
        id: 'b4_th_1',
        category: 'comprehension',
        questionText: 'Mặt trái (tác hại) có thể gặp phải nếu sử dụng Mạng xã hội quá nhiều là gì?',
        options: [{ key: 'A', text: 'Tăng cường sức khỏe thể chất' }, { key: 'B', text: 'Gây nghiện, lãng phí thời gian, xao nhãng học tập, rủi ro mất an toàn thông tin' }, { key: 'C', text: 'Máy tính tự động tăng bộ nhớ' }, { key: 'D', text: 'Giúp mắt sáng hơn' }],
        correctAnswer: 'B',
        explanation: 'Lạm dụng mạng xã hội ảnh hưởng tiêu cực đến tâm lý, sức khỏe và học tập.'
      },
      {
        id: 'b4_th_2',
        category: 'comprehension',
        questionText: 'Khi nhận được một email từ địa chỉ lạ chứa đường liên kết nhấp vào nhận quà thưởng lớn, em nên làm gì?',
        options: [{ key: 'A', text: 'Nhấp ngay vào liên kết để lấy quà' }, { key: 'B', text: 'Không nhấp vào liên kết, báo cáo lừa đảo hoặc xóa thư' }, { key: 'C', text: 'Gửi tiếp thư đó cho tất cả bạn bè trong lớp' }, { key: 'D', text: 'Nhập mật khẩu tài khoản ngân hàng vào' }],
        correctAnswer: 'B',
        explanation: 'Địa chỉ lạ hứa hẹn quà tặng thường là hình thức lừa đảo giả mạo (phishing).'
      },
      {
        id: 'b4_th_3',
        category: 'comprehension',
        questionText: 'Tại sao mạng xã hội là môi trường thuận lợi để lan truyền thông tin giả (Fake news)?',
        options: [{ key: 'A', text: 'Vì tốc độ chia sẻ cực nhanh và nhiều người chia sẻ không kiểm chứng nguồn tin' }, { key: 'B', text: 'Vì mạng xã hội không có chữ' }, { key: 'C', text: 'Vì chỉ có người lớn mới dùng mạng xã hội' }, { key: 'D', text: 'Vì máy tính tự nghĩ ra tin giả' }],
        correctAnswer: 'A',
        explanation: 'Tính năng chia sẻ nhanh khiến thông tin chưa kiểm chứng lan rộng.'
      },
      {
        id: 'b4_th_4',
        category: 'comprehension',
        questionText: 'Khi đăng thông tin hay hình ảnh cá nhân lên mạng xã hội, điều quan trọng cần chú ý là gì?',
        options: [{ key: 'A', text: 'Không cần quan tâm đến quyền riêng tư' }, { key: 'B', text: 'Cần bảo vệ thông tin cá nhân nhạy cảm và kiểm soát chế độ riêng tư người xem' }, { key: 'C', text: 'Nên công khai số nhà và mật khẩu' }, { key: 'D', text: 'Đăng càng nhiều thông tin nhạy cảm càng tốt' }],
        correctAnswer: 'B',
        explanation: 'Bảo vệ quyền riêng tư cá nhân tránh bị kẻ xấu lợi dụng.'
      },
      {
        id: 'b4_th_5',
        category: 'comprehension',
        questionText: 'Nhận định nào sau đây là DÚNG khi so sánh Thư điện tử (Email) và Mạng xã hội?',
        options: [{ key: 'A', text: 'Email thích hợp cho giao tiếp chính thức, lưu trữ tệp tài liệu; Mạng xã hội mạnh về kết nối cộng đồng đa phương tiện' }, { key: 'B', text: 'Email không gửi được tệp tin' }, { key: 'C', text: 'Mạng xã hội chỉ dùng để học lập trình' }, { key: 'D', text: 'Cả hai đều không cần có mạng Internet' }],
        correctAnswer: 'A',
        explanation: 'Email có tính chính thức cao, mạng xã hội mạnh về tương tác cộng đồng.'
      },
      {
        id: 'b4_th_6',
        category: 'comprehension',
        questionText: 'Hành vi nào sau đây thể hiện văn hóa ứng dụng Mạng xã hội tích cực?',
        options: [{ key: 'A', text: 'Chia sẻ kiến thức bổ ích, động viên bạn bè học tập' }, { key: 'B', text: 'Lập nhóm nói xấu thầy cô và bạn học' }, { key: 'C', text: 'Sử dụng ngôn từ tục tĩu kích động bạo lực' }, { key: 'D', text: 'Đăng tải tin đồn thất thiệt' }],
        correctAnswer: 'A',
        explanation: 'Sử dụng mạng xã hội lành mạnh mang lại giá trị tích cực.'
      },
      {
        id: 'b4_th_7',
        category: 'comprehension',
        questionText: 'Mã xác thực OTP gửi về điện thoại khi đăng nhập tài khoản nhằm mục đích gì?',
        options: [{ key: 'A', text: 'Xác thực 2 lớp bảo vệ an toàn cho tài khoản' }, { key: 'B', text: 'Quảng cáo sản phẩm mới' }, { key: 'C', text: 'Tăng tốc độ truy cập Internet' }, { key: 'D', text: 'Xóa bớt tin nhắn cũ' }],
        correctAnswer: 'A',
        explanation: 'OTP (One-Time Password) nâng cao tính bảo mật đăng nhập.'
      },
      {
        id: 'b4_th_8',
        category: 'comprehension',
        questionText: 'Tại sao các trường học thường khuyến khích sử dụng email học đường để trao đổi thông tin?',
        options: [{ key: 'A', text: 'Giúp quản lý học tập an toàn, chuyên nghiệp và tránh xao nhãng' }, { key: 'B', text: 'Vì email học đường không dùng được máy tính' }, { key: 'C', text: 'Vì mạng xã hội cấm học sinh dùng' }, { key: 'D', text: 'Vì email không tốn dung lượng' }],
        correctAnswer: 'A',
        explanation: 'Email học đường đảm bảo môi trường trao đổi bài học nghiêm túc.'
      },

      // 5 True/False
      {
        id: 'b4_ds_1',
        category: 'true_false',
        questionText: 'Xét các phát biểu sau đây về Mạng xã hội:',
        statements: [
          { id: 'b4_ds_1_a', text: 'a) Facebook, YouTube, Zalo là các mạng xã hội được sử dụng phổ biến.', isTrue: true },
          { id: 'b4_ds_1_b', text: 'b) Mạng xã hội giúp người dùng chia sẻ thông tin đa phương tiện (văn bản, ảnh, video).', isTrue: true },
          { id: 'b4_ds_1_c', text: 'c) Tất cả thông tin đăng tải trên Mạng xã hội đều chính xác 100%.', isTrue: false },
          { id: 'b4_ds_1_d', text: 'd) Mạng xã hội cung cấp các công cụ tương tác như Like, Comment, Share.', isTrue: true }
        ],
        explanation: 'Thông tin trên mạng xã hội có thể là tin giả, cần được kiểm chứng.'
      },
      {
        id: 'b4_ds_2',
        category: 'true_false',
        questionText: 'Về dịch vụ Thư điện tử (Email):',
        statements: [
          { id: 'b4_ds_2_a', text: 'a) Mỗi địa chỉ Email là duy nhất trên toàn thế giới.', isTrue: true },
          { id: 'b4_ds_2_b', text: 'b) Địa chỉ email bao gồm tên người dùng và tên miền nhà cung cấp phân cách bởi dấu @.', isTrue: true },
          { id: 'b4_ds_2_c', text: 'c) Không thể gửi cùng một nội dung email cho nhiều người nhận cùng lúc.', isTrue: false },
          { id: 'b4_ds_2_d', text: 'd) Có thể gửi kèm bài làm Word, Excel qua thư điện tử.', isTrue: true }
        ],
        explanation: 'Email hỗ trợ gửi đồng thời cho nhiều địa chỉ người nhận.'
      },
      {
        id: 'b4_ds_3',
        category: 'true_false',
        questionText: 'An toàn khi trao đổi thông tin trên mạng Internet:',
        statements: [
          { id: 'b4_ds_3_a', text: 'a) Tuyệt đối không cung cấp mật khẩu cá nhân cho bất kỳ ai.', isTrue: true },
          { id: 'b4_ds_3_b', text: 'b) Nhấp vào mọi đường link quảng cáo trúng thưởng để kiểm tra.', isTrue: false },
          { id: 'b4_ds_3_c', text: 'c) Bật tính năng xác thực hai yếu tố cho tài khoản cá nhân.', isTrue: true },
          { id: 'b4_ds_3_d', text: 'd) Đăng xuất tài khoản sau khi dùng xong trên máy tính công cộng.', isTrue: true }
        ],
        explanation: 'Không nhấp vào link lạ vì chứa rủi ro mã độc đánh cắp tài khoản.'
      },
      {
        id: 'b4_ds_4',
        category: 'true_false',
        questionText: 'Nhận định về diễn đàn trực tuyến (Forum):',
        statements: [
          { id: 'b4_ds_4_a', text: 'a) Diễn đàn quy tụ người dùng có chung sở thích hoặc chủ đề quan tâm.', isTrue: true },
          { id: 'b4_ds_4_b', text: 'b) Người tham gia có thể gửi câu hỏi và nhận câu trả lời từ cộng đồng.', isTrue: true },
          { id: 'b4_ds_4_c', text: 'c) Diễn đàn chỉ hoạt động được khi cắm dây mạng trực tiếp vào tivi.', isTrue: false },
          { id: 'b4_ds_4_d', text: 'd) Scratch forum là diễn đàn học tập lập trình trực tuyến cho học sinh.', isTrue: true }
        ],
        explanation: 'Diễn đàn hoạt động trên nền trang web Internet.'
      },
      {
        id: 'b4_ds_5',
        category: 'true_false',
        questionText: 'Thói quen sử dụng Internet lành mạnh của học sinh:',
        statements: [
          { id: 'b4_ds_5_a', text: 'a) Phân bổ thời gian hợp lý giữa việc học, giải trí và hoạt động thể thao.', isTrue: true },
          { id: 'b4_ds_5_b', text: 'b) Thức thâu đêm chơi game và lướt TikTok liên tục.', isTrue: false },
          { id: 'b4_ds_5_c', text: 'c) Tôn trọng quyền riêng tư và danh dự của người khác trên mạng.', isTrue: true },
          { id: 'b4_ds_5_d', text: 'd) Tham khảo ý kiến cha mẹ/thầy cô khi gặp rắc rối trên mạng.', isTrue: true }
        ],
        explanation: 'Thức đêm chơi game gây tác hại lớn cho sức khỏe thể chất và tinh thần.'
      }
    ]
  }
];
