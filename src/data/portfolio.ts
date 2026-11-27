export interface NavItem {
  label: string;
  href: string;
}

export interface ExpertiseItem {
  id: string;
  title: string;
  description: string;
  iconName:
    | "Workflow"
    | "Bot"
    | "Code2"
    | "Layers"
    | "MessageSquareMore"
    | "BarChart3";
  tag: string;
}

export type ProjectCategory =
  | "WhatsApp Chatbot Solutions"
  | "Email Campaign Manager"
  | "LinkedIn Outreach Automation"
  | "AI Automation Systems"
  | "Business Intelligence & Analytics"
  | "Full-Stack & Mobile Systems";

export interface ProjectItem {
  id: string;
  category: ProjectCategory;
  title: string;
  shortDescription: string;
  problemSolved: string;
  techStack: string[];
  keyFeatures: string[];
  screenshotPath: string | null;
  imageFit?: "cover" | "contain";
  screenshotPlaceholderLabel: string;
  demoUrl: string | null;
  isPlaceholderContent: boolean;
}

export interface LeadershipPillar {
  key: "INNOVATION" | "LEADERSHIP" | "GROWTH";
  index: string;
  title: string;
  statement: string;
  detail: string;
}

export type ServiceCategory =
  | "AI & Data"
  | "Software & Cloud"
  | "Design & Advisory";

export interface CompanyService {
  title: string;
  summary: string;
  price: string;
  category: ServiceCategory;
  iconName:
    | "Bot"
    | "Globe"
    | "Layers"
    | "Smartphone"
    | "Database"
    | "Palette"
    | "Plug"
    | "ShieldCheck"
    | "BarChart3"
    | "Briefcase";
}

export type TimelineCategory =
  | "Professional Roles"
  | "Company Milestones"
  | "Verified Achievements"
  | "Education"
  | "Certifications"
  | "Important Projects";

export interface TimelineEntry {
  id: string;
  category: TimelineCategory;
  title: string;
  organization: string;
  period: string;
  description: string;
  isVerified: boolean;
}

export const EXECUTIVE_PROFILE = {
  name: "Faiz Jillani",
  brandTitle: "FAIZ JILLANI",
  roleLabel: "CTO & TECHNOLOGY LEADER",
  roleTitle: "CTO — ERHA Technologies",
  company: "ERHA Technologies",
  heroHeadline: "Building Smarter Businesses Through Technology.",
  heroSubheadline:
    "Driving innovation through AI automation, intelligent business solutions and custom software development.",
  portraitPath: "/images/faiz-jillani-portrait.jpg",
  portraitAlt:
    "Faiz Jillani, CTO of ERHA Technologies, in a tailored navy blue three-piece suit against a cool light grey studio backdrop.",
  email: "info@erhatechnologies.com",
  phone: "+923281373200",
  phoneDisplay: "+92 328 137 3200",
  whatsappUrl: "https://wa.me/923281373200",
  // Verified executive links
  linkedinUrl: "https://www.linkedin.com/in/faiz-jillani-5719341b7" as string | null,
  companyWebsiteUrl: "https://erhatechnologies.com",
  hasCompanyLogoAsset: false,
  footerTagline: "Leadership | Innovation | Technology | Growth",
  copyrightYear: 2026,
} as const;

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Expertise", href: "/expertise" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "ERHA Technologies", href: "/erha-technologies" },
  { label: "Contact", href: "/contact" },
];

export const ABOUT_SECTION = {
  eyebrow: "About the CTO",
  heading: "Turning Technology Into Business Growth.",
  leadParagraph:
    "As Chief Technology Officer of ERHA Technologies, Faiz Jillani leads the strategic direction of a technology-driven organization focused on AI automation, intelligent business systems, and custom software engineering.",
  bodyParagraphs: [
    "His work centers on bridging practical executive strategy with modern engineering—helping organizations replace fragmented manual operations with reliable, scalable digital infrastructure.",
  ],
  editableExecutiveFacts: [
    {
      label: "Current Appointment",
      value: "Chief Technology Officer, ERHA Technologies",
      isPlaceholder: false,
    },
    {
      label: "Primary Focus",
      value: "AI Automation, Intelligent Business Systems & Custom Software",
      isPlaceholder: false,
    },
    {
      label: "Organization",
      value: "ERHA Technologies — Technology & Automation Solutions",
      isPlaceholder: false,
    },
    {
      label: "Academic Background",
      value: "PhD in Computer Science (2024–2028, Continuing) · MS IT (2018–2020)",
      isPlaceholder: false,
    },
  ],
};

