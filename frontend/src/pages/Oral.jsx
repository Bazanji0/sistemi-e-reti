import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { api } from '../lib/api';
import { useFetch } from '../hooks/useFetch';
import { OralIcon } from '../components/Icons';

export default function Oral() {
  const { sectionId } = useParams();
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showModel, setShowModel] = useState(false);
  const [loading, setLoading] = useState(true);
  const { data: sections } = useFetch(() => api.getSections(), []);

  useEffect(() => {
    if (!sectionId) { setLoading(false); return; }
    const load = async () => {
      setLoading(true);
      let data;
      if (sectionId === 'cross') {
        data = await api.getCrossOral();
      } else if (sectionId === 'all') {
        data = await api.getAllOral();
      } else {
        data = await api.getOralBySection(sectionId);
      }
      setQuestions(data);
      setCurrent(0);
      setUserAnswer('');
      setShowModel(false);
      setLoading(false);
    };
    load();
  }, [sectionId]);

  if (!sectionId) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="page-title">Simulazione Orale</h1>
          <p className="page-subtitle">Prepara il tuo colloquio di maturità</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          <Link to="/oral/all" className="card-glow text-center py-8 group">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 mb-3 group-hover:scale-110 transition-transform">
              <OralIcon />
            </div>
            <div className="font-semibold text-white">Tutte le domande</div>
          </Link>
          <Link to="/oral/cross" className="card-glow text-center py-8 group">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-400 mb-3 group-hover:scale-110 transition-transform">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <div className="font-semibold text-white">Cross-sezione</div>
            <div className="text-xs text-gray-500 mt-1">Collegamento tra argomenti</div>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 gap-2.5">
          {sections?.map(s => (
            <Link key={s.id} to={`/oral/${s.id}`} className="card group">
              <div className="flex items-center gap-3">
                <div className="section-badge w-9 h-9 text-xs">{s.code}</div>
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors font-medium">{s.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  if (loading) return <div className="text-center text-gray-600 py-20">Caricamento...</div>;
  if (questions.length === 0) return <div className="text-center text-gray-600 py-20">Nessuna domanda disponibile.</div>;

  const q = questions[current];

  const handleNext = () => {
    setCurrent(c => (c + 1) % questions.length);
    setUserAnswer('');
    setShowModel(false);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <Link to="/oral" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-purple-400 transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M15 18l-6-6 6-6" /></svg>
          Simulazione orale
        </Link>
        <span className="text-sm text-gray-500 font-mono">{current + 1}/{questions.length}</span>
      </div>

      <div className="card p-6">
        {q.cross_section ? (
          <span className="text-[11px] bg-blue-500/10 text-blue-400 px-2.5 py-1 rounded-lg border border-blue-500/15 mb-4 inline-block font-medium">
            Cross-sezione
          </span>
        ) : null}
        <h2 className="text-lg font-medium text-white mb-6 leading-relaxed">{q.question}</h2>

        <textarea
          value={userAnswer}
          onChange={e => setUserAnswer(e.target.value)}
          placeholder="Scrivi qui la tua risposta..."
          className="w-full h-40 bg-white/[0.02] border border-white/[0.06] rounded-xl p-4 text-sm text-gray-300 placeholder-gray-700 focus:outline-none focus:border-purple-500/30 resize-none transition-colors"
        />

        <button
          onClick={() => setShowModel(true)}
          className="btn-primary mt-4 w-full py-3"
          disabled={showModel}
        >
          {showModel ? 'Risposta modello visibile' : 'Mostra risposta modello'}
        </button>
      </div>

      {showModel && (
        <div className="card border-blue-500/15 animate-slide-up p-6">
          <div className="text-[10px] text-blue-400 font-mono font-medium tracking-widest uppercase mb-3">Risposta modello</div>
          <p className="text-sm text-gray-400 leading-relaxed whitespace-pre-line">{q.model_answer}</p>
        </div>
      )}

      <button onClick={handleNext} className="btn-secondary w-full py-3 flex items-center justify-center gap-2">
        Prossima domanda
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M9 18l6-6-6-6" /></svg>
      </button>
    </div>
  );
}
