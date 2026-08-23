import { Project, ExperienceItem, SkillCategory, Certification, Education, ServiceItem, ProcessStep } from '../types';

export const PERSONAL_INFO = {
  name: 'Algian',
  fullName: 'Algian',
  role: 'Freelance Software & Web Developer / Designer',
  educationStatus: 'BS Information Technology Student & Aspiring Software Engineer',
  tagline: 'I build digital experiences where code meets design.',
  location: 'Philippines',
  coordinates: 'Philippines',
  timezone: 'GMT+8 (Asia/Manila)',
  status: 'AVAILABLE FOR SELECTED PROJECTS',
  email: 'algian.aquillo@gmail.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  statement: 'I enjoy turning ideas into functional, thoughtful, and visually engaging digital experiences.',
  bioParagraphs: [
    'I am a BS Information Technology student and aspiring Software Engineer who bridges the gap between engineering rigor and visual elegance. My work spans custom full-stack web applications, native mobile interfaces, and AI-enabled digital products.',
    'As both a developer and designer, I treat every codebase like an architectural system and every user interface like an editorial canvas. I focus on creating purposeful, performant software that solves real-world operational problems.'
  ],
  currentFocus: 'Full-stack architecture with React, TypeScript, Spring Boot, and AI-assisted workflows',
  currentLearning: 'Advanced distributed systems, Kotlin multiplatform, and LLM orchestration patterns',
  availability: 'Open for freelance web/software development, UI/UX systems design, and collaboration.'
};

