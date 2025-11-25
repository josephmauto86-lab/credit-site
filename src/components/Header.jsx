import { useState, useRef, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import logoPng200 from '../../images/creditore-logo-200.png'
import logoPng400 from '../../images/creditore-logo-400.png'
import logoPng800 from '../../images/creditore-logo-800.png'
import logoPng1536 from '../../images/creditore-logo-1536.png'
import logoWebp200 from '../../images/creditore-logo-200.webp'
import logoWebp400 from '../../images/creditore-logo-400.webp'
import logoWebp800 from '../../images/creditore-logo-800.webp'
import logoWebp1536 from '../../images/creditore-logo-1536.webp'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const menuButtonRef = useRef(null)
  const navRef = useRef(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }



  // when menu opens, move focus to first link; close on Escape
  useEffect(() => {
    if (isMenuOpen) {
      const timer = setTimeout(() => {
        const nav = navRef.current
        if (nav) {
          const first = nav.querySelector('a, button')
          if (first && typeof first.focus === 'function') (first).focus()
        }
      }, 80)

      const onKey = (ev) => {
        if (ev.key === 'Escape') {
          setIsMenuOpen(false)
          if (menuButtonRef.current && typeof menuButtonRef.current.focus === 'function') menuButtonRef.current.focus()
        }
      }
      document.addEventListener('keydown', onKey)
      return () => {
        clearTimeout(timer)
        document.removeEventListener('keydown', onKey)
      }
    }
  }, [isMenuOpen])

  // close menu when clicking outside
  useEffect(() => {
    const onDocClick = (ev) => {
      if (!isMenuOpen) return
      const nav = navRef.current
      const btn = menuButtonRef.current
      if (nav && btn && !nav.contains(ev.target) && !btn.contains(ev.target)) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener('click', onDocClick)
    return () => document.removeEventListener('click', onDocClick)
  }, [isMenuOpen])

  return (
    <header className="header sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm transition-all duration-300">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo" aria-label="Creditoré home">
            <picture>
              <source
                type="image/webp"
                srcSet={`${logoWebp200} 200w, ${logoWebp400} 400w, ${logoWebp800} 800w, ${logoWebp1536} 1536w`}
                sizes="(max-width: 768px) 180px, 220px"
              />
              <img
                src={logoPng1536}
                srcSet={`${logoPng200} 200w, ${logoPng400} 400w, ${logoPng800} 800w, ${logoPng1536} 1536w`}
                sizes="(max-width: 768px) 180px, 220px"
                alt="Creditoré"
                width={1536}
                height={1024}
                loading="eager"
              />
            </picture>
          </Link>
          <nav ref={navRef} id="site-nav" role="navigation" aria-label="Main navigation" className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="link-underline font-medium text-gray-700 hover:text-brand-primary">Home</Link>
            <Link to="/how-it-works" onClick={() => setIsMenuOpen(false)} className="link-underline font-medium text-gray-700 hover:text-brand-primary">How It Works</Link>
            {/* About Us link added as per plan, pointing to home section or separate page if it existed. For now pointing to home section or just keeping it if page exists. 
                Wait, the plan said "About Us" page. But file list didn't show AboutUs page. 
                I'll point to #about on Home or just keep it as is if I can't find the page.
                Actually, the file list showed Home, HowItWorks, Benefits, FAQ, Contact, Privacy, Terms.
                I will add "About Us" link pointing to /#about-preview for now or just remove it if not ready.
                The plan said: "Simplify Main Navigation: ... 'About Us' ...".
                I'll stick to existing pages + Contact.
            */}
            <Link to="/benefits" onClick={() => setIsMenuOpen(false)} className="link-underline font-medium text-gray-700 hover:text-brand-primary">Benefits</Link>
            <Link to="/faq" onClick={() => setIsMenuOpen(false)} className="link-underline font-medium text-gray-700 hover:text-brand-primary">FAQ</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="link-underline font-medium text-gray-700 hover:text-brand-primary">Contact</Link>
            <Link to="/contact" className="btn btn-primary ml-4" onClick={() => setIsMenuOpen(false)}>
              Schedule Consultation
            </Link>
          </nav>
          <button ref={menuButtonRef} className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu" aria-controls="site-nav" aria-expanded={isMenuOpen}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
