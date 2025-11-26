import { useState } from 'react'
import { HiCheckCircle } from 'react-icons/hi'
import { useInView } from '../hooks/useInView'
import './ProcessTimeline.css'

const ProcessTimeline = () => {
    const [activeStep, setActiveStep] = useState(null)
    const { ref, inView } = useInView()

    const steps = [
        {
            number: 1,
            title: 'Free Assessment',
            description: 'We review your financial situation and determine if debt review is right for you.',
            details: 'Our NCR-registered counsellors conduct a thorough analysis of your income, expenses, and debts. This confidential assessment is completely free with no obligation.',
            duration: '30 minutes'
        },
        {
            number: 2,
            title: 'Application & Documentation',
            description: 'We help you gather necessary documents and submit your application.',
            details: 'We guide you through the paperwork process, ensuring all documentation is complete and accurate. Our team handles communication with credit bureaus.',
            duration: '1-2 days'
        },
        {
            number: 3,
            title: 'Creditor Negotiation',
            description: 'We negotiate with your creditors for reduced payments and interest rates.',
            details: 'Our experienced team works directly with your creditors to restructure your debt, aiming for lower monthly payments and reduced interest rates.',
            duration: '2-4 weeks'
        },
        {
            number: 4,
            title: 'Court Order',
            description: 'Your repayment plan is formalized through a court order for legal protection.',
            details: 'Once creditors agree, the plan is submitted to court. This provides you with legal protection from creditor harassment and repossession.',
            duration: '4-8 weeks'
        },
        {
            number: 5,
            title: 'Repayment Period',
            description: 'You make one affordable monthly payment while we distribute to creditors.',
            details: 'Make a single, manageable payment each month. We handle all distributions to your creditors and provide regular progress updates.',
            duration: '3-5 years'
        },
        {
            number: 6,
            title: 'Debt Freedom',
            description: 'Complete your plan and receive your clearance certificate.',
            details: 'Upon completion, you receive a clearance certificate and are removed from debt review. Your credit record is updated, and you are debt-free!',
            duration: 'Freedom!'
        }
    ]

    return (
        <section
            ref={ref}
            className={`process-timeline-section ${inView ? 'timeline-visible' : ''}`}
        >
            <div className="container">
                <div className="timeline-header">
                    <h2 className="timeline-title">Your Journey to Financial Freedom</h2>
                    <p className="timeline-subtitle">
                        A clear, step-by-step process designed to help you regain control of your finances
                    </p>
                </div>

                <div className="timeline">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`timeline-item ${activeStep === index ? 'active' : ''}`}
                            style={{ animationDelay: `${index * 100}ms` }}
                            onMouseEnter={() => setActiveStep(index)}
                            onMouseLeave={() => setActiveStep(null)}
                        >
                            <div className="timeline-marker">
                                <div className="timeline-number">{step.number}</div>
                                <div className="timeline-connector"></div>
                            </div>

                            <div className="timeline-content">
                                <div className="timeline-card">
                                    <div className="timeline-card-header">
                                        <h3 className="timeline-step-title">{step.title}</h3>
                                        <span className="timeline-duration">{step.duration}</span>
                                    </div>
                                    <p className="timeline-description">{step.description}</p>

                                    {activeStep === index && (
                                        <div className="timeline-details">
                                            <p>{step.details}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="timeline-cta">
                    <HiCheckCircle className="timeline-cta-icon" />
                    <p>Ready to start your journey?</p>
                    <button
                        className="btn btn-primary"
                        onClick={() => window.location.href = '/contact'}
                    >
                        Get Your Free Assessment
                    </button>
                </div>
            </div>
        </section>
    )
}

export default ProcessTimeline
