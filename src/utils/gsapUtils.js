import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Binds magnetic physics to elements with .magnetic-link on devices supporting hover
export function bindMagneticLinks() {
  const cleanupFns = []
  if (typeof window === 'undefined' || !window.matchMedia('(hover: hover)').matches) {
    return () => {}
  }

  const elements = document.querySelectorAll('.magnetic-link')
  elements.forEach((btn) => {
    const xTo = gsap.quickTo(btn, 'x', { duration: 0.35, ease: 'power3.out' })
    const yTo = gsap.quickTo(btn, 'y', { duration: 0.35, ease: 'power3.out' })

    const handleMouseMove = (e) => {
      const rect = btn.getBoundingClientRect()
      xTo((e.clientX - rect.left - rect.width / 2) * 0.2)
      yTo((e.clientY - rect.top - rect.height / 2) * 0.2)
    }

    const handleMouseLeave = () => {
      xTo(0)
      yTo(0)
      gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.3)' })
    }

    btn.addEventListener('mousemove', handleMouseMove)
    btn.addEventListener('mouseleave', handleMouseLeave)

    cleanupFns.push(() => {
      btn.removeEventListener('mousemove', handleMouseMove)
      btn.removeEventListener('mouseleave', handleMouseLeave)
    })
  })

  return () => {
    cleanupFns.forEach((fn) => fn())
  }
}

// Animates the hero typography from behind the overflow mask
export function playHeroAnimation(delay = 0.2) {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReducedMotion) {
    gsap.to('.hero-text-block .word', { y: '0%', duration: 0.1 })
    gsap.to('.hero-meta .meta-item', { y: 0, opacity: 1, duration: 0.1 })
    return
  }

  // Kinetic words rise into view
  gsap.to('.hero-text-block .word', {
    y: '0%',
    duration: 1.1,
    stagger: 0.08,
    ease: 'expo.out',
    delay,
  })

  // Meta items fade and slide up
  gsap.to('.hero-meta .meta-item', {
    y: 0,
    opacity: 1,
    duration: 0.9,
    stagger: 0.1,
    delay: delay + 0.3,
    ease: 'power3.out',
  })
}

// Resets hero words into hidden position before intro runs
export function resetHeroToHidden() {
  gsap.set('.hero-text-block .word', { y: '115%' })
  gsap.set('.hero-meta .meta-item', { y: 20, opacity: 0 })
}

// Sets up scroll-triggered animations for auto-split headings
export function initScrollAnimations() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReducedMotion) return

  // Masked word reveals for titles
  gsap.utils.toArray('.auto-split').forEach((title) => {
    const words = title.querySelectorAll('.word')
    if (words.length) {
      gsap.from(words, {
        scrollTrigger: { trigger: title, start: 'top 92%' },
        y: '115%',
        duration: 1,
        stagger: 0.04,
        ease: 'expo.out',
      })
    }
  })
}
