import { useState, useEffect, useRef } from 'react'
import { useInView } from '../hooks/useInView'
import { HiUsers, HiTrendingDown, HiCheckCircle, HiClock } from 'react-icons/hi'
import './StatsSection.css'

const AnimatedCounter = ({ end, duration = 2000, suffix = '', prefix = '' }) => {
    const [count, setCount] = useState(0)
    const [hasAnimated, setHasAnimated] = useState(false)
    const { ref, inView } = useInView()

    useEffect(() => {
        if (inView && !hasAnimated) {
            setHasAnimated(true)
            let startTime = null
            const startValue = 0

            const animate = (currentTime) => {
                if (!startTime) startTime = currentTime
                const progress = Math.min((currentTime - startTime) / duration, 1)

                // Easing function for smooth animation
                const easeOutQuart = 1 - Math.pow(1 - progress, 4)
                const currentCount = Math.floor(easeOutQuart * (end - startValue) + startValue)

                setCount(currentCount)

                if (progress < 1) {
                    requestAnimationFrame(animate)
                } else {
                    setCount(end)
                }
            }

            requestAnimationFrame(animate)
        }
    }, [inView, end, duration, hasAnimated])

    return (
        <span ref={ref} className="stat-number">
            {prefix}{count.toLocaleString()}{suffix}
        </span>
    )
}

const StatsSection = () => {
    const stats = [
        {
            icon: <HiUsers />,
            value: 5000,
            suffix: '+',
            label: 'Clients Helped',
            description: 'South Africans regained financial freedom'
        },
        {
            icon: <HiTrendingDown />,
            value: 60,
            suffix: '%',
            label: 'Debt Reduced',
            description: 'Average debt reduction achieved'
        },
        {
            icon: <HiCheckCircle />,
            value: 95,
            suffix: '%',
            label: 'Success Rate',
            description: 'Clients complete their debt review'
        },
        {
            icon: <HiClock />,
            value: 10,
            suffix: '+',
            label: 'Years Experience',
            description: 'Helping South Africans with debt'
        }
    ]

    const { ref, inView } = useInView()

    return (
        <section
            ref={ref}
            className={`stats-section ${inView ? 'stats-visible' : ''}`}
        >
            <div className="container">
                <div className="stats-header">
                    <h2 className="stats-title">Trusted by Thousands of South Africans</h2>
                    <p className="stats-subtitle">
                        Our proven track record speaks for itself. Join the thousands who've achieved financial freedom.
                    </p>
                </div>

                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="stat-card"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="stat-icon" aria-hidden="true">
                                {stat.icon}
                            </div>
                            <div className="stat-content">
                                <AnimatedCounter
                                    end={stat.value}
                                    suffix={stat.suffix}
                                    duration={2000}
                                />
                                <h3 className="stat-label">{stat.label}</h3>
                                <p className="stat-description">{stat.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default StatsSection
