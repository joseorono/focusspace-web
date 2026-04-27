import type { ElementType } from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { DotPattern } from '@/components/DotPattern'
import LockIcon from '@/components/icons/LockIcon'
import ClockIcon from '@/components/icons/ClockIcon'
import ChartHistogramIcon from '@/components/icons/ChartHistogramIcon'
import SlidersHorizontalIcon from '@/components/icons/SlidersHorizontalIcon'
import ShieldCheckIcon from '@/components/icons/ShieldCheckIcon'
import FilledBellIcon from '@/components/icons/FilledBellIcon'

interface Feature {
  icon: ElementType<{ className?: string }>
  title: string
  description: string
}

const FEATURES: Feature[] = [
  {
    icon: LockIcon,
    title: 'Smart Site Blocking',
    description:
      'Block social media, news, or any distracting URL with a single click. Customizable per-session or persistent.',
  },
  {
    icon: ClockIcon,
    title: 'Focus Sessions',
    description:
      'Run Pomodoro-style work intervals with configurable durations. Track your focused time effortlessly.',
  },
  {
    icon: ChartHistogramIcon,
    title: 'Productivity Analytics',
    description:
      'Visualize your focused time, blocked attempts, and productivity trends over days and weeks.',
  },
  {
    icon: SlidersHorizontalIcon,
    title: 'Custom Work Modes',
    description:
      'Switch between Work, Study, Deep Focus, or your own custom modes. Each with its own block list.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Whitelist & Allowlist',
    description:
      'Always allow the tools you need — docs, repos, calendars — even during the strictest focus sessions.',
  },
  {
    icon: FilledBellIcon,
    title: 'Smart Reminders',
    description:
      'Get gentle browser notifications when your session ends, when you break streak, or at scheduled intervals.',
  },
]

export function FeaturesSection() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="features" className="relative px-4 py-10 sm:px-6" ref={ref}>
      <DotPattern
        dotSize={2.6}
        gap={22}
        baseColor="#60a5fa"
        glowColor="#8b5cf6"
        proximity={120}
        glowIntensity={1}
        waveSpeed={0.5}
      />

      <div
        className="pointer-events-none absolute inset-x-0 -top-20 z-20 h-20"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(to top, rgba(3, 14, 24, 0.98) 0%, rgba(3, 14, 24, 0.72) 38%, rgba(3, 14, 24, 0) 100%)',
          boxShadow: '0 -18px 36px rgba(3, 14, 24, 0.45)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl">
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
          {FEATURES.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex max-w-sm sm:max-w-none flex-col items-center gap-4 rounded-2xl border border-primary-light/10 bg-card/70 p-7 text-center transition-colors hover:border-primary-light/25"
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
