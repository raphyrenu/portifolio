import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  ireme,
  foodbase,
  python,
  java,
  csharp,
  php,
  ruby,
  swift,
  go,
  kotlin,
  dart

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "3D Designer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "FullStack Developer",
    icon: backend,
  },
  {
    title: "Designer",
    icon: creator,
  },
];
const technologies = [
  { name: "HTML 5", icon: html, category: "Frontend" },
  { name: "CSS 3", icon: css, category: "Frontend" },
  { name: "JavaScript", icon: javascript, category: "Frontend" },
  { name: "TypeScript", icon: typescript, category: "Frontend" },
  { name: "React JS", icon: reactjs, category: "Frontend" },
  { name: "Redux Toolkit", icon: redux, category: "Frontend" },
  { name: "Tailwind CSS", icon: tailwind, category: "Frontend" },
  { name: "Node JS", icon: nodejs, category: "Backend" },
  { name: "MongoDB", icon: mongodb, category: "Database" },
  { name: "Three JS", icon: threejs, category: "Frontend" },
  { name: "Git", icon: git, category: "Others" },
  { name: "Figma", icon: figma, category: "Others" },
  { name: "Docker", icon: docker, category: "Others" },
  { name: "Python", icon: python, category: "Backend" },
  { name: "Java", icon: java, category: "Backend" },
  { name: "C#", icon: csharp, category: "Backend" },
  { name: "PHP", icon: php, category: "Backend" },
  { name: "Ruby", icon: ruby, category: "Backend" },
  { name: "Swift", icon: swift, category: "Mobile" },
  { name: "Go", icon: go, category: "Backend" },
  { name: "Kotlin", icon: kotlin, category: "Others" },
  { name: "Dart", icon: dart, category: "Mobile" }, // Flutter framework language
  { name: "React Native", icon: reactjs, category: "Mobile" }, // iOS app development
];

const experiences = [
  {
    title: "Junior Web Developer",
    company_name: "Freelance",
    icon: shopify,  // Reusing the Shopify icon
    iconBg: "#1A202C",
    date: "March 2024 - Present",
    points: [
      "Developing small-scale web applications and websites using HTML, CSS, and JavaScript.",
      "Assisting clients with website updates, bug fixes, and performance improvements.",
      "Gaining experience with responsive design and basic SEO practices.",
      "Continuously learning and implementing new web development technologies.",
    ],
  },
  {
    title: "Part-time React.js Developer",
    company_name: "Local Startup",
    icon: tesla,  // Reusing the Tesla icon
    iconBg: "#2D3748",
    date: "June 2024 - Present",
    points: [
      "Building and maintaining features for a React.js-based web application.",
      "Collaborating with a small team to enhance the user experience and functionality.",
      "Implementing responsive design for various devices.",
      "Participating in team meetings and contributing ideas for product improvement.",
    ],
  },
  {
    title: "Student Developer",
    company_name: "Online Learning Platform",
    icon: starbucks,  // Reusing the Starbucks icon
    iconBg: "#4A5568",
    date: "Jan 2024 - Present",
    points: [
      "Completing online courses and projects focused on web development.",
      "Learning React.js, Node.js, and other modern web technologies.",
      "Participating in coding challenges and hackathons to improve skills.",
      "Building a personal portfolio to showcase projects and learning progress.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Charles proved me wrong.",
    name: "Ihirwe",
    designation: "Designer",
    company: "RCA",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Charles does.",
    name: "Mugabe Herve",
    designation: "Student",
    company: "St Kizito",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Charles optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Roberto Mulla",
    designation: "Singer",
    company: "Mulla Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "CMSP",
    description:
      "A hospital website dedicated to providing comprehensive healthcare information, helping patients access medical services, schedule appointments, and connect with expert doctors.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
    link: "https://clinique-medical-st-paul.onrender.com/",
    category: "Full Stack", // New property added
  },
  {
    name: "Ireme",
    description:
      "A skill management system designed to showcase and track employees' skills, projects, and experience within an organization. Users can explore team members' skill sets, view completed work, and assess individual growth.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
    ],
    image: ireme,
    source_code_link: "https://github.com/",
    link: "https://ireme.onrender.com/",
    category: "Frontend", // New property added
  },
  {
    name: "Foodhome",
    description:
      "Restaurant website designed to showcase a diverse menu, highlight special dishes, and provide an easy way for customers to explore dining options, make reservations, and order online.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
    ],
    image: foodbase,
    source_code_link: "https://github.com/",
    link: "https://foodbase.onrender.com",
    category: "Frontend", // New property added
  },
  {
    name: "My Portfolio",
    description:
      "A personal portfolio website showcasing my projects, skills, and experience as a web developer. Users can explore my work, learn about my background, and get in touch with me for potential collaborations.",
    tags: [
      {
        name: "vite",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
    link: "https://hatumacharles.onrender.com/",
    category: "Frontend", 
  },
  
];


export { services, technologies, experiences, testimonials, projects };