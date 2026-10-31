import { personalData } from '../data/portfolioData'

export default function HeroSection() {
  return (
    <section id="hero" className="hero-section min-h-[90vh] flex flex-col justify-center pt-28 pb-16 px-4 sm:px-8 max-w-6xl mx-auto">
      <div className="space-y-8 max-w-4xl">
        {/* Status indicator */}
        <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] text-slate-300 border border-white/10">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span>{personalData.currentRole} &bull; {personalData.location}</span>
        </div>

        {/* Kinetic Heading */}
        <div className="hero-text-block">
          <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white font-display uppercase leading-[1.05]">
            <span className="mask-wrap block">
              <span className="word">ENGINEERING</span> <span className="word">PRACTICAL</span>
            </span>
            <span className="mask-wrap block">
              <span className="word text-amber-400">WEB</span> <span className="word text-amber-400">SOLUTIONS</span>
            </span>
            <span className="mask-wrap block">
              <span className="word">WITH</span> <span className="word">SYSTEMS</span> <span className="word text-slate-400">DEPTH.</span>
            </span>
          </h1>
        </div>

        {/* Lead Summary */}
        <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-sans max-w-3xl">
          {personalData.tagline} Currently developing and maintaining WordPress and web-based
          applications at Guanzon, backed by hands-on experience in MySQL operations, SQL analysis,
          and PowerShell automation.
        </p>

        {/* Key Quick Facts Grid */}
        <div className="hero-meta grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#1E2433]">
          <div className="meta-item space-y-1">
            <span className="text-[11px] font-mono uppercase text-slate-500 tracking-wider">
              Primary Focus
            </span>
            <p className="text-sm font-semibold text-white">
              WordPress, PHP & Next.js Full-Stack
            </p>
          </div>
          <div className="meta-item space-y-1">
            <span className="text-[11px] font-mono uppercase text-slate-500 tracking-wider">
              Foundation
            </span>
            <p className="text-sm font-semibold text-white">
              MySQL, Relational Data & Scripting
            </p>
          </div>
          <div className="meta-item space-y-1">
            <span className="text-[11px] font-mono uppercase text-slate-500 tracking-wider">
              Education & Cert
            </span>
            <p className="text-sm font-semibold text-white">
              BSIT Graduate &bull; NC II Certified
            </p>
          </div>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-wrap items-center gap-4 pt-2 font-mono text-xs">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold uppercase transition-colors shadow-sm magnetic-link"
          >
            Selected Projects ↓
          </a>
          <a
            href="#experience"
            className="px-6 py-3 rounded-lg border border-white/10 bg-[#121620] hover:bg-[#181E2B] text-slate-300 hover:text-white transition-colors uppercase magnetic-link"
          >
            Work History
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-transparent text-slate-400 hover:text-amber-400 transition-colors uppercase"
          >
            Get In Touch ↗
          </a>
        </div>
      </div>
    </section>
  )
}
