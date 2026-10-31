export const personalData = {
  name: 'Lawrence Borabo',
  shortName: 'L. BORABO',
  tagline: 'Database Integrity. Systems & Full-Stack Engineering.',
  role: 'Web Developer & Systems Engineer',
  formerRole: 'Former MIS Associate',
  location: 'Dagupan City, PH',
  coordinates: '16.0433° N, 120.3333° E',
  primaryStack: ['PHP 8.3', 'Next.js 15', 'WordPress', 'MySQL', 'Prisma', 'PowerShell'],
  status: 'SYSTEM STATUS: OPERATIONAL',
  replicationStatus: 'BINARY LOGS: SYNCED',
  systemVersion: 'SYS_OS v3.1',
  year: '2026',
  bio: [
    'Bridging enterprise database administration with modern front-end and back-end web engineering.',
    'I build web systems that prioritize relational data integrity, automated pipelines, and low-latency delivery before rendering the user interface.',
  ],
  education: {
    degree: 'BS Information Technology',
    institution: 'Universidad de Dagupan',
    years: '2020 – 2024',
    focus: 'Database Systems, Systems Administration, Web Application Development',
  },
  contact: {
    email: 'borabolawrence@gmail.com',
    phone: '+63 916 660 5248',
    github: 'https://github.com/borabolawrence',
    githubUsername: 'borabolawrence',
  },
}

export const terminalCommands = {
  help: [
    'AVAILABLE COMMANDS:',
    '  get-stack          Print core technologies and infrastructure stack',
    '  test-replication   Simulate MySQL binary replication latency & sync check',
    '  show-experience    Display career milestones and Guanzon Group experience',
    '  cat contact.json   Output developer contact details & channels',
    '  clear              Clear terminal history',
  ],
  'get-stack': [
    '// CORE INFRASTRUCTURE & APPLICATION STACK',
    'Backend & Frameworks : PHP 8.x, Next.js (App Router), WordPress Core',
    'Databases & ORM       : MySQL (Binary Replication), PostgreSQL, Prisma ORM',
    'Scripting & DevOps   : PowerShell Automation, Bash, VPN Tunneling (IPsec/OpenVPN)',
    'Frontend & Motion     : React 19, Tailwind CSS, GSAP, JavaScript (ESNext)',
  ],
  'test-replication': [
    'PINGING PRIMARY DB CLUSTER (Dagupan Main Node)...',
    '[OK] Binary log coordinator: mysql-bin.000412 @ pos 849201',
    '[OK] Branch replica 01: Latency 8ms  | Seconds_Behind_Master: 0',
    '[OK] Branch replica 02: Latency 14ms | Seconds_Behind_Master: 0',
    '[OK] VPN Tunnel: Encrypted (AES-256-GCM) | Status: STABLE',
    '>> ALL NODES SYNCHRONIZED WITH ZERO REPLICATION LAG <<',
  ],
  'show-experience': [
    'Guanzon Group (Sept 2026 - Present)',
    '  Role: Junior Web Developer',
    '  Stack: Vanilla PHP, WordPress Plugins/Themes, HTML5, CSS3, ES6+',
    '------------------------------------------------------------------',
    'Guanzon Group (Mar 2025 - Sept 2026)',
    '  Role: MIS Associate',
    '  Stack: MySQL Replication, PowerShell Automation, SQL, VPN Networking',
  ],
  'cat contact.json': [
    '{',
    '  "developer": "Lawrence Borabo",',
    '  "email": "borabolawrence@gmail.com",',
    '  "phone": "+63 916 660 5248",',
    '  "github": "https://github.com/borabolawrence",',
    '  "location": "Dagupan City, Pangasinan, Philippines"',
    '}',
  ],
}

