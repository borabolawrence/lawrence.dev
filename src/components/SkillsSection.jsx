import SplitText from './common/SplitText'
import { skillsMatrix, areasOfInterest, personalData } from '../data/portfolioData'

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-8 max-w-6xl mx-auto border-t border-[#1E2433] space-y-16">
      {/* Section Header */}
      <div className="space-y-2">
        <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block">
          05 // CAPABILITIES & FOUNDATION
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
          <SplitText text="TECHNICAL SKILLS & EDUCATION" />
        </h2>
        <p className="text-slate-400 text-sm max-w-2xl">
          Core technical competencies developed through professional employment, independent projects,
          and academic study.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-7 rounded-2xl bg-[#121620] border border-[#1E2433] space-y-4">
          <div className="space-y-1 border-b border-[#1E2433] pb-3">
            <span className="text-[11px] font-mono text-amber-400 font-semibold uppercase">
              CATEGORY 01
            </span>
            <h3 className="text-xl font-bold text-white font-display">
              Frontend Development
            </h3>
          </div>
          <div className="flex flex-wrap gap-2 font-mono text-xs">
            {skillsMatrix.frontend.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg bg-[#0B0E14] text-slate-200 border border-white/5"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Backend & Application */}
        <div className="p-7 rounded-2xl bg-[#121620] border border-[#1E2433] space-y-4">
          <div className="space-y-1 border-b border-[#1E2433] pb-3">
            <span className="text-[11px] font-mono text-amber-400 font-semibold uppercase">
              CATEGORY 02
            </span>
            <h3 className="text-xl font-bold text-white font-display">
              Backend & Application Development
            </h3>
          </div>
          <div className="flex flex-wrap gap-2 font-mono text-xs">
            {skillsMatrix.backend.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg bg-[#0B0E14] text-slate-200 border border-white/5"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="p-7 rounded-2xl bg-[#121620] border border-[#1E2433] space-y-4">
          <div className="space-y-1 border-b border-[#1E2433] pb-3">
            <span className="text-[11px] font-mono text-amber-400 font-semibold uppercase">
              CATEGORY 03
            </span>
            <h3 className="text-xl font-bold text-white font-display">
              Database & Data Management
            </h3>
          </div>
          <div className="flex flex-wrap gap-2 font-mono text-xs">
            {skillsMatrix.database.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg bg-[#0B0E14] text-slate-200 border border-white/5"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Tools & Operations */}
        <div className="p-7 rounded-2xl bg-[#121620] border border-[#1E2433] space-y-4">
          <div className="space-y-1 border-b border-[#1E2433] pb-3">
            <span className="text-[11px] font-mono text-amber-400 font-semibold uppercase">
              CATEGORY 04
            </span>
            <h3 className="text-xl font-bold text-white font-display">
              Tools, Platforms & Operations
            </h3>
          </div>
          <div className="flex flex-wrap gap-2 font-mono text-xs">
            {skillsMatrix.tools.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg bg-[#0B0E14] text-slate-200 border border-white/5"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Education & Certification Dual Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        <div className="p-6 rounded-xl bg-[#0B0E14] border border-[#1E2433] space-y-2">
          <span className="text-xs font-mono text-amber-400 uppercase font-semibold">
            ACADEMIC DEGREE
          </span>
          <h4 className="text-lg font-bold text-white font-display">
            {personalData.education.degree}
          </h4>
          <p className="text-sm text-slate-400">{personalData.education.institution}</p>
        </div>

        <div className="p-6 rounded-xl bg-[#0B0E14] border border-[#1E2433] space-y-2">
          <span className="text-xs font-mono text-amber-400 uppercase font-semibold">
            TECHNICAL CERTIFICATION
          </span>
          <h4 className="text-lg font-bold text-white font-display">
            {personalData.certification}
          </h4>
          <p className="text-sm text-slate-400">Computer Systems Servicing Certification</p>
        </div>
      </div>

      {/* Areas of Interest */}
      <div className="space-y-3 pt-6 border-t border-[#1E2433]">
        <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
          Current Areas of Exploration & Long-Term Interest:
        </span>
        <div className="flex flex-wrap gap-2 font-mono text-xs">
          {areasOfInterest.map((interest, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full bg-[#121620] text-slate-300 border border-white/5"
            >
              • {interest}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
