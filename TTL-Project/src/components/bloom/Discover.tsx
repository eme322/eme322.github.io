import { useState } from 'react';
import { Search, Plus, ChevronLeft, ChevronRight, Clock, Languages, Camera, Palette, Star } from 'lucide-react';

const newSwaps = [
  {
    title: 'Beat Making Basics',
    desc: 'Learn FL Studio & trap rhythms.',
    tag: 'Music',
    badge: { icon: Clock, text: '45m' },
    avatars: [{ initials: 'JD', bg: 'bg-bloom-primary-fixed' }, { initials: 'MK', bg: 'bg-bloom-secondary-fixed' }],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvQyCreelBTTvxyAdi0g681tJXjZ9s9Gs35GRdVd2ytQtTQEesRvgWsNczowlseiYpsMoDkaDBtMSKb8lpoi57sAME5Swrbia2BAFT1MtDERKu2BvEV8McZ7fCQPfJdusFK_gBCtHqqBjijwHe4nrl45_QLiDvpwObWUH6z1Xm4VKcxZ24sCpC523Ez7FfFCZenInjElc4ZXqcDhAHKLwcLI9q1A3qa5BGspS5E4ZcE8o3SHTN6VPqX1jYiA04jTCF3ewUYU_ighk',
  },
  {
    title: 'Spanish Tutoring',
    desc: 'Conversational Spanish for travel.',
    tag: 'Language',
    badge: { icon: Languages, text: 'ES' },
    avatars: [{ initials: 'CL', bg: 'bg-bloom-tertiary-fixed' }],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHO_qUZL7IcllhwMx2mtMKYOj7ns2WM6u_NGs9pZT87ga7x4m4dTB7uaDnNGjrzeljUl2x9gJORM1PqCOHNk3xORRqvLJ9U4GhVBu4vtOdiLKVz5eVkCe-_MCpvawPBkSzeHHPVqkbAauqklA8J8c1IRsGg9Hqi40MT_AvaG1xbK92_MB68XJRP18Uay-AgaTIvOe1FOQHl0WkbzmoIuRtsFFK9Avd77DjKUoYPIj5t2kUKHEmZOOeHeNIwjMppTYeLq6opiVHuC8',
  },
  {
    title: 'Street Photography',
    desc: 'Capture the soul of the city.',
    tag: 'Creative',
    badge: { icon: Camera, text: '60m' },
    avatars: [{ initials: 'TR', bg: 'bg-bloom-error-container' }],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRyEpxXLKGXTbeRbu1N2P8zqD9wasm-FNtayuvELl04OYjRxB3MAKa7HkJ6i7fp4QywX2RJEzI_7Yi_Xm7vjtt52azW4PMvWpikiS66v5qRbnzYnRDRQ2k_7m-7HYmBpzDwHLLcfoOcE-EjAseco6JmA4CtpCUfp9dOQFsRYdy8FkzQWqoEr0ZsicV6WEy5cVOTW8aOQR1cB3e71f7OPyby2Sy_9FfNiXwPpYU1RZnAHITizNdLqcO4TX6-W2R1vkYVosG0OVgs8g',
  },
];

