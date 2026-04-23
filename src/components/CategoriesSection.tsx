import type { ComponentType } from 'react'
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
  return (
    <section id="categories" className="relative px-4 py-5 sm:px-6">
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
          {CATEGORIES.map((cat) => (
            <div
              key={cat.label}
              className="flex flex-col items-center gap-2 rounded-xl border border-primary-light/12 bg-primary-light/5 px-4 py-5 text-center transition-all duration-200 hover:border-primary-light/25 hover:bg-primary-light/10"
            >
              <cat.icon className="h-7 w-7 text-primary-light" aria-hidden="true" />
              <span className="text-sm font-medium text-white">
                {cat.label}
              </span>
            </div>
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
