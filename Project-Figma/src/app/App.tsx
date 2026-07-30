import { useState } from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router";

// ─── Skill tag color map ────────────────────────────────────────────────────
const SKILL_COLORS: Record<string, string> = {
  Coding: "bg-blue-100 text-blue-700",
  Sketching: "bg-pink-100 text-pink-700",
  "Music Production": "bg-purple-100 text-purple-700",
  "Resume Writing": "bg-emerald-100 text-emerald-700",
  "Graphic Design": "bg-orange-100 text-orange-700",
  Photography: "bg-amber-100 text-amber-700",
  "Video Editing": "bg-red-100 text-red-700",
  "Creative Writing": "bg-teal-100 text-teal-700",
  "Math Tutoring": "bg-indigo-100 text-indigo-700",
  "Language Exchange": "bg-cyan-100 text-cyan-700",
};

function SkillPill({ label, active, onClick }: { label: string; active?: boolean; onClick?: () => void }) {
  const base = SKILL_COLORS[label] ?? "bg-stone-100 text-stone-700";
  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={`px-3.5 py-1.5 rounded-full text-sm font-semibold transition-all ${
          active
            ? "bg-primary text-primary-foreground shadow-md scale-105"
            : "bg-white border border-border text-foreground/70 hover:border-primary/40 hover:text-primary"
        }`}
      >
        {label}
      </button>
    );
  }
  return <span className={`px-3.5 py-1.5 rounded-full text-sm font-semibold ${base}`}>{label}</span>;
}

// ─── Navbar ─────────────────────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const linkCls = ({ isActive }: { isActive: boolean }) =>
    `font-semibold text-sm transition-colors ${isActive ? "text-primary" : "text-foreground/60 hover:text-foreground"}`;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 select-none">
          <span className="text-2xl leading-none">🌸</span>
          <span className="font-display text-xl font-black text-primary tracking-tight">Bloom</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-7">
          <NavLink to="/" end className={linkCls}>Home</NavLink>
          <NavLink to="/author1" className={linkCls}>Maya&apos;s Portfolio</NavLink>
          <NavLink to="/author2" className={linkCls}>Jordan&apos;s Portfolio</NavLink>
          <Link
            to="/"
            className="ml-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-bold hover:opacity-90 transition-opacity shadow-md shadow-primary/20"
          >
            Find a Match
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2 rounded-lg" onClick={() => setOpen(!open)} aria-label="Menu">
          <span className="block w-5 h-0.5 bg-foreground mb-1.5 transition-transform" style={{ transform: open ? "rotate(45deg) translateY(8px)" : "" }} />
          <span className="block w-5 h-0.5 bg-foreground mb-1.5 transition-opacity" style={{ opacity: open ? 0 : 1 }} />
          <span className="block w-5 h-0.5 bg-foreground transition-transform" style={{ transform: open ? "rotate(-45deg) translateY(-8px)" : "" }} />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-border px-5 py-5 flex flex-col gap-4">
          <NavLink to="/" end onClick={close} className={linkCls}>Home</NavLink>
          <NavLink to="/author1" onClick={close} className={linkCls}>Maya&apos;s Portfolio</NavLink>
          <NavLink to="/author2" onClick={close} className={linkCls}>Jordan&apos;s Portfolio</NavLink>
          <Link to="/" onClick={close} className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-bold text-center hover:opacity-90 transition-opacity mt-1">
            Find a Match
          </Link>
        </div>
      )}
    </nav>
  );
}