export const projectsData = [
  {
    id: 'kwip-image',
    caseStudyTag: 'CASE STUDY 01 // PERFORMANCE OPTIMIZATION',
    title: 'KWIP Image',
    type: 'WordPress Plugin & WebP Server Caching Engine',
    theme: 'dark',
    repoUrl: 'https://github.com/borabolawrence/KWIP-Image',
    tagline: 'Zero-disruption WebP conversion with server-level rewrite caching',
    description:
      'Unoptimized media files cripple page speeds and drive up bandwidth costs. KWIP Image is an automated WordPress optimization plugin that intercepts raw JPEG/PNG requests, processes them locally into lightweight WebP formats using the WordPress Filesystem API, and delivers them via server-level rewrite rules without altering database media IDs or theme templates.',
    metrics: [
      {
        label: 'Original Unoptimized Image',
        value: '4–20ms (Avg 14.8ms)',
        width: '100%',
        accent: false,
      },
      {
        label: 'KWIP WebP Rewrite Delivery',
        value: '2–7ms (Avg 3.6ms)',
        width: '26%',
        accent: true,
      },
    ],
    pipelineSteps: [
      {
        step: '01',
        name: 'Request Interception',
        desc: 'Browser requests /uploads/image.jpg via HTTP GET.',
      },
      {
        step: '02',
        name: 'Web Server Rules',
        desc: 'LiteSpeed / Apache checks for cached .webp version directly on disk.',
      },
      {
        step: '03',
        name: 'Asynchronous Conversion',
        desc: 'On cache miss, WP-Cron queue locks file and spawns local WebP conversion via FS API.',
      },
      {
        step: '04',
        name: 'Low-Latency Serving',
        desc: 'Subsequent requests hit memory/disk cache in < 4ms with zero PHP execution overhead.',
      },
    ],
  },
  {
    id: 'invite-me',
    caseStudyTag: 'CASE STUDY 02 // FULL-STACK ARCHITECTURE',
    title: 'Invite me.',
    type: 'Decoupled Invitation Builder & Real-Time RSVP Engine',
    theme: 'cyan',
    tagline: '"Making Invitation Digitally, Easy, and Beautiful"',
    description:
      'A decoupled digital event system built to solve the performance trade-off between complex browser-based document editors and instant public RSVP loading. It separates the heavy, client-side canvas designer from a lean, SSR-optimized public guest page powered by Next.js App Router and Prisma.',
    techStack: [
      'Next.js 15 (App Router)',
      'Prisma ORM',
      'PostgreSQL',
      'Tailwind CSS & shadcn/ui',
      'Automated Image Processing',
    ],
    architectureHighlights: [
      {
        title: 'Decoupled Rendering Engine',
        desc: 'Client canvas editor generates lightweight JSON scene graph. Public guest slugs render via cached React Server Components under 50ms.',
      },
      {
        title: 'Prisma Relational Data Model',
        desc: 'Strict relational integrity ensuring host RSVPs, guest headcount, and custom field validation prevent race conditions.',
      },
      {
        title: 'Optimized Asset Pipeline',
        desc: 'Custom uploaded invitation media is automatically compressed and cached for rapid mobile loading.',
      },
    ],
    schemaSnippet: `model Invitation {
  id         String     @id @default(cuid())
  slug       String     @unique
  hostId     String
  title      String
  eventDate  DateTime
  sceneData  Json       // Lightweight canvas graph
  guests     Guest[]
  rsvps      Rsvp[]
  createdAt  DateTime   @default(now())
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

export const systemsArchitectureData = {
  title: 'Enterprise Infrastructure & Systems Engineering',
  subtitle: 'Real-world database administration & PowerShell workflow automation',
  items: [
    {
      badge: 'DATABASE ARCHITECTURE',
      title: 'MySQL Binary Replication Across Distributed Branches',
      company: 'Guanzon Group',
      summary:
        'Architected and maintained multi-node MySQL binary replication between enterprise headquarters and remote branch database servers.',
      specs: [
        'Configured master-to-slave binary logging topologies (binlog format: ROW).',
        'Implemented automated replication health checks with auto-retry and failover protocols.',
        'Secured cross-branch database traffic through dedicated, encrypted IPsec/OpenVPN tunnels.',
        'Zero data inconsistency across distributed sales, inventory, and branch transactions.',
      ],
    },
    {
      badge: 'AUTOMATION SCRIPTING',
      title: 'PowerShell Reporting & SQL Export Pipeline',
      company: 'Guanzon Group',
      summary:
        'Built automated PowerShell scripting suites to execute complex, multi-table SQL queries and export scheduled structured reports.',
      specs: [
        'Automated extraction of enterprise datasets into formatted XML and multi-sheet Excel files.',
        'Eliminated manual report compilation, reducing operational reporting latency by 90%.',
        'Built robust error handling, transactional rollbacks, and automated administrator event logging.',
      ],
    },
  ],
}

export const experienceData = [
  {
    period: 'SEPT 2026 – PRESENT',
    role: 'Junior Web Developer',
    company: 'Guanzon Group',
    type: 'Full-time',
    description:
      'Engineered and maintained internal and customer-facing web applications using vanilla PHP, modern HTML5/CSS3, and JavaScript. Extended WordPress core functionality with custom plugins and bespoke theme architectures, focusing on clean DOM performance and maintainable back-end code.',
    tags: ['Vanilla PHP', 'WordPress Internals', 'JavaScript (ES6+)', 'REST APIs', 'CSS3 Architecture'],
  },
  {
    period: 'MAR 2025 – SEPT 2026',
    role: 'MIS Associate',
    company: 'Guanzon Group',
    type: 'Full-time',
    description:
      'Administered distributed branch database servers across the enterprise. Implemented and monitored MySQL binary log replication, established encrypted VPN connectivity between headquarters and branches, and engineered PowerShell automation suites for high-speed SQL reporting.',
    tags: ['MySQL Binary Replication', 'PowerShell Automation', 'SQL Optimization', 'VPN Networking', 'Database Backup & Recovery'],
  },
]
