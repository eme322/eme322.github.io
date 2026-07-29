import { useState } from 'react';
import { Download, Upload, ShieldCheck, Handshake, CheckCircle, Loader2, Star } from 'lucide-react';

interface SwapRequestProps {
  onAccept: () => void;
}

export default function SwapRequest({ onAccept }: SwapRequestProps) {
  const [state, setState] = useState<'idle' | 'loading' | 'done'>('idle');

  const handleAccept = () => {
    setState('loading');
    setTimeout(() => setState('done'), 1200);
    setTimeout(() => onAccept(), 2000);
  };

  return (
    <main className="pt-8 px-5 max-w-container-max mx-auto pb-32">
      {/* Intro */}
      <section className="mb-10 text-center">
        <h1 className="font-jakarta text-3xl font-bold text-bloom-primary mb-2">New Swap Request!</h1>
        <p className="text-base text-bloom-on-surface-variant max-w-md mx-auto">Alex wants to grow their skills with you. Review the trade details below to see if it's a match.</p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Peer Profile Card */}
        <div className="md:col-span-4 bg-bloom-surface-container-lowest rounded-xl p-6 sunlight-glow border border-bloom-outline-variant/30 hover:scale-[1.02] transition-transform duration-300">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="relative">
              <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-bloom-primary to-bloom-secondary">
                <div className="w-full h-full rounded-full overflow-hidden bg-white">
                  <img
                    className="w-full h-full object-cover"
                    alt="Alex Chen"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGxiCm81Oh36VhxPdt0nTAJnBIYW3fLr_9pUteOeJXbhM1jeHVYtEqM4IPTQWcNJVrvCwNj533L546yacG9nvS45TsVPumMrdpOsSP0mmf2Kar-BVWhlUlLzi0eLkGwpKA1Xbuikl0D3wrs17leKA2Zd78uv6N3BI1gsTXjcZWtcxgVCUyGFLbYhFVVHxpdOMH6VyIJD303_4-LwkggWy55MZ0Kmmv97nwm1ZG8bXhxthvrMaTMlgAafujSoBiDYkg2_r_QoKlrSA"
                  />
                </div>
              </div>
              <div className="absolute bottom-0 right-0 bg-bloom-secondary text-bloom-on-secondary rounded-full p-1 border-2 border-white">
                <CheckCircle className="w-4 h-4" fill="currentColor" />
              </div>
            </div>
            <div>
              <h2 className="font-jakarta text-2xl font-bold text-bloom-on-surface">Alex Chen</h2>
              <div className="flex items-center justify-center gap-1 text-bloom-secondary mt-1">
                <Star className="w-4 h-4" fill="currentColor" />
                <span className="text-sm font-semibold">4.9 (24 Swaps)</span>
              </div>
            </div>
            <p className="text-base text-bloom-on-surface-variant italic">"Passionate about building clean apps and even better friendships."</p>
            <div className="w-full pt-4 border-t border-bloom-outline-variant/20">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-bloom-on-surface-variant">Community Trust</span>
                <span className="text-sm font-semibold text-bloom-secondary">High</span>
              </div>
              <div className="w-full h-2 bg-bloom-surface-container-high rounded-full overflow-hidden">
                <div className="bg-bloom-secondary h-full w-[92%]" />
              </div>
            </div>
          </div>
        </div>

        {/* Swap Details */}
        <div className="md:col-span-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Get Card */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-bloom-outline-variant/20 flex flex-col hover:scale-[1.02] transition-transform duration-300">
              <div className="h-40 relative">
                <img
                  className="w-full h-full object-cover"
                  alt="Coding"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkpkzSZkXimi7zWG2vSE00bKQMQqPnmseesi8dkhNJz0T29Pth2Nm9wAgF5TpcFPXekK8FqfpLISube4wrLUkJuAcwtPj09AOfHh3iNLqU2jB8gd1ebyIUpQ-MTI7gAt2lAjZMFY1rvNmW2K5R4aZst-v0X2vL0FTo2wyruFguKF60ZBdwD_tRY0gxVxBFKAz_z8yQxNuFZoTeUyk_2o4aWfpWFUxZGKcAf4eiOuFjZeEKPmVZgTFEljZhaAE2hyasRKPA2YZJolQ"
                />
                <div className="absolute top-4 left-4 bg-bloom-primary text-bloom-on-primary px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 shadow-md">
                  <Download className="w-3 h-3" />
                  WHAT YOU GET
                </div>
              </div>
              <div className="p-6 bg-bloom-surface-container-lowest">
                <h3 className="font-jakarta text-2xl font-bold text-bloom-primary mb-2">Coding Tips</h3>
                <p className="text-base text-bloom-on-surface-variant mb-4">Master React hooks and Tailwind layouts. Alex will walk you through building a responsive dashboard from scratch.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-bloom-secondary/10 text-bloom-secondary border border-bloom-secondary/20 rounded-full text-sm font-semibold">Web Dev</span>
                  <span className="px-3 py-1 bg-bloom-secondary/10 text-bloom-secondary border border-bloom-secondary/20 rounded-full text-sm font-semibold">60 Mins</span>
                </div>
              </div>
            </div>

            {/* Give Card */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-bloom-outline-variant/20 flex flex-col hover:scale-[1.02] transition-transform duration-300">
              <div className="h-40 relative">
                <img
                  className="w-full h-full object-cover"
                  alt="Sketching"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-Ur68dHAZpRAq_V0t7tPbj6GZkwm-lRe3DnmSrhxuGd1920u9olFm1C8-43vYD_kXvIkxz8kxDYCY6Hu-0SX3FO5sa5h3t3V07lOuCcRgv_B93SfqJF8RWUyQppYRmzVT-h37bBGRi2fBGJfVTa1vvyICwigek9xZs2yis7ir_sD1ZHX6mp7jpBCNdBAhRZrWgCC4d3cjqQY5b4F04gilystxjZP7L1k2aQKm9BG9g2awKyMm251DmgjIxBjSYwPgpoXbU4IsFvo"
                />
                <div className="absolute top-4 left-4 bg-bloom-secondary text-bloom-on-secondary px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 shadow-md">
                  <Upload className="w-3 h-3" />
                  WHAT YOU GIVE
                </div>
              </div>
              <div className="p-6 bg-bloom-surface-container-lowest">
                <h3 className="font-jakarta text-2xl font-bold text-bloom-secondary mb-2">Sketch Lesson</h3>
                <p className="text-base text-bloom-on-surface-variant mb-4">Share your techniques for realistic shading and composition. You'll help Alex improve their figure drawing skills.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-bloom-tertiary-fixed-dim/20 text-bloom-on-tertiary-container border border-bloom-tertiary-container/20 rounded-full text-sm font-semibold">Fine Art</span>
                  <span className="px-3 py-1 bg-bloom-tertiary-fixed-dim/20 text-bloom-on-tertiary-container border border-bloom-tertiary-container/20 rounded-full text-sm font-semibold">1-on-1</span>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="bg-bloom-surface-container rounded-xl p-6 relative overflow-hidden">
            <div className="relative z-10">
              <h4 className="font-jakarta text-2xl font-bold text-bloom-on-surface mb-2">Transparency & Safety</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-bloom-primary shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-bloom-on-surface">Verified Profile</p>
                    <p className="text-xs text-bloom-on-surface-variant">Alex has completed ID verification and 5 safety checks.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-bloom-secondary shrink-0">
                    <Handshake className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-bloom-on-surface">Secure Session</p>
                    <p className="text-xs text-bloom-on-surface-variant">Meetings happen within Bloom's moderated virtual space.</p>
                  </div>
                </div>
              </div>
            </div>
            <svg className="absolute -right-4 top-0 h-full w-24 opacity-10 pointer-events-none" viewBox="0 0 100 200">
              <path className="vine-progress" d="M50,0 C70,50 30,100 50,150 C60,175 80,180 90,200" fill="none" stroke="#00696b" strokeWidth="4" />
              <circle cx="50" cy="50" fill="#a53c05" r="4" />
              <circle cx="40" cy="110" fill="#a53c05" r="4" />
              <circle cx="55" cy="160" fill="#a53c05" r="4" />
            </svg>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={handleAccept}
              className={`flex-1 font-jakarta text-2xl font-semibold py-4 rounded-xl shadow-lg active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 ${
                state === 'done' ? 'bg-bloom-secondary text-bloom-on-secondary' : 'bg-gradient-to-r from-bloom-primary to-bloom-primary-container text-bloom-on-primary'
              }`}
            >
              {state === 'idle' && 'Accept Swap'}
              {state === 'loading' && (
                <>
                  <Loader2 className="w-6 h-6 animate-spin" />
                  Connecting...
                </>
              )}
              {state === 'done' && (
                <>
                  <CheckCircle className="w-6 h-6" />
                  Swap Accepted!
                </>
              )}
            </button>
            <button className="flex-1 bg-bloom-surface-container-high text-bloom-on-surface-variant font-jakarta text-2xl font-semibold py-4 rounded-xl hover:bg-bloom-surface-variant active:scale-95 transition-all duration-200">
              Decline
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