export const EXPERTISE_AREAS: ExpertiseItem[] = [
  {
    id: "ai-business-automation",
    title: "AI & Business Automation",
    description:
      "Designing end-to-end automated workflows that eliminate repetitive operational bottlenecks and accelerate organizational execution.",
    iconName: "Workflow",
    tag: "Operational Intelligence",
  },
  {
    id: "ai-agents-chatbots",
    title: "AI Agents & Intelligent Chatbots",
    description:
      "Architecting context-aware conversational agents and task-oriented AI assistants tailored to customer engagement and internal operations.",
    iconName: "Bot",
    tag: "Conversational AI",
  },
  {
    id: "full-stack-development",
    title: "Full-Stack Development",
    description:
      "Delivering cohesive web platforms with modern frontend architecture, resilient backend services, and disciplined system engineering.",
    iconName: "Code2",
    tag: "Web Architecture",
  },
  {
    id: "custom-software-saas",
    title: "Custom Software & SaaS",
    description:
      "Building purpose-built enterprise software and multi-tenant SaaS products engineered for scalability, security, and long-term maintainability.",
    iconName: "Layers",
    tag: "Product Engineering",
  },
  {
    id: "whatsapp-business-solutions",
    title: "WhatsApp Business Solutions",
    description:
      "Implementing structured WhatsApp Business automation for lead qualification, customer support routing, and automated notifications.",
    iconName: "MessageSquareMore",
    tag: "Messaging Automation",
  },
  {
    id: "data-science-bi",
    title: "Data Science & Business Intelligence",
    description:
      "Transforming operational datasets into structured dashboards, analytical models, and decision-ready executive visibility.",
    iconName: "BarChart3",
    tag: "Decision Systems",
  },
];

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  "WhatsApp Chatbot Solutions",
  "Email Campaign Manager",
  "LinkedIn Outreach Automation",
  "AI Automation Systems",
  "Business Intelligence & Analytics",
  "Full-Stack & Mobile Systems",
];

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: "erha-whatsapp-ai-bot",
    category: "WhatsApp Chatbot Solutions",
    title: "ERHA WhatsApp AI Bot & Command Center",
    shortDescription:
      "Production website-grounded WhatsApp AI customer support and sales assistant with a live monitoring dashboard.",
    problemSolved:
      "Eliminates delayed manual WhatsApp replies and ungrounded AI responses by answering strictly from verified business data.",
    techStack: ["NestJS", "OpenWA", "Firebase Firestore", "Gemini API", "React"],
    keyFeatures: [
      "Multi-language detection in English, Urdu, and Roman Urdu",
      "In-process FIFO per-customer message queue with zero Redis dependency",
      "Real-time Firestore dashboard with 1-click human agent takeover",
    ],
    screenshotPath: "/images/projects/whatsapp-chatbot-solutions.png",
    imageFit: "cover",
    screenshotPlaceholderLabel: "ERHA WhatsApp Chatbot Solutions",
    demoUrl: null,
    isPlaceholderContent: false,
  },
  {
    id: "whatsapp-campaign-manager",
    category: "WhatsApp Chatbot Solutions",
    title: "WhatsApp Campaign Management System",
    shortDescription:
      "Controlled outbound WhatsApp campaign platform engineered for large-scale lead outreach and instant human handoff.",
    problemSolved:
      "Replaces risky message bursts with paced Redis-queued delivery, daily limits, timezone windows, and automatic opt-out suppression.",
    techStack: ["Next.js 15", "React 19", "Upstash Redis", "Firebase", "OpenWA"],
    keyFeatures: [
      "Paced outbound campaign worker with configurable daily sending limits",
      "Instant HUMAN_HANDOFF pause & alert when a customer replies",
      "Streaming CSV lead import with composite duplicate protection",
    ],
    screenshotPath: "/images/projects/whatsapp-architecture.png",
    imageFit: "cover",
    screenshotPlaceholderLabel: "WhatsApp AI Bot System Architecture",
    demoUrl: null,
    isPlaceholderContent: false,
  },
  {
    id: "anxiefy-pro-email-tracker",
    category: "Email Campaign Manager",
    title: "Anxiefy Pro — Email Tracking & Analytics Platform",
    shortDescription:
      "Multi-tenant SaaS email tracking and engagement analytics platform with Google Apps Script and REST API integration.",
    problemSolved:
      "Gives teams real-time visibility into email opens, link clicks, and recipient timelines without manual spreadsheet tracking.",
    techStack: [
      "Next.js 14",
      "Supabase PostgreSQL",
      "Cheerio",
      "Recharts",
      "Apps Script",
    ],
    keyFeatures: [
      "1×1 open tracking pixel and Cheerio-powered safe 302 click redirects",
      "SHA-256 hashed multi-tenant API keys with Supabase Row Level Security",
      "Real-time Recharts analytics and per-email event timelines",
    ],
    screenshotPath: "/images/projects/anxiefy-pro-logo.png",
    imageFit: "contain",
    screenshotPlaceholderLabel: "Anxiefy Pro Email Tracking & Analytics Platform",
    demoUrl: null,
    isPlaceholderContent: false,
  },
  {
    id: "linkedin-ai-outreach-agent",
    category: "LinkedIn Outreach Automation",
    title: "Autonomous AI LinkedIn Lead Generation Agent",
    shortDescription:
      "End-to-end AI LinkedIn prospecting workflow combining decision-maker discovery, Gemini scoring, and HeyReach dispatch.",
    problemSolved:
      "Replaces manual LinkedIn prospecting with structured ICP filtering, personalized messaging, and automated meeting booking.",
    techStack: [
      "Gemini AI",
      "HeyReach API",
      "Firebase",
      "Google Calendar",
      "REST APIs",
    ],
    keyFeatures: [
      "Automated decision-maker discovery with blocklist & duplicate checks",
      "Gemini 0–100 ICP scoring and hyper-personalized ≤280-char notes",
      "AI reply sentiment analysis with 1-click Google Calendar booking",
    ],
    screenshotPath: "/images/projects/linkedin-ai-workflow.png",
    imageFit: "cover",
    screenshotPlaceholderLabel: "Autonomous AI LinkedIn Lead Generation Workflow",
    demoUrl: null,
    isPlaceholderContent: false,
  },
  {
    id: "publicore-ai-publishing",
    category: "AI Automation Systems",
    title: "PUBLICORE — AI Academic Publishing & Research Ecosystem",
    shortDescription:
      "AI-native academic publishing, peer-review, and scientific research intelligence platform built for scholarly ecosystems.",
    problemSolved:
      "Streamlines fragmented journal submissions, multi-role peer reviews, and research gap discovery in one unified system.",
    techStack: [
      "Next.js 14",
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "AI Assistant",
    ],
    keyFeatures: [
      "Dedicated AI research assistant, research gap & trend analysis tools",
      "Role-based workflows for authors, reviewers, editors, and admins",
      "Full portals for journals, conferences, publications, and researchers",
    ],
    screenshotPath: "/images/projects/publicore-bg.jpg",
    imageFit: "cover",
    screenshotPlaceholderLabel: "PUBLICORE AI Research Ecosystem",
    demoUrl: null,
    isPlaceholderContent: false,
  },
  {
    id: "erha-intelligent-ai-suite",
    category: "AI Automation Systems",
    title: "ERHA Intelligent AI & Workflow Automation Suite",
    shortDescription:
      "Modular AI agent and workflow automation systems connecting websites, messaging channels, CRMs, and business operations.",
    problemSolved:
      "Eliminates repetitive manual lead intake, support triage, and disconnected tool handoffs across growing businesses.",
    techStack: ["AI Agents", "Gemini API", "NestJS", "TypeScript", "Webhooks"],
    keyFeatures: [
      "24/7 customer support, FAQ handling, and smart appointment booking",
      "Automated lead capture, qualification, and CRM synchronization",
      "Custom website and WhatsApp conversational AI integrations",
    ],
    screenshotPath: "/images/projects/erha-ai-systems.png",
    imageFit: "cover",
    screenshotPlaceholderLabel: "ERHA Intelligent AI Systems",
    demoUrl: null,
    isPlaceholderContent: false,
  },
  {
    id: "pos-pro-bi-management",
    category: "Business Intelligence & Analytics",
    title: "POS Pro — Business Management, Inventory & BI System",
    shortDescription:
      "Full-stack business management, inventory, quotation, A4 invoicing, and Windows auto-printing platform with live BI charts.",
    problemSolved:
      "Unifies billing, stock control, role-based operations, and physical receipt/invoice printing with real-time revenue visibility.",
    techStack: [
      "React 18",
      "Node.js",
      "Express",
      "MongoDB Atlas",
      "Recharts",
      "PDFKit",
    ],
    keyFeatures: [
      "Live Recharts executive analytics and sales performance dashboards",
      "PDFKit A4 invoice/quotation engine with Windows Local Print Bridge",
      "JWT authentication and Role-Based Access Control (Admin, Manager, Staff)",
    ],
    screenshotPath: "/images/projects/erha-ai-solutions.png",
    imageFit: "cover",
    screenshotPlaceholderLabel: "POS Pro Business Management & BI",
    demoUrl: null,
    isPlaceholderContent: false,
  },
  {
    id: "alp-solar-partner-app",
    category: "Full-Stack & Mobile Systems",
    title: "Alp Solar Partner — Mobile Operations App",
    shortDescription:
      "Cross-platform mobile application built with React Native and Expo for solar partner workflows and field operations.",
    problemSolved:
      "Equips field teams with mobile-first photo capture, location tracking, and cloud-synced operational records.",
    techStack: ["React Native", "Expo Router", "Firebase", "TypeScript"],
    keyFeatures: [
      "Cross-platform support across Android, iOS, and Web via Expo 58",
      "Integrated camera, image manipulation, and geolocation services",
      "Real-time Firebase backend sync with offline AsyncStorage support",
    ],
    screenshotPath: null,
    screenshotPlaceholderLabel: "Alp Solar Partner — React Native & Expo App",
    demoUrl: null,
    isPlaceholderContent: false,
  },
  {
    id: "skyfly-travels-platform",
    category: "Full-Stack & Mobile Systems",
    title: "Sky Fly Travels — Travel & Booking Platform",
    shortDescription:
      "Modern responsive web platform for flight ticketing, hotel bookings, travel insurance, and itinerary planning.",
    problemSolved:
      "Delivers a fast, trustworthy digital storefront for travelers to explore packages and request flight/hotel bookings.",
    techStack: ["React 19", "TypeScript", "Vite", "Tailwind CSS 4", "Docker"],
    keyFeatures: [
      "Responsive React 19 + Tailwind CSS 4 storefront built for speed",
      "Dedicated flight, hotel, travel insurance, and tour workflows",
      "Production containerized deployment via Docker and Nginx",
    ],
    screenshotPath: "/images/projects/skyfly-logo.png",
    imageFit: "contain",
    screenshotPlaceholderLabel: "Sky Fly Travels Platform",
    demoUrl: null,
    isPlaceholderContent: false,
  },
];

