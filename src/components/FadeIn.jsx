import { useEffect, useRef } from 'react'

// wraps anything that should fade up when you scroll to it
export default function FadeIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          ref.current.classList.add('show')
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`fade-in ${className}`} style={{ transitionDelay: delay + 'ms' }}>
      {children}
    </div>
  )
}
