import React from 'react';
import { BookOpen, User, Phone, Award, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  onOpenAdmin: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAdmin }) => {
  return (
    <header className="relative bg-gradient-to-r from-indigo-900 via-indigo-800 to-slate-900 text-white rounded-2xl shadow-xl overflow-hidden mb-6 border border-indigo-700/50">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      
      <div className="relative z-10 p-5 sm:p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-3 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-200 border border-indigo-400/30 text-xs font-semibold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
            Môn Tin học Lớp 7 - Chương trình mới
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
            ÔN TẬP & CỦNG CỐ KIẾN THỨC TIN HỌC 7
          </h1>

          <p className="text-amber-300 font-bold text-sm sm:text-base tracking-wide bg-amber-400/10 px-3.5 py-1.5 rounded-lg border border-amber-400/20 inline-block">
            “HỌC ĐỂ BIẾT – HỌC ĐỂ LÀM – HỌC ĐỂ TỰ KHẲNG ĐỊNH MÌNH – HỌC ĐỂ CÙNG CHUNG SỐNG”
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-300 pt-1">
            <div className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>
                Giáo viên <strong className="text-white">Trần Văn Nam</strong> - Trường THCS Tiến Hưng, phường Bình Phước, TP Đồng Nai
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-300">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Điện thoại: <strong className="text-white">0974191944</strong></span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0 self-end md:self-auto">
          <button
            onClick={onOpenAdmin}
            className="flex items-center gap-2 bg-indigo-600/80 hover:bg-indigo-500 text-white font-medium px-4 py-2.5 rounded-xl border border-indigo-400/30 shadow-lg hover:shadow-indigo-500/20 transition-all text-xs sm:text-sm cursor-pointer font-bold"
            title="Dành cho Giáo viên Quản trị"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-300" />
            <span>QUẢN TRỊ</span>
          </button>
        </div>
      </div>
    </header>
  );
};
