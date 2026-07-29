import { useState } from 'react';
import { Snowflake, Zap, Droplets, TrendingUp, ShieldCheck } from 'lucide-react';

interface Appliance {
  id: string;
  name: string;
  icon: typeof Snowflake;
  metric: string;
  value: string;
  progress: number;
  active: boolean;
  water?: boolean;
}

const appliances: Appliance[] = [
  { id: 'hvac', name: 'HVAC', icon: Snowflake, metric: 'Current Draw', value: '1.2 kW', progress: 67, active: true },
  { id: 'ev', name: 'EV Charger', icon: Zap, metric: 'Current Draw', value: '7.4 kW', progress: 85, active: true },
  { id: 'sprinkler', name: 'Smart Sprinkler', icon: Droplets, metric: 'Water Flow', value: '0 L/m', progress: 0, active: false, water: true },
];

export default function Dashboard() {
  const [states, setStates] = useState<Record<string, boolean>>(
    Object.fromEntries(appliances.map((a) => [a.id, a.active]))
  );

  const toggle = (id: string) => setStates((s) => ({ ...s, [id]: !s[id] }));

  return (
    <main className="max-w-5xl mx-auto px-6 pt-8 space-y-12">
      {/* Centerpiece: Luminous Engine Dial */}
      <section className="flex flex-col items-center">
        <div className="relative w-72 h-72 md:w-80 md:h-80 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-eco-primary/5 blur-3xl" />
          <svg className="absolute w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" fill="transparent" r="45" stroke="currentColor" strokeWidth="6" className="text-eco-surface-container" />
            <circle cx="50" cy="50" fill="transparent" r="45" stroke="currentColor" strokeWidth="6" strokeDasharray="282.7" strokeDashoffset="70" strokeLinecap="round" className="text-eco-primary-container" />
          </svg>
          <svg className="absolute w-3/4 h-3/4 -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" fill="transparent" r="45" stroke="currentColor" strokeWidth="8" className="text-eco-surface-container-high" />
            <circle cx="50" cy="50" fill="transparent" r="45" stroke="currentColor" strokeWidth="8" strokeDasharray="282.7" strokeDashoffset="120" strokeLinecap="round" className="text-eco-secondary" />
          </svg>
          <div className="z-10 text-center">
            <div className="font-headline text-5xl md:text-6xl font-bold text-eco-on-surface">12.4</div>
            <div className="text-sm font-medium text-eco-outline uppercase tracking-widest mt-1">kWh Today</div>
            <div className="mt-4 flex items-center justify-center gap-2 text-eco-secondary font-semibold">
              <Droplets className="w-4 h-4" />
              <span className="font-headline text-xl">240L</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 mt-10 w-full max-w-md">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-tighter text-eco-outline">Energy Efficiency</span>
            <div className="flex items-baseline gap-1">
              <span className="font-headline text-2xl font-bold text-eco-primary">88%</span>
              <TrendingUp className="w-4 h-4 text-eco-primary" />
            </div>
          </div>
          <div className="space-y-1 text-right">
            <span className="text-xs font-bold uppercase tracking-tighter text-eco-outline">Resource Health</span>
            <div className="flex items-baseline justify-end gap-1">
              <span className="font-headline text-2xl font-bold text-eco-on-surface">Optimal</span>
            </div>
          </div>
        </div>
      </section>

      {/* Active Appliances */}
      <section className="space-y-6">
        <div className="flex items-end justify-between px-2">
          <div>
            <h2 className="font-headline text-2xl font-bold tracking-tight text-eco-on-surface">Active Appliances</h2>
            <p className="text-sm text-eco-outline">3 systems drawing power</p>
          </div>
          <button className="text-eco-primary font-semibold text-sm hover:underline">View All</button>
        </div>
        <div className="flex gap-6 overflow-x-auto hide-scrollbar pb-6 snap-x">
          {appliances.map((a) => (
            <div key={a.id} className="snap-start flex-shrink-0 w-64 p-6 rounded-xl bg-eco-surface-container-low shadow-sm transition-all hover:bg-eco-surface-container-high">
              <div className="flex justify-between items-start mb-8">
                <div className={`p-3 rounded-lg ${a.water ? 'bg-eco-secondary-container/10 text-eco-secondary' : 'bg-eco-primary-container/20 text-eco-primary'}`}>
                  <a.icon className="w-6 h-6" />
                </div>
                <button onClick={() => toggle(a.id)} className="relative inline-flex items-center cursor-pointer">
                  <div className={`w-11 h-6 rounded-full transition-colors ${states[a.id] ? (a.water ? 'bg-eco-secondary' : 'bg-eco-primary') : 'bg-eco-surface-container-highest'}`}>
                    <div className={`w-5 h-5 bg-white border border-gray-300 rounded-full absolute top-0.5 transition-all ${states[a.id] ? 'left-[22px]' : 'left-[2px]'}`} />
                  </div>
                </button>
              </div>
              <h3 className="font-headline text-lg font-bold text-eco-on-surface">{a.name}</h3>
              <div className="mt-2 space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-eco-outline">{a.metric}</span>
                  <span className="font-headline font-bold text-eco-on-surface">{a.value}</span>
                </div>
                <div className="w-full bg-eco-surface-container-highest h-1.5 rounded-full overflow-hidden">
                  <div className={`h-full transition-all ${a.water ? 'bg-eco-secondary' : 'bg-eco-primary'}`} style={{ width: `${a.progress}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bento Grid Insights */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 p-8 rounded-2xl bg-eco-surface-container-lowest border border-eco-outline-variant/10 shadow-sm relative overflow-hidden group">
          <div className="relative z-10">
            <h4 className="font-headline text-xl font-bold text-eco-on-surface">Peak Saving Window</h4>
            <p className="text-sm text-eco-outline mt-2 max-w-xs">Lower rates available between 11 PM and 5 AM. Schedule your EV charge now.</p>
            <button className="mt-6 px-6 py-2.5 bg-eco-primary text-eco-on-primary font-semibold rounded-lg hover:opacity-90 transition-opacity">Schedule Now</button>
          </div>
          <div className="absolute right-0 bottom-0 opacity-10 group-hover:scale-110 transition-transform">
            <Zap className="w-40 h-40 text-eco-primary translate-x-12 translate-y-12" />
          </div>
        </div>
        <div className="p-8 rounded-2xl bg-eco-secondary text-eco-on-secondary flex flex-col justify-between">
          <div>
            <ShieldCheck className="w-8 h-8" />
            <h4 className="font-headline text-lg font-bold mt-4">Water Leak Alert</h4>
          </div>
          <p className="text-sm opacity-90 mt-2">No abnormal flow detected in the main line today.</p>
          <div className="mt-6 font-headline text-2xl font-bold">Secure</div>
        </div>
      </section>
    </main>
  );
}
