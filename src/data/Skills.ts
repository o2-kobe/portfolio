import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import { FaGithub, FaFigma } from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiVite,
  SiExpress,

  // SiFirebase,
  SiVercel,
  SiPostman,
  SiJest,
  SiTestinglibrary,
} from "react-icons/si";

export const skills = [
  // Frontend
  { id: 1, skill: "HTML5", icon: DiHtml5, color: "#E34F26" },
  { id: 2, skill: "CSS3", icon: DiCss3, color: "#1572B6" },
  { id: 3, skill: "JavaScript", icon: DiJavascript1, color: "#F7DF1E" },
  { id: 4, skill: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { id: 5, skill: "React", icon: DiReact, color: "#61DAFB" },
  { id: 6, skill: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { id: 11, skill: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { id: 12, skill: "Redux", icon: SiRedux, color: "#764ABC" },
  { id: 13, skill: "Vite", icon: SiVite, color: "#56e7ab" },

  // Backend
  { id: 14, skill: "Node.js", icon: DiNodejs, color: "#339933" },
  { id: 15, skill: "Express", icon: SiExpress, color: "#000000" },
  // Databases

  { id: 16, skill: "MongoDB", icon: DiMongodb, color: "#47A248" },
  // { id: 29, skill: "Firebase", icon: SiFirebase, color: "#FFCA28" },

  // DevOps, Tooling & Cloud
  { id: 17, skill: "Git", icon: DiGit, color: "#F05032" },
  { id: 18, skill: "GitHub", icon: FaGithub, color: "#181717" },
  { id: 19, skill: "Vercel", icon: SiVercel, color: "#000000" },
  { id: 20, skill: "Postman", icon: SiPostman, color: "#FF6C37" },

  // Testing & Design
  { id: 21, skill: "Jest", icon: SiJest, color: "#C21325" },

  {
    id: 22,
    skill: "Testing Library",
    icon: SiTestinglibrary,
    color: "#E33332",
  },
  { id: 23, skill: "Figma", icon: FaFigma, color: "#F24E1E" },
];
