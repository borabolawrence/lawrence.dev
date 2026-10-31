import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { personalData } from '../data/portfolioData'

export default function IntroLoader({ onComplete }) {
  const overlayRef = useRef(null)
  const counterRef = useRef(null)
  const titleRef = useRef(null)
  const progressLineRef = useRef(null)
  const statusRef = useRef(null)

  useEffect(() => {
    const counterObj = { val: 0 }
    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete()
      },
    })

    document.body.style.overflow = 'hidden'

    tl.to(counterObj, {
      val: 100,
      duration: 1.1,
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
          duration: 1.1,
          ease: 'power3.inOut',
        },
        '<',
      )
      .fromTo(
        titleRef.current,
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'expo.out' },
        '-=0.7',
      )
      .call(() => {
        if (statusRef.current) {
          statusRef.current.textContent = 'SYSTEM // READY'
        }
      })
      .to(overlayRef.current, {
        yPercent: -100,
        duration: 0.85,
        ease: 'expo.inOut',
        delay: 0.15,
        onComplete: () => {
          document.body.style.overflow = ''
        },
      })

    return () => {
      tl.kill()
      document.body.style.overflow = ''
    }
  }, [onComplete])

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[999] bg-[#0A0A0A] text-[#F4F4F4] flex flex-col justify-between p-6 sm:p-12 font-mono select-none"
    >
      <div className="flex justify-between items-center text-xs tracking-wider border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-[#00FF66] animate-pulse"></span>
          <span>{personalData.shortName} // {personalData.version}</span>
        </div>
        <div className="hidden sm:block text-slate-400">
          {personalData.location} &bull; {personalData.coordinates}
        </div>
      </div>

      <div className="my-auto space-y-4 max-w-4xl">
        <div
          ref={counterRef}
          className="text-6xl sm:text-9xl font-extrabold tracking-tighter"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          00%
        </div>

        <div ref={titleRef} className="space-y-1">
          <div
            className="text-2xl sm:text-4xl font-bold uppercase tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {personalData.name}
          </div>
          <div className="text-xs sm:text-sm tracking-widest text-[#FF3300] uppercase font-bold">
            {personalData.role} &bull; Creative Engineering
          </div>
        </div>

        <div className="w-full h-1 bg-white/10 overflow-hidden mt-6">
          <div
            ref={progressLineRef}
            className="h-full bg-[#FF3300] origin-left scale-x-0 transition-transform"
          ></div>
        </div>
      </div>

      <div className="flex justify-between items-center text-xs tracking-wider border-t border-white/10 pt-4">
        <span ref={statusRef} className="text-slate-400">
          INITIALIZING DIGITAL SYSTEM...
        </span>
        <span className="text-slate-500 hidden sm:inline">{personalData.year} PORTFOLIO ARCHIVE</span>
      </div>
    </div>
  )
}
