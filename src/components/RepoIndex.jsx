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
    <section id="index" ref={sectionRef} className="py-24 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
        <div>
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
            // OPEN-SOURCE WORKSPACE
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
            <SplitText text="REPOSITORY INDEX" />
          </h2>
        </div>
        <a
          href={personalData.contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono text-slate-400 hover:text-cyan-400 transition flex items-center gap-1.5"
        >
          <span>github.com/{personalData.contact.githubUsername}</span>
          <span>↗</span>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="github-container">
        {loading && (
          <div
            id="gh-loader"
            className="col-span-full p-8 text-center text-slate-400 font-mono text-xs border border-white/10 rounded-lg bg-[#0C0F17]"
          >
            Fetching live repositories from GitHub API...
          </div>
        )}

        {error && (
          <div
            id="gh-loader"
            className="col-span-full p-8 text-center text-rose-400 font-mono text-xs border border-rose-500/20 rounded-lg bg-[#0C0F17]"
          >
            <span>Unable to load live repositories.</span>{' '}
            <button
              id="gh-retry"
              type="button"
              onClick={fetchRepos}
              className="underline hover:text-white cursor-pointer ml-2"
            >
              Retry ↻
            </button>
          </div>
        )}

        {!loading && !error && repos.length === 0 && (
          <div className="repo-card col-span-full p-6 rounded-xl bg-[#0C0F17] border border-white/10 space-y-4">
            <div className="flex justify-between items-baseline border-b border-white/10 pb-3">
              <h3 className="font-bold text-white font-display text-lg">KWIP-Image</h3>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-400 border border-cyan-800/40">
                PHP
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              WordPress image optimization plugin focused on converting and delivering optimized WebP images.
            </p>
            <a
              href="https://github.com/borabolawrence/KWIP-Image"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300 block pt-2"
            >
              INSPECT SOURCE ↗
            </a>
          </div>
        )}

        {!loading &&
          !error &&
          repos.map((repo) => (
            <article
              key={repo.id}
              className="repo-card p-6 rounded-xl bg-[#0C0F17] border border-white/10 hover:border-cyan-500/40 transition flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-baseline border-b border-white/10 pb-3">
                  <h3 className="font-bold text-white font-display text-lg tracking-tight truncate max-w-[200px]" title={repo.name}>
                    {repo.name}
                  </h3>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-400 border border-cyan-800/40 shrink-0">
                    {repo.language || 'Code'}
                  </span>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">
                  {repo.description || 'No description provided.'}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                <span className="text-[11px] text-slate-500">
                  Updated: {new Date(repo.updated_at).toLocaleDateString()}
                </span>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 magnetic-link"
                >
                  <span>SOURCE</span>
                  <span>↗</span>
                </a>
              </div>
            </article>
          ))}
      </div>
    </section>
  )
}
