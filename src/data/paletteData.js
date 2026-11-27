export const palettes = [
  {
    id: 'crimson',
    num: '01',
    label: 'CRIMSON',
    name: 'Brutalist Crimson',
    subtitle: 'EDITORIAL SCARLET',
    tag: 'DEFAULT // SYSTEM 01',
    description: 'High-contrast monochrome with electric scarlet accent.',
    accent: '#FF1E44',
    accentLight: '#DC2626',
    accentDark: '#FF1E44',
    accentContrast: '#FFFFFF',
    accentGlow: 'rgba(255, 30, 68, 0.4)',
    bgLight: '#F7F7F9',
    textLight: '#0E0E11',
    bgDark: '#0A0A0C',
    textDark: '#F5F5F7',
    swatches: ['#F7F7F9', '#0A0A0C', '#FF1E44'],
  },
  {
    id: 'cyan',
    num: '02',
    label: 'CYBER CYAN',
    name: 'Cyber Cyan',
    subtitle: 'QUANTUM NEON',
    tag: 'NEO // SYSTEM 02',
    description: 'Deep oceanic void electrified with laser hyper-cyan.',
    accent: '#00F0FF',
    accentLight: '#0891B2',
    accentDark: '#00F0FF',
    accentContrast: '#021417',
    accentGlow: 'rgba(0, 240, 255, 0.45)',
    bgLight: '#F0F8FA',
    textLight: '#07161F',
    bgDark: '#050D15',
    textDark: '#F0F8FA',
    swatches: ['#F0F8FA', '#050D15', '#00F0FF'],
  },
  {
    id: 'amber',
    num: '03',
    label: 'SOLAR AMBER',
    name: 'Solar Amber',
    subtitle: 'KINETIC GOLD',
    tag: 'WARM // SYSTEM 03',
    description: 'Deep carbon titanium with high-voltage solar gold.',
    accent: '#FFB000',
    accentLight: '#D97706',
    accentDark: '#FFB000',
    accentContrast: '#0F0C05',
    accentGlow: 'rgba(255, 176, 0, 0.4)',
    bgLight: '#F8F5EE',
    textLight: '#181510',
    bgDark: '#0D0C0A',
    textDark: '#F8F6F0',
    swatches: ['#F8F5EE', '#0D0C0A', '#FFB000'],
  },
  {
    id: 'matrix',
    num: '04',
    label: 'ACID EMERALD',
    name: 'Acid Emerald',
    subtitle: 'TERMINAL PHOSPHOR',
    tag: 'NEON // SYSTEM 04',
    description: 'Obsidian void with luminous phosphor cyber-green.',
    accent: '#00FF87',
    accentLight: '#059669',
    accentDark: '#00FF87',
    accentContrast: '#021A0E',
    accentGlow: 'rgba(0, 255, 135, 0.45)',
    bgLight: '#EFF8F2',
    textLight: '#09180E',
    bgDark: '#050E09',
    textDark: '#F0F9F3',
    swatches: ['#EFF8F2', '#050E09', '#00FF87'],
  },
  {
    id: 'cobalt',
    num: '05',
    label: 'ELECTRIC COBALT',
    name: 'Electric Cobalt',
    subtitle: 'ENGINEERING BLUEPRINT',
    tag: 'SPEC // SYSTEM 05',
    description: 'Engineering blueprint navy with high-voltage Klein blue.',
    accent: '#3B82F6',
    accentLight: '#1D4ED8',
    accentDark: '#3B82F6',
    accentContrast: '#FFFFFF',
    accentGlow: 'rgba(59, 130, 246, 0.45)',
    bgLight: '#F0F4FC',
    textLight: '#081226',
    bgDark: '#070B18',
    textDark: '#F0F4FC',
    swatches: ['#F0F4FC', '#070B18', '#3B82F6'],
  },
  {
    id: 'violet',
    num: '06',
    label: 'TOKYO VIOLET',
    name: 'Tokyo Violet',
    subtitle: 'SYNTHWAVE NOCTURNE',
    tag: 'VAPOR // SYSTEM 06',
    description: 'Midnight galactic amethyst with ultraviolet laser glow.',
    accent: '#C04BF7',
    accentLight: '#9333EA',
    accentDark: '#C04BF7',
    accentContrast: '#FFFFFF',
    accentGlow: 'rgba(192, 75, 247, 0.45)',
    bgLight: '#F6F2FB',
    textLight: '#140C22',
    bgDark: '#0B0716',
    textDark: '#F7F2FA',
    swatches: ['#F6F2FB', '#0B0716', '#C04BF7'],
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
  root.style.setProperty('--accent-dark', palette.accentDark || palette.accent)
  root.style.setProperty('--accent-contrast', palette.accentContrast || '#FFFFFF')
  root.style.setProperty('--accent-glow', palette.accentGlow || `${palette.accent}66`)

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
