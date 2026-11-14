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
        className="palette-switcher-btn flex items-center gap-2 px-3 py-1.5 border border-current text-xs uppercase tracking-wider cursor-pointer hover:opacity-80 transition-all select-none"
        title="Change portfolio color palette"
        aria-expanded={isOpen}
        aria-label="Color palette selector"
      >
        <span
          className="w-2.5 h-2.5 rounded-full inline-block"
          style={{ backgroundColor: currentPalette.accent }}
        />
        <span className="hidden md:inline">{currentPalette.name.split(' ')[1] || currentPalette.name}</span>
        <span className="opacity-50">▾</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 p-3 border border-current bg-[var(--bg-dark)] text-[var(--text-dark)] shadow-2xl z-50 space-y-2">
          <div className="flex justify-between items-center pb-2 border-b border-current/20 text-[10px] uppercase tracking-wider opacity-60">
            <span>Color Palettes</span>
            <span>05 Options</span>
          </div>

          <div className="space-y-1 max-h-72 overflow-y-auto">
            {palettes.map((p) => {
              const isSelected = p.id === currentPalette.id
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => handleSelect(p)}
                  className={`w-full text-left p-2 border transition-all cursor-pointer flex items-center justify-between text-xs ${
                    isSelected ? 'border-current font-bold' : 'border-transparent hover:border-current/30'
                  }`}
                  style={{
                    backgroundColor: isSelected ? `${p.accent}20` : 'transparent',
                    borderColor: isSelected ? p.accent : undefined,
                  }}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="w-3 h-3 rounded-full flex-shrink-0"
                      style={{ backgroundColor: p.accent }}
                    />
                    <span>{p.name}</span>
                  </div>
                  {isSelected && (
                    <span className="text-[10px]" style={{ color: p.accent }}>
                      ✓
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
