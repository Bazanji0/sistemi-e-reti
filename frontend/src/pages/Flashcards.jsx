import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { api } from '../lib/api';
import { useFetch } from '../hooks/useFetch';
import { FlashcardIcon } from '../components/Icons';

export default function Flashcards() {
  const { sectionId } = useParams();
  const [cards, setCards] = useState([]);
  const [current, setCurrent] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ correct: 0, wrong: 0 });
  const { data: sections } = useFetch(() => api.getSections(), []);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const data = (!sectionId || sectionId === 'all')
        ? await api.getAllFlashcards()
        : await api.getFlashcardsBySection(sectionId);
      setCards(data);
      setCurrent(0);
      setFlipped(false);
      setStats({ correct: 0, wrong: 0 });
      setLoading(false);
    };
    load();
  }, [sectionId]);

  const handleResult = async (correct) => {
    if (cards[current]) {
      await api.submitFlashcardResult(cards[current].id, correct);
      setStats(s => ({
        correct: s.correct + (correct ? 1 : 0),
        wrong: s.wrong + (correct ? 0 : 1),
      }));
    }
    setFlipped(false);
    setTimeout(() => {
      if (current + 1 < cards.length) {
        setCurrent(c => c + 1);
      } else {
        setCurrent(0);
      }
    }, 200);
  };

  if (!sectionId) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="page-title">Flashcards</h1>
          <p className="page-subtitle">Seleziona una sezione o studia tutte le flashcards</p>
        </div>
        <Link to="/flashcards/all" className="card-glow block text-center py-8 group">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-400 mb-3 group-hover:scale-110 transition-transform">
            <FlashcardIcon />
          </div>
          <div className="font-semibold text-white">Tutte le flashcards</div>
          <div className="text-xs text-gray-500 mt-1">Spaced repetition su tutti gli argomenti</div>
        </Link>
        <div className="grid sm:grid-cols-2 gap-2.5">
          {sections?.map(s => (
            <Link key={s.id} to={`/flashcards/${s.id}`} className="card group">
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
  if (cards.length === 0) return <div className="text-center text-gray-600 py-20">Nessuna flashcard disponibile.</div>;

  const card = cards[current];

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <Link to="/flashcards" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-purple-400 transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M15 18l-6-6 6-6" /></svg>
          Flashcards
        </Link>
        <span className="text-sm text-gray-500 font-mono">{current + 1}/{cards.length}</span>
      </div>

      <div className="flex justify-center gap-6 text-sm">
        <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
          {stats.correct}
        </span>
        <span className="flex items-center gap-1.5 text-red-400 font-medium">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
          {stats.wrong}
        </span>
      </div>

      {/* Flashcard */}
      <div
        className={`cursor-pointer ${flipped ? 'flashcard-flipped' : ''}`}
        style={{ perspective: '1000px', height: '300px' }}
        onClick={() => setFlipped(!flipped)}
      >
        <div className="flashcard-inner">
          <div className="flashcard-front card-glow flex items-center justify-center text-center p-8">
            <div>
              <div className="text-[10px] text-purple-400 mb-4 font-mono font-medium tracking-widest uppercase">Domanda</div>
              <p className="text-lg font-medium text-white leading-relaxed">{card.front}</p>
              <div className="text-[11px] text-gray-600 mt-5">Clicca per girare</div>
            </div>
          </div>
          <div className="flashcard-back card flex items-center justify-center text-center p-8 border-blue-500/20">
            <div>
              <div className="text-[10px] text-blue-400 mb-4 font-mono font-medium tracking-widest uppercase">Risposta</div>
              <p className="text-sm text-gray-300 leading-relaxed">{card.back}</p>
            </div>
          </div>
        </div>
      </div>

      {flipped && (
        <div className="flex gap-3 justify-center animate-fade-in">
          <button
            onClick={() => handleResult(false)}
            className="px-6 py-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 hover:bg-red-500/20 transition-all flex items-center gap-2"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            Non sapevo
          </button>
          <button
            onClick={() => handleResult(true)}
            className="px-6 py-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 hover:bg-emerald-500/20 transition-all flex items-center gap-2"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            Sapevo
          </button>
        </div>
      )}
    </div>
  );
}
