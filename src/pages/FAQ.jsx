import { useState, useEffect } from 'react'
import {
  HiOutlineBookOpen,
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlineChartBar,
  HiOutlineCurrencyDollar,
  HiOutlineCreditCard,
  HiOutlineHome,
  HiOutlineXCircle,
  HiOutlineDocumentText,
  HiOutlineRefresh,
  HiOutlineShieldCheck,
  HiOutlineUsers,
  HiOutlineStar,
  HiOutlineCog,
  HiOutlineExclamation,
  HiSearch,
  HiX
} from 'react-icons/hi'
import './FAQ.css'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const faqData = [
    {
      category: 'basics',
      icon: <HiOutlineBookOpen />,
      question: 'What is Debt Review?',
      answer: 'Debt Review is a legal process in South Africa that helps over-indebted consumers restructure their debt repayments. It\'s regulated by the National Credit Act and provides legal protection from creditors while you pay off your debts at reduced rates.',
      tags: ['debt review', 'legal', 'protection']
    },
    {
      category: 'basics',
      icon: <HiOutlineCheckCircle />,
      question: 'Who qualifies for Debt Review?',
      answer: 'You may qualify for Debt Review if you are over-indebted (struggling to meet your monthly debt obligations) and have a regular income. A registered debt counsellor will assess your financial situation to determine if you qualify.',
      tags: ['qualification', 'eligibility', 'requirements']
    },
    {
      category: 'process',
      icon: <HiOutlineClock />,
      question: 'How long does the Debt Review process take?',
      answer: 'The initial application and court order process typically takes 60-90 days. The repayment period depends on your total debt and payment plan, but usually ranges from 3-5 years. Once all debts are paid, you\'ll receive a Clearance Certificate.',
      tags: ['timeline', 'duration', 'process']
    },
    {
      category: 'impact',
      icon: <HiOutlineChartBar />,
      question: 'Will Debt Review affect my credit record?',
      answer: 'Yes, during the Debt Review process, your credit record will reflect that you are under Debt Review. However, once you complete the process and receive your Clearance Certificate, this will be removed from your credit record, allowing you to start rebuilding your credit.',
      tags: ['credit', 'credit score', 'record']
    },
    {
      category: 'costs',
      icon: <HiOutlineCurrencyDollar />,
      question: 'What are the costs involved?',
      answer: 'Debt Review involves a once-off application fee and a monthly administration fee. These fees are regulated by the National Credit Regulator and are included in your monthly payment plan. There are no hidden costs, and all fees will be clearly explained before you commit.',
      tags: ['fees', 'costs', 'pricing']
    },
    {
      category: 'restrictions',
      icon: <HiOutlineCreditCard />,
      question: 'Can I still use my credit cards during Debt Review?',
      answer: 'No, once you\'re under Debt Review, you cannot access new credit or use existing credit facilities until you receive your Clearance Certificate. This is a legal requirement to protect you from further debt accumulation.',
      tags: ['credit cards', 'restrictions', 'limitations']
    },
    {
      category: 'protection',
      icon: <HiOutlineHome />,
      question: 'What happens to my assets during Debt Review?',
      answer: 'Debt Review protects your assets from repossession by creditors. As long as you maintain your monthly payments as agreed, your assets (like your home or car) are protected from being repossessed by creditors.',
      tags: ['assets', 'protection', 'repossession']
    },
    {
      category: 'process',
      icon: <HiOutlineXCircle />,
      question: 'Can I cancel Debt Review?',
      answer: 'Debt Review can be cancelled, but this process requires legal procedures and may have consequences. It\'s important to discuss your situation with your debt counsellor if you\'re considering cancellation, as you may lose the protections provided by the process.',
      tags: ['cancellation', 'exit', 'withdrawal']
    },
    {
      category: 'application',
      icon: <HiOutlineDocumentText />,
      question: 'What information do I need to apply?',
      answer: 'You\'ll need to provide information about your income, expenses, and all your debts (credit cards, loans, store accounts, etc.). You\'ll also need copies of your ID, payslips, and statements from all your creditors.',
      tags: ['application', 'documents', 'requirements']
    },
    {
      category: 'basics',
      icon: <HiOutlineRefresh />,
      question: 'Is Debt Review the same as debt consolidation?',
      answer: 'No, Debt Review is a legally regulated process that provides court protection and restructures your debt. Debt consolidation typically involves taking out a new loan to pay off existing debts, which doesn\'t provide the same legal protections.',
      tags: ['consolidation', 'comparison', 'difference']
    },
    {
      category: 'protection',
      icon: <HiOutlineShieldCheck />,
      question: 'What legal protections does Debt Review provide?',
      answer: 'Debt Review provides legal protection from creditor harassment, legal action, and asset repossession. Once you\'re under Debt Review, creditors cannot take legal action against you as long as you maintain your agreed payments.',
      tags: ['legal', 'protection', 'rights']
    },
    {
      category: 'impact',
      icon: <HiOutlineUsers />,
      question: 'Will Debt Review affect my spouse or family?',
      answer: 'Debt Review only affects the person who applies for it. However, if you have joint debts with your spouse, those debts will be included in the process. Your spouse\'s individual credit record will not be affected unless they are co-signed on your debts.',
      tags: ['family', 'spouse', 'joint debt']
    }
  ]

  const categories = [
    { id: 'all', name: 'All Questions', icon: <HiOutlineStar /> },
    { id: 'basics', name: 'Basics', icon: <HiOutlineBookOpen /> },
    { id: 'process', name: 'Process', icon: <HiOutlineCog /> },
    { id: 'costs', name: 'Costs & Fees', icon: <HiOutlineCurrencyDollar /> },
    { id: 'impact', name: 'Impact', icon: <HiOutlineChartBar /> },
    { id: 'protection', name: 'Protection', icon: <HiOutlineShieldCheck /> },
    { id: 'application', name: 'Application', icon: <HiOutlineDocumentText /> },
    { id: 'restrictions', name: 'Restrictions', icon: <HiOutlineExclamation /> }
  ]

  const filteredFaqs = faqData.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory
    const matchesSearch = searchQuery === '' ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    return matchesCategory && matchesSearch
  })

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="faq">
      <section className="hero-section">
        <div className="hero-background"></div>
        <div className="container">
          <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
            <span className="hero-badge">💡 Knowledge Base</span>
            <h1 className="hero-title">Frequently Asked Questions</h1>
            <p className="hero-subtitle">
              Everything you need to know about Debt Review and our services
            </p>

            <div className="search-container">
              <div className="search-wrapper">
                <span className="search-icon"><HiSearch /></span>
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search for answers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button
                    className="search-clear"
                    onClick={() => setSearchQuery('')}
                    aria-label="Clear search"
                  >
                    <HiX />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="categories-section">
        <div className="container">
          <div className="categories-scroll">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-pill ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory(category.id)
                  setOpenIndex(null)
                }}
              >
                <span className="category-icon">{category.icon}</span>
                <span className="category-name">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-section section">
        <div className="container">
          {filteredFaqs.length > 0 ? (
            <>
              <div className="faq-stats">
                <span className="faq-count">
                  {filteredFaqs.length} {filteredFaqs.length === 1 ? 'question' : 'questions'}
                  {searchQuery && ' found'}
                </span>
              </div>

              <div className="faq-list">
                {filteredFaqs.map((faq, index) => (
                  <div
                    key={index}
                    className={`faq-item ${openIndex === index ? 'open' : ''}`}
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <button
                      className="faq-question"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={openIndex === index}
                    >
                      <div className="faq-question-content">
                        <span className="faq-icon-wrapper">{faq.icon}</span>
                        <span className="faq-question-text">{faq.question}</span>
                      </div>
                      <span className="faq-toggle">
                        <span className="faq-toggle-icon">{openIndex === index ? '−' : '+'}</span>
                      </span>
                    </button>
                    <div className="faq-answer">
                      <div className="faq-answer-content">
                        <p>{faq.answer}</p>
                        <div className="faq-tags">
                          {faq.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="faq-tag">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="no-results">
              <span className="no-results-icon"><HiSearch /></span>
              <h3>No questions found</h3>
              <p>Try adjusting your search or browse different categories</p>
              <button
                className="btn-reset"
                onClick={() => {
                  setSearchQuery('')
                  setActiveCategory('all')
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-background"></div>
        <div className="container">
          <div className="cta-content">
            <div className="cta-icon-large"><HiOutlineBookOpen /></div>
            <h2>Still have questions?</h2>
            <p>Our expert team is ready to provide personalized assistance and guide you through your debt review journey.</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">
                <span>Contact Us</span>
                <span className="btn-arrow">→</span>
              </a>
              <a href="tel:+27123456789" className="btn btn-secondary">
                <span>📞 Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQ
