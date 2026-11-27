import SplitText from './common/SplitText'
import { skillsMatrix } from '../data/portfolioData'

const skillCategories = [
  {
    tag: 'CATEGORY 01',
    title: 'Frontend Development',
    skills: skillsMatrix.frontend,
  },
  {
    tag: 'CATEGORY 02',
    title: 'Backend & CMS Engineering',
    skills: skillsMatrix.backend,
  },
  {
    tag: 'CATEGORY 03',
    title: 'Database & Data Operations',
    skills: skillsMatrix.database,
  },
  {
    tag: 'CATEGORY 04',
    title: 'Tools, Platforms & Workflows',
    skills: skillsMatrix.tools,
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="skills-section panel light-block" data-color="light">
      <div className="section-header">
        <span className="mono-label accent-text reveal-fade">CORE CAPABILITIES</span>
        <h2 className="display-title auto-split">
          <SplitText text="Technical Competencies" />
        </h2>
        <p className="reveal-fade section-desc">
          Specialized stack cultivated through practical enterprise IT operations, custom WordPress engineering, and full-stack web applications.
        </p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((cat, idx) => (
          <div key={idx} className="skill-card draw-node">
            <div className="skill-card-header">
              <span className="mono-label accent-text">{cat.tag}</span>
              <h3 className="skill-card-title">{cat.title}</h3>
            </div>
            <div className="skill-tags">
              {cat.skills.map((skill, sIdx) => (
                <span key={sIdx} className="tech-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
