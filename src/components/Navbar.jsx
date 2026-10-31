import { useState, useEffect } from 'react'
import { personalData } from '../data/portfolioData'

export default function Navbar({ onReplayIntro }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [mobileMenuOpen])

  const closeMenu = () => setMobileMenuOpen(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0B0E14]/90 backdrop-blur-md border-b border-[#1E2433] text-xs font-mono">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <div
          onClick={onReplayIntro}
          className="flex items-center gap-2.5 cursor-pointer group select-none"
          title="Click to replay intro"
        >
          <span className="w-2 h-2 rounded-full bg-amber-400 group-hover:scale-125 transition-transform"></span>
          <span className="font-bold text-white tracking-wider text-sm font-display">
            {personalData.shortName}
          </span>
          <span className="hidden sm:inline-block text-[10px] text-slate-500 font-mono">
            / WEB & SYSTEMS
          </span>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-slate-400">
          <a href="#about" className="hover:text-white transition-colors magnetic-link">
            About
          </a>
          <a href="#approach" className="hover:text-white transition-colors magnetic-link">
            Approach
          </a>
          <a href="#projects" className="hover:text-white transition-colors magnetic-link">
            Projects
          </a>
          <a href="#experience" className="hover:text-white transition-colors magnetic-link">
            Experience
          </a>
          <a href="#skills" className="hover:text-white transition-colors magnetic-link">
            Skills
          </a>
          <a
            href="#contact"
            className="px-3.5 py-1.5 rounded bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors font-semibold"
          >
            Contact ↗
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden text-slate-300 hover:text-white px-2.5 py-1 text-xs border border-white/10 rounded"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle Navigation Menu"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          {mobileMenuOpen ? 'CLOSE' : 'MENU'}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0F131C] border-b border-[#1E2433] px-6 py-6 space-y-4">
          <a
            href="#about"
            onClick={closeMenu}
            className="block text-sm text-slate-300 hover:text-white"
          >
            About Me
          </a>
          <a
            href="#approach"
            onClick={closeMenu}
            className="block text-sm text-slate-300 hover:text-white"
          >
            Dual Approach
          </a>
          <a
            href="#projects"
            onClick={closeMenu}
            className="block text-sm text-slate-300 hover:text-white"
          >
            Projects
          </a>
          <a
            href="#experience"
            onClick={closeMenu}
            className="block text-sm text-slate-300 hover:text-white"
          >
            Experience
          </a>
          <a
            href="#skills"
            onClick={closeMenu}
            className="block text-sm text-slate-300 hover:text-white"
          >
            Technical Skills
          </a>
          <a
            href="#contact"
            onClick={closeMenu}
            className="block text-sm text-amber-400 font-semibold"
          >
            Get In Touch ↗
          </a>
        </div>
      )}
    </header>
  )
}
