export function QuoteSection() {
  return (
    <section className="relative px-6 py-20 sm:py-24 overflow-hidden">
      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        {/* Decorative quotation mark - Color suavizado */}
        <svg
          className="mb-8 h-14 w-14 text-white/20 animate-fade-up"
          viewBox="0 0 32 32"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
        </svg>

        <blockquote className="space-y-4 animate-fade-up" style={{ animationDelay: '150ms' }}>
          <p className="text-2xl font-serif italic leading-snug text-white md:text-4xl tracking-tight">
            &ldquo;I built this because I needed it. <br /> I&rsquo;m shipping it because
            maybe you do too.&rdquo;
          </p>
        </blockquote>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:text-left animate-fade-up" style={{ animationDelay: '300ms' }}>
          {/* Avatar con efecto de borde suave */}
          <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-white/10 backdrop-blur-sm shadow-lg">
            <img
              src="/icons/persona.svg"
              alt="Jose Orono"
              width={40}
              height={40}
              className="object-cover"
              loading="lazy"
            />
          </div>
          
          <div className="flex flex-col">
            <span className="text-lg font-bold text-white leading-none">Jose Orono</span>
            <span className="mt-1 text-sm font-medium text-green-100/80">
              Maker & Maintainer, <span className="text-white">FocusSpace</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}