import { Zap, TrendingUp, TrendingDown, Wind, WashingMachine, BatteryCharging, Lightbulb } from 'lucide-react';

const days = [
  { day: 'MON', energy: 40, water: 60, active: false },
  { day: 'TUE', energy: 55, water: 45, active: false },
  { day: 'WED', energy: 70, water: 80, active: false },
  { day: 'THU', energy: 85, water: 40, active: true },
  { day: 'FRI', energy: 40, water: 50, active: false },
  { day: 'SAT', energy: 30, water: 35, active: false },
  { day: 'SUN', energy: 50, water: 40, active: false },
];

const consumers = [
  { name: 'HVAC System', icon: Wind, value: '84.2', unit: 'kWh', progress: 75, change: '+4% vs LW', positive: true, color: 'primary' as const },
  { name: 'Dishwasher', icon: WashingMachine, value: '156', unit: 'Liters', progress: 45, change: '-12% vs LW', positive: false, color: 'secondary' as const },
  { name: 'EV Charger', icon: BatteryCharging, value: '52.0', unit: 'kWh', progress: 60, change: 'Stable', positive: null, color: 'primary' as const },
];

export default function Usage() {
  return (
    <main className="px-6 py-8 max-w-5xl mx-auto space-y-10">
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-8 p-8 rounded-xl bg-eco-surface-container-low flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <span className="text-xs font-semibold tracking-widest text-eco-primary uppercase bg-eco-primary-fixed/30 px-3 py-1 rounded-full">Weekly Insight</span>
            <h2 className="font-headline text-4xl mt-4 font-bold leading-tight">
              Your efficiency rose by <span className="text-eco-primary">12%</span> since last Monday.
            </h2>
          </div>
          <div className="mt-8 flex gap-8 relative z-10">
            <div>
              <p className="text-sm text-eco-on-surface-variant">Avg. Daily Energy</p>
              <p className="font-headline text-2xl font-bold text-eco-on-surface">14.2 kWh</p>
            </div>
            <div>
              <p className="text-sm text-eco-on-surface-variant">Avg. Daily Water</p>
              <p className="font-headline text-2xl font-bold text-eco-on-surface">420 L</p>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-eco-primary-container/20 to-transparent rounded-full -mr-20 -mt-20 blur-3xl" />
        </div>
        <div className="md:col-span-4 p-8 rounded-xl bg-eco-primary text-eco-on-primary flex flex-col justify-between shadow-xl shadow-eco-primary/10">
          <div className="flex justify-between items-start">
            <Zap className="w-10 h-10" fill="currentColor" />
            <TrendingUp className="w-5 h-5 opacity-50" />
          </div>
          <div>
            <p className="font-headline text-4xl font-bold">-$42.00</p>
            <p className="text-sm opacity-80 mt-1">Estimated Savings this month</p>
          </div>
        </div>
      </section>

      {/* Usage Trends */}
      <section className="space-y-6">
        <div className="flex items-end justify-between">
          <div>
            <h3 className="font-headline text-2xl font-bold">Usage Trends</h3>
            <p className="text-eco-on-surface-variant text-sm">7-Day Resource Comparison</p>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-eco-primary" />
              <span className="text-xs font-medium">Energy (kWh)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-eco-secondary" />
              <span className="text-xs font-medium">Water (L)</span>
            </div>
          </div>
        </div>
        <div className="p-8 rounded-xl bg-eco-surface-container-lowest border border-eco-outline-variant/10 shadow-sm h-80 flex flex-col">
          <div className="flex-1 flex items-end gap-2 md:gap-4 px-2">
            {days.map((d) => (
              <div key={d.day} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                <div className="w-full flex justify-center items-end gap-1 h-full">
                  <div className={`w-2 md:w-4 rounded-t-full transition-all ${d.active ? 'bg-eco-primary' : 'bg-eco-primary/20 group-hover:bg-eco-primary'}`} style={{ height: `${d.energy}%` }} />
                  <div className={`w-2 md:w-4 rounded-t-full transition-all ${d.active ? 'bg-eco-secondary' : 'bg-eco-secondary/20 group-hover:bg-eco-secondary'}`} style={{ height: `${d.water}%` }} />
                </div>
                <span className={`text-[10px] font-bold ${d.active ? 'text-eco-on-surface' : 'text-eco-on-surface-variant'}`}>{d.day}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Consumers */}
      <section className="space-y-6">
        <h3 className="font-headline text-2xl font-bold">Top Consumers</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {consumers.map((c) => (
            <div key={c.name} className="bg-eco-surface-container p-6 rounded-xl flex flex-col justify-between hover:bg-eco-surface-container-high transition-all">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-lg bg-eco-surface-container-highest flex items-center justify-center">
                  <c.icon className={`w-6 h-6 ${c.color === 'primary' ? 'text-eco-primary' : 'text-eco-secondary'}`} />
                </div>
                <span className={`text-xs font-bold flex items-center gap-1 ${c.positive === true ? 'text-eco-error' : c.positive === false ? 'text-eco-primary' : 'text-eco-on-surface-variant'}`}>
                  {c.positive === true && <TrendingUp className="w-3 h-3" />}
                  {c.positive === false && <TrendingDown className="w-3 h-3" />}
                  {c.change}
                </span>
              </div>
              <div className="mt-8">
                <h4 className="font-headline text-lg font-bold">{c.name}</h4>
                <div className="flex items-center gap-2 mt-2">
                  <span className="font-headline text-2xl font-bold">{c.value}</span>
                  <span className="text-sm text-eco-on-surface-variant">{c.unit}</span>
                </div>
                <div className="w-full bg-eco-surface-container-highest h-1 rounded-full mt-4 overflow-hidden">
                  <div className={`h-full ${c.color === 'primary' ? 'bg-eco-primary' : 'bg-eco-secondary'}`} style={{ width: `${c.progress}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Smart Optimization Tip */}
      <section className="bg-eco-secondary-fixed text-eco-on-secondary-fixed p-6 rounded-xl flex flex-col md:flex-row gap-6 items-center">
        <div className="flex-shrink-0 w-16 h-16 bg-eco-on-secondary-fixed/10 rounded-full flex items-center justify-center">
          <Lightbulb className="w-8 h-8" fill="currentColor" />
        </div>
        <div className="flex-1">
          <h4 className="font-headline text-xl font-bold">Smart Optimization Tip</h4>
          <p className="mt-1 opacity-80">Your hot water usage peaks between 7 AM and 8 AM. Shifting your dishwasher cycle to 11 PM could save you $14.50/month on off-peak rates.</p>
        </div>
        <button className="bg-eco-on-secondary-fixed text-eco-secondary-fixed px-6 py-3 rounded-lg font-bold whitespace-nowrap hover:opacity-90 transition-opacity">
          Automate Now
        </button>
      </section>
    </main>
  );
}
