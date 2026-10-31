import { useState } from 'react'
import SplitText from './common/SplitText'
import { personalData } from '../data/portfolioData'

export default function ContactSection() {
  const { email, phone, github } = personalData.contact
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/10 mb-12">
      <div className="bg-[#0C0F17] border border-white/10 rounded-2xl p-8 sm:p-16 text-center space-y-8 relative overflow-hidden">
        <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
          // INITIATE CONNECTION
        </div>

        <h2 className="text-4xl sm:text-6xl font-black text-white font-display tracking-tight uppercase">
          <SplitText text="LET'S ENGINEER TOGETHER" />
        </h2>

        <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Available for web development roles, database engineering challenges, and custom full-stack
          projects prioritizing data integrity and speed.
        </p>

        {/* Contact Links Box */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4 font-mono text-xs">
          <button
            type="button"
            onClick={copyEmail}
            className="px-6 py-3.5 rounded-lg bg-cyan-500 text-slate-950 font-bold uppercase hover:bg-cyan-400 transition shadow-[0_0_20px_rgba(0,229,255,0.25)] flex items-center gap-2 cursor-pointer"
          >
            <span>{copied ? '✓ COPIED TO CLIPBOARD' : `COPY: ${email}`}</span>
          </button>

          {phone && (
            <a
              href={`tel:${phone}`}
              className="px-6 py-3.5 rounded-lg bg-white/5 hover:bg-white/10 text-white border border-white/10 transition flex items-center gap-2"
            >
              <span>{phone}</span>
            </a>
          )}

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-lg bg-white/5 hover:bg-white/10 text-white border border-white/10 transition flex items-center gap-2"
            >
              <span>GITHUB PROFILE ↗</span>
            </a>
          )}
        </div>

        {/* Coordinate Stamp */}
        <div className="pt-8 text-xs font-mono text-slate-500 flex flex-wrap items-center justify-center gap-4 border-t border-white/5">
          <span>{personalData.location}</span>
          <span>&bull;</span>
          <span>{personalData.coordinates}</span>
          <span>&bull;</span>
          <span className="text-emerald-400">STATUS: OPEN FOR OPPORTUNITIES</span>
        </div>
      </div>
    </section>
  )
}
