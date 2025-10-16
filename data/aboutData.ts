import {
  RiCheckboxCircleFill,
  RiGraduationCapFill,
  RiGraduationCapLine,
  RiMacbookFill,
  RiMobileDownloadFill,
  RiServerFill,
  RiSparklingFill,
  RiSparklingLine,
  RiToolsFill,
  RiUserSettingsLine,
} from "react-icons/ri";
import {
  SiCss3,
  SiExpo,
  SiExpress,
  SiFigma,
  SiFramer,
  SiGit,
  SiGithub,
  SiGreensock,
  SiHtml5,
  SiJavascript,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiReact,
  SiShadcnui,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { TbApi, TbBrandReactNative } from "react-icons/tb";
import { VscCode, VscVscode } from "react-icons/vsc";

export const education = [
  {
    degree: "masterDegree",
    school: "masterSchool",
    period: "masterPeriod",
    icon: RiGraduationCapFill, // ✅ store component, not JSX
  },
  {
    degree: "bachelorDegree",
    school: "bachelorSchool",
    period: "bachelorPeriod",
    icon: RiGraduationCapFill,
  },
];

export const experience = [
  {
    role: "role2018",
    company: "company2018",
    period: "period2018",
    icon: RiSparklingFill,
  },
  {
    role: "role2017",
    company: "company2017",
    period: "period2017",
    icon: RiSparklingFill,
  },
  {
    role: "role2016",
    company: "company2016",
    period: "period2016",
    icon: RiSparklingFill,
  },
];

export const frontendSkills = [
  {
    title: "HTML",
    color: "#E34F26",
    icon: SiHtml5,
  },
  {
    title: "CSS",
    color: "#1572B6",
    icon: SiCss3,
  },
  {
    title: "JavaScript",
    color: "#F7DF1E",
    icon: SiJavascript,
  },
  {
    title: "Reactjs",
    color: "#61DAFB",
    icon: SiReact,
  },
  {
    title: "Nextjs",
    icon: SiNextdotjs,
  },
  {
    title: "TypeScript",
    color: "#3178C6",
    icon: SiTypescript,
  },
  {
    title: "Tailwind CSS",
    color: "#06B6D4",
    icon: SiTailwindcss,
  },
  {
    title: "Shadcn UI",

    icon: SiShadcnui,
  },
  {
    title: "Framer Motion",
    color: "#0055FF",
    icon: SiFramer,
  },
  {
    title: "Gsap",
    color: "#88CE02",
    icon: SiGreensock,
  },
];

export const backendSkills = [
  {
    title: "Node.js",
    color: "#339933",
    icon: SiNodedotjs,
  },
  {
    title: "Express.js",

    icon: SiExpress,
  },
  {
    title: "RESTful APIs",
    color: "#FF6C37",
    icon: TbApi,
  },
  {
    title: "PostgreSQL",
    color: "#336791",
    icon: SiPostgresql,
  },
  {
    title: "Supabase",
    color: "#3ECF8E",
    icon: SiSupabase,
  },
  {
    title: "Prisma ORM",
    color: "#0C344B",
    icon: SiPrisma,
  },
];

export const mobileSkills = [
  {
    title: "React-Native",
    color: "#61DAFB",
    icon: TbBrandReactNative,
  },
  {
    title: "Expo",
    color: "#000020",
    icon: SiExpo,
  },
];

export const toolsSkills = [
  {
    title: "Git",
    color: "#F05032",
    icon: SiGit,
  },
  {
    title: "GitHub",
    color: "#181717",
    icon: SiGithub,
  },
  {
    title: "Vercel",

    icon: SiVercel,
  },
  {
    title: "Netlify",
    color: "#00C7B7",
    icon: SiNetlify,
  },
  {
    title: "Supabase",
    color: "#3ECF8E",
    icon: SiSupabase,
  },
  {
    title: "Postman",
    color: "#FF6C37",
    icon: SiPostman,
  },
  {
    title: "Figma",
    color: "#F24E1E",
    icon: SiFigma,
  },
  {
    title: "VS Code",
    color: "#007ACC",
    icon: VscVscode,
  },
];

// section icons
export const sectionIcons = {
  education: RiGraduationCapLine,
  experience: RiSparklingLine,
  personal: RiUserSettingsLine,
  frontend: RiMacbookFill,
  backend: RiServerFill,
  mobile: RiMobileDownloadFill,
  tools: RiToolsFill,
};
