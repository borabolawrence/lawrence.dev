import { useState } from 'react'
import SplitText from './common/SplitText'
import { personalData } from '../data/portfolioData'

export default function ContactSection() {
  const { email, github, linkedin } = personalData.contact
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = (e) => {
    e.preventDefault()
    if (!email) return
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section id="contact" className="contact-section panel" data-color="accent">
      <div className="contact-content">
        <div className="contact-header-status reveal-fade">
          <span className="mono-label" style={{ opacity: 0.9 }}>
            ● {personalData.status}
          </span>
        </div>

        <h2 className="massive-text auto-split">
          <SplitText text={'INITIATE\nCONTACT'} />
        </h2>

        <p className="contact-subtitle reveal-fade">
          Interested in working together or hiring? Reach out directly via email or LinkedIn.
        </p>

        <div className="contact-links reveal-fade">
          {email && (
            <div className="email-action-group">
              <a href={`mailto:${email}`} className="hover-underline magnetic-link primary-email-link">
                {email}
              </a>
              <button
                type="button"
                className="btn-copy-email magnetic-link"
                onClick={handleCopyEmail}
                aria-label="Copy email address"
              >
                {copied ? '✓ COPIED' : 'COPY EMAIL'}
              </button>
            </div>
          )}

          <div className="contact-social-row">
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

        <div className="contact-footer reveal-fade">
          <span className="mono-label">
            © {personalData.year} {personalData.name} — ALL RIGHTS RESERVED
          </span>
          <span className="mono-label">
            {personalData.location} ({personalData.coordinates})
          </span>
        </div>
      </div>
    </section>
  )
}