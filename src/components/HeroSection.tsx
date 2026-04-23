import { useState, useEffect, useMemo } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { heroParticlesBgConfig } from '@/constants/particles-bg'
import { IconChrome } from '@/components/icons'

export function HeroSection() {
  const [engineReady, setEngineReady] = useState(false)
  const options = useMemo(() => heroParticlesBgConfig, [])

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => setEngineReady(true))
  }, [])

  return (
    <section className="relative flex flex-col items-center justify-cente overflow-hidden px-4 pt-28 pb-16 text-center sm:px-6 md:py-20 md:pt-28">
      {/* Particles background */}
      {engineReady && (
        <Particles
          id="hero-particles"
          className="absolute inset-0 z-0"
          options={options}
        />
      )}

      <div
        className="pointer-events-none absolute inset-0 z-5"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 64% 50% at 50% 40%, rgba(3, 14, 24, 0.78) 0%, rgba(3, 14, 24, 0.62) 38%, rgba(3, 14, 24, 0.34) 70%, rgba(3, 14, 24, 0.12) 88%, rgba(3, 14, 24, 0) 100%)',
        }}
      />

      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-125 w-125 rounded-full bg-primary/20 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-1/4 top-1/2 h-75 w-75 rounded-full bg-secondary/6 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-6 h-28"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(to bottom, rgba(3, 14, 24, 0) 0%, rgba(3, 14, 24, 0.7) 52%, rgba(3, 14, 24, 1) 100%)',
          boxShadow: '0 24px 48px rgba(3, 14, 24, 0.6), inset 0 -24px 40px rgba(3, 14, 24, 0.5)',
        }}
      />

      {/* Decorative SVGs */}
      <img
        src="/icons/circulo.svg"
        alt=""
        width={420}
        height={420}
        className="pointer-events-none absolute -right-20 top-10 opacity-[0.07] select-none md:hidden"
        aria-hidden="true"
        loading="lazy"
        decoding="async"
      />

        <img
          src="/icons/lineas.svg"
          alt=""
          width={180}
          height={145}
          className="pointer-events-none hidden md:block opacity-[0.05] absolute top-0 right-0 mx-auto select-none"
          aria-hidden="true"
          loading="lazy"
          decoding="async"
        />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Open-source badge */}
        <div id="open-source-notice" className="mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-light/25 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary-light">
            <span
              className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"
              aria-hidden="true"
            />
            Open Source &middot; GPLv3 Licensed &middot; No Accounts Required
          </div>
        </div>

        {/* Headline */}
        <h1
          className="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
          style={{ textShadow: '0 2px 12px rgba(3, 14, 24, 0.85)' }}
        >
          Your browser remembers every distraction.{' '}
          <span className="bg-linear-to-r from-primary-light to-lilac bg-clip-text text-transparent">
            FocusSpace forgets them for you.
          </span>
        </h1>

        {/* Subheading */}
        <p
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg"
          style={{ textShadow: '0 1px 8px rgba(3, 14, 24, 0.8)' }}
        >
          One click clears the noise — distracting tabs, tempting history, and
          the trail of &ldquo;just one more scroll.&rdquo; Pomodoro timer included.{' '}
          <strong className="font-medium text-white">
            100% local. 100% free. 100% yours.
          </strong>
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://chromewebstore.google.com/search/FocusSpace"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/40 transition-all hover:-translate-y-0.5 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <IconChrome className="w-5 h-5 shrink-0" />
            Install Free Now
            <span aria-hidden="true">&rarr;</span>
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/5"
          >
            See How It Works
          </a>
        </div>

        {/* Trust bar */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-sm text-anti-flash-muted sm:gap-6">
          <span className="inline-flex items-center gap-1.5">
            <svg className="h-4 w-4 text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg>
            Open Source
          </span>
          <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" aria-hidden="true" />
          <span className="inline-flex items-center gap-1.5">
            <svg className="h-4 w-4 text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
            Private by Design
          </span>
          <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" aria-hidden="true" />
          <span className="inline-flex items-center gap-1.5">
            <svg className="h-4 w-4 text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
            </svg>
            Lightweight
          </span>
        </div>
      </div>
    </section>
  )
}
