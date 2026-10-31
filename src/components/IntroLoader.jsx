import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { personalData } from '../data/portfolioData'

export default function IntroLoader({ onComplete }) {
  const overlayRef = useRef(null)
  const counterRef = useRef(null)
  const progressLineRef = useRef(null)
  const nameRef = useRef(null)
  const roleRef = useRef(null)

  useEffect(() => {
    const counterObj = { val: 0 }
    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete()
      },
    })

    document.body.style.overflow = 'hidden'

    // Counter animation 00 to 100
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
        nameRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'expo.out' },
        '-=0.8',
      )
      .fromTo(
        roleRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.4, ease: 'power2.out' },
        '-=0.5',
      )
      // Curtain wipe reveal
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
      className="fixed inset-0 z-[999] bg-[#0B0E14] text-slate-100 flex flex-col justify-between p-6 sm:p-12 select-none border-b border-white/10"
    >
      {/* Top minimal watermark */}
      <div className="flex justify-between items-center text-xs font-mono text-slate-500 uppercase tracking-wider">
        <span>{personalData.location}</span>
        <span>PORTFOLIO // 2026</span>
      </div>

      {/* Center typography & percentage */}
      <div className="my-auto max-w-2xl w-full mx-auto space-y-6">
        <div className="space-y-2">
          <h1
            ref={nameRef}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-display uppercase"
          >
            {personalData.name}
          </h1>
          <p ref={roleRef} className="text-sm sm:text-base text-slate-400 font-sans">
            {personalData.headline}
          </p>
        </div>

        {/* Hairline Progress & Percentage */}
        <div className="space-y-3 pt-4">
          <div className="w-full h-[2px] bg-white/10 overflow-hidden">
            <div
              ref={progressLineRef}
              className="h-full bg-amber-400 origin-left scale-x-0 transition-transform"
            ></div>
          </div>
          <div className="flex justify-between items-center text-xs font-mono text-slate-500">
            <span>LOADING PORTFOLIO</span>
            <span ref={counterRef} className="font-bold text-amber-400">
              00%
            </span>
          </div>
        </div>
      </div>

      {/* Bottom minimal note */}
      <div className="text-xs font-mono text-slate-600 text-center">
        PRESS [ESC] OR CLICK LOGO AT ANY TIME TO REPLAY
      </div>
    </div>
  )
}
