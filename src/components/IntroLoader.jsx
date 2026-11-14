import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { personalData } from '../data/portfolioData'
import { palettes, applyPaletteToDOM, getSavedPalette } from '../data/paletteData'

export default function IntroLoader({ onComplete }) {
  const [stage, setStage] = useState('loading') // 'loading' | 'palette'
  const [selectedPalette, setSelectedPalette] = useState(() => getSavedPalette())

  const overlayRef = useRef(null)
  const counterRef = useRef(null)
  const titleRef = useRef(null)
  const progressLineRef = useRef(null)
  const statusRef = useRef(null)
  const paletteContainerRef = useRef(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    const counterObj = { val: 0 }
    const tl = gsap.timeline()

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
          statusRef.current.textContent = 'SYSTEM // READY FOR CALIBRATION'
        }
        // Smoothly transition from counter to palette selection
        setTimeout(() => {
          setStage('palette')
        }, 300)
      })

    return () => {
      tl.kill()
      document.body.style.overflow = ''
    }
  }, [])

  // Animate palette cards when entering the palette stage
  useEffect(() => {
    if (stage === 'palette' && paletteContainerRef.current) {
      gsap.fromTo(
        paletteContainerRef.current.querySelectorAll('.palette-card'),
        { y: 30, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: 'expo.out',
        },
      )

      gsap.fromTo(
        paletteContainerRef.current.querySelector('.palette-cta-row'),
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, delay: 0.45, ease: 'power3.out' },
      )
    }
  }, [stage])

  const handleSelectPalette = (palette) => {
    setSelectedPalette(palette)
    applyPaletteToDOM(palette)
  }

  const handleProceed = () => {
    applyPaletteToDOM(selectedPalette)

    gsap.to(overlayRef.current, {
      yPercent: -100,
      duration: 0.85,
      ease: 'expo.inOut',
      onComplete: () => {
        document.body.style.overflow = ''
        if (onComplete) onComplete(selectedPalette)
      },
    })
  }

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[999] bg-[#0A0A0A] text-[#F4F4F4] flex flex-col justify-between p-6 sm:p-12 font-mono select-none overflow-y-auto"
      style={{
        backgroundColor: stage === 'palette' ? selectedPalette.bgDark : '#0A0A0A',
        color: stage === 'palette' ? selectedPalette.textDark : '#F4F4F4',
        transition: 'background-color 0.4s ease, color 0.4s ease',
      }}
    >
      {/* Top Header */}
      <div className="flex justify-between items-center text-xs tracking-wider border-b border-current/15 pb-4">
        <div className="flex items-center gap-2">
          <span
            className="inline-block w-2.5 h-2.5 rounded-full animate-pulse"
            style={{ backgroundColor: selectedPalette.accent }}
          ></span>
          <span>
            {personalData.shortName} // {stage === 'loading' ? 'INITIALIZING' : 'CALIBRATING'}
          </span>
        </div>
        <div className="hidden sm:block opacity-60">
          {personalData.location} &bull; {personalData.coordinates}
        </div>
      </div>

      {/* STAGE 1: SYSTEM LOADING COUNTER */}
      {stage === 'loading' && (
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
            <div
              className="text-xs sm:text-sm tracking-widest uppercase font-bold"
              style={{ color: selectedPalette.accent }}
            >
              {personalData.role} &bull; lawrence.dev
            </div>
          </div>

          <div className="w-full h-1 bg-white/10 overflow-hidden mt-6">
            <div
              ref={progressLineRef}
              className="h-full origin-left scale-x-0 transition-transform"
              style={{ backgroundColor: selectedPalette.accent }}
            ></div>
          </div>
        </div>
      )}

      {/* STAGE 2: COLOR PALETTE SELECTION */}
      {stage === 'palette' && (
        <div ref={paletteContainerRef} className="my-auto py-8 max-w-5xl mx-auto w-full space-y-8">
          <div className="space-y-2 text-center sm:text-left">
            <span
              className="text-xs uppercase tracking-widest font-semibold"
              style={{ color: selectedPalette.accent }}
            >
              STEP 02 // ENVIRONMENT CALIBRATION
            </span>
            <h2
              className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              SELECT COLOR PROFILE
            </h2>
            <p className="text-sm opacity-75 max-w-xl">
              Customize your viewing comfort. Select one of the curated palettes below before entering the portfolio:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {palettes.map((p) => {
              const isSelected = selectedPalette.id === p.id
              return (
                <div
                  key={p.id}
                  onClick={() => handleSelectPalette(p)}
                  className={`palette-card p-4 border cursor-pointer transition-all duration-200 flex flex-col justify-between gap-4 ${
                    isSelected ? 'ring-2' : 'hover:scale-[1.02]'
                  }`}
                  style={{
                    borderColor: isSelected ? p.accent : 'currentColor',
                    opacity: isSelected ? 1 : 0.75,
                    backgroundColor: isSelected ? `${p.accent}15` : 'transparent',
                    boxShadow: isSelected ? `0 0 16px ${p.accent}30` : 'none',
                  }}
                >
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-[10px] tracking-wider opacity-60">
                      <span>{p.tag}</span>
                      {isSelected && (
                        <span
                          className="px-1.5 py-0.5 text-[9px] font-bold uppercase rounded"
                          style={{ backgroundColor: p.accent, color: '#000000' }}
                        >
                          ACTIVE
                        </span>
                      )}
                    </div>
                    <div
                      className="font-bold text-sm tracking-tight"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {p.name}
                    </div>
                    <p className="text-[11px] leading-relaxed opacity-70">
                      {p.description}
                    </p>
                  </div>

                  {/* Swatches preview */}
                  <div className="pt-2 border-t border-current/15 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      {p.swatches.map((color, idx) => (
                        <span
                          key={idx}
                          className="w-4 h-4 rounded-full border border-black/20"
                          style={{ backgroundColor: color }}
                          title={color}
                        />
                      ))}
                    </div>
                    <span
                      className="text-[10px] font-bold"
                      style={{ color: isSelected ? p.accent : 'inherit' }}
                    >
                      {isSelected ? '✓ SELECTED' : 'SELECT'}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Action Row */}
          <div className="palette-cta-row flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-current/15">
            <div className="text-xs opacity-60 flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full inline-block"
                style={{ backgroundColor: selectedPalette.accent }}
              />
              Active: <strong style={{ color: selectedPalette.accent }}>{selectedPalette.name}</strong>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={handleProceed}
                className="w-full sm:w-auto px-8 py-3.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 border border-current"
                style={{
                  backgroundColor: selectedPalette.accent,
                  color: '#FFFFFF',
                  borderColor: selectedPalette.accent,
                }}
              >
                PROCEED TO PORTFOLIO →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Footer */}
      <div className="flex justify-between items-center text-xs tracking-wider border-t border-current/15 pt-4">
        <span ref={statusRef} className="opacity-60">
          {stage === 'loading' ? 'INITIALIZING ENGINE...' : 'CALIBRATION MODE'}
        </span>
        <span className="opacity-50 hidden sm:inline">
          {personalData.year} PORTFOLIO ARCHIVE
        </span>
      </div>
    </div>
  )
}
