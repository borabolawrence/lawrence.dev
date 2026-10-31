export const personalData = {
  name: 'Lawrence Borabo',
  shortName: 'LAWRENCE BORABO',
  headline: 'Junior Web Developer & WordPress Engineer',
  tagline: 'Bridging web development with practical IT operations and database systems.',
  location: 'Dagupan City, Pangasinan, Philippines',
  currentRole: 'Junior Web Developer at Guanzon',
  currentPeriod: 'October 2026 – Present',
  education: {
    degree: 'Bachelor of Science in Information Technology (BSIT)',
    institution: 'Universidad de Dagupan',
  },
  certification: 'Computer Systems Servicing NC II',
  contact: {
    email: 'borabolawrence@gmail.com',
    phone: '+63 916 660 5248',
    github: 'https://github.com/borabolawrence',
    githubUsername: 'borabolawrence',
  },
  about: [
    'I am a Junior Web Developer with a background in Information Technology, database operations, technical support, and web development. My experience combines practical business IT operations with hands-on software development, allowing me to approach technical problems from both a development and systems perspective.',
    'I currently work as a Junior Web Developer at Guanzon, where I work with WordPress, PHP, JavaScript, HTML, and CSS to develop and maintain web-based solutions. My responsibilities and technical interests extend beyond website development, particularly toward improving functionality, optimizing performance, maintaining code quality, and creating solutions that address practical business requirements.',
    'Before transitioning into web development, I gained experience in IT and MIS operations, where I worked with MySQL databases, SQL queries, data maintenance, reporting, and internal business systems. I also developed automation workflows using PowerShell and Excel to reduce repetitive tasks and improve data-processing efficiency. This experience gave me an understanding of how software, databases, and business operations work together.',
  ],
  philosophy:
    'My background in IT operations and database management influences how I approach software development. I consider not only how an application looks and behaves, but also how its data is handled, how its components interact, and how it performs under real-world conditions.',
}

export const dualPerspective = [
  {
    category: 'Web & Application Development',
    subtitle: 'Frontend craft, custom WordPress engineering, and full-stack web applications',
    points: [
      'WordPress customization, bespoke theme architecture, and plugin development.',
      'Full-stack Next.js applications utilizing React, App Router, and Prisma ORM.',
      'Frontend implementation focusing on clean semantic HTML5, CSS3, Tailwind, and JavaScript.',
      'Performance optimization, WebP media delivery, and smooth user interactions via GSAP.',
    ],
  },
  {
    category: 'IT & Data Operations Foundation',
    subtitle: 'Database reliability, PowerShell workflow automation, and systems administration',
    points: [
      'Working with MySQL databases, relational structures, and complex SQL data retrieval.',
      'Automating business reporting and data extraction pipelines using PowerShell and Excel.',
      'Supporting database replication, backup verification, and business continuity operations.',
      'Understanding operational constraints before writing application-level code.',
    ],
  },
]

export const experienceData = [
  {
    role: 'Junior Web Developer',
    company: 'Guanzon',
    period: 'October 2026 – Present',
    type: 'Current Role',
    description:
      'Currently developing and maintaining web-based solutions using WordPress, PHP, JavaScript, HTML5, and CSS3. Focused on creating reliable functionality, custom WordPress features, frontend styling, and web performance improvements.',
    responsibilities: [
      'Website development, ongoing maintenance, and WordPress customization.',
      'PHP-based functionality development, custom templates, and backend integrations.',
      'Frontend implementation, styling, and JavaScript interactions.',
      'Website performance optimization, responsiveness, and usability improvements.',
      'Ensuring code quality, maintainability, and clean architecture across projects.',
    ],
    technologies: ['WordPress', 'PHP', 'JavaScript', 'HTML5', 'CSS3', 'MySQL'],
  },
  {
    role: 'IT / MIS Support',
    company: 'Guanzon Group',
    period: 'Previous Experience',
    type: 'Systems & Operations',
    description:
      'Managed internal business systems, database maintenance, data retrieval, and technical operational workflows. Developed PowerShell automation scripts and structured Excel workflows to eliminate manual data overhead.',
    responsibilities: [
      'Database maintenance, data updates, and working with internal MySQL structures.',
      'Writing SQL queries to retrieve, modify, and analyze business-critical records.',
      'Developing PowerShell scripts to automate reporting and data extraction workflows.',
      'Processing exported datasets using Excel, including advanced VLOOKUP and PivotTables.',
      'Organizing and maintaining historical sales and inventory reports.',
      'Supporting database replication and backup-related operations across branches.',
      'Providing technical support through structured ticket-based workflows.',
    ],
    technologies: ['MySQL', 'SQL', 'PowerShell', 'Microsoft Excel', 'Database Operations', 'Git'],
  },
]

