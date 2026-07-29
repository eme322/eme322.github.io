import { Code2, Cpu, Gamepad2, BookOpen, Sparkles, Github, Mail, Sprout, Trophy } from 'lucide-react';
import type { Route } from '../NavBar';

interface Portfolio2Props {
  onNavigate: (route: Route) => void;
}

const skills = [
  { icon: Code2, label: 'Full-Stack Dev', color: 'bg-bloom-secondary/10 text-bloom-secondary' },
  { icon: Cpu, label: 'AI & ML', color: 'bg-bloom-primary/10 text-bloom-primary' },
  { icon: Gamepad2, label: 'Game Design', color: 'bg-bloom-tertiary/10 text-bloom-tertiary' },
  { icon: BookOpen, label: 'Chess Strategy', color: 'bg-bloom-secondary/10 text-bloom-secondary' },
];

const interests = ['Open Source', 'Retro Gaming', 'Competitive Programming', 'Chess', 'Sci-Fi Books', '3D Printing'];

const projects = [
  {
    title: 'Bloom Backend & Matching',
    desc: 'Designed the matching algorithm that pairs teens based on complementary skills, plus the real-time chat infrastructure.',
    tags: ['Supabase', 'TypeScript', 'Edge Functions'],
    accent: 'from-bloom-secondary to-bloom-secondary-container',
  },
  {
    title: 'Echo Chess Engine',
    desc: 'A chess AI with adjustable difficulty levels, built for teens learning the game through Bloom swaps.',
    tags: ['Python', 'Minimax', 'WebSocket'],
    accent: 'from-bloom-primary to-bloom-primary-container',
  },
  {
    title: 'Pixel Garden',
    desc: 'A cozy pixel-art farming game where players grow virtual plants while learning real gardening tips.',
    tags: ['Godot', 'GDScript'],
    accent: 'from-bloom-tertiary to-bloom-tertiary-container',
  },
];

const accomplishments = [
  { icon: Trophy, label: '1st Place', detail: 'National Teen Coding Challenge 2023' },
  { icon: Code2, label: '500+ Commits', detail: 'Across open-source projects on GitHub' },
  { icon: Gamepad2, label: 'Game Jam Winner', detail: 'Built a playable game in 48 hours' },
];

