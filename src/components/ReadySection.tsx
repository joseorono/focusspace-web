export function ReadySection() {
  return (
    <section
      id="install"
      className="px-6 py-24 text-center md:py-32"
      aria-labelledby="ready-heading"
    >
      <div className="mx-auto max-w-2xl">
        <h2
          id="ready-heading"
          className="text-3xl font-bold tracking-tight text-ink-inverse sm:text-4xl md:text-5xl"
        >
          Ready to Reclaim Your Focus?
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-center text-base leading-relaxed text-ink-inverse-muted">
          Join thousands of professionals who've transformed their productivity with FocusSpace.
        </p>
        <a
          href="#install"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-10 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          Install Free Now
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </section>
  )
}
