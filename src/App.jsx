import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import IntroLoader from './components/IntroLoader'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ProjectShowcase from './components/ProjectShowcase'
import RepoIndex from './components/RepoIndex'
import ProfileSection from './components/ProfileSection'
import ContactSection from './components/ContactSection'

import { checkShouldPlayIntro } from './utils/introUtils'
import {
  bindMagneticLinks,
  initThemeScrollTriggers,
  playHeroAnimation,
  resetHeroToHidden,
  initScrollAnimations,
} from './utils/gsapUtils'

export default function App() {
  const [shouldRunIntro, setShouldRunIntro] = useState(() => checkShouldPlayIntro())
  const [repoCount, setRepoCount] = useState(0)
  const containerRef = useRef(null)

  const handleIntroComplete = () => {
    sessionStorage.setItem('portfolio_intro_seen', 'true')
    setShouldRunIntro(false)
    playHeroAnimation(0.2)
  }

  const handleReplayIntro = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    resetHeroToHidden()
    setShouldRunIntro(true)
  }

  const handleReposLoaded = (repos) => {
    setRepoCount(repos.length)
    if (repos.length > 0) {
      gsap.from('.repo-card:not(.fallback-card)', {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'expo.out',
        stagger: 0.1,
      })
    }
  }

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
  }, [repoCount])

  return (
    <div ref={containerRef}>
      {shouldRunIntro && <IntroLoader onComplete={handleIntroComplete} />}
      <Navbar onReplayIntro={handleReplayIntro} />
      <main>
        <HeroSection />
        <ProjectShowcase />
        <RepoIndex onReposLoaded={handleReposLoaded} />
        <ProfileSection />
        <ContactSection />
      </main>
    </div>
  )
}
