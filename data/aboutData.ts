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
    degree: "Masters in Information Technology",
    school: "The University of Lahore - Pakistan",
    period: "2012 - 2015",
    icon: RiGraduationCapFill, // ✅ store component, not JSX
  },
  {
    degree: "Bachelors in Commerce",
    school: "Elite College of Commerce - Pakistan",
    period: "2009 - 2011",
    icon: RiGraduationCapFill,
  },
];

export const experience = [
  {
    role: "IT Administration",
    company: "Integrated Contracting Company - Riyadh",
    period: "2018 - Present",
    icon: RiSparklingFill,
  },
  {
    role: "System Administration",
    company: "Morganti - Riyadh",
    period: "2017 - 2018",
    icon: RiSparklingFill,
  },
  {
    role: "BMS Operator",
    company: "Dar Al Arkan - Riyadh",
    period: "2016 - 2017",
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
