import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import TestimonialCarousel from '../components/TestimonialCarousel'
import './Benefits.css'

const benefits = [
  {
    title: 'Legal protection from creditors',
    description: 'Once under Debt Review you are protected from legal action and repossession while a fair repayment plan is negotiated.'
  },
  {
    title: 'Reduced monthly payments',
    description: 'We negotiate with your creditors to lower monthly instalments so you can afford to pay and regain stability.'
  },
  {
    title: 'Single, manageable payment',
    description: 'You make one consolidated payment to your debt counsellor who distributes it to your creditors — simpler and less stressful.'
  },
  {
    title: 'Budgeting and counselling support',
    description: 'Our team helps you create a sustainable budget and offers ongoing support throughout the process.'
  },
  {
    title: 'No hidden fees or surprise charges',
    description: 'We are transparent about costs and aim to provide predictable, affordable recovery options.'
  },
  {
    title: 'Clearance certificate at the end',
    description: 'After your repayment plan is completed you receive a Clearance Certificate, confirming your debts are settled.'
  }
]

const faqs = [
  {
    q: 'Will my assets be repossessed during Debt Review?',
    a: 'No — once an application is accepted and the proposal is in place, creditors cannot repossess or proceed with legal action for the debts included.'
  },
  {
    q: 'How long does Debt Review take?',
    a: 'Every case is different; most people complete their plan in 3–6 years depending on the outstanding balances and negotiated terms.'
  },
  {
    q: 'Can I apply if I only have one loan?',
    a: 'Yes — Debt Review can still help if you’re struggling with one or a handful of accounts. We assess affordability and propose practical solutions.'
  }
]

const Benefits = () => {
  const navigate = useNavigate()

  useEffect(() => {
    // Set page title and meta description
    document.title = 'Benefits of Debt Review — Creditoré'
    let desc = document.querySelector('meta[name="description"]')
    if (!desc) {
      desc = document.createElement('meta')
      desc.setAttribute('name', 'description')
      document.head.appendChild(desc)
    }
    desc.setAttribute('content', 'Explore the benefits of Debt Review: legal protection, lower payments, single repayment and expert support. Request a callback from a registered counsellor.')

    // FAQ structured data (JSON-LD)
    const faqs = [
      {
        question: 'Will my assets be repossessed during Debt Review?',
        answer: 'No — once an application is accepted and the proposal is in place, creditors cannot repossess or proceed with legal action for the debts included.'
      },
      {
        question: 'How long does Debt Review take?',
        answer: 'Every case is different; most people complete their plan in 3–6 years depending on the outstanding balances and negotiated terms.'
      },
      {
        question: 'Can I apply if I only have one loan?',
        answer: 'Yes — Debt Review can still help if you’re struggling with one or a handful of accounts. We assess affordability and propose practical solutions.'
      }
    ]

    const ld = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': faqs.map(f => ({ '@type': 'Question', 'name': f.question, 'acceptedAnswer': { '@type': 'Answer', 'text': f.answer } }))
    }

    const scriptId = 'benefits-faq-jsonld'
    let script = document.getElementById(scriptId)
    if (!script) {
      script = document.createElement('script')
      script.setAttribute('type', 'application/ld+json')
      script.setAttribute('id', scriptId)
      document.head.appendChild(script)
    }
    script.text = JSON.stringify(ld)

    return () => {
      // cleanup: remove injected script (keep meta description)
      const s = document.getElementById(scriptId)
      if (s) s.remove()
    }
  }, [])

  return (
    <div className="benefits-page">
      <section className="hero-section benefits-hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <h1 className="hero-title">Benefits of Debt Review</h1>
            <p className="hero-subtitle">Debt Review is a legally recognised process that helps you manage and repay your debts in a way that fits your budget and protects you from creditor action.</p>
            <div className="hero-cta">
              <button className="btn btn-primary" onClick={() => navigate('/contact')}>Request a Callback</button>
              <button className="btn" onClick={() => {
                navigate('/contact')
                setTimeout(() => {
                  const el = document.getElementById('callback-form')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }, 80)
              }}>Start Assessment</button>
            </div>
          </div>
          <div className="hero-art" aria-hidden>
            {/* Decorative SVG illustration — lightweight and responsive */}
            <svg width="420" height="320" viewBox="0 0 420 320" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden>
              <defs>
                <linearGradient id="g1" x1="0" x2="1">
                  <stop offset="0" stopColor="#0ea5a0" stopOpacity="0.12" />
                  <stop offset="1" stopColor="#7c3aed" stopOpacity="0.12" />
                </linearGradient>
              </defs>
              <rect x="0" y="0" width="420" height="320" rx="24" fill="url(#g1)" />
              <g transform="translate(24,24)">
                <circle cx="120" cy="80" r="36" fill="#fff" opacity="0.9" />
                <path d="M40 200c40-40 120-48 160-8s72 64 120 56" stroke="#fff" strokeWidth="10" strokeLinecap="round" opacity="0.08" />
                <rect x="220" y="120" width="140" height="72" rx="8" fill="#fff" opacity="0.95" />
              </g>
            </svg>
          </div>
        </div>
      </section>

      <section className="benefits-list section">
        <div className="container">
          <h2 className="section-title">How you benefit</h2>
          <p className="prose">Debt Review focuses on creating a manageable repayment plan and giving you breathing space from aggressive debt collection.</p>
          <div className="benefits-grid">
            {benefits.map((b, i) => (
              <div key={i} className="benefit-card">
                <div className="benefit-icon" aria-hidden>
                  {/* Simple inline SVG icon for clarity */}
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden focusable="false">
                    <circle cx="12" cy="12" r="10" fill="#ecfccb" />
                    <path d="M7 12.5l2.8 2.8L17 8" stroke="#166534" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3>{b.title}</h3>
                <p>{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialCarousel />

      <section className="faq-section section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((f, idx) => (
              <details key={idx} className="faq-item">
                <summary>{f.q}</summary>
                <div className="faq-answer">
                  <p>{f.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta section">
        <div className="container">
          <div className="cta-inner">
            <h2>Take the First Step Today</h2>
            <p>Speak with a registered counsellor and get a practical plan to regain control of your finances.</p>
            <button className="btn btn-primary" onClick={() => navigate('/contact')}>Request Callback</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Benefits
