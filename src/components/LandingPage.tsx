import { useState, useEffect } from 'react'

// ── Inline SVG icons ──────────────────────────────────────────────────────

function IconZap({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  )
}

function IconEraser({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M20 20H7L3 16l13-13 7 7-3 10z" /><path d="M6.5 17.5l3-3" />
    </svg>
  )
}

function IconTarget({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
    </svg>
  )
}

function IconShield({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

function IconSettings({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  )
}

function IconGitHub({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function IconChevronDown({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

function IconCheck({ className = 'w-3.5 h-3.5' }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function IconArrowRight({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

function IconExternalLink({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><path d="M15 3h6v6" /><path d="M10 14L21 3" />
    </svg>
  )
}

// ── Decorative icon above section headings ────────────────────────────────

function SectionDecor({ color = 'text-primary-light' }: { color?: string }) {
  return (
    <svg width="58" height="22" viewBox="0 0 58 22" fill="none" className={`${color} mb-4`} aria-hidden="true">
      <path d="M2 16 L7 7 L12 13 L18 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M23 11 L56 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.45" />
    </svg>
  )
}

// ── Reading progress bar ───────────────────────────────────────────────────

function ReadingProgressBar() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? Math.min((window.scrollY / total) * 100, 100) : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <div
      role="progressbar"
      aria-label="Reading progress"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      className="fixed top-0 left-0 z-70 h-[3px] bg-emerald-400 transition-[width] duration-100 ease-linear"
      style={{ width: `${progress}%` }}
    />
  )
}

// ── Navbar ─────────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-night/95 backdrop-blur-md border-b border-primary-light/10 shadow-lg shadow-black/40'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2.5 group" aria-label="FocusSpace home">
          <img
            src="/icons/cubo1.svg"
            alt="FocusSpace logo"
            width={30}
            height={30}
            fetchPriority="high"
            decoding="async"
            className="transition-transform duration-200 group-hover:scale-110"
          />
          <span className="text-white font-bold text-lg leading-none">FocusSpace</span>
        </a>
        <nav aria-label="Main navigation" className="flex items-center gap-4">
          <a
            href="https://github.com/joseorono/focus-space"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 text-sm text-anti-flash-muted hover:text-white transition-colors duration-200"
          >
            <IconGitHub className="w-4 h-4" />
            GitHub
          </a>
          <a
            href="https://chromewebstore.google.com/search/FocusSpace"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1976d2] hover:bg-primary-dark text-white text-sm font-semibold transition-colors duration-200 shadow-md shadow-primary/30"
          >
            Add to Chrome
          </a>
        </nav>
      </div>
    </header>
  )
}

// ── Extension popup mockup ─────────────────────────────────────────────────

function ExtensionMockup() {
  return (
    <div className="relative mx-auto w-72 shrink-0">
      <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl" aria-hidden="true" />
      <div className="relative rounded-2xl border border-primary-light/20 bg-card p-4 shadow-2xl shadow-black/60">
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-primary-light/10">
          <img src="/icons/cubo1.svg" alt="" width={18} height={18} aria-hidden="true" />
          <span className="text-white text-sm font-semibold flex-1">FocusSpace</span>
          <span className="text-[10px] text-emerald-400 font-medium px-2 py-0.5 bg-emerald-400/10 rounded-full border border-emerald-400/20">● Active</span>
        </div>
        <div className="mb-3 p-3 rounded-lg bg-primary/8 border border-[#1976d2]/15">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-primary-light"><IconZap className="w-3.5 h-3.5" /></span>
            <span className="text-white text-xs font-semibold">Session Cleaner</span>
          </div>
          <div className="h-6 rounded bg-primary/20 border border-[#1976d2]/30 flex items-center px-2">
            <span className="text-primary-light text-[10px] font-medium">Clean Now →</span>
          </div>
        </div>
        <div className="mb-3 p-3 rounded-lg bg-[#8b5cf6]/8 border border-[#8b5cf6]/15">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-secondary-light"><IconEraser className="w-3.5 h-3.5" /></span>
            <span className="text-white text-xs font-semibold">Browser Cleaner</span>
          </div>
          <div className="h-6 rounded bg-[#8b5cf6]/20 border border-[#8b5cf6]/30 flex items-center px-2">
            <span className="text-secondary-light text-[10px] font-medium">Wipe History →</span>
          </div>
        </div>
        <div className="p-3 rounded-lg bg-night border border-primary-light/10">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-primary-light"><IconTarget className="w-3.5 h-3.5" /></span>
            <span className="text-white text-xs font-semibold">Focus Mode</span>
          </div>
          <div className="text-center">
            <div className="font-mono text-2xl text-white font-bold tracking-widest mb-1.5">25:00</div>
            <div className="h-5 rounded-md bg-primary/20 border border-[#1976d2]/30 flex items-center justify-center">
              <span className="text-primary-light text-[10px] font-medium">▶ Start Focus Session</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Hero section ───────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative pt-36 pb-24 px-6 overflow-hidden" aria-labelledby="hero-heading">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[700px] w-[900px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-60 right-0 h-[400px] w-[400px] rounded-full bg-[#8b5cf6]/8 blur-3xl" />
        <img src="/icons/lineas.svg" alt="" width={200} height={200} className="absolute top-24 right-8 opacity-[0.04] rotate-12 select-none" />
        <img src="/icons/circulo.svg" alt="" width={160} height={160} className="absolute bottom-12 left-8 opacity-[0.04] -rotate-12 select-none" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-primary-light/25 bg-primary/10 text-primary-light text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
          Open Source · MIT Licensed · No Accounts Required
        </div>

        <h1
          id="hero-heading"
          className="font-bold text-white leading-[1.1] tracking-tight mb-6"
          style={{ fontSize: 'clamp(2rem, 5.5vw, 3.75rem)' }}
        >
          Your browser remembers every distraction.
          <br />
          <span className="text-primary-light">FocusSpace forgets them</span> for you.
        </h1>

        <p className="text-lg text-anti-flash-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          One click clears the noise — distracting tabs, tempting history, and the trail of
          "just one more scroll." Pomodoro timer included.{' '}
          <strong className="text-white font-medium">100% local. 100% free. 100% yours.</strong>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
          <a
            href="https://chromewebstore.google.com/search/FocusSpace"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#1976d2] hover:bg-primary-dark text-white font-semibold text-base transition-all duration-200 shadow-lg shadow-primary/40 hover:shadow-primary-dark/50 hover:-translate-y-0.5"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current shrink-0" aria-hidden="true">
              <path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29zm13.342 2.166a5.446 5.446 0 0 1 1.45 7.09l.002.001h-.002l-5.344 9.257c.206.01.413.016.621.016 6.627 0 12-5.373 12-12 0-1.54-.29-3.011-.818-4.364z" />
            </svg>
            Add to Chrome — It's Free
          </a>
          <a
            href="https://github.com/joseorono/focus-space"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl border border-primary-light/25 bg-primary-light/5 hover:bg-primary-light/10 text-white font-semibold text-base transition-all duration-200 hover:-translate-y-0.5"
          >
            <IconGitHub className="w-5 h-5" />
            View on GitHub ⭐
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-anti-flash-muted">
          {['Open Source', 'MIT Licensed', 'No Tracking', 'No Accounts', 'No Cloud'].map(item => (
            <span key={item} className="flex items-center gap-1.5">
              <IconCheck className="text-emerald-400" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Problem section ────────────────────────────────────────────────────────

function ProblemSection() {
  const painPoints = [
    'Your browser autocompletes "y" into YouTube before you finish thinking.',
    'Twenty open tabs scream for attention every time you switch windows.',
    '"New Tab" shows you the exact sites that cost you yesterday\'s afternoon.',
    'Every extension that promises focus wants your email, data, or a subscription.',
  ]
  return (
    <section className="px-6 py-20 border-t border-primary-light/8" aria-labelledby="problem-heading">
      <div className="mx-auto max-w-4xl">
        <div className="max-w-2xl">
          <SectionDecor color="text-primary-light" />
          <h2 id="problem-heading" className="font-bold text-white text-3xl md:text-4xl leading-tight mb-4">
            You sat down to work. Two hours later, you're watching a video essay about medieval bread.
          </h2>
          <p className="text-anti-flash-muted text-lg leading-relaxed mb-6">
            You opened a new tab to "quickly check something." Autocomplete finished the word for you. Before your brain caught up, you were three scrolls deep into a feed you didn't mean to open.
          </p>
          <p className="text-white font-medium text-lg mb-6">
            It's not a willpower problem. It's a{' '}
            <span className="text-primary-light">friction problem.</span>
          </p>
          <ul className="space-y-3 mb-6" role="list">
            {painPoints.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-anti-flash-muted">
                <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full border border-red-500/40 bg-red-500/10 flex items-center justify-center" aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="w-3 h-3 text-red-400" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
                </span>
                {point}
              </li>
            ))}
          </ul>
          <p className="text-anti-flash-muted italic text-base border-l-2 border-primary-light/30 pl-4">
            The tools built to help you focus have become another thing to manage.
          </p>
        </div>
      </div>
    </section>
  )
}

// ── Features section ───────────────────────────────────────────────────────

type FeatureDef = {
  icon: React.ReactNode
  accent: string
  accentRgb: string
  title: string
  subtitle: string
  description: string
}

const FEATURES: FeatureDef[] = [
  {
    icon: <IconZap />,
    accent: '#60a5fa',
    accentRgb: '96,165,250',
    title: 'Session Cleaner',
    subtitle: 'Nuke distractions in one click',
    description: 'One button closes every tab matching a distraction category — gaming, social, NSFW, entertainment, shopping, whatever you define. Keep your whitelisted workspaces. Lose the noise.',
  },
  {
    icon: <IconEraser />,
    accent: '#a78bfa',
    accentRgb: '167,139,250',
    title: 'Browser Cleaner',
    subtitle: 'Surgical history wipe',
    description: 'Why delete your entire history just to forget YouTube exists? FocusSpace removes history by category — your work research survives and the temptations don\'t. Your autocomplete stops betraying you.',
  },
  {
    icon: <IconTarget />,
    accent: '#34d399',
    accentRgb: '52,211,153',
    title: 'Focus Mode',
    subtitle: 'Pomodoro that knows what you\'re doing',
    description: 'A built-in 25/5 Pomodoro timer wired into a task list, session tracking, and real-time notifications if a distracting tab sneaks open mid-session. Not another app — just a tab away.',
  },
  {
    icon: <IconShield />,
    accent: '#fb923c',
    accentRgb: '251,146,60',
    title: 'Privacy by Architecture',
    subtitle: 'Not by promise',
    description: 'Every byte of processing happens locally. No servers. No analytics. No accounts. No telemetry. The source is open — read it yourself. We couldn\'t spy on you if we wanted to.',
  },
  {
    icon: <IconSettings />,
    accent: '#e879f9',
    accentRgb: '232,121,249',
    title: 'Smart Categories',
    subtitle: 'Configurable to your reality',
    description: '8 ready-made distraction categories (NSFW, Gaming, Social, Dating, Entertainment, Health, Shopping, Travel). Add custom keywords. Whitelist domains that are work for you. FocusSpace respects that.',
  },
]

function FeaturesSection() {
  return (
    <section className="px-6 py-20 border-t border-primary-light/8 bg-card/25" aria-labelledby="features-heading">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <SectionDecor color="text-secondary-light" />
          <h2 id="features-heading" className="font-bold text-white text-3xl md:text-4xl leading-tight mb-3">
            FocusSpace strips your browser back down to{' '}
            <span className="text-secondary-light">the thing you actually opened it to do.</span>
          </h2>
          <p className="text-anti-flash-muted text-lg max-w-xl mx-auto">
            Instead of blocking sites and fighting your willpower in real time, FocusSpace removes the shortcuts that lead you there in the first place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="relative rounded-2xl border p-6 pt-9 transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl"
              style={{
                background: `rgba(${f.accentRgb}, 0.06)`,
                borderColor: `rgba(${f.accentRgb}, 0.18)`,
                boxShadow: 'none',
              }}
            >
              {/* Corner icon — top-right, overlapping card border */}
              <div
                className="absolute -top-4 -right-4 rounded-xl p-2.5 border"
                style={{
                  background: `rgba(${f.accentRgb}, 0.14)`,
                  borderColor: `rgba(${f.accentRgb}, 0.35)`,
                }}
                aria-hidden="true"
              >
                <span style={{ color: f.accent, display: 'flex' }}>{f.icon}</span>
              </div>

              {/* Main feature icon */}
              <div className="mb-4" style={{ color: f.accent }}>{f.icon}</div>
              <h3 className="text-white font-bold text-lg leading-tight mb-1">{f.title}</h3>
              <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: f.accent }}>{f.subtitle}</p>
              <p className="text-anti-flash-muted text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── How It Works — slider layout ───────────────────────────────────────────

const STEPS = [
  {
    num: '01',
    title: 'Install in 10 seconds',
    body: 'Add to Chrome. Pin the icon. That\'s it. No sign-up, no onboarding funnel, no credit card, no "verify your email." Just a clean runway.',
  },
  {
    num: '02',
    title: 'Pick your distraction categories',
    body: 'Check the boxes for what pulls you off task. Add your own keywords. Whitelist the domains you need. Setup takes under a minute and you only do it once.',
  },
  {
    num: '03',
    title: 'Hit Clean. Start timer. Do the work.',
    body: 'One click closes distracting tabs. One click wipes the history categories you chose. One click starts your focus session. Your browser becomes a tool again.',
  },
]

function HowItWorksSection() {
  const [active, setActive] = useState(0)
  return (
    <section className="px-6 py-20 border-t border-primary-light/8" aria-labelledby="how-heading">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <SectionDecor color="text-[#34d399]" />
          <h2 id="how-heading" className="font-bold text-white text-3xl md:text-4xl leading-tight mb-3">
            Three steps to a{' '}
            <span className="text-[#34d399]">distraction-free browser</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: step tabs — slider list from reference */}
          <div className="space-y-2">
            {STEPS.map((step, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-full text-left px-5 py-5 rounded-xl border transition-all duration-200 ${
                  active === i
                    ? 'border-primary-light/35 bg-primary/10'
                    : 'border-transparent bg-transparent hover:border-primary-light/15 hover:bg-primary-light/5'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`shrink-0 w-1 self-stretch rounded-full transition-colors duration-200 ${
                      active === i ? 'bg-primary-light' : 'bg-primary-light/15'
                    }`}
                    aria-hidden="true"
                  />
                  <div className="min-w-0">
                    <div className={`font-mono text-xs font-bold mb-1 transition-colors duration-200 ${active === i ? 'text-primary-light' : 'text-anti-flash-muted/60'}`}>
                      STEP {step.num}
                    </div>
                    <div className={`font-semibold text-base leading-snug transition-colors duration-200 ${active === i ? 'text-white' : 'text-anti-flash-muted'}`}>
                      {step.title}
                    </div>
                    {active === i && (
                      <p className="text-anti-flash-muted text-sm leading-relaxed mt-2">{step.body}</p>
                    )}
                  </div>
                </div>
              </button>
            ))}

            <div className="pt-4 pl-5">
              <a
                href="https://chromewebstore.google.com/search/FocusSpace"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary-light hover:text-white font-semibold transition-colors duration-200"
              >
                Start focusing now
                <IconArrowRight />
              </a>
            </div>
          </div>

          {/* Right: extension mockup visual */}
          <div className="flex justify-center">
            <ExtensionMockup />
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Categories grid ────────────────────────────────────────────────────────

const CATEGORIES = [
  { emoji: '🔞', label: 'NSFW' },
  { emoji: '🎮', label: 'Gaming' },
  { emoji: '📱', label: 'Social Media' },
  { emoji: '💘', label: 'Dating' },
  { emoji: '🎬', label: 'Entertainment' },
  { emoji: '🛍️', label: 'Shopping' },
  { emoji: '✈️', label: 'Travel' },
  { emoji: '❤️', label: 'Health' },
]

function CategoriesSection() {
  return (
    <section className="px-6 py-20 border-t border-primary-light/8 bg-card/25" aria-labelledby="categories-heading">
      <div className="mx-auto max-w-4xl text-center">
        <SectionDecor color="text-[#fb923c]" />
        <h2 id="categories-heading" className="font-bold text-white text-3xl md:text-4xl leading-tight mb-3">
          You know your triggers.{' '}
          <span className="text-[#fb923c]">We make them easy to block.</span>
        </h2>
        <p className="text-anti-flash-muted text-lg mb-10 max-w-xl mx-auto">
          8 ready-made distraction categories, fully customizable. Add your own keywords and whitelist what you actually need for work.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {CATEGORIES.map(cat => (
            <div
              key={cat.label}
              className="flex items-center gap-3 px-4 py-3 rounded-xl border border-primary-light/12 bg-primary-light/5 hover:border-primary-light/25 hover:bg-primary-light/10 transition-all duration-200 cursor-default"
            >
              <span className="text-xl leading-none" aria-hidden="true">{cat.emoji}</span>
              <span className="text-white text-sm font-medium">{cat.label}</span>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-anti-flash-muted">
          Twitter is toxic for some, essential for others — FocusSpace respects that.
          <strong className="text-white"> Add any keyword. Whitelist any domain.</strong>
        </p>
      </div>
    </section>
  )
}

// ── Quote / social proof section ───────────────────────────────────────────

function QuoteSection() {
  return (
    <section className="px-6 py-20 border-t border-primary-light/8" aria-label="Maker quote and trust signals">
      <div className="mx-auto max-w-3xl text-center">
        <svg viewBox="0 0 48 40" className="w-10 h-9 text-[#1976d2]/50 mx-auto mb-6" fill="currentColor" aria-hidden="true">
          <path d="M0 40V24C0 15.16 5.827 8.013 17.48 2.56L21.12 8.64C16.107 11.2 13.6 14.507 13.6 18.56v3.44H22V40H0zm26 0V24c0-8.84 5.827-15.987 17.48-21.44L47.12 8.64c-5.013 2.56-7.52 5.867-7.52 9.92v3.44H48V40H26z" />
        </svg>
        <blockquote>
          <p className="text-white text-xl md:text-2xl font-serif italic leading-relaxed mb-8">
            "I built this because I needed it. I'm shipping it because maybe you do too."
          </p>
          <footer className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary-light/30 flex items-center justify-center shrink-0" aria-hidden="true">
              <img src="/icons/persona.svg" alt="" width={20} height={20} />
            </div>
            <div className="text-left">
              <p className="text-white font-semibold text-sm">Jose Orono</p>
              <p className="text-anti-flash-muted text-xs">Maker & Maintainer, FocusSpace</p>
            </div>
          </footer>
        </blockquote>

        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {[
            { label: 'Open Source', icon: '🔓' },
            { label: 'Built with Plasmo + React', icon: '⚛️' },
            { label: 'MIT Licensed — fork it freely', icon: '🏷️' },
            { label: 'No data leaves your browser', icon: '🔒' },
          ].map(s => (
            <span key={s.label} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-primary-light/15 bg-primary-light/5 text-sm text-anti-flash-muted">
              <span aria-hidden="true">{s.icon}</span>
              {s.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── FAQ ────────────────────────────────────────────────────────────────────

const FAQS = [
  {
    q: 'Is it really free? What\'s the catch?',
    a: 'No catch. FocusSpace is open source under MIT. No paid tier, no "pro" unlock, no upsell. If you want to support it, star the repo or contribute.',
  },
  {
    q: 'Will it delete my actual work history?',
    a: 'No. FocusSpace only removes entries matching the categories you enable. Your research tabs, docs, and work sites stay untouched. You can also whitelist any domain to protect it explicitly.',
  },
  {
    q: 'Does this send my browsing data anywhere?',
    a: 'Never. All processing happens locally. There are no servers, no analytics, no external API calls. You can verify this — the full source code is on GitHub.',
  },
  {
    q: 'How is this different from blockers like StayFocusd or Cold Turkey?',
    a: 'Blockers fight you in real time — they depend on your willpower to not bypass them. FocusSpace works before the impulse: it removes the triggers (tabs, history, autocomplete) that cause the distraction. Pair them if you want.',
  },
  {
    q: 'Does it work on Edge / Brave / Arc?',
    a: 'Yes — it targets all Chromium browsers via Manifest V3. Firefox support is on the roadmap. Contributions welcome.',
  },
  {
    q: 'Can I contribute?',
    a: 'Absolutely. Issues, PRs, and feature ideas are welcome on GitHub. This is built in public.',
  },
]

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  return (
    <section className="px-6 py-20 border-t border-primary-light/8 bg-card/25" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <SectionDecor color="text-secondary-light" />
          <h2 id="faq-heading" className="font-bold text-white text-3xl md:text-4xl leading-tight mb-3">
            Questions worth asking{' '}
            <span className="text-secondary-light">before you install</span>
          </h2>
          <p className="text-anti-flash-muted">This audience is skeptical of productivity tools. Good — here are the honest answers.</p>
        </div>
        <dl className="space-y-2">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className={`rounded-xl border transition-colors duration-200 ${
                openIndex === i
                  ? 'border-primary-light/25 bg-primary/8'
                  : 'border-primary-light/10 bg-primary-light/3'
              }`}
            >
              <dt>
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={openIndex === i}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span className={`font-semibold text-sm leading-snug transition-colors duration-200 ${openIndex === i ? 'text-white' : 'text-anti-flash-muted'}`}>
                    {faq.q}
                  </span>
                  <span
                    className={`shrink-0 text-primary-light transition-transform duration-200 ${openIndex === i ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  >
                    <IconChevronDown />
                  </span>
                </button>
              </dt>
              {openIndex === i && (
                <dd id={`faq-answer-${i}`} className="px-5 pb-4 text-anti-flash-muted text-sm leading-relaxed border-t border-primary-light/10 pt-3">
                  {faq.a}
                </dd>
              )}
            </div>
          ))}
        </dl>

        <p className="mt-8 text-center text-sm text-anti-flash-muted">
          Found a bug? Report it on{' '}
          <a
            href="https://github.com/joseorono/focus-space/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-light hover:text-white transition-colors duration-150"
          >
            GitHub Issues
          </a>
          .
        </p>
      </div>
    </section>
  )
}

// ── Final CTA section ──────────────────────────────────────────────────────

function FinalCTASection() {
  return (
    <section className="px-6 py-24 border-t border-primary-light/8" aria-labelledby="cta-heading">
      <div className="relative mx-auto max-w-3xl text-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-primary/8 blur-3xl" />
        </div>
        <div className="relative">
          <SectionDecor color="text-primary-light" />
          <h2 id="cta-heading" className="font-bold text-white text-3xl md:text-4xl leading-tight mb-4">
            The next time you open your browser,
            <br />
            <span className="text-primary-light">it doesn't have to open a can of worms.</span>
          </h2>
          <p className="text-anti-flash-muted text-lg leading-relaxed max-w-xl mx-auto mb-4">
            The install takes 10 seconds. The setup takes 60. And the first time you click{' '}
            <strong className="text-white">Clean</strong> and watch 30 tabs of temptation disappear at once, you'll wonder why browsers don't ship this by default.
          </p>
          <p className="text-anti-flash-muted font-medium mb-10">
            Zero cost. Zero tracking. Zero lock-in. Uninstall any time — there's nothing to cancel.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://chromewebstore.google.com/search/FocusSpace"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#1976d2] hover:bg-primary-dark text-white font-bold text-base transition-all duration-200 shadow-lg shadow-primary/40 hover:shadow-primary-dark/50 hover:-translate-y-0.5"
            >
              Install FocusSpace — Free Forever
              <IconArrowRight />
            </a>
            <a
              href="https://github.com/joseorono/focus-space"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl border border-primary-light/25 bg-primary-light/5 hover:bg-primary-light/10 text-white font-semibold text-base transition-all duration-200 hover:-translate-y-0.5"
            >
              <IconGitHub className="w-5 h-5" />
              ⭐ Star on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Footer ─────────────────────────────────────────────────────────────────

function Footer() {
  const columns = [
    {
      title: 'Product',
      links: [
        { label: 'Install for Chrome', href: 'https://chromewebstore.google.com/search/FocusSpace' },
        { label: 'GitHub Repository', href: 'https://github.com/joseorono/focus-space' },
        { label: 'Report an Issue', href: 'https://github.com/joseorono/focus-space/issues' },
        { label: 'Contribute', href: 'https://github.com/joseorono/focus-space' },
      ],
    },
    {
      title: 'Features',
      links: [
        { label: 'Session Cleaner', href: '#features' },
        { label: 'Browser Cleaner', href: '#features' },
        { label: 'Focus Mode', href: '#features' },
        { label: 'Privacy by Design', href: '#features' },
      ],
    },
    {
      title: 'Community',
      links: [
        { label: 'Open Source · MIT', href: 'https://github.com/joseorono/focus-space' },
        { label: 'Issues & Feedback', href: 'https://github.com/joseorono/focus-space/issues' },
        { label: 'Made by Exologic', href: 'https://exologic.agency/' },
        { label: 'La Creativa', href: 'https://elacreativa.vercel.app/' },
      ],
    },
  ]

  const socials = [
    { label: 'GitHub', href: 'https://github.com/joseorono/focus-space', icon: <IconGitHub className="w-4 h-4" /> },
    { label: 'Issues', href: 'https://github.com/joseorono/focus-space/issues', icon: <IconExternalLink className="w-4 h-4" /> },
  ]

  return (
    <footer className="border-t border-primary-light/8 bg-night">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Brand */}
          <div className="lg:w-52 shrink-0">
            <a href="#" className="inline-flex items-center gap-2.5 mb-4" aria-label="FocusSpace">
              <img src="/icons/cubo1.svg" alt="FocusSpace logo" width={26} height={26} loading="lazy" decoding="async" />
              <span className="text-white font-bold">FocusSpace</span>
            </a>
            <p className="text-anti-flash-muted text-sm leading-relaxed">
              The open-source browser extension that protects your attention. No tracking. No subscriptions. Just focus.
            </p>
          </div>

          {/* Nav columns + vertical icon stack */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 flex-1">
            {columns.map(col => (
              <div key={col.title}>
                <h3 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">{col.title}</h3>
                <ul className="space-y-2.5" role="list">
                  {col.links.map(link => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-anti-flash-muted hover:text-white text-sm transition-colors duration-150"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {/* Vertical icon stack */}
            <div>
              <h3 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">Connect</h3>
              <nav aria-label="Social links" className="flex flex-col gap-2.5">
                {socials.map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-full border border-primary-light/15 bg-primary-light/5 hover:border-primary-light/35 hover:bg-primary-light/12 flex items-center justify-center text-anti-flash-muted hover:text-white transition-all duration-200"
                  >
                    {s.icon}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ── Copyright bar ──────────────────────────────────────────────────────────

function CopyrightBar() {
  const year = new Date().getFullYear()
  return (
    <div className="border-t border-primary-light/8 bg-night px-6 py-4">
      <p className="mx-auto max-w-5xl text-center text-xs text-anti-flash-muted">
        © {year} All rights reserved · Built by{' '}
        <a
          href="https://exologic.agency/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-light hover:text-white transition-colors duration-150"
        >
          Exologic
        </a>
        {' '}·{' '}
        <a
          href="https://elacreativa.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-light hover:text-white transition-colors duration-150"
        >
          La Creativa
        </a>
      </p>
    </div>
  )
}

// ── Main export ────────────────────────────────────────────────────────────

export function LandingPage() {
  return (
    <div className="text-left font-sans">
      <ReadingProgressBar />
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <FeaturesSection />
        <HowItWorksSection />
        <CategoriesSection />
        <QuoteSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
      <CopyrightBar />
    </div>
  )
}
