import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { api } from '../lib/api';
import { QuizIcon } from '../components/Icons';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function Quiz() {
  const { data: sections } = useFetch(() => api.getSections(), []);
  const { data: history } = useFetch(() => api.getQuizHistory(), []);

  const chartData = history?.slice(0, 10).reverse().map((h, i) => ({
    name: h.section_name ? h.section_name.substring(0, 8) : `Mix #${i + 1}`,
    punteggio: Math.round((h.score / h.total) * 100),
  })) || [];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="page-title">Quiz</h1>
        <p className="page-subtitle">Metti alla prova le tue conoscenze</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        <Link to="/quiz/play" className="card-glow text-center group py-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-400 mb-3 group-hover:scale-110 transition-transform">
            <QuizIcon />
          </div>
          <h3 className="font-semibold text-white">Quiz misto</h3>
          <p className="text-xs text-gray-500 mt-1">Domande da tutte le sezioni</p>
        </Link>
        {sections?.map((s) => (
          <Link key={s.id} to={`/quiz/play/${s.id}`} className="card group">
            <div className="flex items-center gap-3">
              <div className="section-badge w-10 h-10 text-xs">
                {s.code}
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                  {s.name}
                </h3>
                <p className="text-xs text-gray-600">{s.topic_count} argomenti</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {chartData.length > 0 && (
        <div>
          <h2 className="text-base font-semibold text-gray-300 mb-4">Storico risultati</h2>
          <div className="card" style={{ height: 250 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <XAxis dataKey="name" tick={{ fill: '#4b5563', fontSize: 10 }} axisLine={{ stroke: '#1e1e32' }} tickLine={false} />
                <YAxis tick={{ fill: '#4b5563', fontSize: 10 }} domain={[0, 100]} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{ background: '#10101e', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, fontSize: 12 }}
                  labelStyle={{ color: '#c4b5fd' }}
                  cursor={{ fill: 'rgba(124,58,237,0.06)' }}
                />
                <Bar dataKey="punteggio" fill="url(#quizGrad)" radius={[6, 6, 0, 0]} />
                <defs>
                  <linearGradient id="quizGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#7c3aed" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {history && history.length > 0 && (
        <div>
          <h2 className="text-base font-semibold text-gray-300 mb-3">Ultimi quiz</h2>
          <div className="space-y-1.5">
            {history.slice(0, 8).map((h) => (
              <div key={h.id} className="card flex items-center justify-between py-3 px-4">
                <div>
                  <span className="text-sm text-gray-300">{h.section_name || 'Quiz misto'}</span>
                  <div className="text-[11px] text-gray-600">{new Date(h.created_at).toLocaleString('it-IT')}</div>
                </div>
                <div className={`text-sm font-bold font-mono ${(h.score / h.total) >= 0.7 ? 'text-emerald-400' : 'text-red-400'}`}>
                  {h.score}/{h.total} ({Math.round((h.score / h.total) * 100)}%)
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
