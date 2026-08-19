import React from 'react';
import { Lesson } from '../types';
import { LessonIllustration } from './Illustrations';
import { BookOpen, CheckCircle, Lightbulb, Lock } from 'lucide-react';

interface LessonSummaryProps {
  lesson: Lesson;
  onStartQuiz: () => void;
  lockedQuizLessonId?: string | null;
}

export const LessonSummary: React.FC<LessonSummaryProps> = ({ lesson, onStartQuiz, lockedQuizLessonId }) => {
  const isLockedToOther = Boolean(lockedQuizLessonId && lockedQuizLessonId !== lesson.id);

  return (
    <div className="space-y-6">
      {/* Lesson Header Banner */}
      <div className="bg-white rounded-xl border border-slate-200/90 p-6 shadow-xs relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full blur-2xl pointer-events-none -mr-10 -mt-10"></div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
          <div>
            <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full uppercase tracking-wider">
              {lesson.themeTitle}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-black mt-2">
              {lesson.title}
            </h2>
          </div>
          <button
            onClick={onStartQuiz}
            className={`inline-flex items-center justify-center gap-2 font-semibold px-5 py-3 rounded-xl shadow-md hover:shadow-lg transition-all text-sm shrink-0 cursor-pointer ${
              isLockedToOther
                ? 'bg-slate-700 hover:bg-slate-800 text-amber-200 border border-amber-500/30'
                : 'bg-indigo-600 hover:bg-indigo-700 text-white'
            }`}
          >
            {isLockedToOther ? <Lock className="w-4 h-4 text-amber-400" /> : <BookOpen className="w-4 h-4" />}
            <span>{isLockedToOther ? 'Xem trạng thái Bài tập Trắc nghiệm (Đã khóa bài khác)' : 'Làm bài Trắc nghiệm (25 câu)'}</span>
          </button>
        </div>
      </div>

      {/* Summary Sections */}
      <div className="space-y-6">
        {lesson.summary.map((section, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl border border-slate-200/90 p-6 shadow-xs hover:border-slate-300 transition-all"
          >
            <h3 className="text-lg font-bold text-black flex items-center gap-2 border-b border-slate-200 pb-3 mb-4">
              <span className="w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center text-sm font-bold">
                {idx + 1}
              </span>
              <span>{section.title}</span>
            </h3>

            <div className="space-y-4 mb-4">
              {section.content.map((paragraph, pIdx) => (
                <div key={pIdx} className="flex items-start gap-3 text-black text-[15pt] leading-relaxed font-medium">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 mt-2.5 shrink-0"></span>
                  <p className="flex-1 text-[15pt] text-black font-medium leading-relaxed">{paragraph}</p>
                </div>
              ))}
            </div>

            {/* Visual Aid Illustration - 2 illustrations per lesson corresponding to sections */}
            <div className="mt-5 p-4 bg-slate-50 rounded-xl border border-slate-200">
              <p className="text-xs font-bold text-black uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Lightbulb className="w-4 h-4 text-amber-500" />
                <span>Hình ảnh & Sơ đồ minh họa kiến thức bài học - Minh họa {idx + 1}</span>
              </p>
              <div className="overflow-x-auto">
                <LessonIllustration type={section.illustrationType || `${lesson.id}_${idx + 1}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Call to Action */}
      <div className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-bold text-indigo-950 text-base">Đã nắm vững kiến thức bài học?</h4>
          <p className="text-xs text-indigo-700 mt-0.5">
            Hãy thực hành 25 câu hỏi trắc nghiệm (Nhận biết, Thông hiểu, Đúng - Sai) để ghi điểm tốt nhất!
          </p>
        </div>
        <button
          onClick={onStartQuiz}
          className={`font-semibold px-6 py-3 rounded-xl shadow-md transition-all text-sm shrink-0 cursor-pointer flex items-center gap-2 ${
            isLockedToOther
              ? 'bg-slate-700 hover:bg-slate-800 text-amber-200 border border-amber-500/30'
              : 'bg-indigo-600 hover:bg-indigo-700 text-white'
          }`}
        >
          {isLockedToOther ? <Lock className="w-4 h-4 text-amber-400" /> : <BookOpen className="w-4 h-4" />}
          <span>{isLockedToOther ? 'Thực hành trắc nghiệm (Đã khóa bài khác)' : 'Bắt đầu ôn tập ngay'}</span>
        </button>
      </div>
    </div>
  );
};
