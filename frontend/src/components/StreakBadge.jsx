import { useState, useEffect } from 'react';
import { api } from '../lib/api';

export default function StreakBadge() {
  const [streak, setStreak] = useState(0);
  const [studiedToday, setStudiedToday] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const refresh = () => {
    api.getStreak().then(data => {
      setStreak(data.streak);
      setStudiedToday(data.studiedToday);
    });
  };

  useEffect(() => {
    refresh();
    // Listen for custom streak update events
    const handler = () => refresh();
    window.addEventListener('streak-update', handler);
    return () => window.removeEventListener('streak-update', handler);
  }, []);

  const isActive = streak > 0;
  const isBurning = studiedToday && streak > 0;

  return (
    <div
      className="relative flex items-center gap-1.5 cursor-pointer select-none"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onClick={() => setShowTooltip(!showTooltip)}
    >
      {/* Fire icon */}
      <div className={`relative flex items-center justify-center w-8 h-8 rounded-xl transition-all duration-300 ${
        isBurning
          ? 'bg-orange-500/15 shadow-sm shadow-orange-500/20'
          : isActive
            ? 'bg-orange-500/10'
            : 'bg-white/[0.04]'
      }`}>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill={isBurning ? 'url(#fireGrad)' : 'none'}
          stroke={isActive ? 'none' : '#555'}
          strokeWidth="1.5"
          className={isBurning ? 'animate-fire' : ''}
        >
          <defs>
            <linearGradient id="fireGrad" x1="12" y1="24" x2="12" y2="2" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f97316" />
              <stop offset="0.5" stopColor="#ef4444" />
              <stop offset="1" stopColor="#fbbf24" />
            </linearGradient>
          </defs>
          <path d="M12 2c0 4-4 6-4 10a4 4 0 0 0 8 0c0-4-4-6-4-10z" />
          <path
            d="M12 18c1.1 0 2-.9 2-2 0-2-2-3-2-5 0 2-2 3-2 5 0 1.1.9 2 2 2z"
            fill={isBurning ? '#fde047' : 'none'}
            stroke={isActive ? 'none' : '#555'}
            strokeWidth="1.5"
          />
        </svg>
        {isBurning && (
          <div className="absolute inset-0 rounded-xl bg-orange-400/20 animate-pulse" />
        )}
      </div>

      {/* Streak count */}
      <span className={`text-sm font-bold tabular-nums transition-colors duration-300 ${
        isBurning ? 'text-orange-400' : isActive ? 'text-orange-400/70' : 'text-gray-600'
      }`}>
        {streak}
      </span>

      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute top-full right-0 mt-2 w-56 p-3 bg-dark-800 border border-white/[0.08] rounded-xl shadow-xl z-50 text-left">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-lg">{isBurning ? '\u{1F525}' : '\u{1F9CA}'}</span>
            <span className="text-sm font-bold text-white">
              {streak > 0 ? `${streak} giorn${streak === 1 ? 'o' : 'i'} di streak!` : 'Nessuna streak'}
            </span>
          </div>
          <p className="text-[11px] text-gray-500 leading-relaxed">
            {isBurning
              ? streak >= 7
                ? 'Sei una macchina! Continua cosi!'
                : 'Hai studiato oggi! Torna domani per mantenere la streak.'
              : streak > 0
                ? 'Non hai ancora studiato oggi. Apri un argomento per mantenere la streak!'
                : 'Studia almeno un argomento al giorno per attivare la streak.'}
          </p>
          {streak >= 3 && (
            <div className="mt-2 pt-2 border-t border-white/[0.06]">
              <span className="text-[10px] text-orange-400/80 font-medium">
                {streak >= 30 ? '\u{1F3C6} Leggenda!' : streak >= 14 ? '\u{1F31F} Inarrestabile!' : streak >= 7 ? '\u{1F525} In fiamme!' : '\u{2B50} Ottimo inizio!'}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
