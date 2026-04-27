import { useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface FaqItem {
  question: string
  answer: string
}

const FAQS: FaqItem[] = [
  {
    question: "Is it really free? What's the catch?",
    answer:
      "There is no catch. FocusSpace is 100% free and open source under the GPLv3 license. No paid tier, no premium features, no data harvesting. We built it because we needed it, and we open-sourced it because everyone deserves better focus tools.",
  },
  {
    question: 'Will it delete my actual work history?',
    answer:
      "Only what you tell it to. FocusSpace removes browsing data that matches your selected distraction categories. Your work-related history stays untouched. You can also whitelist specific domains to ensure nothing important is ever cleaned.",
  },
  {
    question: 'Does this send my browsing data anywhere?',
    answer:
      "Absolutely not. Everything runs locally in your browser. FocusSpace makes zero network requests. No servers, no analytics, no telemetry. Your browsing data never leaves your machine.",
  },
  {
    question: 'How is this different from blockers like StayFocusd or Cold Turkey?',
    answer:
      "Most blockers fight the impulse — they put a wall between you and the site. FocusSpace removes the trigger entirely. It cleans your history, closes matching tabs, and eliminates the visual cues that pull you back. It's like the distraction was never there.",
  },
  {
    question: 'Does it work on Edge / Brave / Arc?',
    answer:
      "Yes! FocusSpace works on all Chromium-based browsers including Chrome, Edge, Brave, Arc, Opera, and Vivaldi. It's built with Manifest V3 for maximum compatibility.",
  },
  {
    question: 'Can I contribute?',
    answer:
      "Absolutely! FocusSpace is open source and we welcome contributions. Whether it's bug reports, feature suggestions, or pull requests — check out our GitHub repository to get started.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="faq" className="relative px-4 py-6 sm:px-6 md:py-14" ref={ref}>
      {/* Decorative */}
      <img
        src="/icons/lineas.svg"
        alt=""
        width={160}
        height={130}
        className="pointer-events-none absolute left-4 top-16 opacity-[0.04] rotate-12 select-none"
        aria-hidden="true"
        loading="lazy"
        decoding="async"
      />

      <div className="mx-auto grid max-w-5xl gap-12 text-center sm:text-left lg:grid-cols-2">
        {/* Left column */}
        <div className="flex flex-col justify-center items-center sm:items-start">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base leading-relaxed text-anti-flash-muted">
            Everything you need to know about privacy, <br  /> features, and how
            <br  /> FocusSpace keeps your focus sharp.
          </p>

          <div className="mt-10 max-w-sm sm:max-w-none rounded-xl border border-primary-light/10 bg-card/50 p-6 w-full sm:w-auto">
            <div className="flex items-center gap-3 flex-col sm:flex-row text-center sm:text-left">
              <img
                src="/icons/persona.svg"
                alt=""
                width={40}
                height={40}
                className="opacity-70 mx-auto sm:mx-0"
                loading="lazy"
                decoding="async"
              />
              <div>
                <p className="text-sm font-medium text-white">
                  Still have questions?
                </p>
                <p className="text-xs text-anti-flash-muted">
                  We&rsquo;re here to help
                </p>
              </div>
            </div>
            <a
              href="https://github.com/joseorono/focus-space/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary-light transition-colors hover:text-white"
            >
              Open an issue on GitHub
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>

        {/* Right column — accordion */}
        <div className="flex flex-col gap-3 mx-auto sm:mx-0">
          {FAQS.map((faq, idx) => {
            const isOpen = idx === openIndex
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`max-w-sm sm:max-w-none rounded-2xl border transition-colors ${
                  isOpen
                    ? 'border-primary-light/30 bg-primary-dark/5'
                    : 'border-white/5 bg-card/50'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left sm:text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-medium text-white">
                    {faq.question}
                  </span>
                  <svg
                    className={`h-5 w-5 shrink-0 text-anti-flash-muted transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>
                <div
                  className={`grid transition-all duration-200 ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-4 text-sm leading-relaxed text-anti-flash-muted text-center sm:text-left">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
