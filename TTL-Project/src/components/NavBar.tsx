import { useState } from 'react';
import { Sprout, Menu, X, Home, User } from 'lucide-react';

export type Route = 'home' | 'bloom' | 'portfolio1' | 'portfolio2';

interface NavBarProps {
  current: Route;
  onNavigate: (route: Route) => void;
}

export default function NavBar({ current, onNavigate }: NavBarProps) {
  const [open, setOpen] = useState(false);

  const links: { route: Route; label: string; icon: typeof Home }[] = [
    { route: 'home', label: 'Home', icon: Home },
    { route: 'portfolio1', label: 'Author 1 Portfolio', icon: User },
    { route: 'portfolio2', label: 'Author 2 Portfolio', icon: User },
  ];

  const handleNavigate = (route: Route) => {
    onNavigate(route);
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-bloom-surface/90 backdrop-blur-md border-b border-bloom-outline-variant/30">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-14">
          <button
            onClick={() => handleNavigate('home')}
            className="flex items-center gap-2 font-jakarta text-xl font-bold text-bloom-primary hover:opacity-80 transition-opacity"
          >
            <Sprout className="w-5 h-5" fill="currentColor" />
            Bloom
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <button
                key={link.route}
                onClick={() => handleNavigate(link.route)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  current === link.route
                    ? 'bg-bloom-primary-container text-bloom-on-primary-container'
                    : 'text-bloom-on-surface-variant hover:bg-bloom-surface-container-high hover:text-bloom-on-surface'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg hover:bg-bloom-surface-container-high transition-colors"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav className="md:hidden pb-4 flex flex-col gap-1 animate-fade-in-up">
            {links.map((link) => (
              <button
                key={link.route}
                onClick={() => handleNavigate(link.route)}
                className={`px-4 py-3 rounded-lg text-sm font-semibold text-left transition-all flex items-center gap-2 ${
                  current === link.route
                    ? 'bg-bloom-primary-container text-bloom-on-primary-container'
                    : 'text-bloom-on-surface-variant hover:bg-bloom-surface-container-high'
                }`}
              >
                <link.icon className="w-4 h-4" />
                {link.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
