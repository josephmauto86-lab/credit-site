import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import StickyActions from './components/StickyActions'
import ConsentBanner from './components/ConsentBanner'
import Home from './pages/Home'
import HowItWorks from './pages/HowItWorks'
import Benefits from './pages/Benefits'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Header />
        <main id="main-content" role="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/benefits" element={<Benefits />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <StickyActions />
        <ConsentBanner />
        <Footer />
      </div>
    </Router>
  )
}

export default App
