export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden  px-6 py-28 text-center md:py-40">

      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 flex items-start justify-center pt-16"
      >
        <div className="h-80 w-175 rounded-full bg-primary/20 blur-[120px]" />
      </div>

      <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight tracking-tight text-ink-inverse sm:text-5xl md:text-6xl">
        Block Distractions<br />
        <span className="bg-linear-to-r from-primary-light to-lilac bg-clip-text text-transparent">
          Build Deep Focus
        </span>
      </h1>

      <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-inverse-muted sm:text-lg">
        FocusSpace helps you reclaim your attention <br/>block time-wasting sites, run structured focus sessions, and track your productivity right from your browser.
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
    </section>
  )
}
