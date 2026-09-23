import { useState, useEffect, useCallback, lazy, Suspense } from 'react'
import { MotionConfig } from 'motion/react'
import { Navbar } from '@/components/Navbar'
import { HeroSection } from '@/components/HeroSection'
import { FeaturesSection } from '@/components/FeaturesSection'
import { CategoriesSection } from '@/components/CategoriesSection'
import { HowItWorksSection } from '@/components/HowItWorksSection'
import { QuoteSection } from '@/components/QuoteSection'
import { FaqSection } from '@/components/FaqSection'
import { ReadySection } from '@/components/ReadySection'
import { Footer } from '@/components/Footer'

const PrivacyPolicy = lazy(() =>
  import('@/components/PrivacyPolicy').then((m) => ({ default: m.PrivacyPolicy }))
)

function SectionFade() {
  return (
    <div
      className="pointer-events-none relative z-10 h-28 w-full -mt-10"
      style={{
        background:
          'linear-gradient(to bottom, rgba(3, 14, 24, 0) 0%, rgba(3, 14, 24, 0.5) 28%, rgba(3, 14, 24, 0.88) 64%, rgba(3, 14, 24, 1) 100%)',
        boxShadow: 'inset 0 14px 24px rgba(3, 14, 24, 0.24), 0 16px 36px rgba(3, 14, 24, 0.55)',
      }}
      aria-hidden="true"
    />
  )
}

function getInitialRoute(): 'home' | 'privacy' {
  if (typeof window === 'undefined') return 'home'
  const path = window.location.pathname.toLowerCase()
  const hash = window.location.hash.toLowerCase()
  if (
    path === '/privacy' ||
    path === '/privacy-policy' ||
    path === '/privacy.html' ||
    hash === '#privacy' ||
    hash === '#privacy-policy'
  ) {
    return 'privacy'
  }
  return 'home'
}

function App() {
  const [route, setRoute] = useState<'home' | 'privacy'>(getInitialRoute)

  const navigate = useCallback((path: string) => {
    const isPrivacy =
      path === '/privacy' ||
      path === '/privacy-policy' ||
      path === '#privacy' ||
      path === '#privacy-policy'

    const targetRoute = isPrivacy ? 'privacy' : 'home'
    setRoute(targetRoute)

    if (window.location.pathname !== path && !path.startsWith('#')) {
      window.history.pushState({}, '', path)
    } else if (path.startsWith('#')) {
      window.location.hash = path
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  useEffect(() => {
    const handlePopState = () => {
      setRoute(getInitialRoute())
    }

    window.addEventListener('popstate', handlePopState)
    window.addEventListener('hashchange', handlePopState)

    return () => {
      window.removeEventListener('popstate', handlePopState)
      window.removeEventListener('hashchange', handlePopState)
    }
  }, [])

  useEffect(() => {
    if (route === 'home') {
      document.title = 'FocusSpace — Reclaim your attention for deep work'
    }
  }, [route])

  if (route === 'privacy') {
    return (
      <MotionConfig reducedMotion="user">
        <Suspense
          fallback={
            <div className="flex min-h-screen items-center justify-center bg-night text-anti-flash-muted">
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 animate-ping rounded-full bg-primary-light" />
                <span className="text-sm font-medium text-white">Loading Privacy Policy...</span>
              </div>
            </div>
          }
        >
          <PrivacyPolicy onNavigateHome={() => navigate('/')} />
        </Suspense>
      </MotionConfig>
    )
  }

  return (
    <MotionConfig reducedMotion="user">
      <Navbar onNavigate={navigate} />
      <main className="flex flex-1 flex-col overflow-x-hidden">
        <HeroSection />
        <SectionFade />
        <FeaturesSection />
        <SectionFade />
        <CategoriesSection />
        <SectionFade />
        <HowItWorksSection />
        <SectionFade />
        <QuoteSection />
        <SectionFade />
        <FaqSection />
        <SectionFade />
        <ReadySection />
      </main>
      <Footer onNavigate={navigate} />
    </MotionConfig>
  )
}

export default App
