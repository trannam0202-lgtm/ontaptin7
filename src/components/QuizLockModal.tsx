import React from 'react';
import { ShieldAlert, BookOpen, Lock, UserCheck, X } from 'lucide-react';
import { Lesson } from '../types';

interface QuizLockModalProps {
  isOpen: boolean;
  onClose: () => void;
  lockedLesson: Lesson | null;
  currentLesson: Lesson;
  onGoToLockedLessonQuiz: () => void;
  onChangeStudentInfo: () => void;
}

export const QuizLockModal: React.FC<QuizLockModalProps> = ({
  isOpen,
  onClose,
  lockedLesson,
  currentLesson,
  onGoToLockedLessonQuiz,
  onChangeStudentInfo,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl border border-rose-200 w-full max-w-lg p-6 animate-scale-up space-y-5 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1.5 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 text-rose-600 border-b border-slate-100 pb-3">
          <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 font-bold">
            <Lock className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-black text-rose-950">
              GIỚI HẠN LÀM BÀI TẬP TRẮC NGHIỆM
            </h3>
            <p className="text-xs text-rose-700 font-bold">
              Mỗi lần đăng nhập, học sinh chỉ được làm 1 bài tập trắc nghiệm!
            </p>
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs space-y-2.5 text-slate-800">
          <p className="font-medium text-slate-700">
            📌 <strong>Quy định học tập:</strong> Học sinh có thể tự do xem tóm tắt kiến thức của nhiều bài học, nhưng <strong>chỉ được làm 1 bài tập trắc nghiệm</strong> trong mỗi lần đăng nhập. Bạn không thể xem bài tập của các bài học khác.
          </p>

          <div className="bg-rose-50 border border-rose-200 rounded-lg p-3 text-rose-950 space-y-1">
            <div className="font-bold flex items-center gap-1.5 text-xs text-rose-900">
              <ShieldAlert className="w-4 h-4 text-rose-600 shrink-0" />
              <span>Bài tập bạn ĐÃ CHỌN làm trong phiên này:</span>
            </div>
            <p className="font-black text-sm text-indigo-900 pl-5">
              • {lockedLesson ? lockedLesson.title : 'Bài tập đã chọn'}
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-amber-950 space-y-1">
            <div className="font-bold flex items-center gap-1.5 text-xs text-amber-900">
              <span>Bài học bạn đang muốn xem bài tập:</span>
            </div>
            <p className="font-bold text-sm text-slate-900 pl-5">
              • {currentLesson.title}
            </p>
            <p className="text-[11px] text-amber-800 font-semibold pl-5">
              ➔ Bạn KHÔNG THỂ xem hoặc làm bài tập của bài học này.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-end gap-2.5 pt-2">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold text-xs cursor-pointer transition-colors"
          >
            Đã hiểu, xem tóm tắt bài này
          </button>

          {lockedLesson && (
            <button
              onClick={onGoToLockedLessonQuiz}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5"
            >
              <BookOpen className="w-4 h-4" />
              <span>Đến bài tập đã chọn ({lockedLesson.id.replace('lesson_', 'Bài ')})</span>
            </button>
          )}

          <button
            onClick={onChangeStudentInfo}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5"
          >
            <UserCheck className="w-4 h-4" />
            <span>Đổi thông tin / Đăng xuất</span>
          </button>
        </div>
      </div>
    </div>
  );
};
