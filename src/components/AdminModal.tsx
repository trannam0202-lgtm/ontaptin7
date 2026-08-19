import React, { useState, useEffect, useCallback } from 'react';
import { SubmissionRecord } from '../types';
import {
  Lock,
  ShieldCheck,
  Trash2,
  RefreshCw,
  X,
  Download,
  Filter,
  Search,
  Award,
  Smartphone,
  CheckCircle,
  Clock,
  ArrowUpDown,
  BookOpen,
  Users,
} from 'lucide-react';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminModal: React.FC<AdminModalProps> = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState('');

  const [submissions, setSubmissions] = useState<SubmissionRecord[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedClass, setSelectedClass] = useState<string>('all');
  const [selectedLessonFilter, setSelectedLessonFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'newest' | 'score_high' | 'score_low' | 'name'>('newest');
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [lastRefreshed, setLastRefreshed] = useState<Date>(new Date());

  const fetchSubmissions = useCallback(async (showLoading = true) => {
    if (showLoading) setLoading(true);
    try {
      const res = await fetch('/api/submissions');
      if (res.ok) {
        const data = await res.json();
        setSubmissions(Array.isArray(data) ? data : []);
        setLastRefreshed(new Date());
      }
    } catch (err) {
      console.error('Error fetching submissions:', err);
    } finally {
      if (showLoading) setLoading(false);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim() === 'admin' && password === 'vannam123') {
      setIsAuthenticated(true);
      setAuthError('');
      fetchSubmissions();
    } else {
      setAuthError('Tên đăng nhập hoặc mật khẩu quản trị không chính xác!');
    }
  };

  // Auto-refresh interval when modal is open and teacher is authenticated
  useEffect(() => {
    if (!isOpen || !isAuthenticated || !autoRefresh) return;
    const interval = setInterval(() => {
      fetchSubmissions(false);
    }, 5000); // 5s polling for real-time updates from smart devices
    return () => clearInterval(interval);
  }, [isOpen, isAuthenticated, autoRefresh, fetchSubmissions]);

  const handleDeleteOne = async (id: string) => {
    if (!window.confirm('Bạn có chắc chắn muốn xóa bài nộp này?')) return;
    try {
      const res = await fetch(`/api/submissions/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setSubmissions((prev) => prev.filter((s) => s.id !== id));
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleClearAll = async () => {
    if (!window.confirm('CẢNH BÁO: Bạn có chắc muốn xóa TOÀN BỘ danh sách kết quả học sinh đã nộp?')) return;
    try {
      const res = await fetch('/api/submissions/clear', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: 'vannam123' }),
      });
      if (res.ok) {
        setSubmissions([]);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Export data to CSV (supported by Excel, Google Sheets)
  const handleExportCSV = () => {
    if (submissions.length === 0) {
      alert('Không có dữ liệu bài nộp để xuất file!');
      return;
    }

    const headers = ['STT', 'Họ và tên', 'Lớp', 'Bài học', 'Điểm số (10.0)', 'Nhận biết', 'Thông hiểu', 'Đúng-Sai', 'Thiết bị gửi', 'Thời gian nộp'];
    const rows = filteredSubmissions.map((s, idx) => [
      idx + 1,
      `"${s.studentName.replace(/"/g, '""')}"`,
      `"${s.studentClass.replace(/"/g, '""')}"`,
      `"${s.lessonTitle.replace(/"/g, '""')}"`,
      s.score,
      s.recallScore !== undefined ? s.recallScore : '',
      s.comprehensionScore !== undefined ? s.comprehensionScore : '',
      s.tfScore !== undefined ? s.tfScore : '',
      `"${(s.deviceInfo || 'Thiết bị thông minh').replace(/"/g, '""')}"`,
      `"${new Date(s.submittedAt).toLocaleString('vi-VN')}"`,
    ]);

    const csvContent = '\uFEFF' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `Bang_Diem_Tin_Hoc_7_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isOpen) return null;

  // Filter submissions
  const filteredSubmissions = submissions
    .filter((s) => {
      const matchClass = selectedClass === 'all' || s.studentClass.toLowerCase() === selectedClass.toLowerCase();
      const matchLesson = selectedLessonFilter === 'all' || s.lessonId === selectedLessonFilter;
      const matchQuery =
        s.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.lessonTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.studentClass.toLowerCase().includes(searchQuery.toLowerCase());
      return matchClass && matchLesson && matchQuery;
    })
    .sort((a, b) => {
      if (sortBy === 'newest') {
        return new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime();
      }
      if (sortBy === 'score_high') {
        return b.score - a.score;
      }
      if (sortBy === 'score_low') {
        return a.score - b.score;
      }
      if (sortBy === 'name') {
        return a.studentName.localeCompare(b.studentName, 'vi');
      }
      return 0;
    });

  // Unique lists for filtering
  const classList = Array.from(new Set(submissions.map((s) => s.studentClass))).filter(Boolean);
  const lessonList: { id: string; title: string }[] = Array.from(
    new Set(submissions.map((s) => JSON.stringify({ id: s.lessonId, title: s.lessonTitle })))
  ).map((str) => JSON.parse(str as string));

  // Calculate statistics
  const totalCount = filteredSubmissions.length;
  const avgScore = totalCount > 0 ? (filteredSubmissions.reduce((acc, curr) => acc + curr.score, 0) / totalCount).toFixed(2) : '0';
  const excellentCount = filteredSubmissions.filter((s) => s.score >= 8.0).length;
  const passedCount = filteredSubmissions.filter((s) => s.score >= 5.0).length;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-5xl max-h-[94vh] flex flex-col overflow-hidden animate-scale-up my-auto">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-indigo-600/30 rounded-xl text-indigo-400 border border-indigo-500/30 shrink-0">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h3 className="font-extrabold text-base sm:text-lg text-white flex items-center gap-2">
                <span>HỆ THỐNG QUẢN TRỊ ĐIỂM & KẾT QUẢ HỌC TẬP</span>
              </h3>
              <p className="text-xs text-indigo-200">
                Giáo viên: <strong>Trần Văn Nam</strong> - THCS Tiến Hưng, TP Đồng Nai (0974191944)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-all cursor-pointer"
            title="Đóng cửa sổ"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Auth View if not logged in */}
        {!isAuthenticated ? (
          <div className="p-6 sm:p-10 max-w-md mx-auto my-8 text-center space-y-5 w-full">
            <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto border border-indigo-100 shadow-sm">
              <Lock className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-xl font-black text-slate-900">Đăng nhập QUẢN TRỊ</h4>
              <p className="text-xs text-slate-600 mt-1.5 font-medium">
                Vui lòng nhập tài khoản Giáo viên để xem toàn bộ kết quả bài nộp của học sinh từ các thiết bị thông minh.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4 text-left pt-2">
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Tên đăng nhập
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Nhập tên đăng nhập (admin)..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 font-bold focus:outline-none focus:ring-2 focus:ring-indigo-600 text-sm shadow-xs"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Mật khẩu quản trị
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Nhập mật khẩu (vannam123)..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 font-bold focus:outline-none focus:ring-2 focus:ring-indigo-600 text-sm shadow-xs"
                />
              </div>
              {authError && <p className="text-xs text-rose-600 font-bold bg-rose-50 p-2.5 rounded-lg border border-rose-200">{authError}</p>}
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl shadow-md transition-all text-sm cursor-pointer mt-2"
              >
                Đăng nhập Quản trị
              </button>
            </form>
          </div>
        ) : (
          /* Submissions List View */
          <div className="flex-1 overflow-hidden flex flex-col p-3 sm:p-5 space-y-3.5">
            {/* Control Bar */}
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs">
              <div className="flex flex-wrap items-center gap-2.5">
                {/* Search */}
                <div className="relative flex-1 sm:flex-none">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Tìm tên, lớp, bài..."
                    className="pl-9 pr-3 py-2 rounded-lg border border-slate-300 bg-white text-slate-800 text-xs w-full sm:w-48 md:w-56 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
                  />
                </div>

                {/* Filter Class */}
                <div className="flex items-center gap-1">
                  <select
                    value={selectedClass}
                    onChange={(e) => setSelectedClass(e.target.value)}
                    className="px-2.5 py-2 rounded-lg border border-slate-300 bg-white text-slate-800 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
                  >
                    <option value="all">Tất cả các Lớp</option>
                    {classList.map((cls) => (
                      <option key={cls} value={cls}>
                        Lớp {cls}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Filter Lesson */}
                <div className="flex items-center gap-1">
                  <select
                    value={selectedLessonFilter}
                    onChange={(e) => setSelectedLessonFilter(e.target.value)}
                    className="px-2.5 py-2 rounded-lg border border-slate-300 bg-white text-slate-800 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer max-w-[160px] truncate"
                  >
                    <option value="all">Tất cả Bài học</option>
                    {lessonList.map((ls) => (
                      <option key={ls.id} value={ls.id}>
                        {ls.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sort */}
                <div className="flex items-center gap-1">
                  <ArrowUpDown className="w-3.5 h-3.5 text-slate-500 hidden sm:inline" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="px-2.5 py-2 rounded-lg border border-slate-300 bg-white text-slate-800 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
                  >
                    <option value="newest">Mới nộp nhất</option>
                    <option value="score_high">Điểm cao nhất</option>
                    <option value="score_low">Điểm thấp nhất</option>
                    <option value="name">Tên học sinh (A-Z)</option>
                  </select>
                </div>
              </div>

              {/* Action Buttons & Real-time status */}
              <div className="flex flex-wrap items-center gap-2 justify-between lg:justify-end border-t lg:border-t-0 pt-2 lg:pt-0">
                <label className="flex items-center gap-1.5 text-[11px] font-bold text-slate-700 bg-emerald-50 border border-emerald-200 px-2 py-1 rounded-lg cursor-pointer">
                  <input
                    type="checkbox"
                    checked={autoRefresh}
                    onChange={(e) => setAutoRefresh(e.target.checked)}
                    className="rounded text-emerald-600 focus:ring-emerald-500"
                  />
                  <span className="flex items-center gap-1">
                    <span className={`w-2 h-2 rounded-full ${autoRefresh ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'}`}></span>
                    Tự động nhận bài (5s)
                  </span>
                </label>

                <button
                  onClick={() => fetchSubmissions(true)}
                  disabled={loading}
                  className="px-3 py-1.5 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 rounded-lg flex items-center gap-1 cursor-pointer font-bold transition-colors"
                  title="Tải lại dữ liệu ngay lập tức"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
                  <span>Làm mới</span>
                </button>

                <button
                  onClick={handleExportCSV}
                  className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg flex items-center gap-1.5 cursor-pointer font-bold shadow-xs transition-colors"
                  title="Xuất bảng điểm ra file Excel/CSV"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Xuất Excel/CSV</span>
                </button>

                <button
                  onClick={handleClearAll}
                  className="px-3 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 rounded-lg flex items-center gap-1 cursor-pointer font-bold transition-colors"
                  title="Xóa toàn bộ dữ liệu"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Xóa tất cả</span>
                </button>
              </div>
            </div>

            {/* Stats Summary Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              <div className="p-3 bg-indigo-50 border border-indigo-100 rounded-xl text-center">
                <p className="text-[11px] font-bold text-indigo-700 uppercase">Tổng bài nộp</p>
                <p className="text-xl sm:text-2xl font-black text-indigo-950 mt-0.5">{totalCount}</p>
              </div>
              <div className="p-3 bg-emerald-50 border border-emerald-100 rounded-xl text-center">
                <p className="text-[11px] font-bold text-emerald-700 uppercase">Điểm trung bình</p>
                <p className="text-xl sm:text-2xl font-black text-emerald-950 mt-0.5">{avgScore} / 10</p>
              </div>
              <div className="p-3 bg-teal-50 border border-teal-100 rounded-xl text-center">
                <p className="text-[11px] font-bold text-teal-700 uppercase">Điểm Giỏi (≥ 8.0)</p>
                <p className="text-xl sm:text-2xl font-black text-teal-950 mt-0.5">{excellentCount}</p>
              </div>
              <div className="p-3 bg-amber-50 border border-amber-100 rounded-xl text-center">
                <p className="text-[11px] font-bold text-amber-700 uppercase">Tỉ lệ Đạt (≥ 5.0)</p>
                <p className="text-xl sm:text-2xl font-black text-amber-950 mt-0.5">
                  {totalCount > 0 ? Math.round((passedCount / totalCount) * 100) : 0}%
                </p>
              </div>
            </div>

            {/* Table Container - Mobile Responsive with horizontal scrolling */}
            <div className="flex-1 overflow-y-auto overflow-x-auto border border-slate-200 rounded-xl bg-white">
              {loading && submissions.length === 0 ? (
                <div className="p-12 text-center text-slate-500 text-sm flex flex-col items-center justify-center gap-2">
                  <RefreshCw className="w-6 h-6 animate-spin text-indigo-600" />
                  <span>Đang tải danh sách kết quả học sinh từ máy chủ...</span>
                </div>
              ) : filteredSubmissions.length === 0 ? (
                <div className="p-12 text-center text-slate-500 text-sm flex flex-col items-center justify-center gap-2">
                  <Users className="w-8 h-8 text-slate-300" />
                  <span>Chưa có kết quả bài nộp nào phù hợp với bộ lọc.</span>
                </div>
              ) : (
                <table className="w-full text-left text-xs text-slate-700 min-w-[700px]">
                  <thead className="bg-slate-100 text-slate-900 font-extrabold border-b border-slate-200 uppercase tracking-wider sticky top-0 z-10">
                    <tr>
                      <th className="p-3 w-12 text-center">STT</th>
                      <th className="p-3">Học sinh</th>
                      <th className="p-3 w-20">Lớp</th>
                      <th className="p-3">Bài học đã làm</th>
                      <th className="p-3 text-center w-28">Điểm số</th>
                      <th className="p-3">Thiết bị gửi</th>
                      <th className="p-3">Thời gian nộp</th>
                      <th className="p-3 text-right w-16">Xóa</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {filteredSubmissions.map((sub, idx) => (
                      <tr key={sub.id} className="hover:bg-indigo-50/40 transition-colors">
                        <td className="p-3 text-center font-bold text-slate-400">{idx + 1}</td>
                        <td className="p-3 font-bold text-slate-900">{sub.studentName}</td>
                        <td className="p-3 font-mono font-extrabold text-indigo-700">{sub.studentClass}</td>
                        <td className="p-3 max-w-[220px]">
                          <div className="font-medium text-slate-800 truncate" title={sub.lessonTitle}>
                            {sub.lessonTitle}
                          </div>
                          {(sub.recallScore !== undefined || sub.tfScore !== undefined) && (
                            <div className="text-[10px] text-slate-500 mt-0.5">
                              NB: {sub.recallScore ?? 0}đ | TH: {sub.comprehensionScore ?? 0}đ | Đ-S: {sub.tfScore ?? 0}đ
                            </div>
                          )}
                        </td>
                        <td className="p-3 text-center">
                          <span
                            className={`px-3 py-1.5 rounded-full font-black font-mono text-xs inline-block shadow-xs ${
                              sub.score >= 8.0
                                ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                                : sub.score >= 5.0
                                ? 'bg-amber-100 text-amber-900 border border-amber-300'
                                : 'bg-rose-100 text-rose-900 border border-rose-300'
                            }`}
                          >
                            {sub.score.toFixed(2)} / 10
                          </span>
                        </td>
                        <td className="p-3 text-slate-600 text-[11px]">
                          <span className="inline-flex items-center gap-1 bg-slate-100 px-2 py-0.5 rounded-md font-medium">
                            <Smartphone className="w-3 h-3 text-slate-500" />
                            <span>{sub.deviceInfo || 'Thiết bị thông minh'}</span>
                          </span>
                        </td>
                        <td className="p-3 text-slate-500 text-[11px] whitespace-nowrap">
                          {new Date(sub.submittedAt).toLocaleString('vi-VN')}
                        </td>
                        <td className="p-3 text-right">
                          <button
                            onClick={() => handleDeleteOne(sub.id)}
                            className="p-1.5 text-rose-600 hover:text-rose-900 hover:bg-rose-100 rounded-lg transition-all cursor-pointer"
                            title="Xóa kết quả này"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>

            {/* Footer info */}
            <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 pt-1">
              <span>Hệ thống tự động lưu trữ và đồng bộ dữ liệu từ mọi thiết bị có kết nối internet.</span>
              <span>Cập nhật lần cuối: {lastRefreshed.toLocaleTimeString('vi-VN')}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
