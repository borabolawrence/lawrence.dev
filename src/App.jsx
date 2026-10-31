import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Components
import IntroLoader from './components/IntroLoader'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ProjectShowcase from './components/ProjectShowcase'
import SystemsSection from './components/SystemsSection'
import RepoIndex from './components/RepoIndex'
import ProfileSection from './components/ProfileSection'
import ContactSection from './components/ContactSection'
import TelemetryBar from './components/TelemetryBar'

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
  const [repoCount, setRepoCount] = useState(0)
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

  // Callback when GitHub repos finish loading
  const handleReposLoaded = (repos) => {
    setRepoCount(repos.length)
    if (repos.length > 0) {
      gsap.from('.repo-card:not(.fallback-card)', {
        y: 25,
        opacity: 0,
        duration: 0.8,
        ease: 'expo.out',
        stagger: 0.08,
      })
    }
  }

  // Master GSAP Lifecycle Effect
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Setup magnetic links
      const cleanupMagnetic = bindMagneticLinks()

      // 2. Setup scroll reveals (auto-split titles, metric bars)
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
  }, [repoCount])

  return (
    <div ref={containerRef} className="min-h-screen bg-[#0A0D14] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-300">
      {/* System Boot Intro Overlay */}
      {shouldRunIntro && <IntroLoader onComplete={handleIntroComplete} />}

      {/* Engineering Navigation */}
      <Navbar onReplayIntro={handleReplayIntro} />

      <main className="flex-1 pb-16">
        {/* Hero Section & Interactive Terminal */}
        <HeroSection />

        {/* Featured Software Architecture & Projects */}
        <ProjectShowcase />

        {/* Enterprise Infrastructure & MySQL Binary Replication */}
        <SystemsSection />

        {/* Live GitHub Repository Index */}
        <RepoIndex onReposLoaded={handleReposLoaded} />

        {/* Profile, Qualifications & Work History */}
        <ProfileSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Floating System Telemetry Bar */}
      <TelemetryBar />
    </div>
  )
}
