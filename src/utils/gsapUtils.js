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
    const xTo = gsap.quickTo(btn, 'x', { duration: 0.4, ease: 'power3.out' })
    const yTo = gsap.quickTo(btn, 'y', { duration: 0.4, ease: 'power3.out' })

    const handleMouseMove = (e) => {
      const rect = btn.getBoundingClientRect()
      xTo((e.clientX - rect.left - rect.width / 2) * 0.25)
      yTo((e.clientY - rect.top - rect.height / 2) * 0.25)
    }

    const handleMouseLeave = () => {
      xTo(0)
      yTo(0)
      gsap.to(btn, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.3)' })
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

// Sets up dynamic theme changes on scroll based on [data-color] sections
export function initThemeScrollTriggers() {
  const panels = gsap.utils.toArray('[data-color]')
  panels.forEach((panel) => {
    ScrollTrigger.create({
      trigger: panel,
      start: 'top 55%',
      end: 'bottom 55%',
      onEnter: () => document.body.setAttribute('data-theme', panel.dataset.color),
      onEnterBack: () => document.body.setAttribute('data-theme', panel.dataset.color),
    })
  })
}

// Animates the hero typography from behind the overflow mask
export function playHeroAnimation(delay = 0.2) {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReducedMotion) {
    gsap.to('.hero-text-block .word', { y: '0%', duration: 0.1 })
    gsap.to('.meta-item', { y: 0, opacity: 1, duration: 0.1 })
    return
  }

  // Words rise into view sequentially
  gsap.to('.hero-text-block .word', {
    y: '0%',
    duration: 1.2,
    stagger: 0.08,
    ease: 'expo.out',
    delay,
  })

  // Meta items fade and slide up
  gsap.to('.meta-item', {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.1,
    delay: delay + 0.35,
    ease: 'power4.out',
  })
}

// Resets hero words into hidden position before intro runs
export function resetHeroToHidden() {
  gsap.set('.hero-text-block .word', { y: '115%' })
  gsap.set('.meta-item', { y: 30, opacity: 0 })
}

// Sets up scroll-triggered animations for auto-split headings, fades, diagrams, and bars
export function initScrollAnimations() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReducedMotion) return

  // Masked word reveals for titles
  gsap.utils.toArray('.auto-split').forEach((title) => {
    const words = title.querySelectorAll('.word')
    if (words.length) {
      gsap.from(words, {
        scrollTrigger: { trigger: title, start: 'top 90%' },
        y: '115%',
        duration: 1,
        stagger: 0.04,
        ease: 'expo.out',
      })
    }
  })

  // Fade-in reveals
  gsap.utils.toArray('.reveal-fade').forEach((el) => {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 90%' },
      y: 20,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    })
  })

  // Architecture diagram nodes
  gsap.utils.toArray('.draw-node').forEach((node) => {
    gsap.from(node, {
      scrollTrigger: { trigger: node, start: 'top 95%', end: 'top 75%', scrub: 1 },
      scale: 0.9,
      opacity: 0,
      transformOrigin: 'center center',
    })
  })

  // Architecture connector lines
  gsap.utils.toArray('.draw-line').forEach((line) => {
    gsap.from(line, {
      scrollTrigger: { trigger: line, start: 'top 90%', end: 'top 70%', scrub: 1 },
      opacity: 0,
      y: -20,
    })
  })

  // Performance benchmark growth bars
  gsap.utils.toArray('.anim-bar').forEach((bar) => {
    const targetWidth = bar.getAttribute('data-width') || '100%'
    bar.style.width = targetWidth
    gsap.fromTo(
      bar,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1.5,
        ease: 'expo.out',
        scrollTrigger: { trigger: bar.closest('.performance-metrics'), start: 'top 85%' },
      },
    )
  })
}
