import { Palette, Code2, Music, Camera, Sparkles, Github, Mail, Sprout } from 'lucide-react';
import type { Route } from '../NavBar';

interface Portfolio1Props {
  onNavigate: (route: Route) => void;
}

const skills = [
  { icon: Palette, label: 'UI/UX Design', color: 'bg-bloom-primary/10 text-bloom-primary' },
  { icon: Code2, label: 'React & TypeScript', color: 'bg-bloom-secondary/10 text-bloom-secondary' },
  { icon: Camera, label: 'Photography', color: 'bg-bloom-tertiary/10 text-bloom-tertiary' },
  { icon: Music, label: 'Music Production', color: 'bg-bloom-primary/10 text-bloom-primary' },
];

const interests = ['Digital Art', 'Indie Music', 'Sustainable Design', 'Coffee', 'Street Photography', 'Hackathons'];

const projects = [
  {
    title: 'Bloom Community App',
    desc: 'A peer-to-peer skill-swapping platform for teens. Led the design system, match feed, and swap request flow.',
    tags: ['React', 'Tailwind', 'Design System'],
    accent: 'from-bloom-primary to-bloom-primary-container',
  },
  {
    title: 'Lumen Photo Journal',
    desc: 'A photo journaling app with mood-based color grading and weekly creative prompts.',
    tags: ['React Native', 'Firebase'],
    accent: 'from-bloom-secondary to-bloom-secondary-container',
  },
  {
    title: 'Chord Atlas',
    desc: 'An interactive guitar chord library with progress tracking and daily practice streaks.',
    tags: ['TypeScript', 'Web Audio API'],
    accent: 'from-bloom-tertiary to-bloom-tertiary-container',
  },
];

export default function Portfolio1({ onNavigate }: Portfolio1Props) {
  return (
    <div className="min-h-screen bg-bloom-background pt-14">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-bloom-primary/10 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-bloom-secondary/10 rounded-full blur-3xl -ml-20 -mb-20" />
        <div className="max-w-5xl mx-auto px-5 md:px-8 py-16 md:py-24 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-bloom-primary/10 text-bloom-primary text-sm font-semibold mb-6">
                <Sparkles className="w-4 h-4" />
                Author 1
              </span>
              <h1 className="font-jakarta text-4xl md:text-6xl font-extrabold text-bloom-on-surface tracking-tight leading-tight mb-4">
                Hi, I'm <span className="text-bloom-primary">Maya Chen</span>
              </h1>
              <p className="text-lg text-bloom-on-surface-variant leading-relaxed max-w-xl mb-8">
                Designer and front-end developer who believes great products start with empathy. I built Bloom's design system and match experience to help teens feel confident teaching and learning from each other.
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => onNavigate('bloom')}
                  className="bg-bloom-primary text-bloom-on-primary px-6 py-3 rounded-full font-semibold shadow-lg active:scale-95 transition-all flex items-center gap-2"
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
                <div className="absolute inset-0 bg-gradient-to-tr from-bloom-primary to-bloom-secondary rounded-full blur-2xl opacity-20" />
                <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    className="w-full h-full object-cover"
                    alt="Maya Chen portrait"
                    src="https://images.pexels.com/photos/20682247/pexels-photo-20682247.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
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
            I'm a 19-year-old design student from Singapore with a love for building things that feel human. My journey started with sketching in notebooks and grew into designing digital products that people actually enjoy using.
          </p>
          <p className="text-lg text-bloom-on-surface-variant leading-relaxed">
            On Bloom, I teach <span className="text-bloom-primary font-bold">Digital Illustration</span> and <span className="text-bloom-secondary font-bold">Urban Gardening</span>, and I'm currently learning <span className="text-bloom-primary font-bold">Python</span> and <span className="text-bloom-primary font-bold">Jazz Piano</span>. I believe everyone has a skill worth sharing—even if they don't know it yet.
          </p>
        </div>
      </section>

      {/* Skills & Interests */}
      <section className="max-w-5xl mx-auto px-5 md:px-8 py-12">
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
            <span key={interest} className="px-4 py-2 rounded-full bg-bloom-primary-fixed text-bloom-on-primary-fixed text-sm font-semibold">
              {interest}
            </span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-5xl mx-auto px-5 md:px-8 py-12">
        <h2 className="font-jakarta text-3xl font-bold text-bloom-on-surface mb-6">Projects & Accomplishments</h2>
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
        <div className="bg-bloom-primary rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-bloom-primary-container/30 rounded-full blur-3xl -mr-16 -mt-16" />
          <div className="relative z-10">
            <h2 className="font-jakarta text-3xl font-bold text-bloom-on-primary mb-3">Let's Connect</h2>
            <p className="text-bloom-on-primary/80 mb-6 max-w-md mx-auto">Want to swap a skill or collaborate on a project? I'm always open to a good conversation.</p>
            <a
              href="mailto:maya@example.com"
              className="inline-flex items-center gap-2 bg-white text-bloom-primary px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              <Mail className="w-4 h-4" />
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-bloom-outline-variant/20 py-8 px-5 text-center text-sm text-bloom-on-surface-variant">
        <p>Maya Chen • Bloom Team • 2024</p>
      </footer>
    </div>
  );
}
