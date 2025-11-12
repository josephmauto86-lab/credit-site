import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage('')

    try {
      const response = await fetch('https://formspree.io/f/mgvrvvbd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          formSource: 'contact-page'
        })
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => null)
        const message = errorData?.errors?.[0]?.message || 'Something went wrong. Please try again.'
        throw new Error(message)
      }

      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      })

      setTimeout(() => {
        setSubmitted(false)
      }, 3500)
    } catch (error) {
      console.error('Contact submission failed:', error)
      setErrorMessage(error.message || 'Unable to submit the form right now.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="contact">
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">We're Here to Help</h1>
          <p className="hero-subtitle">
            Have questions or need urgent assistance? Reach out to us.
          </p>
        </div>
      </section>

      <section className="contact-section section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-form-container">
              <h2>Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="021 123 4567"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
              <button type="submit" className="btn-submit" disabled={isSubmitting || submitted}>
                {isSubmitting ? 'Sending...' : submitted ? 'Message Sent!' : 'Send Message'}
                </button>
              {submitted && !errorMessage && !isSubmitting && (
                <p className="form-feedback form-feedback--success">
                  Thanks! A debt review specialist will be in touch soon.
                </p>
              )}
              {errorMessage && (
                <p className="form-feedback form-feedback--error">{errorMessage}</p>
              )}
              </form>
            </div>

            <div className="contact-details">
              <h2>Contact Details</h2>
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div>
                    <h3>Phone</h3>
                    <a href="tel:0215696571">021 569 6571</a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">✉️</div>
                  <div>
                    <h3>Email</h3>
                    <a href="mailto:info@creditore.co.za">info@creditore.co.za</a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div>
                    <h3>Office Address</h3>
                    <p>Punters Way, Kenilworth</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">💬</div>
                  <div>
                    <h3>WhatsApp</h3>
                    <a href="https://wa.me/27215696571" target="_blank" rel="noopener noreferrer">
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              <div className="map-container">
                <iframe
                  title="Creditoré Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.1234567890123!2d18.4784!3d-34.0000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDAwJzAwLjAiUyAxOMKwMjgnNDIuMiJF!5e0!3m2!1sen!2sza!4v1234567890123!5m2!1sen!2sza"
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: '10px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <p className="map-note">📍 Punters Way, Kenilworth, Cape Town</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

