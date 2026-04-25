import { useState } from 'react'

interface FaqItem {
  question: string
  answer: string
}

const FAQS: FaqItem[] = [
  {
    question: 'Is it really free? Can I contribute?',
    answer:
      'Yes, FocusSpace is 100% free and open source under the GPLv3 license. There are no paid tiers or data harvesting. As an open-source project, we welcome contributions! You can suggest features, report bugs, or submit pull requests on our GitHub repository.',
  },
  {
    question: 'Is my data safe and private?',
    answer:
      'Yes. Everything runs 100% locally in your browser. FocusSpace makes zero network requests and never leaves your machine. It only removes browsing data from the categories you select, leaving your work history untouched.',
  },
  {
    question: 'How is this different from other blockers?',
    answer:
      'Standard blockers put a wall between you and distractions. FocusSpace removes the trigger entirely by cleaning your history and closing tabs, making it feel like the distraction was never there.',
  },
  {
    question: 'Does it work on Edge, Brave, or Arc?',
    answer:
      'Yes! FocusSpace works on all Chromium-based browsers and is built with Manifest V3 for maximum compatibility and performance.',
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="relative px-4 py-14 sm:px-6 md:py-20">
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

      <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
        {/* Left column */}
        <div className="flex flex-col justify-start">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base leading-relaxed text-anti-flash-muted">
            Everything you need to know about privacy, features, and how
            FocusSpace keeps your focus sharp.
          </p>

          <div className="mt-10 rounded-xl border border-primary-light/10 bg-card/50 p-6">
            <div className="flex items-center gap-3">
              <img
                src="/icons/persona.svg"
                alt=""
                width={40}
                height={40}
                className="opacity-70"
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
        <div className="flex flex-col gap-3">
          {FAQS.map((faq, idx) => {
            const isOpen = idx === openIndex
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-colors ${
                  isOpen
                    ? 'border-primary-light/30 bg-primary-dark/5'
                    : 'border-white/5 bg-card/50'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
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
                    <p className="px-6 pb-4 text-sm leading-relaxed text-anti-flash-muted">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
