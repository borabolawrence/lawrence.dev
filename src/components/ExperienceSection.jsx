import SplitText from './common/SplitText'
import { experienceData } from '../data/portfolioData'

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-8 max-w-6xl mx-auto border-t border-[#1E2433] space-y-12">
      <div className="space-y-2">
        <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block">
          04 // WORK HISTORY
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
          <SplitText text="PROFESSIONAL EXPERIENCE" />
        </h2>
        <p className="text-slate-400 text-sm max-w-2xl">
          Practical business IT operations combined with active web and application development.
        </p>
      </div>

      <div className="space-y-8">
        {experienceData.map((item, idx) => (
          <article
            key={idx}
            className="p-8 sm:p-10 rounded-2xl bg-[#121620] border border-[#1E2433] card-hover space-y-6"
          >
            {/* Top Info */}
            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-2 border-b border-[#1E2433] pb-4">
              <div>
                <span className="text-xs font-mono text-amber-400 font-bold block mb-1">
                  {item.period} &bull; {item.type}
                </span>
                <h3 className="text-2xl font-bold text-white font-display">
                  {item.role}
                </h3>
                <p className="text-sm font-semibold text-slate-300 font-sans mt-0.5">
                  {item.company}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-slate-300 leading-relaxed">
              {item.description}
            </p>

            {/* Responsibilities list */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-mono uppercase text-slate-400 tracking-wider block">
                Areas of Work & Experience:
              </span>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs text-slate-300">
                {item.responsibilities.map((resp, rIdx) => (
                  <li key={rIdx} className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold text-sm shrink-0 leading-tight">•</span>
                    <span className="leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Tags */}
            <div className="pt-4 border-t border-[#1E2433] flex flex-wrap gap-2 font-mono text-xs">
              {item.technologies.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-1 rounded bg-[#0B0E14] text-slate-300 border border-white/5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
