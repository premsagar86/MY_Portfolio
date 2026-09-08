// Single source of truth — all résumé content, typed.
// Education: B.Tech only. Intermediate (MPC) and SSC are permanently excluded —
// no `intermediate` / `ssc` / `tenth` / `twelfth` keys anywhere in this file.

export const profile = {
  name: "Eedubilli Premsagar",
  role: "Full-Stack Developer",
  tagline:
    "I build fast, secure full-stack web apps — React & Next.js on the front, Node, MySQL, Redis and AWS behind them.",
  summary:
    "Computer Science undergraduate with a strong foundation in Data Structures, Algorithms, OOP, Operating Systems, DBMS and Computer Networks. Hands-on experience building secure full-stack applications with React.js, Next.js, Node.js, Express.js, MySQL, Redis, Docker and JWT auth, plus AWS serverless (Lambda, API Gateway, DynamoDB, S3, WebSocket APIs) and Python data analysis. Comfortable shipping end-to-end on Vercel, AWS Amplify and Railway.",
  location: "Visakhapatnam, India",
  phone: "+91 8688024148",
  email: "eedubillipremsagar@gmail.com",
  github: "https://github.com/premsagar86",
  githubHandle: "github.com/premsagar86",
  linkedin: "https://www.linkedin.com/in/eedubilli-premsagar-535130344/",
  linkedinHandle: "linkedin.com/in/eedubilli-premsagar-535130344",
  resume: "/EEDUBILLI_PREMSAGAR_Resume.pdf",
  openTo: "SDE / Full-Stack roles",
  languages: ["Telugu", "English", "Hindi"],
} as const;

export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
] as const;

export const marqueeTech = [
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "TypeScript",
  "MySQL",
  "Redis",
  "Docker",
  "AWS",
  "Prisma",
  "Tailwind CSS",
  "JWT Auth",
  "REST APIs",
  "WebSockets",
] as const;

export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  { title: "Languages", items: ["Python", "Java", "JavaScript"] },
  {
    title: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "React Router",
      "React Hook Form",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "WebSocket APIs",
      "Prisma",
    ],
  },
  { title: "Database & Caching", items: ["MySQL", "Redis", "PostgreSQL"] },
  {
    title: "AWS Serverless",
    items: [
      "AWS Serverless",
      "Lambda",
      "API Gateway",
      "DynamoDB",
      "S3",
      "IAM",
      "CloudWatch",
    ],
  },
  {
    title: "Deployment / Cloud Hosting",
    items: ["Vercel", "AWS Amplify", "Railway"],
  },
  { title: "Data Analysis", items: ["pandas", "NumPy", "Matplotlib"] },
  { title: "Tools", items: ["Git", "GitHub", "Docker", "Postman", "VS Code"] },
];

export type Project = {
  title: string;
  blurb: string;
  stack: string[];
  highlights: string[];
  live?: string;
  code: string;
};

export const projects: Project[] = [
  {
    title: "Full Stack Authentication System",
    blurb:
      "A production-inspired auth platform: registration, login, email verification, password reset and protected REST APIs.",
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "Redis",
      "Docker",
      "JWT",
      "AWS",
      "Zod",
    ],
    highlights: [
      "Access + refresh tokens with rotation & silent auth",
      "HttpOnly cookie sessions; Redis refresh-token blocklist for secure logout",
      "Redis-backed OTP, caching & password-reset workflows",
      "bcrypt hashing, auth middleware, CORS, rate-limit, login-attempt lockout",
      "Dockerized backend, RESTful architecture",
    ],
    code: profile.github,
  },
  {
    title: "Forge Digital — Agency Portfolio (curate-x)",
    blurb:
      "A marketing & service platform for a digital agency — web design, UI/UX, branding, SEO and e-commerce services in one catalog.",
    stack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    highlights: [
      "Transparent three-tier pricing structure",
      "Discovery → Design → Build → Delivery workflow showcase",
      "Individual service detail pages + quote-request flow",
      "SEO-friendly rendering, fully responsive, CD from Git on Vercel",
    ],
    live: "https://curate-x.vercel.app/",
    code: profile.github,
  },
  {
    title: "TechSpark 2026 — Hackathon / Ideathon Platform",
    blurb:
      "A full-stack event platform for a college-level Ideathon, Hackathon and innovation challenge.",
    stack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MySQL"],
    highlights: [
      "Event details, tracks and registration flows",
      "Node/Express REST API with MySQL for participant & registration data",
      "Fast, mobile-friendly UI with clean information architecture",
      "Deployed on Vercel",
    ],
    live: "https://tech-spark-zeta.vercel.app/",
    code: profile.github,
  }
  /* {
    title: "Data Analysis with Python",
    blurb:
      "Cleaning, transforming and analysing structured datasets, then visualising the trends.",
    stack: ["Python", "pandas", "NumPy", "Matplotlib"],
    highlights: [
      "Vectorized operations for efficient computation",
      "Dataset cleaning & transformation pipelines",
      "Matplotlib visualisations to summarise trends and communicate insight",
    ],
    code: profile.github,
  }, */
];

// EXACTLY ONE degree. No Intermediate / SSC.
export const education = [
  {
    degree: "B.Tech, Computer Science and Engineering",
    school: "Raghu Engineering College, Dakamarri, Visakhapatnam",
    period: "2024 – 2028",
    gpa: "7.5",
    coursework: [
      "Data Structures",
      "Algorithms",
      "OOP",
      "Operating Systems",
      "DBMS",
      "Computer Networks",
    ],
  },
] as const;

export const certifications = [
  {
    title: "AI Agents",
    issuer: "B.J. Swaroop",
  },
] as const;

export const quickFacts = [
  { label: "Based in", value: "Visakhapatnam, India" },
  { label: "Open to", value: "SDE / Full-Stack roles" },
  { label: "Languages", value: "Telugu · English · Hindi" },
  { label: "Currently", value: "B.Tech CSE @ Raghu Engineering College" },
] as const;
