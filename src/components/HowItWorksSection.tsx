import { useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import pomodoroView from '@/assets/images/pomodoro-view.png'
import settingsView from '@/assets/images/settings-view.png'
import sessionCleanerView from '@/assets/images/sesion-cleaner.png'

const ENTRANCE_DELAY = 0.7;
const DELAY_BETWEEN_STEPS = 0.3;

interface Step {
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

const STEPS: Step[] = [
  {
    number: "01",
    title: "Install in 10 seconds",
    description:
      "Add to Chrome. Pin the icon. That's it — no account, no config file, no setup wizard.",
    image: pomodoroView,
    imageAlt: "FocusSpace extension installed in Chrome toolbar",
  },
  {
    number: "02",
    title: "Pick your distraction categories",
    description:
      "Check the boxes for what pulls you off task — social media, news, shopping, gaming. Or add your own custom keywords.",
    image: settingsView,
    imageAlt: "FocusSpace settings showing distraction categories",
  },
  {
    number: "03",
    title: "Hit Clean. Start timer. Do the work.",
    description:
      "One click closes distracting tabs, wipes matching history, and starts your focus timer. Your workspace, surgically clean.",
    image: sessionCleanerView,
    imageAlt: "FocusSpace main view showing the clean workspace",
  },
];

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      id="how-it-works"
      className="relative px-4 py-10 sm:px-6"
      ref={ref}
    >
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
            Three steps to a{" "}
            <span className="text-[#34d399]">distraction-free mind</span>
          </h2>
        </div>
        <div
          id="how-to-steps"
          className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[6fr_4fr]"
        >
          {/* Step tabs */}
          <div className="flex flex-col gap-4 max-w-sm sm:max-w-none mx-auto sm:mx-0">
            {STEPS.map((step, idx) => {
              const isActive = idx === activeStep;
              return (
                <motion.button
                  key={step.number}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{
                    duration: 0.7,
                    delay: ENTRANCE_DELAY + idx * DELAY_BETWEEN_STEPS,
                  }}
                  className={`flex w-full items-start gap-4 rounded-xl border p-5 text-center transition-colors duration-200 md:text-left ${
                    isActive
                      ? "border-primary-light/30 bg-primary-dark/10"
                      : "border-white/5 bg-card/50 hover:border-white/10"
                  }`}
                >
                  {/* Accent bar */}
                  <div
                    className={`mt-0.5 w-1 self-stretch rounded-full transition-colors ${
                      isActive ? "bg-primary-light" : "bg-primary-light/15"
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
                </motion.button>
              );
            })}

            <a
              href="#install"
              className="shimmer-border mt-2 self-center inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-primary-light transition-all duration-200 hover:scale-110 hover:bg-primary-light/10 hover:text-white"
            >
              Start focusing now
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>

          {/* Screenshot */}
          <div className="flex w-full items-center justify-center">
            <div className="w-full overflow-hidden rounded-xl border border-primary-light/10 shadow-2xl shadow-primary/10">
              <img
                src={STEPS[activeStep].image}
                alt={STEPS[activeStep].imageAlt}
                width={560}
                height={400}
                className="block h-auto w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
