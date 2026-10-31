import { personalData } from '../data/portfolioData'

export default function TelemetryBar() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <aside aria-label="System Telemetry Status Bar" className="fixed bottom-0 left-0 w-full z-40 bg-[#07090E]/95 backdrop-blur-md border-t border-white/10 py-2 px-4 sm:px-8 font-mono text-[11px] text-slate-400 select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Telemetry Indicators */}
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>SYSTEM: ONLINE</span>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <span className="text-slate-600">|</span>
            <span className="text-cyan-400">MYSQL REPL: SYNCED</span>
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <span className="text-slate-600">|</span>
            <span>NODE: {personalData.location}</span>
          </div>
        </div>

        {/* Right Info & Back to top */}
        <div className="flex items-center gap-4">
          <span className="text-slate-500 hidden sm:inline">{personalData.systemVersion}</span>
          <button
            type="button"
            onClick={scrollToTop}
            className="text-slate-300 hover:text-cyan-400 cursor-pointer font-bold flex items-center gap-1"
          >
            <span>↑</span>
            <span>TOP</span>
          </button>
        </div>
      </div>
    </aside>
  )
}
