import { useState } from 'react';
import { ArrowLeft, Plus, Send, Smile, Download, FileText, Calendar, Camera, Music, ShieldCheck, Sprout } from 'lucide-react';

const swaps = [
  { name: 'Leo • Photography', last: 'Lesson 1 scheduled!', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTRcN2IgSwGQVkNfJ8r2JIx8ZL2FyEQn9fxhAZ01ZbNGKListkejfppTmL7c4qGPoh1BXI9128UDo2-5dpX5eB-jXSn0FPXBtdYCFA-2PwSuoGdyvH6Nax3_b45BuA1Qpnzo7mQRygmZGkySwdi4470D9IeEIBbTG9rD-9mbzodjlEK9q73yxHNbPIXlSxI3CFTUDK2lAqvIIsevOmJqRz3Aw2JkvBuMdH2RlzjdjMRsBlHiLJawt4j-br9XULSsLF0pW290mfCt8' },
  { name: 'Maya • UI Design', last: "You: That's awesome!", avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqYBH6i6kSj03B3jVa1j6fdiM0D7YAki0HYqCQ0vksixX8Oj0uhIOmdfwJXL5gLSmjHvZqDxxGHizQ-80mmsZv0QU50htJ2pxpLQ7KXm1OuFj62Gj-hfb37DfAJf_ioM4msONhaz_VcHQdu4zgo-R_xF2wIEkDestxXBx2ExxMzdY9liU8nF4XcGJqL-OIWYTTFNaaTX3qiiY3YOQ7pLMQTXMj0SC9X3SoV8ZFlqdNuYnCpFxPJUH4-PPEB_YbgN3mEgDG1fOd8nc' },
  { name: 'Alex • Chess', last: 'Alex sent a resource', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqFeFL_MXzODw2YM00_nQfvxZHdXz5tnKpwgrTQJ_etDiXmunvhxkxkr65NBi-1IvwQpMWgYAGyASAEW_Z3Ye5kelglVu5aHv80AmZq2pucnj72lvuFQzGEVBIJYR-9n-wQpX10MhpLhJ2PX_WD6u2hIZ5I0UKA6qb5W6kTaikwPYttcgjX1qe6UmZ7ZVw1Z6_6WFkfVx8lGW_HNny1t8x0U66F5SIEwcxaFHQkQP5RlWAuOGcFTFv8E9Yg-TiJanS4I41laDkghw' },
];

export default function ActiveSwaps() {
  const [activeSwap, setActiveSwap] = useState(0);
  const [messages, setMessages] = useState<{ sender: 'me' | 'them'; text: string }[]>([
    { sender: 'them', text: "Hey! I'm really excited about our photography swap. I've been wanting to learn Lightroom for ages." },
    { sender: 'me', text: "Same here! I'm stoked to learn some of your guitar tricks in return." },
    { sender: 'them', text: "Just saw the schedule! Saturday works perfectly. Should I bring any specific photos to edit?" },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: 'me', text: input }]);
    setInput('');
  };

  return (
    <main className="flex-1 mb-20 max-w-container-max mx-auto w-full flex flex-col md:flex-row gap-6 px-5 pt-4 overflow-hidden" style={{ minHeight: 'calc(100vh - 8rem)' }}>
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-80 bg-bloom-surface-container-low rounded-xl p-4 gap-4 overflow-y-auto">
        <h2 className="font-jakarta text-2xl font-bold text-bloom-primary px-2">Swaps</h2>
        <div className="flex flex-col gap-2">
          {swaps.map((s, i) => (
            <button
              key={s.name}
              onClick={() => setActiveSwap(i)}
              className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-colors text-left ${
                activeSwap === i ? 'bg-bloom-primary-container text-bloom-on-primary-container' : 'hover:bg-bloom-surface-container-high text-bloom-on-surface-variant'
              }`}
            >
              <div className="w-12 h-12 rounded-full overflow-hidden bg-bloom-surface-variant flex-shrink-0">
                <img className="w-full h-full object-cover" alt={s.name} src={s.avatar} />
              </div>
              <div className="overflow-hidden">
                <p className="text-sm font-semibold truncate">{s.name}</p>
                <p className="text-xs truncate opacity-90">{s.last}</p>
              </div>
            </button>
          ))}
        </div>
      </aside>

      {/* Chat Container */}
      <section className="flex-1 flex flex-col bg-bloom-surface-container-lowest rounded-t-xl md:rounded-xl bloom-shadow relative overflow-hidden">
        {/* Progress Tracker */}
        <div className="bg-bloom-surface-container px-4 py-3 flex flex-col gap-2">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-semibold text-bloom-primary">Swap Progress: Photo Editing</span>
            <span className="text-xs font-semibold text-bloom-secondary">Step 2 of 5</span>
          </div>
          <div className="relative h-2 bg-bloom-outline-variant rounded-full overflow-hidden">
            <div className="absolute top-0 left-0 h-full bg-bloom-primary-container rounded-full" style={{ width: '40%' }} />
            <div className="absolute top-0 left-[20%] -mt-1">
              <Sprout className="w-3.5 h-3.5 text-bloom-primary" fill="currentColor" />
            </div>
            <div className="absolute top-0 left-[40%] -mt-1">
              <Sprout className="w-3.5 h-3.5 text-bloom-primary" fill="currentColor" />
            </div>
          </div>
          <div className="flex justify-between text-[10px] uppercase tracking-wider font-bold text-bloom-on-surface-variant opacity-70">
            <span>Matched</span>
            <span className="text-bloom-primary">Lesson 1</span>
            <span>Mid-Review</span>
            <span>Final Lab</span>
            <span>Complete</span>
          </div>
        </div>

        {/* Mobile Chat Header */}
        <div className="md:hidden flex items-center gap-3 p-4 border-b border-bloom-outline-variant">
          <button className="text-bloom-on-surface-variant">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img className="w-full h-full object-cover" alt="Leo" src={swaps[0].avatar} />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-semibold">Leo</h3>
            <p className="text-[10px] text-bloom-secondary font-bold">ACTIVE NOW</p>
          </div>
        </div>

        {/* Chat History */}
        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
          <div className="text-center">
            <span className="px-3 py-1 rounded-full bg-bloom-surface-container-high text-xs text-bloom-on-surface-variant">Yesterday</span>
          </div>

          {messages.map((m, i) => (
            <div key={i} className={`flex items-end gap-2 max-w-[85%] ${m.sender === 'me' ? 'self-end justify-end' : ''} animate-fade-in-up`}>
              {m.sender === 'them' && (
                <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                  <img className="w-full h-full object-cover" alt="Leo" src={swaps[0].avatar} />
                </div>
              )}
              <div className={`p-3 rounded-2xl text-base ${m.sender === 'me' ? 'bg-bloom-primary-container text-bloom-on-primary-container rounded-br-sm' : 'bg-bloom-surface-container text-bloom-on-surface rounded-bl-sm'}`}>
                {m.text}
              </div>
            </div>
          ))}

          {/* Resource Card */}
          <div className="self-end max-w-[85%] w-full">
            <div className="bg-white border-2 border-bloom-secondary-fixed rounded-xl overflow-hidden bloom-shadow">
              <div className="p-3 bg-bloom-secondary-fixed text-bloom-on-secondary-fixed flex items-center gap-2">
                <FileText className="w-5 h-5" />
                <span className="text-sm font-semibold">Shared Resource</span>
              </div>
              <div className="p-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded bg-bloom-surface-container flex items-center justify-center">
                  <FileText className="w-6 h-6 text-bloom-primary" />
                </div>
                <div className="flex-1 overflow-hidden">
                  <p className="text-sm font-semibold text-bloom-on-surface truncate">Photography_Basics_v1.pdf</p>
                  <p className="text-xs text-bloom-on-surface-variant">2.4 MB • PDF Document</p>
                </div>
                <button className="p-2 text-bloom-primary hover:bg-bloom-primary-fixed rounded-full transition-colors">
                  <Download className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Notification */}
          <div className="flex justify-center my-2">
            <div className="bg-bloom-secondary-container text-bloom-on-secondary-container px-4 py-2 rounded-full flex items-center gap-2 text-xs font-bold">
              <Calendar className="w-3.5 h-3.5" />
              LESSON 1 SCHEDULED: SATURDAY @ 3:00 PM
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 bg-bloom-surface border-t border-bloom-outline-variant">
          <div className="flex items-center gap-2">
            <button className="p-2 text-bloom-primary hover:bg-bloom-primary-fixed rounded-full transition-colors">
              <Plus className="w-5 h-5" />
            </button>
            <div className="flex-1 relative">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                className="w-full py-3 px-4 rounded-full bg-bloom-surface-container-low border-2 border-bloom-outline-variant focus:border-bloom-primary-container focus:ring-0 transition-all outline-none text-base"
                placeholder="Type a message..."
                type="text"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-bloom-primary">
                <Smile className="w-5 h-5" />
              </button>
            </div>
            <button
              onClick={sendMessage}
              className="bg-bloom-primary hover:bg-bloom-on-primary-fixed-variant text-white p-3 rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-all"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Right Side: Swap Details */}
      <aside className="hidden xl:flex flex-col w-72 gap-6 overflow-y-auto pb-6">
        <div className="bg-white p-5 rounded-2xl bloom-shadow flex flex-col gap-3">
          <h3 className="font-jakarta text-sm font-bold text-bloom-primary">Swap Details</h3>
          <div className="flex items-start gap-3">
            <div className="p-2 bg-bloom-secondary-container rounded-lg">
              <Camera className="w-5 h-5 text-bloom-secondary" />
            </div>
            <div>
              <p className="text-sm font-semibold">Learning</p>
              <p className="text-xs text-bloom-on-surface-variant">Adobe Lightroom & Color Grading</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="p-2 bg-bloom-tertiary-fixed rounded-lg">
              <Music className="w-5 h-5 text-bloom-tertiary" />
            </div>
            <div>
              <p className="text-sm font-semibold">Teaching</p>
              <p className="text-xs text-bloom-on-surface-variant">Acoustic Guitar Basics</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-jakarta text-sm font-bold text-bloom-primary px-2">Files (4)</h3>
          <div className="flex flex-col gap-2">
            {['raw_image_01.jpg', 'raw_image_02.jpg'].map((f) => (
              <div key={f} className="flex items-center gap-3 p-3 bg-bloom-surface-container-low hover:bg-bloom-surface-container-high rounded-xl cursor-pointer transition-colors">
                <Camera className="w-5 h-5 text-bloom-outline" />
                <div className="flex-1 overflow-hidden">
                  <p className="text-xs font-bold truncate">{f}</p>
                  <p className="text-[10px] text-bloom-on-surface-variant">Shared Yesterday</p>
                </div>
              </div>
            ))}
            <button className="text-bloom-primary text-sm font-semibold text-center py-2 hover:underline">View all assets</button>
          </div>
        </div>

        <div className="bg-bloom-primary-fixed p-4 rounded-2xl flex flex-col gap-2">
          <div className="flex items-center gap-2 text-bloom-on-primary-fixed font-bold text-xs">
            <ShieldCheck className="w-4 h-4" />
            BLOOM SAFETY
          </div>
          <p className="text-[11px] text-bloom-on-primary-fixed-variant leading-relaxed">
            Remember to keep sessions in public digital spaces or supervised areas. Never share your password or home address.
          </p>
        </div>
      </aside>
    </main>
  );
}
