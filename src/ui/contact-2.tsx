import React from 'react'

interface Contact2Props {
	title?: string
	description?: string
	phone?: string
	email?: string
	web?: { label: string; url: string }
}

export const Contact2 = ({
	title = 'Contact Us',
	description = 'We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!',
	phone = '(123) 34567890',
	email = 'email@example.com',
	web = { label: 'shadcnblocks.com', url: 'https://shadcnblocks.com' },
}: Contact2Props) => {
	const [formData, setFormData] = React.useState({
		firstname: '',
		lastname: '',
		email: '',
		subject: '',
		message: '',
	})

	const [isSubmitting, setIsSubmitting] = React.useState(false)
	const [submitted, setSubmitted] = React.useState(false)
	const [errorMessage, setErrorMessage] = React.useState('')
	const [fieldErrors, setFieldErrors] = React.useState<Record<string, string>>({})

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { id, value } = e.target
		setFormData(prev => ({ ...prev, [id]: value }))
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setErrorMessage('')

		// Client-side validation
		const errors: Record<string, string> = {}
		if (!formData.firstname.trim()) errors.firstname = 'First name is required.'
		if (!formData.email.trim()) errors.email = 'Email is required.'
		else if (!/^\S+@\S+\.\S+$/.test(formData.email)) errors.email = 'Please enter a valid email.'
		if (!formData.message.trim()) errors.message = 'Please enter a message.'

		setFieldErrors(errors)
		if (Object.keys(errors).length > 0) {
			const firstField = Object.keys(errors)[0]
			const el = document.getElementById(firstField) as HTMLElement | null
			if (el) el.focus()
			return
		}

		setIsSubmitting(true)

		try {
			const response = await fetch('https://formspree.io/f/mgvrvvbd', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
				body: JSON.stringify({
					firstname: formData.firstname,
					lastname: formData.lastname,
					email: formData.email,
					subject: formData.subject,
					message: formData.message,
					formSource: 'contact-page',
				}),
			})

			if (!response.ok) {
				const errorData = await response.json().catch(() => null)
				const message = errorData?.errors?.[0]?.message || 'Something went wrong. Please try again.'
				throw new Error(message)
			}

			setSubmitted(true)
			setFormData({ firstname: '', lastname: '', email: '', subject: '', message: '' })
			setFieldErrors({})

			setTimeout(() => setSubmitted(false), 4000)
		} catch (err: any) {
			console.error('Contact submission failed:', err)
			setErrorMessage(err?.message || 'Unable to submit the form right now.')
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<section className="contact-section section reveal">
			<div className="container">
				<div className="contact-content">
					<div className="contact-form-container">
						<h2>{title}</h2>
						<p className="hero-subtitle">{description}</p>
						<form id="callback-form" onSubmit={handleSubmit} className="contact-form" noValidate>
							<div className="form-group">
								<label htmlFor="firstname">First Name</label>
								<input
									type="text"
									id="firstname"
									value={formData.firstname}
									onChange={handleChange as any}
									placeholder="Your first name"
									required
									aria-invalid={!!fieldErrors.firstname}
									aria-describedby={fieldErrors.firstname ? 'err-firstname' : undefined}
								/>
								{fieldErrors.firstname && <div id="err-firstname" className="field-error">{fieldErrors.firstname}</div>}
							</div>

							<div className="form-group">
								<label htmlFor="lastname">Last Name</label>
								<input
									type="text"
									id="lastname"
									value={formData.lastname}
									onChange={handleChange as any}
									placeholder="Your last name"
								/>
							</div>

							<div className="form-group">
								<label htmlFor="email">Email</label>
								<input
									type="email"
									id="email"
									value={formData.email}
									onChange={handleChange as any}
									placeholder="your.email@example.com"
									required
									aria-invalid={!!fieldErrors.email}
									aria-describedby={fieldErrors.email ? 'err-email' : undefined}
								/>
								{fieldErrors.email && <div id="err-email" className="field-error">{fieldErrors.email}</div>}
							</div>

							<div className="form-group">
								<label htmlFor="subject">Subject</label>
								<input
									type="text"
									id="subject"
									value={formData.subject}
									onChange={handleChange as any}
									placeholder="Subject"
								/>
							</div>

							<div className="form-group">
								<label htmlFor="message">Message</label>
								<textarea
									id="message"
									value={formData.message}
									onChange={handleChange as any}
									rows={6}
									placeholder="Tell us how we can help you..."
									aria-invalid={!!fieldErrors.message}
									aria-describedby={fieldErrors.message ? 'err-message' : undefined}
								/>
								{fieldErrors.message && <div id="err-message" className="field-error">{fieldErrors.message}</div>}
							</div>

							{submitted && !errorMessage && (
								<div className="success-banner" role="status">Message sent  thanks! We'll be in touch shortly.</div>
							)}

							<button type="submit" className="btn-submit" disabled={isSubmitting || submitted}>
								{isSubmitting ? 'Sending...' : submitted ? 'Message Sent!' : 'Send Message'}
							</button>

							{submitted && !errorMessage && !isSubmitting && (
								<p className="form-feedback form-feedback--success">Thanks! A debt review specialist will be in touch soon.</p>
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
								<div className="contact-icon"></div>
								<div>
									<h3>Phone</h3>
									<a href={`tel:${phone.replace(/[^\d]/g, '')}`}>{phone}</a>
								</div>
							</div>
							<div className="contact-item">
								<div className="contact-icon"></div>
								<div>
									<h3>Email</h3>
									<a href={`mailto:${email}`}>{email}</a>
								</div>
							</div>
							<div className="contact-item">
								<div className="contact-icon"></div>
								<div>
									<h3>Web</h3>
									<a href={web.url} target="_blank" rel="noreferrer">{web.label}</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact2