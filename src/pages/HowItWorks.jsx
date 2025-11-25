import { useNavigate } from 'react-router-dom'
import {
  HiClipboardList,
  HiPhone,
  HiDocumentText,
  HiUserGroup,
  HiScale,
  HiShieldCheck,
  HiBadgeCheck
} from 'react-icons/hi'
import { useInView } from '../hooks/useInView'
import './HowItWorks.css'

const HowItWorks = () => {
  const navigate = useNavigate()
  const hero = useInView()

  const steps = [
    {
      number: 1,
      icon: <HiClipboardList />,
      title: 'Complete the Assessment',
      description: 'Fill out our simple online form or request a callback. We\'ll assess your financial situation to determine if you qualify for Debt Review.'
    },
    {
      number: 2,
      icon: <HiPhone />,
      title: 'We Contact You',
      description: 'One of our registered debt counsellors will contact you at your preferred time to discuss your situation and explain the process.'
    },
    {
      number: 3,
      icon: <HiDocumentText />,
      title: 'Debt Review Application',
      description: 'We\'ll help you complete and submit your Debt Review application to the National Credit Regulator (NCR) and notify all your creditors.'
    },
    {
      number: 4,
      icon: <HiUserGroup />,
      title: 'Proposal to Creditors',
      description: 'We\'ll negotiate with your creditors to create a reduced payment plan that fits your budget while protecting your assets.'
    },
    {
      number: 5,
      icon: <HiScale />,
      title: 'Court Order',
      description: 'Once your creditors agree to the proposal, a court order is issued that legally protects you from further legal action by creditors.'
    },
    {
      number: 6,
      icon: <HiShieldCheck />,
      title: 'Reduced Payments & Protection',
      description: 'You make one reduced monthly payment to us, and we distribute it to your creditors. You\'re protected from repossession and legal action.'
    },
    {
      number: 7,
      icon: <HiBadgeCheck />,
      title: 'Clearance Certificate',
      description: 'Once all debts are paid, you\'ll receive a Clearance Certificate, and your name will be cleared from the credit bureau.'
    }
  ]

  return (
    <div className="how-it-works">
      <section className={`hero-section reveal ${hero.inView ? 'reveal-in' : ''}`} ref={hero.ref}>
        <div className="hero-overlay"></div>
        <div className="container relative z-10">
          <h1 className="hero-title">Your Journey to Financial Freedom</h1>
          <p className="hero-subtitle">
            We make the Debt Review process simple, safe, and structured. Our team guides you through every step — from initial assessment to completion.
          </p>
        </div>
      </section>

      <section className="steps-section section">
        <div className="container">
          <div className="section-header text-center mb-16">
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle prose mx-auto">
              The process is designed to protect you while creating an affordable repayment plan.
              Here is an overview of the steps; every case is treated sensitively and individually.
            </p>
          </div>

          <div className="steps-timeline">
            <div className="timeline-line"></div>
            {steps.map((step, index) => {
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const stepRef = useInView()
              return (
                <div
                  key={step.number}
                  className={`step-item ${index % 2 === 0 ? 'left' : 'right'} reveal ${stepRef.inView ? 'reveal-in' : ''}`}
                  ref={stepRef.ref}
                >
                  <div className="step-marker">
                    <div className="step-number-dot"></div>
                  </div>
                  <div className="step-content glass-card">
                    <div className="card-icon-wrapper">
                      {step.icon}
                      <span className="card-step-number">{step.number}</span>
                    </div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content glass-card-dark">
            <h2>Ready to Start Your Journey?</h2>
            <p>Take the first step towards financial freedom today.</p>
            <button
              className="btn btn-primary btn-lg"
              onClick={() => {
                navigate('/')
                setTimeout(() => {
                  const formElement = document.getElementById('callback-form')
                  if (formElement) {
                    formElement.scrollIntoView({ behavior: 'smooth' })
                  }
                }, 100)
              }}
            >
              Request a Free Callback
            </button>
          </div>
        </div>
      </section>
    </div >
  )
}

export default HowItWorks