export const LEADERSHIP_PILLARS: LeadershipPillar[] = [
  {
    key: "INNOVATION",
    index: "01",
    title: "INNOVATION",
    statement:
      "Transforming modern business challenges into intelligent technology solutions.",
    detail:
      "Every system is evaluated by its clarity, adaptability, and capacity to simplify complex operational realities.",
  },
  {
    key: "LEADERSHIP",
    index: "02",
    title: "LEADERSHIP",
    statement:
      "Building teams and products with a focus on quality, responsibility and innovation.",
    detail:
      "Strong execution stems from accountable teams, disciplined engineering standards, and principled decision-making.",
  },
  {
    key: "GROWTH",
    index: "03",
    title: "GROWTH",
    statement:
      "Helping businesses adopt scalable digital systems and smarter workflows.",
    detail:
      "Sustainable growth requires dependable software foundations that scale smoothly alongside evolving business demands.",
  },
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  "AI & Data",
  "Software & Cloud",
  "Design & Advisory",
];

export const ERHA_SERVICES: CompanyService[] = [
  {
    title: "AI & Automation Solutions",
    price: "$1,000",
    category: "AI & Data",
    iconName: "Bot",
    summary:
      "Intelligent workflow automation, conversational agents, and applied AI systems built for operational efficiency.",
  },
  {
    title: "Web & E-commerce Development",
    price: "$900",
    category: "Software & Cloud",
    iconName: "Globe",
    summary:
      "High-performance corporate web platforms and scalable digital commerce storefronts.",
  },
  {
    title: "Custom Software & SaaS Development",
    price: "$1,500",
    category: "Software & Cloud",
    iconName: "Layers",
    summary:
      "Tailored enterprise software and multi-tenant SaaS architectures engineered from concept to production.",
  },
  {
    title: "Mobile App Development",
    price: "$1,200",
    category: "Software & Cloud",
    iconName: "Smartphone",
    summary:
      "Reliable cross-platform and native mobile experiences aligned with modern business workflows.",
  },
  {
    title: "Database & Cloud Solutions",
    price: "$800",
    category: "Software & Cloud",
    iconName: "Database",
    summary:
      "Resilient database architecture, cloud infrastructure setup, and scalable data management.",
  },
  {
    title: "UI/UX & Graphic Design",
    price: "$500",
    category: "Design & Advisory",
    iconName: "Palette",
    summary:
      "Intentional interface architecture and visual brand systems designed for clarity and usability.",
  },
  {
    title: "API & System Integration",
    price: "$700",
    category: "Software & Cloud",
    iconName: "Plug",
    summary:
      "Seamless connectivity across third-party platforms, CRMs, messaging gateways, and internal tools.",
  },
  {
    title: "DevOps & Cybersecurity",
    price: "$900",
    category: "Software & Cloud",
    iconName: "ShieldCheck",
    summary:
      "Automated deployment pipelines, infrastructure reliability, and security-conscious engineering practices.",
  },
  {
    title: "Data Science & Business Intelligence",
    price: "$1,000",
    category: "AI & Data",
    iconName: "BarChart3",
    summary:
      "Analytical modeling and executive reporting pipelines that turn raw data into actionable clarity.",
  },
  {
    title: "Digital Marketing & IT Consulting",
    price: "$600/month",
    category: "Design & Advisory",
    iconName: "Briefcase",
    summary:
      "Strategic technology advisory and digital growth initiatives aligned with commercial objectives.",
  },
];

