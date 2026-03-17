import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';
import SearchBar from './SearchBar';

const navItems = [
  { to: '/', label: 'Dashboard', icon: '◈' },
  { to: '/study', label: 'Studio', icon: '◉' },
  { to: '/quiz', label: 'Quiz', icon: '◆' },
  { to: '/flashcards', label: 'Flashcards', icon: '▣' },
  { to: '/oral', label: 'Orale', icon: '◎' },
  { to: '/map', label: 'Mappa', icon: '◇' },
  { to: '/glossary', label: 'Glossario', icon: '▤' },
];

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-dark-800/80 backdrop-blur-xl border-b border-purple-500/20">
        <div className="flex items-center justify-between px-4 h-14">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden text-gray-400 hover:text-white p-1"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <NavLink to="/" className="flex items-center gap-2">
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-mono">
                S&R
              </span>
              <span className="text-sm text-gray-400 hidden sm:inline">Sistemi e Reti</span>
            </NavLink>
          </div>
          <SearchBar />
        </div>
      </header>

      <div className="flex pt-14 min-h-screen">
        {/* Sidebar overlay for mobile */}
        {sidebarOpen && (
          <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
        )}

        {/* Sidebar */}
        <nav className={`fixed lg:sticky top-14 left-0 h-[calc(100vh-3.5rem)] w-56 bg-dark-800 border-r border-purple-500/20 z-40 transition-transform lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} overflow-y-auto flex-shrink-0`}>
          <div className="p-3 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 ${
                    isActive || (item.to !== '/' && location.pathname.startsWith(item.to))
                      ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30'
                      : 'text-gray-400 hover:text-gray-200 hover:bg-dark-600'
                  }`
                }
              >
                <span className="text-base">{item.icon}</span>
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>

        {/* Main content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 min-w-0">
          <div className="max-w-5xl mx-auto animate-fade-in">
            <Outlet />
          </div>

          {/* Footer */}
          <footer className="fixed bottom-3 left-3 z-30">
            <span className="text-[10px] text-gray-600 font-mono tracking-widest uppercase opacity-60 hover:opacity-100 transition-opacity">
              blackchair cooked this site
            </span>
          </footer>
        </main>
      </div>
    </div>
  );
}
