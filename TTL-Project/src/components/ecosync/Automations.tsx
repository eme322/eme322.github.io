import { useState } from 'react';
import { Leaf, Droplets, Zap, Filter, Plus, Cloud, BatteryCharging, BadgeCheck } from 'lucide-react';

export default function Automations() {
  const [flows, setFlows] = useState<Record<string, boolean>>({
    peak: true,
    sprinkler: true,
    ev: true,
  });

  const toggle = (id: string) => setFlows((s) => ({ ...s, [id]: !s[id] }));

  return (
    <main className="max-w-5xl mx-auto px-6 py-8">
      {/* Editorial Header */}
      <section className="mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="inline-block px-3 py-1 rounded-full bg-eco-primary-fixed text-eco-on-primary-fixed text-xs font-bold mb-4">OPTIMIZED</span>
            <h2 className="font-headline text-5xl md:text-6xl font-medium tracking-tighter leading-none mb-6">Automations</h2>
            <p className="text-eco-on-surface-variant text-lg leading-relaxed font-light">
              The Luminous Engine is currently managing <span className="font-bold text-eco-primary italic">7 active flows</span> to reduce your carbon footprint while maximizing grid efficiency.
            </p>
          </div>
          <div className="flex gap-2">
            <button className="px-6 py-3 bg-eco-surface-container-highest rounded-lg font-medium flex items-center gap-2 transition-all hover:bg-eco-surface-container-high">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>
            <button className="px-6 py-3 bg-eco-primary text-eco-on-primary rounded-lg font-medium flex items-center gap-2 transition-all hover:shadow-lg hover:shadow-eco-primary-container/20">
              <Plus className="w-4 h-4" />
              <span>New Flow</span>
            </button>
          </div>
        </div>
      </section>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Featured: Peak Hours Eco Mode */}
        <div className="md:col-span-8 bg-eco-surface-container-lowest rounded-xl p-8 editorial-shadow flex flex-col justify-between min-h-[320px] relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-eco-primary-container/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-eco-primary-container/20 transition-all duration-700" />
          <div className="relative z-10 flex justify-between items-start">
            <div className="flex flex-col gap-1">
              <div className="w-12 h-12 rounded-lg bg-eco-primary/10 flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 text-eco-primary" fill="currentColor" />
              </div>
              <h3 className="font-headline text-3xl font-bold tracking-tight">Peak Hours Eco Mode</h3>
              <p className="text-eco-on-surface-variant text-lg mt-2 max-w-md">Automatically dims lights and adjusts HVAC when energy demand is highest.</p>
            </div>
            <Toggle on={flows.peak} onChange={() => toggle('peak')} color="eco-primary" />
          </div>
          <div className="relative z-10 mt-8 flex items-center gap-6">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-eco-surface-container-highest border-2 border-eco-surface-container-lowest flex items-center justify-center">
                <Zap className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 rounded-full bg-eco-surface-container-highest border-2 border-eco-surface-container-lowest flex items-center justify-center">
                <Cloud className="w-4 h-4" />
              </div>
            </div>
            <span className="text-sm font-medium text-eco-on-surface-variant">Influences 12 devices</span>
            <div className="ml-auto flex items-center gap-2 text-eco-primary font-bold font-headline text-xl">
              <Zap className="w-4 h-4" />
              <span>-15% kWh</span>
            </div>
          </div>
        </div>

        {/* Side Card: Smart Sprinkler */}
        <div className="md:col-span-4 bg-eco-surface-container rounded-xl p-8 flex flex-col justify-between min-h-[320px] relative overflow-hidden group">
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-eco-secondary/10 rounded-full blur-2xl -mb-10 -mr-10" />
          <div className="flex justify-between items-start">
            <div className="w-12 h-12 rounded-lg bg-eco-secondary/10 flex items-center justify-center">
              <Droplets className="w-6 h-6 text-eco-secondary" fill="currentColor" />
            </div>
            <Toggle on={flows.sprinkler} onChange={() => toggle('sprinkler')} color="eco-secondary" />
          </div>
          <div>
            <h3 className="font-headline text-2xl font-bold tracking-tight mb-2">Smart Sprinkler</h3>
            <p className="text-eco-on-surface-variant text-sm leading-relaxed">Based on local rain forecast. Skips cycles when precipitation is predicted.</p>
          </div>
          <div className="pt-6 mt-6 border-t border-eco-outline-variant/20 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Cloud className="w-4 h-4 text-eco-secondary" />
              <span className="text-xs font-medium">80% Rain Chance</span>
            </div>
            <span className="text-xs font-bold text-eco-secondary uppercase tracking-widest">Idle</span>
          </div>
        </div>

        {/* Stats */}
        <div className="md:col-span-12 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Daily Savings', value: '$4.20' },
              { label: 'Carbon Offset', value: '12.4kg' },
              { label: 'Efficiency Score', value: '94/100', color: 'text-eco-primary' },
              { label: 'Grid Health', value: 'Stable' },
            ].map((s) => (
              <div key={s.label} className="p-6 bg-eco-surface-container-low rounded-lg">
                <p className="text-xs uppercase tracking-widest text-eco-on-surface-variant mb-2">{s.label}</p>
                <p className={`font-headline text-3xl font-medium ${s.color || ''}`}>{s.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* EV Card */}
        <div className="md:col-span-12 bg-eco-inverse-surface rounded-xl p-8 editorial-shadow relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-eco-primary flex items-center justify-center shrink-0">
                <BatteryCharging className="w-8 h-8 text-eco-on-primary" />
              </div>
              <div>
                <h3 className="font-headline text-3xl font-bold text-eco-inverse-on-surface tracking-tight">EV Scheduled Charging</h3>
                <p className="text-eco-surface-variant text-lg max-w-md mt-1">Charges during lowest tariff rates between 12:00 AM and 5:00 AM.</p>
              </div>
            </div>
            <div className="flex items-center gap-12 w-full md:w-auto">
              <div className="hidden lg:block text-right">
                <p className="text-eco-surface-variant text-xs uppercase tracking-widest mb-1">Next Active Cycle</p>
                <p className="text-eco-inverse-on-surface font-headline text-xl">Today, 11:45 PM</p>
              </div>
              <div className="flex-grow md:flex-grow-0 scale-125">
                <Toggle on={flows.ev} onChange={() => toggle('ev')} color="eco-primary-container" dark />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <section className="mt-20 flex flex-col items-center">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-eco-outline-variant/30 to-transparent mb-8" />
        <p className="text-sm text-eco-on-surface-variant flex items-center gap-2">
          <BadgeCheck className="w-4 h-4 text-eco-primary" />
          System algorithms are optimized for Northern European Grid Standards
        </p>
      </section>
    </main>
  );
}

function Toggle({ on, onChange, color, dark }: { on: boolean; onChange: () => void; color: string; dark?: boolean }) {
  return (
    <button onClick={onChange} className="relative inline-flex items-center cursor-pointer">
      <div className={`w-14 h-8 rounded-full transition-colors ${on ? `bg-${color}` : dark ? 'bg-eco-surface-variant/20' : 'bg-eco-surface-container-high'}`}>
        <div className={`w-6 h-6 bg-white border border-gray-300 rounded-full absolute top-1 transition-all ${on ? 'left-[26px]' : 'left-1'}`} />
      </div>
    </button>
  );
}
