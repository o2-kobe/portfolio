import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
  SiExpress,
} from "react-icons/si";
import { DiMongodb, DiReact } from "react-icons/di";

export default [
  {
    id: 1,
    title: "Totsx",
    image: "totsx-landing.webp",
    link: "",
    stacks: [SiTypescript, SiNextdotjs, SiTailwindcss, SiExpress, DiMongodb],
    summary:
      "A web app designed to help React developers seamlessly transition from JavaScript to TypeScript",
  },
  {
    id: 2,
    title: "EventGctu",
    image: "event3.webp",
    link: "https://eventgctu.vercel.app/",
    stacks: [SiTypescript, SiFirebase, SiNextdotjs, SiTailwindcss],
    summary:
      "A unified platform for managing and discovering all school events in one place",
  },
  {
    id: 3,
    title: "Student Information System",
    image: "event7.webp",
    link: "",
    stacks: [SiTypescript, DiReact, SiTailwindcss],
    summary:
      "A platform that allows school admins to manage students, courses, and departments",
  },
];
