import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

let lenisInstance = null

export function initSmoothScroll() {
  if (typeof window === 'undefined') return () => {}

  // Respect user preference for reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReducedMotion) return () => {}

  if (lenisInstance) {
    lenisInstance.destroy()
    lenisInstance = null
  }

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 0.95,
    touchMultiplier: 1.5,
  })

  lenisInstance = lenis

  // Synchronize Lenis scroll position with GSAP ScrollTrigger
  lenis.on('scroll', ScrollTrigger.update)

  const rafCallback = (time) => {
    lenis.raf(time * 1000)
  }

  gsap.ticker.add(rafCallback)
  gsap.ticker.lagSmoothing(0)

  // Smooth scroll for in-page anchor links (e.g. #work, #skills, #contact)
  const handleAnchorClick = (e) => {
    const target = e.target.closest('a[href^="#"]')
    if (!target) return
    const href = target.getAttribute('href')
    if (href && href.length > 1) {
      const element = document.querySelector(href)
      if (element) {
        e.preventDefault()
        lenis.scrollTo(element, {
          offset: 0,
          duration: 1.3,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        })
      }
    }
  }

  document.addEventListener('click', handleAnchorClick)

  return () => {
    document.removeEventListener('click', handleAnchorClick)
    gsap.ticker.remove(rafCallback)
    lenis.destroy()
    lenisInstance = null
  }
}

export function getLenis() {
  return lenisInstance
}
