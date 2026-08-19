import React, { useState, useEffect } from 'react';
import { THEMES } from '../data/themes';
import { getLessonsByThemeId } from '../data/lessons';
import { Folder, BookOpen, User, Edit3, CheckCircle2, X, Lock, Eye, EyeOff } from 'lucide-react';

interface StudentMenuBarProps {
  studentName: string;
  onStudentNameChange: (name: string) => void;
  studentClass: string;
  onStudentClassChange: (cls: string) => void;
  selectedThemeId: string;
  onSelectTheme: (themeId: string) => void;
  selectedLessonId: string;
  onSelectLesson: (lessonId: string) => void;
  activeTab: 'summary' | 'quiz';
  onSelectTab: (tab: 'summary' | 'quiz') => void;
  lockedQuizLessonId?: string | null;
  onResetQuizSession?: () => void;
  onRequestOpenInfoModal?: boolean;
  onInfoModalOpened?: () => void;
}

export const StudentMenuBar: React.FC<StudentMenuBarProps> = ({
  studentName,
  onStudentNameChange,
  studentClass,
  onStudentClassChange,
  selectedThemeId,
  onSelectTheme,
  selectedLessonId,
  onSelectLesson,
  activeTab,
  onSelectTab,
  lockedQuizLessonId,
  onResetQuizSession,
  onRequestOpenInfoModal,
  onInfoModalOpened,
}) => {
  const currentLessons = getLessonsByThemeId(selectedThemeId);

  // Modal State for Student Info Prompt on Lesson Select or Quiz Tab Click
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [pendingLessonId, setPendingLessonId] = useState<string | null>(null);
  const [pendingTab, setPendingTab] = useState<'summary' | 'quiz' | null>(null);
  const [modalName, setModalName] = useState(studentName);
  const [modalClass, setModalClass] = useState(studentClass);
  const [modalPassword, setModalPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [modalError, setModalError] = useState('');

  useEffect(() => {
    if (onRequestOpenInfoModal) {
      setModalName(studentName);
      setModalClass(studentClass);
      setModalError('');
      setShowInfoModal(true);
      if (onInfoModalOpened) onInfoModalOpened();
    }
  }, [onRequestOpenInfoModal]);

  useEffect(() => {
    setModalName(studentName);
  }, [studentName]);

  useEffect(() => {
    setModalClass(studentClass);
  }, [studentClass]);

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newThemeId = e.target.value;
    onSelectTheme(newThemeId);
    const themeLessons = getLessonsByThemeId(newThemeId);
    if (themeLessons.length > 0) {
      onSelectLesson(themeLessons[0].id);
    }
  };

  const handleLessonChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLessonId = e.target.value;
    onSelectLesson(newLessonId);
  };

  const handleConfirmStudentInfo = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!modalName.trim()) {
      setModalError('Vui lòng nhập Họ và tên!');
      return;
    }
    if (!modalClass.trim()) {
      setModalError('Vui lòng nhập Lớp!');
      return;
    }
    if (modalPassword.trim() !== '12344321') {
      setModalError('Mật khẩu đăng nhập không đúng! Vui lòng nhập đúng mật khẩu.');
      return;
    }

    onStudentNameChange(modalName.trim());
    onStudentClassChange(modalClass.trim());

    if (onResetQuizSession) {
      onResetQuizSession();
    }

    if (pendingLessonId) {
      onSelectLesson(pendingLessonId);
      setPendingLessonId(null);
    }

    if (pendingTab) {
      onSelectTab(pendingTab);
      setPendingTab(null);
    }

    setShowInfoModal(false);
    setModalPassword('');
  };

  const handleTabClick = (tab: 'summary' | 'quiz') => {
    if (tab === 'quiz' && (!studentName.trim() || !studentClass.trim())) {
      setPendingTab('quiz');
      setModalName(studentName);
      setModalClass(studentClass);
      setModalError('Vui lòng nhập Họ tên và Lớp trước khi làm bài trắc nghiệm!');
      setShowInfoModal(true);
    } else {
      onSelectTab(tab);
    }
  };

  return (
    <>
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 sm:p-5 mb-6 space-y-4">
        {/* Top Menu Controls Grid - Responsive for mobile, tablet, and desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4 items-start">
          {/* Item 1: HỌ & TÊN HS */}
          <div className="lg:col-span-3 flex flex-col">
            <label className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-tight mb-1 flex items-center justify-between">
              <span>HỌ & TÊN HS:</span>
              <button
                type="button"
                onClick={() => {
                  setPendingLessonId(selectedLessonId);
                  setModalName(studentName);
                  setModalClass(studentClass);
                  setModalError('');
                  setShowInfoModal(true);
                }}
                className="text-[11px] text-indigo-600 hover:text-indigo-800 font-bold underline cursor-pointer"
              >
                Đổi thông tin
              </button>
            </label>
            <input
              type="text"
              value={studentName}
              onChange={(e) => onStudentNameChange(e.target.value)}
              placeholder="(Ví dụ: Nguyễn Hoàng Anh)"
              className="w-full text-base sm:text-lg font-bold text-slate-800 placeholder:text-slate-400 placeholder:font-normal placeholder:italic bg-transparent border-b-2 border-slate-200 focus:border-indigo-600 focus:outline-none py-1 transition-colors"
            />
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80 text-[11px] font-semibold mt-1.5 w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Đang trực tuyến</span>
            </div>
          </div>

          {/* Item 2: LỚP */}
          <div className="lg:col-span-2 flex flex-col">
            <label className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-tight mb-1">
              LỚP:
            </label>
            <input
              type="text"
              value={studentClass}
              onChange={(e) => onStudentClassChange(e.target.value)}
              placeholder="(Ví dụ: 7A1)"
              className="w-full text-base sm:text-lg font-bold text-indigo-700 placeholder:text-slate-400 placeholder:font-normal placeholder:italic bg-transparent border-b-2 border-slate-200 focus:border-indigo-600 focus:outline-none py-1 transition-colors"
            />
          </div>

          {/* Item 3: CHỦ ĐỀ */}
          <div className="lg:col-span-3 flex flex-col">
            <label className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-tight mb-1">
              CHỦ ĐỀ:
            </label>
            <div className="relative flex items-center bg-[#f0f3ff] text-[#3b369e] border border-indigo-200/90 rounded-xl px-3 py-2 hover:border-indigo-400 transition-all shadow-xs min-h-[44px]">
              <Folder className="w-4 h-4 text-indigo-600 shrink-0 mr-1.5" />
              <select
                value={selectedThemeId}
                onChange={handleThemeChange}
                className="w-full bg-transparent font-bold text-xs sm:text-sm text-indigo-900 focus:outline-none cursor-pointer pr-2 truncate"
              >
                {THEMES.map((theme) => (
                  <option key={theme.id} value={theme.id} className="text-slate-800 font-medium">
                    {theme.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Item 4: BÀI HỌC */}
          <div className="lg:col-span-4 flex flex-col">
            <label className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-tight mb-1">
              BÀI HỌC:
            </label>
            <div className="relative flex items-center bg-[#ebfbf3] text-[#087847] border border-emerald-200/90 rounded-xl px-3 py-2 hover:border-emerald-400 transition-all shadow-xs min-h-[44px]">
              <BookOpen className="w-4 h-4 text-emerald-600 shrink-0 mr-1.5" />
              <select
                value={selectedLessonId}
                onChange={handleLessonChange}
                className="w-full bg-transparent font-bold text-xs sm:text-sm text-emerald-950 focus:outline-none cursor-pointer pr-2 truncate"
              >
                {currentLessons.map((lesson) => (
                  <option key={lesson.id} value={lesson.id} className="text-slate-800 font-medium">
                    {lesson.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Divider & Tabs */}
        <div className="border-t border-slate-200 pt-3">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm sm:text-base font-bold">
            <button
              onClick={() => handleTabClick('summary')}
              className={`pb-2 transition-all cursor-pointer min-h-[44px] flex items-center ${
                activeTab === 'summary'
                  ? 'text-indigo-700 font-extrabold border-b-2 border-indigo-700'
                  : 'text-slate-500 hover:text-slate-800 border-b-2 border-transparent'
              }`}
            >
              1. TÓM TẮT KIẾN THỨC
            </button>

            <button
              onClick={() => handleTabClick('quiz')}
              className={`pb-2 transition-all cursor-pointer flex items-center gap-2 min-h-[44px] ${
                activeTab === 'quiz'
                  ? 'text-indigo-700 font-extrabold border-b-2 border-indigo-700'
                  : 'text-slate-500 hover:text-slate-800 border-b-2 border-transparent'
              }`}
            >
              <span>2. LÀM BÀI TRẮC NGHIỆM (25 CÂU)</span>
              {lockedQuizLessonId && lockedQuizLessonId !== selectedLessonId && (
                <span className="text-[10px] sm:text-[11px] text-rose-700 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                  <Lock className="w-3 h-3 text-rose-600" />
                  Đã khóa bài khác
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Student Info Modal Prompt when selecting lesson */}
      {showInfoModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-md p-5 sm:p-6 animate-scale-up">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
              <div className="flex items-center gap-2 text-indigo-700 font-bold text-base">
                <User className="w-5 h-5 text-indigo-600 shrink-0" />
                <span>YÊU CẦU NHẬP THÔNG TIN HỌC SINH</span>
              </div>
              <button
                onClick={() => setShowInfoModal(false)}
                className="text-slate-400 hover:text-slate-700 p-1.5 rounded-lg cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-600 mb-4 leading-relaxed">
              Vui lòng nhập <strong>Họ tên</strong>, <strong>Lớp</strong> và <strong>Mật khẩu đăng nhập</strong> (12344321) để làm bài trắc nghiệm:
            </p>

            <form onSubmit={handleConfirmStudentInfo} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Họ và tên Học sinh <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={modalName}
                  onChange={(e) => {
                    setModalName(e.target.value);
                    setModalError('');
                  }}
                  placeholder="Ví dụ: Nguyễn Văn An"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-600 text-sm font-medium"
                  autoFocus
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Lớp học <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={modalClass}
                  onChange={(e) => {
                    setModalClass(e.target.value);
                    setModalError('');
                  }}
                  placeholder="Ví dụ: 7A1, 7A2..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-600 text-sm font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1 flex items-center justify-between">
                  <span>Mật khẩu đăng nhập <span className="text-rose-500">*</span></span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={modalPassword}
                    onChange={(e) => {
                      setModalPassword(e.target.value);
                      setModalError('');
                    }}
                    placeholder="Nhập mật khẩu..."
                    className="w-full pl-4 pr-11 py-2.5 rounded-xl border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-600 text-sm font-medium"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 p-1 cursor-pointer rounded-lg"
                    title={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {modalError && (
                <p className="text-xs text-rose-600 font-bold bg-rose-50 p-2.5 rounded-lg border border-rose-200">
                  {modalError}
                </p>
              )}

              <div className="pt-2 flex flex-col-reverse sm:flex-row items-center justify-end gap-2.5 sm:gap-3">
                <button
                  type="button"
                  onClick={() => setShowInfoModal(false)}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 font-bold text-xs cursor-pointer min-h-[44px]"
                >
                  Bỏ qua
                </button>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5 min-h-[44px]"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Xác nhận & Làm bài</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
