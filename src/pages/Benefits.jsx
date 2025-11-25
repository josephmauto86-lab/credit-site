import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Shield,
  TrendingDown,
  Wallet,
  Users,
  CheckCircle2,
  FileText,
  ChevronDown,
  Clock,
  Award,
  Smile
} from 'lucide-react'
import TestimonialCarousel from '../components/TestimonialCarousel'
import './Benefits.css'

const benefits = [
  {
    icon: Shield,
    title: 'Legal Protection',
    description: 'Immediate protection from legal action and asset repossession while we negotiate a fair plan.'
  },
  {
    icon: TrendingDown,
    title: 'Reduced Instalments',
    description: 'We negotiate with creditors to lower your monthly payments by up to 60%, making them affordable.'
  },
  {
    icon: Wallet,
    title: 'One Monthly Payment',
    description: 'Simplify your life with a single consolidated payment distributed to all your credit providers.'
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: 'Dedicated financial counsellors to guide you through budgeting and the entire review process.'
  },
  {
    icon: Smile,
    title: 'No Hidden Fees',
    description: 'Complete transparency on costs. All fees are regulated by the National Credit Regulator (NCR).'
  },
  {
    icon: Award,
    title: 'Clearance Certificate',
    description: 'Receive a Clearance Certificate upon completion, clearing your credit record for a fresh start.'
  }
]

const stats = [
  { label: 'Years Experience', value: '15+' },
  { label: 'Clients Helped', value: '50k+' },
  { label: 'Debt Reduced', value: 'R500m+' },
  { label: 'Success Rate', value: '98%' }
]

const faqs = [
  {
    q: 'Will my assets be repossessed during Debt Review?',
    a: 'No. Once you are under Debt Review, you are legally protected. Creditors cannot take legal action or repossess your assets (like your home or car) as long as you stick to the repayment plan.'
  },
  {
    q: 'How long does the process take?',
    a: 'It typically takes 3 to 5 years, depending on your debt amount and the negotiated repayment terms. However, you can exit early if you settle your debts sooner.'
  },
  {
    q: 'Can I still use my credit cards?',
    a: 'No. To help you get out of debt, you cannot incur further debt while under review. This is a necessary step to financial freedom.'
  },
  {
    q: 'Does it cover all my debts?',
    a: 'It covers most unsecured debt (credit cards, personal loans, overdrafts) and secured debt (home loans, vehicle finance). Service agreements like gym memberships or contracts are usually excluded.'
  }
]

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <button className="faq-question" onClick={onClick}>
        <span>{question}</span>
        <ChevronDown className={`faq-icon ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="faq-answer-wrapper"
          >
            <div className="faq-answer">
              <p>{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const Benefits = () => {
  const navigate = useNavigate()
  const [openFaqIndex, setOpenFaqIndex] = useState(0)

  useEffect(() => {
    document.title = 'Benefits of Debt Review — Creditoré'
    // ... (keep existing meta tag logic if needed, or simplify)
  }, [])

  return (
    <div className="benefits-page">
      {/* Hero Section */}
      <section className="benefits-hero">
        <div className="container hero-inner">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="hero-badge">Financial Freedom Awaits</span>
            <h1 className="hero-title">Why Choose <br />Debt Review?</h1>
            <p className="hero-subtitle">
              Regain control of your life with a legally protected process designed to reduce your monthly payments and secure your assets.
            </p>
            <div className="hero-cta">
              <button className="btn btn-primary" onClick={() => navigate('/contact')}>
                Get Free Assessment
              </button>
              <button className="btn btn-outline-white" onClick={() => {
                const el = document.getElementById('benefits-list')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}>
                Explore Benefits
              </button>
            </div>
          </motion.div>

          <motion.div
            className="hero-art"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="hero-image-wrapper">
              <img src="/images/Pic6.jpg" alt="Happy couple debt free" />
              <div className="floating-card card-1">
                <CheckCircle2 className="text-green-500" size={20} />
                <span>Assets Protected</span>
              </div>
              <div className="floating-card card-2">
                <TrendingDown className="text-blue-500" size={20} />
                <span>Payments Reduced</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Benefits Grid */}
      <section id="benefits-list" className="benefits-list section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Comprehensive Protection</h2>
            <p className="section-subtitle">We handle the negotiations so you can focus on living.</p>
          </div>

          <div className="benefits-grid">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                className="benefit-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="benefit-icon-wrapper">
                  <b.icon size={32} strokeWidth={1.5} />
                </div>
                <h3>{b.title}</h3>
                <p>{b.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* FAQ Section */}
      <section className="faq-section section">
        <div className="container">
          <div className="faq-layout">
            <div className="faq-header">
              <h2 className="section-title">Common Questions</h2>
              <p>Everything you need to know about the process.</p>
              <button className="btn btn-secondary mt-4" onClick={() => navigate('/contact')}>
                Ask a Question
              </button>
            </div>
            <div className="faq-list">
              {faqs.map((f, idx) => (
                <AccordionItem
                  key={idx}
                  question={f.q}
                  answer={f.a}
                  isOpen={openFaqIndex === idx}
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? -1 : idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta section">
        <div className="container">
          <div className="cta-card">
            <div className="cta-content">
              <h2>Ready to start fresh?</h2>
              <p>Get a free, no-obligation assessment today.</p>
            </div>
            <div className="cta-actions">
              <button className="btn btn-primary" onClick={() => navigate('/contact')}>
                Request Callback
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Benefits
