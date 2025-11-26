import { useInView } from '../hooks/useInView'
import {
    HiShieldCheck,
    HiEye,
    HiUserGroup,
    HiAcademicCap,
    HiClipboardCheck
} from 'react-icons/hi'
import './FeatureShowcase.css'
import ResponsiveImage from './ResponsiveImage'

const FeatureShowcase = () => {
    const feature1 = useInView()
    const feature2 = useInView()
    const feature3 = useInView()

    const features = [
        {
            icon: <HiShieldCheck />,
            title: 'Integrity & Transparency',
            description: 'We conduct business with complete honesty and ethical standards. Clear communication means no hidden fees, no surprises—just straightforward guidance you can trust.',
            image: '/images/Pic5.jpg',
            reverse: false,
            ref: feature1
        },
        {
            icon: <HiUserGroup />,
            title: 'Client-Centric Excellence',
            description: 'Your financial well-being is our top priority. Our registered debt counsellors bring proven expertise and personalized solutions tailored to your unique situation.',
            image: '/images/Pic3.jpeg',
            reverse: true,
            ref: feature2
        },
        {
            icon: <HiClipboardCheck />,
            title: 'Full Compliance & Protection',
            description: 'Fully compliant with NCR regulations and POPIA. We ensure your rights are protected throughout the entire debt counselling process with legal safeguards.',
            image: '/images/Pic1.jpeg',
            reverse: false,
            ref: feature3
        }
    ]

    return (
        <section className="feature-showcase">
            <div className="container">
                <h2 className="section-title">Why Choose Creditoré</h2>
                <p className="section-subtitle-center">
                    We combine professional excellence with genuine care for your financial future
                </p>
            </div>

            {features.map((feature, index) => (
                <div
                    key={index}
                    className={`feature-item reveal ${feature.ref.inView ? 'reveal-in' : ''} ${feature.reverse ? 'reverse' : ''
                        }`}
                    ref={feature.ref.ref}
                >
                    <div className="container">
                        <div className="feature-grid">
                            <div className="feature-image">
                                <ResponsiveImage
                                    src={feature.image}
                                    alt={feature.title}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            <div className="feature-content">
                                <div className="feature-icon">{feature.icon}</div>
                                <h3 className="feature-title">{feature.title}</h3>
                                <p className="feature-description">{feature.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Icon Strip */}
            <div className="values-strip">
                <div className="container">
                    <div className="values-strip-grid">
                        <div className="value-item">
                            <HiShieldCheck className="value-strip-icon" />
                            <span>Integrity</span>
                        </div>
                        <div className="value-item">
                            <HiEye className="value-strip-icon" />
                            <span>Transparency</span>
                        </div>
                        <div className="value-item">
                            <HiUserGroup className="value-strip-icon" />
                            <span>Client-Centric</span>
                        </div>
                        <div className="value-item">
                            <HiAcademicCap className="value-strip-icon" />
                            <span>Professional</span>
                        </div>
                        <div className="value-item">
                            <HiClipboardCheck className="value-strip-icon" />
                            <span>Compliant</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeatureShowcase
