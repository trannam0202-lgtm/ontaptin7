import React, { useState, useEffect } from 'react';
import { Lesson, Question } from '../types';
import { Check, X, AlertCircle, Award, RotateCcw, Send, HelpCircle, UserCheck, ArrowLeft, Sparkles, Eye, EyeOff, CheckCircle2, ShieldCheck, RefreshCw, Smartphone } from 'lucide-react';

interface QuizViewProps {
  lesson: Lesson;
  studentName?: string;
  studentClass?: string;
  onStudentNameChange?: (name: string) => void;
  onStudentClassChange?: (cls: string) => void;
  onBackToLesson?: () => void;
}

export const QuizView: React.FC<QuizViewProps> = ({
  lesson,
  studentName: propStudentName = '',
  studentClass: propStudentClass = '',
  onStudentNameChange,
  onStudentClassChange,
  onBackToLesson,
}) => {
  // Student Info
  const [studentName, setStudentName] = useState(propStudentName);
  const [studentClass, setStudentClass] = useState(propStudentClass);
  const [schoolName] = useState('THCS Tiến Hưng');

  // Password Login state
  const [quizNameInput, setQuizNameInput] = useState(propStudentName);
  const [quizClassInput, setQuizClassInput] = useState(propStudentClass);
  const [quizPassword, setQuizPassword] = useState('');
  const [showQuizPassword, setShowQuizPassword] = useState(false);
  const [quizAuthError, setQuizAuthError] = useState('');

  const hasStudentInfo = Boolean(studentName.trim() && studentClass.trim());

  useEffect(() => {
    if (propStudentName !== undefined) {
      setStudentName(propStudentName);
    }
  }, [propStudentName]);

  useEffect(() => {
    if (propStudentClass !== undefined) {
      setStudentClass(propStudentClass);
    }
  }, [propStudentClass]);

  const handleNameChange = (val: string) => {
    setStudentName(val);
    if (onStudentNameChange) onStudentNameChange(val);
  };

  const handleClassChange = (val: string) => {
    setStudentClass(val);
    if (onStudentClassChange) onStudentClassChange(val);
  };

  // Answers State:
  // For MC: questionId -> 'A' | 'B' | 'C' | 'D'
  // For True/False: questionId -> { [statementId: string]: boolean }
  const [userAnswers, setUserAnswers] = useState<Record<string, any>>({});
  
  // Submission State
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [serverSavedSuccess, setServerSavedSuccess] = useState(false);
  const [filterType, setFilterType] = useState<'all' | 'recall' | 'comprehension' | 'true_false'>('all');

  // Reset quiz when lesson changes
  useEffect(() => {
    setUserAnswers({});
    setIsSubmitted(false);
    setSubmitError('');
    setServerSavedSuccess(false);
  }, [lesson.id]);

  // Handle MC Choice Selection
  const handleSelectMC = (questionId: string, choiceKey: string) => {
    if (isSubmitted) return;
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: choiceKey,
    }));
  };

  // Handle True/False Choice Selection
  const handleSelectTF = (questionId: string, statementId: string, value: boolean) => {
    if (isSubmitted) return;
    setUserAnswers((prev) => {
      const currentTF = prev[questionId] || {};
      return {
        ...prev,
        [questionId]: {
          ...currentTF,
          [statementId]: value,
        },
      };
    });
  };

  // Check how many questions are answered
  const isQuestionComplete = (q: Question) => {
    if (q.category === 'true_false' && q.statements) {
      const tfAns = userAnswers[q.id] || {};
      return q.statements.every((st) => tfAns[st.id] !== undefined);
    }
    return userAnswers[q.id] !== undefined;
  };

  const completedCount = lesson.questions.filter(isQuestionComplete).length;
  const totalCount = lesson.questions.length;

  // Calculate Scores
  let recallScore = 0;
  let comprehensionScore = 0;
  let tfScore = 0;

  lesson.questions.forEach((q) => {
    if (q.category === 'recall') {
      if (userAnswers[q.id] === q.correctAnswer) {
        recallScore += 0.25;
      }
    } else if (q.category === 'comprehension') {
      if (userAnswers[q.id] === q.correctAnswer) {
        comprehensionScore += 0.25;
      }
    } else if (q.category === 'true_false' && q.statements) {
      const tfAns = userAnswers[q.id] || {};
      q.statements.forEach((st) => {
        if (tfAns[st.id] === st.isTrue) {
          tfScore += 0.25;
        }
      });
    }
  });

  const totalScore = Math.min(10, Math.round((recallScore + comprehensionScore + tfScore) * 100) / 100);

  // Send quiz submission to server
  const sendSubmissionToServer = async () => {
    setSubmitting(true);
    setSubmitError('');

    try {
      const payload = {
        studentName: studentName.trim(),
        studentClass: studentClass.trim(),
        schoolName: schoolName.trim(),
        lessonId: lesson.id,
        lessonTitle: lesson.title,
        themeTitle: lesson.themeTitle,
        score: totalScore,
        maxScore: 10,
        recallScore: Math.round(recallScore * 100) / 100,
        comprehensionScore: Math.round(comprehensionScore * 100) / 100,
        tfScore: Math.round(tfScore * 100) / 100,
        userAnswers,
        deviceInfo: typeof navigator !== 'undefined' ? navigator.userAgent : 'Internet Device',
      };

      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = await response.json();
        setServerSavedSuccess(true);
        setIsSubmitted(true);
        console.log('Submission recorded on server successfully:', data);
      } else {
        throw new Error('Máy chủ phản hồi không thành công (' + response.status + ')');
      }
    } catch (err: any) {
      console.warn('Lỗi kết nối máy chủ, thử lại qua /api/submissions:', err);
      try {
        const fallbackRes = await fetch('/api/submissions', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            studentName: studentName.trim(),
            studentClass: studentClass.trim(),
            schoolName: schoolName.trim(),
            lessonId: lesson.id,
            lessonTitle: lesson.title,
            themeTitle: lesson.themeTitle,
            score: totalScore,
            maxScore: 10,
            recallScore: Math.round(recallScore * 100) / 100,
            comprehensionScore: Math.round(comprehensionScore * 100) / 100,
            tfScore: Math.round(tfScore * 100) / 100,
            userAnswers,
          }),
        });
        if (fallbackRes.ok) {
          setServerSavedSuccess(true);
          setIsSubmitted(true);
        } else {
          setSubmitError('Chưa thể gửi điểm về máy chủ Quản trị do mạng gián đoạn. Vui lòng nhấn nút "Thử gửi lại điểm" bên dưới!');
          setIsSubmitted(true);
        }
      } catch (fallbackErr) {
        setSubmitError('Mất kết nối mạng internet với máy chủ Quản trị. Vui lòng kiểm tra wifi/4G và nhấn nút "Thử gửi lại điểm"!');
        setIsSubmitted(true);
      }
    } finally {
      setSubmitting(false);
    }
  };

  // Handle Form Submission
  const handleSubmitQuiz = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!studentName.trim()) {
      setSubmitError('Vui lòng nhập Họ và tên học sinh trước khi nộp bài!');
      return;
    }
    if (!studentClass.trim()) {
      setSubmitError('Vui lòng nhập Lớp học sinh!');
      return;
    }

    sendSubmissionToServer();
  };

  const filteredQuestions = lesson.questions.filter((q) => {
    if (filterType === 'all') return true;
    return q.category === filterType;
  });

  return (
    <div className="space-y-6">
      {/* Quiz Top Bar */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-black flex items-center gap-2">
            <span>Hệ thống Trắc nghiệm: {lesson.title}</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 font-medium mt-1">
            Tổng cộng 25 câu hỏi (12 câu Nhận biết, 8 câu Thông hiểu, 5 câu Đúng - Sai). Mỗi ý đúng đạt 0.25 điểm.
          </p>
        </div>

        {/* Filter Categories - Mobile responsive scroll/wrap */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 p-1 rounded-xl shrink-0 text-xs w-full md:w-auto overflow-x-auto">
          <button
            onClick={() => setFilterType('all')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
              filterType === 'all'
                ? 'bg-white text-indigo-700 shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Tất cả (25)
          </button>
          <button
            onClick={() => setFilterType('recall')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
              filterType === 'recall'
                ? 'bg-blue-600 text-white shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Nhận biết (12)
          </button>
          <button
            onClick={() => setFilterType('comprehension')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
              filterType === 'comprehension'
                ? 'bg-amber-600 text-white shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Thông hiểu (8)
          </button>
          <button
            onClick={() => setFilterType('true_false')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
              filterType === 'true_false'
                ? 'bg-purple-600 text-white shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Đúng - Sai (5)
          </button>
        </div>
      </div>

      {/* Completion & Result Banner after submission */}
      {isSubmitted && (
        <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-700 text-white rounded-2xl p-5 sm:p-6 shadow-xl relative overflow-hidden animate-fade-in space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-amber-200 bg-black/25 px-3.5 py-1.5 rounded-xl font-extrabold text-sm sm:text-base border border-amber-300/30">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300 shrink-0 animate-bounce" />
              <span>Chúc mừng bạn đã hoàn thành bài tập!</span>
            </div>

            {serverSavedSuccess ? (
              <div className="flex items-center gap-1.5 bg-emerald-950/50 text-emerald-200 border border-emerald-400/40 px-3 py-1 rounded-lg text-xs font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-300" />
                <span>ĐÃ LƯU & GỬI VỀ MENU QUẢN TRỊ</span>
              </div>
            ) : (
              <button
                onClick={sendSubmissionToServer}
                disabled={submitting}
                className="flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 px-3 py-1 rounded-lg text-xs font-black cursor-pointer shadow-md transition-all"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${submitting ? 'animate-spin' : ''}`} />
                <span>Thử gửi lại điểm về Quản trị</span>
              </button>
            )}
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 relative z-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 w-full md:w-auto">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex flex-col items-center justify-center shrink-0 shadow-inner">
                <span className="text-3xl sm:text-4xl font-black text-amber-300">{totalScore}</span>
                <span className="text-[10px] sm:text-[11px] text-emerald-100 font-bold uppercase tracking-wider mt-0.5">Điểm / 10.0</span>
              </div>
              <div className="space-y-1">
                <h3 className="text-lg sm:text-xl font-bold flex items-center gap-2 flex-wrap">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-amber-300 shrink-0" />
                  <span>Học sinh: {studentName || 'Chưa nhập tên'} (Lớp {studentClass})</span>
                </h3>
                <p className="text-xs sm:text-sm text-emerald-100">
                  Nhận biết: <strong className="text-white">{recallScore}/3.0đ</strong> | Thông hiểu:{' '}
                  <strong className="text-white">{comprehensionScore}/2.0đ</strong> | Đúng-Sai:{' '}
                  <strong className="text-white">{tfScore}/5.0đ</strong>
                </p>
                <p className="text-sm sm:text-base font-bold text-amber-200">
                  Đánh giá:{' '}
                  {totalScore >= 9.0
                    ? 'Xuất sắc! Bạn nắm bài rất xuất sắc! 🎉'
                    : totalScore >= 8.0
                    ? 'Giỏi! Kết quả học tập rất tốt! 👏'
                    : totalScore >= 6.5
                    ? 'Khá! Cố gắng phát huy nhé! 👍'
                    : totalScore >= 5.0
                    ? 'Đạt! Cần ôn kỹ lại một số ý! 💪'
                    : 'Cần đọc kỹ lại tóm tắt bài học! 📚'}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto justify-start sm:justify-end pt-2 md:pt-0 border-t border-white/10 md:border-t-0">
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setUserAnswers({});
                  setServerSavedSuccess(false);
                }}
                className="inline-flex items-center gap-1.5 bg-white/15 hover:bg-white/25 text-white font-bold px-3.5 py-2.5 rounded-xl border border-white/30 transition-all text-xs sm:text-sm shrink-0 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Làm lại bài này</span>
              </button>

              {onBackToLesson && (
                <button
                  onClick={onBackToLesson}
                  className="inline-flex items-center gap-1.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-5 py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all text-xs sm:text-sm shrink-0 cursor-pointer transform hover:-translate-y-0.5"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Trở lại chọn bài học</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Error message */}
      {submitError && (
        <div className="p-4 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl flex items-center gap-3 text-sm">
          <AlertCircle className="w-5 h-5 shrink-0 text-rose-500" />
          <span>{submitError}</span>
        </div>
      )}

      {/* Requirement: When student has not entered Name and Class and Password, do NOT display quiz questions! */}
      {!hasStudentInfo ? (
        <div className="bg-amber-50 border-2 border-amber-300/80 rounded-2xl p-5 sm:p-8 text-center space-y-4 shadow-sm my-6 max-w-lg mx-auto">
          <div className="w-14 h-14 bg-amber-100/80 rounded-full flex items-center justify-center mx-auto text-amber-700">
            <UserCheck className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-black">Yêu cầu Đăng nhập Học sinh</h3>
            <p className="text-xs sm:text-sm text-slate-700 mt-1 max-w-md mx-auto font-medium">
              Vui lòng nhập <strong>Họ tên</strong>, <strong>Lớp</strong> và <strong>Mật khẩu đăng nhập</strong> (12344321) để bắt đầu làm bài:
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!quizNameInput.trim()) {
                setQuizAuthError('Vui lòng nhập Họ và tên!');
                return;
              }
              if (!quizClassInput.trim()) {
                setQuizAuthError('Vui lòng nhập Lớp!');
                return;
              }
              if (quizPassword.trim() !== '12344321') {
                setQuizAuthError('Mật khẩu đăng nhập không đúng! Vui lòng thử lại.');
                return;
              }

              handleNameChange(quizNameInput.trim());
              handleClassChange(quizClassInput.trim());
              setQuizAuthError('');
            }}
            className="space-y-3.5 text-left pt-2"
          >
            <div>
              <label className="block text-xs font-bold text-slate-900 mb-1">
                Họ và tên Học sinh <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                value={quizNameInput}
                onChange={(e) => {
                  setQuizNameInput(e.target.value);
                  setQuizAuthError('');
                }}
                placeholder="Ví dụ: Nguyễn Hoàng Anh"
                className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-black font-bold text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 shadow-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-900 mb-1">
                Lớp <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                value={quizClassInput}
                onChange={(e) => {
                  setQuizClassInput(e.target.value);
                  setQuizAuthError('');
                }}
                placeholder="Ví dụ: 6A1"
                className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-black font-bold text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 shadow-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-900 mb-1">
                Mật khẩu đăng nhập <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showQuizPassword ? "text" : "password"}
                  value={quizPassword}
                  onChange={(e) => {
                    setQuizPassword(e.target.value);
                    setQuizAuthError('');
                  }}
                  placeholder="Nhập mật khẩu..."
                  className="w-full bg-white border border-slate-300 rounded-xl pl-3.5 pr-11 py-2.5 text-black font-bold text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 shadow-xs"
                />
                <button
                  type="button"
                  onClick={() => setShowQuizPassword(!showQuizPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 p-1.5 cursor-pointer rounded-lg"
                  title={showQuizPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
                >
                  {showQuizPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {quizAuthError && (
              <p className="text-xs text-rose-600 font-bold bg-rose-50 p-2.5 rounded-lg border border-rose-200">
                {quizAuthError}
              </p>
            )}

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 mt-2"
            >
              <CheckCircle2 className="w-5 h-5" />
              <span>Xác nhận & Bắt đầu làm bài</span>
            </button>
          </form>
        </div>
      ) : (
        <>
          {/* Questions List */}
          <div className="space-y-6">
            {filteredQuestions.map((q) => {
              const globalIdx = lesson.questions.findIndex((orig) => orig.id === q.id) + 1;

              return (
                <div
                  key={q.id}
                  className="bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-6 shadow-xs hover:border-slate-300 transition-all"
                >
                  {/* Question Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-slate-900 text-white font-bold text-xs sm:text-sm flex items-center justify-center">
                        {globalIdx}
                      </span>
                      <span
                        className={`px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-semibold ${
                          q.category === 'recall'
                            ? 'bg-blue-50 text-blue-700 border border-blue-200'
                            : q.category === 'comprehension'
                            ? 'bg-amber-50 text-amber-700 border border-amber-200'
                            : 'bg-purple-50 text-purple-700 border border-purple-200'
                        }`}
                      >
                        {q.category === 'recall'
                          ? 'Nhận biết (0.25đ)'
                          : q.category === 'comprehension'
                          ? 'Thông hiểu (0.25đ)'
                          : 'Đúng - Sai (1.0đ - 4 ý)'}
                      </span>
                    </div>
                  </div>

                  {/* Question Text in 15pt font size as requested */}
                  <h3 className="text-[14pt] sm:text-[15pt] font-bold text-black mb-4 leading-relaxed">
                    {q.questionText}
                  </h3>

                  {/* Multiple Choice Options */}
                  {q.options && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                      {q.options.map((opt) => {
                        const isSelected = userAnswers[q.id] === opt.key;
                        const isCorrect = isSubmitted && opt.key === q.correctAnswer;
                        const isWrongSelected = isSubmitted && isSelected && opt.key !== q.correctAnswer;

                        let btnStyle = 'bg-slate-50 border-slate-200 text-black font-medium hover:bg-slate-100/80';
                        if (isSelected && !isSubmitted) {
                          btnStyle = 'bg-indigo-50 border-indigo-500 text-black font-semibold ring-1 ring-indigo-500';
                        } else if (isCorrect) {
                          btnStyle = 'bg-emerald-50 border-emerald-500 text-black font-semibold ring-1 ring-emerald-500';
                        } else if (isWrongSelected) {
                          btnStyle = 'bg-rose-50 border-rose-500 text-black font-semibold ring-1 ring-rose-500';
                        }

                        return (
                          <button
                            key={opt.key}
                            onClick={() => handleSelectMC(q.id, opt.key)}
                            disabled={isSubmitted}
                            className={`min-h-[48px] p-3 sm:p-3.5 rounded-xl border text-left flex items-start gap-2.5 sm:gap-3 transition-all cursor-pointer ${btnStyle}`}
                          >
                            <span
                              className={`w-6 h-6 sm:w-7 sm:h-7 rounded-lg text-xs sm:text-sm font-bold flex items-center justify-center shrink-0 ${
                                isSelected || isCorrect
                                  ? 'bg-indigo-600 text-white'
                                  : 'bg-slate-200 text-black font-bold'
                              }`}
                            >
                              {opt.key}
                            </span>
                            <span className="text-[14pt] sm:text-[15pt] text-black font-medium pt-0.5 leading-snug break-words flex-1">{opt.text}</span>
                            {isCorrect && <Check className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 shrink-0 ml-auto" />}
                            {isWrongSelected && <X className="w-5 h-5 sm:w-6 sm:h-6 text-rose-600 shrink-0 ml-auto" />}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* True / False Sub-statements */}
                  {q.statements && (
                    <div className="space-y-2.5 sm:space-y-3 mb-4">
                      {q.statements.map((st) => {
                        const selectedVal = userAnswers[q.id]?.[st.id];
                        const isStatementCorrect = isSubmitted && selectedVal === st.isTrue;
                        const isStatementWrong = isSubmitted && selectedVal !== undefined && selectedVal !== st.isTrue;

                        return (
                          <div
                            key={st.id}
                            className={`p-3 sm:p-3.5 rounded-xl border flex flex-col md:flex-row md:items-center justify-between gap-3 transition-all ${
                              isStatementCorrect
                                ? 'bg-emerald-50/70 border-emerald-200'
                                : isStatementWrong
                                ? 'bg-rose-50/70 border-rose-200'
                                : 'bg-slate-50 border-slate-200'
                            }`}
                          >
                            <p className="text-[14pt] sm:text-[15pt] text-black font-medium leading-relaxed flex-1">
                              {st.text}
                            </p>

                            <div className="flex items-center gap-2 shrink-0 self-start md:self-center">
                              <button
                                onClick={() => handleSelectTF(q.id, st.id, true)}
                                disabled={isSubmitted}
                                className={`min-h-[44px] min-w-[70px] px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                                  selectedVal === true
                                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                                    : 'bg-white text-black border-slate-300 hover:bg-slate-100'
                                }`}
                              >
                                Đúng
                              </button>
                              <button
                                onClick={() => handleSelectTF(q.id, st.id, false)}
                                disabled={isSubmitted}
                                className={`min-h-[44px] min-w-[70px] px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                                  selectedVal === false
                                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                                    : 'bg-white text-black border-slate-300 hover:bg-slate-100'
                                }`}
                              >
                                Sai
                              </button>

                              {isSubmitted && (
                                <span className="text-[11px] sm:text-xs font-bold ml-1">
                                  {st.isTrue ? (
                                    <span className="text-emerald-800 bg-emerald-100 px-2 py-1 rounded-md">Đáp án: ĐÚNG</span>
                                  ) : (
                                    <span className="text-rose-800 bg-rose-100 px-2 py-1 rounded-md">Đáp án: SAI</span>
                                  )}
                                </span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Explanation display when submitted */}
                  {isSubmitted && q.explanation && (
                    <div className="p-3.5 sm:p-4 bg-indigo-50/70 border border-indigo-100 rounded-xl text-[14pt] sm:text-[15pt] text-black flex items-start gap-2.5">
                      <HelpCircle className="w-5 h-5 text-indigo-600 shrink-0 mt-1" />
                      <div>
                        <strong className="font-bold text-black">Giải thích chi tiết: </strong>
                        <span className="text-black font-medium">{q.explanation}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Submit Button (Non-sticky, inline flow so it never covers questions) */}
          {!isSubmitted && (
            <div className="pt-6 pb-4 border-t border-slate-200 flex flex-col items-center justify-center space-y-3">
              <button
                onClick={() => handleSubmitQuiz()}
                disabled={submitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-black px-8 sm:px-12 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all text-base sm:text-lg cursor-pointer disabled:opacity-50 min-h-[50px]"
              >
                <Send className={`w-5 h-5 ${submitting ? 'animate-pulse' : ''}`} />
                <span>{submitting ? 'Đang gửi điểm về QUẢN TRỊ...' : 'NỘP BÀI TRẮC NGHIỆM'}</span>
              </button>
              <p className="text-xs text-slate-500 text-center font-medium">
                Kết quả và điểm số sẽ được gửi tự động và lưu lại trên máy chủ menu QUẢN TRỊ của Giáo viên.
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
};
