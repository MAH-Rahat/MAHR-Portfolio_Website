export const ProjectCategory = {
  All: "All",
  AIML: "AI/ML",
  FullStack: "Full-Stack",
  WebDev: "Web Development"
};

export const projects = [
  {
    id: "ecocycle",
    name: "EcoCycle",
    description: "Full-Stack Recycling Management Platform (MERN)",
    longDescription: "EcoCycle is a complete, multi-role digital platform designed to optimize urban recycling efforts by seamlessly connecting households, collectors, and recycling centers. The core mission is to increase recycling participation through gamification, personalized impact tracking, and efficient logistics management.",
    category: ProjectCategory.FullStack,
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux", "Tailwind CSS"],
    features: [
      "Multi-role user system (households, collectors, centers)",
      "Gamification with rewards and achievements",
      "Real-time impact tracking and analytics",
      "Logistics management and route optimization",
      "Responsive design for all devices"
    ],
    imageUrl: "/assets/projects/ecocycle.png",
    liveUrl: "https://ecocycle-demo.com",
    githubUrl: "https://github.com/MAH-Rahat/ecocycle",
    featured: true
  },
  {
    id: "shilpohaaat",
    name: "Shilpohaaat",
    description: "E-commerce Platform for Local Artisans",
    longDescription: "Shilpohaaat is an e-commerce platform built for local artisans with product management, user authentication, and responsive UI design. The platform empowers artisans to showcase and sell their handcrafted products online.",
    category: ProjectCategory.FullStack,
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Bootstrap"],
    features: [
      "Product catalog with search and filters",
      "User authentication and authorization",
      "Shopping cart and checkout system",
      "Admin panel for product management",
      "Responsive design"
    ],
    imageUrl: "/assets/projects/shilpohaaat.png",
    githubUrl: "https://github.com/MAH-Rahat/shilpohaaat",
    featured: true
  },
  {
    id: "journey-partner",
    name: "Journey-Partner",
    description: "GitHub Journey Partner - Travel Companion Finder",
    longDescription: "Journey-Partner is a web app for students to find travel companions and share ride costs. It allows users to post requests, get real-time fare estimates, and interact with a community system using PHP and MySQL to manage all user and post data.",
    category: ProjectCategory.WebDev,
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
    features: [
      "User registration and authentication",
      "Post travel requests with details",
      "Real-time fare estimation",
      "Community interaction system",
      "Database-driven content management"
    ],
    imageUrl: "/assets/projects/journey-partner.png",
    githubUrl: "https://github.com/MAH-Rahat/journey-partner",
    featured: true
  },
  {
    id: "ai-image-classifier",
    name: "AI Image Classifier",
    description: "Deep Learning Image Classification System",
    longDescription: "An advanced image classification system using Convolutional Neural Networks (CNN) built with TensorFlow and Keras. Trained on custom datasets to achieve high accuracy in real-world scenarios.",
    category: ProjectCategory.AIML,
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy", "Matplotlib"],
    features: [
      "Custom CNN architecture",
      "Data augmentation pipeline",
      "Real-time image classification",
      "Model performance visualization",
      "Transfer learning implementation"
    ],
    imageUrl: "/assets/projects/ai-classifier.png",
    githubUrl: "https://github.com/MAH-Rahat/ai-image-classifier",
    featured: false
  },
  {
    id: "face-recognition",
    name: "Face Recognition System",
    description: "Real-time Face Detection and Recognition",
    longDescription: "A computer vision project implementing face detection and recognition using OpenCV and deep learning models. Capable of real-time processing with high accuracy.",
    category: ProjectCategory.AIML,
    technologies: ["Python", "OpenCV", "TensorFlow", "NumPy", "dlib"],
    features: [
      "Real-time face detection",
      "Face recognition with high accuracy",
      "Multiple face tracking",
      "Database of known faces",
      "Live camera feed processing"
    ],
    imageUrl: "/assets/projects/face-recognition.png",
    githubUrl: "https://github.com/MAH-Rahat/face-recognition",
    featured: false
  },
  {
    id: "portfolio-website",
    name: "Portfolio Website",
    description: "Modern Animated Portfolio with MERN Stack",
    longDescription: "This very portfolio website you're viewing! Built with React, Node.js, Express, and MongoDB. Features smooth animations, dark mode, contact form with email integration, and responsive design.",
    category: ProjectCategory.FullStack,
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Framer Motion"],
    features: [
      "Smooth animations and transitions",
      "Dark mode support",
      "Contact form with email integration",
      "GitHub API integration",
      "Fully responsive design",
      "SEO optimized"
    ],
    imageUrl: "/assets/projects/portfolio.png",
    githubUrl: "https://github.com/MAH-Rahat/portfolio",
    liveUrl: "https://mah-rahat.com",
    featured: true
  }
];
