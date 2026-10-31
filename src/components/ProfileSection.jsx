import SplitText from './common/SplitText'
import { personalData, experienceData } from '../data/portfolioData'

export default function ProfileSection() {
  return (
    <section id="profile" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Sticky Profile Bio & Education */}
        <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24 self-start">
          <div>
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
              // PROFILE & QUALIFICATIONS
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display mb-4">
              <SplitText text="BACKGROUND & FOCUS" />
            </h2>
          </div>

          <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
            {personalData.bio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Education Card */}
          {personalData.education && (
            <div className="p-5 rounded-lg bg-[#0C0F17] border border-white/10 space-y-2 font-mono text-xs">
              <div className="text-cyan-400 font-bold uppercase text-[11px]">
                ACADEMIC FOUNDATION
              </div>
              <div className="text-white font-bold text-sm">
                {personalData.education.degree}
              </div>
              <div className="text-slate-400">
                {personalData.education.institution} ({personalData.education.years})
              </div>
              <p className="text-slate-500 text-[11px] font-sans pt-1">
                {personalData.education.focus}
              </p>
            </div>
          )}
        </div>

        {/* Experience Timeline */}
        <div className="lg:col-span-7 space-y-6">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
            CAREER TIMELINE & RESPONSIBILITIES
          </div>

          <div className="space-y-6">
            {experienceData.map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-xl bg-[#0C0F17] border border-white/10 hover:border-cyan-500/40 transition-colors space-y-4 relative"
              >
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 border-b border-white/5 pb-3">
                  <div>
                    <span className="text-xs font-mono text-cyan-400 font-bold block">
                      {item.period}
                    </span>
                    <h3 className="text-xl font-bold text-white font-display mt-0.5">
                      {item.role}
                    </h3>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-white/5 text-slate-300 border border-white/10 self-start sm:self-auto">
                    {item.company} &bull; {item.type}
                  </span>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">{item.description}</p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2 font-mono text-[11px]">
                  {item.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-2 py-0.5 rounded bg-[#07090E] border border-white/10 text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
