import { useState } from 'react'
import './FAQ.css'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'What is Debt Review?',
      answer: 'Debt Review is a legal process in South Africa that helps over-indebted consumers restructure their debt repayments. It\'s regulated by the National Credit Act and provides legal protection from creditors while you pay off your debts at reduced rates.'
    },
    {
      question: 'Who qualifies for Debt Review?',
      answer: 'You may qualify for Debt Review if you are over-indebted (struggling to meet your monthly debt obligations) and have a regular income. A registered debt counsellor will assess your financial situation to determine if you qualify.'
    },
    {
      question: 'How long does the Debt Review process take?',
      answer: 'The initial application and court order process typically takes 60-90 days. The repayment period depends on your total debt and payment plan, but usually ranges from 3-5 years. Once all debts are paid, you\'ll receive a Clearance Certificate.'
    },
    {
      question: 'Will Debt Review affect my credit record?',
      answer: 'Yes, during the Debt Review process, your credit record will reflect that you are under Debt Review. However, once you complete the process and receive your Clearance Certificate, this will be removed from your credit record, allowing you to start rebuilding your credit.'
    },
    {
      question: 'What are the costs involved?',
      answer: 'Debt Review involves a once-off application fee and a monthly administration fee. These fees are regulated by the National Credit Regulator and are included in your monthly payment plan. There are no hidden costs, and all fees will be clearly explained before you commit.'
    },
    {
      question: 'Can I still use my credit cards during Debt Review?',
      answer: 'No, once you\'re under Debt Review, you cannot access new credit or use existing credit facilities until you receive your Clearance Certificate. This is a legal requirement to protect you from further debt accumulation.'
    },
    {
      question: 'What happens to my assets during Debt Review?',
      answer: 'Debt Review protects your assets from repossession by creditors. As long as you maintain your monthly payments as agreed, your assets (like your home or car) are protected from being repossessed by creditors.'
    },
    {
      question: 'Can I cancel Debt Review?',
      answer: 'Debt Review can be cancelled, but this process requires legal procedures and may have consequences. It\'s important to discuss your situation with your debt counsellor if you\'re considering cancellation, as you may lose the protections provided by the process.'
    },
    {
      question: 'What information do I need to apply?',
      answer: 'You\'ll need to provide information about your income, expenses, and all your debts (credit cards, loans, store accounts, etc.). You\'ll also need copies of your ID, payslips, and statements from all your creditors.'
    },
    {
      question: 'Is Debt Review the same as debt consolidation?',
      answer: 'No, Debt Review is a legally regulated process that provides court protection and restructures your debt. Debt consolidation typically involves taking out a new loan to pay off existing debts, which doesn\'t provide the same legal protections.'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="faq">
      <section className="hero-section reveal">
        <div className="container">
          <h1 className="hero-title">Frequently Asked Questions</h1>
          <p className="hero-subtitle">
            Find answers to common questions about Debt Review and our services.
          </p>
        </div>
      </section>

      <section className="faq-section section">
        <div className="container">
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
                <button 
                  className="faq-question" 
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
                </button>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Still have questions?</h2>
            <p>Our team is here to help. Contact us for personalized assistance.</p>
            <a href="/contact" className="btn btn-primary link-underline">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQ

