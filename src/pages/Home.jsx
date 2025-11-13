import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CallbackForm from '../components/CallbackForm'
import TestimonialCarousel from '../components/TestimonialCarousel'
import './Home.css'

const Home = () => {
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

  const scrollToForm = () => {
    const formElement = document.getElementById('callback-form')
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const coreValues = [
    {
      icon: '✓',
      title: 'Integrity',
      description: 'We conduct business with honesty and ethical standards.'
    },
    {
      icon: '👁️',
      title: 'Transparency',
      description: 'Clear communication and no hidden fees or surprises.'
    },
    {
      icon: '❤️',
      title: 'Client-Centric Approach',
      description: 'Your financial well-being is our top priority.'
    },
    {
      icon: '⭐',
      title: 'Professional Excellence',
      description: 'Registered debt counsellors with proven expertise.'
    },
    {
      icon: '📋',
      title: 'Compliance & Ethical Conduct',
      description: 'Fully compliant with NCR regulations and POPIA.'
    }
  ]

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Regain Control. Restore Stability. Rebuild Your Future.</h1>
            <p className="hero-subtext">
              At Creditore, we help South Africans break free from overwhelming debt through professional, 
              compliant, and compassionate Debt Counselling.
            </p>
            <div className="hero-buttons">
              <button onClick={scrollToForm} className="btn btn-primary">
                Request a Callback
              </button>
              <Link to="/how-it-works" className="btn btn-secondary">
                Check If You Qualify
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Callback Form Section */}
      <CallbackForm />

      {/* About Us Preview Section */}
      <section className="about-preview section">
        <div className="container">
          <div className="about-preview-content">
            <h2 className="section-title">About Creditore</h2>
            <p className="section-subtitle">
              Creditore is a registered Debt Counselling practice dedicated to helping clients regain 
              financial independence with dignity and support. We understand that debt can be overwhelming, 
              and we're here to guide you through a structured process that protects your rights and 
              helps you achieve financial freedom.
            </p>
            <Link to="/how-it-works" className="btn btn-outline">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="core-values section">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-grid">
            {coreValues.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialCarousel />
    </div>
  )
}

export default Home

