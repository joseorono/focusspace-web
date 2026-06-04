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

function App() {
  return (
    <MotionConfig reducedMotion="user">
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
    </MotionConfig>
  )
}

export default App
