export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden px-4 pb-16 pt-24 text-center sm:px-6 md:py-28">

      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 flex items-start justify-center pt-16"
      >
        <div className="h-80 w-175 rounded-full bg-primary/20 blur-[120px]" />
      </div>

      <h1 className="mx-auto max-w-3xl text-3xl font-bold leading-tight tracking-tight text-ink-inverse sm:text-4xl md:text-5xl lg:text-6xl">
        Your browser remembers every distraction.{' '}
        <span className="bg-linear-to-r from-primary-light to-lilac bg-clip-text text-transparent">
          FocusSpace forgets them for you.
        </span>
      </h1>

      <p className="mx-auto mt-6  text-center text-base leading-relaxed text-ink-inverse-muted sm:text-lg">
        One click clears the noise — distracting tabs, tempting history, and the trail of "just one more scroll." Pomodoro timer included. 100% local. 100% free.
      </p>

      <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
        <a
          href="#install"
          className="rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          Install Free Now →
        </a>
        <a
          href="#how-it-works"
          className="rounded-full border border-white/10 px-8 py-3 text-sm font-semibold text-ink-inverse-muted transition-colors hover:border-white/20 hover:text-ink-inverse"
        >
          See How It Works
        </a>
      </div>

      {/* Trust Bar */}
      <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-ink-inverse-muted sm:gap-6">
        <div className="flex items-center gap-1.5">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-primary-light" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
          Open Source
        </div>
        <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" aria-hidden="true" />
        <div className="flex items-center gap-1.5">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-primary-light" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
          Private by Design
        </div>
        <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" aria-hidden="true" />
        <div className="flex items-center gap-1.5">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-primary-light" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
          Lightweight
        </div>
      </div>
    </section>
  )
}
