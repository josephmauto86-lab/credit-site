import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// IntersectionObserver to reveal elements with .reveal on scroll
function initRevealOnScroll() {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-in')
        obs.unobserve(entry.target)
      }
    })
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 })

  document.querySelectorAll('.reveal').forEach((el) => obs.observe(el))
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// initialize after hydration
setTimeout(initRevealOnScroll, 120)
