import { useState, useEffect, useRef } from 'react'
import SplitText from './common/SplitText'
import { personalData } from '../data/portfolioData'

export default function RepoIndex({ onReposLoaded }) {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const sectionRef = useRef(null)

  const fetchRepos = async () => {
    setLoading(true)
    setError(false)
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 8000)

    try {
      const response = await fetch(
        `https://api.github.com/users/${personalData.contact.githubUsername}/repos?sort=updated&per_page=6`,
        { signal: controller.signal },
      )
      clearTimeout(timeoutId)
      if (!response.ok) throw new Error(`Status: ${response.status}`)
      const data = await response.json()
      if (Array.isArray(data) && data.length > 0) {
        setRepos(data)
        if (onReposLoaded) onReposLoaded(data)
      } else {
        setRepos([])
      }
    } catch (err) {
      console.warn('GitHub fetch failed:', err)
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!sectionRef.current) return

    if (typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            fetchRepos()
            observer.disconnect()
          }
        },
        { rootMargin: '200px' },
      )
      observer.observe(sectionRef.current)
      return () => observer.disconnect()
    } else {
      fetchRepos()
    }
  }, [])

  return (
    <section id="index" ref={sectionRef} className="github-index panel" data-color="light">
      <div className="section-header">
        <h2 className="display-title auto-split">
          <SplitText text="Repository Index" />
        </h2>
        <p className="reveal-fade">Live data sourced from the open-source workspace.</p>
      </div>

      <div className="repo-grid" id="github-container">
        {loading && (
          <div
            id="gh-loader"
            style={{
              gridColumn: '1 / -1',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
            }}
          >
            Fetching live repositories...
          </div>
        )}

        {error && (
          <div
            id="gh-loader"
            style={{
              gridColumn: '1 / -1',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
            }}
          >
            <span>Unable to load live repositories.</span>{' '}
            <button
              id="gh-retry"
              className="tech-link cursor-pointer ml-2"
              type="button"
              onClick={fetchRepos}
              style={{ background: 'transparent', border: 'none' }}
            >
              RETRY ↻
            </button>
          </div>
        )}

        {!loading && !error && repos.length === 0 && (
          <div className="repo-card fallback-card reveal-scale">
            <div className="repo-top">
              <h3 className="repo-name">KWIP-Image</h3>
              <span className="repo-lang mono-label">PHP</span>
            </div>
            <p className="repo-desc">
              WordPress image optimization plugin focused on converting and delivering optimized
              WebP images.
            </p>
            <a
              href="https://github.com/borabolawrence/KWIP-Image"
              className="tech-link magnetic-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              INSPECT SOURCE ↗
            </a>
          </div>
        )}

        {!loading &&
          !error &&
          repos.map((repo) => (
            <article key={repo.id} className="repo-card">
              <div className="repo-top">
                <h3 className="repo-name">{repo.name}</h3>
                <span className="repo-lang mono-label">{repo.language || 'N/A'}</span>
              </div>
              <p className="repo-desc">{repo.description || 'No description provided.'}</p>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="tech-link magnetic-link"
              >
                INSPECT SOURCE ↗
              </a>
            </article>
          ))}
      </div>
    </section>
  )
}
