import { Star, MessageCircle, Pencil, GraduationCap, Rocket, Plus, Flower2, HeartHandshake, Zap, Users } from 'lucide-react';

const teaching = [
  {
    title: 'Digital Illustration',
    desc: 'Procreate & Photoshop basics',
    tags: ['Beginner Friendly', '10 Sessions Taught'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCr8c4zhfHeOyzAMbGXS8P_wyPQsJD3B5YO64JxdTRjBmDlVXuMJMPIesCFHGp4APLgcQ0iDbsGqhA9UJrbKrrLUZe1oRzaFqJ-XzrzPsuzZL7DDy9uf0mC910_T40BrH-MS599ScWmiinXUwsn-WJH97MxOLw2FXW4mdeXgnY07zn-11HvF5P_7wRgOGHxunjftBHZ2rDsGX_fipxlHNT8ToQECO_1-OF1BYDdGvz8fUw4cHj7rvuXBmKg_O7pDf0WXx5odM4QxX4',
  },
  {
    title: 'Urban Gardening',
    desc: 'Apartment-friendly veggies',
    tags: ['Expert', '6 Sessions Taught'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2USCdJD-RzOn_PTRXIX-MMcwei1W_jvS1fXP2DzMAxr65Jym1Qqrgd7uhC8V6s8e33KWfKzbjCTJnC_JUh8ZCJYEG01fkBks_TZLDFHSHXTXvhuuh085enZuRM4ix_osS-HwW7DRQc9Vp_3oVkmrpW6HGJmxg8Pm8FuohXKzkCC7fN3LBt2gRAziiriucyOMQk5HIirfKrgQHts5QIuxVIBy7Q_9Eu6wmK09aK-PBPj_x9aEiobMrtg83w3mUUo47lIzf9x4vygQ',
  },
];

const learning = [
  {
    title: 'Python Basics',
    progress: 60,
    next: 'Next: Loop structures',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLyJguB2L1XlCfuNfDFX4ZzxhyYKhJgjtxfzkEhCYA9JD0g7XFUEzrwiDep25TL65b2VJybNJNQ46mcRtfCANYqBJgTnRSnJcyoFxvTO6-cYw7B6o0MFk7ru9pI9y3UWaBrviWvlVgwqzklfyzoIPQXrhBcSAlV2tLpA_RnT8boaUFODNH8kQ4Kh08z8WwmfRzrdijTsH4iT-GFvZUwnt8NukIPtwU3c5-Pp0sbWwkR1xzlfHUeddBXEPt6liIn9F8GNDKP-aPIpQ',
  },
  {
    title: 'Jazz Piano',
    progress: 35,
    next: 'Next: 7th chords',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJeZ4vta1JDFKe0_RI33znQSxUOUBAOEHhVpQn7z8a65ecKfDDOf8XSNfzEheXHPlu72_0hAhDIRF4war8r6bKkeaF5D0wbMIBKu3J0ajuy08fGrC90Kmxbud3NjS-hzWkf9fCsFMWijcPP1LJWw_UGV3glhabYNo-SbzjKmxraJBtnexr5L8z5CrMC_juj7wPkTJLMCOT1nFuOjMrK9lRtsJjS8qvGO88rBy-PItYiusHk2OW2tZ-UJbF1ZgbGtjlQqMGqGWFOfk',
  },
];

const badges = [
  { icon: Flower2, label: 'Master Planter', bg: 'bg-bloom-tertiary-fixed', text: 'text-bloom-on-tertiary-fixed-variant' },
  { icon: HeartHandshake, label: 'Top Mentor', bg: 'bg-bloom-primary-fixed', text: 'text-bloom-on-primary-fixed-variant' },
  { icon: Zap, label: 'Fast Learner', bg: 'bg-bloom-secondary-fixed', text: 'text-bloom-on-secondary-fixed-variant' },
  { icon: Users, label: 'Community Hero', bg: 'bg-bloom-surface-container-highest', text: 'text-bloom-on-surface-variant' },
];

export default function Profile() {
  return (
    <main className="pt-8 pb-32 px-5 md:px-10 max-w-container-max mx-auto">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Profile Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-bloom-surface-container-lowest p-6 rounded-xl sunlight-glow border border-white/50">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative group">
                <div className="w-24 h-24 rounded-full border-4 border-bloom-primary-fixed-dim overflow-hidden shadow-md">
                  <img
                    className="w-full h-full object-cover"
                    alt="Maya Chen"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOf-iYcE7hOhNdgWQW7oD-6XnhPqNBxim9B0615aZtQsTDdmEZLpBptWqf9Wd_Ay2rNs8_Q-Ze180G3R6wzOrFlOxy6aZ9-SfpRdr_vOUADuxyEwwtMg981kYON5FqKMFDTqekZLQAEnjI2xssfuRAf45428wxclVmCLtSuDhrSsPGbuIM43K-XBJQkJgV9OjlQGRayGEXKrB1Nk6aN-CllV3JqREJZ7V3LTkC1MPLLMQ_o1TOtn82Gs9xFBsCW9FjLDZvXdhYA4E"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-bloom-secondary text-bloom-on-secondary w-8 h-8 rounded-full flex items-center justify-center shadow-lg border-2 border-bloom-surface">
                  <Star className="w-[18px] h-[18px]" fill="currentColor" />
                </div>
              </div>
              <div>
                <h2 className="font-jakarta text-3xl font-bold text-bloom-on-surface">Maya Chen</h2>
                <p className="text-bloom-on-surface-variant text-sm font-semibold">Level 12 Bloom Guide • Since 2023</p>
              </div>
            </div>
            <p className="text-lg text-bloom-on-surface-variant mb-10 leading-relaxed">
              Creative soul with a passion for <span className="text-bloom-secondary font-bold">digital art</span> and <span className="text-bloom-primary font-bold">urban gardening</span>. I love translating complex ideas into beautiful visuals. Always looking for more plant-based recipes!
            </p>
            <div className="flex gap-2">
              <button className="bg-bloom-primary hover:bg-bloom-on-primary-fixed-variant text-bloom-on-primary text-sm font-semibold px-6 py-3 rounded-full shadow-lg active:scale-95 transition-all flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                Swap a Skill
              </button>
              <button className="bg-bloom-secondary-container text-bloom-on-secondary-container hover:bg-bloom-secondary-fixed-dim text-sm font-semibold px-6 py-3 rounded-full transition-all flex items-center gap-2">
                <Pencil className="w-4 h-4" />
                Edit Profile
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-bloom-surface-container-low p-6 rounded-xl text-center">
              <div className="text-bloom-primary font-jakarta text-5xl font-extrabold">24</div>
              <div className="text-bloom-on-surface-variant text-sm font-semibold">Successful Swaps</div>
            </div>
            <div className="bg-bloom-surface-container-low p-6 rounded-xl text-center">
              <div className="text-bloom-secondary font-jakarta text-5xl font-extrabold">15</div>
              <div className="text-bloom-on-surface-variant text-sm font-semibold">Seeds Planted</div>
            </div>
          </div>
        </div>

        {/* The Bloom Tree */}
        <div className="lg:col-span-7 bg-white/40 rounded-xl p-10 sunlight-glow relative overflow-hidden min-h-[500px] flex items-center justify-center">
          <div className="relative z-10 w-full flex flex-col items-center">
            <h3 className="font-jakarta text-2xl font-bold text-bloom-on-surface mb-10 text-center">My Skill Bloom</h3>
            <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
              <svg className="w-full h-full drop-shadow-xl" viewBox="0 0 400 400">
                <path className="vine-progress" d="M200,380 Q200,200 100,100" fill="none" stroke="#00696b" strokeWidth="4" />
                <path className="vine-progress" d="M200,380 Q200,220 300,120" fill="none" stroke="#00696b" strokeWidth="4" style={{ animationDelay: '0.5s' }} />
                <path className="vine-progress" d="M200,380 L200,50" fill="none" stroke="#00696b" strokeWidth="6" style={{ animationDelay: '0.2s' }} />
                <g className="cursor-pointer group">
                  <circle className="fill-bloom-primary-container group-hover:scale-110 transition-transform origin-center" cx="100" cy="100" r="30" />
                  <text className="fill-bloom-on-primary-container text-[10px] pointer-events-none" textAnchor="middle" x="100" y="105">Design</text>
                </g>
                <g className="cursor-pointer group">
                  <circle className="fill-bloom-secondary-container group-hover:scale-110 transition-transform origin-center" cx="300" cy="120" r="35" />
                  <text className="fill-bloom-on-secondary-container text-[10px] pointer-events-none" textAnchor="middle" x="300" y="125">Math</text>
                </g>
                <g className="cursor-pointer group">
                  <circle className="fill-bloom-tertiary-container group-hover:scale-110 transition-transform origin-center" cx="200" cy="50" r="40" />
                  <text className="fill-bloom-on-tertiary-container text-[10px] pointer-events-none" textAnchor="middle" x="200" y="55">Gardening</text>
                </g>
                <g className="cursor-pointer group">
                  <circle className="fill-bloom-primary-fixed group-hover:scale-110 transition-transform origin-center" cx="120" cy="220" r="25" />
                  <text className="fill-bloom-on-primary-fixed text-[8px] pointer-events-none" textAnchor="middle" x="120" y="225">Piano</text>
                </g>
              </svg>
            </div>
            <p className="text-xs text-bloom-on-surface-variant italic mt-8 text-center max-w-xs">Each bloom represents a milestone in Maya's journey of teaching and learning.</p>
          </div>
        </div>
      </section>

      {/* Teaching & Learning Section */}
      <section className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Teaching */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-bloom-primary bg-bloom-primary-fixed p-2 rounded-lg">
              <GraduationCap className="w-5 h-5" />
            </span>
            <h3 className="font-jakarta text-2xl font-bold">Skills I'm Teaching</h3>
          </div>
          <div className="space-y-6">
            {teaching.map((t) => (
              <div key={t.title} className="bloom-card glass-panel p-6 rounded-xl flex items-center gap-6 border border-white/60 sunlight-glow">
                <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0">
                  <img className="w-full h-full object-cover" alt={t.title} src={t.img} />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-bloom-on-surface">{t.title}</h4>
                  <p className="text-xs text-bloom-on-surface-variant mb-2">{t.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {t.tags.map((tag) => (
                      <span key={tag} className="bg-bloom-secondary/10 text-bloom-secondary text-[10px] px-2 py-1 rounded-full font-bold uppercase">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-bloom-secondary bg-bloom-secondary-fixed p-2 rounded-lg">
              <Rocket className="w-5 h-5" />
            </span>
            <h3 className="font-jakarta text-2xl font-bold">Skills I'm Learning</h3>
          </div>
          <div className="space-y-6">
            {learning.map((l) => (
              <div key={l.title} className="bloom-card bg-bloom-surface-container-low p-6 rounded-xl flex items-center gap-6 border border-bloom-outline-variant/30 transition-all hover:bg-bloom-surface-container">
                <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0">
                  <img className="w-full h-full object-cover" alt={l.title} src={l.img} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-sm font-semibold text-bloom-on-surface">{l.title}</h4>
                    <span className="text-[10px] font-bold text-bloom-primary">{l.progress}%</span>
                  </div>
                  <div className="w-full bg-bloom-surface-container-highest h-2 rounded-full mb-3 overflow-hidden">
                    <div className="bg-bloom-primary h-full rounded-full" style={{ width: `${l.progress}%` }} />
                  </div>
                  <p className="text-xs text-bloom-on-surface-variant">{l.next}</p>
                </div>
              </div>
            ))}
            <button className="mt-6 w-full border-2 border-dashed border-bloom-outline-variant rounded-xl p-4 text-bloom-on-surface-variant hover:text-bloom-primary hover:border-bloom-primary hover:bg-bloom-primary/5 transition-all flex items-center justify-center gap-2 group">
              <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" />
              <span className="text-sm font-semibold">Add a skill you want to learn</span>
            </button>
          </div>
        </div>
      </section>

      {/* Recent Badges */}
      <section className="mt-16">
        <h3 className="font-jakarta text-2xl font-bold mb-6">Recent Badges</h3>
        <div className="flex overflow-x-auto gap-6 pb-4 hide-scrollbar">
          {badges.map((b) => (
            <div key={b.label} className="shrink-0 w-32 flex flex-col items-center gap-2">
              <div className={`w-16 h-16 ${b.bg} rounded-full flex items-center justify-center sunlight-glow`}>
                <b.icon className={`w-7 h-7 ${b.text}`} fill="currentColor" />
              </div>
              <span className="text-xs text-center">{b.label}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
