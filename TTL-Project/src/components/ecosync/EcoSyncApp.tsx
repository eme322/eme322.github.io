import { useState } from 'react';
import { Leaf, Bell, LayoutDashboard, BarChart3, Settings2, Cog, ArrowLeft } from 'lucide-react';
import Dashboard from './Dashboard';
import Usage from './Usage';
import Automations from './Automations';

type Tab = 'dashboard' | 'usage' | 'automations' | 'settings';

interface EcoSyncAppProps {
  onExit: () => void;
}

export default function EcoSyncApp({ onExit }: EcoSyncAppProps) {
  const [tab, setTab] = useState<Tab>('dashboard');

  return (
    <div className="min-h-screen bg-eco-surface text-eco-on-surface font-body pb-24 pt-14">
      <header className="sticky top-14 z-50 glass-nav border-b border-eco-outline-variant/10 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={onExit} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-eco-surface-container transition-colors">
            <ArrowLeft className="w-5 h-5 text-eco-on-surface" />
          </button>
          <h1 className="font-headline text-xl font-bold tracking-tight text-eco-on-surface flex items-center gap-2">
            <Leaf className="w-5 h-5 text-eco-primary" />
            EcoSync
          </h1>
        </div>
        <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-eco-surface-container transition-colors">
          <Bell className="w-5 h-5 text-eco-on-surface" />
        </button>
      </header>

      {tab === 'dashboard' && <Dashboard />}
      {tab === 'usage' && <Usage />}
      {tab === 'automations' && <Automations />}
      {tab === 'settings' && <SettingsPlaceholder onExit={onExit} />}

      <nav className="fixed bottom-0 left-0 right-0 z-50 glass-nav border-t border-eco-outline-variant/10 px-6 py-3">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <NavButton icon={LayoutDashboard} label="Dashboard" active={tab === 'dashboard'} onClick={() => setTab('dashboard')} />
          <NavButton icon={BarChart3} label="Usage" active={tab === 'usage'} onClick={() => setTab('usage')} />
          <NavButton icon={Settings2} label="Automations" active={tab === 'automations'} onClick={() => setTab('automations')} />
          <NavButton icon={Cog} label="Settings" active={tab === 'settings'} onClick={() => setTab('settings')} />
        </div>
      </nav>
    </div>
  );
}

function NavButton({ icon: Icon, label, active, onClick }: { icon: typeof Leaf; label: string; active: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick} className={`flex flex-col items-center gap-1 transition-colors ${active ? 'text-eco-primary' : 'text-eco-outline hover:text-eco-on-surface'}`}>
      <Icon className="w-6 h-6" fill={active ? 'currentColor' : 'none'} strokeWidth={active ? 2.5 : 2} />
      <span className={`text-[10px] uppercase tracking-wider ${active ? 'font-bold' : 'font-medium'}`}>{label}</span>
      {active && <div className="w-1 h-1 rounded-full bg-eco-primary" />}
    </button>
  );
}

function SettingsPlaceholder({ onExit }: { onExit: () => void }) {
  return (
    <main className="max-w-5xl mx-auto px-6 py-8">
      <h2 className="font-headline text-3xl font-bold mb-4">Settings</h2>
      <p className="text-eco-on-surface-variant mb-6">Manage your account and preferences.</p>
      <button onClick={onExit} className="px-6 py-3 bg-eco-primary text-eco-on-primary rounded-lg font-semibold hover:bg-eco-primary/90 transition-colors">
        Back to Home
      </button>
    </main>
  );
}
