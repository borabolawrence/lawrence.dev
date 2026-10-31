// Logic to determine if intro animation should play:
// - Plays on first visit in the session
// - Plays on HARD refresh (Ctrl+F5 / Shift+Reload) because cache is bypassed
// - Does NOT play on normal SOFT refresh (F5 / browser reload)
// - Plays if URL contains ?intro=true
export function checkShouldPlayIntro() {
  if (typeof window === 'undefined') return false

  const urlParams = new URLSearchParams(window.location.search)
  if (urlParams.get('intro') === 'true') {
    return true
  }

  const hasSeenIntro = sessionStorage.getItem('portfolio_intro_seen')
  const [navEntry] = performance.getEntriesByType('navigation')

  if (navEntry && navEntry.type === 'reload') {
    // In a hard reload (Ctrl+F5 / Ctrl+Shift+R), browser bypasses cache:
    // transferSize will be >= encodedBodySize and transferSize > 0.
    // In a soft reload (F5), transferSize is typically 0 (cached) or small 304 header.
    const isHardReload =
      navEntry.transferSize > 0 &&
      navEntry.encodedBodySize > 0 &&
      navEntry.transferSize >= navEntry.encodedBodySize

    if (isHardReload) {
      sessionStorage.removeItem('portfolio_intro_seen')
      return true
    }

    return !hasSeenIntro
  }

  return !hasSeenIntro
}
