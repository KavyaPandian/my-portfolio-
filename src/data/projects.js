import devsyncImg from "../assets/images/projects/devsync.png";
import aiResumeBuilderImg from "../assets/images/projects/ai_resume_builder.png";
import shopsphereImg from "../assets/images/projects/shopsphere.png";
import aiPortfolioImg from "../assets/images/projects/ai_portfolio.png";

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
    image: devsyncImg,
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
    github: "https://github.com/KavyaPandian/Blog-Management-System",
    liveDemo: "https://example.com",
    featured: true,
  },
  {
    id: "codesync",
    title: "CodeSync – Real-Time Collaborative Code Editor",
    category: "Full Stack",
    image: devsyncImg,
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
      "Express.js",
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
    github: "http://github.com/KavyaPandian/CodeSync",
    liveDemo: "https://codesynclabs.vercel.app/",
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
    github: "https://github.com/KavyaPandian/Real-Estate-Booking-Website",
    liveDemo: "https://example.com",
    featured: true,
  },
  {
    id: "ai-resume-builder",
    title: "AI Resume Builder Web Application",
    category: "AI/ML",
    image: aiResumeBuilderImg,
    shortDescription:
      "An AI-powered resume generator featuring JWT authentication, automated ATS optimization, smart content suggestions, and one-click PDF export.",
    description:
      "An intelligent web application that empowers candidates to create ATS-optimized resumes quickly using AI-powered keyword suggestions, customizable modern templates, and instant PDF download.",
    modalDescription:
      "AI Resume Builder is a full-stack smart resume generation platform. Users can create, customize, and export professional ATS-ready resumes with AI-generated suggestions, JWT-secured accounts, live template previews, and formatted PDF downloads.",
    highlights: [
      "Built an AI-based resume generator with JWT authentication and instant PDF export, accelerating resume creation by 3×.",
      "Optimized multi-template rendering to reduce page load time by 40% across all devices.",
      "Implemented intelligent content suggestion engine with keyword optimization tailored for ATS algorithms.",
      "Designed an intuitive, responsive dashboard with drag-and-drop section ordering and live previews.",
    ],
    cardTechnologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "OpenAI API",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "OpenAI API",
      "Tailwind CSS",
      "JWT",
    ],
    modalTechnologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "OpenAI API",
      "Tailwind CSS",
      "JWT",
      "REST API",
    ],
    github: "https://github.com/KavyaPandian/AI-Resume-Builder",
    liveDemo: "https://example.com",
    featured: true,
  },
  {
    id: "ICU Discharge Prediction – AI Healthcare System",
    title: "ICU Discharge Prediction – AI Healthcare System",
    category: "AI/ML",
    image: shopsphereImg,
    shortDescription:
      "An AI-powered healthcare prediction system that analyzes ICU patient records and applies machine learning and deep learning models to predict patient discharge readiness and support clinical decision-making.",
    description:
      "A full-featured MERN stack e-commerce platform equipped with seamless shopping cart flows, Stripe checkout, admin inventory management, and real-time sales reporting.",
    modalDescription:
      "Developed an intelligent healthcare prediction system using machine learning and deep learning techniques to analyze ICU patient records and estimate discharge readiness. The system uses the MIMIC-III clinical database to extract meaningful patient information, train predictive models, and evaluate their performance.",
    highlights: [
      "Clinical Data Processing: Processed MIMIC-III ICU datasets, including patient records, admissions, laboratory results, and clinical observations.",
      "Feature Extraction & Engineering: Extracted and engineered relevant clinical features from patient records to identify meaningful patterns associated with ICU discharge outcomes.",
      "Multiple ML Models: Implemented and compared Random Forest, XGBoost, and LSTM models for ICU discharge prediction.",
      "Deep Learning: Applied TensorFlow and Keras to develop and train sequence-based LSTM prediction models.",
      "Model Evaluation: Analyzed model performance using confusion matrices, ROC curves, training accuracy, and loss curves.",
      "Explainable AI: Used SHAP analysis to understand feature contributions and improve the interpretability of model predictions.",
    ],
    cardTechnologies: [
      "Python",
      "Random Forest",
      "XGBoost",
      "LSTM",
      "TensorFlow",
      "SHAP",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Stripe API",
      "JWT",
    ],
    modalTechnologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Random Forest",
      "XGBoost",
      "LSTM",
      "TensorFlow",
      "Keras",
      "SHAP",
      "Matplotlib",
      "Seaborn",
      "Jupyter Notebook",
      "Streamlit",
      "MIMIC-III",
    ],
    github: "https://github.com/KavyaPandian/ICU-Discharge-Prediction-Major-project",
    liveDemo: "https://example.com",
    featured: true,
  },
  {
    id: "To-Do – React Native Mobile Application",
    title: "To-Do – Mobile Task Management Application",
    category: "MOBILE APP",
    image: aiPortfolioImg,
    shortDescription:
      "A mobile task management application built using React Native and Expo, enabling users to create, organize, update, and manage daily tasks through an intuitive mobile interface with backend API integration.",
    description:
      "An AI-powered recruitment analytics dashboard that analyzes candidate skill relevance, computes ATS compatibility scores, and visualizes hiring trends using machine learning and Python.",
    modalDescription:
      "Developed a mobile-based task management application using React Native and Expo, designed to help users organize daily activities and manage tasks efficiently. The application integrates a mobile frontend with Django REST Framework APIs and PostgreSQL for backend data management, providing a structured approach to task creation and tracking.",
    highlights: [
      "Mobile Application Development: Built an intuitive and responsive mobile interface using React Native and Expo.",
      "Task Management (CRUD): Implemented Create, Read, Update, and Delete operations to manage daily tasks efficiently.",
      "REST API Integration: Connected the mobile application with backend REST APIs for seamless communication and task operations.",
      "Backend Development: Developed backend services using Python and Django REST Framework to handle task-related operations.",
      "Database Management: Integrated PostgreSQL to store and manage task information efficiently.",
      "Frontend–Backend Integration: Established API communication between the mobile application and backend services.",
      "Cross-Platform Development: Used Expo to simplify mobile application development, testing, and execution.",
    ],
    cardTechnologies: [
      "React Native",
      "Expo",
      "Python",
      "Django REST",
      "PostgreSQL",
    ],
    technologies: [
      "Python",
      "Django REST Framework",
      "TensorFlow",
      "Pandas",
      "NumPy",
      "React.js",
      "Tailwind CSS",
    ],
    modalTechnologies: [
      "React Native",
      "Expo",
      "Python",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "REST APIs",
      "Render",
      "Vercel",
      "Expo EAS Build",
      "Git/GitHub",
      "VS Code"
    ],
    github: "https://github.com/KavyaPandian/TO-DO",
    liveDemo: "https://expo.dev/accounts/kavyapandian/projects/mobile",
    featured: true,
  },
];

export default projects;

