import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import TestimonialsCarouselPremium from '../components/TestimonialsCarouselPremium'
import StatsSection from '../components/StatsSection'
import ProcessTimeline from '../components/ProcessTimeline'
import FeatureShowcase from '../components/FeatureShowcase'
import TrustBanner from '../components/TrustBanner'
import { useInView } from '../hooks/useInView'
import './Home.css'
import ResponsiveImage from '../components/ResponsiveImage'

const Home = () => {
  const navigate = useNavigate()

  useEffect(() => {
    // Handle hash navigation on mount
    if (window.location.hash === '#callback-form') {
      setTimeout(() => {
        const formElement = document.getElementById('callback-form')
        if (formElement) {
          formElement.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }, [])

  const handleNavigateToContact = () => {
    navigate('/contact')
  }

  const hero = useInView()
  const about = useInView()

  return (
    <div className="home">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className={`hero reveal ${hero.inView ? 'reveal-in' : ''}`} ref={hero.ref}>
        <div className="hero-overlay"></div>

        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Find Your Path to Financial Freedom.</h1>
            <p className="hero-subtext">
              Let our expert team guide you through personalized credit and debt solutions.
              Schedule your free consultation today.
            </p>
            <ul className="hero-benefits">
              <li><span className="text-brand-accent mr-2">✓</span> Fast, confidential assessment</li>
              <li><span className="text-brand-accent mr-2">✓</span> Legally compliant solutions</li>
              <li><span className="text-brand-accent mr-2">✓</span> Experienced debt counsellors</li>
            </ul>
            <div className="hero-buttons">
              <button onClick={handleNavigateToContact} className="btn btn-primary">
                Schedule Free Consultation
              </button>
              <Link to="/how-it-works" className="btn btn-secondary link-underline">
                Check If You Qualify
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Floating card: separated from hero for improved visual hierarchy */}
      <div className="hero-side-card-wrapper">
        <div className="container">
          <div className="hero-side-card-floating">
            <h4>Why choose Creditoré?</h4>
            <p>We provide structured debt solutions that reduce monthly payments while protecting you legally.</p>
            <ul>
              <li>NCR-registered debt counsellors</li>
              <li>Transparent fees and processes</li>
              <li>Dedicated client support</li>
            </ul>
            <p style={{ marginTop: '0.5rem' }}><strong>Contact us today — take the first step.</strong></p>
          </div>
        </div>
      </div>

      {/* Statistics Section - NEW */}
      <StatsSection />

      {/* Callback form removed — use Contact page instead */}

      {/* About Us Preview Section */}
      <section className={`about-preview section reveal ${about.inView ? 'reveal-in' : ''}`} ref={about.ref}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
            {/* Text Content */}
            <div>
              <h2 className="section-title">About Creditore</h2>
              <p className="section-subtitle mb-6">
                Creditore is a registered Debt Counselling practice dedicated to helping clients regain
                financial independence with dignity and support. We understand that debt can be overwhelming,
                and we're here to guide you through a structured process that protects your rights and
                helps you achieve financial freedom.
              </p>
              <Link to="/how-it-works" className="btn btn-outline link-underline">
                Learn More
              </Link>
            </div>
            {/* Image */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <ResponsiveImage
                src="/images/Pic5.jpg"
                alt="Financial planning session with calculator and documents"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Showcase - Replaces Core Values Cards */}
      <FeatureShowcase />

      {/* Professional Consultation Section */}
      <section className="section bg-gradient-to-b from-white to-brand-light">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
            {/* Image */}
            <div className="rounded-lg overflow-hidden shadow-lg order-2 md:order-1">
              <ResponsiveImage
                src="/images/Pic5.jpg"
                alt="Professional debt counsellor consulting with clients"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Text Content */}
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-brand-primary mb-4">Expert Guidance You Can Trust</h2>
              <p className="text-brand-muted mb-4 text-lg leading-relaxed font-medium">
                Our team of registered debt counsellors brings years of experience in helping South Africans
                navigate complex financial situations. We don't just provide solutions — we provide support,
                clarity, and a clear path forward.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent font-bold mt-1">✓</span>
                  <span className="text-brand-muted"><strong>Personalized Assessment:</strong> We evaluate your unique financial situation to create a tailored debt plan.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent font-bold mt-1">✓</span>
                  <span className="text-brand-muted"><strong>Legal Protection:</strong> Our counsellors ensure your rights are protected throughout the process.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent font-bold mt-1">✓</span>
                  <span className="text-brand-muted"><strong>Ongoing Support:</strong> We're with you every step of the way, from assessment to debt freedom.</span>
                </li>
              </ul>
              <button onClick={handleNavigateToContact} className="btn btn-primary">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner - Replaces Trust Cards */}
      <TrustBanner />

      {/* Process Timeline Section - NEW */}
      <ProcessTimeline />

      {/* Testimonials Section */}
      <TestimonialsCarouselPremium />
    </div>
  )
}

export default Home

