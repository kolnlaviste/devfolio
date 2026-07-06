import {
  Coffee,
  Terminal,
  Hash,
  FileCode,
  Palette,
  Braces,
  Code,
  Smartphone,
  Layers,
  Zap,
  Grid2X2,
  Server,
  Database,
  LinkIcon,
  Cpu,
  Bot,
  MessageSquare,
  GitBranch,
  Code2,
  Globe,
  Paintbrush,
  Atom,
  Wrench,
  Monitor,
  type LucideIcon,
} from "lucide-react";

export type Skill = {
  name: string;
  lucideIcon: LucideIcon;
};

export type SkillCategory = {
  name: string;
  icon: LucideIcon;
  skills: Skill[];
};

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  demo?: string;
  learned?: string;
};

export type Experience = {
  title: string;
  company: string;
  employment: string;
  period: string;
  description: string;
  tech: string[];
  current?: boolean;
};

export const skillsData: Record<string, SkillCategory> = {
  languages: {
    name: "Languages",
    icon: Code2,
    skills: [
      { name: "Java", lucideIcon: Coffee },
      { name: "C", lucideIcon: Terminal },
      { name: "C#", lucideIcon: Hash },
      { name: "HTML", lucideIcon: FileCode },
      { name: "CSS", lucideIcon: Palette },
      { name: "JavaScript", lucideIcon: Braces },
      { name: "Python", lucideIcon: Code },
      { name: "TypeScript", lucideIcon: Code2 },
      { name: "PHP", lucideIcon: Globe },
      { name: "Dart", lucideIcon: Smartphone },
    ],
  },
  frontend: {
    name: "Frontend",
    icon: Monitor,
    skills: [
      { name: "React", lucideIcon: Atom },
      { name: "Next.js", lucideIcon: Layers },
      { name: "Tailwind", lucideIcon: Palette },
      { name: "Svelte", lucideIcon: Zap },
      { name: "Bootstrap", lucideIcon: Grid2X2 },
      { name: "Flutter", lucideIcon: Smartphone },
    ],
  },
  backend: {
    name: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", lucideIcon: Server },
      { name: "Express.js", lucideIcon: Server },
      { name: "FastAPI", lucideIcon: Zap },
    ],
  },
  databases: {
    name: "Databases",
    icon: Database,
    skills: [
      { name: "MySQL", lucideIcon: Database },
      { name: "MongoDB", lucideIcon: Database },
      { name: "PostgreSQL", lucideIcon: Database },
      { name: "Supabase", lucideIcon: Database },
      { name: "SurrealDB", lucideIcon: Database },
    ],
  },
  ai: {
    name: "AI & ML",
    icon: Bot,
    skills: [
      { name: "LangChain", lucideIcon: LinkIcon },
      { name: "Groq", lucideIcon: Cpu },
      { name: "Pydantic AI", lucideIcon: Bot },
      { name: "Claude", lucideIcon: Bot },
      { name: "ChatGPT", lucideIcon: MessageSquare },
    ],
  },
  tools: {
    name: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git", lucideIcon: GitBranch },
      { name: "VS Code", lucideIcon: Code2 },
      { name: "WordPress", lucideIcon: Globe },
      { name: "Figma", lucideIcon: Paintbrush },
      { name: "Android Studio", lucideIcon: Smartphone },
    ],
  },
};

