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
    (env.VERCEL_URL ? `https://${env.VERCEL_URL}` : 'https://lawrenceborabo.vercel.app')
  const siteUrl = rawSiteUrl.replace(/\/+$/, '')

  process.env.PUBLIC_SITE_URL = siteUrl
  process.env.VITE_SITE_URL = siteUrl

  return {
    envPrefix: ['VITE_', 'PUBLIC_'],
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'html-site-url-transform',
        transformIndexHtml(html) {
          return html
            .replace(/%PUBLIC_SITE_URL%/g, siteUrl)
            .replace(/%VITE_SITE_URL%/g, siteUrl)
            // Normalize any accidental double-slashes in URLs (except https://)
            .replace(/([^:])\/{2,}/g, '$1/')
        },
      },
    ],
  }
})
