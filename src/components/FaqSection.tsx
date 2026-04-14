import { useState } from 'react'

const faqs = [
  {
    question: 'Does this delete all my browsing history?',
    answer: 'No! FocusSpace only targets specific categories you define, like social media or entertainment. Your important work history, research docs, and login sessions are left completely intact.',
  },
  {
    question: 'Is my data sent to any servers?',
    answer: 'Absolutely not. FocusSpace is privacy-first and 100% open-source. All processing happens locally on your device. Your data never leaves your browser. We couldn\'t see it even if we wanted to.',
  },
  {
    question: 'How is this different from regular site blockers?',
    answer: 'Blockers fight you in real time — they depend on your willpower to not bypass them. FocusSpace works before the impulse: it removes the triggers (tabs, history, autocomplete) that cause the distraction in the first place.',
  },
  {
    question: 'Can I customize what counts as a "distraction"?',
    answer: 'Yes, down to the keyword. Add your own, disable categories that don\'t apply, and whitelist the sites that are work for you. Twitter might be toxic for one user and essential for another — FocusSpace doesn\'t judge.',
  },
  {
    question: 'Is it really free? What\'s the catch?',
    answer: 'No catch. FocusSpace is completely free and open-source forever under the MIT license. No paid tier, no "pro" unlock, no tracking, no upsells. We built it because we needed it.',
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="px-6 py-20 md:py-28" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl">
        
        <div className="mb-14 text-center">
          <h2
            id="faq-heading"
            className="text-3xl font-bold tracking-tight text-ink-inverse sm:text-4xl"
          >
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4  text-center font-serif italic text-xl text-primary-light/80">
            Everything you need to know about privacy and features.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div 
                key={index}
                className={`rounded-2xl border transition-colors ${
                  isOpen ? 'border-primary-light/30 bg-primary-dark/5' : 'border-white/5 bg-card/50 hover:bg-card'
                }`}
              >
                <button
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-2xl"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-ink-inverse sm:text-lg">{faq.question}</span>
                  <span className={`ml-6 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-colors ${
                    isOpen ? 'border-primary-light/30 bg-primary/20 text-primary-light' : 'border-white/10 bg-transparent text-ink-inverse-muted'
                  }`}>
                    <svg
                      className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm leading-relaxed text-ink-inverse-muted sm:text-base">
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
