import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Components
import IntroLoader from './components/IntroLoader'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ApproachSection from './components/ApproachSection'
import ProjectShowcase from './components/ProjectShowcase'
import ExperienceSection from './components/ExperienceSection'
import SkillsSection from './components/SkillsSection'
import ContactSection from './components/ContactSection'

// Utilities
import { checkShouldPlayIntro } from './utils/introUtils'
import {
  bindMagneticLinks,
  playHeroAnimation,
  resetHeroToHidden,
  initScrollAnimations,
} from './utils/gsapUtils'

export default function App() {
  const [shouldRunIntro, setShouldRunIntro] = useState(() => checkShouldPlayIntro())
  const containerRef = useRef(null)

  // Complete intro and trigger hero kinetic animation
  const handleIntroComplete = () => {
    sessionStorage.setItem('portfolio_intro_seen', 'true')
    setShouldRunIntro(false)
    playHeroAnimation(0.2)
  }

  // Allow clicking logo to reboot / replay intro
  const handleReplayIntro = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    resetHeroToHidden()
    setShouldRunIntro(true)
  }

  // Master GSAP Lifecycle Effect
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Setup magnetic links
      const cleanupMagnetic = bindMagneticLinks()

      // 2. Setup scroll reveals (auto-split titles)
      initScrollAnimations()

      // 3. If intro is skipped (soft refresh), animate hero immediately
      if (!shouldRunIntro) {
        playHeroAnimation(0.2)
      }

      ScrollTrigger.refresh()

      return () => {
        cleanupMagnetic()
      }
    }, containerRef)

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#0B0E14] text-slate-100 flex flex-col font-sans selection:bg-amber-400/20 selection:text-amber-300"
    >
      {/* Brand Intro Overlay */}
      {shouldRunIntro && <IntroLoader onComplete={handleIntroComplete} />}

      {/* Navigation */}
      <Navbar onReplayIntro={handleReplayIntro} />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Background & Dual Approach */}
        <ApproachSection />

        {/* Selected Project Case Studies */}
        <ProjectShowcase />

        {/* Professional Work Experience */}
        <ExperienceSection />

        {/* Technical Skills & Education */}
        <SkillsSection />

        {/* Contact & Footer */}
        <ContactSection />
      </main>
    </div>
  )
}