// ─── Shared Footer ──────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-foreground text-white py-12 px-5">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">🌸</span>
            <span className="font-display text-xl font-black">Bloom</span>
          </div>
          <p className="text-white/50 text-sm leading-relaxed max-w-xs">
            A safe, friendly space for teens to trade skills, make real connections, and grow together.
          </p>
          <div className="flex gap-2.5 mt-5">
            {["📸", "🐦", "💬", "🎵"].map((icon, i) => (
              <button
                key={i}
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-sm hover:bg-white/20 transition-colors"
              >
                {icon}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-xs uppercase tracking-wider text-white/40">Platform</h4>
          <ul className="space-y-2.5 text-sm text-white/60">
            {["Find Matches", "How It Works", "Safety & Trust", "Community Guidelines"].map((l) => (
              <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-xs uppercase tracking-wider text-white/40">About</h4>
          <ul className="space-y-2.5 text-sm text-white/60">
            {["Our Story", "Team", "Blog", "Contact"].map((l) => (
              <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/10 text-center text-white/30 text-xs">
        © 2025 Bloom · Made with 🌸 by Maya &amp; Jordan · All rights reserved
      </div>
    </footer>
  );
}

// ─── Home page ───────────────────────────────────────────────────────────────
const MATCH_CARDS = [
  { offers: "Coding", wants: "Sketching", name: "Priya K.", age: 16, initials: "PK", grad: "from-blue-400 to-indigo-500" },
  { offers: "Music Production", wants: "Resume Writing", name: "Marcus T.", age: 17, initials: "MT", grad: "from-purple-400 to-pink-500" },
  { offers: "Graphic Design", wants: "Coding", name: "Leila S.", age: 15, initials: "LS", grad: "from-orange-400 to-red-500" },
  { offers: "Sketching", wants: "Language Exchange", name: "Yuki M.", age: 16, initials: "YM", grad: "from-pink-400 to-rose-500" },
  { offers: "Resume Writing", wants: "Music Production", name: "Dev P.", age: 17, initials: "DP", grad: "from-emerald-400 to-teal-500" },
  { offers: "Photography", wants: "Video Editing", name: "Amara O.", age: 15, initials: "AO", grad: "from-amber-400 to-orange-500" },
];

const ALL_TEACH = ["Coding", "Sketching", "Graphic Design", "Music Production", "Photography", "Resume Writing", "Creative Writing", "Math Tutoring"];
const ALL_LEARN = ["Coding", "Sketching", "Graphic Design", "Music Production", "Photography", "Resume Writing", "Video Editing", "Language Exchange"];

function HomePage() {
  const [teach, setTeach] = useState<string[]>(["Coding"]);
  const [learn, setLearn] = useState<string[]>(["Sketching"]);

  const toggle = (list: string[], item: string, set: (v: string[]) => void) =>
    set(list.includes(item) ? list.filter((s) => s !== item) : [...list, item]);

  return (
    <main>
      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-[#FFF3EE] via-background to-[#F0FDF8] py-20 px-5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-bold mb-6">
              <span>🌱</span> Peer-to-peer skill sharing for teens
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-black text-foreground leading-tight mb-5">
              Share what you know.<br />
              <span className="text-primary">Learn what you love.</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-md">
              Bloom connects high schoolers to swap skills and grow together. Trade a coding tip for a sketch lesson, or swap resume feedback for music production advice.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-bold hover:opacity-90 transition-opacity shadow-xl shadow-primary/25">
                Find a Skill Match ✨
              </button>
              <button className="border-2 border-border text-foreground px-8 py-3.5 rounded-full font-bold hover:border-primary hover:text-primary transition-colors">
                See How It Works
              </button>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="grid grid-cols-2 gap-4">
              {[
                { skill: "Coding", emoji: "💻", bg: "bg-blue-50", border: "border-blue-200" },
                { skill: "Sketching", emoji: "✏️", bg: "bg-pink-50", border: "border-pink-200" },
                { skill: "Music", emoji: "🎹", bg: "bg-purple-50", border: "border-purple-200" },
                { skill: "Design", emoji: "🎨", bg: "bg-orange-50", border: "border-orange-200" },
              ].map((item) => (
                <div
                  key={item.skill}
                  className={`${item.bg} ${item.border} border-2 rounded-3xl p-6 flex flex-col items-center gap-2 hover:scale-105 transition-transform cursor-default`}
                >
                  <span className="text-4xl">{item.emoji}</span>
                  <span className="font-display font-bold text-sm">{item.skill}</span>
                </div>
              ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-white rounded-full w-14 h-14 shadow-2xl flex items-center justify-center text-2xl border border-border">
                🔄
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <div className="bg-primary text-primary-foreground py-4 px-5">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center md:justify-between gap-6 text-center">
          {[
            { n: "2,400+", label: "Teen learners" },
            { n: "340+", label: "Skills on offer" },
            { n: "8,100+", label: "Successful swaps" },
            { n: "50+", label: "Schools joined" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-display font-black text-2xl">{s.n}</p>
              <p className="text-primary-foreground/70 text-xs font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Onboarding / skill selector ── */}
      <section className="py-16 px-5 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-black text-foreground mb-3">What&apos;s your skill trade?</h2>
            <p className="text-muted-foreground">Select what you can teach and what you&apos;d like to learn — then find your match.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20 rounded-3xl p-6">
              <div className="flex items-center gap-2 mb-5">
                <span className="text-xl">🎓</span>
                <h3 className="font-display font-black text-lg">What I Can Teach</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {ALL_TEACH.map((skill) => (
                  <SkillPill
                    key={skill}
                    label={skill}
                    active={teach.includes(skill)}
                    onClick={() => toggle(teach, skill, setTeach)}
                  />
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-accent/5 to-accent/10 border-2 border-accent/20 rounded-3xl p-6">
              <div className="flex items-center gap-2 mb-5">
                <span className="text-xl">🌱</span>
                <h3 className="font-display font-black text-lg">What I Want to Learn</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {ALL_LEARN.map((skill) => (
                  <button
                    key={skill}
                    onClick={() => toggle(learn, skill, setLearn)}
                    className={`px-3.5 py-1.5 rounded-full text-sm font-semibold transition-all ${
                      learn.includes(skill)
                        ? "bg-accent text-accent-foreground shadow-md scale-105"
                        : "bg-white border border-border text-foreground/70 hover:border-accent/40 hover:text-accent"
                    }`}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-7 text-center">
            <button className="bg-primary text-primary-foreground px-10 py-3.5 rounded-full font-bold hover:opacity-90 transition-opacity shadow-xl shadow-primary/25">
              Find My Matches ✨
            </button>
          </div>
        </div>
      </section>

      {/* ── Match Feed ── */}
      <section className="py-16 px-5 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-black text-foreground mb-2">Skill Matches Near You</h2>
              <p className="text-muted-foreground">Teens ready to trade skills right now.</p>
            </div>
            <button className="text-primary font-bold text-sm hover:underline hidden md:block">See all →</button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {MATCH_CARDS.map((card, i) => (
              <div
                key={i}
                className="bg-card rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-0.5 border border-border group cursor-pointer"
              >
                <div className={`bg-gradient-to-br ${card.grad} p-5`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-white/25 rounded-full flex items-center justify-center text-white font-black text-sm">
                      {card.initials}
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">{card.name}</p>
                      <p className="text-white/70 text-xs">Age {card.age}</p>
                    </div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3">
                    <p className="text-white/75 text-xs font-bold uppercase tracking-wider mb-1">Offers</p>
                    <p className="text-white font-black text-lg">{card.offers}</p>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-muted-foreground text-xs font-bold uppercase tracking-wider mb-1">Wants to learn</p>
                  <p className="font-black text-foreground text-xl mb-4">{card.wants}</p>
                  <button className="w-full border-2 border-primary text-primary rounded-full py-2.5 text-sm font-bold group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    Connect →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Community Impact ── */}
      <section className="py-16 px-5 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-black text-foreground mb-3">Why Bloom matters</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Every teen has something worth teaching. Bloom turns that into real connection and growth.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { emoji: "🤝", title: "Real Connections", desc: "Match with peers who share your curiosity. Build friendships that go far beyond the classroom.", bg: "bg-orange-50", border: "border-orange-100" },
              { emoji: "🚀", title: "Skills That Matter", desc: "Learn practical, real-world skills from people your age who genuinely love what they do.", bg: "bg-purple-50", border: "border-purple-100" },
              { emoji: "🌍", title: "Give & Grow", desc: "Teaching reinforces your own knowledge. Every swap leaves both people better off.", bg: "bg-teal-50", border: "border-teal-100" },
            ].map((item) => (
              <div key={item.title} className={`${item.bg} ${item.border} border rounded-3xl p-7 hover:shadow-md transition-shadow`}>
                <span className="text-5xl mb-4 block">{item.emoji}</span>
                <h3 className="font-display font-black text-xl mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-primary to-[#FF8C42] rounded-3xl p-8 md:p-14 text-white text-center">
            <h3 className="font-display text-3xl md:text-4xl font-black mb-3">
              Join 2,400+ teens already blooming 🌸
            </h3>
            <p className="text-white/80 text-lg mb-8 max-w-lg mx-auto">
              Start your skill swap today. Free, safe, and surprisingly fun.
            </p>
            <button className="bg-white text-primary px-10 py-3.5 rounded-full font-bold text-base hover:bg-white/90 transition-opacity shadow-xl">
              Start Learning Today →
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// ─── Author 1 portfolio ───────────────────────────────────────────────────────
function Author1Page() {
  return (
    <main className="bg-background min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 py-16 px-5">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-violet-400 to-pink-500 flex items-center justify-center text-5xl shrink-0 shadow-2xl ring-4 ring-white">
            👩‍💻
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 bg-violet-100 text-violet-700 rounded-full px-3.5 py-1.5 text-sm font-bold mb-3">
              Co-creator of Bloom 🌸
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-black text-foreground mb-3">Maya Chen</h1>
            <p className="text-muted-foreground text-base leading-relaxed max-w-lg">
              Hey! I&apos;m Maya, a 17-year-old from San Francisco passionate about coding, graphic design, and building things that actually help people. Bloom started as a school project — and turned into something I truly love.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {["San Francisco, CA", "Grade 11", "Future CS major"].map((tag) => (
                <span key={tag} className="bg-white border border-border text-foreground/60 px-3 py-1 rounded-full text-sm font-medium">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-5 py-12 space-y-14">
        {/* Skills */}
        <section>
          <h2 className="font-display text-2xl font-black mb-6 flex items-center gap-2">⚡ My Skills</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { skill: "React / JavaScript", level: "Advanced", grad: "from-blue-400 to-blue-600", emoji: "💻" },
              { skill: "Figma & UI Design", level: "Advanced", grad: "from-violet-400 to-purple-600", emoji: "🎨" },
              { skill: "Python", level: "Intermediate", grad: "from-yellow-400 to-orange-500", emoji: "🐍" },
              { skill: "Graphic Design", level: "Advanced", grad: "from-pink-400 to-rose-500", emoji: "✏️" },
              { skill: "Public Speaking", level: "Intermediate", grad: "from-emerald-400 to-teal-500", emoji: "🎤" },
              { skill: "Video Editing", level: "Beginner", grad: "from-red-400 to-pink-500", emoji: "🎬" },
            ].map((item) => (
              <div key={item.skill} className="bg-white border border-border rounded-2xl p-4 hover:shadow-md transition-shadow">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.grad} flex items-center justify-center text-xl mb-3`}>
                  {item.emoji}
                </div>
                <p className="font-bold text-sm mb-0.5">{item.skill}</p>
                <p className="text-muted-foreground text-xs">{item.level}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="font-display text-2xl font-black mb-6 flex items-center gap-2">🚀 Projects</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                title: "Bloom App",
                desc: "A peer skill-swap platform for teens. Built with React, designed end-to-end in Figma, and showcased at our school innovation fair.",
                tag: "React · Figma · CSS",
                emoji: "🌸",
                bg: "bg-orange-50",
                border: "border-orange-100",
              },
              {
                title: "Study Buddy Dashboard",
                desc: "A productivity tool for students with a Pomodoro timer, subject tracker, and weekly analytics dashboard.",
                tag: "JavaScript · Chart.js",
                emoji: "📊",
                bg: "bg-blue-50",
                border: "border-blue-100",
              },
              {
                title: "Teen Tech Voices Zine",
                desc: "A digital zine I designed and edited featuring essays by teens on technology, identity, and the future.",
                tag: "Graphic Design · Editorial",
                emoji: "📰",
                bg: "bg-violet-50",
                border: "border-violet-100",
              },
              {
                title: "Accessibility Checker",
                desc: "A Python script that audits websites for WCAG compliance and generates plain-English reports.",
                tag: "Python · BeautifulSoup",
                emoji: "♿",
                bg: "bg-emerald-50",
                border: "border-emerald-100",
              },
            ].map((project) => (
              <div key={project.title} className={`${project.bg} ${project.border} border rounded-3xl p-6 hover:shadow-md transition-shadow`}>
                <span className="text-4xl mb-3 block">{project.emoji}</span>
                <h3 className="font-display font-black text-lg mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.desc}</p>
                <span className="bg-white/80 border border-white text-foreground/50 text-xs px-3 py-1 rounded-full font-medium">{project.tag}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Interests */}
        <section>
          <h2 className="font-display text-2xl font-black mb-6 flex items-center gap-2">💛 Interests &amp; Hobbies</h2>
          <div className="flex flex-wrap gap-3">
            {["Indie game dev", "Latte art", "Sci-fi novels", "Hiking trails", "Competitive chess", "Film photography", "Journaling", "Robotics club"].map((item) => (
              <span key={item} className="bg-violet-50 border border-violet-100 text-violet-800 px-4 py-2 rounded-full text-sm font-medium">
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="bg-gradient-to-br from-violet-50 to-pink-50 rounded-3xl p-8 border border-violet-100">
          <h2 className="font-display text-2xl font-black mb-1">Let&apos;s connect 👋</h2>
          <p className="text-muted-foreground mb-6 text-sm">Interested in collaborating or skill-swapping? I&apos;d love to hear from you.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: "Email", value: "maya.chen@example.com", emoji: "✉️" },
              { label: "LinkedIn", value: "linkedin.com/in/mayachen", emoji: "💼" },
              { label: "GitHub", value: "github.com/mayac", emoji: "🐙" },
              { label: "Portfolio", value: "mayachen.design", emoji: "🌐" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3.5 border border-border">
                <span className="text-xl">{item.emoji}</span>
                <div>
                  <p className="font-bold text-xs text-muted-foreground uppercase tracking-wide">{item.label}</p>
                  <p className="font-semibold text-sm">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}

// ─── Author 2 portfolio ───────────────────────────────────────────────────────
function Author2Page() {
  return (
    <main className="bg-background min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 py-16 px-5">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center text-5xl shrink-0 shadow-2xl ring-4 ring-white">
            🎵
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 bg-teal-100 text-teal-700 rounded-full px-3.5 py-1.5 text-sm font-bold mb-3">
              Co-creator of Bloom 🌸
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-black text-foreground mb-3">Jordan Park</h1>
            <p className="text-muted-foreground text-base leading-relaxed max-w-lg">
              What&apos;s up! I&apos;m Jordan, 16, from Austin. I make beats, sketch everywhere, and genuinely believe every teenager has a hidden talent the world needs to see. Bloom is my way of helping make that happen.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {["Austin, TX", "Grade 10", "Music + Art = Life"].map((tag) => (
                <span key={tag} className="bg-white border border-border text-foreground/60 px-3 py-1 rounded-full text-sm font-medium">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-5 py-12 space-y-14">
        {/* Skills */}
        <section>
          <h2 className="font-display text-2xl font-black mb-6 flex items-center gap-2">⚡ My Skills</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { skill: "Music Production", level: "Advanced", grad: "from-teal-400 to-teal-600", emoji: "🎹" },
              { skill: "Pencil & Ink Drawing", level: "Advanced", grad: "from-amber-400 to-orange-500", emoji: "✏️" },
              { skill: "FL Studio / Beat Making", level: "Advanced", grad: "from-purple-400 to-indigo-500", emoji: "🎛️" },
              { skill: "Photography", level: "Intermediate", grad: "from-blue-400 to-cyan-500", emoji: "📷" },
              { skill: "HTML & CSS", level: "Beginner", grad: "from-orange-400 to-red-500", emoji: "🌐" },
              { skill: "Lyrics Writing", level: "Intermediate", grad: "from-pink-400 to-rose-500", emoji: "📝" },
            ].map((item) => (
              <div key={item.skill} className="bg-white border border-border rounded-2xl p-4 hover:shadow-md transition-shadow">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.grad} flex items-center justify-center text-xl mb-3`}>
                  {item.emoji}
                </div>
                <p className="font-bold text-sm mb-0.5">{item.skill}</p>
                <p className="text-muted-foreground text-xs">{item.level}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="font-display text-2xl font-black mb-6 flex items-center gap-2">🚀 Projects</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                title: "Bloom App",
                desc: "Co-built the Bloom skill-swap platform. I led the match card UX, brand identity, and community section design.",
                tag: "UI Design · Branding",
                emoji: "🌸",
                bg: "bg-orange-50",
                border: "border-orange-100",
              },
              {
                title: "Echoes EP",
                desc: "A 5-track instrumental EP produced entirely in my bedroom studio. Blends lo-fi, jazz, and electronic elements.",
                tag: "Music Production · FL Studio",
                emoji: "🎵",
                bg: "bg-teal-50",
                border: "border-teal-100",
              },
              {
                title: "Sketchbook: City Life",
                desc: "40+ ink drawings of Austin street scenes, diners, and transit. Exhibited at the local youth art fair in Spring 2025.",
                tag: "Illustration · Ink · Drawing",
                emoji: "🏙️",
                bg: "bg-amber-50",
                border: "border-amber-100",
              },
              {
                title: "Raw Voices Podcast",
                desc: "A student-run podcast where teens interview each other about creativity, mental health, and high school life.",
                tag: "Audio Production · Editing",
                emoji: "🎙️",
                bg: "bg-blue-50",
                border: "border-blue-100",
              },
            ].map((project) => (
              <div key={project.title} className={`${project.bg} ${project.border} border rounded-3xl p-6 hover:shadow-md transition-shadow`}>
                <span className="text-4xl mb-3 block">{project.emoji}</span>
                <h3 className="font-display font-black text-lg mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.desc}</p>
                <span className="bg-white/80 border border-white text-foreground/50 text-xs px-3 py-1 rounded-full font-medium">{project.tag}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Interests */}
        <section>
          <h2 className="font-display text-2xl font-black mb-6 flex items-center gap-2">💛 Interests &amp; Hobbies</h2>
          <div className="flex flex-wrap gap-3">
            {["Vinyl record collecting", "Street photography", "Skateboarding", "Cooking ramen", "Anime", "Jazz history", "Thrift shopping", "Poetry slams"].map((item) => (
              <span key={item} className="bg-teal-50 border border-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium">
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-3xl p-8 border border-teal-100">
          <h2 className="font-display text-2xl font-black mb-1">Say hello 🎵</h2>
          <p className="text-muted-foreground mb-6 text-sm">Want to collab on music, swap skills on Bloom, or just talk art? I&apos;m around.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: "Email", value: "jordan.park@example.com", emoji: "✉️" },
              { label: "SoundCloud", value: "soundcloud.com/jordanpark", emoji: "🎵" },
              { label: "Instagram", value: "@jordan.sketches", emoji: "📸" },
              { label: "Portfolio", value: "jordanpark.art", emoji: "🌐" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3.5 border border-border">
                <span className="text-xl">{item.emoji}</span>
                <div>
                  <p className="font-bold text-xs text-muted-foreground uppercase tracking-wide">{item.label}</p>
                  <p className="font-semibold text-sm">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}

// ─── Root ────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/author1" element={<Author1Page />} />
          <Route path="/author2" element={<Author2Page />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