export default function Portfolio2({ onNavigate }: Portfolio2Props) {
  return (
    <div className="min-h-screen bg-bloom-background pt-14">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-bloom-secondary/10 rounded-full blur-3xl -ml-32 -mt-32" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-bloom-primary/10 rounded-full blur-3xl -mr-20 -mb-20" />
        <div className="max-w-5xl mx-auto px-5 md:px-8 py-16 md:py-24 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-bloom-secondary/10 text-bloom-secondary text-sm font-semibold mb-6">
                <Sparkles className="w-4 h-4" />
                Author 2
              </span>
              <h1 className="font-jakarta text-4xl md:text-6xl font-extrabold text-bloom-on-surface tracking-tight leading-tight mb-4">
                Hey, I'm <span className="text-bloom-secondary">Leo Rivera</span>
              </h1>
              <p className="text-lg text-bloom-on-surface-variant leading-relaxed max-w-xl mb-8">
                Full-stack developer and game designer who loves turning complex problems into simple, delightful experiences. I built Bloom's matching engine and real-time swap chat so teens can connect instantly.
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => onNavigate('bloom')}
                  className="bg-bloom-secondary text-bloom-on-secondary px-6 py-3 rounded-full font-semibold shadow-lg active:scale-95 transition-all flex items-center gap-2"
                >
                  <Sprout className="w-4 h-4" fill="currentColor" />
                  Explore Bloom
                </button>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-bloom-surface-container-high text-bloom-on-surface px-6 py-3 rounded-full font-semibold hover:bg-bloom-surface-container-highest transition-all flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </div>
            <div className="md:col-span-5 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-bloom-secondary to-bloom-primary rounded-full blur-2xl opacity-20" />
                <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    className="w-full h-full object-cover"
                    alt="Leo Rivera portrait"
                    src="https://images.pexels.com/photos/6804094/pexels-photo-6804094.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section className="max-w-5xl mx-auto px-5 md:px-8 py-12">
        <h2 className="font-jakarta text-3xl font-bold text-bloom-on-surface mb-6">About Me</h2>
        <div className="bg-bloom-surface-container-lowest rounded-2xl p-8 border border-bloom-outline-variant/20 sunlight-glow">
          <p className="text-lg text-bloom-on-surface-variant leading-relaxed mb-4">
            I'm an 18-year-old self-taught programmer from Lisbon who fell in love with code after modding a video game at 13. Since then, I've built everything from chess engines to indie games, and I'm passionate about making technology accessible to everyone.
          </p>
          <p className="text-lg text-bloom-on-surface-variant leading-relaxed">
            On Bloom, I teach <span className="text-bloom-secondary font-bold">Python Basics</span> and <span className="text-bloom-secondary font-bold">Chess Strategy</span>, and I'm learning <span className="text-bloom-primary font-bold">Photography</span> and <span className="text-bloom-primary font-bold">Music Production</span>. I believe the best way to learn is to teach—and Bloom makes that feel natural.
          </p>
        </div>
      </section>

      {/* Accomplishments */}
      <section className="max-w-5xl mx-auto px-5 md:px-8 py-12">
        <h2 className="font-jakarta text-3xl font-bold text-bloom-on-surface mb-6">Accomplishments</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {accomplishments.map((a) => (
            <div key={a.label} className="bg-bloom-surface-container-low rounded-xl p-5 flex items-center gap-4 hover:bg-bloom-surface-container-high transition-all">
              <div className="w-12 h-12 rounded-full bg-bloom-secondary/10 flex items-center justify-center text-bloom-secondary shrink-0">
                <a.icon className="w-6 h-6" />
              </div>
              <div>
                <p className="font-jakarta font-bold text-bloom-on-surface">{a.label}</p>
                <p className="text-xs text-bloom-on-surface-variant">{a.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Skills & Interests */}
        <h2 className="font-jakarta text-3xl font-bold text-bloom-on-surface mb-6">Skills & Interests</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {skills.map((s) => (
            <div key={s.label} className="bg-bloom-surface-container-low rounded-xl p-5 flex flex-col items-center gap-3 text-center hover:bg-bloom-surface-container-high transition-all">
              <div className={`w-12 h-12 rounded-full ${s.color} flex items-center justify-center`}>
                <s.icon className="w-6 h-6" />
              </div>
              <span className="text-sm font-semibold text-bloom-on-surface">{s.label}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {interests.map((interest) => (
            <span key={interest} className="px-4 py-2 rounded-full bg-bloom-secondary-fixed text-bloom-on-secondary-fixed text-sm font-semibold">
              {interest}
            </span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-5xl mx-auto px-5 md:px-8 py-12">
        <h2 className="font-jakarta text-3xl font-bold text-bloom-on-surface mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="bg-bloom-surface-container-lowest rounded-2xl overflow-hidden border border-bloom-outline-variant/20 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className={`h-2 bg-gradient-to-r ${p.accent}`} />
              <div className="p-6">
                <h3 className="font-jakarta text-lg font-bold text-bloom-on-surface mb-2">{p.title}</h3>
                <p className="text-sm text-bloom-on-surface-variant leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-full bg-bloom-surface-container text-bloom-on-surface-variant text-xs font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-5xl mx-auto px-5 md:px-8 py-12 pb-24">
        <div className="bg-bloom-secondary rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-bloom-secondary-container/30 rounded-full blur-3xl -ml-16 -mt-16" />
          <div className="relative z-10">
            <h2 className="font-jakarta text-3xl font-bold text-bloom-on-secondary mb-3">Let's Build Together</h2>
            <p className="text-bloom-on-secondary/80 mb-6 max-w-md mx-auto">Whether it's a chess match, a code review, or a game jam—I'm always up for a challenge.</p>
            <a
              href="mailto:leo@example.com"
              className="inline-flex items-center gap-2 bg-white text-bloom-secondary px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              <Mail className="w-4 h-4" />
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-bloom-outline-variant/20 py-8 px-5 text-center text-sm text-bloom-on-surface-variant">
        <p>Leo Rivera • Bloom Team • 2024</p>
      </footer>
    </div>
  );
}
