import { personalData, heroData } from '../data/portfolioData'

export default function HeroSection() {
  return (
    <section id="hero" className="hero-section" data-color="light">
      <div className="hero-grid">
        <div className="hero-text-block">
          <h1 className="kinetic-heading">
            {heroData.kineticWords.map((word, index) => (
              <span key={index}>
                <span className="mask-wrap">
                  <span className="word">{word}</span>
                </span>
                {index < heroData.kineticWords.length - 1 && ' '}
              </span>
            ))}
          </h1>
          {heroData.subheading && (
            <p className="hero-subheading meta-item">{heroData.subheading}</p>
          )}
        </div>

        <div className="hero-actions meta-item">
          <a href="#work" className="btn-brutalist btn-primary magnetic-link">
            VIEW PROJECTS ↓
          </a>
          <a href="#contact" className="btn-brutalist btn-secondary magnetic-link">
            GET IN TOUCH ✉
          </a>
          <div className="hero-social-links">
            <a
              href={personalData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mono-link hover-underline"
            >
              GITHUB ↗
            </a>
            <span className="separator" aria-hidden="true">/</span>
            <a
              href={personalData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mono-link hover-underline"
            >
              LINKEDIN ↗
            </a>
          </div>
        </div>

        <div className="hero-meta">
          <div className="meta-item">
            <span className="mono-label">ROLE</span>
            <p>{personalData.role}</p>
          </div>
          <div className="meta-item">
            <span className="mono-label">LOCATION</span>
            <p>{personalData.location}</p>
          </div>
          <div className="meta-item">
            <span className="mono-label">PRIMARY STACK</span>
            <p>{personalData.stack}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