export const projectsData = [
  {
    id: 'kwip-image',
    tag: 'WORDPRESS PLUGIN DEVELOPMENT',
    title: 'KWIP Image',
    subtitle: 'WordPress Image Optimization & WebP Delivery Plugin',
    repoUrl: 'https://github.com/borabolawrence/KWIP-Image',
    description:
      'An independently developed WordPress plugin designed to improve website image loading performance through automated WebP conversion and server-level rewrite rules, while strictly preserving original image files and maintaining compatibility with existing themes and the WordPress Media Library.',
    highlights: [
      'WebP Image Conversion: Automatically converts raw JPEG and PNG files into lightweight WebP formats.',
      'Preservation of Originals: Ensures original media files remain intact for non-destructive optimization.',
      'Server-Level Rewrite Rules: Leverages Apache and LiteSpeed configurations to serve WebP files directly without changing attachment URLs.',
      'Background Queue Processing: Offloads conversion tasks to an asynchronous queue to prevent admin dashboard lockup.',
      'Media Library Integration: Seamlessly integrates with the standard WordPress Media Library UI.',
      'Server Environment Detection: Detects available image processing libraries (GD, Imagick) and server capabilities.',
    ],
    metrics: {
      originalAverage: '14.8ms',
      webpAverage: '3.6ms',
      bandwidthSavings: 'Up to 75% file size reduction',
    },
    technologies: ['PHP', 'WordPress APIs', 'JavaScript', 'HTML5', 'CSS3', 'Apache / LiteSpeed'],
  },
  {
    id: 'invite-me',
    tag: 'FULL-STACK WEB APPLICATION',
    title: 'Invite Me',
    subtitle: 'Digital Invitation Builder & RSVP Platform',
    repoUrl: null,
    description:
      'An independently developed digital invitation platform allowing users to create, customize, and publish digital invitations with unique public URLs, customizable content blocks, event countdowns, image galleries, and guest RSVP tracking.',
    highlights: [
      'Customizable Invitation Editor: Reusable content blocks for dates, countdowns, galleries, and maps.',
      'Published Unique URLs: Fast, mobile-responsive public invitation pages for guests.',
      'RSVP Management: Real-time guest RSVP tracking backed by a relational database.',
      'Decoupled Architecture: Separates the heavy editor canvas from a lightweight, sub-50ms public SSR guest page.',
      'Data Integrity: Managed with Prisma ORM and hosted on Neon PostgreSQL.',
    ],
    technologies: ['Next.js (App Router)', 'React', 'Tailwind CSS', 'shadcn/ui', 'Prisma ORM', 'PostgreSQL (Neon)'],
    schemaSnippet: `// Prisma Data Model for Invite Me
model Invitation {
  id          String   @id @default(cuid())
  slug        String   @unique
  title       String
  eventDate   DateTime
  location    String?
  sceneData   Json     // Reusable block layout
  published   Boolean  @default(false)
  guests      Guest[]
  rsvps       Rsvp[]
  createdAt   DateTime @default(now())
}

model Rsvp {
  id           String     @id @default(cuid())
  invitationId String
  guestName    String
  attending    Boolean
  headcount    Int        @default(1)
  invitation   Invitation @relation(fields: [invitationId], references: [id])
}`,
  },
]

export const skillsMatrix = {
  frontend: [
    'HTML5',
    'CSS3',
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
    'Database Maintenance',
    'Database Replication & Backups',
  ],
  tools: [
    'Git & GitHub',
    'PowerShell Scripting',
    'Microsoft Excel (Advanced Data & VLOOKUP)',
    'Visual Studio Code',
    'Apache & LiteSpeed Web Servers',
  ],
}

export const areasOfInterest = [
  'Web Application Development',
  'WordPress & Plugin Development',
  'Backend Engineering',
  'Database Engineering',
  'Software Architecture',
  'Web Performance Optimization',
  'Automation & Process Improvement',
  'User Experience & Accessibility',
]
