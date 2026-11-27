import { useState, useEffect, useRef, useCallback } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import 'lenis/dist/lenis.css'

import IntroLoader from './components/IntroLoader'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ProjectShowcase from './components/ProjectShowcase'
import SkillsSection from './components/SkillsSection'
import RepoIndex from './components/RepoIndex'
import ProfileSection from './components/ProfileSection'
import ContactSection from './components/ContactSection'

import { checkShouldPlayIntro } from './utils/introUtils'
import { initSmoothScroll } from './utils/smoothScroll'
import { getSavedPalette, applyPaletteToDOM } from './data/paletteData'
import {
  bindMagneticLinks,
  initThemeScrollTriggers,
  playHeroAnimation,
  resetHeroToHidden,
  initScrollAnimations,
} from './utils/gsapUtils'

export default function App() {
  const [shouldRunIntro, setShouldRunIntro] = useState(() => checkShouldPlayIntro())
  const [currentPalette, setCurrentPalette] = useState(() => getSavedPalette())
  const [repoCount, setRepoCount] = useState(0)
  const containerRef = useRef(null)

  // Ensure saved palette is applied to DOM on initial render
  useEffect(() => {
    applyPaletteToDOM(currentPalette)
  }, [currentPalette])

  // Initialize Lenis smooth easing scroll
  useEffect(() => {
    const cleanupScroll = initSmoothScroll()
    return () => {
      cleanupScroll()
    }
  }, [])

  const handleIntroComplete = (palette) => {
    sessionStorage.setItem('portfolio_intro_seen', 'true')
    if (palette) {
      setCurrentPalette(palette)
      applyPaletteToDOM(palette)
    }
    setShouldRunIntro(false)
    playHeroAnimation(0.2)
  }

  const handleReplayIntro = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    resetHeroToHidden()
    setShouldRunIntro(true)
  }

  const handleReposLoaded = useCallback((repos) => {
    setRepoCount(repos.length)
  }, [])

  useEffect(() => {
    if (repoCount > 0) {
      const ctx = gsap.context(() => {
        gsap.from('.repo-card:not(.fallback-card)', {
          y: 30,
          opacity: 0,
          duration: 1,
          ease: 'expo.out',
          stagger: 0.1,
          onComplete: () => ScrollTrigger.refresh()
        })
      }, containerRef)

      return () => ctx.revert()
    }
  }, [repoCount])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cleanupMagnetic = bindMagneticLinks()
      initThemeScrollTriggers()
      initScrollAnimations()

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
      document.body.setAttribute('data-theme', 'light')
    }
  }, [shouldRunIntro])

  return (
    <div ref={containerRef}>
      {shouldRunIntro && <IntroLoader onComplete={handleIntroComplete} />}
      <Navbar
        onReplayIntro={handleReplayIntro}
        currentPalette={currentPalette}
        onPaletteChange={setCurrentPalette}
      />
      <main>
        <HeroSection />
        <ProjectShowcase />
        <SkillsSection />
        <RepoIndex onReposLoaded={handleReposLoaded} />
        <ProfileSection />
        <ContactSection />
      </main>
    </div>
  )
}