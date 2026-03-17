import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { api } from '../lib/api';
import { useFetch } from '../hooks/useFetch';

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
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
          Simulazione Orale
        </h1>
        <p className="text-gray-500">Prepara il tuo colloquio di maturità</p>

        <div className="grid sm:grid-cols-2 gap-3">
          <Link to="/oral/all" className="card text-center neon-glow">
            <div className="text-2xl mb-2">◎</div>
            <div className="font-semibold text-purple-300">Tutte le domande</div>
          </Link>
          <Link to="/oral/cross" className="card text-center neon-glow">
            <div className="text-2xl mb-2">⬡</div>
            <div className="font-semibold text-blue-300">Domande cross-sezione</div>
            <div className="text-xs text-gray-500 mt-1">Collegamento tra argomenti diversi</div>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          {sections?.map(s => (
            <Link key={s.id} to={`/oral/${s.id}`} className="card group">
              <div className="flex items-center gap-3">
                <span className="font-mono text-purple-400 font-bold">{s.code}</span>
                <span className="text-sm text-gray-200 group-hover:text-purple-300 transition-colors">{s.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  if (loading) return <div className="text-center text-gray-500 py-20">Caricamento...</div>;
  if (questions.length === 0) return <div className="text-center text-gray-500 py-20">Nessuna domanda disponibile.</div>;

  const q = questions[current];

  const handleNext = () => {
    setCurrent(c => (c + 1) % questions.length);
    setUserAnswer('');
    setShowModel(false);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <Link to="/oral" className="text-sm text-gray-500 hover:text-purple-400">← Simulazione orale</Link>
        <span className="text-sm text-gray-500">{current + 1}/{questions.length}</span>
      </div>

      <div className="card">
        {q.cross_section ? (
          <span className="text-xs bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded border border-blue-500/20 mb-3 inline-block">
            Cross-sezione
          </span>
        ) : null}
        <h2 className="text-lg font-medium text-gray-100 mb-6">{q.question}</h2>

        <textarea
          value={userAnswer}
          onChange={e => setUserAnswer(e.target.value)}
          placeholder="Scrivi qui la tua risposta..."
          className="w-full h-40 bg-dark-800 border border-dark-500 rounded-lg p-4 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-purple-500/50 resize-none"
        />

        <button
          onClick={() => setShowModel(true)}
          className="btn-primary mt-4 w-full"
          disabled={showModel}
        >
          {showModel ? 'Risposta modello visibile' : 'Mostra risposta modello'}
        </button>
      </div>

      {showModel && (
        <div className="card border-blue-500/30 animate-slide-up">
          <div className="text-xs text-blue-400 font-mono mb-3">RISPOSTA MODELLO</div>
          <p className="text-sm text-gray-300 leading-relaxed whitespace-pre-line">{q.model_answer}</p>
        </div>
      )}

      <button onClick={handleNext} className="btn-secondary w-full">
        Prossima domanda →
      </button>
    </div>
  );
}
