import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './ConsentBanner.css'

const STORAGE_KEY = 'creditore_consent_v1'

const ConsentBanner = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (!saved) setOpen(true)
    } catch {
      setOpen(true)
    }
  }, [])

  const acceptAll = () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ acceptedAt: Date.now(), version: 1 }))
    } catch {}
    setOpen(false)
  }

  if (!open) return (
    <div className="sticky-legal">
      <Link to="/privacy" aria-label="Privacy & Terms">Privacy & Terms</Link>
    </div>
  )

  return (
    <>
      <div className="sticky-legal" aria-hidden={open}>
        <Link to="/privacy" aria-label="Privacy & Terms">Privacy & Terms</Link>
      </div>
      <div className="consent-backdrop" role="dialog" aria-modal="true" aria-label="Privacy and Terms consent">
        <div className="consent-modal">
          <div className="consent-header">
            <h3>Privacy & Terms</h3>
          </div>
          <div className="consent-body">
            <p>
              We use your details solely to provide a confidential debt assessment and contact you at your preferred time.
              By continuing, you agree to our processing of your information in line with POPIA.
            </p>
            <div className="consent-links">
              <Link to="/privacy" onClick={() => setOpen(false)}>Read Privacy Policy</Link>
              <Link to="/terms" onClick={() => setOpen(false)}>Read Terms & Conditions</Link>
            </div>
          </div>
          <div className="consent-actions">
            <button className="consent-btn secondary" onClick={() => setOpen(false)}>Maybe later</button>
            <button className="consent-btn primary" onClick={acceptAll}>I Agree</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ConsentBanner