export const TIMELINE_CATEGORIES: TimelineCategory[] = [
  "Professional Roles",
  "Company Milestones",
  "Education",
  "Certifications",
  "Important Projects",
];

export const TIMELINE_ENTRIES: TimelineEntry[] = [
  {
    id: "role-cto-erha",
    category: "Professional Roles",
    title: "Chief Technology Officer (CTO)",
    organization: "ERHA Technologies",
    period: "2022 – Present",
    description:
      "Leading executive strategy, product architecture, AI automation initiatives, and custom software delivery at ERHA Technologies.",
    isVerified: true,
  },
  {
    id: "role-numl",
    category: "Professional Roles",
    title: "Faculty Member",
    organization: "National University of Modern Languages (NUML)",
    period: "2025 – 2026",
    description:
      "Served in an academic and teaching role at NUML, contributing to computer science and information technology instruction.",
    isVerified: true,
  },
  {
    id: "role-mnsuam",
    category: "Professional Roles",
    title: "Faculty Member",
    organization: "Muhammad Nawaz Shareef University of Agriculture, Multan (MNSUAM)",
    period: "2023 – 2025",
    description:
      "Served in an academic and teaching role at MNSUAM, guiding students in computing, software engineering, and modern technology.",
    isVerified: true,
  },
  {
    id: "role-bzu",
    category: "Professional Roles",
    title: "Faculty Member",
    organization: "Bahauddin Zakariya University (BZU)",
    period: "2021 – 2023",
    description:
      "Served in an academic and teaching role at Bahauddin Zakariya University, supporting computer science and IT education.",
    isVerified: true,
  },
  {
    id: "milestone-erha-2022",
    category: "Company Milestones",
    title: "Founded ERHA Technologies",
    organization: "ERHA Technologies",
    period: "2022",
    description:
      "Established ERHA Technologies in 2022 to help businesses modernize operations through AI automation, intelligent chatbots, SaaS engineering, cloud infrastructure, and business intelligence.",
    isVerified: true,
  },
  {
    id: "education-phd-cs",
    category: "Education",
    title: "PhD in Computer Science (Continuing)",
    organization: "Doctoral Studies — Computer Science",
    period: "2024 – 2028",
    description:
      "Currently pursuing doctoral research in Computer Science (2024–2028), bridging advanced computing theory with applied artificial intelligence and scalable enterprise systems.",
    isVerified: true,
  },
  {
    id: "education-ms-it",
    category: "Education",
    title: "MS in Information Technology (MS IT)",
    organization: "Graduate Degree — Information Technology",
    period: "2018 – 2020",
    description:
      "Completed Master of Science in Information Technology (2018–2020) prior to advancing into doctoral studies in Computer Science.",
    isVerified: true,
  },
  {
    id: "certification-cyber-security-ics",
    category: "Certifications",
    title: "Cyber Security of Industrial Control Systems",
    organization: "IEEE",
    period: "May 2020",
    description:
      "Completed IEEE continuing education course on Cyber Security of Industrial Control Systems, covering threat analysis and protection of critical infrastructure.",
    isVerified: true,
  },
  {
    id: "certification-fuzzy-clustering",
    category: "Certifications",
    title: "Fuzzy Clustering in Very Large Data Sets",
    organization: "IEEE",
    period: "May 2020",
    description:
      "Completed IEEE continuing education course on fuzzy clustering techniques applied to very large data sets for advanced data analysis.",
    isVerified: true,
  },
  {
    id: "certification-wireless-sensor",
    category: "Certifications",
    title: "Wireless Sensor Networks and Applications",
    organization: "IEEE",
    period: "May 2020",
    description:
      "Completed IEEE continuing education course on wireless sensor network architectures and their real-world applications.",
    isVerified: true,
  },
  {
    id: "certification-blockchain",
    category: "Certifications",
    title: "Understanding Blockchain Technology",
    organization: "IEEE",
    period: "May 2020",
    description:
      "Completed IEEE continuing education course on blockchain fundamentals, abstracting core concepts and distributed ledger technology.",
    isVerified: true,
  },
  {
    id: "certification-neural-networks-rf",
    category: "Certifications",
    title: "Applications of Neural Networks for RF Design",
    organization: "IEEE",
    period: "June 2020",
    description:
      "Completed IEEE continuing education course on applying neural network techniques to radio frequency (RF) design and optimization.",
    isVerified: true,
  },
  {
    id: "certification-software-construction",
    category: "Certifications",
    title: "Software Construction, Methods and Tools (CSDA)",
    organization: "IEEE",
    period: "June 2020",
    description:
      "Completed IEEE CSDA continuing education course covering software construction methodologies, development tools, and best practices.",
    isVerified: true,
  },
  {
    id: "certification-discover-5g",
    category: "Certifications",
    title: "Discover 5G",
    organization: "IEEE",
    period: "June 2020",
    description:
      "Completed IEEE continuing education course on 5G technology fundamentals, architecture, and next-generation mobile network applications.",
    isVerified: true,
  },
  {
    id: "certification-rfid",
    category: "Certifications",
    title: "Principles and Applications of RFID",
    organization: "IEEE",
    period: "July 2020",
    description:
      "Completed IEEE continuing education course on RFID principles, protocols, and practical applications in identification and tracking systems.",
    isVerified: true,
  },
  {
    id: "important-project-ai-suite",
    category: "Important Projects",
    title: "Enterprise AI Automation & WhatsApp Chatbot Ecosystem",
    organization: "ERHA Technologies",
    period: "2025",
    description:
      "Architected an integrated suite of AI business automation workflows, WhatsApp Business lead-routing chatbots, and intelligent customer engagement agents for scalable operations.",
    isVerified: true,
  },
  {
    id: "important-project-outreach-bi",
    category: "Important Projects",
    title: "Multi-Channel Growth & Business Intelligence Architecture",
    organization: "ERHA Technologies",
    period: "2026",
    description:
      "Engineered unified Email Campaign Management, B2B LinkedIn Outreach Automation, and executive Business Intelligence dashboards to streamline commercial pipelines and reporting.",
    isVerified: true,
  },
];
