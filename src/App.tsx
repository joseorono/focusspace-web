import { Navbar } from '@/components/Navbar'
import { HeroSection } from '@/components/HeroSection'
import { FeaturesSection } from '@/components/FeaturesSection'
import { CategoriesSection } from '@/components/CategoriesSection'
import { HowItWorksSection } from '@/components/HowItWorksSection'
import { QuoteSection } from '@/components/QuoteSection'
import { FaqSection } from '@/components/FaqSection'
import { ReadySection } from '@/components/ReadySection'
import { Footer } from '@/components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col overflow-x-hidden">
        <HeroSection />
        <FeaturesSection />
        <CategoriesSection />
        <HowItWorksSection />
        <QuoteSection />
        <FaqSection />
        <ReadySection />
      </main>
      <Footer />
    </>
  )
}

export default App
