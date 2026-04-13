import { LandingPage } from '@/components/LandingPage'
import { TestView } from '@/components/TestView'

function App() {
  const showTest = new URLSearchParams(window.location.search).has('test')
  return showTest ? <TestView /> : <LandingPage />
}

export default App
