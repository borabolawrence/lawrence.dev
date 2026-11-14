export const palettes = [
  {
    id: 'crimson',
    name: 'Brutalist Crimson',
    tag: 'EDITORIAL / DEFAULT',
    description: 'High-contrast monochrome with electric scarlet accent.',
    accent: '#FF3300',
    accentLight: '#D90000',
    bgLight: '#F4F4F4',
    textLight: '#111111',
    bgDark: '#0A0A0A',
    textDark: '#F4F4F4',
    swatches: ['#F4F4F4', '#0A0A0A', '#FF3300'],
  },
  {
    id: 'amber',
    name: 'Cyber Amber',
    tag: 'INDUSTRIAL / WARM',
    description: 'Deep carbon charcoal with vivid industrial warning amber.',
    accent: '#FF9900',
    accentLight: '#D97706',
    bgLight: '#F6F4EE',
    textLight: '#181613',
    bgDark: '#0E0D0B',
    textDark: '#F6F4EE',
    swatches: ['#F6F4EE', '#0E0D0B', '#FF9900'],
  },
  {
    id: 'matrix',
    name: 'Acid Emerald',
    tag: 'TERMINAL / MATRIX',
    description: 'Obsidian void with glowing neon cyber-green accent.',
    accent: '#00FF66',
    accentLight: '#059669',
    bgLight: '#EFF5F1',
    textLight: '#0E1711',
    bgDark: '#080E0A',
    textDark: '#EFF5F1',
    swatches: ['#EFF5F1', '#080E0A', '#00FF66'],
  },
  {
    id: 'cobalt',
    name: 'Cobalt Blueprint',
    tag: 'TECHNICAL / SPEC',
    description: 'Engineering blueprint navy with high-voltage electric blue.',
    accent: '#0066FF',
    accentLight: '#1D4ED8',
    bgLight: '#F0F4FA',
    textLight: '#0B1321',
    bgDark: '#080D18',
    textDark: '#F0F4FA',
    swatches: ['#F0F4FA', '#080D18', '#0066FF'],
  },
  {
    id: 'violet',
    name: 'Tokyo Violet',
    tag: 'SYNTH / NOCTURNE',
    description: 'Midnight amethyst with sharp ultraviolet neon accent.',
    accent: '#B04BFF',
    accentLight: '#7E22CE',
    bgLight: '#F5F2F9',
    textLight: '#150E1F',
    bgDark: '#0D0914',
    textDark: '#F5F2F9',
    swatches: ['#F5F2F9', '#0D0914', '#B04BFF'],
  },
]

export const DEFAULT_PALETTE_ID = 'crimson'

export function getActivePalette(paletteId) {
  return palettes.find((p) => p.id === paletteId) || palettes[0]
}

export function applyPaletteToDOM(palette) {
  if (!palette || typeof document === 'undefined') return
  const root = document.documentElement

  root.style.setProperty('--bg-light', palette.bgLight)
  root.style.setProperty('--text-light', palette.textLight)
  root.style.setProperty('--bg-dark', palette.bgDark)
  root.style.setProperty('--text-dark', palette.textDark)
  root.style.setProperty('--accent', palette.accent)
  root.style.setProperty('--accent-light', palette.accentLight)
  root.style.setProperty('--accent-dark', palette.accent)

  try {
    localStorage.setItem('portfolio_palette', palette.id)
  } catch {
    // ignore storage restrictions
  }
}

export function getSavedPalette() {
  if (typeof localStorage === 'undefined') return palettes[0]
  try {
    const savedId = localStorage.getItem('portfolio_palette')
    return getActivePalette(savedId)
  } catch {
    return palettes[0]
  }
}
