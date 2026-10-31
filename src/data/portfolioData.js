export const personalData = {
  name: 'Lawrence Borabo',
  shortName: 'L. BORABO',
  role: 'Junior Web Developer',
  location: 'Dagupan City, PH',
  coordinates: '16.0433° N, 120.3333° E',
  stack: 'WordPress, PHP, Next.js, MySQL',
  version: 'v2.6',
  year: '2026',
  status: 'AVAILABLE FOR OPPORTUNITIES',
  bio: [
    'I am a Junior Web Developer with a background in Information Technology, database operations, technical support, and web development. My experience combines practical business IT operations with hands-on software development, allowing me to approach technical problems from both a development and systems perspective.',
    'My background in IT operations and database management influences how I approach software development. I consider not only how an application looks and behaves, but also how its data is handled, how its components interact, and how it performs under real-world conditions.',
  ],
  education: {
    degree: 'BS Information Technology (BSIT)',
    institution: 'Universidad de Dagupan',
    certification: 'Computer Systems Servicing NC II',
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
    tagline: 'WordPress Image Optimization & WebP Delivery Plugin',
    description:
      'Unoptimized images cripple website loading performance. KWIP Image is an independently developed WordPress plugin designed to seamlessly convert and deliver optimized WebP images through server-level rewrite rules and background queues, while strictly preserving original files and ensuring compatibility with existing WordPress themes and the Media Library.',
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
    title: 'Invite Me',
    theme: 'light',
    tagline: '"Making Invitation Digitally, Easy, and Beautiful"',
    description: [
      'An independently developed digital invitation builder prioritizing a frictionless experience. It decouples the complex canvas-based document editor from a lightweight, high-performance public rendering engine with unique shareable URLs.',
      'Technically, it relies on strict relational data management via Prisma ORM, server-side capabilities of Next.js, and automated image processing to protect privacy and ensure rapid load times for guest RSVPs.',
    ],
    techStack: ['Next.js App Router', 'React', 'Tailwind / shadcn', 'Prisma / PostgreSQL (Neon)'],
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
    period: 'OCT 2026 - PRESENT',
    role: 'Junior Web Developer',
    company: 'Guanzon',
    description:
      'Develop and maintain web-based solutions using WordPress, PHP, JavaScript, HTML5, and CSS3. Focus on WordPress customization, functionality development, frontend implementation, styling, and website performance improvements.',
  },
  {
    period: 'PREVIOUS EXPERIENCE',
    role: 'IT / MIS Support',
    company: 'Guanzon Group',
    description:
      'Managed internal business systems, database maintenance, data updates, and SQL retrieval. Developed PowerShell scripts to automate reporting workflows, processed operational data in Excel (VLOOKUP, PivotTables), and supported database replication and backup operations.',
  },
]
