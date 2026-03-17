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

  if (loading) return <div className="text-center text-gray-500 py-20">Caricamento quiz...</div>;
  if (questions.length === 0) return <div className="text-center text-gray-500 py-20">Nessuna domanda disponibile.</div>;

  if (!started) {
    return (
      <div className="max-w-lg mx-auto text-center space-y-6 py-12">
        <h1 className="text-2xl font-bold text-gray-100">
          {sectionId ? `Quiz Sezione ${sectionId}` : 'Quiz Misto'}
        </h1>
        <p className="text-gray-400">{questions.length} domande</p>
        <label className="flex items-center justify-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={timerEnabled}
            onChange={e => setTimerEnabled(e.target.checked)}
            className="w-4 h-4 accent-purple-500"
          />
          <span className="text-sm text-gray-300">Timer (30s per domanda)</span>
        </label>
        <button onClick={() => setStarted(true)} className="btn-primary text-lg px-8 py-3">
          Inizia quiz
        </button>
      </div>
    );
  }

  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="max-w-lg mx-auto text-center space-y-6 py-12">
        <h1 className="text-3xl font-bold text-gray-100">Quiz completato!</h1>
        <div className={`text-6xl font-bold ${pct >= 70 ? 'text-green-400' : pct >= 50 ? 'text-yellow-400' : 'text-red-400'}`}>
          {pct}%
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
        <span className="text-sm text-gray-500">Domanda {current + 1}/{questions.length}</span>
        <div className="flex items-center gap-3">
          {timerEnabled && (
            <span className={`text-sm font-mono ${timeLeft <= 5 ? 'text-red-400' : 'text-gray-400'}`}>
              {timeLeft}s
            </span>
          )}
          <span className="text-sm text-gray-500">Punti: {score}</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-1 bg-dark-500 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300"
          style={{ width: `${((current + 1) / questions.length) * 100}%` }}
        />
      </div>

      <div className="card">
        <h2 className="text-lg font-medium text-gray-100 mb-6">{q.question}</h2>

        <div className="space-y-3">
          {options.map(opt => {
            let classes = 'w-full text-left p-4 rounded-lg border transition-all duration-200 ';
            if (!showResult) {
              classes += 'border-dark-500 bg-dark-600 hover:border-purple-500/50 hover:bg-dark-500 cursor-pointer';
            } else if (opt.key === q.correct_answer) {
              classes += 'border-green-500 bg-green-500/10 text-green-300';
            } else if (opt.key === selected && opt.key !== q.correct_answer) {
              classes += 'border-red-500 bg-red-500/10 text-red-300';
            } else {
              classes += 'border-dark-500 bg-dark-600 opacity-50';
            }

            return (
              <button
                key={opt.key}
                onClick={() => handleAnswer(opt.key)}
                disabled={showResult}
                className={classes}
              >
                <span className="font-mono text-purple-400 mr-3">{opt.key}.</span>
                <span className="text-sm">{opt.text}</span>
              </button>
            );
          })}
        </div>

        {showResult && q.explanation && (
          <div className="mt-4 p-3 rounded-lg bg-dark-800 border border-purple-500/20">
            <p className="text-sm text-gray-400">{q.explanation}</p>
          </div>
        )}

        {showResult && (
          <button onClick={next} className="btn-primary mt-4 w-full">
            {current + 1 >= questions.length ? 'Vedi risultato' : 'Prossima domanda →'}
          </button>
        )}
      </div>
    </div>
  );
}
