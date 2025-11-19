import { useNavigate } from 'react-router-dom'
import './HowItWorks.css'

const HowItWorks = () => {
  const navigate = useNavigate()
  const steps = [
    {
      number: 1,
      title: 'Complete the Assessment',
      description: 'Fill out our simple online form or request a callback. We\'ll assess your financial situation to determine if you qualify for Debt Review.'
    },
    {
      number: 2,
      title: 'We Contact You',
      description: 'One of our registered debt counsellors will contact you at your preferred time to discuss your situation and explain the process.'
    },
    {
      number: 3,
      title: 'Debt Review Application',
      description: 'We\'ll help you complete and submit your Debt Review application to the National Credit Regulator (NCR) and notify all your creditors.'
    },
    {
      number: 4,
      title: 'Proposal to Creditors',
      description: 'We\'ll negotiate with your creditors to create a reduced payment plan that fits your budget while protecting your assets.'
    },
    {
      number: 5,
      title: 'Court Order',
      description: 'Once your creditors agree to the proposal, a court order is issued that legally protects you from further legal action by creditors.'
    },
    {
      number: 6,
      title: 'Reduced Payments & Protection',
      description: 'You make one reduced monthly payment to us, and we distribute it to your creditors. You\'re protected from repossession and legal action.'
    },
    {
      number: 7,
      title: 'Clearance Certificate',
      description: 'Once all debts are paid, you\'ll receive a Clearance Certificate, and your name will be cleared from the credit bureau.'
    }
  ]

  return (
    <div className="how-it-works">
      <section className="hero-section reveal">
        <div className="container">
          <h1 className="hero-title">Your Journey to Financial Freedom Starts Here</h1>
          <p className="hero-subtitle">
            We make the Debt Review process simple, safe, and structured. Our team guides you through every step — from initial assessment to completion — keeping your best interests central.
          </p>
        </div>
      </section>

      <section className="steps-section section">
        <div className="container">
          <p className="section-subtitle prose">The process is designed to protect you while creating an affordable repayment plan. Below is an overview of the steps; every case is treated sensitively and individually.</p>
          <div className="steps-timeline">
            {steps.map((step, index) => (
              <div key={step.number} className="step-item">
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                {index < steps.length - 1 && <div className="step-connector"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Journey?</h2>
            <p>Take the first step towards financial freedom today.</p>
            <a href="/" className="btn btn-primary link-underline" onClick={(e) => {
              e.preventDefault()
              navigate('/')
              setTimeout(() => {
                const formElement = document.getElementById('callback-form')
                if (formElement) {
                  formElement.scrollIntoView({ behavior: 'smooth' })
                }
              }, 100)
            }}>
              Request a Callback
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HowItWorks

