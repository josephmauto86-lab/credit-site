import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// CallbackForm removed in favour of centralised Contact page form
import TestimonialsCarouselPremium from '../components/TestimonialsCarouselPremium'
import { useInView } from '../hooks/useInView'
import { 
  HiShieldCheck, 
  HiEye, 
  HiUserGroup, 
  HiAcademicCap, 
  HiClipboardCheck 
} from 'react-icons/hi'
import './Home.css'

const Card = ({ icon, title, description }) => {
  return (
    <div className="value-card">
      <div className="value-icon">{icon}</div>
      <h3 className="value-title">{title}</h3>
      <p className="value-description">{description}</p>
    </div>
  )
}

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

  const coreValues = [
    {
      icon: <HiShieldCheck />,
      title: 'Integrity',
      description: 'We conduct business with honesty and ethical standards.'
    },
    {
      icon: <HiEye />,
      title: 'Transparency',
      description: 'Clear communication and no hidden fees or surprises.'
    },
    {
      icon: <HiUserGroup />,
      title: 'Client-Centric Approach',
      description: 'Your financial well-being is our top priority.'
    },
    {
      icon: <HiAcademicCap />,
      title: 'Professional Excellence',
      description: 'Registered debt counsellors with proven expertise.'
    },
    {
      icon: <HiClipboardCheck />,
      title: 'Compliance & Ethical Conduct',
      description: 'Fully compliant with NCR regulations and POPIA.'
    }
  ]

  const hero = useInView()
  const about = useInView()
  const values = useInView()
  const trust = useInView()

  return (
    <div className="home">
      {/* Hero Section */}
      <section className={`hero reveal ${hero.inView ? 'reveal-in' : ''}`} ref={hero.ref}>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Regain Control. Restore Stability. Rebuild Your Future.</h1>
            <p className="hero-subtext">
              At Creditore, we help South Africans break free from overwhelming debt through professional, 
              compliant, and compassionate Debt Counselling.
            </p>
            <ul className="hero-benefits">
              <li>Fast, confidential assessment — no obligation.</li>
              <li>Legally compliant solutions tailored to your situation.</li>
              <li>Experienced, registered debt counsellors guiding every step.</li>
            </ul>
            <div className="hero-buttons">
              <button onClick={handleNavigateToContact} className="btn btn-primary">
                Request a Callback
              </button>
              <Link to="/how-it-works" className="btn btn-secondary link-underline">
                Check If You Qualify
              </Link>
            </div>
          </div>
          <div className="hero-side-card">
            <h4>Why choose Creditoré?</h4>
            <p>We provide structured debt solutions that reduce monthly payments while protecting you legally.</p>
            <ul>
              <li>NCR-registered debt counsellors</li>
              <li>Transparent fees and processes</li>
              <li>Dedicated client support</li>
            </ul>
            <p style={{marginTop: '0.75rem'}}><strong>Contact us today — take the first step.</strong></p>
          </div>
        </div>
      </section>

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
              <img 
                src="/images/financial-planning.jpg" 
                alt="Financial planning session with calculator and documents" 
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className={`core-values section reveal ${values.inView ? 'reveal-in' : ''}`} ref={values.ref}>
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-grid">
            {coreValues.map((value, index) => (
              <Card key={index} icon={value.icon} title={value.title} description={value.description} />
            ))}
          </div>
        </div>
      </section>

      {/* Professional Consultation Section */}
      <section className="section bg-gradient-to-b from-white to-blue-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
            {/* Image */}
            <div className="rounded-lg overflow-hidden shadow-lg order-2 md:order-1">
              <img 
                src="/images/consultation-meeting.jpg" 
                alt="Professional debt counsellor consulting with clients" 
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            {/* Text Content */}
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-[#0066cc] mb-4">Expert Guidance You Can Trust</h2>
              <p className="text-[#6b7280] mb-4 text-lg leading-relaxed font-medium">
                Our team of registered debt counsellors brings years of experience in helping South Africans 
                navigate complex financial situations. We don't just provide solutions — we provide support, 
                clarity, and a clear path forward.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-[#0080ff] font-bold mt-1">✓</span>
                  <span className="text-[#6b7280]"><strong>Personalized Assessment:</strong> We evaluate your unique financial situation to create a tailored debt plan.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0080ff] font-bold mt-1">✓</span>
                  <span className="text-[#6b7280]"><strong>Legal Protection:</strong> Our counsellors ensure your rights are protected throughout the process.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0080ff] font-bold mt-1">✓</span>
                  <span className="text-[#6b7280]"><strong>Ongoing Support:</strong> We're with you every step of the way, from assessment to debt freedom.</span>
                </li>
              </ul>
              <button onClick={handleNavigateToContact} className="btn btn-primary">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Compliance */}
      <section className={`trust section reveal ${trust.inView ? 'reveal-in' : ''}`} aria-labelledby="trust-title" ref={trust.ref}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto mb-12">
            {/* Text Content */}
            <div>
              <h2 id="trust-title" className="text-3xl font-bold text-[#0066cc] mb-4">The Path to Financial Freedom</h2>
              <p className="text-[#6b7280] mb-4 text-lg leading-relaxed font-medium">
                Debt doesn't define you. With the right guidance and a structured plan, you can break free from 
                financial stress and build a secure future. Our debt counselling process is designed to be transparent, 
                legally compliant, and results-focused.
              </p>
              <p className="text-[#6b7280] mb-6 text-lg leading-relaxed font-medium">
                Whether you're struggling with credit card debt, personal loans, or multiple creditors, 
                we have solutions that work. Let us help you reclaim your financial independence.
              </p>
              <Link to="/how-it-works" className="btn btn-primary link-underline">
                Discover Your Options
              </Link>
            </div>
            {/* Image */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/images/professional-finance.jpg" 
                alt="Financial professional discussing debt solutions" 
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <h3 className="text-2xl font-bold text-center text-[#0066cc] mb-8">Why South Africans Choose Creditore</h3>
          <div className="trust-grid">
            <div className="trust-card">
              <h4>NCR Registration</h4>
              <p>NCR Registered Debt Counsellor — NCRDC-XXXX (placeholder)</p>
            </div>
            <div className="trust-card">
              <h4>POPIA Aligned</h4>
              <p>Your personal information is handled with strict confidentiality and lawful purpose.</p>
            </div>
            <div className="trust-card">
              <h4>Secure & Confidential</h4>
              <p>All assessments are private. We never contact your employer or family.</p>
            </div>
            <div className="trust-card">
              <h4>Results-Focused</h4>
              <p>Custom repayment plans, reduced instalments, and creditor protection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsCarouselPremium />
    </div>
  )
}

export default Home

