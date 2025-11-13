import { Link } from 'react-router-dom'
import logoImg from '../../images/creditore-logo.png'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <Link to="/" className="footer-logo-link" aria-label="Creditoré home">
              <img src={logoImg} alt="Creditoré" className="footer-logo" />
            </Link>
            <p>Registered Debt Counselling practice helping South Africans regain financial independence with dignity and support.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/how-it-works">How It Works</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li>📞 <a href="tel:0215696571">021 569 6571</a></li>
              <li>✉️ <a href="mailto:info@creditore.co.za">info@creditore.co.za</a></li>
              <li>📍 Punters Way, Kenilworth</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                Facebook
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                Instagram
              </a>
              <a href="https://hellopeter.com" target="_blank" rel="noopener noreferrer" aria-label="HelloPeter">
                HelloPeter
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Creditoré. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
