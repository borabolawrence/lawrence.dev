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
    linkedin: "https://www.linkedin.com/in/lawrence-borabo/",
    github: 'https://github.com/borabolawrence',
    githubUsername: 'borabolawrence',
  },
}

export const heroData = {
  kineticWords: ['ENGINEERING', 'DIGITAL', 'SYSTEMS'],
  subheading:
    'Junior Web Developer specializing in WordPress optimization plugins, high-performance PHP backends, and modern Next.js web applications.',
}

export const projectsData = [
  {
    id: 'kwip-image',
    caseStudyTag: 'Project 00',
    title: 'KWIP Image',
    theme: 'dark',
    repoUrl: 'https://github.com/borabolawrence/KWIP-Image',
    tagline: 'WordPress Image Optimization & WebP Delivery Plugin',
    techStack: ['WordPress Plugin Dev', 'PHP', 'Apache / LiteSpeed', 'WP-Cron', 'WebP'],
    description:
      'Unoptimized images cripple website loading performance. KWIP Image is an independently developed WordPress plugin designed to seamlessly convert and deliver optimized WebP images through server-level rewrite rules and background queues, while strictly preserving original files and ensuring compatibility with existing WordPress themes and the Media Library.',
    highlights: [
      'Server-level rewrite rules serve WebP directly without modifying Media Library image URLs.',
      'Non-destructive architecture: original JPEG and PNG files are strictly preserved.',
      'Background WP-Cron processing prevents admin dashboard freezing during bulk media uploads.',
    ],
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
    caseStudyTag: 'Project 01',
    title: 'Invite Me',
    theme: 'light',
    tagline: '"Making Invitation Digitally, Easy, and Beautiful"',
    techStack: ['Next.js App Router', 'React', 'Tailwind CSS', 'Prisma ORM', 'PostgreSQL'],
    description: [
      'An independently developed digital invitation builder prioritizing a frictionless experience. It decouples the complex canvas-based document editor from a lightweight, high-performance public rendering engine with unique shareable URLs.',
      'Technically, it relies on strict relational data management via Prisma ORM, server-side capabilities of Next.js, and automated image processing to protect privacy and ensure rapid load times for guest RSVPs.',
    ],
    highlights: [
      'Decoupled architecture: separates heavy visual canvas editing from ultra-fast public guest RSVP pages.',
      'Relational data integrity: automated schema enforcement and real-time headcount tracking with Prisma.',
      'Automated asset processing: dynamic image compression ensures sub-second mobile page loads.',
    ],
    flowDiagram: {
      title: 'Application Flow',
      steps: [
        { label: 'CREATOR', sub: 'Canvas Editor' },
        { label: 'CORE (Next.js)', sub: 'Data & Image Opt.' },
        { label: 'GUEST', sub: 'Public Slug / RSVP' },
      ],
    },
  },
  {
    id: 'kwip-animation',
    caseStudyTag: 'Project 02',
    title: 'KWIP Animation',
    theme: 'dark',
    repoUrl: 'https://github.com/borabolawrence/KWIP-Animation',
    tagline: 'Visual Point-and-Click GSAP Animation Builder for WordPress',
    techStack: ['WordPress Plugin Dev', 'PHP', 'GSAP', 'React (WP Admin)', 'REST API'],
    description:
      'Complex scroll animations often require heavy custom scripting or bloat page performance through bulky visual builders. KWIP Animation is an independently developed, theme-agnostic WordPress plugin featuring a React-powered visual iframe inspector. It allows creators to visually point, click, and bind GSAP animations to any DOM element, while loading zero builder code on the public frontend for peak Core Web Vitals.',
    highlights: [
      'Zero-bloat public runtime: ships under 4 KB overhead with zero visual builder code to visitors.',
      'Visual iframe inspector: point-and-click animation authoring inside native WordPress admin.',
      'Theme-agnostic: binds GSAP ScrollTrigger timelines cleanly to any existing theme or block structure.',
    ],
    metrics: [
      {
        label: 'Public Frontend Overhead',
        value: '< 4 KB',
        width: '15%',
        accent: true,
      },
      {
        label: 'Visual Builder Bloat',
        value: '0 KB (Admin Only)',
        width: '100%',
        accent: false,
      },
    ],
    architecture: {
      title: 'Decoupled Motion Pipeline',
      nodes: [
        { type: 'single', label: 'WP Admin (React Inspector)' },
        { type: 'connector', symbol: '↓' },
        {
          type: 'split',
          items: ['Iframe Bridge (postMessage)', 'Config REST API'],
        },
        { type: 'connector', symbol: '↓' },
        { type: 'single', label: 'Post Meta JSON Storage' },
        { type: 'connector', symbol: '↓' },
        { type: 'single', label: 'Zero-Bloat Public Runtime', highlight: true },
      ],
    },
  },
]

export const skillsMatrix = {
  frontend: [
    'HTML5 / CSS3',
    'JavaScript (ES6+)',
    'React.js',
    'Next.js (App Router)',
    'Tailwind CSS',
    'GSAP (GreenSock)',
  ],
  backend: [
    'PHP',
    'WordPress Plugin Development',
    'WordPress Custom Themes',
    'Next.js Server Actions & APIs',
    'REST APIs',
  ],
  database: [
    'MySQL',
    'PostgreSQL',
    'SQL Queries & Optimization',
    'Prisma ORM',
    'Database Maintenance & Backups',
  ],
  tools: [
    'Git & GitHub',
    'PowerShell Scripting',
    'Apache & LiteSpeed Web Servers',
    'VS Code',
    'Excel Data Operations',
  ],
}

export const experienceData = [
  {
    period: 'OCT 2026 - PRESENT',
    role: 'Junior Web Developer',
    company: 'Guanzon Group of Companies',
    description:
      'Develop and maintain web-based solutions using WordPress, PHP, JavaScript, HTML5, CSS3, and GSAP. Focus on WordPress customization, functionality development, frontend implementation, styling, and website performance improvements.',
  },
  {
    period: 'PREVIOUS EXPERIENCE',
    role: 'IT / MIS Support',
    company: 'Guanzon Group of Companies',
    description:
      'Managed internal business systems, database maintenance, data updates, and SQL retrieval. Developed PowerShell scripts to automate reporting workflows, processed operational data in Excel (VLOOKUP, PivotTables), and supported database replication and backup operations.',
  },
]
