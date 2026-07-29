import { useState, useEffect } from 'react';
import { Leaf, Sprout, ArrowRight, Zap, Handshake, BarChart3, Cog, Compass } from 'lucide-react';
import EcoSyncApp from './components/ecosync/EcoSyncApp';
import BloomApp from './components/bloom/BloomApp';
import NavBar, { type Route } from './components/NavBar';
import Portfolio1 from './components/portfolio/Portfolio1';
import Portfolio2 from './components/portfolio/Portfolio2';

type AppMode = 'ecosync' | 'bloom';

function App() {
  const [route, setRoute] = useState<Route>('home');
  const [appMode, setAppMode] = useState<AppMode | null>(null);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash === 'ecosync') { setRoute('home'); setAppMode('ecosync'); }
    else if (hash === 'bloom') { setRoute('home'); setAppMode('bloom'); }
    else if (hash === 'portfolio1') { setRoute('portfolio1'); setAppMode(null); }
    else if (hash === 'portfolio2') { setRoute('portfolio2'); setAppMode(null); }
    else { setRoute('home'); setAppMode(null); }
  }, []);

  const navigate = (target: Route) => {
    window.location.hash = target === 'home' ? '' : target;
    setRoute(target);
    setAppMode(null);
    window.scrollTo(0, 0);
  };

  const openApp = (app: AppMode) => {
    window.location.hash = app;
    setAppMode(app);
    window.scrollTo(0, 0);
  };

  if (appMode === 'ecosync') {
    return (
      <>
        <NavBar current="home" onNavigate={navigate} />
        <EcoSyncApp onExit={() => navigate('home')} />
      </>
    );
  }
  if (appMode === 'bloom') {
    return (
      <>
        <NavBar current="home" onNavigate={navigate} />
        <BloomApp onExit={() => navigate('home')} />
      </>
    );
  }
  if (route === 'portfolio1') {
    return (
      <>
        <NavBar current={route} onNavigate={navigate} />
        <Portfolio1 onNavigate={(r) => { if (r === 'bloom') openApp('bloom'); else navigate(r); }} />
      </>
    );
  }
  if (route === 'portfolio2') {
    return (
      <>
        <NavBar current={route} onNavigate={navigate} />
        <Portfolio2 onNavigate={(r) => { if (r === 'bloom') openApp('bloom'); else navigate(r); }} />
      </>
    );
  }

  return (
    <>
      <NavBar current={route} onNavigate={navigate} />
      <Landing onChoose={openApp} />
    </>
  );
}

function Landing({ onChoose }: { onChoose: (app: AppMode) => void }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-eco-surface via-bloom-surface to-eco-surface-container-low flex flex-col pt-14">
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-16 max-w-6xl mx-auto w-full">
        <div className="text-center mb-16 max-w-2xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-eco-primary/10 text-eco-primary text-sm font-semibold mb-6">
            Two Apps, One Build
          </span>
          <h2 className="font-headline text-5xl md:text-6xl font-bold text-eco-on-surface leading-tight mb-6">
            Choose an experience to explore
          </h2>
          <p className="text-lg text-eco-on-surface-variant leading-relaxed">
            Two fully-featured mobile-first apps built from HTML reference designs. Tap a card to dive in.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          {/* EcoSync Card */}
          <button
            onClick={() => onChoose('ecosync')}
            className="group relative overflow-hidden rounded-2xl bg-eco-surface-container-lowest p-8 text-left shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-eco-outline-variant/10"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-eco-primary/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-eco-primary/20 transition-all" />
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-eco-primary flex items-center justify-center mb-6">
                <Leaf className="w-8 h-8 text-eco-on-primary" />
              </div>
              <h3 className="font-headline text-3xl font-bold text-eco-on-surface mb-2">EcoSync</h3>
              <p className="text-eco-on-surface-variant mb-6 leading-relaxed">
                Smart home energy and resource management. Track usage, automate savings, and optimize your carbon footprint.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  { icon: BarChart3, label: 'Dashboard' },
                  { icon: Zap, label: 'Usage' },
                  { icon: Cog, label: 'Automations' },
                ].map((f) => (
                  <span key={f.label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-eco-surface-container text-eco-on-surface-variant text-sm font-medium">
                    <f.icon className="w-3.5 h-3.5" />
                    {f.label}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2 text-eco-primary font-semibold group-hover:gap-3 transition-all">
                Open EcoSync
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </button>

          {/* Bloom Card */}
          <button
            onClick={() => onChoose('bloom')}
            className="group relative overflow-hidden rounded-2xl bg-bloom-surface-container-lowest p-8 text-left shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-bloom-outline-variant/10"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-bloom-primary/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-bloom-primary/20 transition-all" />
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-bloom-primary flex items-center justify-center mb-6">
                <Sprout className="w-8 h-8 text-bloom-on-primary" />
              </div>
              <h3 className="font-jakarta text-3xl font-bold text-bloom-on-surface mb-2">Bloom</h3>
              <p className="text-bloom-on-surface-variant mb-6 leading-relaxed">
                Skill-swapping community for teens. Discover, match, trade talents, and grow together in a safe space.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  { icon: Compass, label: 'Discover' },
                  { icon: Handshake, label: 'Matches' },
                  { icon: Sprout, label: 'Profile' },
                ].map((f) => (
                  <span key={f.label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-bloom-surface-container text-bloom-on-surface-variant text-sm font-medium">
                    <f.icon className="w-3.5 h-3.5" />
                    {f.label}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2 text-bloom-primary font-semibold group-hover:gap-3 transition-all">
                Open Bloom
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </button>
        </div>
      </main>

      <footer className="px-6 py-8 text-center text-sm text-eco-on-surface-variant">
        Built with React, Tailwind CSS, and Lucide icons
      </footer>
    </div>
  );
}

export default App;
