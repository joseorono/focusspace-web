import { useEffect, useRef, lazy, Suspense } from 'react'
import { MotionConfig } from 'motion/react'
import { Redirect, Route, Switch, useLocation } from 'wouter'
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

const LEGACY_PRIVACY_HASHES = new Set(['#privacy', '#privacy-policy'])

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

function ScrollToTop() {
  const [location] = useLocation()
  const prevLocation = useRef(location)

  useEffect(() => {
    if (prevLocation.current === location) return
    prevLocation.current = location
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location])

  return null
}

function HomePage() {
  useEffect(() => {
    document.title = 'FocusSpace — Reclaim your attention for deep work'
  }, [])

  return (
    <>
      <Navbar />
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
      <Footer />
    </>
  )
}

function PrivacyPage() {
  return (
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
      <PrivacyPolicy />
    </Suspense>
  )
}

function App() {
  const [, navigate] = useLocation()

  useEffect(() => {
    const onHashChange = () => {
      if (LEGACY_PRIVACY_HASHES.has(window.location.hash.toLowerCase())) {
        navigate('/privacy', { replace: true })
      }
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [navigate])

  if (LEGACY_PRIVACY_HASHES.has(window.location.hash.toLowerCase())) {
    return <Redirect to="/privacy" />
  }

  return (
    <MotionConfig reducedMotion="user">
      <ScrollToTop />
      <Switch>
        <Route path="/privacy" component={PrivacyPage} />
        <Route path="/privacy-policy">
          <Redirect to="/privacy" />
        </Route>
        <Route path="/privacy.html">
          <Redirect to="/privacy" />
        </Route>
        <Route component={HomePage} />
      </Switch>
    </MotionConfig>
  )
}

export default App