export const projectsData: Project[] = [
  {
    title: "Knowledge Base Tool",
    description:
      "An internal tool that lets Elinnov employees easily find, create, and share company knowledge in one place.",
    technologies: ["React.js", "Redux", ".NET", "MongoDB", "ElasticSearch"],
    image: "/projects/knowledge-base-tool.jpg",
    learned:
      "Managing search at scale with ElasticSearch and building RESTful APIs with .NET",
  },
  {
    title: "HireLink",
    description:
      "HireLink is a job board platform built with Next.js, Node.js, and PostgreSQL. It features job listings, company profiles, and search/filter tools to connect employees and job seekers efficiently.",
    technologies: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "TailwindCSS",
      "Headless UI",
    ],
    image: "/projects/hirelink.png",
    github: "https://github.com/kolnlaviste/HireLink",
    demo: "https://hirelink.vercel.app/",
    learned:
      "Bridging a Next.js frontend with a custom Node.js/PostgreSQL backend end-to-end",
  },
  {
    title: "pulseboard",
    description:
      "A modern analytics SaaS platform that delivers real-time insights, performance tracking, and subscription management through a sleek, dark-themed interface built with Next.js, TypeScript, and Stripe integration.",
    technologies: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "shadcn/ui",
      "Framer Motion",
      "Stripe",
    ],
    image: "/projects/pulseboard.png",
    github: "https://github.com/kolnlaviste/pulseboard",
    demo: "https://pulseboard-demo.vercel.app",
    learned:
      "Integrating Stripe's payment flow and designing a polished SaaS dashboard with complex state",
  },
  {
    title: "Valentines Invitation",
    description: "A valentines invitation website I created for my girlfriend",
    technologies: ["Next.js", "Gmail API"],
    image: "/projects/valentines.png",
    demo: "https://valentines-weld.vercel.app",
    learned:
      "Connecting Google's OAuth flow and sending programmatic emails via the Gmail API",
  },
  {
    title: "Vault AI",
    description:
      "VaultAI is a high-performance financial dashboard built with Next.js 15 and Supabase. It transforms raw CSV transaction data into real-time visual insights, featuring an AI-powered ledger, dynamic spending analytics, and secure, encrypted data management.",
    technologies: ["Next.js", "Supabase", "TailwindCSS", "Lucide React"],
    image: "/projects/VaultAI.png",
    github: "https://github.com/kolnlaviste/Vault-AI",
    demo: "https://vault-ai-demo.vercel.app",
    learned:
      "Parsing raw CSV data into real-time charts and securing financial records with Supabase RLS",
  },
  {
    title: "G14 Pulse",
    description:
      "A real-time hardware monitoring ecosystem designed for the ASUS ROG Zephyrus G14. It uses a Python background agent to capture live system metrics (CPU, RAM, Battery) and streams them to a Flutter mobile dashboard via Supabase Realtime (WebSockets).",
    technologies: [
      "Flutter",
      "Dart",
      "Supabase",
      "PostgreSQL",
      "Python",
      "psutil",
      "WebSockets",
      "Row-Level Security (RLS)",
      "Syncfusion Gauges",
    ],
    image: "/projects/g14-monitor.png",
    github: "https://github.com/kolnlaviste/g14-monitor-project",
    learned:
      "Streaming live hardware metrics from Python to Flutter via Supabase Realtime WebSockets",
  },
  {
    title: "Devfolio",
    description:
      "Personal portfolio created to display talents, projects, and information about myself",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide React",
      "Shadcn UI",
      "Server-Sent Events (SSE)",
    ],
    image: "/projects/devfolio.png",
    github: "https://github.com/kolnlaviste/devfolio",
    demo: "https://devfolio-koln.vercel.app",
    learned:
      "Building a RAG pipeline with vector embeddings and LangChain to power a context-aware AI chatbot",
  },
];

export const experienceData: Experience[] = [
  {
    title: "Software Engineer",
    company: "Coolmogo",
    employment: "Freelance",
    period: "May 2026 - Present",
    description:
      "Building full-stack web applications and backend systems using FastAPI, Pydantic AI, and modern web technologies. Working with SurrealDB for data modeling and integrating AI-driven workflows into production applications.",
    tech: [
      "FastAPI",
      "Pydantic AI",
      "SurrealDB",
      "Python",
      "Flutter",
      "Web Development",
    ],
    current: true,
  },
  {
    title: "Software Developer",
    company: "Tekkio",
    employment: "Contract",
    period: "August 2025 - October 2025",
    description:
      "Contributed to building a hub platform using Flutter, actively participating in code reviews and team meetings. Collaborated with the development team to ensure code quality and implement features.",
    tech: ["Flutter", "Dart", "Code Review"],
    current: false,
  },
  {
    title: "Software Engineer Intern",
    company: "Elinnov Technologies",
    employment: "Internship",
    period: "October 2024 - February 2025",
    description:
      "Helped build and improve internal web apps, worked with front-end tools like React, and collaborated with the team on real-world development tasks.",
    tech: ["React", "Node.js", ".NET", "MongoDB", "ElasticSearch"],
    current: false,
  },
];

export const bioData = {
  name: "Koln Laviste",
  title: "Full Stack Developer",
  location: "Cebu City, Philippines",
  email: "roward18@gmail.com",
  github: "https://github.com/kolnlaviste",
  linkedin: "https://www.linkedin.com/in/koln-laviste",
  bio: [
    "I'm Koln, a full-stack developer from Cebu City, Philippines. I build modern web and mobile applications — Next.js frontends, FastAPI backends, and Flutter apps — with a focus on clean code and great user experience.",
    "Currently freelancing at Coolmogo, building AI-integrated production systems with Pydantic AI and SurrealDB. I care about the why behind the code—I follow Git best practices religiously, break complex problems into small pieces, and always reach for the official docs first.",
  ],
  availability: "Open to part-time opportunities",
  status: "Available",
};
