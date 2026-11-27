import { useState, useRef, useEffect } from 'react'
import { palettes, applyPaletteToDOM } from '../data/paletteData'

export default function PaletteSwitcher({ currentPalette, onPaletteChange }) {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false)
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  const handleSelect = (palette) => {
    applyPaletteToDOM(palette)
    if (onPaletteChange) onPaletteChange(palette)
    setIsOpen(false)
  }

  return (
    <div className="relative inline-block font-mono text-xs" ref={menuRef}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="palette-switcher-btn group flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 border border-current/30 hover:border-current text-xs uppercase tracking-wider cursor-pointer transition-all select-none bg-current/5 hover:bg-current/10"
        style={{
          boxShadow: isOpen ? `0 0 16px ${currentPalette.accentGlow || 'rgba(0,0,0,0.2)'}` : undefined,
          borderColor: isOpen ? currentPalette.accent : undefined,
        }}
        title="Open color palette calibration"
        aria-expanded={isOpen}
        aria-label="Color palette selector"
      >
        {/* Glowing Active Dot */}
        <span
          className="w-2.5 h-2.5 rounded-full inline-block flex-shrink-0 transition-transform duration-300 group-hover:scale-125"
          style={{
            backgroundColor: currentPalette.accent,
            boxShadow: `0 0 8px ${currentPalette.accent}`,
          }}
        />

        {/* Current Palette Label */}
        <span className="font-semibold tracking-wider max-w-[92px] sm:max-w-none truncate">
          {currentPalette.label}
        </span>

        {/* Mini 3-tone swatch bar */}
        <span className="hidden sm:inline-flex items-center gap-0.5 ml-1 border border-current/20 p-0.5 rounded-sm">
          <span
            className="w-1.5 h-2.5 rounded-xs inline-block"
            style={{ backgroundColor: currentPalette.bgDark }}
          />
          <span
            className="w-1.5 h-2.5 rounded-xs inline-block"
            style={{ backgroundColor: currentPalette.bgLight }}
          />
          <span
            className="w-1.5 h-2.5 rounded-xs inline-block"
            style={{ backgroundColor: currentPalette.accent }}
          />
        </span>

        {/* Dynamic Chevron */}
        <span
          className={`opacity-60 transition-transform duration-200 text-[10px] ${
            isOpen ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        >
          ▾
        </span>
      </button>

      {isOpen && (
        <div
          className="fixed left-4 right-4 top-[4.25rem] sm:absolute sm:left-auto sm:right-0 sm:top-auto sm:mt-2.5 sm:w-[350px] p-3.5 border border-white/20 bg-[#0A0A0C] text-[#F5F5F7] shadow-[0_25px_60px_rgba(0,0,0,0.85)] z-50 space-y-2.5 rounded-xs"
          style={{
            boxShadow: `0 20px 50px -10px rgba(0,0,0,0.9), 0 0 25px -5px ${currentPalette.accentGlow || 'transparent'}`,
          }}
        >
          {/* Header Bar */}
          <div className="flex justify-between items-center pb-2.5 border-b border-white/10 text-[10px] uppercase tracking-wider text-white">
            <span className="font-bold flex items-center gap-1.5">
              <span
                className="w-1.5 h-1.5 rounded-full inline-block"
                style={{
                  backgroundColor: currentPalette.accent,
                  boxShadow: `0 0 6px ${currentPalette.accent}`,
                }}
              />
              SYSTEM CALIBRATION
            </span>
            <span className="text-white/50">06 PROFILES</span>
          </div>

          {/* Palette List */}
          <div className="space-y-1.5 max-h-[65vh] sm:max-h-[360px] overflow-y-auto pr-1">
            {palettes.map((p) => {
              const isSelected = p.id === currentPalette.id
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => handleSelect(p)}
                  className={`w-full text-left p-2.5 border transition-all cursor-pointer flex flex-col gap-1.5 rounded-xs ${
                    isSelected
                      ? 'border-white text-white font-bold'
                      : 'border-white/10 text-white/90 hover:border-white/40 hover:bg-white/5 hover:text-white'
                  }`}
                  style={{
                    backgroundColor: isSelected ? `${p.accent}25` : 'rgba(255, 255, 255, 0.02)',
                    borderColor: isSelected ? p.accent : undefined,
                    boxShadow: isSelected ? `0 0 16px ${p.accent}30` : undefined,
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-white/40">[{p.num}]</span>
                      <span
                        className="w-3 h-3 rounded-full flex-shrink-0 transition-transform duration-200"
                        style={{
                          backgroundColor: p.accent,
                          boxShadow: isSelected ? `0 0 10px ${p.accent}` : undefined,
                        }}
                      />
                      <span className="text-xs font-bold tracking-tight text-white">{p.name}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className="text-[9px] font-mono px-1.5 py-0.5 border uppercase"
                        style={{
                          color: isSelected ? p.accent : 'rgba(255, 255, 255, 0.7)',
                          borderColor: isSelected ? `${p.accent}80` : 'rgba(255, 255, 255, 0.15)',
                          backgroundColor: isSelected ? `${p.accent}15` : 'transparent',
                        }}
                      >
                        {p.accent}
                      </span>
                      {isSelected ? (
                        <span
                          className="text-xs font-black"
                          style={{ color: p.accent }}
                          aria-label="Selected"
                        >
                          ✓
                        </span>
                      ) : (
                        <span className="text-[10px] text-white/30">→</span>
                      )}
                    </div>
                  </div>

                  {/* Subtitle & Tri-tone Preview Bar */}
                  <div className="flex items-center justify-between text-[10px] text-white/60">
                    <span className="truncate max-w-[200px]">{p.subtitle}</span>
                    <span className="inline-flex items-center gap-1">
                      <span
                        className="w-2.5 h-2 rounded-xs border border-white/20"
                        style={{ backgroundColor: p.bgDark }}
                        title="Dark Background"
                      />
                      <span
                        className="w-2.5 h-2 rounded-xs border border-white/20"
                        style={{ backgroundColor: p.bgLight }}
                        title="Light Background"
                      />
                      <span
                        className="w-2.5 h-2 rounded-xs"
                        style={{ backgroundColor: p.accent }}
                        title="Accent"
                      />
                    </span>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Quick Footer Status */}
          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-white/40">
            <span>ESC TO CLOSE</span>
            <span>PERSISTED TO STORAGE</span>
          </div>
        </div>
      )}
    </div>
  )
}
