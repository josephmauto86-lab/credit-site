import React from 'react';
import {
  User,
  Mail,
  FileText,
  MessageSquare,
  Phone,
  Globe,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  Loader2
} from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = React.useState({
    firstname: '',
    lastname: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
  const [fieldErrors, setFieldErrors] = React.useState({});
  const [focusedField, setFocusedField] = React.useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    // Clear field error on change
    if (fieldErrors[id]) {
      setFieldErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[id];
        return newErrors;
      });
    }
  };

  const handleFocus = (fieldId) => {
    setFocusedField(fieldId);
  };

  const handleBlur = () => {
    setFocusedField('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    const errors = {};
    if (!formData.firstname.trim()) errors.firstname = 'First name is required.';
    if (!formData.email.trim()) errors.email = 'Email is required.';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) errors.email = 'Please enter a valid email.';
    if (!formData.message.trim()) errors.message = 'Please enter a message.';
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) {
      const firstField = Object.keys(errors)[0];
      const el = document.getElementById(firstField);
      if (el) el.focus();
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch('https://formspree.io/f/mgvrvvbd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formSource: 'contact-page',
        }),
      });
      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        const message = errorData?.errors?.[0]?.message || 'Something went wrong. Please try again.';
        throw new Error(message);
      }
      setSubmitted(true);
      setFormData({ firstname: '', lastname: '', email: '', subject: '', message: '' });
      setFieldErrors({});
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setErrorMessage(err?.message || 'Unable to submit the form right now.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section section">
      <div className="contact-background-gradient"></div>
      <div className="container">
        <div className="contact-header">
          <h1 className="contact-title">Get In Touch</h1>
          <p className="contact-subtitle">Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>

        <div className="contact-content">
          <div className="contact-form-wrapper">
            <div className="contact-form-container">
              <div className="form-header">
                <h2>Send us a Message</h2>
                <p>Fill out the form below and our team will get back to you within 24 hours.</p>
              </div>

              <form id="callback-form" onSubmit={handleSubmit} className="contact-form" noValidate>
                <div className="form-row">
                  <div className={`form-group ${formData.firstname || focusedField === 'firstname' ? 'has-value' : ''} ${fieldErrors.firstname ? 'has-error' : ''}`}>
                    <input
                      type="text"
                      id="firstname"
                      value={formData.firstname}
                      onChange={handleChange}
                      onFocus={() => handleFocus('firstname')}
                      onBlur={handleBlur}
                      required
                      aria-invalid={!!fieldErrors.firstname}
                      aria-describedby={fieldErrors.firstname ? 'err-firstname' : undefined}
                    />
                    <label htmlFor="firstname">
                      <User className="label-icon" size={18} />
                      <span className="label-text">First Name</span>
                    </label>
                    {fieldErrors.firstname && <div id="err-firstname" className="field-error">{fieldErrors.firstname}</div>}
                  </div>

                  <div className={`form-group ${formData.lastname || focusedField === 'lastname' ? 'has-value' : ''}`}>
                    <input
                      type="text"
                      id="lastname"
                      value={formData.lastname}
                      onChange={handleChange}
                      onFocus={() => handleFocus('lastname')}
                      onBlur={handleBlur}
                    />
                    <label htmlFor="lastname">
                      <User className="label-icon" size={18} />
                      <span className="label-text">Last Name</span>
                    </label>
                  </div>
                </div>

                <div className={`form-group ${formData.email || focusedField === 'email' ? 'has-value' : ''} ${fieldErrors.email ? 'has-error' : ''}`}>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                    required
                    aria-invalid={!!fieldErrors.email}
                    aria-describedby={fieldErrors.email ? 'err-email' : undefined}
                  />
                  <label htmlFor="email">
                    <Mail className="label-icon" size={18} />
                    <span className="label-text">Email Address</span>
                  </label>
                  {fieldErrors.email && <div id="err-email" className="field-error">{fieldErrors.email}</div>}
                </div>

                <div className={`form-group ${formData.subject || focusedField === 'subject' ? 'has-value' : ''}`}>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => handleFocus('subject')}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="subject">
                    <FileText className="label-icon" size={18} />
                    <span className="label-text">Subject</span>
                  </label>
                </div>

                <div className={`form-group ${formData.message || focusedField === 'message' ? 'has-value' : ''} ${fieldErrors.message ? 'has-error' : ''}`}>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={handleBlur}
                    rows={6}
                    aria-invalid={!!fieldErrors.message}
                    aria-describedby={fieldErrors.message ? 'err-message' : undefined}
                  />
                  <label htmlFor="message">
                    <MessageSquare className="label-icon" size={18} />
                    <span className="label-text">Your Message</span>
                  </label>
                  {fieldErrors.message && <div id="err-message" className="field-error">{fieldErrors.message}</div>}
                </div>

                {submitted && !errorMessage && (
                  <div className="success-banner" role="status">
                    <CheckCircle className="success-icon" size={20} />
                    <span>Message sent successfully! We'll be in touch shortly.</span>
                  </div>
                )}

                {errorMessage && (
                  <div className="error-banner" role="alert">
                    <AlertTriangle className="error-icon" size={20} />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <button type="submit" className="btn-submit" disabled={isSubmitting || submitted}>
                  <span className="btn-content">
                    {isSubmitting && <Loader2 className="btn-spinner" size={20} />}
                    <span className="btn-text">
                      {isSubmitting ? 'Sending...' : submitted ? 'Message Sent!' : 'Send Message'}
                    </span>
                    {!isSubmitting && !submitted && <ArrowRight className="btn-arrow" size={20} />}
                  </span>
                </button>
              </form>
            </div>
          </div>

          <div className="contact-sidebar">
            <div className="contact-details-card">
              <h3>Contact Information</h3>
              <p className="contact-details-subtitle">Reach out to us directly through any of these channels</p>

              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-item-icon">
                    <Phone size={24} />
                  </div>
                  <div className="contact-item-content">
                    <h4>Phone</h4>
                    <a href="tel:0215696571">021 569 6571</a>
                    <p className="contact-item-meta">Mon-Fri, 8am-5pm</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-item-icon">
                    <Mail size={24} />
                  </div>
                  <div className="contact-item-content">
                    <h4>Email</h4>
                    <a href="mailto:info@creditore.co.za">info@creditore.co.za</a>
                    <p className="contact-item-meta">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-item-icon">
                    <Globe size={24} />
                  </div>
                  <div className="contact-item-content">
                    <h4>Website</h4>
                    <a href="https://creditore.co.za" target="_blank" rel="noreferrer">creditore.co.za</a>
                    <p className="contact-item-meta">Visit our main website</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-hours-card">
              <h3>Business Hours</h3>
              <div className="hours-list">
                <div className="hours-item">
                  <span className="day">Monday - Friday</span>
                  <span className="time">8:00 AM - 5:00 PM</span>
                </div>
                <div className="hours-item">
                  <span className="day">Saturday</span>
                  <span className="time">9:00 AM - 1:00 PM</span>
                </div>
                <div className="hours-item">
                  <span className="day">Sunday</span>
                  <span className="time">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;