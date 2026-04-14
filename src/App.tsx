import { LandingPage } from '@/components/LandingPage'
import { TestView } from '@/components/TestView'
import LandingPageGemini from '@/components/landing-gemini'

function App() {
  const params = new URLSearchParams(window.location.search)
  
  if (params.has('test')) return <TestView />
  if (params.has('gemini')) return <LandingPageGemini />
  
  return <LandingPage />
}

export default App
