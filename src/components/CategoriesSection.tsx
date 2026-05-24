import type { ComponentType } from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import {
  HiPuzzlePiece,
  HiChatBubbleLeftRight,
  HiHeart,
  HiFilm,
  HiShoppingBag,
  HiPaperAirplane,
  HiUserCircle,
} from 'react-icons/hi2'
import { NsfwIcon } from './icons/NsfwIcon'

type CategoryIcon = ComponentType<{
  className?: string
  'aria-hidden'?: boolean | 'true' | 'false'
}>

interface Category {
  icon: CategoryIcon
  label: string
}

const CATEGORIES: Category[] = [
  { icon: NsfwIcon, label: 'NSFW' },
  { icon: HiPuzzlePiece, label: 'Gaming' },
  { icon: HiChatBubbleLeftRight, label: 'Social Media' },
  { icon: HiHeart, label: 'Dating' },
  { icon: HiFilm, label: 'Entertainment' },
  { icon: HiShoppingBag, label: 'Shopping' },
  { icon: HiPaperAirplane, label: 'Travel' },
  { icon: HiUserCircle, label: 'Health' },
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
              className="flex max-w-sm sm:max-w-none flex-col items-center gap-2 rounded-xl border border-primary-light/12 bg-primary-light/5 px-4 py-5 text-center transition-colors duration-200 hover:border-primary-light/25 hover:bg-primary-light/10"
            >
              <cat.icon className="h-7 w-7 text-primary-light" aria-hidden="true" />
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
