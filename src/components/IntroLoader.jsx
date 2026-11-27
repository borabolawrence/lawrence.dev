import { useState, useEffect, useRef, useCallback } from 'react'
import gsap from 'gsap'
import { personalData } from '../data/portfolioData'
import { palettes, applyPaletteToDOM, getSavedPalette } from '../data/paletteData'

export default function IntroLoader({ onComplete }) {
  const [selectedPalette, setSelectedPalette] = useState(() => getSavedPalette())
  const [isReadyToProceed, setIsReadyToProceed] = useState(false)

  const selectedPaletteRef = useRef(selectedPalette)
  useEffect(() => {
    selectedPaletteRef.current = selectedPalette
  }, [selectedPalette])

  const onCompleteRef = useRef(onComplete)
  useEffect(() => {
    onCompleteRef.current = onComplete
  }, [onComplete])

  const overlayRef = useRef(null)
  const counterRef = useRef(null)
  const titleRef = useRef(null)
  const progressLineRef = useRef(null)
  const statusRef = useRef(null)
  const counterContainerRef = useRef(null)
  const paletteContainerRef = useRef(null)
  const exitTimelineRef = useRef(null)

  const handleProceed = useCallback((paletteToUse) => {
    if (exitTimelineRef.current) return // Prevent duplicate clicks
    const finalPalette = paletteToUse || selectedPaletteRef.current
    applyPaletteToDOM(finalPalette)

    const exitTl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = ''
        if (onCompleteRef.current) onCompleteRef.current(finalPalette)
      },
    })
    exitTimelineRef.current = exitTl

    exitTl.to(overlayRef.current, {
      yPercent: -100,
      duration: 0.85,
      ease: 'expo.inOut',
    })
  }, [])

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    // Initial state setup via GSAP set (avoids sudden style jumps)
    gsap.set(paletteContainerRef.current, { opacity: 0, y: 30, pointerEvents: 'none' })
    gsap.set('.monolith-col', { opacity: 0, y: 25 })
    gsap.set('.palette-bottom-bar', { opacity: 0, y: 15 })

    const counterObj = { val: 0 }
    const masterTl = gsap.timeline({
      defaults: { ease: 'power3.inOut' },
    })

    // Phase 1: Boot counter & progress
    masterTl
      .to(counterObj, {
        val: 100,
        duration: 1.0,
        ease: 'power2.inOut',
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
          duration: 1.0,
          ease: 'power2.inOut',
        },
        '<',
      )
      .fromTo(
        titleRef.current,
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'expo.out' },
        '-=0.6',
      )
      .call(() => {
        if (statusRef.current) {
          statusRef.current.textContent = 'SYSTEM // READY FOR CALIBRATION'
        }
      })
      // Phase 2: Smooth fluid cross-fade from counter to palette selection
      .to(
        counterContainerRef.current,
        {
          y: -25,
          opacity: 0,
          duration: 0.45,
          ease: 'power2.inOut',
        },
        '+=0.15',
      )
      .to(
        paletteContainerRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'expo.out',
          onStart: () => {
            if (paletteContainerRef.current) {
              paletteContainerRef.current.style.pointerEvents = 'auto'
            }
          },
        },
        '-=0.2',
      )
      .to(
        '.monolith-col',
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.05,
          ease: 'expo.out',
        },
        '-=0.4',
      )
      .to(
        '.palette-bottom-bar',
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'power3.out',
          onComplete: () => {
            setIsReadyToProceed(true)
          },
        },
        '-=0.3',
      )

    // Keyboard support: Press Space or Enter to proceed
    const handleKeyDown = (e) => {
      if ((e.key === 'Enter' || e.key === ' ') && !exitTimelineRef.current) {
        e.preventDefault()
        handleProceed()
      }
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      masterTl.kill()
      if (exitTimelineRef.current) exitTimelineRef.current.kill()
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [handleProceed])

  const handleSelectPalette = (palette) => {
    setSelectedPalette(palette)
    applyPaletteToDOM(palette)
  }

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[999] bg-[#0A0A0C] text-[#F5F5F7] flex flex-col justify-between p-4 sm:p-8 lg:p-12 font-mono select-none overflow-y-auto lg:overflow-hidden"
    >
      {/* Top Header Status Bar */}
      <div className="flex justify-between items-center text-[11px] sm:text-xs tracking-wider border-b border-white/10 pb-3 sm:pb-4 shrink-0">
        <div className="flex items-center gap-2 sm:gap-2.5">
          <span
            className="inline-block w-2.5 h-2.5 rounded-full transition-all duration-300 shrink-0"
            style={{
              backgroundColor: selectedPalette.accent,
              boxShadow: `0 0 10px ${selectedPalette.accent}`,
            }}
          />
          <span className="font-bold truncate">
            {personalData.shortName} // CALIBRATION ENGINE
          </span>
        </div>
        <div className="hidden sm:block text-white/50 text-[11px] tracking-widest">
          {personalData.location} &bull; {personalData.coordinates}
        </div>
      </div>

      {/* Center Interactive Stage */}
      <div className="relative my-auto w-full max-w-7xl mx-auto flex items-center justify-center min-h-[280px] sm:min-h-[360px] py-4 sm:py-0">
        {/* STEP 1: INITIAL BOOT COUNTER */}
        <div
          ref={counterContainerRef}
          className="absolute inset-0 flex flex-col justify-center items-start space-y-4 max-w-3xl pointer-events-none"
        >
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
              {personalData.role} &bull; {personalData.year}
            </div>
          </div>

          <div className="w-full h-1 bg-white/10 overflow-hidden mt-6">
            <div
              ref={progressLineRef}
              className="h-full origin-left scale-x-0"
              style={{ backgroundColor: selectedPalette.accent }}
            />
          </div>
        </div>

        {/* STEP 2: EDITORIAL PALETTE MONOLITHS */}
        <div
          ref={paletteContainerRef}
          className="w-full flex flex-col justify-center space-y-4 sm:space-y-6"
        >
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-1.5 sm:gap-2 border-b border-white/10 pb-3 sm:pb-4">
            <div>
              <span
                className="text-[10px] sm:text-[11px] uppercase tracking-widest font-bold block"
                style={{ color: selectedPalette.accent }}
              >
                COLOR CALIBRATION // 06 PALETTES
              </span>
              <h2
                className="text-xl sm:text-3xl font-extrabold uppercase tracking-tight mt-0.5 sm:mt-1"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                SELECT ATMOSPHERE
              </h2>
            </div>
            <div className="text-[10px] sm:text-xs text-white/50 tracking-wider">
              TAP TO SELECT &bull; ENTER TO LAUNCH
            </div>
          </div>

          {/* 6 Monolithic Editorial Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-2.5 w-full">
            {palettes.map((p) => {
              const isSelected = selectedPalette.id === p.id
              return (
                <div
                  key={p.id}
                  onClick={() => handleSelectPalette(p)}
                  className={`monolith-col group relative p-3 sm:p-4 border cursor-pointer transition-all duration-300 flex flex-col justify-between min-h-[122px] sm:min-h-[200px] lg:min-h-[260px] bg-[#111114]/80 hover:bg-[#16161A] ${
                    isSelected ? 'border-white' : 'border-white/15 hover:border-white/40'
                  }`}
                  style={{
                    borderColor: isSelected ? p.accent : undefined,
                    boxShadow: isSelected
                      ? `0 0 24px ${p.accentGlow || `${p.accent}30`}`
                      : undefined,
                  }}
                >
                  {/* Top: Index & Status */}
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-white/40 font-mono tracking-wider text-[10px] sm:text-[11px]">
                      [{p.num}]
                    </span>
                    <span
                      className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-transform duration-300 ${
                        isSelected ? 'scale-125' : 'scale-90 opacity-40'
                      }`}
                      style={{
                        backgroundColor: p.accent,
                        boxShadow: isSelected ? `0 0 10px ${p.accent}` : undefined,
                      }}
                    />
                  </div>

                  {/* Middle: Display Title */}
                  <div className="my-auto py-1.5 sm:py-2">
                    <h3
                      className="text-sm sm:text-lg lg:text-xl font-bold tracking-tight text-white group-hover:text-white leading-tight"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {p.label}
                    </h3>
                    <p
                      className="text-[9px] sm:text-[10px] tracking-wider uppercase font-mono mt-0.5 sm:mt-1 font-semibold truncate"
                      style={{ color: isSelected ? p.accent : 'rgba(255, 255, 255, 0.45)' }}
                    >
                      {p.subtitle}
                    </p>
                  </div>

                  {/* Bottom: Solid Color Pillar & Active Pill */}
                  <div className="space-y-1.5 sm:space-y-2 pt-2 sm:pt-2.5 border-t border-white/10">
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full transition-all duration-300 origin-left"
                        style={{
                          backgroundColor: p.accent,
                          width: isSelected ? '100%' : '35%',
                        }}
                      />
                    </div>
                    <div className="flex justify-between items-center text-[9px] sm:text-[10px] font-mono">
                      <span className="text-white/40">{p.accent}</span>
                      <span
                        className="font-bold tracking-widest text-[8px] sm:text-[9px]"
                        style={{ color: isSelected ? p.accent : 'rgba(255, 255, 255, 0.3)' }}
                      >
                        {isSelected ? '✓ ACTIVE' : 'SELECT'}
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Bottom Action Bar */}
          <div className="palette-bottom-bar flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-white/10">
            <div className="text-[11px] sm:text-xs text-white/70 flex items-center gap-2 text-center sm:text-left">
              <span
                className="w-2.5 h-2.5 rounded-full inline-block shrink-0"
                style={{
                  backgroundColor: selectedPalette.accent,
                  boxShadow: `0 0 8px ${selectedPalette.accent}`,
                }}
              />
              <span>
                CURRENT: <strong className="text-white">{selectedPalette.name}</strong>{' '}
                <span className="hidden sm:inline">({selectedPalette.subtitle})</span>
              </span>
            </div>

            <div className="flex items-center gap-4 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => handleProceed()}
                disabled={!isReadyToProceed}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 border shadow-lg"
                style={{
                  backgroundColor: selectedPalette.accent,
                  color: selectedPalette.accentContrast || '#FFFFFF',
                  borderColor: selectedPalette.accent,
                  boxShadow: `0 0 20px ${selectedPalette.accentGlow || 'rgba(0,0,0,0.3)'}`,
                }}
              >
                ENTER PORTFOLIO →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Status Footer */}
      <div className="flex justify-between items-center text-[11px] sm:text-xs tracking-wider border-t border-white/10 pt-3 sm:pt-4 shrink-0">
        <span ref={statusRef} className="text-white/40">
          SYSTEM // INITIALIZING
        </span>
        <span className="text-white/30 hidden sm:inline">
          PRESS ENTER OR SPACE TO LAUNCH
        </span>
      </div>
    </div>
  )
}
