import {
  HiNoSymbol,
  HiClock,
  HiChartBar,
  HiAdjustmentsHorizontal,
  HiShieldCheck,
  HiBell,
} from 'react-icons/hi2'

const features = [
  {
    id: 'block',
    title: 'Smart Site Blocking',
    description:
      'Block social media, news, or any distracting URL with one click. Schedule blocks around your peak hours.',
    icon: <HiNoSymbol className="h-6 w-6" aria-hidden="true" />,
  },
  {
    id: 'sessions',
    title: 'Focus Sessions',
    description:
      'Run Pomodoro-style work intervals with automatic break reminders to maintain your flow without burnout.',
    icon: <HiClock className="h-6 w-6" aria-hidden="true" />,
  },
  {
    id: 'stats',
    title: 'Productivity Analytics',
    description:
      'Visualize your focused time, blocked attempts, and streaks so you always know where your attention goes.',
    icon: <HiChartBar className="h-6 w-6" aria-hidden="true" />,
  },
  {
    id: 'modes',
    title: 'Custom Work Modes',
    description:
      'Switch between Work, Study, and Deep Focus profiles — each with tailored blocklists and session lengths.',
    icon: <HiAdjustmentsHorizontal className="h-6 w-6" aria-hidden="true" />,
  },
  {
    id: 'whitelist',
    title: 'Whitelist & Allowlist',
    description:
      'Always allow the tools you need. Whitelist specific sites so your workflow never gets interrupted by your own rules.',
    icon: <HiShieldCheck className="h-6 w-6" aria-hidden="true" />,
  },
  {
    id: 'reminders',
    title: 'Smart Reminders',
    description:
      'Get gentle browser notifications when you drift off task, your session ends, or it\'s time to take a break.',
    icon: <HiBell className="h-6 w-6" aria-hidden="true" />,
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="px-6 py-20 text-center md:py-28" aria-labelledby="features-heading">
      <div className="mx-auto max-w-5xl">

        <div className="mb-14">
          <h2
            id="features-heading"
            className="text-3xl font-bold tracking-tight text-ink-inverse sm:text-4xl"
          >
            Everything you need to stay in flow
          </h2>
          <p className="mx-auto max-w-xl text-center text-ink-inverse-muted">
            FocusSpace packs a powerful focus toolkit into a lightweight browser extension
          </p>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
