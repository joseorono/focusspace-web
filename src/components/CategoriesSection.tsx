import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface Category {
  emoji: string
  label: string
}

const CATEGORIES: Category[] = [
  { emoji: '\uD83D\uDD1E', label: 'NSFW' },
  { emoji: '\uD83C\uDFAE', label: 'Gaming' },
  { emoji: '\uD83D\uDCF1', label: 'Social Media' },
  { emoji: '\uD83D\uDC98', label: 'Dating' },
  { emoji: '\uD83C\uDFAC', label: 'Entertainment' },
  { emoji: '\uD83D\uDECD\uFE0F', label: 'Shopping' },
  { emoji: '\u2708\uFE0F', label: 'Travel' },
  { emoji: '\u2764\uFE0F', label: 'Health' },
]

export function CategoriesSection() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="categories" className="relative px-4 py-5 sm:px-6" ref={ref}>
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            You know your triggers.{' '}
            <br />
            <span className="text-[#fb923c]">We make them easy to block.</span>
          </h2>
          <p className="mx-auto mt-4 text-base text-anti-flash-muted">
            Choose from built-in categories or create your own. One toggle per
            category — no complex rules.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="flex max-w-sm sm:max-w-none flex-col items-center gap-2 rounded-xl border border-primary-light/12 bg-primary-light/5 px-4 py-5 text-center transition-all duration-200 hover:border-primary-light/25 hover:bg-primary-light/10"
            >
              <span className="text-3xl" aria-hidden="true">
                {cat.emoji}
              </span>
              <span className="text-sm font-medium text-white">
                {cat.label}
              </span>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center text-sm text-anti-flash-muted">
          <strong className="font-medium text-white">
            Add any keyword. Whitelist any domain.
            <br />
          </strong>
          Your focus rules, your way.
        </div>
      </div>
    </section>
  )
}
