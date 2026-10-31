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
            <span className="mono-label">STACK</span>
            <p>{personalData.stack}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
