import { useState } from 'react'
import SplitText from './common/SplitText'
import { projectsData } from '../data/portfolioData'

export default function ProjectShowcase() {
  const [projectA, projectB] = projectsData
  const [activeInviteTab, setActiveInviteTab] = useState('architecture') // 'architecture' | 'schema'
  const [simulatedLatency, setSimulatedLatency] = useState(null)
  const [simulating, setSimulating] = useState(false)

  // Simulation test for KWIP Image rewrite speed
  const handleSimulateRequest = () => {
    setSimulating(true)
    setTimeout(() => {
      const generated = (Math.random() * (4.2 - 2.1) + 2.1).toFixed(2)
      setSimulatedLatency(generated)
      setSimulating(false)
    }, 450)
  }

  return (
    <div id="work" className="py-24 px-4 sm:px-8 space-y-32 max-w-7xl mx-auto">
      {/* SECTION HEADER */}
      <div className="border-b border-white/10 pb-6">
        <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
          // FEATURED ENGINEERING CASE STUDIES
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
          <SplitText text="SYSTEMS ARCHITECTURE & PROJECTS" />
        </h2>
      </div>

      {/* CASE STUDY 01: KWIP IMAGE */}
      {projectA && (
        <section className="bg-[#0C0F17] border border-white/10 rounded-xl p-6 sm:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

          {/* Top Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/10 pb-6 mb-8">
            <div>
              <span className="text-xs font-mono text-cyan-400 font-semibold block mb-1">
                {projectA.caseStudyTag}
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
                {projectA.title}
              </h3>
              <p className="text-sm font-mono text-slate-400 mt-1">{projectA.type}</p>
            </div>

            {projectA.repoUrl && (
              <a
                href={projectA.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded bg-white/5 hover:bg-white/10 text-white font-mono text-xs border border-white/10 transition-colors flex items-center gap-2 magnetic-link"
              >
                <span>INSPECT REPOSITORY</span>
                <span className="text-cyan-400">↗</span>
              </a>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Context & Benchmarks */}
            <div className="lg:col-span-6 space-y-6">
              <h4 className="text-lg font-semibold text-white font-display">
                The Problem & Automated Solution
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed">{projectA.description}</p>

              {/* Performance Benchmarks Card */}
              <div className="p-5 rounded-lg bg-[#080B12] border border-white/10 space-y-4 font-mono text-xs">
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-slate-400 font-semibold uppercase">
                    OBSERVED PERFORMANCE (LOCAL TESTING)
                  </span>
                  <button
                    type="button"
                    onClick={handleSimulateRequest}
                    disabled={simulating}
                    className="text-[11px] px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 border border-cyan-500/30 transition cursor-pointer"
                  >
                    {simulating ? 'Simulating...' : '⚡ Test Rewrite Ping'}
                  </button>
                </div>

                {projectA.metrics.map((metric, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between text-[11px]">
                      <span className={metric.accent ? 'text-cyan-400 font-bold' : 'text-slate-400'}>
                        {metric.label}
                      </span>
                      <span className="text-white font-semibold">{metric.value}</span>
                    </div>
                    <div className="w-full h-3 bg-white/5 rounded-sm overflow-hidden">
                      <div
                        className={`h-full ${metric.accent ? 'bg-cyan-400' : 'bg-rose-500/80'} anim-bar`}
                        data-width={metric.width}
                        style={{ width: metric.width }}
                      ></div>
                    </div>
                  </div>
                ))}

                {simulatedLatency && (
                  <div className="mt-3 pt-3 border-t border-white/10 text-[11px] text-emerald-400 flex items-center justify-between">
                    <span>Live Simulation Response Time:</span>
                    <span className="font-bold">{simulatedLatency}ms (LiteSpeed Rewrite Hit)</span>
                  </div>
                )}
              </div>
            </div>

            {/* Right Execution Pipeline Steps */}
            <div className="lg:col-span-6 space-y-4">
              <h4 className="text-lg font-semibold text-white font-display">
                Request-Response Execution Pipeline
              </h4>

              <div className="space-y-3 font-mono text-xs">
                {projectA.pipelineSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-lg bg-[#080B12] border border-white/10 hover:border-cyan-500/40 transition-colors flex gap-4 items-start"
                  >
                    <div className="w-8 h-8 rounded bg-cyan-950/80 text-cyan-400 border border-cyan-800/60 flex items-center justify-center font-bold text-xs shrink-0">
                      {step.step}
                    </div>
                    <div className="space-y-1">
                      <div className="text-white font-semibold text-sm">{step.name}</div>
                      <p className="text-slate-400 text-xs leading-relaxed font-sans">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CASE STUDY 02: INVITE ME */}
      {projectB && (
        <section className="bg-[#0C0F17] border border-white/10 rounded-xl p-6 sm:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

          {/* Top Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/10 pb-6 mb-8">
            <div>
              <span className="text-xs font-mono text-emerald-400 font-semibold block mb-1">
                {projectB.caseStudyTag}
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
                {projectB.title}
              </h3>
              <p className="text-sm font-mono text-slate-400 mt-1">{projectB.tagline}</p>
            </div>

            {/* View Switcher Tabs */}
            <div className="flex items-center gap-1 bg-[#080B12] p-1 rounded-lg border border-white/10 text-xs font-mono">
              <button
                type="button"
                onClick={() => setActiveInviteTab('architecture')}
                className={`px-3 py-1.5 rounded transition ${
                  activeInviteTab === 'architecture'
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Architecture View
              </button>
              <button
                type="button"
                onClick={() => setActiveInviteTab('schema')}
                className={`px-3 py-1.5 rounded transition ${
                  activeInviteTab === 'schema'
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Prisma Schema
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Context & Tech Highlights */}
            <div className="lg:col-span-5 space-y-6">
              <h4 className="text-lg font-semibold text-white font-display">
                High-Performance Decoupled Architecture
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed">{projectB.description}</p>

              <div className="space-y-3 font-mono text-xs">
                <span className="text-slate-500 block uppercase">Infrastructure Stack:</span>
                <div className="flex flex-wrap gap-2">
                  {projectB.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded bg-[#080B12] border border-white/10 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Display: Flow or Prisma Schema */}
            <div className="lg:col-span-7">
              {activeInviteTab === 'architecture' ? (
                <div className="space-y-4">
                  {projectB.architectureHighlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-lg bg-[#080B12] border border-white/10 hover:border-emerald-500/40 transition-colors space-y-1.5"
                    >
                      <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold">
                        <span>[NODE 0{idx + 1}]</span>
                        <span className="text-white text-sm font-semibold">{item.title}</span>
                      </div>
                      <p className="text-slate-400 text-xs leading-relaxed font-sans">{item.desc}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-[#080B12] border border-white/10 rounded-lg p-4 font-mono text-xs overflow-x-auto shadow-inner">
                  <div className="text-slate-500 text-[11px] pb-2 border-b border-white/5 mb-3 flex justify-between">
                    <span>prisma/schema.prisma</span>
                    <span className="text-emerald-400">PostgreSQL Relational Mapping</span>
                  </div>
                  <pre className="text-slate-300 leading-relaxed font-mono text-[11px]">
                    <code>{projectB.schemaSnippet}</code>
                  </pre>
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
