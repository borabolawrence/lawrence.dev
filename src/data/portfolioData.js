export const personalData = {
  name: 'Lawrence Borabo',
  shortName: 'L. BORABO',
  role: 'Junior Web Developer',
  location: 'Dagupan City, PH',
  coordinates: '16.0433° N, 120.3333° E',
  stack: 'PHP, Next.js, WordPress',
  version: 'v2.6',
  year: '2026',
  status: 'AVAILABLE FOR OPPORTUNITIES',
  bio: [
    'Merging database administration with modern front-end and back-end web development.',
    'I build applications that prioritize efficient data flow and robust user experiences. My foundation is built on ensuring data integrity before painting the UI.',
  ],
  education: {
    degree: 'BS Information Technology',
    institution: 'Universidad de Dagupan',
    years: '2020-2024',
  },
  contact: {
    email: 'borabolawrence@gmail.com',
    phone: '+63 916 660 5248',
    github: 'https://github.com/borabolawrence',
    githubUsername: 'borabolawrence',
  },
}

export const heroData = {
  kineticWords: ['ENGINEERING', 'DIGITAL', 'SYSTEMS'],
}

export const projectsData = [
  {
    id: 'kwip-image',
    caseStudyTag: 'CASE STUDY 01',
    title: 'KWIP Image',
    theme: 'dark',
    repoUrl: 'https://github.com/borabolawrence/KWIP-Image',
    description:
      'Unoptimized images cripple website loading performance. KWIP Image is a WordPress plugin designed to seamlessly convert and deliver optimized WebP images without disrupting existing themes or forcing users to manually replace media files.',
    metrics: [
      {
        label: 'Original Request',
        value: '4–20ms',
        width: '100%',
        accent: false,
      },
      {
        label: 'WebP Request',
        value: '2–7ms',
        width: '30%',
        accent: true,
      },
    ],
    architecture: {
      title: 'System Architecture',
      nodes: [
        { type: 'single', label: 'WP Media Library' },
        { type: 'connector', symbol: '↓' },
        {
          type: 'split',
          items: ['WP-Cron Queue', 'Locking & Retries'],
        },
        { type: 'connector', symbol: '↓' },
        { type: 'single', label: 'Local WebP Conversion (FS API)' },
        { type: 'connector', symbol: '↓' },
        { type: 'single', label: 'Apache / LiteSpeed Rules', highlight: true },
      ],
    },
  },
  {
    id: 'invite-me',
    caseStudyTag: 'CASE STUDY 02',
    title: 'Invite me.',
    theme: 'light',
    tagline: '"Making Invitation Digitally, Easy, and Beautiful"',
    description: [
      'A digital invitation builder prioritizing a frictionless experience. It decouples the complex canvas-based document editor from a lightweight, high-performance public rendering engine.',
      'Technically, it relies on strict data management via Prisma, server-side capabilities of Next.js, and automated image processing to protect privacy and ensure rapid load times.',
    ],
    techStack: ['Next.js App Router', 'Tailwind / shadcn', 'Prisma / PostgreSQL'],
    flowDiagram: {
      title: 'Application Flow',
      steps: [
        { label: 'CREATOR', sub: 'Canvas Editor' },
        { label: 'CORE (Next.js)', sub: 'Data & Image Opt.' },
        { label: 'GUEST', sub: 'Public Slug / RSVP' },
      ],
    },
  },
]

export const experienceData = [
  {
    period: 'SEPT 2026 - PRESENT',
    role: 'Junior Web Developer',
    company: 'Guanzon Group',
    description:
      'Develop and maintain web applications using vanilla PHP, HTML, CSS, and JavaScript. Contribute to WordPress-based web projects alongside PHP and front-end development.',
  },
  {
    period: 'MAR 2025 - SEPT 2026',
    role: 'MIS Associate',
    company: 'Guanzon Group',
    description:
      'Configured branch database servers, implementing MySQL binary replication. Automated reporting via PowerShell, executing optimized SQL to export XML and Excel outputs. Established secure branch-to-main-server VPN connectivity.',
  },
]
