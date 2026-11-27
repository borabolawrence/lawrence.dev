import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { applyPaletteToDOM, getSavedPalette } from './data/paletteData'

// Apply saved palette synchronously before first paint to prevent theme flash
applyPaletteToDOM(getSavedPalette())

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
