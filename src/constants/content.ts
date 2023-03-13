import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import typescript from "../assets/typescript.png";
import reactjs from "../assets/reactjs.png";
import nodejs from "../assets/nodejs.png";
import django from "../assets/django.png";
import redux from "../assets/redux.png";
import threejs from "../assets/threejs.svg";
import tailwind from "../assets/tailwind.png";
import mongodb from "../assets/mongodb.png";
import docker from "../assets/docker.png";
import git from "../assets/git.png";
import aws from "../assets/aws.png";
import p4img from "../assets/p4img.png";
import p5img from "../assets/p5img.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
];

export const projectList = [
  {
    name: "Dice Game",
    url: "/dice-game",
  },
  {
    name: "Date counter",
    url: "/date-counter",
  },
  {
    name: "BMI Calculator",
    url: "/bmi-calc",
  },
  {
    name: "Calculator",
    url: "/calculator",
  },
  {
    name: "Weather Dashboard",
    url: "/weather-board",
  },
  {
    name: "Wordle Clone",
    url: "/wordle",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: javascript,
  },
  {
    title: "React Native Developer",
    icon: reactjs,
  },
  {
    title: "Backend Developer",
    icon: django,
  },
  {
    title: "Solution Architect",
    icon: aws,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "django",
    icon: django,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Amazon Web Services",
    icon: aws,
  },
];

const experiences = [
  {
    title: "Junior Clerk",
    company_name: "Rowdget Young & Co.",
    icon: html,
    iconBg: "#383E56",
    date: "Nov 2014 - Aug 2015",
    points: [
      "Daily prepare documents, data entries, filing documents, deliveries.",
      "Provide some client customer service and communication.",
      "Fulfill all requirements of two offices in the firm.",
      "Represent the client of the solicitors if needed.",
    ],
  },
  {
    title: "Data Entry Clerk",
    company_name: "Admango Limited",
    icon: html,
    iconBg: "#E6DEDD",
    date: "Oct 2018 - Oct 2019",
    points: [
      "Working within a compact data entry team with distance members.",
      "Maintenance of tech devices used for data collection.",
      "Daily entry targets and KPIs on activity.",
      "Problem solves technical queries/issues in the devices and the monitoring system.",
    ],
  },
  {
    title: "Junior Developer",
    company_name: "Advanced Software Limited",
    icon: javascript,
    iconBg: "#E6DEDD",
    date: "Oct 2022 - Nov 2022",
    points: [
      "Developing and maintaining web applications using .NET Framework and other related technologies.",
      "Collaborating with small team to create high-quality products.",
      "Provide manual testing with complete report to reveal problems.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const projects = [
  {
    name: "E-commerce Website",
    description:
      "Web-based platform that allows users to search, filter and buy products and use stripe to handle checkout.",
    tags: [
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: p5img,
    source_code_link: "https://github.com/cloki0610/CI-Portfolio-Project-5",
  },
  {
    name: "Content sharing Website",
    description:
      "A content sharing system to share user contents to different user group for manage creative contents from different users.",
    tags: [
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: p4img,
    source_code_link: "https://github.com/cloki0610/CI-Portfolio-Project-4",
  },
];

export { services, technologies, experiences, projects };
