import { useState, useEffect } from 'react'
import { personalData } from '../data/portfolioData'

export default function Navbar({ onReplayIntro }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Keyboard accessibility: Escape to close mobile menu
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
    <nav className="site-nav" aria-label="Main Navigation">
      <div
        className="nav-logo cursor-pointer select-none"
        onClick={onReplayIntro}
        title="Click to replay intro animation"
      >
        {personalData.shortName}
      </div>

      <div className="nav-status desktop-only">
        <span className="status-dot" aria-hidden="true"></span>
        {personalData.status}
      </div>

      {/* Accessible Mobile Menu Toggle */}
      <button
        className="mobile-menu-btn"
        type="button"
        aria-expanded={mobileMenuOpen}
        aria-controls="primary-navigation"
        aria-label="Toggle Menu"
        onClick={() => setMobileMenuOpen((prev) => !prev)}
      >
        {mobileMenuOpen ? 'CLOSE' : 'MENU'}
      </button>

      <ul id="primary-navigation" className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
        <li>
          <a href="#work" className="magnetic-link" onClick={closeMenu}>
            WORK
          </a>
        </li>
        <li>
          <a href="#index" className="magnetic-link" onClick={closeMenu}>
            INDEX
          </a>
        </li>
        <li>
          <a href="#profile" className="magnetic-link" onClick={closeMenu}>
            PROFILE
          </a>
        </li>
      </ul>
    </nav>
  )
}