export const PROJECTS: Project[] = [
  {
    id: 'cognita',
    number: '01',
    name: 'Cognita',
    tagline: 'Modern Educational & Product Learning Ecosystem',
    year: '2024',
    role: 'Full-Stack Architecture & UI/UX Design',
    category: 'Full-Stack',
    featured: true,
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Android', 'Kotlin', 'Spring Boot', 'Java', 'PostgreSQL', 'REST API', 'System Design'],
    description: 'A comprehensive educational product platform designed to bridge multi-device learning, content structuring, and real-time student evaluation across web and Android ecosystems.',
    problem: 'Traditional educational management systems often suffer from fragmented mobile experiences, disjointed API layers, and clunky content navigation for both students and instructors.',
    solution: 'Engineered a unified multi-tier architecture powered by a resilient Spring Boot backend with PostgreSQL, complemented by a reactive TypeScript web dashboard and a native Kotlin Android client with synchronized state.',
    keyFeatures: [
      'Cross-platform learning synchronization between web and native Android client',
      'Robust relational schema design in PostgreSQL with indexed search and relational caching',
      'Type-safe REST API endpoints with Spring Security role-based access validation',
      'Interactive modular coursework viewer with dynamic progress tracking',
      'Clean editorial learning interface engineered with Tailwind CSS and React'
    ],
    myContribution: [
      'Designed end-to-end relational database models and Spring Boot REST controllers',
      'Built responsive React web client with type-safe state pipelines in TypeScript',
      'Authored native Android layouts and viewmodels using Kotlin',
      'Formulated the design system with a minimal, high-contrast dark visual hierarchy'
    ],
    systemHighlights: ['Multi-tier Architecture', 'Spring Security RBAC', 'PostgreSQL Relational Engine', 'Android MVVM']
  },
  {
    id: 'mealmatic',
    number: '02',
    name: 'Mealmatic',
    tagline: 'Intelligent Canteen Ordering & Operations Management Platform',
    year: '2024',
    role: 'Lead Developer & System Architect',
    category: 'Web App',
    featured: true,
    technologies: ['Django', 'Python', 'HTML5', 'CSS3', 'JavaScript', 'MySQL', 'Kiosk UI', 'Predictive Logic'],
    description: 'A digital ordering and operations management ecosystem for campus and corporate canteens, streamlining peak-hour queueing, kitchen fulfillment, and live inventory tracking.',
    problem: 'Peak-hour lunch rushes in campus canteens create chaotic order bottlenecks, inaccurate manual stock counts, delayed meal prep, and food waste from uncalibrated demand.',
    solution: 'Built a dual-interface platform comprising a fast self-service kiosk ordering UI and an administrative operations hub with live order queues, recipe-level stock depletion, and meal popularity metrics.',
    keyFeatures: [
      'Self-service kiosk checkout flow optimized for rapid touch interactions',
      'Real-time kitchen order display (KDS) with progressive status updates (Queued, Preparing, Ready)',
      'Automated ingredient-level inventory tracking with low-stock threshold triggers',
      'Smart item recommendations based on meal category pairing and dietary preferences',
      'Waste reduction analytics summarizing daily food preparation vs. actual consumer demand'
    ],
    myContribution: [
      'Architected Django backend models for multi-item order states and kitchen queues',
      'Constructed responsive kiosk and dashboard interfaces with custom JavaScript interactions',
      'Implemented transactional database locks in MySQL to prevent duplicate inventory deductions',
      'Formulated menu recommendation logic based on historical purchasing patterns'
    ],
    systemHighlights: ['Django ORM & Transactions', 'Kiosk Interaction Patterns', 'Kitchen Queue Lifecycle', 'Waste Reduction Metrics']
  },
  {
    id: 'servicelink',
    number: '03',
    name: 'ServiceLink',
    tagline: 'Student Helpdesk & Multi-Department Query Management System',
    year: '2023 - 2024',
    role: 'Full-Stack Developer & UI/UX Designer',
    category: 'System Architecture',
    featured: true,
    technologies: ['Python', 'Django', 'PostgreSQL', 'JavaScript', 'AI Chatbot', 'Role-Based Access', 'Audit Trail'],
    description: 'An enterprise-grade campus ticketing and helpdesk platform empowering students to log inquiries, track ticket statuses, and route issues to specialized university departments.',
    problem: 'Student administrative inquiries were scattered across email threads and paper forms, causing lost tickets, delayed responses, and zero accountability for departmental turnaround times.',
    solution: 'Developed an automated query management platform with intelligent department routing, automated escalation triggers, SLA tracking, AI-assisted self-help chatbot, and comprehensive audit logs.',
    keyFeatures: [
      'Automated ticket ingestion with priority scoring and category-based departmental routing',
      'Role-based access matrix supporting Students, Department Agents, Managers, and System Admins',
      'Integrated AI conversational assistant for immediate answers to recurring campus FAQs',
      'Real-time ticket lifecycle tracking with automated email & dashboard notifications',
      'Executive analytics suite monitoring average resolution time, agent workload, and SLA compliance',
      'Tamper-evident audit trail capturing every status change, internal note, and resolution log'
    ],
    myContribution: [
      'Engineered granular RBAC security rules and query filtering across 6 departmental tiers',
      'Integrated natural language pattern-matching FAQ chatbot for instantaneous query triaging',
      'Designed responsive helpdesk dashboard prioritizing readable ticket threads and history',
      'Formulated automated escalation cron jobs triggering manager alerts upon SLA breach'
    ],
    systemHighlights: ['Role-Based Access Control', 'Automated SLA Escalation', 'AI-Assisted Triaging', 'Full Audit Logging']
  },
  {
    id: 'finanseal',
    number: '04',
    name: 'Finanseal',
    tagline: '"Seal Your Savings, Secure Your Future" — Personal Expense Engine',
    year: '2024',
    role: 'Product Designer & Mobile/Web Developer',
    category: 'Mobile & AI',
    featured: true,
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'IndexedDB', 'Chart.js', 'PWA Offline Mode', 'Smart Analytics'],
    description: 'A personal finance and expense management platform built around the philosophy of mindful spending, goal tracking, and private offline-first ledger reliability.',
    problem: 'Most budget apps are cluttered with aggressive subscription paywalls, require intrusive bank credential sharing, or fail entirely when operating offline.',
    solution: 'Engineered an intuitive, distraction-free expense engine with instant transaction entry, custom category budgeting, visual trajectory forecasting, and 100% client-side privacy with offline sync.',
    keyFeatures: [
      'Real-time financial dashboard with breakdown across spending categories and recurring bills',
      'Goal tracking milestones with visual completion velocity and target date projections',
      'One-tap "Favorite Expenses" quick logger for recurring daily purchases (e.g. coffee, transit)',
      'Smart budgeting alerts notifying users when category expenditure surpasses 80% threshold',
      'Resilient offline-first storage engine utilizing browser IndexedDB with data export/import'
    ],
    myContribution: [
      'Crafted the brand identity, logo, typography, and "Seal Your Savings" visual language',
      'Engineered reactive client-side calculation engines and data visualization cards',
      'Implemented offline caching and local database state persistence for zero network latency',
      'Designed custom interaction micro-animations for transaction entries and milestone celebrations'
    ],
    systemHighlights: ['Offline-First Architecture', 'Interactive Financial Charts', 'Custom Brand System', 'Zero-Latency Logging']
  },
  {
    id: 'lakbai',
    number: '05',
    name: 'LakbAI',
    tagline: 'AI-Powered Intelligent Travel Companion & Itinerary Generator',
    year: '2024',
    role: 'Concept Designer & AI Prototyper',
    category: 'Mobile & AI',
    featured: false,
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'LLM Integration', 'Geolocation API', 'Dynamic Itineraries'],
    description: 'A context-aware smart travel assistant that generates hyper-personalized trip itineraries, estimates local transit budgets, and curates cultural immersion experiences in the Philippines.',
    problem: 'Travelers spend dozens of hours cross-referencing blogs, map routes, and transit fare tables to build cohesive itineraries tailored to specific budget bands.',
    solution: 'Designed an intelligent itinerary generator that digests travel dates, budget parameters, and travel style to generate optimized multi-day schedules with geographic route clustering.',
    keyFeatures: [
      'Prompt-driven itinerary synthesis with geographic route clustering to minimize commute overhead',
      'Dynamic currency and budget breakdown allocating funds across dining, transit, and activities',
      'Localized cultural etiquette notes and emergency contact directories for Philippine provinces',
      'Interactive timeline schedule with drag-and-drop stop reordering and export to calendar'
    ],
    myContribution: [
      'Engineered structured prompt templates and response validators for deterministic trip generation',
      'Built minimalist editorial travel cards with expandable day-by-day itineraries',
      'Designed responsive mobile-first travel companion views'
    ],
    systemHighlights: ['Prompt Engineering & Schema Validation', 'Geographic Clustering', 'Editorial Travel UI']
  },
  {
    id: 'bookease',
    number: '06',
    name: 'BookEase',
    tagline: 'Modern Hospitality Booking & Room Reservation Experience',
    year: '2023',
    role: 'Frontend Developer & UI/UX Designer',
    category: 'UI/UX & Web',
    featured: false,
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Framer Motion', 'State Management', 'Booking Engine'],
    description: 'A streamlined hotel reservation and accommodation booking web platform focused on frictionless dates selection, room amenity comparison, and transparent checkout.',
    problem: 'Traditional booking engines suffer from visual clutter, confusing date pickers, hidden surcharge disclosures, and high checkout drop-off rates.',
    solution: 'Crafted a modern reservation UI that emphasizes spacious photography, transparent per-night price breakdowns, and a three-step fluid checkout flow.',
    keyFeatures: [
      'Interactive room comparison matrix displaying amenities, bed configurations, and capacity',
      'Fluid date-range picker with instant rate recalculation and seasonal pricing highlights',
      'Visual booking review drawer with itemized taxes and instant cancellation policies',
      'Responsive design adapting flawlessly between desktop wide displays and smartphone screens'
    ],
    myContribution: [
      'Constructed complete component library adhering to strict typographic hierarchy',
      'Implemented dynamic date calculations and price aggregate state controllers',
      'Refined checkout friction by reducing input fields by 40% compared to legacy booking forms'
    ],
    systemHighlights: ['Frictionless Checkout UX', 'Dynamic Price Calculation', 'Responsive Layout Grid']
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Freelance Software & Web Developer / Designer',
    organization: 'Independent Client Engagements',
    category: 'Freelance Projects',
    period: '2023 — Present',
    location: 'Remote / Philippines',
    description: 'Delivering tailored full-stack web applications, custom digital tools, and brand-aligned UI/UX design systems for local businesses and independent creators.',
    responsibilities: [
      'Translating client business requirements into functional software architectures and responsive web interfaces',
      'Designing wireframes, high-fidelity prototypes, and component design systems using modern UI principles',
      'Developing production-ready applications with React, TypeScript, Tailwind CSS, Python/Django, and SQL databases',
      'Ensuring web performance optimization, cross-device responsiveness, SEO foundations, and clean deployment'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Django', 'Python', 'PostgreSQL', 'MySQL', 'UI/UX Design', 'Git'],
    achievements: [
      'Successfully deployed custom web applications with 99%+ client satisfaction rating',
      'Established modular frontend component architectures that reduced client feature rollout time by 35%',
      'Designed bespoke visual identities that improved digital conversion for client services'
    ]
  },
  {
    id: 'exp-2',
    role: 'Lead Architect & Full-Stack Developer (Academic Capstone)',
    organization: 'BS Information Technology Project Cohort',
    category: 'Academic Projects',
    period: '2024 — Present',
    location: 'University / Philippines',
    description: 'Spearheading the engineering and user experience of multi-platform academic software initiatives (including Cognita and ServiceLink), bridging backend micro-services with web and native mobile apps.',
    responsibilities: [
      'Architecting relational schema designs, entity relationships, and API contract specifications',
      'Leading code reviews, Git branch workflows, and standardizing TypeScript and Java code conventions',
      'Implementing secure authentication, role-based authorization matrices, and audit logging pipelines',
      'Conducting usability testing and system benchmarks across web and Android test suites'
    ],
    technologies: ['Spring Boot', 'Java', 'Android/Kotlin', 'Django', 'PostgreSQL', 'React', 'REST APIs', 'System Design'],
    achievements: [
      'Engineered cross-platform synchronization pipelines handling real-time data persistence between web and Android',
      'Recognized for exceptional software architecture and technical documentation in university evaluations',
      'Mentored peer developers on RESTful design patterns and modular component state management'
    ]
  },
  {
    id: 'exp-3',
    role: 'Product Creator & Open-Source Builder',
    organization: 'Independent Software Experiments',
    category: 'Personal Projects',
    period: '2023 — Present',
    location: 'Philippines',
    description: 'Continuously prototyping experimental software tools, AI utilities, and interactive web artifacts to explore modern software engineering paradigms and interaction design.',
    responsibilities: [
      'Building offline-first consumer utilities like Finanseal with client-side persistence and zero latency',
      'Prototyping AI integration workflows with large language models, prompt engineering, and UI heuristics',
      'Documenting architectural decisions, technical trade-offs, and open-sourcing reusable components on GitHub'
    ],
    technologies: ['React', 'TypeScript', 'Python', 'AI / LLM Integration', 'Tailwind CSS', 'Vite', 'IndexedDB'],
    achievements: [
      'Created 5+ production-grade end-to-end applications demonstrating complete software development lifecycle',
      'Refined design system patterns blending editorial typography with interactive 3D perspective models'
    ]
  },
  {
    id: 'exp-4',
    role: 'Student Leader & Technical Contributor',
    organization: 'IT Student Society & University Technology Initiatives',
    category: 'Leadership / Organizations',
    period: '2022 — 2024',
    location: 'University / Philippines',
    description: 'Actively participating in student technology organizations, facilitating peer programming sessions, and contributing to campus digital community initiatives.',
    responsibilities: [
      'Organizing knowledge-sharing workshops on foundational web development, Git version control, and UI design',
      'Assisting fellow students in debugging codebases across C, Java, Python, and web technologies',
      'Advocating for modern software craftsmanship and clean code principles within student study groups'
    ],
    technologies: ['Java', 'C', 'Python', 'Web Technologies', 'Git / GitHub', 'Technical Mentorship'],
    achievements: [
      'Facilitated peer learning circles that helped over 30+ IT students overcome programming coursework hurdles',
      'Represented the IT cohort in inter-departmental academic and technology symposiums'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
    categoryKey: 'programming',
    description: 'Core languages utilized for system logic, algorithms, backend services, and native applications.',
    skills: [
      { name: 'Java', level: 'Advanced', description: 'Enterprise backend systems with Spring Boot, OOP principles, and data structures.' },
      { name: 'Python', level: 'Advanced', description: 'Django web applications, automated scripts, backend services, and AI data parsing.' },
      { name: 'JavaScript (ES6+)', level: 'Advanced', description: 'Asynchronous event loops, DOM manipulation, and modern web application logic.' },
      { name: 'TypeScript', level: 'Advanced', description: 'Type-safe frontend development, strict schemas, interfaces, and scalable architectures.' },
      { name: 'Kotlin', level: 'Proficient', description: 'Native Android application development with MVVM, Coroutines, and modern UI.' },
      { name: 'C', level: 'Proficient', description: 'Foundational computer science concepts, memory management, pointers, and data structures.' }
    ]
  },
  {
    title: 'Web & Frontend Development',
    categoryKey: 'web',
    description: 'Modern reactive libraries, styling frameworks, and client-side toolchains.',
    skills: [
      { name: 'React', level: 'Advanced', description: 'Functional components, custom hooks, context state, and component lifecycles.' },
      { name: 'Tailwind CSS', level: 'Advanced', description: 'Utility-first responsive layouts, design token architectures, and theme systems.' },
      { name: 'Vite', level: 'Advanced', description: 'High-speed build toolchain, development environment bundling, and asset pipelines.' },
      { name: 'HTML5 & Semantic Web', level: 'Advanced', description: 'Accessible markup, SEO foundations, and document object structure.' },
      { name: 'Modern CSS3', level: 'Advanced', description: 'Flexbox, CSS Grid, 3D transforms, perspective styling, keyframe animations.' },
      { name: 'Motion / Animation', level: 'Proficient', description: 'Scroll-linked physics, stagger transitions, and interactive visual gestures.' }
    ]
  },
  {
    title: 'Backend & Systems',
    categoryKey: 'backend',
    description: 'Server frameworks, RESTful contract architectures, and secure business logic.',
    skills: [
      { name: 'Spring Boot', level: 'Proficient', description: 'Java enterprise services, Spring Security, dependency injection, JPA/Hibernate.' },
      { name: 'Django', level: 'Advanced', description: 'Python full-stack framework, ORM models, admin dashboard customization, auth.' },
      { name: 'RESTful API Design', level: 'Advanced', description: 'HTTP verbs, clean URL hierarchy, status codes, JSON serialization, rate limiting.' },
      { name: 'Authentication & RBAC', level: 'Advanced', description: 'Role-based access control, session security, password hashing, and token validation.' }
    ]
  },
  {
    title: 'Databases & Storage',
    categoryKey: 'databases',
    description: 'Relational data modeling, query optimization, and client-side offline storage.',
    skills: [
      { name: 'MySQL', level: 'Advanced', description: 'Relational table normalization, indexing, joins, transactions, and foreign keys.' },
      { name: 'PostgreSQL', level: 'Advanced', description: 'Complex relational schemas, constraints, indexing strategies, and ACID integrity.' },
      { name: 'IndexedDB & Local Storage', level: 'Proficient', description: 'Client-side offline data caching and browser persistent storage.' }
    ]
  },
  {
    title: 'Developer Tools & Workflows',
    categoryKey: 'tools',
    description: 'Version control, development environments, and debugging toolsets.',
    skills: [
      { name: 'Git & GitHub', level: 'Advanced', description: 'Branching strategies, pull requests, semantic versioning, and collaborative workflows.' },
      { name: 'VS Code', level: 'Advanced', description: 'Custom workspace configs, debugging tools, extensions, and code navigation.' },
      { name: 'Android Studio', level: 'Proficient', description: 'Native Android SDK emulation, Gradle build management, and layout profiling.' },
      { name: 'Postman / API Client', level: 'Advanced', description: 'API testing, request collection structuring, and endpoint verification.' }
    ]
  },
  {
    title: 'AI & Creative Technology',
    categoryKey: 'ai',
    description: 'Applied artificial intelligence, generative models, and smart product interfaces.',
    skills: [
      { name: 'LLM & Gemini API Integration', level: 'Proficient', description: 'Connecting AI models to application logic for structured data generation and assistants.' },
      { name: 'Prompt Engineering', level: 'Advanced', description: 'Zero-shot, few-shot, and system prompt engineering with strict JSON output schemas.' },
      { name: 'AI UI / UX Patterns', level: 'Advanced', description: 'Designing conversational interfaces, streaming text states, and predictive user flows.' },
      { name: 'Generative AI Workflows', level: 'Proficient', description: 'Leveraging AI tooling to accelerate prototyping, test case generation, and problem solving.' }
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cert-1',
    title: 'IBM Artificial Intelligence & Applied Engineering Foundations',
    organization: 'IBM / Coursera',
    year: '2024',
    credentialId: 'IBM-AI-VERIFIED-7842',
    category: 'AI & Machine Learning',
    skillsCovered: ['AI Concepts & Terminology', 'Machine Learning Pipelines', 'Ethical AI', 'Generative AI Principles']
  },
  {
    id: 'cert-2',
    title: 'Building Modern Web Applications with React & TypeScript',
    organization: 'Coursera / Industry Specialization',
    year: '2024',
    credentialId: 'COURSERA-TS-REACT-9921',
    category: 'Software Engineering',
    skillsCovered: ['Type-Safe React', 'State Architecture', 'Component Life Cycles', 'REST Integration']
  },
  {
    id: 'cert-3',
    title: 'Python Backend Systems & Relational Database Architecture',
    organization: 'Verified Online Credential',
    year: '2023',
    credentialId: 'PY-SQL-ARCH-4412',
    category: 'Cloud & Systems',
    skillsCovered: ['Django Web Framework', 'SQL Database Normalization', 'RESTful API Standards', 'Authentication']
  }
];

export const EDUCATION_INFO: Education = {
  degree: 'Bachelor of Science in Information Technology',
  institution: 'University / Institute of Technology',
  level: 'Undergraduate Degree (Active Pursuit)',
  yearPeriod: '2022 — Present (Expected 2026)',
  location: 'Philippines',
  description: 'Rigorous academic curriculum focused on computer science fundamentals, software engineering methodologies, database management systems, and web/mobile application architectures.',
  coreCourses: [
    'Data Structures & Algorithms',
    'Object-Oriented Programming (Java & Python)',
    'Database Management Systems (MySQL & PostgreSQL)',
    'Web Systems & Technologies',
    'Software Engineering & System Analysis',
    'Mobile Application Development (Android/Kotlin)',
    'Computer Networks & Information Security',
    'Human-Computer Interaction & UI/UX Principles'
  ],
  academicProjects: [
    'Cognita: Multi-tier educational ecosystem linking Spring Boot and Android',
    'Mealmatic: Django-driven canteen ordering and inventory management platform',
    'ServiceLink: Campus helpdesk query system with role-based security'
  ],
  highlights: [
    'Maintained consistent high academic standing in software engineering and programming coursework',
    'Selected as lead developer for major capstone software development projects',
    'Active participant in university programming competitions and technical study sessions'
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    number: '01',
    title: 'Web Application Development',
    tagline: 'Fast, responsive, and resilient full-stack web platforms.',
    description: 'Architecting and developing custom web applications from database schemas to polished frontend interfaces. Built with type safety, clean code architecture, and high performance.',
    deliverables: [
      'Single Page Applications (React / TypeScript / Vite)',
      'Backend API development (Django / Spring Boot / Node)',
      'Database modeling & integration (PostgreSQL / MySQL)',
      'Authentication, authorization, and role management',
      'Third-party API and service integrations'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Django', 'Spring Boot', 'PostgreSQL']
  },
  {
    number: '02',
    title: 'Custom Software Development',
    tagline: 'Tailored digital solutions built around your operational workflows.',
    description: 'Creating customized software tools, inventory portals, ticket helpdesks, and business management systems engineered to eliminate bottlenecks.',
    deliverables: [
      'Administrative dashboards & operational hubs',
      'Inventory, ordering, and ticketing management tools',
      'Desktop & multi-platform software prototypes',
      'Automated data workflows & reporting pipelines'
    ],
    techStack: ['Python', 'Java', 'Kotlin', 'SQL', 'REST APIs']
  },
  {
    number: '03',
    title: 'UI/UX & Design Systems',
    tagline: 'Clean, intentional interfaces where typography meets visual hierarchy.',
    description: 'Designing intuitive user interfaces that balance aesthetic distinction with functional clarity. Every screen is crafted with intentional spacing, readable typography, and cohesive component logic.',
    deliverables: [
      'Comprehensive UI wireframes and high-fidelity mockups',
      'Interactive Figma prototypes and design tokens',
      'Component design systems & style guides',
      'Usability audits and interaction ergonomics'
    ],
    techStack: ['Figma', 'Design Systems', 'Space Grotesk Typography', 'Tailwind Tokens']
  },
  {
    number: '04',
    title: 'AI-Powered Solutions & Prototyping',
    tagline: 'Augmenting products with intelligent language and vision models.',
    description: 'Integrating modern AI capabilities into web and software products to deliver intelligent assistants, automated content summarization, and context-aware recommendations.',
    deliverables: [
      'LLM integration via Gemini and REST endpoints',
      'Custom prompt architecture & structured JSON output validation',
      'Conversational AI chatbots and contextual help assistants',
      'Smart search, classification, and recommendation engines'
    ],
    techStack: ['Gemini API', 'Prompt Engineering', 'TypeScript', 'Python']
  },
  {
    number: '05',
    title: 'Website Design & Creative Portfolios',
    tagline: 'Distinctive digital presence for individuals, brands, and startups.',
    description: 'Creating modern, editorial-grade websites that stand out through typography, whitespace, and subtle kinetic interactions without falling into generic web clichés.',
    deliverables: [
      'Editorial personal portfolios & brand websites',
      'Responsive landing pages optimized for conversion',
      'Micro-interactions and smooth scroll experiences',
      'Performance optimization, accessibility, and SEO foundations'
    ],
    techStack: ['HTML5', 'Tailwind CSS', 'React', 'Motion', 'Vite']
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    subtitle: 'Understanding the Core Problem',
    description: 'Deep diving into project goals, user personas, operational constraints, and domain requirements to define exact success criteria.',
    details: ['Stakeholder alignment', 'User problem definition', 'Scope & feasibility assessment', 'Technology evaluation']
  },
  {
    number: '02',
    title: 'Plan',
    subtitle: 'Architecture & System Blueprint',
    description: 'Formulating the technical foundation, relational database models, API contract schemas, and modular software architecture.',
    details: ['System architecture diagram', 'Database schema modeling', 'API endpoint specifications', 'Component hierarchy planning']
  },
  {
    number: '03',
    title: 'Design',
    subtitle: 'Visual & Interaction System',
    description: 'Creating the design language, typographic hierarchy, responsive layouts, and interactive prototypes tailored to the brand.',
    details: ['Wireframes & high-fidelity mockups', 'Design system token definition', 'Interactive click-through prototype', 'Accessibility & contrast check']
  },
  {
    number: '04',
    title: 'Build',
    subtitle: 'Clean, Type-Safe Development',
    description: 'Writing maintainable, clean code using modern engineering standards, responsive frameworks, and robust backend logic.',
    details: ['Modular component construction', 'Type-safe API integration', 'State management & routing', 'Database transactions & queries']
  },
  {
    number: '05',
    title: 'Test',
    subtitle: 'Validation & Polish',
    description: 'Conducting edge-case verification, responsive device testing, performance tuning, and usability friction reduction.',
    details: ['Cross-browser & mobile testing', 'API response error handling', 'Performance & load optimization', 'Visual polish & motion tuning']
  },
  {
    number: '06',
    title: 'Deliver',
    subtitle: 'Deployment & Continuity',
    description: 'Deploying the product to production infrastructure, preparing clear documentation, and establishing an iteration roadmap.',
    details: ['Production hosting & DNS setup', 'Source code & documentation delivery', 'Client walkthrough & handover', 'Post-launch feedback loop']
  }
];
