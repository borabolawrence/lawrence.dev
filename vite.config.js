import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = { ...process.env, ...loadEnv(mode, process.cwd(), ['VITE_', 'PUBLIC_']) }
  const rawSiteUrl =
    env.PUBLIC_SITE_URL ||
    env.VITE_PUBLIC_SITE_URL ||
    env.VITE_SITE_URL ||
    (env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${env.VERCEL_PROJECT_PRODUCTION_URL}`
      : env.VERCEL_URL
        ? `https://${env.VERCEL_URL}`
        : 'https://lawrencedev.vercel.app')
  const siteUrl = rawSiteUrl.replace(/\/+$/, '')

  process.env.PUBLIC_SITE_URL = siteUrl
  process.env.VITE_SITE_URL = siteUrl

  return {
    envPrefix: ['VITE_', 'PUBLIC_'],
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('react-dom') || id.includes('react')) {
                return 'react-vendor'
              }
              if (id.includes('gsap') || id.includes('lenis')) {
                return 'motion-vendor'
              }
            }
          },
        },
      },
    },
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'html-site-url-transform',
        transformIndexHtml(html) {
          return html
            .replace(/%PUBLIC_SITE_URL%/g, siteUrl)
            .replace(/%VITE_SITE_URL%/g, siteUrl)
        },
        generateBundle() {
          this.emitFile({
            type: 'asset',
            fileName: 'robots.txt',
            source: `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
          })
          this.emitFile({
            type: 'asset',
            fileName: 'sitemap.xml',
            source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>${siteUrl}/</loc>\n    <lastmod>2026-11-27</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>1.0</priority>\n  </url>\n</urlset>\n`,
          })
        },
      },
    ],
  }
})
