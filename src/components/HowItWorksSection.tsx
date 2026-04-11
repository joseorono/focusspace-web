export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="border-t border-white/5 bg-night px-4 py-16 sm:px-6 md:py-28" aria-labelledby="how-it-works-heading">
      <div className="mx-auto max-w-4xl">
        
        <div className="mb-16 text-center">
          <h2
            id="how-it-works-heading"
            className="text-3xl font-bold tracking-tight text-ink-inverse sm:text-4xl"
          >
            How FocusSpace Works
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-base text-ink-inverse-muted">
            Three simple steps to build a distraction-free digital environment.
          </p>
        </div>

        <div className="relative mx-auto max-w-2xl">
          {/* Vertical line connecting steps */}
          <div className="absolute left-6 top-8 hidden h-[calc(100%-80px)] w-px bg-primary-light/20 sm:block" aria-hidden="true" />

          <ul className="space-y-12">
            
            {/* Step 1 */}
            <li className="relative flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
              <div className="mx-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary font-mono text-xl font-bold text-white shadow-lg shadow-primary/30 ring-8 ring-night sm:z-10 sm:mx-0">
                1
              </div>
              <div className="flex-1 rounded-2xl border border-white/5 bg-card p-6 sm:p-8">
                <h3 className="text-xl font-semibold text-ink-inverse">Set Your Boundaries</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-inverse-muted sm:text-base">
                  Define the keywords and categories (Social, News, Entertainment) that pull you off task. Add your own custom triggers and whitelist the domains you actually need for work. Setup takes under a minute, and you only do it once.
                </p>
              </div>
            </li>

            {/* Step 2 */}
            <li className="relative flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
              <div className="mx-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary font-mono text-xl font-bold text-white shadow-lg shadow-primary/30 ring-8 ring-night sm:z-10 sm:mx-0">
                2
              </div>
              <div className="flex-1 rounded-2xl border border-white/5 bg-card p-6 sm:p-8">
                <h3 className="text-xl font-semibold text-ink-inverse">Clean the Slate</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-inverse-muted sm:text-base">
                  Click the extension before starting your work. Use the Session Cleaner to instantly wipe out current distractions, or scrub your history of digital residue from your last break so your autocomplete stops betraying you.
                </p>
              </div>
            </li>

            {/* Step 3 */}
            <li className="relative flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
              <div className="mx-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary font-mono text-xl font-bold text-white shadow-lg shadow-primary/30 ring-8 ring-night sm:z-10 sm:mx-0">
                3
              </div>
              <div className="flex-1 rounded-2xl border border-white/5 bg-card p-6 sm:p-8">
                <h3 className="text-xl font-semibold text-ink-inverse">Enter the Zone</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-inverse-muted sm:text-base">
                  Start your built-in Pomodoro timer and tackle your ToDo list. FocusSpace guards your attention quietly in the background, only alerting you if you wander into distracting territory. Your browser becomes a tool again instead of a battleground.
                </p>
              </div>
            </li>

          </ul>
        </div>

      </div>
    </section>
  )
}
