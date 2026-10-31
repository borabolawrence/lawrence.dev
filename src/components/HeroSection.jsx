import { useState } from 'react'
import { personalData, terminalCommands } from '../data/portfolioData'

export default function HeroSection() {
  const [inputVal, setInputVal] = useState('')
  const [history, setHistory] = useState([
    {
      cmd: 'test-replication',
      output: terminalCommands['test-replication'],
    },
  ])

  const handleCommand = (cmdToRun) => {
    const trimmed = (cmdToRun || inputVal).trim().toLowerCase()
    if (!trimmed) return

    if (trimmed === 'clear') {
      setHistory([])
      setInputVal('')
      return
    }

    const output =
      terminalCommands[trimmed] || [
        `Command not recognized: '${trimmed}'. Type 'help' for available commands.`,
      ]

    setHistory((prev) => [...prev, { cmd: trimmed, output }])
    setInputVal('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleCommand()
  }

  return (
    <section id="hero" className="hero-section min-h-screen pt-28 pb-16 px-4 sm:px-8 bg-blueprint">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Mission, Kinetic Typography, & Primary Specs */}
        <div className="lg:col-span-7 space-y-8">
          {/* Node Status Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/40 text-cyan-400 border border-cyan-800/50">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>NODE: {personalData.coordinates} &bull; DAGUPAN CITY</span>
          </div>

          {/* Kinetic Display Title */}
          <div className="hero-text-block">
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white font-display uppercase leading-[0.95]">
              <span className="mask-wrap block">
                <span className="word">DATABASE</span> <span className="word text-cyan-400">INTEGRITY.</span>
              </span>
              <span className="mask-wrap block">
                <span className="word">SYSTEMS</span> <span className="word">&</span> <span className="word text-emerald-400">FULLSTACK.</span>
              </span>
            </h1>
          </div>

          {/* Subtitle Statement */}
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            {personalData.name} — Web Developer & former MIS Associate merging enterprise database
            replication, PowerShell automation, and high-throughput server caching with modern Next.js
            and WordPress architectures.
          </p>

          {/* Primary Stack Chips */}
          <div className="space-y-2">
            <div className="text-xs font-mono uppercase text-slate-500 tracking-wider">
              Primary Technologies:
            </div>
            <div className="flex flex-wrap gap-2 font-mono text-xs">
              {personalData.primaryStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded bg-[#111622] text-slate-300 border border-white/10 hover:border-cyan-500/40 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#work"
              className="px-6 py-3 rounded bg-cyan-500 text-slate-950 font-bold font-mono text-xs uppercase hover:bg-cyan-400 transition-colors shadow-[0_0_20px_rgba(0,229,255,0.3)] magnetic-link"
            >
              Explore Architecture ↗
            </a>
            <a
              href="#systems"
              className="px-6 py-3 rounded border border-white/10 bg-[#0F131D] text-slate-300 hover:text-white hover:border-white/20 font-mono text-xs uppercase transition-colors magnetic-link"
            >
              Infrastructure Specs
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Live PowerShell Terminal */}
        <div className="lg:col-span-5">
          <div className="terminal-window">
            {/* Terminal Window Header */}
            <div className="terminal-header px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              </div>
              <div className="text-[11px] font-mono text-slate-400">
                pwsh.exe &bull; C:\Lawrence\portfolio
              </div>
              <div className="w-12"></div>
            </div>

            {/* Terminal Command Presets */}
            <div className="px-4 py-2 bg-[#0C1018] border-b border-white/5 flex flex-wrap gap-1.5 text-[10px] font-mono">
              <span className="text-slate-500 self-center">Presets:</span>
              {['get-stack', 'test-replication', 'show-experience', 'help', 'clear'].map(
                (cmd) => (
                  <button
                    key={cmd}
                    type="button"
                    onClick={() => handleCommand(cmd)}
                    className="px-2 py-0.5 rounded bg-white/5 text-cyan-400 hover:bg-cyan-500/20 hover:text-cyan-300 border border-white/5 transition-colors cursor-pointer"
                  >
                    &gt; {cmd}
                  </button>
                ),
              )}
            </div>

            {/* Terminal Output Area */}
            <div className="p-4 font-mono text-xs space-y-3 max-h-[360px] overflow-y-auto">
              <div className="text-slate-500 text-[11px]">
                Type <span className="text-cyan-400">'help'</span> or click preset chips to query
                infrastructure telemetry.
              </div>

              {history.map((entry, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center text-emerald-400 font-semibold">
                    <span className="text-slate-500 mr-1.5">PS C:\&gt;</span>
                    <span>{entry.cmd}</span>
                  </div>
                  <div className="text-slate-300 pl-3 border-l border-white/10 space-y-0.5 whitespace-pre-wrap leading-relaxed text-[11px]">
                    {entry.output.map((line, lineIdx) => (
                      <div
                        key={lineIdx}
                        className={
                          line.includes('[OK]')
                            ? 'text-emerald-400'
                            : line.includes('SYNCHRONIZED')
                              ? 'text-cyan-400 font-bold'
                              : 'text-slate-300'
                        }
                      >
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Active Prompt Line */}
              <form onSubmit={handleSubmit} className="flex items-center text-slate-200 pt-1">
                <span className="text-slate-500 mr-2">PS C:\&gt;</span>
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="type command..."
                  className="bg-transparent border-none outline-none text-slate-100 font-mono text-xs w-full focus:ring-0"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
