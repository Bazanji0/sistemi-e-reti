import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { api } from '../lib/api';
import { useFetch } from '../hooks/useFetch';

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
      const data = sectionId
        ? await api.getFlashcardsBySection(sectionId)
        : await api.getAllFlashcards();
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

  if (!sectionId && !loading) {
    return (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
          Flashcards
        </h1>
        <p className="text-gray-500">Seleziona una sezione o studia tutte le flashcards</p>
        <Link to="/flashcards/all" className="card block text-center neon-glow">
          <div className="text-2xl mb-2">▣</div>
          <div className="font-semibold text-purple-300">Tutte le flashcards</div>
          <div className="text-xs text-gray-500 mt-1">Spaced repetition su tutti gli argomenti</div>
        </Link>
        <div className="grid sm:grid-cols-2 gap-3">
          {sections?.map(s => (
            <Link key={s.id} to={`/flashcards/${s.id}`} className="card group">
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
  if (cards.length === 0) return <div className="text-center text-gray-500 py-20">Nessuna flashcard disponibile.</div>;

  const card = cards[current];

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <Link to="/flashcards" className="text-sm text-gray-500 hover:text-purple-400">← Flashcards</Link>
        <span className="text-sm text-gray-500">{current + 1}/{cards.length}</span>
      </div>

      <div className="flex justify-center gap-4 text-sm">
        <span className="text-green-400">✓ {stats.correct}</span>
        <span className="text-red-400">✗ {stats.wrong}</span>
      </div>

      {/* Flashcard */}
      <div
        className={`cursor-pointer ${flipped ? 'flashcard-flipped' : ''}`}
        style={{ perspective: '1000px', height: '300px' }}
        onClick={() => setFlipped(!flipped)}
      >
        <div className="flashcard-inner">
          <div className="flashcard-front card flex items-center justify-center text-center p-8 neon-glow">
            <div>
              <div className="text-xs text-purple-400 mb-3 font-mono">DOMANDA</div>
              <p className="text-lg font-medium text-gray-100">{card.front}</p>
              <div className="text-xs text-gray-600 mt-4">Clicca per girare</div>
            </div>
          </div>
          <div className="flashcard-back card flex items-center justify-center text-center p-8 border-blue-500/30">
            <div>
              <div className="text-xs text-blue-400 mb-3 font-mono">RISPOSTA</div>
              <p className="text-sm text-gray-200 leading-relaxed">{card.back}</p>
            </div>
          </div>
        </div>
      </div>

      {flipped && (
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => handleResult(false)}
            className="px-6 py-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300 hover:bg-red-500/30 transition-colors"
          >
            ✗ Non sapevo
          </button>
          <button
            onClick={() => handleResult(true)}
            className="px-6 py-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300 hover:bg-green-500/30 transition-colors"
          >
            ✓ Sapevo
          </button>
        </div>
      )}
    </div>
  );
}
