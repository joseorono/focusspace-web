export function QuoteSection() {
  return (
    <section className="relative px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        {/* Decorative quotation mark */}
        <svg
          className="mb-6 h-12 w-12 text-primary/50"
          viewBox="0 0 32 32"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
        </svg>

        <blockquote>
          <p className="text-xl font-serif italic leading-relaxed text-white md:text-2xl">
            I built this because I needed it. I&rsquo;m shipping it because
            maybe you do too.
          </p>
        </blockquote>

        <div className="mt-8 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-primary-light/20 bg-primary/10">
            <img
              src="/icons/persona.svg"
              alt=""
              width={32}
              height={32}
              className="opacity-80"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="text-left">
            <p className="text-sm font-semibold text-white">Jose Orono</p>
            <p className="text-xs text-anti-flash-muted">
              Maker &amp; Maintainer, FocusSpace
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
