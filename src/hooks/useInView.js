import { useEffect, useRef, useState } from 'react'

export function useInView(options = { threshold: 0.15, root: null, rootMargin: '0px' }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        observer.unobserve(entry.target)
      }
    }, options)

    observer.observe(element)
    return () => observer.disconnect()
  }, [options])

  return { ref, inView }
}


