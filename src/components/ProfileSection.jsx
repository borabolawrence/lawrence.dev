import SplitText from './common/SplitText'
import { personalData, experienceData } from '../data/portfolioData'

export default function ProfileSection() {
  return (
    <section id="profile" className="profile-section panel dark-block" data-color="dark">
      <div className="profile-grid">
        <div className="profile-sticky">
          <h2 className="display-title auto-split">
            <SplitText text="Profile" />
          </h2>
          {personalData.bio.map((paragraph, idx) => (
            <p key={idx} className={idx === 0 ? 'lead reveal-fade' : 'reveal-fade'}>
              {paragraph}
            </p>
          ))}

          {personalData.education && (
            <div className="education reveal-fade" style={{ marginTop: '3rem' }}>
              <h4 className="mono-label accent-text">EDUCATION</h4>
              <p>
                {personalData.education.degree}
                <br />
                {personalData.education.institution} ({personalData.education.years})
              </p>
            </div>
          )}
        </div>

        <div className="experience-list">
          {experienceData.map((item, idx) => (
            <div key={idx} className="exp-item draw-border">
              <div className="exp-meta reveal-fade">
                <span className="mono-label">{item.period}</span>
                <h3>{item.role}</h3>
                <p>{item.company}</p>
              </div>
              <div className="exp-details reveal-fade">
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
