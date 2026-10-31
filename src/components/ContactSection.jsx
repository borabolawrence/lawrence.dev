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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer id="contact" className="pt-24 pb-12 px-4 sm:px-8 max-w-6xl mx-auto border-t border-[#1E2433]">
      <div className="p-8 sm:p-14 rounded-2xl bg-[#121620] border border-[#1E2433] space-y-8">
        <div className="space-y-3">
          <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block">
            06 // INITIATE CONTACT
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
            <SplitText text="LET'S CONNECT" />
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            I am always open to discussing web development opportunities, WordPress engineering,
            backend architectures, and practical technical solutions.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="flex flex-wrap items-center gap-4 pt-2 font-mono text-xs">
          <button
            type="button"
            onClick={copyEmail}
            className="px-6 py-3.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold uppercase transition-colors shadow-sm flex items-center gap-2 cursor-pointer"
          >
            <span>{copied ? '✓ Copied to Clipboard' : `Email: ${email}`}</span>
          </button>

          {phone && (
            <a
              href={`tel:${phone}`}
              className="px-5 py-3.5 rounded-lg bg-[#0B0E14] hover:bg-[#181E2B] text-slate-200 border border-white/10 transition-colors"
            >
              Call: {phone}
            </a>
          )}

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-lg bg-[#0B0E14] hover:bg-[#181E2B] text-slate-200 border border-white/10 transition-colors flex items-center gap-1.5"
            >
              <span>GitHub Profile</span>
              <span className="text-amber-400">↗</span>
            </a>
          )}
        </div>

        {/* Location & Metadata Stamp */}
        <div className="pt-8 border-t border-[#1E2433] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-mono text-slate-500">
          <div>
            <span>{personalData.location}</span>
          </div>
          <div className="flex items-center gap-6">
            <span>© {new Date().getFullYear()} {personalData.name}</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="hover:text-amber-400 text-slate-400 transition cursor-pointer"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