export default function Discover() {
  const [search, setSearch] = useState('');

  return (
    <main className="px-5 max-w-container-max mx-auto pb-32">
      {/* Hero Search */}
      <section className="py-10">
        <h2 className="font-jakarta text-5xl font-extrabold text-bloom-on-surface mb-1 tracking-tight">Grow your skills.</h2>
        <p className="text-lg text-bloom-on-surface-variant max-w-2xl mb-6">Swap what you know for what you want to learn. The community is waiting for you.</p>
        <div className="relative max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-bloom-outline" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-bloom-secondary text-base focus:border-bloom-primary focus:ring-4 focus:ring-bloom-primary-container/20 transition-all bg-bloom-surface-container-lowest outline-none"
            placeholder="Search skills like 'UI Design'..."
            type="text"
          />
        </div>
      </section>

      {/* Recommended Matches */}
      <section className="mb-10">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-jakarta text-2xl font-bold text-bloom-on-surface">Recommended matches</h3>
          <button className="text-sm font-semibold text-bloom-secondary hover:underline">View all</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* UI Design Feature */}
          <div className="md:col-span-8 group cursor-pointer">
            <div className="relative h-80 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02]">
              <img
                className="w-full h-full object-cover"
                alt="UI Design workspace"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCu_Ztaaf2hXs34pUCrNVpGSmox251ClGBcWCle4MUnCn7xavzC_3KccxfzIMrL8xNw51nABO70AN9W9AvSRBh6m7c_dPMeY79xDhYC6TfqT3RlXIcm_9O6v5UBckkfKRQhZ_yo8dHeStGM6yRfMAGlyJCQR3D11y1FPFCpyTYIwy6BWThULXnWjwJFJJjYxddYP4pD4hwl12QHzLL82mca4NDZNMv23REglrVTyNkhoNZ_FKe7dr1iBDQ7elnV3mWBcLKnT18bp_o"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                <div className="flex gap-2 mb-2">
                  <span className="bg-bloom-secondary-container text-bloom-on-secondary-container px-3 py-1 rounded-full text-xs font-semibold">To Teach</span>
                  <span className="bg-bloom-primary-container text-bloom-on-primary-container px-3 py-1 rounded-full text-xs font-semibold">Verified</span>
                </div>
                <h4 className="font-jakarta text-2xl font-bold text-white mb-1">UI Design Masterclass</h4>
                <p className="text-white/80 text-base">By Alex Rivera • 4.9 ★</p>
              </div>
            </div>
          </div>
          {/* Digital Illustration */}
          <div className="md:col-span-4 group cursor-pointer">
            <div className="h-80 bg-bloom-surface-container-low rounded-xl p-6 flex flex-col justify-between border border-bloom-outline-variant shadow-sm transition-transform duration-300 hover:scale-[1.02]">
              <div>
                <div className="w-12 h-12 bg-bloom-tertiary-fixed rounded-full flex items-center justify-center mb-6">
                  <Palette className="w-6 h-6 text-bloom-on-tertiary-fixed-variant" />
                </div>
                <h4 className="font-jakarta text-2xl font-bold text-bloom-on-surface mb-2">Digital Illustration</h4>
                <p className="text-bloom-on-surface-variant text-base">Learn character design and color theory in Procreate.</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-bloom-secondary-fixed text-bloom-on-secondary-fixed px-3 py-1 rounded-full text-xs font-semibold">To Learn</span>
                <button className="ml-auto w-10 h-10 rounded-full bg-bloom-primary flex items-center justify-center text-white shadow-md active:scale-90 transition-all">
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Skill Swaps */}
      <section className="mb-10">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-jakarta text-2xl font-bold text-bloom-on-surface">New skill swaps</h3>
          <div className="flex gap-2">
            <button className="w-8 h-8 rounded-full border border-bloom-outline-variant flex items-center justify-center hover:bg-bloom-surface-container-high">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 rounded-full border border-bloom-outline-variant flex items-center justify-center hover:bg-bloom-surface-container-high">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="flex gap-6 overflow-x-auto hide-scrollbar pb-4 -mx-5 px-5">
          {newSwaps.map((s) => (
            <div key={s.title} className="min-w-[280px] md:min-w-[320px] bg-white rounded-xl shadow-[0_4px_12px_rgba(165,60,5,0.05)] overflow-hidden border border-bloom-surface-container-high transition-transform duration-300 hover:scale-[1.02]">
              <div className="h-40 relative">
                <img className="w-full h-full object-cover" alt={s.title} src={s.img} />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-semibold flex items-center gap-1">
                  <s.badge.icon className="w-3.5 h-3.5" />
                  {s.badge.text}
                </div>
              </div>
              <div className="p-4">
                <div className="flex gap-2 mb-2">
                  <span className="border border-bloom-secondary text-bloom-secondary px-2 py-0.5 rounded-full text-xs font-semibold">{s.tag}</span>
                </div>
                <h5 className="font-jakarta text-lg font-bold text-bloom-on-surface mb-1">{s.title}</h5>
                <p className="text-bloom-on-surface-variant text-sm mb-4">{s.desc}</p>
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {s.avatars.map((a) => (
                      <div key={a.initials} className={`w-6 h-6 rounded-full border-2 border-white ${a.bg} flex items-center justify-center text-[10px] font-bold`}>
                        {a.initials}
                      </div>
                    ))}
                  </div>
                  <button className="bg-bloom-primary-container hover:bg-bloom-primary text-bloom-on-primary-container hover:text-bloom-on-primary px-4 py-1.5 rounded-full text-sm font-semibold transition-colors">Swap</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Progress Tracking */}
      <section className="bg-bloom-surface-container-highest/30 rounded-2xl p-6 border border-white/50 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm font-semibold text-bloom-on-surface-variant uppercase tracking-wider">Your Journey</span>
          <span className="text-sm font-semibold text-bloom-primary">Level 4 Gardener</span>
        </div>
        <div className="relative h-2 w-full bg-bloom-surface-container rounded-full overflow-hidden">
          <div className="absolute h-full rounded-full" style={{ width: '65%', background: 'linear-gradient(90deg, #00696b 0%, #ff7e47 100%)' }} />
        </div>
        <div className="mt-1 flex justify-between">
          <p className="text-xs text-bloom-on-surface-variant">3/5 swaps completed this week</p>
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => <Star key={i} className="w-4 h-4 text-bloom-primary" fill="currentColor" />)}
            {[3, 4].map((i) => <Star key={i} className="w-4 h-4 text-bloom-outline" />)}
          </div>
        </div>
      </section>

      {/* FAB */}
      <button className="fixed bottom-24 right-6 w-14 h-14 bg-bloom-primary text-white rounded-2xl shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-transform duration-300 z-40">
        <Plus className="w-6 h-6" />
      </button>
    </main>
  );
}
