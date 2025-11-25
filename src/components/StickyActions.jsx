import { useState, useEffect } from 'react'
import './StickyActions.css'

const StickyActions = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <div
      className={`sticky-actions ${isVisible ? 'visible' : ''}`}
      aria-label="Quick contact actions"
    >
      <a
        className="sticky-btn sticky-whatsapp"
        href="https://wa.me/27215696571"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        WhatsApp
      </a>
      <a
        className="sticky-btn sticky-call"
        href="tel:0215696571"
        aria-label="Call now"
      >
        Call Now
      </a>
    </div>
  )
}

export default StickyActions


