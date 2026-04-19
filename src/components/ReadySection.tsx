export function ReadySection() {
  return (
    <section id="install" className="relative px-4 py-24 md:py-32">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-primary/15 blur-[100px]"
        aria-hidden="true"
      />

      {/* Decorative persona */}
      <img
        src="/icons/persona.svg"
        alt=""
        width={180}
        height={174}
        className="pointer-events-none absolute right-8 top-1/2 hidden -translate-y-1/2 opacity-[0.08] select-none lg:block"
        aria-hidden="true"
        loading="lazy"
        decoding="async"
      />

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
          Ready to Reclaim Your Focus?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-anti-flash-muted">
          Join thousands of professionals who&rsquo;ve transformed their
          productivity with FocusSpace.
        </p>
        <div className="mt-10">
          <a
            href="https://chromewebstore.google.com/search/FocusSpace"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-10 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Install Free Now
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  )
}
