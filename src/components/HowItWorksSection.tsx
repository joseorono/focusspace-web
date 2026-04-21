import { useState } from 'react'

interface Step {
  number: string
  title: string
  description: string
  image: string
  imageAlt: string
}

const STEPS: Step[] = [
  {
    number: '01',
    title: 'Install in 10 seconds',
    description:
      'Add to Chrome. Pin the icon. That\'s it — no account, no config file, no setup wizard.',
    image: '/screenshots/App-header-with-new-logo.png',
    imageAlt: 'FocusSpace extension installed in Chrome toolbar',
  },
  {
    number: '02',
    title: 'Pick your distraction categories',
    description:
      'Check the boxes for what pulls you off task — social media, news, shopping, gaming. Or add your own custom keywords.',
    image: '/screenshots/App-settings-view.png',
    imageAlt: 'FocusSpace settings showing distraction categories',
  },
  {
    number: '03',
    title: 'Hit Clean. Start timer. Do the work.',
    description:
      'One click closes distracting tabs, wipes matching history, and starts your focus timer. Your workspace, surgically clean.',
    image: '/screenshots/App-main-view.png',
    imageAlt: 'FocusSpace main view showing the clean workspace',
  },
]

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section id="how-it-works" className="relative px-4 py-10 sm:px-6">
      {/* Decorative */}
      <img
        src="/icons/flecha.svg"
        alt=""
        width={140}
        height={140}
        className="pointer-events-none absolute bottom-10 right-8 hidden opacity-[0.07] select-none lg:block"
        aria-hidden="true"
        loading="lazy"
        decoding="async"
      />

      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Three steps to a{' '}
            <span className="text-[#34d399]">distraction-free mind</span>
          </h2>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Step tabs */}
          <div className="flex flex-col gap-4">
            {STEPS.map((step, idx) => {
              const isActive = idx === activeStep
              return (
                <button
                  key={step.number}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`flex items-start gap-4 rounded-xl border p-5 text-left transition-all duration-200 ${
                    isActive
                      ? 'border-primary-light/30 bg-primary-dark/10'
                      : 'border-white/5 bg-card/50 hover:border-white/10'
                  }`}
                >
                  {/* Accent bar */}
                  <div
                    className={`mt-0.5 w-1 self-stretch rounded-full transition-colors ${
                      isActive ? 'bg-primary-light' : 'bg-primary-light/15'
                    }`}
                  />
                  <div className="flex-1">
                    <span className="font-mono text-xs text-primary-light">
                      Step {step.number}
                    </span>
                    <h3 className="mt-1 text-base font-semibold text-white">
                      {step.title}
                    </h3>
                    {isActive && (
                      <p className="mt-2 text-sm leading-relaxed text-anti-flash-muted">
                        {step.description}
                      </p>
                    )}
                  </div>
                </button>
              )
            })}

            <a
              href="#install"
              className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-primary-light transition-colors hover:text-white"
            >
              Start focusing now
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>

          {/* Screenshot */}
          <div className="flex items-center justify-center">
            <div className="overflow-hidden rounded-xl border border-primary-light/10 shadow-2xl shadow-primary/10">
              <img
                src={STEPS[activeStep].image}
                alt={STEPS[activeStep].imageAlt}
                width={560}
                height={400}
                className="h-auto w-full max-w-[560px] object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
