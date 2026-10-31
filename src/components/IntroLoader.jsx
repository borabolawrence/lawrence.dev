import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { personalData } from '../data/portfolioData'

const bootLogs = [
  '[0.04s] INITIALIZING KERNEL SYSTEM...',
  '[0.12s] CONNECTING DAGUPAN_CLUSTER (16.0433° N, 120.3333° E)... OK',
  '[0.28s] VERIFYING MYSQL BINARY REPLICATION TOPOLOGY... SYNCED',
  '[0.45s] INITIALIZING NEXT.JS 15 RUNTIME & PHP 8.3 WORKERS... READY',
  '[0.62s] CHECKING LITESPEED / FS API OPTIMIZATION ENGINE... OK',
  '[0.85s] ALL SYSTEMS OPERATIONAL. LAUNCHING INTERFACE...',
]

export default function IntroLoader({ onComplete }) {
  const overlayRef = useRef(null)
  const counterRef = useRef(null)
  const progressLineRef = useRef(null)
  const [currentLogIndex, setCurrentLogIndex] = useState(0)

  useEffect(() => {
    const counterObj = { val: 0 }
    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete()
      },
    })

    document.body.style.overflow = 'hidden'

    // Cycle through boot log messages
    const logInterval = setInterval(() => {
      setCurrentLogIndex((prev) => (prev < bootLogs.length - 1 ? prev + 1 : prev))
    }, 220)

    // Progress counter 0 to 100
    tl.to(counterObj, {
      val: 100,
      duration: 1.3,
      ease: 'power3.inOut',
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.textContent = `${String(Math.floor(counterObj.val)).padStart(2, '0')}%`
        }
      },
    })
      .to(
        progressLineRef.current,
        {
          scaleX: 1,
          duration: 1.3,
          ease: 'power3.inOut',
        },
        '<',
      )
      // Curtain wipe reveal
      .to(overlayRef.current, {
        yPercent: -100,
        duration: 0.85,
        ease: 'expo.inOut',
        delay: 0.2,
        onComplete: () => {
          clearInterval(logInterval)
          document.body.style.overflow = ''
        },
      })

    return () => {
      clearInterval(logInterval)
      tl.kill()
      document.body.style.overflow = ''
    }
  }, [onComplete])

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[999] bg-[#07090E] text-slate-100 flex flex-col justify-between p-6 sm:p-12 font-mono select-none border-b border-cyan-500/20"
    >
      {/* Top Telemetry Header */}
      <div className="flex justify-between items-center text-xs tracking-wider border-b border-white/10 pb-4 text-slate-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-white font-bold">{personalData.shortName}</span>
          <span className="text-slate-500">[{personalData.systemVersion}]</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-slate-400">
          <span>LOC: {personalData.location}</span>
          <span className="text-emerald-400">REPL: ACTIVE</span>
        </div>
      </div>

      {/* Center Boot Telemetry & Counter */}
      <div className="my-auto max-w-3xl space-y-6">
        <div className="text-xs uppercase tracking-widest text-cyan-400 font-semibold flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 bg-cyan-400"></span>
          SYSTEM BOOT SEQUENCE // {personalData.year}
        </div>

        {/* Large Counter */}
        <div
          ref={counterRef}
          className="text-7xl sm:text-9xl font-black tracking-tighter text-white font-display"
        >
          00%
        </div>

        {/* Live Terminal Log Line */}
        <div className="bg-black/40 border border-white/10 rounded px-4 py-3 min-h-[48px] flex items-center">
          <span className="text-emerald-400 mr-2">&gt;</span>
          <span className="text-sm text-slate-300 font-mono">
            {bootLogs[currentLogIndex]}
          </span>
          <span className="w-2 h-4 bg-cyan-400 ml-1.5 animate-pulse"></span>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1 bg-white/10 overflow-hidden">
          <div
            ref={progressLineRef}
            className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 origin-left scale-x-0"
          ></div>
        </div>
      </div>

      {/* Bottom Status Bar */}
      <div className="flex justify-between items-center text-xs text-slate-500 border-t border-white/10 pt-4">
        <span>STATUS: {personalData.status}</span>
        <span className="hidden sm:inline">DATABASE & FULL-STACK INFRASTRUCTURE</span>
      </div>
    </div>
  )
}
