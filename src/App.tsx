import { Header } from '@/components/Header'
import { HeroSection } from '@/components/HeroSection'
import { FeaturesSection } from '@/components/FeaturesSection'
import { ReadySection } from '@/components/ReadySection'
import { Footer } from '@/components/Footer'

function App() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col overflow-x-hidden">
        <HeroSection />
        <FeaturesSection />
        <ReadySection />
      </main>
      <Footer />
    </>
  )
}

export default App
