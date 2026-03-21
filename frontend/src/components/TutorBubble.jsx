import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function TutorBubble() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Appare dopo 800ms con animazione
    const timer = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  // Auto-nascondi il fumetto dopo 6 secondi
  useEffect(() => {
    if (visible && !dismissed) {
      const timer = setTimeout(() => setDismissed(true), 6000);
      return () => clearTimeout(timer);
    }
  }, [visible, dismissed]);

  const handleClick = () => {
    navigate('/chat');
  };

  const handleBubbleClick = (e) => {
    e.stopPropagation();
    setDismissed(true);
  };

  return (
    <div className={`fixed bottom-6 right-6 z-50 flex items-end gap-3 transition-all duration-500 ${
      visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}>
      {/* Fumetto */}
      {!dismissed && (
        <div
          className="relative bg-white/[0.08] backdrop-blur-xl border border-white/[0.12] rounded-2xl rounded-br-md px-4 py-2.5 shadow-xl cursor-pointer hover:bg-white/[0.12] transition-all duration-200 animate-fade-in-up max-w-[220px]"
          onClick={handleBubbleClick}
        >
          <p className="text-sm text-gray-200 font-medium leading-snug">
            Salame, se hai qualche dubbio chiedi 😏
          </p>
          {/* Freccia del fumetto verso destra */}
          <div className="absolute -right-2 bottom-3 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-white/[0.08]" />
        </div>
      )}

      {/* Avatar cliccabile */}
      <button
        onClick={handleClick}
        className="relative group flex-shrink-0"
        title="Apri Tutor AI"
      >
        {/* Glow di sfondo */}
        <div className="absolute -inset-1 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-full blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Avatar */}
        <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-purple-500/40 group-hover:border-purple-400/70 transition-all duration-300 group-hover:scale-105 shadow-lg shadow-purple-500/20">
          <img
            src={import.meta.env.BASE_URL + 'tutor-avatar.png'}
            alt="Tutor AI"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Pallino online */}
        <div className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-emerald-500 rounded-full border-2 border-dark-900 flex items-center justify-center">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
        </div>
      </button>
    </div>
  );
}
