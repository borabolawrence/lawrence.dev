import { useState } from 'react'
import SplitText from './common/SplitText'
import { projectsData } from '../data/portfolioData'

export default function ProjectShowcase() {
  const [projectA, projectB] = projectsData
  const [inviteTab, setInviteTab] = useState('features') // 'features' | 'schema'

  return (
    <section id="projects" className="py-24 px-4 sm:px-8 max-w-6xl mx-auto border-t border-[#1E2433] space-y-16">
      {/* Section Title */}
      <div className="space-y-2">
        <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block">
          03 // INDEPENDENT ENGINEERING
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
          <SplitText text="SELECTED PROJECTS" />
        </h2>
        <p className="text-slate-400 text-sm max-w-2xl">
          Independent software projects exploring web application architecture, WordPress internals,
          performance optimization, and user experience.
        </p>
      </div>

      {/* PROJECT 1: KWIP IMAGE */}
      {projectA && (
        <article className="p-8 sm:p-12 rounded-2xl bg-[#121620] border border-[#1E2433] space-y-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[#1E2433] pb-6">
            <div className="space-y-1">
              <span className="text-xs font-mono text-amber-400 font-semibold tracking-wider">
                {projectA.tag}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                {projectA.title}
              </h3>
              <p className="text-sm text-slate-400">{projectA.subtitle}</p>
            </div>

            {projectA.repoUrl && (
              <a
                href={projectA.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white font-mono text-xs border border-white/10 transition-colors flex items-center gap-2 magnetic-link"
              >
                <span>View Repository</span>
                <span className="text-amber-400">↗</span>
              </a>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Description & Metrics */}
            <div className="lg:col-span-6 space-y-6">
              <p className="text-sm text-slate-300 leading-relaxed">
                {projectA.description}
              </p>

              {/* Observed Benchmark Comparison Card */}
              <div className="p-5 rounded-xl bg-[#0B0E14] border border-[#1E2433] space-y-3 font-mono text-xs">
                <div className="text-slate-400 font-semibold uppercase text-[11px] pb-1 border-b border-white/5">
                  Performance & Delivery Comparison
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-slate-400 text-[11px]">
                    <span>Standard Image Request</span>
                    <span className="text-white font-semibold">{projectA.metrics.originalAverage}</span>
                  </div>
                  <div className="w-full h-2 bg-white/5 rounded overflow-hidden">
                    <div className="h-full bg-slate-500 w-full"></div>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-amber-400 text-[11px] font-semibold">
                    <span>WebP Rewrite Delivery</span>
                    <span className="text-amber-400">{projectA.metrics.webpAverage}</span>
                  </div>
                  <div className="w-full h-2 bg-white/5 rounded overflow-hidden">
                    <div className="h-full bg-amber-400 w-[26%]"></div>
                  </div>
                </div>
                <div className="text-[11px] text-slate-500 pt-1">
                  Benefit: {projectA.metrics.bandwidthSavings} with zero template disruption.
                </div>
              </div>
            </div>

            {/* Highlights Breakdown */}
            <div className="lg:col-span-6 space-y-4">
              <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                Key Development Areas:
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-300 font-sans">
                {projectA.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-amber-400 font-bold text-sm shrink-0 leading-tight">✓</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="pt-4 border-t border-[#1E2433] flex flex-wrap gap-2 font-mono text-[11px]">
                {projectA.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded bg-[#0B0E14] text-slate-300 border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>
      )}

      {/* PROJECT 2: INVITE ME */}
      {projectB && (
        <article className="p-8 sm:p-12 rounded-2xl bg-[#121620] border border-[#1E2433] space-y-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[#1E2433] pb-6">
            <div className="space-y-1">
              <span className="text-xs font-mono text-amber-400 font-semibold tracking-wider">
                {projectB.tag}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                {projectB.title}
              </h3>
              <p className="text-sm text-slate-400">{projectB.subtitle}</p>
            </div>

            {/* View Switcher Tabs */}
            <div className="flex items-center gap-1 bg-[#0B0E14] p-1 rounded-lg border border-white/5 font-mono text-xs">
              <button
                type="button"
                onClick={() => setInviteTab('features')}
                className={`px-3 py-1.5 rounded transition ${
                  inviteTab === 'features'
                    ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30 font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Features & Architecture
              </button>
              <button
                type="button"
                onClick={() => setInviteTab('schema')}
                className={`px-3 py-1.5 rounded transition ${
                  inviteTab === 'schema'
                    ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30 font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Prisma Relational Model
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Description & Tech Stack */}
            <div className="lg:col-span-5 space-y-6">
              <p className="text-sm text-slate-300 leading-relaxed">
                {projectB.description}
              </p>

              <div className="space-y-3 font-mono text-xs">
                <span className="text-slate-400 uppercase text-[11px] block">
                  Technologies Utilized:
                </span>
                <div className="flex flex-wrap gap-2">
                  {projectB.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded bg-[#0B0E14] text-slate-300 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Content: Features vs Schema */}
            <div className="lg:col-span-7">
              {inviteTab === 'features' ? (
                <div className="space-y-3 font-sans text-xs">
                  <h4 className="font-mono text-xs uppercase text-slate-400 tracking-wider mb-2">
                    Key Features & Technical Areas:
                  </h4>
                  {projectB.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-lg bg-[#0B0E14] border border-[#1E2433] flex items-start gap-3"
                    >
                      <span className="text-amber-400 font-bold shrink-0 mt-0.5">•</span>
                      <p className="text-slate-300 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-4 rounded-xl bg-[#0B0E14] border border-[#1E2433] font-mono text-xs overflow-x-auto">
                  <div className="text-slate-500 text-[11px] pb-2 border-b border-white/5 mb-3 flex justify-between">
                    <span>prisma/schema.prisma</span>
                    <span className="text-amber-400">PostgreSQL (Neon)</span>
                  </div>
                  <pre className="text-slate-300 leading-relaxed text-[11px]">
                    <code>{projectB.schemaSnippet}</code>
                  </pre>
                </div>
              )}
            </div>
          </div>
        </article>
      )}
    </section>
  )
}
