import { Fragment } from 'react'
import SplitText from './common/SplitText'
import { projectsData } from '../data/portfolioData'

export default function ProjectShowcase() {
  const [projectA, projectB, projectC] = projectsData

  return (
    <>
      {/* PROJECT A: KWIP IMAGE */}
      {projectA && (
        <section id="work" className="project-showcase dark-block panel" data-color={projectA.theme}>
          <div className="project-header">
            <span className="mono-label accent-text reveal-fade">{projectA.caseStudyTag}</span>
            <h2 className="display-title auto-split">
              <SplitText text={projectA.title} />
            </h2>
            {projectA.tagline && (
              <p className="tagline reveal-fade">
                {projectA.tagline}
              </p>
            )}
            {projectA.techStack && (
              <div className="project-tags reveal-fade">
                {projectA.techStack.map((tech, idx) => (
                  <span key={idx} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="project-grid">
            <div className="project-context">
              <h3 className="section-title auto-split">
                <SplitText text="The Problem & Solution" />
              </h3>
              <p className="reveal-fade">{projectA.description}</p>

              {projectA.highlights && (
                <div className="project-highlights reveal-fade">
                  <h4 className="mono-label accent-text">KEY TAKEAWAYS</h4>
                  <ul className="highlights-list">
                    {projectA.highlights.map((highlight, idx) => (
                      <li key={idx}>
                        <span className="bullet-sym">→</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {projectA.repoUrl && (
                <div className="project-action-row reveal-fade">
                  <a
                    href={projectA.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-brutalist btn-primary magnetic-link"
                  >
                    VIEW REPOSITORY ↗
                  </a>
                </div>
              )}

              {projectA.metrics && (
                <div className="performance-metrics reveal-scale">
                  <h4 className="mono-label">BENCHMARK (ORIGINAL VS. WEBP)</h4>
                  {projectA.metrics.map((metric, idx) => (
                    <div className="metric-row" key={idx}>
                      <span className={metric.accent ? 'accent-text' : ''}>{metric.label}</span>
                      <span className="bar-bg">
                        <span
                          className={`bar-fill anim-bar ${metric.accent ? 'accent-bg' : ''}`}
                          data-width={metric.width}
                        >
                          {metric.value}
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {projectA.architecture && (
              <div className="project-architecture">
                <h3 className="section-title auto-split">
                  <SplitText text={projectA.architecture.title} />
                </h3>
                <div className="arch-diagram">
                  {projectA.architecture.nodes.map((node, idx) => {
                    if (node.type === 'connector') {
                      return (
                        <div key={idx} className="connector draw-line">
                          {node.symbol}
                        </div>
                      )
                    }
                    if (node.type === 'split') {
                      return (
                        <div key={idx} className="node split draw-node">
                          {node.items.map((item, itemIdx) => (
                            <div key={itemIdx}>{item}</div>
                          ))}
                        </div>
                      )
                    }
                    return (
                      <div
                        key={idx}
                        className={`node draw-node ${node.highlight ? 'highlight' : ''}`}
                      >
                        {node.label}
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* PROJECT B: INVITE ME */}
      {projectB && (
        <section className="project-showcase light-block panel" data-color={projectB.theme}>
          <div className="project-header">
            <span className="mono-label accent-text reveal-fade">{projectB.caseStudyTag}</span>
            <h2 className="display-title auto-split">
              <SplitText text={projectB.title} />
            </h2>
            {projectB.tagline && (
              <p className="tagline reveal-fade">
                {projectB.tagline}
              </p>
            )}
            {projectB.techStack && (
              <div className="project-tags reveal-fade">
                {projectB.techStack.map((tech, idx) => (
                  <span key={idx} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="project-grid layout-reverse">
            {projectB.flowDiagram && (
              <div className="project-architecture">
                <h3 className="section-title auto-split">
                  <SplitText text={projectB.flowDiagram.title} />
                </h3>
                <div className="flow-diagram">
                  {projectB.flowDiagram.steps.map((step, idx) => (
                    <Fragment key={idx}>
                      <div className="flow-box draw-node">
                        <span className="mono-label">{step.label}</span>
                        <p>{step.sub}</p>
                      </div>
                      {idx < projectB.flowDiagram.steps.length - 1 && (
                        <div className="flow-arrow draw-line">→</div>
                      )}
                    </Fragment>
                  ))}
                </div>
              </div>
            )}

            <div className="project-context">
              <h3 className="section-title auto-split">
                <SplitText text="The Problem & Solution" />
              </h3>
              {Array.isArray(projectB.description) ? (
                projectB.description.map((para, idx) => (
                  <p key={idx} className="reveal-fade">
                    {para}
                  </p>
                ))
              ) : (
                <p className="reveal-fade">{projectB.description}</p>
              )}

              {projectB.highlights && (
                <div className="project-highlights reveal-fade">
                  <h4 className="mono-label accent-text">KEY TAKEAWAYS</h4>
                  <ul className="highlights-list">
                    {projectB.highlights.map((highlight, idx) => (
                      <li key={idx}>
                        <span className="bullet-sym">→</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* PROJECT C: KWIP ANIMATION */}
      {projectC && (
        <section id="kwip-animation" className="project-showcase dark-block panel" data-color={projectC.theme}>
          <div className="project-header">
            <span className="mono-label accent-text reveal-fade">{projectC.caseStudyTag}</span>
            <h2 className="display-title auto-split">
              <SplitText text={projectC.title} />
            </h2>
            {projectC.tagline && (
              <p className="tagline reveal-fade">
                {projectC.tagline}
              </p>
            )}
            {projectC.techStack && (
              <div className="project-tags reveal-fade">
                {projectC.techStack.map((tech, idx) => (
                  <span key={idx} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="project-grid">
            <div className="project-context">
              <h3 className="section-title auto-split">
                <SplitText text="The Problem & Solution" />
              </h3>
              <p className="reveal-fade">{projectC.description}</p>

              {projectC.highlights && (
                <div className="project-highlights reveal-fade">
                  <h4 className="mono-label accent-text">KEY TAKEAWAYS</h4>
                  <ul className="highlights-list">
                    {projectC.highlights.map((highlight, idx) => (
                      <li key={idx}>
                        <span className="bullet-sym">→</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {projectC.repoUrl && (
                <div className="project-action-row reveal-fade">
                  <a
                    href={projectC.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-brutalist btn-primary magnetic-link"
                  >
                    VIEW REPOSITORY ↗
                  </a>
                </div>
              )}

              {projectC.metrics && (
                <div className="performance-metrics reveal-scale">
                  <h4 className="mono-label">PERFORMANCE BENCHMARK</h4>
                  {projectC.metrics.map((metric, idx) => (
                    <div className="metric-row" key={idx}>
                      <span className={metric.accent ? 'accent-text' : ''}>{metric.label}</span>
                      <span className="bar-bg">
                        <span
                          className={`bar-fill anim-bar ${metric.accent ? 'accent-bg' : ''}`}
                          data-width={metric.width}
                        >
                          {metric.value}
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {projectC.architecture && (
              <div className="project-architecture">
                <h3 className="section-title auto-split">
                  <SplitText text={projectC.architecture.title} />
                </h3>
                <div className="arch-diagram">
                  {projectC.architecture.nodes.map((node, idx) => {
                    if (node.type === 'connector') {
                      return (
                        <div key={idx} className="connector draw-line">
                          {node.symbol}
                        </div>
                      )
                    }
                    if (node.type === 'split') {
                      return (
                        <div key={idx} className="node split draw-node">
                          {node.items.map((item, itemIdx) => (
                            <div key={itemIdx}>{item}</div>
                          ))}
                        </div>
                      )
                    }
                    return (
                      <div
                        key={idx}
                        className={`node draw-node ${node.highlight ? 'highlight' : ''}`}
                      >
                        {node.label}
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        </section>
      )}
    </>
  )
}
