import {
  RiCheckboxCircleFill,
  RiGraduationCapFill,
  RiGraduationCapLine,
  RiMacbookFill,
  RiServerFill,
  RiSparklingFill,
  RiSparklingLine,
  RiUserSettingsLine,
} from "react-icons/ri";

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
    level: "Advanced",
    icon: RiCheckboxCircleFill,
  },
  {
    title: "CSS",
    level: "Advanced",
    icon: RiCheckboxCircleFill,
  },
  {
    title: "JavaScript",
    level: "Advanced",
    icon: RiCheckboxCircleFill,
  },
  {
    title: "React",
    level: "Advanced",
    icon: RiCheckboxCircleFill,
  },
  {
    title: "Nextjs",
    level: "Advanced",
    icon: RiCheckboxCircleFill,
  },
];

export const backendSkills = [
  {
    title: "Node.js",
    level: "Intermediate",
    icon: RiCheckboxCircleFill,
  },
  {
    title: "Express.js",
    level: "Intermediate",
    icon: RiCheckboxCircleFill,
  },
  {
    title: "PostgreSQL",
    level: "Intermediate",
    icon: RiCheckboxCircleFill,
  },
  {
    title: "Supabase",
    level: "Intermediate",
    icon: RiCheckboxCircleFill,
  },
  {
    title: "Prisma",
    level: "Intermediate",
    icon: RiCheckboxCircleFill,
  },
];

// section icons
export const sectionIcons = {
  education: RiGraduationCapLine,
  experience: RiSparklingLine,
  personal: RiUserSettingsLine,
  frontend: RiMacbookFill,
  backend: RiServerFill,
};
