import SplitText from './common/SplitText'
import { personalData, dualPerspective } from '../data/portfolioData'

export default function ApproachSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-8 max-w-6xl mx-auto border-t border-[#1E2433] space-y-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-4">
          <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block mb-2">
            01 // BACKGROUND
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            <SplitText text="ABOUT ME" />
          </h2>
        </div>

        <div className="lg:col-span-8 space-y-5 text-slate-300 text-base leading-relaxed">
          {personalData.about.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}

          <div className="p-6 rounded-xl bg-[#121620] border-l-4 border-amber-400 text-slate-200 text-sm italic font-sans leading-relaxed mt-6">
            "{personalData.philosophy}"
          </div>
        </div>
      </div>

      <div id="approach" className="space-y-8 pt-8">
        <div className="space-y-2">
          <span className="text-xs font-mono text-amber-400 uppercase tracking-wider">
            02 // THE DUAL PERSPECTIVE
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
            How Development & Operations Work Together
          </h3>
          <p className="text-slate-400 text-sm max-w-2xl">
            Combining direct business IT experience with modern software development practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dualPerspective.map((pillar, idx) => (
            <div
              key={idx}
              className="p-8 rounded-xl bg-[#121620] border border-[#1E2433] card-hover space-y-4"
            >
              <div className="space-y-1">
                <span className="text-xs font-mono text-amber-400 uppercase font-semibold">
                  AREA 0{idx + 1}
                </span>
                <h4 className="text-xl font-bold text-white font-display">{pillar.category}</h4>
                <p className="text-xs text-slate-400 font-mono">{pillar.subtitle}</p>
              </div>

              <ul className="space-y-3 pt-3 border-t border-[#1E2433] text-sm text-slate-300">
                {pillar.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5">
                    <span className="text-amber-400 font-bold text-sm shrink-0 mt-0.5">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
