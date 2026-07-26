import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaDatabase,
  FaPalette,
  FaPaintBrush,
  FaCode,
  FaServer,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiVite,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiDjango,
  SiTensorflow,
  SiOpencv,
  SiPandas,
  SiNumpy,
  SiPostman,
  SiVercel,
} from "react-icons/si";

import {
  MdOutlineDesignServices,
  MdDevices,
} from "react-icons/md";

export const categories = [
  "Frontend",
  "Backend",
  "Database",
  "UI/UX",
  "AI/ML",
  "Tools",
];

export const skills = [
  // =========================
  // Frontend
  // =========================
  {
    name: "React.js",
    icon: FaReact,
    category: "Frontend",
    color: "text-[#61DAFB]",
  },
  {
    name: "JavaScript",
    icon: FaJs,
    category: "Frontend",
    color: "text-[#F7DF1E]",
  },
  {
    name: "HTML5",
    icon: FaHtml5,
    category: "Frontend",
    color: "text-[#E34F26]",
  },
  {
    name: "CSS3",
    icon: FaCss3Alt,
    category: "Frontend",
    color: "text-[#1572B6]",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    category: "Frontend",
    color: "text-[#06B6D4]",
  },
  {
    name: "Bootstrap",
    icon: FaBootstrap,
    category: "Frontend",
    color: "text-[#7952B3]",
  },
  {
    name: "Vite",
    icon: SiVite,
    category: "Frontend",
    color: "text-[#646CFF]",
  },

  // =========================
  // Backend
  // =========================
  {
    name: "Node.js",
    icon: FaNodeJs,
    category: "Backend",
    color: "text-[#339933]",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    category: "Backend",
    color: "text-gray-300",
  },
  {
    name: "Python",
    icon: FaPython,
    category: "Backend",
    color: "text-[#3776AB]",
  },
  {
    name: "Java",
    icon: FaJava,
    category: "Backend",
    color: "text-[#ED8B00]",
  },
  {
    name: "Django",
    icon: SiDjango,
    category: "Backend",
    color: "text-[#092E20]",
  },
  {
    name: "Django REST Framework",
    icon: FaPython,
    category: "Backend",
    color: "text-yellow-400",
  },


  // =========================
  // Database
  // =========================
  {
    name: "MongoDB",
    icon: SiMongodb,
    category: "Database",
    color: "text-[#47A248]",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    category: "Database",
    color: "text-[#4479A1]",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    category: "Database",
    color: "text-[#336791]",
  },

  // =========================
  // UI / UX
  // =========================
  {
    name: "Figma",
    icon: FaFigma,
    category: "UI/UX",
    color: "text-[#F24E1E]",
  },
  {
  name: "Adobe Illustrator",
  icon: FaPalette,
  category: "UI/UX",
  color: "text-orange-500",
},
  {
    name: "Canva",
    icon: FaPaintBrush,
    category: "UI/UX",
    color: "text-[#00C4CC]",
  },
  {
    name: "UI Design",
    icon: MdOutlineDesignServices,
    category: "UI/UX",
    color: "text-[#FF6F61]",
  },
  {
    name: "Responsive Design",
    icon: MdDevices,
    category: "UI/UX",
    color: "text-[#4CAF50]",
  },
  {
    name: "Wireframing",
    icon: FaFigma,
    category: "UI/UX",
    color: "text-[#F24E1E]",
  },
  {
    name: "Prototyping",
    icon: FaFigma,
    category: "UI/UX",
    color: "text-[#F24E1E]",
  },

  // =========================
  // AI / ML
  // =========================
  {
    name: "Random Forest",
    icon: FaDatabase,
    category: "AI/ML",
  },
  {
    name: "XGBoost",
    icon: FaDatabase,
    category: "AI/ML",
    color: "text-[#FF9900]",
  },
  {
    name: "CNN",
    icon: SiTensorflow,
    category: "AI/ML",
    color: "text-[#FF6F00]",
  },
  {
    name: "BiLSTM",
    icon: SiTensorflow,
    category: "AI/ML",
    color: "text-[#FF6F00]",
  },
  {
    name: "TensorFlow",
    icon: SiTensorflow,
    category: "AI/ML",
    color: "text-[#FF6F00]",
  },
  {
    name: "OpenCV",
    icon: SiOpencv,
    category: "AI/ML",
    color: "text-[#5C3EE8]",
  },
  {
    name: "Pandas",
    icon: SiPandas,
    category: "AI/ML",
    color: "text-[#150458]",
  },
  {
    name: "NumPy",
    icon: SiNumpy,
    category: "AI/ML",
    color: "text-[#013243]",
  },

  // =========================
  // Tools
  // =========================
  {
    name: "Git",
    icon: FaGitAlt,
    category: "Tools",
    color: "text-[#F05032]",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    category: "Tools",
    color: "text-[#181717]",
  },
 {
  name: "VS Code",
  icon: FaCode,
  category: "Tools",
  color: "text-blue-400",
},
  {
    name: "Postman",
    icon: SiPostman,
    category: "Tools",
    color: "text-[#FF6C37]",
  },
  {
  name: "Render",
  icon: FaServer,
  category: "Tools",
  color: "text-cyan-400",
},
  {
    name: "Vercel",
    icon: SiVercel,
    category: "Tools",
    color: "text-[#000000]",
  },
];

