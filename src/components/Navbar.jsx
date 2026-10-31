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
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0A0D14]/85 backdrop-blur-md border-b border-white/5 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
        {/* Logo & Replay Trigger */}
        <div
          onClick={onReplayIntro}
          className="flex items-center gap-3 cursor-pointer group"
          title="Click to reboot / replay system intro"
        >
          <div className="w-2.5 h-2.5 rounded-sm bg-cyan-400 group-hover:bg-emerald-400 transition-colors shadow-[0_0_8px_rgba(0,229,255,0.6)]"></div>
          <span className="font-bold text-white tracking-wider text-sm">
            {personalData.shortName}
          </span>
          <span className="text-[10px] text-cyan-400/80 px-1.5 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/50 hidden sm:inline-block">
            SYS_DEV
          </span>
        </div>

        {/* Live Status Telemetry (Desktop) */}
        <div className="hidden lg:flex items-center gap-3 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-slate-400 text-[11px]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>{personalData.replicationStatus}</span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-300">DAGUPAN NODE</span>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden text-slate-300 hover:text-white px-2 py-1 text-xs border border-white/10 rounded"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle Navigation Menu"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          {mobileMenuOpen ? 'CLOSE' : 'MENU'}
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6">
          <a
            href="#work"
            className="text-slate-400 hover:text-cyan-400 transition-colors magnetic-link"
          >
            <span className="text-cyan-500 mr-1">01.</span>PROJECTS
          </a>
          <a
            href="#systems"
            className="text-slate-400 hover:text-cyan-400 transition-colors magnetic-link"
          >
            <span className="text-cyan-500 mr-1">02.</span>INFRASTRUCTURE
          </a>
          <a
            href="#index"
            className="text-slate-400 hover:text-cyan-400 transition-colors magnetic-link"
          >
            <span className="text-cyan-500 mr-1">03.</span>REPOSITORIES
          </a>
          <a
            href="#profile"
            className="text-slate-400 hover:text-cyan-400 transition-colors magnetic-link"
          >
            <span className="text-cyan-500 mr-1">04.</span>EXPERIENCE
          </a>
          <a
            href="#contact"
            className="px-3 py-1.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500 hover:text-slate-950 transition-all font-semibold magnetic-link"
          >
            CONNECT ↗
          </a>
        </nav>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0D14] border-b border-white/10 px-6 py-6 space-y-4">
          <a
            href="#work"
            onClick={closeMenu}
            className="block text-sm text-slate-300 hover:text-cyan-400"
          >
            <span className="text-cyan-500 mr-2">01.</span>PROJECTS
          </a>
          <a
            href="#systems"
            onClick={closeMenu}
            className="block text-sm text-slate-300 hover:text-cyan-400"
          >
            <span className="text-cyan-500 mr-2">02.</span>INFRASTRUCTURE
          </a>
          <a
            href="#index"
            onClick={closeMenu}
            className="block text-sm text-slate-300 hover:text-cyan-400"
          >
            <span className="text-cyan-500 mr-2">03.</span>REPOSITORIES
          </a>
          <a
            href="#profile"
            onClick={closeMenu}
            className="block text-sm text-slate-300 hover:text-cyan-400"
          >
            <span className="text-cyan-500 mr-2">04.</span>EXPERIENCE
          </a>
          <a
            href="#contact"
            onClick={closeMenu}
            className="block text-sm text-cyan-400 font-semibold"
          >
            <span className="text-cyan-500 mr-2">05.</span>CONNECT
          </a>
        </div>
      )}
    </header>
  )
}
