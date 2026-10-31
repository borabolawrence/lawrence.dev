import SplitText from './common/SplitText'
import { personalData } from '../data/portfolioData'

export default function ContactSection() {
  const { email, github, linkedin } = personalData.contact

  return (
    <section id="contact" className="contact-section panel" data-color="accent">
      <div className="contact-content">
        <h2 className="massive-text auto-split">
          <SplitText text={'INITIATE\nCONTACT'} />
        </h2>
        <div className="contact-links reveal-fade">
          {email && (
            <a href={`mailto:${email}`} className="hover-underline magnetic-link">
              {email}
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover-underline magnetic-link"
            >
              LinkedIn <span className="hover-arrow">↗</span>
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover-underline magnetic-link"
            >
              GitHub Profile <span className="hover-arrow">↗</span>
            </a>
          )}
        </div>
      </div>
    </section>
  )
}