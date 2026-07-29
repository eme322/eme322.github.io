import { useState } from 'react';
import { Bell, MoreVertical, ArrowLeft, Compass, Handshake, MessageCircle, User } from 'lucide-react';
import Discover from './Discover';
import SwapRequest from './SwapRequest';
import ActiveSwaps from './ActiveSwaps';
import Profile from './Profile';

type Tab = 'discover' | 'matches' | 'swaps' | 'profile';

interface BloomAppProps {
  onExit: () => void;
}

export default function BloomApp({ onExit }: BloomAppProps) {
  const [tab, setTab] = useState<Tab>('discover');

  return (
    <div className="min-h-screen bg-bloom-background text-bloom-on-surface font-vietnam flex flex-col">
      <header className="fixed top-14 w-full z-50 glass-nav-bloom border-b border-bloom-outline-variant/20 h-16 flex justify-between items-center px-5 max-w-container-max mx-auto">
        <div className="flex items-center gap-3">
          <button onClick={onExit} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-bloom-surface-container-low transition-colors">
            <ArrowLeft className="w-5 h-5 text-bloom-on-surface-variant" />
          </button>
          <h1 className="font-jakarta text-2xl font-bold text-bloom-primary">Bloom</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-bloom-surface-container-low transition-colors text-bloom-on-surface-variant active:scale-90 transition-transform duration-200">
            <Bell className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full hover:bg-bloom-surface-container-low transition-colors text-bloom-on-surface-variant active:scale-90 transition-transform duration-200">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
      </header>

      <div className="flex-1 pt-28">
        {tab === 'discover' && <Discover />}
        {tab === 'matches' && <SwapRequest onAccept={() => setTab('swaps')} />}
        {tab === 'swaps' && <ActiveSwaps />}
        {tab === 'profile' && <Profile />}
      </div>

      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-3 bg-bloom-surface-container-lowest border-t border-bloom-outline-variant z-50">
        <NavButton icon={Compass} label="Discover" active={tab === 'discover'} onClick={() => setTab('discover')} highlight={tab === 'discover'} />
        <NavButton icon={Handshake} label="Matches" active={tab === 'matches'} onClick={() => setTab('matches')} />
        <NavButton icon={MessageCircle} label="Swaps" active={tab === 'swaps'} onClick={() => setTab('swaps')} />
        <NavButton icon={User} label="Profile" active={tab === 'profile'} onClick={() => setTab('profile')} />
      </nav>
    </div>
  );
}

function NavButton({ icon: Icon, label, active, onClick, highlight }: { icon: typeof Bell; label: string; active: boolean; onClick: () => void; highlight?: boolean }) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center transition-all ${
        highlight ? 'bg-bloom-primary-container text-bloom-on-primary-container rounded-full px-6 py-1 scale-105' : 'text-bloom-on-surface-variant hover:bg-bloom-surface-container-high p-2 rounded-lg'
      }`}
    >
      <Icon className="w-5 h-5" fill={active ? 'currentColor' : 'none'} strokeWidth={active ? 2.5 : 2} />
      <span className="text-sm font-semibold">{label}</span>
    </button>
  );
}
