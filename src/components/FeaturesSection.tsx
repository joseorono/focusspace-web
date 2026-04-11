const features = [
  {
    id: 'block',
    title: 'Smart Site Blocking',
    description:
      'Block social media, news, or any distracting URL with one click. Schedule blocks around your peak hours.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
      </svg>
    ),
  },
  {
    id: 'sessions',
    title: 'Focus Sessions',
    description:
      'Run Pomodoro-style work intervals with automatic break reminders to maintain your flow without burnout.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    id: 'stats',
    title: 'Productivity Analytics',
    description:
      'Visualize your focused time, blocked attempts, and streaks so you always know where your attention goes.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <rect x="18" y="3" width="4" height="18" rx="1" />
        <rect x="10" y="8" width="4" height="13" rx="1" />
        <rect x="2" y="13" width="4" height="8" rx="1" />
      </svg>
    ),
  },
  {
    id: 'modes',
    title: 'Custom Work Modes',
    description:
      'Switch between Work, Study, and Deep Focus profiles — each with tailored blocklists and session lengths.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="px-6 py-20 md:py-28" aria-labelledby="features-heading">
      <div className="mx-auto max-w-5xl">

        <div className="mb-14 text-center">
          <h2
            id="features-heading"
            className="text-3xl font-bold tracking-tight text-ink-inverse sm:text-4xl"
          >
            Everything you need to stay in flow
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-ink-inverse-muted">
            FocusSpace packs a powerful focus toolkit into a lightweight browser extension.
          </p>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2">
          {features.map((f) => (
            <li
              key={f.id}
              className="rounded-2xl border border-primary-light/10 bg-card p-7 transition-colors hover:border-primary-light/25"
            >
              <div className="mb-4 inline-flex rounded-xl border border-primary-light/15 bg-primary/10 p-3 text-primary-light">
                {f.icon}
              </div>
              <h3 className="mb-2 text-base font-semibold text-ink-inverse">{f.title}</h3>
              <p className="text-sm leading-relaxed text-ink-inverse-muted">{f.description}</p>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}
