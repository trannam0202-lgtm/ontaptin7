export type QuestionCategory = 'recall' | 'comprehension' | 'true_false';

export interface MultipleChoiceQuestion {
  id: string;
  category: 'recall' | 'comprehension'; // recall = 12 câu, comprehension = 8 câu
  questionText: string;
  options: {
    key: 'A' | 'B' | 'C' | 'D';
    text: string;
  }[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
}

export interface TrueFalseStatement {
  id: string;
  text: string;
  isTrue: boolean;
}

export interface TrueFalseQuestion {
  id: string;
  category: 'true_false'; // 5 câu, mỗi câu 4 ý
  questionText: string;
  statements: TrueFalseStatement[]; // 4 ý
  explanation: string;
}

export type Question = MultipleChoiceQuestion | TrueFalseQuestion;

export interface LessonSummarySection {
  title: string;
  content: string[];
  keyPoints?: string[];
  illustrationType?: string;
}

export interface Lesson {
  id: string;
  number: number;
  title: string;
  themeId: string;
  themeTitle: string;
  summary: LessonSummarySection[];
  questions: Question[]; // Exactly 25 questions (12 recall, 8 comprehension, 5 true_false)
}

export interface Theme {
  id: string;
  number: number;
  title: string;
  description: string;
  lessonIds: string[];
}

export interface StudentInfo {
  name: string;
  studentClass: string;
}

export interface SubmissionRecord {
  id: string;
  studentName: string;
  studentClass: string;
  schoolName?: string;
  lessonId: string;
  lessonTitle: string;
  themeTitle?: string;
  score: number;
  maxScore: number;
  recallScore?: number;
  comprehensionScore?: number;
  tfScore?: number;
  deviceInfo?: string;
  submittedAt: string;
  answersSummary?: string;
}
