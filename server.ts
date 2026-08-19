import express from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';

export interface Submission {
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

const app = express();
const PORT = 3000;
const DATA_DIR = path.join(process.cwd(), 'data');
const DATA_FILE = path.join(DATA_DIR, 'submissions.json');

// Ensure data directory and file exist
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

function parseDevice(userAgent: string | undefined): string {
  if (!userAgent) return 'Thiết bị thông minh';
  const ua = userAgent.toLowerCase();
  if (ua.includes('iphone')) return '📱 iPhone (iOS)';
  if (ua.includes('ipad')) return '📟 iPad (iOS)';
  if (ua.includes('android')) {
    if (ua.includes('mobile')) return '📱 Điện thoại Android';
    return '📟 Máy tính bảng Android';
  }
  if (ua.includes('macintosh') || ua.includes('mac os')) return '💻 Máy Mac (macOS)';
  if (ua.includes('windows')) return '💻 Máy tính Windows';
  if (ua.includes('linux')) return '💻 Máy tính Linux';
  if (ua.includes('mobile')) return '📱 Thiết bị di động';
  return '🌐 Trình duyệt web';
}

function loadSubmissions(): Submission[] {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const content = fs.readFileSync(DATA_FILE, 'utf-8');
      const data = JSON.parse(content);
      if (Array.isArray(data)) {
        return data;
      }
    }
  } catch (err) {
    console.error('Error reading submissions file:', err);
  }
  return [];
}

function saveSubmissions(submissions: Submission[]) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(submissions, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error writing submissions file:', err);
  }
}

let submissionsStore: Submission[] = loadSubmissions();

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// CORS headers for any internet-connected device or preview iframe
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
    return;
  }
  next();
});

// API Endpoints
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', submissionsCount: submissionsStore.length, time: new Date().toISOString() });
});

// Get all submissions for Admin
app.get('/api/submissions', (_req, res) => {
  // Return sorted newest first
  const sorted = [...submissionsStore].sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime());
  res.json(sorted);
});

// Unified Submission Processor for both /api/submit and /api/submissions
function handleIncomingSubmission(req: express.Request, res: express.Response) {
  const {
    studentName,
    studentClass,
    schoolName,
    lessonId,
    lessonTitle,
    themeTitle,
    score,
    maxScore,
    recallScore,
    comprehensionScore,
    tfScore,
    userAnswers,
    answersSummary,
    deviceInfo: clientDeviceInfo,
  } = req.body;

  if (!studentName || !studentClass || !lessonId) {
    res.status(400).json({ error: 'Thiếu thông tin bắt buộc (họ tên, lớp, bài học)' });
    return;
  }

  const detectedDevice = clientDeviceInfo || parseDevice(req.headers['user-agent']);

  // Check if student already submitted this lesson
  const existingIndex = submissionsStore.findIndex(
    (s) =>
      s.studentName.trim().toLowerCase() === String(studentName).trim().toLowerCase() &&
      s.studentClass.trim().toLowerCase() === String(studentClass).trim().toLowerCase() &&
      s.lessonId === String(lessonId)
  );

  const formattedScore = typeof score === 'number' ? Math.round(score * 100) / 100 : Number(score) || 0;

  const newSubmission: Submission = {
    id: existingIndex >= 0 ? submissionsStore[existingIndex].id : `sub_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    studentName: String(studentName).trim(),
    studentClass: String(studentClass).trim().toUpperCase(),
    schoolName: schoolName ? String(schoolName).trim() : 'THCS Tiến Hưng',
    lessonId: String(lessonId),
    lessonTitle: lessonTitle ? String(lessonTitle).trim() : '',
    themeTitle: themeTitle ? String(themeTitle).trim() : '',
    score: formattedScore,
    maxScore: Number(maxScore) || 10,
    recallScore: typeof recallScore === 'number' ? recallScore : undefined,
    comprehensionScore: typeof comprehensionScore === 'number' ? comprehensionScore : undefined,
    tfScore: typeof tfScore === 'number' ? tfScore : undefined,
    deviceInfo: detectedDevice,
    submittedAt: new Date().toISOString(),
    answersSummary: answersSummary || (userAnswers ? JSON.stringify(userAnswers) : undefined),
  };

  if (existingIndex >= 0) {
    submissionsStore[existingIndex] = newSubmission;
  } else {
    submissionsStore.push(newSubmission);
  }

  saveSubmissions(submissionsStore);
  console.log(`[SUBMISSION] Recorded score for ${newSubmission.studentName} (${newSubmission.studentClass}) - ${newSubmission.lessonTitle}: ${newSubmission.score} pts [Device: ${detectedDevice}]`);

  res.json({
    success: true,
    message: 'Đã lưu điểm thành công và gửi về menu QUẢN TRỊ của Giáo viên!',
    submission: newSubmission,
  });
}

// Support both endpoint URLs
app.post('/api/submit', handleIncomingSubmission);
app.post('/api/submissions', handleIncomingSubmission);

// Check if a student has completed a specific lesson
app.get('/api/submissions/check', (req, res) => {
  const { studentName, studentClass, lessonId } = req.query;
  if (!studentName || !studentClass || !lessonId) {
    res.json({ completed: false });
    return;
  }

  const found = submissionsStore.find(
    (s) =>
      s.studentName.trim().toLowerCase() === String(studentName).trim().toLowerCase() &&
      s.studentClass.trim().toLowerCase() === String(studentClass).trim().toLowerCase() &&
      s.lessonId === String(lessonId)
  );

  if (found) {
    res.json({ completed: true, submission: found });
  } else {
    res.json({ completed: false });
  }
});

// Admin endpoint to clear submissions (supports POST /api/submissions/clear and DELETE /api/submissions)
function handleClearSubmissions(req: express.Request, res: express.Response) {
  const password = req.body?.password || req.query?.password;
  if (password !== 'vannam123') {
    res.status(401).json({ error: 'Mật khẩu quản trị không đúng' });
    return;
  }
  submissionsStore = [];
  saveSubmissions(submissionsStore);
  console.log('[ADMIN] All submissions cleared by teacher.');
  res.json({ success: true, message: 'Đã xóa toàn bộ kết quả học sinh' });
}

app.post('/api/submissions/clear', handleClearSubmissions);
app.delete('/api/submissions', handleClearSubmissions);

// Admin endpoint to delete a single submission
app.delete('/api/submissions/:id', (req, res) => {
  const { id } = req.params;
  submissionsStore = submissionsStore.filter((s) => s.id !== id);
  saveSubmissions(submissionsStore);
  res.json({ success: true, message: 'Đã xóa bài nộp' });
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
