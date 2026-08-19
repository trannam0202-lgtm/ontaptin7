import React, { useState } from 'react';
import { ALL_LESSONS, getLessonById, getLessonsByThemeId } from './data/lessons';
import { Header } from './components/Header';
import { StudentMenuBar } from './components/StudentMenuBar';
import { LessonSummary } from './components/LessonSummary';
import { QuizView } from './components/QuizView';
import { AdminModal } from './components/AdminModal';
import { QuizLockModal } from './components/QuizLockModal';

export default function App() {
  const [studentName, setStudentName] = useState<string>('');
  const [studentClass, setStudentClass] = useState<string>('');
  const [selectedThemeId, setSelectedThemeId] = useState<string>('theme_1');
  const [selectedLessonId, setSelectedLessonId] = useState<string>('lesson_1');
  const [activeTab, setActiveTab] = useState<'summary' | 'quiz'>('summary');

  // One-quiz per login session restriction state
  const [lockedQuizLessonId, setLockedQuizLessonId] = useState<string | null>(null);
  const [showQuizLockModal, setShowQuizLockModal] = useState<boolean>(false);
  const [requestOpenInfoModal, setRequestOpenInfoModal] = useState<boolean>(false);

  // Admin Modal state
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Get active lesson
  const currentLesson = getLessonById(selectedLessonId) || ALL_LESSONS[0];
  const lockedLesson = lockedQuizLessonId ? getLessonById(lockedQuizLessonId) || null : null;

  const handleSelectTheme = (themeId: string) => {
    setSelectedThemeId(themeId);
    const themeLessons = getLessonsByThemeId(themeId);
    if (themeLessons.length > 0) {
      handleSelectLesson(themeLessons[0].id);
    }
  };

  const handleSelectLesson = (lessonId: string) => {
    setSelectedLessonId(lessonId);
    // If student is on quiz tab and tries to change lesson, check lock
    if (activeTab === 'quiz' && lockedQuizLessonId !== null && lockedQuizLessonId !== lessonId) {
      setActiveTab('summary');
      setShowQuizLockModal(true);
    }
  };

  const handleSelectTab = (tab: 'summary' | 'quiz') => {
    if (tab === 'summary') {
      setActiveTab('summary');
      return;
    }

    // Attempting to access Quiz tab ('quiz')
    if (!studentName.trim() || !studentClass.trim()) {
      // Prompt student info modal first
      setRequestOpenInfoModal(true);
      return;
    }

    if (lockedQuizLessonId === null) {
      // First time selecting quiz in this session
      setLockedQuizLessonId(selectedLessonId);
      setActiveTab('quiz');
    } else if (lockedQuizLessonId === selectedLessonId) {
      // Accessing the same lesson quiz that was previously locked
      setActiveTab('quiz');
    } else {
      // Student is trying to access quiz for a DIFFERENT lesson
      setShowQuizLockModal(true);
    }
  };

  const handleStartQuizFromSummary = () => {
    handleSelectTab('quiz');
  };

  const handleGoToLockedLessonQuiz = () => {
    if (lockedLesson) {
      setSelectedThemeId(lockedLesson.themeId);
      setSelectedLessonId(lockedLesson.id);
      setActiveTab('quiz');
      setShowQuizLockModal(false);
    }
  };

  const handleChangeStudentInfo = () => {
    setShowQuizLockModal(false);
    setLockedQuizLessonId(null);
    setRequestOpenInfoModal(true);
  };

  return (
    <div className="min-h-screen bg-slate-100/80 font-sans text-slate-800 flex flex-col antialiased">
      <main className="flex-1 p-3 sm:p-6 lg:p-8 min-w-0 max-w-6xl w-full mx-auto space-y-6">
        {/* Top Header Banner */}
        <Header onOpenAdmin={() => setIsAdminOpen(true)} />

        {/* Top Menu Bar: Student Info, Theme & Lesson Selectors, Navigation Tabs */}
        <StudentMenuBar
          studentName={studentName}
          onStudentNameChange={setStudentName}
          studentClass={studentClass}
          onStudentClassChange={setStudentClass}
          selectedThemeId={selectedThemeId}
          onSelectTheme={handleSelectTheme}
          selectedLessonId={selectedLessonId}
          onSelectLesson={handleSelectLesson}
          activeTab={activeTab}
          onSelectTab={handleSelectTab}
          lockedQuizLessonId={lockedQuizLessonId}
          onResetQuizSession={() => setLockedQuizLessonId(null)}
          onRequestOpenInfoModal={requestOpenInfoModal}
          onInfoModalOpened={() => setRequestOpenInfoModal(false)}
        />

        {/* Active View: Summary or Quiz */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 sm:p-6">
          {activeTab === 'summary' ? (
            <LessonSummary
              lesson={currentLesson}
              onStartQuiz={handleStartQuizFromSummary}
              lockedQuizLessonId={lockedQuizLessonId}
            />
          ) : (
            <QuizView
              lesson={currentLesson}
              studentName={studentName}
              studentClass={studentClass}
              onStudentNameChange={setStudentName}
              onStudentClassChange={setStudentClass}
              onBackToLesson={() => setActiveTab('summary')}
            />
          )}
        </div>
      </main>

      {/* Quiz Lock Warning Modal */}
      <QuizLockModal
        isOpen={showQuizLockModal}
        onClose={() => setShowQuizLockModal(false)}
        lockedLesson={lockedLesson}
        currentLesson={currentLesson}
        onGoToLockedLessonQuiz={handleGoToLockedLessonQuiz}
        onChangeStudentInfo={handleChangeStudentInfo}
      />

      {/* Teacher Admin Modal */}
      <AdminModal isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />
    </div>
  );
}
