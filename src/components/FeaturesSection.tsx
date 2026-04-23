import {
  HiNoSymbol,
  HiClock,
  HiChartBar,
  HiAdjustmentsHorizontal,
  HiShieldCheck,
  HiBell,
} from 'react-icons/hi2'
import type { IconType } from 'react-icons'

interface Feature {
  icon: IconType
  title: string
  description: string
}

const FEATURES: Feature[] = [
  {
    icon: HiNoSymbol,
    title: 'Smart Site Blocking',
    description:
      'Block social media, news, or any distracting URL with a single click. Customizable per-session or persistent.',
  },
  {
    icon: HiClock,
    title: 'Focus Sessions',
    description:
      'Run Pomodoro-style work intervals with configurable durations. Track your focused time effortlessly.',
  },
  {
    icon: HiChartBar,
    title: 'Productivity Analytics',
    description:
      'Visualize your focused time, blocked attempts, and productivity trends over days and weeks.',
  },
  {
    icon: HiAdjustmentsHorizontal,
    title: 'Custom Work Modes',
    description:
      'Switch between Work, Study, Deep Focus, or your own custom modes. Each with its own block list.',
  },
  {
    icon: HiShieldCheck,
    title: 'Whitelist & Allowlist',
    description:
      'Always allow the tools you need — docs, repos, calendars — even during the strictest focus sessions.',
  },
  {
    icon: HiBell,
    title: 'Smart Reminders',
    description:
      'Get gentle browser notifications when your session ends, when you break streak, or at scheduled intervals.',
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="relative px-4 py-10 sm:px-6">
      <div
        className="pointer-events-none absolute inset-x-0 -top-20 z-20 h-20"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(to top, rgba(3, 14, 24, 0.98) 0%, rgba(3, 14, 24, 0.72) 38%, rgba(3, 14, 24, 0) 100%)',
          boxShadow: '0 -18px 36px rgba(3, 14, 24, 0.45)',
        }}
      />

      <div className="mx-auto max-w-5xl">
        {/* Decorative */}
        <img
          src="/icons/cubo2.svg"
          alt=""
          width={160}
          height={160}
          className="pointer-events-none absolute right-8 top-12 hidden opacity-[0.07] select-none md:block"
          aria-hidden="true"
          loading="lazy"
          decoding="async"
        />

        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Everything you need to stay in flow
          </h2>
          <p className="mx-auto mt-4 text-base  text-anti-flash-muted">
            FocusSpace packs a powerful focus toolkit into a lightweight browser
            extension
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-5 sm:grid-cols-2 max-sm:justify-items-center lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="flex max-w-sm sm:max-w-none flex-col items-center gap-4 rounded-2xl border border-primary-light/10 bg-card p-7 text-center transition-colors hover:border-primary-light/25"
            >
              <div className="inline-flex rounded-xl border border-primary-light/15 bg-primary/10 p-3 text-primary-light mx-auto">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-base font-semibold text-white">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-anti-flash-muted">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
