import { useState, useEffect } from 'react'
import PlugConnectedIcon from './ui/plug-connected-icon'

// ── Icons & Decoratives ───────────────────────────────────────────────────

function IconZap({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  )
}

function IconEraser({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M20 20H7L3 16l13-13 7 7-3 10z" /><path d="M6.5 17.5l3-3" />
    </svg>
  )
}

function IconTarget({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
    </svg>
  )
}

function IconShield({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

function IconGitHub({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function SectionDecor() {
  return (
    <div className="flex flex-col items-center mb-6">
      <img src="/icons/lineasyflecha.svg" alt="" className="w-12 h-12 opacity-80" />
    </div>
  )
}

// ── Reading Progress Bar ───────────────────────────────────────────────────

function ReadingProgressBar() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const updateScroll = () => {
      const currentScroll = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      if (scrollHeight <= 0) {
        setProgress(0)
      } else {
        setProgress((currentScroll / scrollHeight) * 100)
      }
    }
    window.addEventListener('scroll', updateScroll)
    return () => window.removeEventListener('scroll', updateScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-1.5 z-[100] bg-transparent">
      <div 
        className="h-full bg-[#22c55e] transition-all duration-150 ease-out shadow-[0_0_10px_#22c55e]" 
        style={{ width: `${Math.min(100, Math.max(0, progress))}%` }} 
      />
    </div>
  )
}

// ── Navbar ─────────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4 ${scrolled ? 'bg-night/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/icons/cubo1.svg" alt="FocusSpace Logo" className="w-8 h-8" />
          <span className="text-white font-bold text-xl tracking-tight">FocusSpace</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-white/70 hover:text-white transition-colors text-sm">Features</a>
          <a href="#how-it-works" className="text-white/70 hover:text-white transition-colors text-sm">How it works</a>
          <a href="https://github.com/joseorono/focus-space" target="_blank" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm">
            <IconGitHub className="w-4 h-4" /> GitHub
          </a>
          <a href="https://chromewebstore.google.com/search/FocusSpace" target="_blank" className="bg-[#1976d2] text-white px-5 py-2 rounded-full font-semibold text-sm hover:bg-[#1565c0] transition-all shadow-lg shadow-blue-500/20">
            Add to Chrome
          </a>
        </div>
      </div>
    </nav>
  )
}

// ── Hero Section ───────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-purple-500/10 rounded-full blur-[150px]" />
        <img src="/icons/lineas.svg" alt="" className="absolute top-1/4 right-0 w-1/3 opacity-5" />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 animate-fade-in">
          <PlugConnectedIcon className="w-4 h-4 text-blue-400" />
          <span className="text-white/60 text-xs font-medium uppercase tracking-widest">Open Source & Privacy First</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
          Your browser remembers every distraction. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">FocusSpace forgets them</span> for you.
        </h1>

        <p className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
          One click clears the noise — distracting tabs, tempting history, and the trail of "just one more scroll." 100% local. 100% free. 100% yours.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a href="https://chromewebstore.google.com/search/FocusSpace" className="w-full sm:w-auto bg-white text-night px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">
            Add to Chrome — It's Free
          </a>
          <a href="https://github.com/joseorono/focus-space" className="w-full sm:w-auto bg-white/5 text-white border border-white/10 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
            <IconGitHub /> View on GitHub ⭐
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-white/5">
          <div className="flex flex-col items-center">
            <span className="text-white font-bold text-lg">100%</span>
            <span className="text-white/40 text-xs uppercase tracking-tighter">Open Source</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-white font-bold text-lg">Local</span>
            <span className="text-white/40 text-xs uppercase tracking-tighter">Processing</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-white font-bold text-lg">MIT</span>
            <span className="text-white/40 text-xs uppercase tracking-tighter">Licensed</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-white font-bold text-lg">Zero</span>
            <span className="text-white/40 text-xs uppercase tracking-tighter">Data Tracking</span>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Problem Section ────────────────────────────────────────────────────────

function Problem() {
  return (
    <section className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-5xl mx-auto">
        <SectionDecor />
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-16 font-serif italic">
          You sat down to work. Two hours later, you're watching a video essay about medieval bread.
        </h2>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-3xl blur-xl group-hover:opacity-100 transition-opacity opacity-50" />
            <img 
              src="/screenshots/App-main-view.png" 
              alt="Cluttered Browser" 
              className="relative rounded-2xl border border-white/10 shadow-2xl transition-transform group-hover:scale-[1.02]" 
            />
          </div>
          
          <div className="space-y-6">
            <p className="text-xl text-white/80 leading-relaxed">
              You know how it happened. You opened a new tab to "quickly check something." Autocomplete finished the word for you.
            </p>
            <p className="text-lg text-white/60">
              It's not a willpower problem. It's a <span className="text-white font-semibold underline decoration-red-500/50">friction problem</span>.
            </p>
            <ul className="space-y-4">
              {[
                "Autocomplete pointing at YouTube every time you type 'y'",
                "Forty-seven open tabs screaming for your attention",
                "History full of 'digital residue' tempting your next click",
                "Extensions that want your data just to help you focus"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Features Section ───────────────────────────────────────────────────────

function Features() {
  const features = [
    {
      title: "Session Cleaner",
      tagline: "Nuke distractions in one click",
      desc: "Instantly close every tab that matches a distraction category — gaming, social, NSFW, shopping. Keep your workspace, lose the noise.",
      icon: <IconZap className="w-6 h-6 text-blue-400" />,
      color: "from-blue-500/10 to-transparent",
      cornerIcon: "/icons/cubo1.svg"
    },
    {
      title: "Browser Cleaner",
      tagline: "Surgical history wipe",
      desc: "Why delete your entire history just to forget YouTube exists? FocusSpace removes history by category so your work research survives.",
      icon: <IconEraser className="w-6 h-6 text-emerald-400" />,
      color: "from-emerald-500/10 to-transparent",
      cornerIcon: "/icons/cubo2.svg"
    },
    {
      title: "Focus Mode",
      tagline: "Deep work companion",
      desc: "Built-in 25/5 Pomodoro timer with task management and real-time notifications if you wander into distracting territory.",
      icon: <IconTarget className="w-6 h-6 text-purple-400" />,
      color: "from-purple-500/10 to-transparent",
      cornerIcon: "/icons/circulo.svg"
    },
    {
      title: "Privacy by Design",
      tagline: "Not by promise",
      desc: "Every byte of processing happens locally. No servers. No analytics. No accounts. We couldn't spy on you if we wanted to.",
      icon: <IconShield className="w-6 h-6 text-orange-400" />,
      color: "from-orange-500/10 to-transparent",
      cornerIcon: "/icons/persona.svg"
    }
  ]

  return (
    <section id="features" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionDecor />
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Built for the Deep Work era.</h2>
          <p className="text-white/60 max-w-xl mx-auto italic">
            FocusSpace strips your browser back down to the thing you actually opened it to do.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className={`relative p-8 rounded-3xl border border-white/10 bg-gradient-to-b ${f.color} hover:border-white/20 transition-all group overflow-hidden`}>
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                <img src={f.cornerIcon} alt="" className="w-6 h-6 opacity-40" />
              </div>
              
              <div className="mb-6">{f.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{f.title}</h3>
              <p className="text-xs uppercase tracking-widest text-white/40 font-bold mb-4">{f.tagline}</p>
              <p className="text-white/60 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Slider Section (How it works) ──────────────────────────────────────────

function HowItWorksSlider() {
  const steps = [
    {
      id: "01",
      title: "Install in 10 seconds",
      desc: "Add to Chrome. Pin the icon. That's it. No sign-up, no onboarding funnel, no 'verify your email'. Just a clean runway.",
      img: "/screenshots/App-header-with-new-logo.png"
    },
    {
      id: "02",
      title: "Set Your Boundaries",
      desc: "Define the keywords and categories (Social, Gaming, NSFW) that distract you most. Whitelist the domains you need for work.",
      img: "/screenshots/App-settings-view.png"
    },
    {
      id: "03",
      title: "Clean & Focus",
      desc: "One click closes the tabs. One click wipes the history. One click starts your focus session. Your browser becomes a tool again.",
      img: "/screenshots/App-task-view.png"
    }
  ]

  const [active, setActive] = useState(0)

  return (
    <section id="how-it-works" className="py-24 px-6 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto">
        <SectionDecor />
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-20 tracking-tighter underline decoration-blue-500/30">Three steps to a distraction-free mind.</h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            {steps.map((step, i) => (
              <div 
                key={i} 
                onClick={() => setActive(i)}
                className={`p-6 rounded-2xl cursor-pointer transition-all border ${active === i ? 'bg-white/5 border-white/20' : 'bg-transparent border-transparent opacity-40 hover:opacity-100'}`}
              >
                <div className="flex gap-4">
                  <span className="text-2xl font-black text-blue-500/50 font-mono">{step.id}</span>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    {active === i && <p className="text-white/60 text-sm animate-fade-in">{step.desc}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full" />
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-500">
              <img src={steps[active].img} alt={steps[active].title} className="w-full h-auto animate-scale-in" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── FAQ Section ────────────────────────────────────────────────────────────

function FAQ() {
  const faqs = [
    {
      q: "Is it really free? What's the catch?",
      a: "No catch. FocusSpace is open source under MIT. No paid tier, no 'pro' unlock. We built it because we needed it, and we want you to have it too."
    },
    {
      q: "Will it delete my actual work history?",
      a: "No. FocusSpace only removes entries matching the categories YOU enable. Your research tabs, docs, and work sites stay untouched."
    },
    {
      q: "Does this send my browsing data anywhere?",
      a: "Never. All processing happens locally. There are no servers, no analytics. You can verify this — the full source code is on GitHub."
    },
    {
      q: "How is it different from site blockers?",
      a: "Blockers fight you in real time. FocusSpace works before the impulse: it removes the triggers (tabs, history, autocomplete) that cause the distraction in the first place."
    }
  ]

  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionDecor />
        <h2 className="text-4xl font-bold text-white text-center mb-16 underline decoration-emerald-500/30">Questions worth asking.</h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="border-b border-white/5 last:border-0 pb-4">
              <button 
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center py-4 text-left group"
              >
                <span className={`text-lg font-semibold transition-colors ${open === i ? 'text-white' : 'text-white/60 group-hover:text-white'}`}>{f.q}</span>
                <span className={`text-2xl transition-transform ${open === i ? 'rotate-45 text-blue-400' : 'text-white/20'}`}>+</span>
              </button>
              {open === i && <p className="text-white/50 text-base leading-relaxed animate-slide-down pb-4">{f.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Footer & Copyright ─────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-night pt-24 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <img src="/icons/cubo1.svg" alt="" className="w-8 h-8" />
            <span className="text-white font-bold text-2xl tracking-tighter">FocusSpace</span>
          </div>
          <p className="text-white/40 max-w-sm mb-8 leading-relaxed">
            The open-source browser extension that protects your attention. 
            Built for deep work, private by architecture.
          </p>
          <div className="flex gap-4">
             <a href="https://github.com/joseorono/focus-space" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
               <IconGitHub />
             </a>
             <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
               <PlugConnectedIcon className="w-5 h-5 text-emerald-400" />
             </div>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Resources</h4>
          <ul className="space-y-4 text-white/50 text-sm">
            <li><a href="https://github.com/joseorono/focus-space" className="hover:text-white transition-colors">Documentation</a></li>
            <li><a href="https://github.com/joseorono/focus-space/issues" className="hover:text-white transition-colors">Report an issue</a></li>
            <li><a href="https://github.com/joseorono/focus-space" className="hover:text-white transition-colors">Contribute</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Legal</h4>
          <ul className="space-y-4 text-white/50 text-sm">
            <li><span className="hover:text-white transition-colors">MIT License</span></li>
            <li><span className="hover:text-white transition-colors">Privacy Policy</span></li>
            <li><span className="hover:text-white transition-colors">Open Source</span></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
        <p>© {new Date().getFullYear()} All rights reserved.</p>
        <div className="flex gap-6">
          <a href="https://exologic.agency/" target="_blank" className="hover:text-white transition-colors">Exologic Agency</a>
          <a href="https://elacreativa.vercel.app/" target="_blank" className="hover:text-white transition-colors">La Creativa</a>
        </div>
      </div>
    </footer>
  )
}

// ── Main Page Component ────────────────────────────────────────────────────

export default function LandingPageGemini() {
  return (
    <div className="bg-night min-h-screen text-white selection:bg-blue-500/30">
      <ReadingProgressBar />
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Features />
        <HowItWorksSlider />
        <FAQ />
        
        {/* Final CTA Section */}
        <section className="py-24 px-6 text-center">
          <div className="max-w-4xl mx-auto p-12 md:p-24 rounded-[4rem] bg-gradient-to-br from-blue-600 to-emerald-600 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
               <img src="/icons/lineas.svg" alt="" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight relative">
              Stop fighting your browser. <br />
              Start owning your focus.
            </h2>
            <p className="text-white/80 text-lg mb-12 max-w-xl mx-auto relative">
              Zero cost. Zero tracking. Zero lock-in. <br />
              Install FocusSpace today and reclaim your mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative">
              <a href="https://chromewebstore.google.com/search/FocusSpace" className="bg-white text-night px-10 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-transform">
                Install Free Forever
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
