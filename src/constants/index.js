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
    title: "React Native Developer",
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
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
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
      "A web-based platform that allows patients to search, book, and manage appointments with healthcare providers, offering a convenient and efficient solution for all your medical needs.",
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
    link:"https://clinique-medical-st-paul.onrender.com/",
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
    link:"https://hatumacharles.onrender.com/",
  },
  {
    name: "Ireme",
    description:
      "A skill management system designed to showcase and track employees' skills, projects, and experience within an organization. Users can explore team members' skill sets, view completed work, and assess individual growth .",
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
    link:"https://ireme.onrender.com/",
  },
  {
    name: "Travel",
    description:
      "",
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
    image: ireme,
    source_code_link: "https://github.com/", 
    link:"https://travel-tour1.vercel.app/",
  },
];


export { services, technologies, experiences, testimonials, projects };