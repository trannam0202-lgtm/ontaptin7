import React from 'react';
import { 
  Monitor, Keyboard, Mouse, Printer, HardDrive, Cpu, Folder, FileText, 
  ShieldCheck, ShieldAlert, Lock, CheckCircle2, XCircle, Lightbulb, 
  Share2, Mail, MessageSquare, AlertTriangle, Table, Calculator, 
  Layers, ArrowRight, ArrowDown, Eye, RefreshCw, FileSpreadsheet, 
  Sparkles, Sliders, Type, Grid, Check, UserX, UserCheck
} from 'lucide-react';

interface IllustrationProps {
  type: string;
}

export const LessonIllustration: React.FC<IllustrationProps> = ({ type }) => {
  let mappedType = type;

  // Mapping generic lesson types to specific illustration keys
  if (type === 'lesson_1' || type === 'lesson_1_1' || type === 'input_output') mappedType = 'lesson_1_1';
  else if (type === 'lesson_1_2' || type === 'safety_rules') mappedType = 'lesson_1_2';
  
  else if (type === 'lesson_2' || type === 'lesson_2_1' || type === 'software_tree') mappedType = 'lesson_2_1';
  else if (type === 'lesson_2_2' || type === 'os_vs_app') mappedType = 'lesson_2_2';

  else if (type === 'lesson_3' || type === 'lesson_3_1' || type === 'file_structure') mappedType = 'lesson_3_1';
  else if (type === 'lesson_3_2' || type === 'data_backup') mappedType = 'lesson_3_2';

  else if (type === 'lesson_4' || type === 'lesson_4_1' || type === 'social_media') mappedType = 'lesson_4_1';
  else if (type === 'lesson_4_2' || type === 'social_features') mappedType = 'lesson_4_2';

  else if (type === 'lesson_5' || type === 'lesson_5_1' || type === 'netiquette' || type === 'cyber_ethics') mappedType = 'lesson_5_1';
  else if (type === 'lesson_5_2' || type === 'cyber_safety') mappedType = 'lesson_5_2';

  else if (type === 'lesson_6' || type === 'lesson_6_1' || type === 'excel_grid') mappedType = 'lesson_6_1';
  else if (type === 'lesson_6_2' || type === 'excel_align') mappedType = 'lesson_6_2';

  else if (type === 'lesson_7' || type === 'lesson_7_1' || type === 'excel_formula') mappedType = 'lesson_7_1';
  else if (type === 'lesson_7_2' || type === 'cell_reference') mappedType = 'lesson_7_2';

  else if (type === 'lesson_8' || type === 'lesson_8_1' || type === 'excel_functions') mappedType = 'lesson_8_1';
  else if (type === 'lesson_8_2' || type === 'excel_function_demo') mappedType = 'lesson_8_2';

  else if (type === 'lesson_9' || type === 'lesson_9_1') mappedType = 'lesson_9_1';
  else if (type === 'lesson_9_2') mappedType = 'lesson_9_2';

  else if (type === 'lesson_10' || type === 'lesson_10_1' || type === 'sequential_search') mappedType = 'lesson_10_1';
  else if (type === 'lesson_10_2' || type === 'sequential_steps') mappedType = 'lesson_10_2';

  else if (type === 'lesson_11' || type === 'lesson_11_1' || type === 'binary_search') mappedType = 'lesson_11_1';
  else if (type === 'lesson_11_2' || type === 'binary_steps') mappedType = 'lesson_11_2';

  else if (type === 'lesson_12' || type === 'lesson_12_1' || type === 'sorting_algorithms') mappedType = 'lesson_12_1';
  else if (type === 'lesson_12_2' || type === 'bubble_steps') mappedType = 'lesson_12_2';

  else if (type === 'lesson_13' || type === 'lesson_13_1') mappedType = 'lesson_13_1';
  else if (type === 'lesson_13_2' || type === 'sort_comparison') mappedType = 'lesson_13_2';

  switch (mappedType) {
    // ==================== BÀI 1 ====================
    case 'lesson_1_1':
      return (
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-2">
          <h4 className="text-sm font-bold text-slate-800 mb-3 text-center flex items-center justify-center gap-1.5">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span>Minh họa 1: Sơ đồ Luồng xử lý & Phân loại Thiết bị VÀO - RA</span>
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-stretch text-center">
            <div className="bg-blue-50 border border-blue-200 p-3 rounded-xl flex flex-col justify-between">
              <div>
                <div className="flex justify-center gap-1 mb-2 text-blue-600"><Keyboard className="w-6 h-6" /><Mouse className="w-6 h-6" /></div>
                <div className="font-bold text-blue-900 text-sm">Thiết bị VÀO (Input)</div>
                <p className="text-xs text-blue-800 mt-1 font-medium">Bàn phím, chuột, micro, máy quét (scanner), camera...</p>
              </div>
              <div className="mt-2 pt-2 border-t border-blue-200/80 text-[11px] font-semibold text-blue-700">→ Đưa thông tin vào máy tính</div>
            </div>
            
            <div className="bg-amber-50 border border-amber-200 p-3 rounded-xl flex flex-col justify-between">
              <div>
                <div className="flex justify-center gap-1 mb-2 text-amber-600"><Cpu className="w-6 h-6" /><HardDrive className="w-6 h-6" /></div>
                <div className="font-bold text-amber-900 text-sm">Bộ xử lý (CPU) & Lưu trữ</div>
                <p className="text-xs text-amber-800 mt-1 font-medium">Xử lý dữ liệu, lưu trữ vào RAM, ổ cứng (HDD/SSD), USB</p>
              </div>
              <div className="mt-2 pt-2 border-t border-amber-200/80 text-[11px] font-semibold text-amber-700">⚙️ Tính toán & Đổi dạng dữ liệu</div>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-xl flex flex-col justify-between">
              <div>
                <div className="flex justify-center gap-1 mb-2 text-emerald-600"><Monitor className="w-6 h-6" /><Printer className="w-6 h-6" /></div>
                <div className="font-bold text-emerald-900 text-sm">Thiết bị RA (Output)</div>
                <p className="text-xs text-emerald-800 mt-1 font-medium">Màn hình, máy in, loa, máy chiếu (projector)...</p>
              </div>
              <div className="mt-2 pt-2 border-t border-emerald-200/80 text-[11px] font-semibold text-emerald-700">← Xuất kết quả cho con người</div>
            </div>
          </div>
          <div className="mt-3 text-center text-xs text-slate-600 bg-white p-2 rounded-lg border border-slate-200 font-medium">
            💡 <strong>Thiết bị vừa VÀO vừa RA:</strong> Màn hình cảm ứng (Touchscreen), tai nghe kèm micro.
          </div>
        </div>
      );

    case 'lesson_1_2':
      return (
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-2">
          <h4 className="text-sm font-bold text-slate-800 mb-3 text-center flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Minh họa 2: Quy tắc An toàn khi sử dụng & Vệ sinh thiết bị Máy tính</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-xl">
              <div className="font-bold text-emerald-900 flex items-center mb-2 text-sm">
                <CheckCircle2 className="w-4 h-4 mr-1.5 text-emerald-600 shrink-0" />
                <span>NÊN LÀM (An toàn)</span>
              </div>
              <ul className="space-y-1.5 text-emerald-950 font-medium list-disc list-inside">
                <li>Đọc kỹ hướng dẫn sử dụng trước khi vận hành.</li>
                <li>Giữ tay khô sạch khi cắm cáp và thao tác.</li>
                <li>Tắt máy tính bằng nút <strong>Shut down</strong> trên hệ điều hành.</li>
                <li>Rút nguồn điện trước khi lau chùi vệ sinh máy.</li>
              </ul>
            </div>
            <div className="bg-rose-50 border border-rose-200 p-3 rounded-xl">
              <div className="font-bold text-rose-900 flex items-center mb-2 text-sm">
                <XCircle className="w-4 h-4 mr-1.5 text-rose-600 shrink-0" />
                <span>KHÔNG NÊN LÀM (Cố ý / Bất cẩn)</span>
              </div>
              <ul className="space-y-1.5 text-rose-950 font-medium list-disc list-inside">
                <li>Để ly nước, đồ ăn gần thiết bị máy tính.</li>
                <li>Rút phích cắm điện trực tiếp khi máy đang chạy.</li>
                <li>Dùng vật sắc nhọn đâm gõ vào màn hình.</li>
                <li>Cố tình cắm ngược chiều cổng USB / HDMI.</li>
              </ul>
            </div>
          </div>
        </div>
      );

    // ==================== BÀI 2 ====================
    case 'lesson_2_1':
      return (
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-2">
          <h4 className="text-sm font-bold text-slate-800 mb-3 text-center flex items-center justify-center gap-1.5">
            <Layers className="w-4 h-4 text-indigo-600" />
            <span>Minh họa 1: Sơ đồ Cấu trúc Phân tầng Hệ thống Máy tính</span>
          </h4>
          <div className="space-y-2.5 max-w-lg mx-auto text-xs">
            <div className="bg-slate-800 text-white p-2.5 rounded-xl text-center font-bold shadow-xs">
              🖥️ PHẦN CỨNG (Hardware: CPU, RAM, Ổ cứng, Bàn phím, Màn hình)
            </div>
            <div className="text-center text-slate-400 font-bold text-xs">↓ Quản lý & điều khiển thiết bị</div>
            <div className="bg-indigo-600 text-white p-2.5 rounded-xl text-center font-bold shadow-xs">
              ⚙️ HỆ ĐIỀU HÀNH (OS: Windows, macOS, Linux, Android, iOS)
            </div>
            <div className="text-center text-slate-400 font-bold text-xs">↓ Môi trường chạy phần mềm</div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <div className="bg-white border border-indigo-200 p-2 rounded-lg text-center font-bold text-indigo-900 shadow-2xs">
                MS Word
              </div>
              <div className="bg-white border border-indigo-200 p-2 rounded-lg text-center font-bold text-indigo-900 shadow-2xs">
                MS Excel
              </div>
              <div className="bg-white border border-indigo-200 p-2 rounded-lg text-center font-bold text-indigo-900 shadow-2xs">
                PowerPoint
              </div>
              <div className="bg-white border border-indigo-200 p-2 rounded-lg text-center font-bold text-indigo-900 shadow-2xs">
                Chrome/Browser
              </div>
            </div>
          </div>
        </div>
      );

    case 'lesson_2_2':
      return (
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-2">
          <h4 className="text-sm font-bold text-slate-800 mb-3 text-center flex items-center justify-center gap-1.5">
            <Cpu className="w-4 h-4 text-purple-600" />
            <span>Minh họa 2: So sánh Hệ điều hành vs Phần mềm ứng dụng</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="bg-indigo-50 border border-indigo-200 p-3 rounded-xl">
              <div className="font-bold text-indigo-900 mb-1.5 text-sm">⚙️ Hệ điều hành (System Software)</div>
              <p className="text-indigo-950 font-medium mb-2">Là phần mềm nền tảng bắt buộc phải có để máy tính hoạt động được.</p>
              <div className="bg-white p-2 rounded-lg text-slate-800 font-semibold border border-indigo-100 space-y-1">
                <div>• Quản lý bộ nhớ, CPU, thiết bị ngoại vi</div>
                <div>• Cung cấp giao diện làm việc (Cửa sổ, Icon)</div>
                <div>• Ví dụ: Windows 11, macOS, Android, iOS</div>
              </div>
            </div>
            <div className="bg-purple-50 border border-purple-200 p-3 rounded-xl">
              <div className="font-bold text-purple-900 mb-1.5 text-sm">📱 Phần mềm ứng dụng (App Software)</div>
              <p className="text-purple-950 font-medium mb-2">Chạy trên nền hệ điều hành để phục vụ nhu cầu cụ thể của con người.</p>
              <div className="bg-white p-2 rounded-lg text-slate-800 font-semibold border border-purple-100 space-y-1">
                <div>• Soạn thảo văn bản, tính toán, làm slide</div>
                <div>• Duyệt web, học tập trực tuyến, giải trí</div>
                <div>• Ví dụ: Word, Excel, Scratch, Zoom, Chrome</div>
              </div>
            </div>
          </div>
        </div>
      );

    // ==================== BÀI 3 ====================
    case 'lesson_3_1':
      return (
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-2">
          <h4 className="text-sm font-bold text-slate-800 mb-3 text-center flex items-center justify-center gap-1.5">
            <Folder className="w-4 h-4 text-amber-500" />
            <span>Minh họa 1: Mô phỏng Cấu trúc Cây thư mục (Folder Tree)</span>
          </h4>
          <div className="font-mono text-xs bg-white border border-slate-200 p-3.5 rounded-xl text-slate-800 space-y-1.5 shadow-2xs">
            <div className="flex items-center text-blue-700 font-bold"><HardDrive className="w-4 h-4 mr-1.5" /> Ổ đĩa C:\ (Thư mục gốc)</div>
            <div className="pl-4 border-l-2 border-slate-200 ml-2 space-y-1.5">
              <div className="flex items-center text-amber-600 font-bold"><Folder className="w-4 h-4 mr-1.5 text-amber-500 fill-amber-100" /> DuLich (Thư mục cha)</div>
              <div className="pl-6 border-l-2 border-slate-200 ml-2 space-y-1.5">
                <div className="flex items-center text-amber-700 font-semibold"><Folder className="w-4 h-4 mr-1.5 text-amber-500 fill-amber-100" /> PhongNha (Thư mục con)</div>
                <div className="pl-6 border-l-2 border-slate-200 ml-2 space-y-1">
                  <div className="flex items-center text-slate-700 font-medium"><FileText className="w-3.5 h-3.5 mr-1.5 text-blue-500" /> DongThienDuong.jpg (Tệp tin)</div>
                  <div className="flex items-center text-slate-700 font-medium"><FileText className="w-3.5 h-3.5 mr-1.5 text-emerald-500" /> NhatKyChuyenDi.docx (Tệp tin)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case 'lesson_3_2':
      return (
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-2">
          <h4 className="text-sm font-bold text-slate-800 mb-3 text-center flex items-center justify-center gap-1.5">
            <Lock className="w-4 h-4 text-indigo-600" />
            <span>Minh họa 2: Sơ đồ Bảo vệ Tài khoản & Quy trình Sao lưu Dữ liệu</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="bg-white border border-slate-200 p-3 rounded-xl">
              <div className="font-bold text-indigo-900 mb-1 flex items-center"><ShieldCheck className="w-4 h-4 text-indigo-600 mr-1" /> Mật khẩu tài khoản mạnh</div>
              <p className="text-slate-700 font-medium mb-1.5">Tối thiểu 8 ký tự bao gồm:</p>
              <div className="bg-indigo-50 p-2 rounded-lg font-mono text-indigo-900 font-bold text-[11px] text-center">
                Chữ HOA + Chữ thường + Số + Ký tự đặc biệt<br/>
                <span className="text-indigo-600 font-normal italic">(Ví dụ: HocSinh7A@2026)</span>
              </div>
            </div>
            <div className="bg-white border border-slate-200 p-3 rounded-xl">
              <div className="font-bold text-emerald-900 mb-1 flex items-center"><HardDrive className="w-4 h-4 text-emerald-600 mr-1" /> Phương thức Sao lưu (Backup)</div>
              <p className="text-slate-700 font-medium mb-1.5">Sao chép dữ liệu quan trọng ra:</p>
              <div className="bg-emerald-50 p-2 rounded-lg font-semibold text-emerald-900 text-[11px] text-center space-y-0.5">
                <div>• Ô đĩa ngoài / Tẻ nhớ / USB Flash</div>
                <div>• Dịch vụ Đám mây (Google Drive / OneDrive)</div>
              </div>
            </div>
          </div>
        </div>
      );

    // ==================== BÀI 4 ====================
    case 'lesson_4_1':
      return (
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-2">
          <h4 className="text-sm font-bold text-slate-800 mb-3 text-center flex items-center justify-center gap-1.5">
            <Share2 className="w-4 h-4 text-blue-600" />
            <span>Minh họa 1: Các Kênh Trao đổi Thông tin chính trên Internet</span>
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="bg-white border border-blue-200 p-3 rounded-xl text-center">
              <Share2 className="w-6 h-6 text-blue-600 mx-auto mb-1" />
              <div className="font-bold text-blue-900 text-sm">Mạng xã hội</div>
              <p className="text-slate-600 mt-1 font-medium">Facebook, Zalo, YouTube... Trao đổi đa phương tiện, giao lưu cộng đồng rộng lớn.</p>
            </div>
            <div className="bg-white border border-emerald-200 p-3 rounded-xl text-center">
              <Mail className="w-6 h-6 text-emerald-600 mx-auto mb-1" />
              <div className="font-bold text-emerald-900 text-sm">Thư điện tử (Email)</div>
              <p className="text-slate-600 mt-1 font-medium">Gmail, Outlook... Gửi nhận thư kèm tệp chính thức, bảo mật cao.</p>
            </div>
            <div className="bg-white border border-purple-200 p-3 rounded-xl text-center">
              <MessageSquare className="w-6 h-6 text-purple-600 mx-auto mb-1" />
              <div className="font-bold text-purple-900 text-sm">Diễn đàn (Forum)</div>
              <p className="text-slate-600 mt-1 font-medium">Diễn đàn học tập, Scratch... Thảo luận chuyên sâu theo chủ đề cụ thể.</p>
            </div>
          </div>
        </div>
      );

    case 'lesson_4_2':
      return (
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-2">
          <h4 className="text-sm font-bold text-slate-800 mb-3 text-center flex items-center justify-center gap-1.5">
            <MessageSquare className="w-4 h-4 text-purple-600" />
            <span>Minh họa 2: Các Tính năng & Tương tác trên Mạng xã hội</span>
          </h4>
          <div className="bg-white border border-slate-200 p-3 rounded-xl text-xs space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2 bg-indigo-50 p-2 rounded-lg font-bold text-indigo-900">
              <span>Định dạng nội dung đăng bài:</span>
              <span className="text-indigo-700">Văn bản • Hình ảnh • Video • Phát trực tiếp (Live)</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center font-bold">
              <div className="bg-blue-50 border border-blue-200 p-2 rounded-lg text-blue-800">👍 Thích (Like)</div>
              <div className="bg-emerald-50 border border-emerald-200 p-2 rounded-lg text-emerald-800">💬 Bình luận</div>
              <div className="bg-purple-50 border border-purple-200 p-2 rounded-lg text-purple-800">🔄 Chia sẻ (Share)</div>
              <div className="bg-amber-50 border border-amber-200 p-2 rounded-lg text-amber-800">📩 Nhắn tin nhóm</div>
            </div>
          </div>
        </div>
      );

    // ==================== BÀI 5 ====================
    case 'lesson_5_1':
      return (
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-2">
          <h4 className="text-sm font-bold text-slate-800 mb-3 text-center flex items-center justify-center gap-1.5">
            <UserCheck className="w-4 h-4 text-emerald-600" />
            <span>Minh họa 1: Quy tắc Văn hóa Ứng xử trên Mạng (Netiquette)</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-xl">
              <div className="font-bold text-emerald-900 mb-1.5 flex items-center"><Check className="w-4 h-4 text-emerald-600 mr-1" /> ỨNG XỬ CÓ VĂN HÓA</div>
              <ul className="space-y-1 text-emerald-950 font-medium list-disc list-inside">
                <li>Sử dụng ngôn từ lịch sự, văn minh, tôn trọng người đọc.</li>
                <li>Biết lắng nghe, chia sẻ thông tin bổ ích đã kiểm chứng.</li>
                <li>Tôn trọng bản quyền tác giả khi dùng bài viết, hình ảnh.</li>
              </ul>
            </div>
            <div className="bg-rose-50 border border-rose-200 p-3 rounded-xl">
              <div className="font-bold text-rose-900 mb-1.5 flex items-center"><XCircle className="w-4 h-4 text-rose-600 mr-1" /> HÀNH VI CẦN TRÁNH</div>
              <ul className="space-y-1 text-rose-950 font-medium list-disc list-inside">
                <li>Nói xấu, chửi thề, lăng mạ hoặc đe dọa người khác.</li>
                <li>Chia sẻ tin giả, tin đồn thất thiệt chưa xác minh.</li>
                <li>Tự ý đăng ảnh/thông tin cá nhân của bạn bè lên mạng.</li>
              </ul>
            </div>
          </div>
        </div>
      );

    case 'lesson_5_2':
      return (
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-2">
          <h4 className="text-sm font-bold text-slate-800 mb-3 text-center flex items-center justify-center gap-1.5">
            <AlertTriangle className="w-4 h-4 text-amber-500" />
            <span>Minh họa 2: Sơ đồ Nhận diện Cạm bẫy & Xử lý Bắt nạt Mạng (Cyberbullying)</span>
          </h4>
          <div className="bg-white border border-slate-200 p-3 rounded-xl text-xs space-y-2">
            <div className="bg-amber-50 border border-amber-200 p-2.5 rounded-lg text-amber-900 font-semibold">
              ⚠️ <strong>Cạm bẫy Internet phổ biến:</strong> Tin nhắn lừa đảo trúng thưởng, liên kết lạ chứa mã độc, tài khoản giả mạo tiếp cận kết bạn.
            </div>
            <div className="bg-indigo-50 border border-indigo-200 p-2.5 rounded-lg text-indigo-900 font-bold text-center">
              🆘 Khi bị Bắt nạt hoặc Đe dọa trên Mạng:
              <span className="block font-normal text-slate-800 mt-1">1. Không trả lời bình luận kích động • 2. Lưu lại bằng chứng hình ảnh • 3. Báo ngay cho Cha mẹ, Thầy cô giáo</span>
            </div>
          </div>
        </div>
      );

    // ==================== BÀI 6 ====================
    case 'lesson_6_1':
      return (
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-2 overflow-x-auto">
          <h4 className="text-sm font-bold text-slate-800 mb-2 text-center flex items-center justify-center gap-1.5">
            <Table className="w-4 h-4 text-indigo-600" />
            <span>Minh họa 1: Mô phỏng Giao diện Bảng tính Excel</span>
          </h4>
          <div className="min-w-[420px] border border-slate-300 rounded-lg text-xs bg-white font-mono shadow-2xs">
            <div className="bg-slate-100 border-b border-slate-300 p-1.5 flex items-center text-slate-700">
              <span className="bg-white px-2 py-0.5 border border-slate-300 rounded font-bold mr-2 text-indigo-700">Hộp địa chỉ: B2</span>
              <span className="text-slate-500 italic">Thanh công thức (fx):</span>
              <span className="bg-white px-2 py-0.5 border border-slate-300 rounded ml-2 flex-1 text-slate-900 font-sans font-medium">BẢNG ĐIỂM LỚP 7A</span>
            </div>
            <table className="w-full border-collapse text-center">
              <thead>
                <tr className="bg-slate-200 border-b border-slate-300 text-slate-700 font-bold">
                  <th className="border-r border-slate-300 px-2 py-1 w-8"></th>
                  <th className="border-r border-slate-300 px-3 py-1">A (Cột A)</th>
                  <th className="border-r border-slate-300 px-3 py-1">B (Cột B)</th>
                  <th className="border-r border-slate-300 px-3 py-1">C (Cột C)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200">
                  <td className="bg-slate-200 border-r border-slate-300 font-bold text-slate-700">1</td>
                  <td className="border-r border-slate-200 p-1 text-left font-bold text-indigo-900" colSpan={3}>BẢNG ĐIỂM LỚP 7A</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="bg-slate-200 border-r border-slate-300 font-bold text-slate-700">2 (Hàng 2)</td>
                  <td className="border-r border-slate-200 p-1 bg-amber-100 font-bold text-slate-800">STT</td>
                  <td className="border-r border-slate-200 p-1 bg-indigo-200 font-bold text-indigo-950">Họ và tên (Ô B2)</td>
                  <td className="p-1 bg-amber-100 font-bold text-slate-800">ĐTB</td>
                </tr>
                <tr>
                  <td className="bg-slate-200 border-r border-slate-300 font-bold text-slate-700">3</td>
                  <td className="border-r border-slate-200 p-1 text-right">1</td>
                  <td className="border-r border-slate-200 p-1 text-left">Nguyễn Văn An</td>
                  <td className="p-1 text-right">9.2</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );

    case 'lesson_6_2':
      return (
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-2">
          <h4 className="text-sm font-bold text-slate-800 mb-3 text-center flex items-center justify-center gap-1.5">
            <Type className="w-4 h-4 text-emerald-600" />
            <span>Minh họa 2: Sơ đồ Quy tắc Căn lề dữ liệu Tự động</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="bg-blue-50 border border-blue-200 p-3 rounded-xl">
              <div className="font-bold text-blue-900 mb-1">📝 Dữ liệu KÝ TỰ / VĂN BẢN</div>
              <div className="bg-white p-2 rounded-lg font-mono font-bold text-slate-800 border border-blue-100">
                Lớp 7A1, Nguyễn Văn An, Toán...
              </div>
              <p className="text-blue-800 text-[11px] mt-1.5 font-semibold">→ Tự động CĂN TRÁI trong ô</p>
            </div>
            <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-xl">
              <div className="font-bold text-emerald-900 mb-1">🔢 Dữ liệu SỐ & NGÀY THÁNG</div>
              <div className="bg-white p-2 rounded-lg font-mono font-bold text-right text-slate-800 border border-emerald-100">
                150000, 9.5, 20/11/2026
              </div>
              <p className="text-emerald-800 text-[11px] mt-1.5 font-semibold">→ Tự động CĂN PHẢI trong ô</p>
            </div>
          </div>
        </div>
      );

    // ==================== BÀI 7 ====================
    case 'lesson_7_1':
      return (
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-2">
          <h4 className="text-sm font-bold text-slate-800 mb-3 text-center flex items-center justify-center gap-1.5">
            <Calculator className="w-4 h-4 text-indigo-600" />
            <span>Minh họa 1: Cú pháp Nhập Công thức & Ký hiệu Phép toán</span>
          </h4>
          <div className="bg-white border border-slate-200 p-3 rounded-xl text-xs space-y-2">
            <div className="bg-indigo-50 border border-indigo-200 p-2.5 rounded-lg text-center font-bold text-indigo-900">
              Cú pháp bắt buộc: <span className="font-mono bg-white px-2 py-0.5 rounded text-indigo-700 border border-indigo-300 font-bold ml-1">= (Dấu Bằng bắt đầu)</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5 text-center font-mono font-bold text-slate-800">
              <div className="bg-slate-100 p-2 rounded-lg">+ (Cộng)</div>
              <div className="bg-slate-100 p-2 rounded-lg">- (Trừ)</div>
              <div className="bg-slate-100 p-2 rounded-lg">* (Nhân)</div>
              <div className="bg-slate-100 p-2 rounded-lg">/ (Chia)</div>
              <div className="bg-slate-100 p-2 rounded-lg">^ (Lũy thừa)</div>
            </div>
          </div>
        </div>
      );

    case 'lesson_7_2':
      return (
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-2">
          <h4 className="text-sm font-bold text-slate-800 mb-3 text-center flex items-center justify-center gap-1.5">
            <RefreshCw className="w-4 h-4 text-emerald-600" />
            <span>Minh họa 2: So sánh Tính bằng Số trực tiếp vs Địa chỉ ô</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="bg-slate-100 border border-slate-300 p-3 rounded-xl text-center">
              <div className="font-bold text-slate-700 mb-1">Nhập số trực tiếp</div>
              <div className="font-mono font-bold text-slate-900 bg-white p-2 rounded-lg border border-slate-300 mb-1">= 5000 * 3</div>
              <p className="text-slate-500 text-[11px]">Cố định, không tự cập nhật khi số thay đổi</p>
            </div>
            <div className="bg-emerald-50 border border-emerald-300 p-3 rounded-xl text-center">
              <div className="font-bold text-emerald-900 mb-1">Dùng Địa chỉ ô (Khuyên dùng)</div>
              <div className="font-mono font-bold text-emerald-800 bg-white p-2 rounded-lg border border-emerald-300 mb-1">= C4 * D4</div>
              <p className="text-emerald-700 text-[11px] font-bold">✨ Tự động cập nhật kết quả khi thay đổi dữ liệu!</p>
            </div>
          </div>
        </div>
      );

    // ==================== BÀI 8 ====================
    case 'lesson_8_1':
      return (
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-2">
          <h4 className="text-sm font-bold text-slate-800 mb-3 text-center flex items-center justify-center gap-1.5">
            <FileSpreadsheet className="w-4 h-4 text-indigo-600" />
            <span>Minh họa 1: Bảng 5 Hàm Tính toán Cơ bản trong Excel</span>
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs">
            <div className="bg-blue-50 border border-blue-200 p-2.5 rounded-xl text-center">
              <div className="font-mono font-bold text-blue-900 text-sm">=SUM</div>
              <div className="text-blue-800 text-[11px] font-medium mt-1">Tính tổng</div>
            </div>
            <div className="bg-emerald-50 border border-emerald-200 p-2.5 rounded-xl text-center">
              <div className="font-mono font-bold text-emerald-900 text-sm">=AVERAGE</div>
              <div className="text-emerald-800 text-[11px] font-medium mt-1">Tính trung bình</div>
            </div>
            <div className="bg-purple-50 border border-purple-200 p-2.5 rounded-xl text-center">
              <div className="font-mono font-bold text-purple-900 text-sm">=MAX</div>
              <div className="text-purple-800 text-[11px] font-medium mt-1">Lớn nhất</div>
            </div>
            <div className="bg-amber-50 border border-amber-200 p-2.5 rounded-xl text-center">
              <div className="font-mono font-bold text-amber-900 text-sm">=MIN</div>
              <div className="text-amber-800 text-[11px] font-medium mt-1">Nhỏ nhất</div>
            </div>
            <div className="bg-rose-50 border border-rose-200 p-2.5 rounded-xl text-center col-span-2 sm:col-span-1">
              <div className="font-mono font-bold text-rose-900 text-sm">=COUNT</div>
              <div className="text-rose-800 text-[11px] font-medium mt-1">Đếm ô chứa số</div>
            </div>
          </div>
        </div>
      );

    case 'lesson_8_2':
      return (
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-2">
          <h4 className="text-sm font-bold text-slate-800 mb-3 text-center flex items-center justify-center gap-1.5">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>Minh họa 2: Ví dụ Trực quan Ứng dụng Hàm tính Điểm trung bình môn</span>
          </h4>
          <div className="bg-white border border-slate-200 p-3 rounded-xl text-xs space-y-2">
            <div className="font-mono bg-slate-100 p-2 rounded-lg text-slate-800">
              Công thức ĐTB môn Toán: <span className="font-bold text-indigo-700">=AVERAGE(C3:E3)</span>
            </div>
            <div className="font-mono bg-slate-100 p-2 rounded-lg text-slate-800">
              Công thức Điểm cao nhất lớp: <span className="font-bold text-emerald-700">=MAX(F3:F35)</span>
            </div>
          </div>
        </div>
      );

    // ==================== BÀI 9 ====================
    case 'lesson_9_1':
      return (
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-2">
          <h4 className="text-sm font-bold text-slate-800 mb-3 text-center flex items-center justify-center gap-1.5">
            <Sliders className="w-4 h-4 text-indigo-600" />
            <span>Minh họa 1: Các Thao tác Chèn / Xóa Hàng & Cột</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="bg-indigo-50 border border-indigo-200 p-3 rounded-xl">
              <div className="font-bold text-indigo-900 mb-1">➕ Chèn thêm Hàng / Cột</div>
              <p className="text-indigo-950 font-medium">Nhấp chuột phải vào tên hàng hoặc tên cột → Chọn <strong>Insert</strong>.</p>
            </div>
            <div className="bg-rose-50 border border-rose-200 p-3 rounded-xl">
              <div className="font-bold text-rose-900 mb-1">❌ Xóa Hàng / Cột</div>
              <p className="text-rose-950 font-medium">Nhấp chuột phải vào tên hàng hoặc tên cột → Chọn <strong>Delete</strong>.</p>
            </div>
          </div>
        </div>
      );

    case 'lesson_9_2':
      return (
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-2">
          <h4 className="text-sm font-bold text-slate-800 mb-3 text-center flex items-center justify-center gap-1.5">
            <Grid className="w-4 h-4 text-purple-600" />
            <span>Minh họa 2: Công cụ Định dạng Font chữ, Màu nền & Căn giữa ô</span>
          </h4>
          <div className="bg-white border border-slate-200 p-3 rounded-xl text-xs space-y-2">
            <div className="flex flex-wrap items-center justify-around gap-2 font-bold text-slate-800">
              <span className="bg-slate-100 px-2 py-1 rounded border">B (Đậm)</span>
              <span className="bg-slate-100 px-2 py-1 rounded border italic">I (Nghiêng)</span>
              <span className="bg-slate-100 px-2 py-1 rounded border underline">U (Gạch chân)</span>
              <span className="bg-amber-100 px-2 py-1 rounded border text-amber-900">🎨 Fill Color</span>
              <span className="bg-indigo-100 px-2 py-1 rounded border text-indigo-900">🔲 Merge & Center</span>
            </div>
          </div>
        </div>
      );

    // ==================== BÀI 10 ====================
    case 'lesson_10_1':
      return (
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-2">
          <h4 className="text-sm font-bold text-slate-800 mb-3 text-center flex items-center justify-center gap-1.5">
            <ArrowDown className="w-4 h-4 text-indigo-600" />
            <span>Minh họa 1: Sơ đồ Khối (Flowchart) Thuật toán Tìm kiếm Tuần tự</span>
          </h4>
          <div className="flex flex-col items-center space-y-2 text-xs font-mono max-w-sm mx-auto">
            <div className="bg-slate-800 text-white px-4 py-1 rounded-full font-bold">Bắt đầu</div>
            <div className="text-slate-400">↓</div>
            <div className="bg-white border border-slate-300 p-2 rounded-lg text-center w-full">Xem phần tử i từ đầu danh sách</div>
            <div className="text-slate-400">↓</div>
            <div className="bg-amber-100 border border-amber-300 p-2 rounded-lg text-center font-bold text-amber-900 w-full">So sánh A[i] với X</div>
            <div className="grid grid-cols-2 gap-2 w-full pt-1">
              <div className="bg-emerald-50 border border-emerald-300 p-2 rounded-lg text-center font-bold text-emerald-800">Bằng: Tìm thấy!</div>
              <div className="bg-slate-100 border border-slate-300 p-2 rounded-lg text-center text-slate-700">Khác: i = i + 1</div>
            </div>
          </div>
        </div>
      );

    case 'lesson_10_2':
      return (
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-2">
          <h4 className="text-sm font-bold text-slate-800 mb-3 text-center flex items-center justify-center gap-1.5">
            <Eye className="w-4 h-4 text-blue-600" />
            <span>Minh họa 2: Mô phỏng Các bước Tìm kiếm Tuần tự số X = 8</span>
          </h4>
          <div className="flex justify-center gap-1 font-mono text-xs font-bold my-2">
            <span className="bg-white border p-2 rounded-lg">3</span>
            <span className="bg-white border p-2 rounded-lg">15</span>
            <span className="bg-indigo-600 text-white p-2 rounded-lg shadow-md">8 (Thấy)</span>
            <span className="bg-white border p-2 rounded-lg">2</span>
          </div>
          <p className="text-center text-xs text-slate-600 font-medium">Kiểm tra lần lượt 3 → 15 → 8. Tìm thấy tại vị trí thứ 3!</p>
        </div>
      );

    // ==================== BÀI 11 ====================
    case 'lesson_11_1':
      return (
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-2">
          <h4 className="text-sm font-bold text-slate-800 mb-3 text-center flex items-center justify-center gap-1.5">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span>Minh họa 1: Sơ đồ Nguyên lý Thuật toán Tìm kiếm Nhị phân</span>
          </h4>
          <div className="bg-amber-50 border border-amber-300 p-2.5 rounded-xl text-center text-amber-900 font-bold text-xs mb-2">
            ⚠️ ĐIỀU KIỆN BẮT BUỘC: Dãy số ĐÃ ĐƯỢC SẮP XẾP!
          </div>
          <div className="text-xs text-slate-700 bg-white border border-slate-200 p-3 rounded-xl space-y-1 font-medium">
            <div>1. Lấy vị trí <strong>ở giữa (Mid)</strong> để so sánh với X.</div>
            <div>2. Nếu A[Mid] == X: Tìm thấy và dừng.</div>
            <div>3. Nếu X &lt; A[Mid]: Tiếp tục tìm ở nửa BÊN TRÁI.</div>
            <div>4. Nếu X &gt; A[Mid]: Tiếp tục tìm ở nửa BÊN PHẢI.</div>
          </div>
        </div>
      );

    case 'lesson_11_2':
      return (
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-2">
          <h4 className="text-sm font-bold text-slate-800 mb-3 text-center flex items-center justify-center gap-1.5">
            <Layers className="w-4 h-4 text-emerald-600" />
            <span>Minh họa 2: Mô phỏng Các bước Chia đôi Dãy số (Binary Search)</span>
          </h4>
          <div className="flex justify-center gap-1 font-mono text-xs font-bold mb-2">
            <span className="bg-slate-200 text-slate-400 p-1.5 rounded">2</span>
            <span className="bg-slate-200 text-slate-400 p-1.5 rounded">5</span>
            <span className="bg-indigo-600 text-white p-1.5 rounded">11 (Mid)</span>
            <span className="bg-emerald-100 text-emerald-900 p-1.5 rounded">18</span>
            <span className="bg-emerald-100 text-emerald-900 p-1.5 rounded">25</span>
          </div>
          <p className="text-center text-xs text-slate-600 font-medium">Tìm X = 18. Do 18 &gt; 11, BỎ HẲN nửa bên trái (2, 5), chỉ tìm nửa bên phải!</p>
        </div>
      );

    // ==================== BÀI 12 ====================
    case 'lesson_12_1':
      return (
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-2">
          <h4 className="text-sm font-bold text-slate-800 mb-3 text-center flex items-center justify-center gap-1.5">
            <RefreshCw className="w-4 h-4 text-indigo-600" />
            <span>Minh họa 1: Sơ đồ Nguyên lý Sắp xếp Nổi bọt (Bubble Sort)</span>
          </h4>
          <div className="bg-white border border-slate-200 p-3 rounded-xl text-xs text-slate-800 space-y-1.5">
            <p className="font-semibold text-indigo-900">• So sánh từng cặp phần tử LIỀN KỀ $A[i]$ và $A[i+1]$.</p>
            <p className="font-semibold text-indigo-900">• Nếu sai thứ tự (vd: A[i] &gt; A[i+1] khi xếp tăng) → ĐỔI CHỖ ngay.</p>
            <p className="font-semibold text-indigo-900">• Lặp lại các lượt cho đến khi không còn cặp nào bị ngược.</p>
          </div>
        </div>
      );

    case 'lesson_12_2':
      return (
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-2">
          <h4 className="text-sm font-bold text-slate-800 mb-3 text-center flex items-center justify-center gap-1.5">
            <ArrowRight className="w-4 h-4 text-emerald-600" />
            <span>Minh họa 2: Mô phỏng Lượt nổi bọt đưa phần tử Lớn nhất về Cuối</span>
          </h4>
          <div className="bg-indigo-50 border border-indigo-200 p-2.5 rounded-xl font-mono text-xs font-bold text-indigo-900 text-center">
            [5, 2, 8, 1] → [2, 5, 8, 1] → [2, 5, 1, <span className="bg-indigo-600 text-white px-1.5 py-0.5 rounded">8</span>]
          </div>
          <p className="text-center text-xs text-slate-500 mt-1.5">Số 8 lớn nhất đã "nổi" thành công về đúng vị trí cuối dãy!</p>
        </div>
      );

    // ==================== BÀI 13 ====================
    case 'lesson_13_1':
      return (
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-2">
          <h4 className="text-sm font-bold text-slate-800 mb-3 text-center flex items-center justify-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Minh họa 1: Sơ đồ Nguyên lý Sắp xếp Chọn (Selection Sort)</span>
          </h4>
          <div className="bg-white border border-slate-200 p-3 rounded-xl text-xs space-y-1.5 text-slate-800">
            <p className="font-semibold text-emerald-900">• Tìm phần tử NHỎ NHẤT trong phần chưa sắp xếp.</p>
            <p className="font-semibold text-emerald-900">• Đổi chỗ phần tử nhỏ nhất đó về đầu vị trí chưa sắp xếp.</p>
            <p className="font-semibold text-emerald-900">• Thu hẹp phạm vi chưa sắp xếp cho đến hết dãy.</p>
          </div>
        </div>
      );

    case 'lesson_13_2':
      return (
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-2">
          <h4 className="text-sm font-bold text-slate-800 mb-3 text-center flex items-center justify-center gap-1.5">
            <Table className="w-4 h-4 text-indigo-600" />
            <span>Minh họa 2: Bảng Báo cáo So sánh 2 Thuật toán Sắp xếp</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="bg-indigo-50 border border-indigo-200 p-3 rounded-xl">
              <div className="font-bold text-indigo-900 mb-1">🌊 Sắp xếp Nổi bọt (Bubble Sort)</div>
              <p className="text-slate-700 font-medium">So sánh các cặp liền kề $A[i], A[i+1]$ và đổi chỗ liên tục.</p>
            </div>
            <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-xl">
              <div className="font-bold text-emerald-900 mb-1">🎯 Sắp xếp Chọn (Selection Sort)</div>
              <p className="text-slate-700 font-medium">Tìm giá trị nhỏ nhất trong dãy rồi đổi chỗ 1 lần về vị trí đầu.</p>
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-2 text-center text-xs text-slate-500">
          <Lightbulb className="w-6 h-6 mx-auto text-amber-500 mb-1" />
          <span>Hình ảnh minh họa kiến thức trọng tâm bài học</span>
        </div>
      );
  }
};
