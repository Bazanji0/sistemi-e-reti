import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { api } from '../lib/api';

export default function QuizPlay() {
  const { sectionId } = useParams();
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [loading, setLoading] = useState(true);
  const [timerEnabled, setTimerEnabled] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [started, setStarted] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const load = async () => {
      const data = sectionId
        ? await api.getQuizBySection(sectionId, 10)
        : await api.getMixedQuiz(15);
      setQuestions(data);
      setLoading(false);
    };
    load();
  }, [sectionId]);

  useEffect(() => {
    if (timerEnabled && started && !showResult && !finished) {
      setTimeLeft(30);
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            handleAnswer(null);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timerRef.current);
    }
  }, [current, timerEnabled, started, finished]);

  const handleAnswer = (answer) => {
    if (showResult) return;
    clearInterval(timerRef.current);
    setSelected(answer);
    setShowResult(true);
    if (answer === questions[current].correct_answer) {
      setScore(s => s + 1);
    }
  };

  const next = async () => {
    if (current + 1 >= questions.length) {
      setFinished(true);
      await api.submitQuizResult({
        section_id: sectionId || null,
        score,
        total: questions.length,
      });
    } else {
      setCurrent(c => c + 1);
      setSelected(null);
      setShowResult(false);
    }
  };

  if (loading) return <div className="text-center text-gray-600 py-20">Caricamento quiz...</div>;
  if (questions.length === 0) return <div className="text-center text-gray-600 py-20">Nessuna domanda disponibile.</div>;

  if (!started) {
    return (
      <div className="max-w-lg mx-auto text-center space-y-8 py-16">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-500/10 text-purple-400 mb-2">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><circle cx="12" cy="12" r="10" /><line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">
            {sectionId ? `Quiz Sezione ${sectionId}` : 'Quiz Misto'}
          </h1>
          <p className="text-gray-500 mt-2">{questions.length} domande</p>
        </div>
        <label className="flex items-center justify-center gap-3 cursor-pointer group">
          <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-colors ${timerEnabled ? 'bg-purple-600 border-purple-600' : 'border-gray-600 group-hover:border-gray-500'}`}>
            {timerEnabled && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>}
          </div>
          <input type="checkbox" checked={timerEnabled} onChange={e => setTimerEnabled(e.target.checked)} className="sr-only" />
          <span className="text-sm text-gray-400">Timer (30s per domanda)</span>
        </label>
        <button onClick={() => setStarted(true)} className="btn-primary text-base px-10 py-3.5">
          Inizia quiz
        </button>
      </div>
    );
  }

  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    const color = pct >= 70 ? 'text-emerald-400' : pct >= 50 ? 'text-amber-400' : 'text-red-400';
    return (
      <div className="max-w-lg mx-auto text-center space-y-8 py-16">
        <h1 className="text-2xl font-bold text-white">Quiz completato!</h1>
        <div className="relative inline-flex items-center justify-center">
          <svg width="160" height="160" viewBox="0 0 160 160">
            <circle cx="80" cy="80" r="70" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="8" />
            <circle cx="80" cy="80" r="70" fill="none" stroke="url(#scoreGrad)" strokeWidth="8" strokeLinecap="round"
              strokeDasharray={`${pct * 4.4} ${440 - pct * 4.4}`} strokeDashoffset="110"
              style={{ transition: 'stroke-dasharray 1s ease' }} />
            <defs>
              <linearGradient id="scoreGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor={pct >= 70 ? '#10b981' : pct >= 50 ? '#f59e0b' : '#ef4444'} />
                <stop offset="100%" stopColor={pct >= 70 ? '#3b82f6' : pct >= 50 ? '#ef4444' : '#dc2626'} />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute">
            <div className={`text-4xl font-bold ${color}`}>{pct}%</div>
          </div>
        </div>
        <p className="text-gray-400">{score}/{questions.length} risposte corrette</p>
        <div className="flex justify-center gap-3">
          <Link to="/quiz" className="btn-secondary">Torna ai quiz</Link>
          <button onClick={() => window.location.reload()} className="btn-primary">Riprova</button>
        </div>
      </div>
    );
  }

  const q = questions[current];
  const options = [
    { key: 'A', text: q.option_a },
    { key: 'B', text: q.option_b },
    { key: 'C', text: q.option_c },
    { key: 'D', text: q.option_d },
  ];

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500 font-medium">Domanda {current + 1}/{questions.length}</span>
        <div className="flex items-center gap-3">
          {timerEnabled && (
            <span className={`text-sm font-mono font-bold ${timeLeft <= 5 ? 'text-red-400' : 'text-gray-400'}`}>
              {timeLeft}s
            </span>
          )}
          <span className="text-sm text-purple-400 font-mono">{score} pt</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-1 bg-white/[0.06] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-300"
          style={{
            width: `${((current + 1) / questions.length) * 100}%`,
            background: 'linear-gradient(90deg, #7c3aed, #3b82f6)',
          }}
        />
      </div>

      <div className="card p-6">
        <h2 className="text-lg font-medium text-white mb-6 leading-relaxed">{q.question}</h2>

        <div className="space-y-2.5">
          {options.map(opt => {
            let classes = 'w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-start gap-3 ';
            if (!showResult) {
              classes += 'border-white/[0.06] bg-white/[0.02] hover:border-purple-500/30 hover:bg-purple-500/[0.04] cursor-pointer';
            } else if (opt.key === q.correct_answer) {
              classes += 'border-emerald-500/40 bg-emerald-500/[0.08] text-emerald-300';
            } else if (opt.key === selected && opt.key !== q.correct_answer) {
              classes += 'border-red-500/40 bg-red-500/[0.08] text-red-300';
            } else {
              classes += 'border-white/[0.04] bg-white/[0.01] opacity-40';
            }

            return (
              <button key={opt.key} onClick={() => handleAnswer(opt.key)} disabled={showResult} className={classes}>
                <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                  showResult && opt.key === q.correct_answer ? 'bg-emerald-500/20 text-emerald-400' :
                  showResult && opt.key === selected ? 'bg-red-500/20 text-red-400' :
                  'bg-white/[0.04] text-gray-500'
                }`}>
                  {opt.key}
                </span>
                <span className="text-sm mt-0.5">{opt.text}</span>
              </button>
            );
          })}
        </div>

        {showResult && q.explanation && (
          <div className="mt-5 p-4 rounded-xl bg-purple-500/[0.05] border border-purple-500/10">
            <p className="text-sm text-gray-400 leading-relaxed">{q.explanation}</p>
          </div>
        )}

        {showResult && (
          <button onClick={next} className="btn-primary mt-5 w-full py-3">
            {current + 1 >= questions.length ? 'Vedi risultato' : 'Prossima domanda'}
          </button>
        )}
      </div>
    </div>
  );
}
