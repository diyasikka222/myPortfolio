import {
    FaJs, FaReact, FaHtml5, FaCss3, FaJava, FaPython, FaNodeJs, FaDocker, FaAws, FaJenkins, FaGitAlt, FaLinux, FaBootstrap, FaGithub, FaFigma
} from "react-icons/fa";
import {
    SiTypescript, SiRedux, SiTailwindcss, SiExpress, SiFastapi, SiMongodb, SiMysql, SiPostman, SiJsonwebtokens
} from "react-icons/si";
import { TbApi, TbBrandOauth } from "react-icons/tb";
import { VscAzureDevops, VscAzure } from "react-icons/vsc";

const navLinks = [
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const skillCategories = [
    {
        title: "Languages",
        skills: [
            { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
            { name: "Java", icon: FaJava, color: "#007396" },
            { name: "Python", icon: FaPython, color: "#3776AB" },
        ],
    },
    {
        title: "Frontend",
        skills: [
            {name: "HTML5", icon: FaHtml5, color: "#E34F26"},
            {name: "CSS3", icon: FaCss3, color: "#1572B6"},
            {name: "React", icon: FaReact, color: "#61DAFB"},
            {name: "React Native", icon: FaReact, color: "#61DAFB"}, // React icon works for Native too
            {name: "Redux", icon: SiRedux, color: "#764ABC"},
            {name: "Bootstrap", icon: FaBootstrap, color: "#7952B3"},
            {name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4"},
        ],
    },
    {
        title: "Backend & Auth",
        skills: [
            { name: "Node.js", icon: FaNodeJs, color: "#339933" },
            { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
            { name: "FastAPI", icon: SiFastapi, color: "#009688" },
            { name: "REST APIs", icon: TbApi, color: "#FFFFFF" },
            { name: "OAuth 2.0", icon: TbBrandOauth, color: "#FFFFFF" },
            { name: "JWT", icon: SiJsonwebtokens, color: "#D63AFF" },
        ],
    },
    {
        title: "Databases",
        skills: [
            { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
            { name: "MySQL", icon: SiMysql, color: "#4479A1" },
            { name: "Cosmos DB", icon: VscAzure, color: "#0078D4" },
        ],
    },
    {
        title: "DevOps & Cloud",
        skills: [
            { name: "Docker", icon: FaDocker, color: "#2496ED" },
            { name: "Jenkins", icon: FaJenkins, color: "#D24939" },
            { name: "AWS", icon: FaAws, color: "#FF9900" },
            { name: "Azure", icon: VscAzure, color: "#0078D4" },
            { name: "CI/CD", icon: VscAzureDevops, color: "#0078D4" },
            { name: "Linux Admin", icon: FaLinux, color: "#FCC624" },
        ],
    },
    {
        title: "Tools & Practices",
        skills: [
            { name: "Git", icon: FaGitAlt, color: "#F05032" },
            { name: "GitHub", icon: FaGithub, color: "#FFFFFF" },
            { name: "Postman", icon: SiPostman, color: "#FF6C37" },
            { name: "Figma", icon: FaFigma, color: "#F24E1E" },
        ],
    },
]

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const expCards = [
    {
        title: "Scrum Master & Full Stack Developer",
        company: "Xebia",
        logoPath: "/images/xebia.png",
        date: "Mar 2025 - Present",
        project: "Xcelerate - Live Project",
        responsibilities: [
            "Developing a real-time mobile and web survey application following Agile methodology.",
            "Implemented secure authentication and role-based access control.",
            "Technologies Used: React Native, Node.js, Express.js, MongoDB & Git",
        ],
    },
];

export {
  skillCategories,
  words,
  expCards,
  navLinks,
};
