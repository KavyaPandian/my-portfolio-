import codesyncImg from "../assets/images/projects/devsync.png";
import aiPortfolioImg from "../assets/images/projects/ai_resume_builder.png";
import devsyncImg from "../assets/images/projects/devsync.png";

export const projectCategories = [
  "All",
  "Full Stack",
  "MERN",
  "AI/ML",
];

export const projects = [
  {
    id: "blog-management-system",
    title: "Blog Management System",
    category: "Full Stack",
    image: aiPortfolioImg,
    shortDescription:
      "A full-stack blog platform built with Django REST Framework and Next.js, featuring RESTful APIs, PostgreSQL database integration, and a responsive Tailwind CSS interface.",
    description:
      "A full-stack blog platform built with Django REST Framework and Next.js, featuring RESTful APIs, PostgreSQL database integration, and a responsive Tailwind CSS interface.",
    modalDescription:
      "A full-stack blog platform built with Django REST Framework and Next.js, featuring RESTful APIs, PostgreSQL database integration, and a responsive Tailwind CSS interface.",
    highlights: [
      "Developed RESTful APIs using Django REST Framework for blog content management and CRUD operations.",
      "Integrated PostgreSQL with Django for structured and reliable data storage.",
      "Built a responsive frontend using Next.js and Tailwind CSS and integrated it with the backend through REST APIs.",
    ],
    cardTechnologies: [
      "Python",
      "Django",
      "Django REST",
      "Next.js",
      "PostgreSQL",
    ],
    technologies: [
      "Python",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "REST API",
    ],
    modalTechnologies: [
      "Python",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "REST API",
    ],
    github: "https://github.com",
    liveDemo: "https://example.com",
    featured: true,
  },
  {
    id: "codesync",
    title: "CodeSync – Real-Time Collaborative Code Editor",
    category: "Full Stack",
    image: codesyncImg,
    shortDescription:
      "A real-time collaborative coding platform that enables multiple users to write, edit, and synchronize code together in shared sessions.",
    description:
      "CodeSync is a real-time collaborative coding platform that allows multiple users to work together in a shared coding environment. Changes made by one user are synchronized instantly with other connected users.",
    modalDescription:
      "CodeSync is a real-time collaborative coding platform that allows multiple users to work together in a shared coding environment. Changes made by one user are synchronized instantly with other connected users.",
    highlights: [
      "Implemented real-time code synchronization using Socket.io.",
      "Developed an interactive code editor interface using React.js.",
      "Created room-based collaboration for multiple users.",
      "Built backend services using Node.js and Express.js.",
      "Implemented real-time connection and event handling between clients and server.",
      "Designed a responsive interface for an improved collaborative coding experience.",
    ],
    cardTechnologies: [
      "React.js",
      "Node.js",
      "Socket.io",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "Socket.io",
      "JavaScript",
    ],
    modalTechnologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "Socket.io",
      "JavaScript",
    ],
    github: "https://github.com",
    liveDemo: "https://example.com",
    featured: true,
  },
  {
    id: "real-estate-marketplace",
    title: "Real Estate Marketplace Web App",
    category: "Full Stack",
    image: devsyncImg,
    shortDescription:
      "A full-stack real estate marketplace that enables users to discover, search, and explore property listings with secure authentication and interactive location-based features.",
    description:
      "A full-stack real estate marketplace that enables users to discover, search, and explore property listings with secure authentication and interactive location-based features.",
    modalDescription:
      "A full-stack real estate marketplace that enables users to discover, search, and explore property listings with secure authentication and interactive location-based features.",
    highlights: [
      "Developed a MERN-based property listing platform with a responsive and user-friendly interface.",
      "Implemented secure user authentication, advanced property search, filtering, and interactive map-based location features.",
      "Built property listing and discovery functionality to help users efficiently explore properties based on their requirements.",
    ],
    cardTechnologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "Tailwind CSS",
    ],
    modalTechnologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "Tailwind CSS",
    ],
    github: "https://github.com",
    liveDemo: "https://example.com",
    featured: true,
  },
];

export default projects;
