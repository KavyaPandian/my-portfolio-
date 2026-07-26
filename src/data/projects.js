import shopsphereImg from "../assets/images/projects/shopsphere.png";
import aiPortfolioImg from "../assets/images/projects/ai_portfolio.png";
import devsyncImg from "../assets/images/projects/devsync.png";

export const projectCategories = [
  "All",
  "Full Stack",
  "MERN",
  "AI/ML",
];

export const projects = [
  {
    id: "shopsphere",
    title: "ShopSphere - MERN E-Commerce Platform",
    category: "MERN",
    image: shopsphereImg,
    description:
      "A full-featured, scalable MERN stack e-commerce web application with real-time payment gateway integration, admin analytics dashboard, inventory management, and JWT authentication.",
    highlights: [
      "Integrated Stripe payment gateway for instant, secure checkout processing.",
      "Built an interactive admin dashboard for tracking orders, revenue, and product inventory.",
      "Implemented JWT authentication with role-based access control for users & admins.",
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://github.com",
    liveDemo: "https://example.com",
    featured: true,
  },
  {
    id: "ai-portfolio-analyzer",
    title: "AI Portfolio & Resume Intelligence",
    category: "AI/ML",
    image: aiPortfolioImg,
    description:
      "An intelligent AI-powered platform that analyzes resume ATS scores, suggests keyword enhancements, and generates personalized portfolio recommendations using Python and NLP.",
    highlights: [
      "Utilized Python NLP algorithms to evaluate ATS compatibility with high accuracy.",
      "Designed interactive analytics visualizations with custom charts and metrics.",
      "Built a fast REST API backend connected to a responsive React user interface.",
    ],
    technologies: ["Python", "React", "Django REST", "Pandas", "Tailwind CSS"],
    github: "https://github.com",
    liveDemo: "https://example.com",
    featured: true,
  },
  {
    id: "devsync",
    title: "DevSync - Real-Time Collaborative Workspace",
    category: "Full Stack",
    image: devsyncImg,
    description:
      "A high-performance real-time collaborative code editor and team communication workspace featuring WebSockets synchronization and multi-language code highlighting.",
    highlights: [
      "Achieved real-time document synchronization using WebSockets and Socket.io.",
      "Implemented live code editing with syntax highlighting for JavaScript, Python, and C++.",
      "Crafted a sleek glassmorphism dark theme user interface tailored for developers.",
    ],
    technologies: ["React", "Node.js", "Socket.io", "Express", "Tailwind CSS"],
    github: "https://github.com",
    liveDemo: "https://example.com",
    featured: true,
  },
];

export default projects;
