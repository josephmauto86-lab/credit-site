import { Link } from 'react-router-dom'
import { HiShieldCheck, HiLockClosed, HiCheckCircle, HiTrendingUp } from 'react-icons/hi'
import { useInView } from '../hooks/useInView'
import './TrustBanner.css'

const TrustBanner = () => {
    const banner = useInView()

    return (
        <section className={`trust-banner reveal ${banner.inView ? 'reveal-in' : ''}`} ref={banner.ref}>
            <div className="trust-banner-overlay"></div>
            <div className="container">
                <div className="trust-banner-content">
                    <h2 className="trust-banner-title">The Path to Financial Freedom</h2>
                    <p className="trust-banner-text">
                        Debt doesn't define you. With the right guidance and a structured plan, you can break free from
                        financial stress and build a secure future. Our debt counselling process is designed to be transparent,
                        legally compliant, and results-focused.
                    </p>

                    <div className="trust-badges">
                        <div className="trust-badge">
                            <HiShieldCheck className="trust-badge-icon" />
                            <div className="trust-badge-content">
                                <h4>NCR Registered</h4>
                                <p>Certified debt counsellors</p>
                            </div>
                        </div>
                        <div className="trust-badge">
                            <HiLockClosed className="trust-badge-icon" />
                            <div className="trust-badge-content">
                                <h4>POPIA Aligned</h4>
                                <p>Your data is protected</p>
                            </div>
                        </div>
                        <div className="trust-badge">
                            <HiCheckCircle className="trust-badge-icon" />
                            <div className="trust-badge-content">
                                <h4>Confidential</h4>
                                <p>Private assessments</p>
                            </div>
                        </div>
                        <div className="trust-badge">
                            <HiTrendingUp className="trust-badge-icon" />
                            <div className="trust-badge-content">
                                <h4>Results-Focused</h4>
                                <p>Reduced payments</p>
                            </div>
                        </div>
                    </div>

                    <div className="trust-banner-cta">
                        <Link to="/how-it-works" className="btn btn-primary">
                            Discover Your Options
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TrustBanner
