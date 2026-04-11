import { Header } from '@/components/Header'
import { HeroSection } from '@/components/HeroSection'
import { FeaturesSection } from '@/components/FeaturesSection'
import { HowItWorksSection } from '@/components/HowItWorksSection'
import { FaqSection } from '@/components/FaqSection'
import { ReadySection } from '@/components/ReadySection'
import { Footer } from '@/components/Footer'

function App() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col overflow-x-hidden">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <FaqSection />
        <ReadySection />
      </main>
      <Footer />
    </>
  )
}

export default App
