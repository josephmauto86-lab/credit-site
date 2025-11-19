import { useState, useEffect } from 'react'
import './TestimonialCarousel.css'

const testimonials = [
  {
    id: 1,
    text: "Creditoré helped me when I felt completely overwhelmed. Their service is professional and compassionate.",
    author: "Lindiwe M."
  },
  {
    id: 2,
    text: "My payments were reduced by almost half. I feel like I have my life back.",
    author: "Brandon S."
  },
  {
    id: 3,
    text: "The process was simple and transparent. Highly recommended!",
    author: "Charlene P."
  },
  {
    id: 4,
    text: "I was struggling with multiple debts and Creditoré helped me consolidate everything. The relief is indescribable.",
    author: "Thabo K."
  },
  {
    id: 5,
    text: "Professional, understanding, and always available when I needed support. Thank you Creditoré!",
    author: "Nomsa D."
  }
]

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  return (
    <section className="testimonials-section reveal">
      <div className="container">
        <h2 className="section-title">Real Stories. Real Relief. Real Results.</h2>
        <div className="testimonial-carousel">
          <button className="carousel-btn prev" onClick={goToPrevious} aria-label="Previous testimonial">
            ‹
          </button>
          <div className="testimonial-slide">
            <div className="testimonial-content">
              <p className="testimonial-text">"{testimonials[currentIndex].text}"</p>
              <p className="testimonial-author">– {testimonials[currentIndex].author}</p>
            </div>
          </div>
          <button className="carousel-btn next" onClick={goToNext} aria-label="Next testimonial">
            ›
          </button>
        </div>
        <div className="carousel-indicators">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialCarousel
