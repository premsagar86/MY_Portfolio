import type { IconType } from "react-icons";
import {
  SiPython,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiReactrouter,
  SiReacthookform,
  SiNodedotjs,
  SiExpress,
  SiJsonwebtokens,
  SiPrisma,
  SiMysql,
  SiRedis,
  SiVercel,
  SiRailway,
  SiPandas,
  SiNumpy,
  SiGit,
  SiGithub,
  SiDocker,
  SiPostman,
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";

export type SkillMeta = { icon?: IconType; color: string };

/**
 * label -> { icon, brand color }. Entries without an official mark (REST APIs,
 * WebSocket APIs, most AWS services, Matplotlib, VS Code) fall back to the closest
 * icon or a plain marker in <Skills />.
 */
export const skillMeta: Record<string, SkillMeta> = {
  // Languages
  Python: { icon: SiPython, color: "#3776AB" },
  Java: { icon: FaJava, color: "#E76F00" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },

  // Frontend
  "React.js": { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "#ededed" },
  HTML5: { icon: SiHtml5, color: "#E34F26" },
  CSS3: { icon: SiCss, color: "#1572B6" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  "React Router": { icon: SiReactrouter, color: "#F44250" },
  "React Hook Form": { icon: SiReacthookform, color: "#EC5990" },

  // Backend
  "Node.js": { icon: SiNodedotjs, color: "#5FA04E" },
  "Express.js": { icon: SiExpress, color: "#ededed" },
  "REST APIs": { color: "#9a9aa2" },
  "JWT Authentication": { icon: SiJsonwebtokens, color: "#f5f5f5" },
  "WebSocket APIs": { color: "#9a9aa2" },
  Prisma: { icon: SiPrisma, color: "#ededed" },

  // Database & Caching
  MySQL: { icon: SiMysql, color: "#4479A1" },
  Redis: { icon: SiRedis, color: "#FF4438" },

  // AWS
  Lambda: { icon: FaAws, color: "#FF9900" },
  "API Gateway": { icon: FaAws, color: "#FF9900" },
  DynamoDB: { icon: FaAws, color: "#FF9900" },
  S3: { icon: FaAws, color: "#FF9900" },
  IAM: { icon: FaAws, color: "#FF9900" },
  CloudWatch: { icon: FaAws, color: "#FF9900" },

  // Deployment
  Vercel: { icon: SiVercel, color: "#ededed" },
  "AWS Amplify": { icon: FaAws, color: "#FF9900" },
  Railway: { icon: SiRailway, color: "#ededed" },

  // Data Analysis
  pandas: { icon: SiPandas, color: "#ededed" },
  NumPy: { icon: SiNumpy, color: "#4DABCF" },
  Matplotlib: { color: "#9a9aa2" },

  // Tools
  Git: { icon: SiGit, color: "#F05032" },
  GitHub: { icon: SiGithub, color: "#ededed" },
  Docker: { icon: SiDocker, color: "#2496ED" },
  Postman: { icon: SiPostman, color: "#FF6C37" },
  "VS Code": { color: "#9a9aa2" },
};

export const getSkillMeta = (label: string): SkillMeta =>
  skillMeta[label] ?? { color: "#9a9aa2" };
