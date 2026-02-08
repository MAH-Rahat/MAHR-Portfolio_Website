# Design Document: MAH Rahat Portfolio Website

## Overview

This document outlines the technical design for a modern, animated portfolio website for MAH Rahat, a Full-Stack AI Engineer. The portfolio will be built as a single-page application (SPA) using React.js with TypeScript for type safety, Framer Motion for animations, and Tailwind CSS for styling. The design emphasizes engineering aesthetics, smooth animations, and optimal performance while showcasing AI/ML expertise.

### Design Goals

1. **Engineering-First Aesthetic**: Visual design that clearly communicates technical expertise rather than graphic design focus
2. **Performance**: Fast loading times (FCP < 1.5s), 60 FPS animations, optimized assets
3. **Accessibility**: WCAG 2.1 AA compliance, keyboard navigation, screen reader support
4. **Responsiveness**: Seamless experience across mobile (< 768px), tablet (768-1024px), and desktop (> 1024px)
5. **Interactivity**: Smooth animations, micro-interactions, and engaging visual effects
6. **Maintainability**: Clean component architecture, reusable patterns, well-documented code

### Technology Stack (MERN)

**Frontend:**
- **React 18+** with TypeScript for UI components
- **Vite** for fast build tooling and development server
- **React Router v6** for client-side routing
- **Tailwind CSS 3+** for utility-first styling
- **Framer Motion** for declarative animations and gestures
- **Axios** for HTTP requests to backend API
- **React Hook Form** + **Zod** for form validation
- **Prism.js** for syntax highlighting

**Backend:**
- **Node.js 18+** with Express.js framework
- **TypeScript** for type-safe backend code
- **MongoDB Atlas** for cloud database
- **Mongoose** for MongoDB object modeling
- **Nodemailer** for sending contact form emails
- **Express Validator** for request validation
- **Cors** for cross-origin resource sharing
- **Helmet** for security headers
- **Morgan** for HTTP request logging
- **Dotenv** for environment variable management

**Database:**
- **MongoDB Atlas** (cloud-hosted)
- Collections: contacts, projects (optional), blog_posts (optional), analytics (optional)
- Indexes on frequently queried fields

**API Architecture:**
- RESTful API design
- JSON request/response format
- JWT authentication (optional, for admin panel)
- Rate limiting for contact form submissions

**Deployment:**
- **Frontend**: Vercel or Netlify
- **Backend**: Railway, Render, or Heroku
- **Database**: MongoDB Atlas (free tier)
- **CI/CD**: GitHub Actions
- **Domain**: Custom domain with SSL

**Development Tools:**
- **Concurrently**: Run frontend and backend simultaneously
- **Nodemon**: Auto-restart backend on changes
- **ESLint** + **Prettier**: Code quality and formatting
- **Vitest**: Testing framework
- **Thunder Client** or **Postman**: API testing

## Architecture

### Component Hierarchy

```
App
├── ThemeProvider (Context)
├── ScrollProgressBar
├── CustomCursor
├── Navigation
│   ├── Logo
│   ├── NavLinks
│   ├── ThemeToggle
│   └── MobileMenu
├── LoadingScreen
├── Hero
│   ├── ParticleBackground
│   ├── TypingAnimation
│   ├── SocialLinks
│   └── CTAButtons
├── About
│   ├── ProfileImage
│   ├── AboutText
│   └── ContactInfo
├── Skills
│   ├── SkillCategory
│   │   └── SkillItem (with proficiency bar)
│   └── SkillFilter
├── Experience
│   ├── TimelineItem
│   │   ├── CompanyLogo
│   │   ├── JobDetails
│   │   └── Description
│   └── TimelineConnector
├── Projects
│   ├── ProjectFilter
│   └── ProjectCard
│       ├── ProjectImage
│       ├── ProjectInfo
│       ├── TechStack
│       └── ProjectLinks
├── AIShowcase
│   ├── NeuralNetworkVisualization
│   ├── AIMetrics
│   └── CodeSnippet
├── Education
│   └── EducationCard
├── Statistics
│   └── StatCounter
├── Testimonials (optional)
│   └── TestimonialCarousel
├── Blog (optional)
│   └── BlogCard
├── GitHubIntegration
│   ├── ContributionGraph
│   └── PinnedRepos
├── Contact
│   ├── ContactForm
│   ├── ContactMethods
│   └── SocialLinks
├── Footer
└── BackToTop
```

### Data Flow (MERN Architecture)

1. **Static Content**: Personal information, skills, projects, and experience stored in TypeScript configuration files in the frontend
2. **Dynamic Content**: 
   - GitHub data fetched from GitHub API on component mount (client-side)
   - Contact form submissions sent to backend API
   - Optional: Projects and blog posts fetched from MongoDB via backend API
3. **User Interactions**: 
   - Theme preferences managed through React Context and localStorage (client-side)
   - Form submissions sent to Express backend via Axios
   - Navigation state managed in React
4. **Backend Processing**:
   - Contact form data validated and stored in MongoDB
   - Email sent via Nodemailer to ahrahat.cse@gmail.com
   - Optional: Analytics tracked (page views, form submissions, resume downloads)
5. **Database Operations**:
   - Contact submissions stored with timestamp
   - Optional: Project views and interactions logged
   - Optional: Blog post content managed through admin interface

### API Endpoints

**Contact API**:
```
POST /api/contact
- Body: { name, email, subject, message }
- Response: { success: true, message: "Message sent successfully" }
- Rate limit: 5 requests per 15 minutes per IP
```

**Projects API** (Optional):
```
GET /api/projects
- Response: { projects: Project[] }

GET /api/projects/:id
- Response: { project: Project }
```

**Analytics API** (Optional):
```
POST /api/analytics/track
- Body: { event: string, data: object }
- Response: { success: true }

GET /api/analytics/stats
- Response: { pageViews, formSubmissions, resumeDownloads }
```

### File Structure (MERN)

```
portfolio-mern/
├── client/                          # React frontend
│   ├── public/
│   │   ├── assets/
│   │   │   ├── images/
│   │   │   ├── projects/
│   │   │   └── resume/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Card.tsx
│   │   │   │   ├── Section.tsx
│   │   │   │   └── AnimatedText.tsx
│   │   │   ├── layout/
│   │   │   │   ├── Navigation.tsx
│   │   │   │   ├── Footer.tsx
│   │   │   │   ├── ScrollProgress.tsx
│   │   │   │   └── BackToTop.tsx
│   │   │   ├── sections/
│   │   │   │   ├── Hero.tsx
│   │   │   │   ├── About.tsx
│   │   │   │   ├── Skills.tsx
│   │   │   │   ├── Experience.tsx
│   │   │   │   ├── Projects.tsx
│   │   │   │   ├── AIShowcase.tsx
│   │   │   │   ├── Education.tsx
│   │   │   │   ├── Statistics.tsx
│   │   │   │   ├── GitHubIntegration.tsx
│   │   │   │   └── Contact.tsx
│   │   │   └── animations/
│   │   │       ├── ParticleBackground.tsx
│   │   │       ├── TypingAnimation.tsx
│   │   │       ├── CustomCursor.tsx
│   │   │       └── NeuralNetworkViz.tsx
│   │   ├── contexts/
│   │   │   └── ThemeContext.tsx
│   │   ├── hooks/
│   │   │   ├── useIntersectionObserver.ts
│   │   │   ├── useScrollProgress.ts
│   │   │   ├── useGitHubData.ts
│   │   │   └── useLocalStorage.ts
│   │   ├── services/
│   │   │   ├── api.ts              # Axios instance and API calls
│   │   │   └── github.ts           # GitHub API integration
│   │   ├── data/
│   │   │   ├── personal.ts
│   │   │   ├── skills.ts
│   │   │   ├── experience.ts
│   │   │   ├── projects.ts
│   │   │   └── education.ts
│   │   ├── utils/
│   │   │   ├── animations.ts
│   │   │   ├── constants.ts
│   │   │   └── helpers.ts
│   │   ├── types/
│   │   │   └── index.ts
│   │   ├── styles/
│   │   │   └── globals.css
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   └── tailwind.config.js
│
├── server/                          # Express backend
│   ├── src/
│   │   ├── config/
│   │   │   ├── database.ts         # MongoDB connection
│   │   │   └── email.ts            # Nodemailer configuration
│   │   ├── controllers/
│   │   │   ├── contactController.ts
│   │   │   ├── projectController.ts (optional)
│   │   │   └── analyticsController.ts (optional)
│   │   ├── models/
│   │   │   ├── Contact.ts          # Mongoose schema
│   │   │   ├── Project.ts (optional)
│   │   │   └── Analytics.ts (optional)
│   │   ├── routes/
│   │   │   ├── contactRoutes.ts
│   │   │   ├── projectRoutes.ts (optional)
│   │   │   └── analyticsRoutes.ts (optional)
│   │   ├── middleware/
│   │   │   ├── errorHandler.ts
│   │   │   ├── rateLimiter.ts
│   │   │   └── validator.ts
│   │   ├── utils/
│   │   │   ├── emailService.ts
│   │   │   └── logger.ts
│   │   ├── types/
│   │   │   └── index.ts
│   │   └── server.ts               # Express app entry point
│   ├── package.json
│   ├── tsconfig.json
│   └── .env.example
│
├── .gitignore
├── package.json                     # Root package.json for scripts
└── README.md
```

## Components and Interfaces

### Core Type Definitions

```typescript
// types/index.ts

export interface PersonalInfo {
  name: string;
  fullName: string;
  roles: string[];
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  bio: string;
  resumeUrl: string;
}

export interface Skill {
  name: string;
  proficiency: number; // 0-100
  category: SkillCategory;
  yearsOfExperience?: number;
  relatedProjects?: string[];
}

export enum SkillCategory {
  Programming = "Programming",
  WebTech = "Web Technologies",
  AIData = "AI & Data",
  Tools = "Tools",
  Languages = "Languages",
  SoftSkills = "Soft Skills"
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  description: string[];
  technologies?: string[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  category: ProjectCategory;
  technologies: string[];
  features: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export enum ProjectCategory {
  All = "All",
  AIML = "AI/ML",
  FullStack = "Full-Stack",
  WebDev = "Web Development"
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string | "Present";
  status?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
}

export interface Statistic {
  label: string;
  value: number;
  suffix?: string;
  icon: string;
}

export interface GitHubData {
  repos: number;
  stars: number;
  followers: number;
  contributions: number;
  pinnedRepos: Repository[];
}

export interface Repository {
  name: string;
  description: string;
  url: string;
  stars: number;
  forks: number;
  language: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface Theme {
  mode: "light" | "dark";
}
```

### Navigation Component

**Purpose**: Fixed navigation bar with smooth scrolling, active section highlighting, and mobile menu

**Props Interface**:
```typescript
interface NavigationProps {
  sections: string[];
  activeSection: string;
  onSectionClick: (section: string) => void;
}
```

**Key Features**:
- Fixed position with backdrop blur effect
- Active section highlighting based on scroll position
- Smooth scroll to section on click
- Hamburger menu for mobile with slide-in animation
- Theme toggle button
- Logo/name on the left

**Implementation Notes**:
- Use Intersection Observer API to detect active section
- Apply `position: fixed` with `backdrop-filter: blur(10px)`
- Mobile menu uses Framer Motion's `AnimatePresence` for enter/exit animations
- Active link highlighted with accent color and underline animation

### Hero Component

**Purpose**: Landing section with animated introduction, typing effect, and particle background

**Props Interface**:
```typescript
interface HeroProps {
  personalInfo: PersonalInfo;
}
```

**Key Features**:
- Full viewport height section
- Animated particle background (canvas-based or SVG)
- Typing animation cycling through roles
- Fade-in animations for name and description
- CTA buttons with hover effects
- Social links with icon animations

**Implementation Notes**:
- Use Framer Motion's `motion.div` with `initial`, `animate`, and `transition` props
- Typing animation implemented with custom hook or library (react-typed)
- Particle background using HTML5 Canvas or Three.js for 3D effects
- Parallax effect on mouse move using `useMotionValue` from Framer Motion

### Skills Component

**Purpose**: Display technical skills grouped by category with animated proficiency indicators

**Props Interface**:
```typescript
interface SkillsProps {
  skills: Skill[];
}
```

**Key Features**:
- Skills grouped by category (tabs or sections)
- Animated progress bars or circular indicators
- Hover tooltips with additional information
- Filter/sort functionality
- Staggered entrance animations

**Implementation Notes**:
- Use Intersection Observer to trigger animations when section enters viewport
- Progress bars animate from 0 to target value using Framer Motion
- Color-coded proficiency levels (green for expert, blue for advanced, yellow for intermediate)
- Grid layout with responsive columns (1 col mobile, 2 col tablet, 3 col desktop)

### Experience Component

**Purpose**: Timeline visualization of work history with animations

**Props Interface**:
```typescript
interface ExperienceProps {
  experiences: Experience[];
}
```

**Key Features**:
- Vertical timeline with connecting line
- Timeline dots/nodes for each position
- Cards with job details
- Sequential reveal animations
- Alternating left/right layout on desktop

**Implementation Notes**:
- Timeline line drawn using SVG or CSS border
- Cards animate in from left/right alternately
- Use `framer-motion`'s `staggerChildren` for sequential animations
- Responsive: stack vertically on mobile, alternate on desktop

### Projects Component

**Purpose**: Showcase key projects with filtering, 3D effects, and detailed information

**Props Interface**:
```typescript
interface ProjectsProps {
  projects: Project[];
}
```

**Key Features**:
- Filter buttons for project categories
- Project cards with 3D tilt effect on hover
- Image, title, description, tech stack, and links
- Modal or expanded view for project details
- Lazy-loaded images

**Implementation Notes**:
- Use `react-tilt` or custom implementation for 3D tilt effect
- Filter state managed with `useState`
- Animate layout changes with Framer Motion's `LayoutGroup`
- Images lazy-loaded with `loading="lazy"` attribute or Intersection Observer
- Tech stack displayed as colored badges

### AI Showcase Component

**Purpose**: Highlight AI/ML expertise with interactive visualizations

**Props Interface**:
```typescript
interface AIShowcaseProps {
  aiSkills: Skill[];
  codeExamples: CodeSnippet[];
}
```

**Key Features**:
- Neural network visualization with animated connections
- AI-specific skills with proficiency indicators
- Code snippets with syntax highlighting
- Metrics or achievements related to AI projects

**Implementation Notes**:
- Neural network visualization using SVG with animated paths
- Particle effects flowing through network connections
- Code snippets highlighted with Prism.js or Highlight.js
- Copy-to-clipboard functionality for code examples

### Contact Component

**Purpose**: Contact form with validation and multiple contact methods

**Props Interface**:
```typescript
interface ContactProps {
  personalInfo: PersonalInfo;
}
```

**Key Features**:
- Form with name, email, subject, and message fields
- Real-time validation with error messages
- Submit button with loading state
- Success/error notifications
- Alternative contact methods (email, phone, social)

**Implementation Notes**:
- Form validation using React Hook Form and Zod schema
- Submit handler sends data to EmailJS or Formspree
- Loading state shows spinner on submit button
- Toast notifications for success/error feedback
- Email and phone links with `mailto:` and `tel:` protocols

### GitHub Integration Component

**Purpose**: Display live GitHub activity and statistics

**Props Interface**:
```typescript
interface GitHubIntegrationProps {
  username: string;
}
```

**Key Features**:
- Fetch and display GitHub stats (repos, stars, followers)
- Contribution graph or activity feed
- Pinned repositories with descriptions
- Loading and error states

**Implementation Notes**:
- Fetch data from GitHub API using custom hook
- Cache data with SWR or React Query (5-minute cache)
- Display loading skeleton while fetching
- Fallback to cached data if API fails
- Contribution graph using third-party library or custom SVG

### Theme Context

**Purpose**: Manage light/dark mode state and persistence

**Context Interface**:
```typescript
interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}
```

**Key Features**:
- Toggle between light and dark themes
- Persist preference in localStorage
- Respect system preference on first visit
- Smooth transition between themes

**Implementation Notes**:
- Use React Context API for global state
- Custom hook `useTheme` for consuming context
- CSS variables for theme colors
- Transition duration: 300ms for smooth color changes
- Check `prefers-color-scheme` media query on mount

### Animation Utilities

**Purpose**: Reusable animation variants and helper functions

**Key Exports**:
```typescript
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
};

export const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};
```

**Implementation Notes**:
- Export common animation variants for consistency
- Use with Framer Motion's `variants` prop
- Combine variants for complex animations
- Respect `prefers-reduced-motion` setting

### Backend Components (Express.js)

### Contact Controller

**Purpose**: Handle contact form submissions, validation, and email sending

**Key Functions**:
```typescript
// controllers/contactController.ts
export const submitContact = async (req: Request, res: Response) => {
  // 1. Validate request body
  // 2. Create contact document in MongoDB
  // 3. Send email via Nodemailer
  // 4. Return success response
};

export const getContacts = async (req: Request, res: Response) => {
  // Admin only: Retrieve all contact submissions
};
```

**Implementation Notes**:
- Use express-validator for input validation
- Sanitize inputs to prevent XSS
- Rate limit: 5 submissions per 15 minutes per IP
- Send email asynchronously (don't block response)
- Log errors for monitoring

### Contact Model (Mongoose)

**Purpose**: Define MongoDB schema for contact submissions

**Schema Definition**:
```typescript
// models/Contact.ts
import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  subject: {
    type: String,
    required: true,
    trim: true,
    maxlength: 200
  },
  message: {
    type: String,
    required: true,
    trim: true,
    maxlength: 2000
  },
  ipAddress: {
    type: String,
    required: false
  },
  userAgent: {
    type: String,
    required: false
  },
  status: {
    type: String,
    enum: ['pending', 'sent', 'failed'],
    default: 'pending'
  },
  emailSentAt: {
    type: Date,
    required: false
  }
}, {
  timestamps: true  // Adds createdAt and updatedAt
});

// Index for querying by date
contactSchema.index({ createdAt: -1 });

export const Contact = mongoose.model('Contact', contactSchema);
```

### Email Service

**Purpose**: Send emails using Nodemailer

**Implementation**:
```typescript
// utils/emailService.ts
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',  // or SMTP settings
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

export const sendContactEmail = async (contactData: ContactFormData) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'ahrahat.cse@gmail.com',
    subject: `Portfolio Contact: ${contactData.subject}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${contactData.name}</p>
      <p><strong>Email:</strong> ${contactData.email}</p>
      <p><strong>Subject:</strong> ${contactData.subject}</p>
      <p><strong>Message:</strong></p>
      <p>${contactData.message}</p>
    `,
    replyTo: contactData.email
  };

  return await transporter.sendMail(mailOptions);
};
```

### Rate Limiter Middleware

**Purpose**: Prevent spam and abuse of contact form

**Implementation**:
```typescript
// middleware/rateLimiter.ts
import rateLimit from 'express-rate-limit';

export const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,  // 15 minutes
  max: 5,  // 5 requests per window
  message: 'Too many contact submissions. Please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});
```

### Error Handler Middleware

**Purpose**: Centralized error handling for API

**Implementation**:
```typescript
// middleware/errorHandler.ts
export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);

  if (err.name === 'ValidationError') {
    return res.status(400).json({
      success: false,
      message: 'Validation error',
      errors: err.message
    });
  }

  if (err.name === 'MongoError') {
    return res.status(500).json({
      success: false,
      message: 'Database error'
    });
  }

  res.status(500).json({
    success: false,
    message: 'Internal server error'
  });
};
```

### API Service (Frontend)

**Purpose**: Axios instance and API call functions for frontend

**Implementation**:
```typescript
// client/src/services/api.ts
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 10000
});

export const contactAPI = {
  submit: async (data: ContactFormData) => {
    const response = await apiClient.post('/contact', data);
    return response.data;
  }
};

export const projectsAPI = {
  getAll: async () => {
    const response = await apiClient.get('/projects');
    return response.data;
  },
  getById: async (id: string) => {
    const response = await apiClient.get(`/projects/${id}`);
    return response.data;
  }
};
```

## Data Models

### Personal Information Data

```typescript
// data/personal.ts
export const personalInfo: PersonalInfo = {
  name: "MAH Rahat",
  fullName: "Ashraful Hossain Rahat",
  roles: [
    "Full-Stack AI Engineer",
    "Computer Vision Specialist",
    "MERN Stack Developer",
    "Machine Learning Engineer"
  ],
  location: "Dhaka, Bangladesh",
  email: "ahrahat.cse@gmail.com",
  phone: "+880 1791-441041",
  linkedin: "https://linkedin.com/in/ah-rahat",
  github: "https://github.com/MAH-Rahat",
  bio: "Full-Stack AI Engineer specializing in Computer Vision and Deep Learning...",
  resumeUrl: "/assets/MAH_Rahat_Resume.pdf"
};
```

### Skills Data

```typescript
// data/skills.ts
export const skills: Skill[] = [
  {
    name: "Python",
    proficiency: 95,
    category: SkillCategory.Programming,
    yearsOfExperience: 4
  },
  {
    name: "JavaScript (ES6+)",
    proficiency: 90,
    category: SkillCategory.Programming,
    yearsOfExperience: 3
  },
  {
    name: "TensorFlow",
    proficiency: 85,
    category: SkillCategory.AIData,
    yearsOfExperience: 2
  },
  // ... more skills
];
```

### Projects Data

```typescript
// data/projects.ts
export const projects: Project[] = [
  {
    id: "ecocycle",
    name: "EcoCycle",
    description: "Full-Stack Recycling Management Platform",
    longDescription: "Multi-role digital platform for urban recycling with gamification, impact tracking, and logistics management.",
    category: ProjectCategory.FullStack,
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux"],
    features: [
      "Multi-role user system",
      "Gamification with rewards",
      "Real-time impact tracking",
      "Logistics management"
    ],
    imageUrl: "/assets/projects/ecocycle.png",
    liveUrl: "https://ecocycle-demo.com",
    githubUrl: "https://github.com/MAH-Rahat/ecocycle",
    featured: true
  },
  // ... more projects
];
```

### Experience Data

```typescript
// data/experience.ts
export const experiences: Experience[] = [
  {
    id: "quantacraft",
    title: "Web Developer",
    company: "QuantaCraft Digital",
    location: "Dhaka",
    startDate: "2025-01",
    endDate: "Present",
    description: [
      "Developed responsive web applications using MERN stack",
      "Implemented RESTful APIs and database schemas",
      "Collaborated with design team for UI/UX implementation"
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express"]
  },
  // ... more experiences
];
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*


### Property Reflection

After analyzing all 150+ acceptance criteria, I've identified the following categories of testable properties:

**Properties to Include:**
1. Navigation and scrolling behavior (applies to all nav links and sections)
2. Form validation (applies to all form fields and validation rules)
3. Animation triggers (applies to all animated sections)
4. Accessibility features (applies to all interactive elements)
5. Responsive behavior (applies to all components across breakpoints)
6. Data display completeness (applies to all data-driven components)
7. Theme consistency (applies to all themed elements)
8. Link behavior (applies to all external and internal links)

**Redundancies Eliminated:**
- Individual content display tests (1.1, 1.2, 2.1-2.3, etc.) are examples, not properties
- Multiple animation tests for similar behaviors combined into general animation properties
- Specific UI element tests are examples, not universal properties
- Performance and subjective quality tests excluded (not programmatically testable)

### Core Properties

**Property 1: Navigation Link Scrolling**
*For any* navigation link, when clicked, the page should smoothly scroll to the corresponding section and that section should become visible in the viewport.
**Validates: Requirements 1.5, 9.2**

**Property 2: Active Section Highlighting**
*For any* section that enters the viewport during scrolling, the corresponding navigation link should be highlighted as active.
**Validates: Requirements 9.3**

**Property 3: Social Links Open in New Tab**
*For any* social media link (LinkedIn, GitHub), the link should have `target="_blank"` and `rel="noopener noreferrer"` attributes to open in a new tab securely.
**Validates: Requirements 2.4**

**Property 4: Skills Category Grouping**
*For any* skill in the skills data, it should belong to exactly one category, and all skills in a category should be displayed together.
**Validates: Requirements 3.6**

**Property 5: Viewport Animation Triggers**
*For any* section with entrance animations, the animations should trigger when the section first enters the viewport and should not re-trigger on subsequent viewport entries.
**Validates: Requirements 3.5, 4.4, 6.4, 10.1, 16.3**

**Property 6: Experience Chronological Ordering**
*For any* list of work experiences, they should be displayed in reverse chronological order (most recent first) based on the start date.
**Validates: Requirements 4.1**

**Property 7: Experience Data Completeness**
*For any* displayed experience item, it should show job title, company name, location, and date range (all required fields).
**Validates: Requirements 4.2**

**Property 8: Project Data Completeness**
*For any* displayed project, it should show project name, description, technologies used, key features, and project category (all required fields).
**Validates: Requirements 5.2**

**Property 9: Project Hover Effects**
*For any* project card, hovering should apply visual transformations (scale, tilt, or shadow) within 200ms.
**Validates: Requirements 5.6, 10.2**

**Property 10: Conditional Project Links**
*For any* project that has a `liveUrl` or `githubUrl` defined, corresponding action buttons should be displayed and functional.
**Validates: Requirements 5.7**

**Property 11: Image Lazy Loading**
*For any* image that is not in the initial viewport (below the fold), the `loading="lazy"` attribute or Intersection Observer-based lazy loading should be applied.
**Validates: Requirements 5.10, 11.2**

**Property 12: Form Field Validation**
*For any* required form field that is empty when the form is submitted, a validation error message should be displayed for that field.
**Validates: Requirements 7.2**

**Property 13: Email Format Validation**
*For any* email input value that does not match the email regex pattern, a validation error should be displayed.
**Validates: Requirements 7.3**

**Property 14: Form Submission API Call**
*For any* valid contact form submission, an API call should be made to the email service with the form data (name, email, subject, message).
**Validates: Requirements 7.4**

**Property 15: Touch Target Sizing**
*For any* interactive element on mobile viewports (< 768px), the touch target should be at least 44x44 pixels for accessibility.
**Validates: Requirements 8.7**

**Property 16: Hover Transition Timing**
*For any* interactive element with hover effects, the transition should complete within 200ms.
**Validates: Requirements 10.2**

**Property 17: Animation Easing**
*For any* animation, an easing function (not linear) should be applied to create natural motion.
**Validates: Requirements 10.3**

**Property 18: Color Contrast Accessibility**
*For any* text element, the color contrast ratio between text and background should be at least 4.5:1 for normal text and 3:1 for large text (WCAG AA).
**Validates: Requirements 12.6**

**Property 19: Semantic HTML Structure**
*For any* major page section (hero, about, skills, etc.), it should use semantic HTML elements (section, article, nav, header, footer) rather than generic divs.
**Validates: Requirements 14.1**

**Property 20: ARIA Labels for Icon Buttons**
*For any* interactive element that lacks visible text (icon-only buttons), an `aria-label` or `aria-labelledby` attribute should be present.
**Validates: Requirements 14.2**

**Property 21: Keyboard Focus Indicators**
*For any* focusable element, a visible focus indicator (outline, border, or background change) should be present when focused via keyboard navigation.
**Validates: Requirements 14.3**

**Property 22: Image Alt Text**
*For any* image element, a descriptive `alt` attribute should be present (not empty or generic).
**Validates: Requirements 14.4**

**Property 23: Keyboard Navigation Support**
*For any* interactive feature (buttons, links, form inputs, modals), it should be fully operable using only keyboard (Tab, Enter, Escape, Arrow keys).
**Validates: Requirements 14.5**

**Property 24: Logical Tab Order**
*For any* sequence of focusable elements, the tab order should follow the visual reading order (top to bottom, left to right) without unexpected jumps.
**Validates: Requirements 14.6**

**Property 25: Dark Mode Contrast**
*For any* text element when dark mode is active, the color contrast ratio should meet WCAG AA standards (4.5:1 for normal text).
**Validates: Requirements 15.3**

**Property 26: Code Snippet Syntax Highlighting**
*For any* code snippet displayed, syntax highlighting should be applied based on the programming language.
**Validates: Requirements 16.5, 30.3**

**Property 27: Parallax Mouse Movement**
*For any* background element with parallax effect, mouse movement should cause proportional element translation.
**Validates: Requirements 17.2**

**Property 28: Section-Specific Background Effects**
*For any* major section, appropriate background effects or styling should be applied that distinguishes it from other sections.
**Validates: Requirements 17.4**

**Property 29: Skill Proficiency Visualization**
*For any* skill item, a visual proficiency indicator (progress bar, circular indicator, or rating) should be displayed with the proficiency value.
**Validates: Requirements 19.1**

**Property 30: Proficiency Animation on Viewport Entry**
*For any* skill proficiency indicator, when the skills section enters the viewport, the indicator should animate from 0% to its target proficiency value.
**Validates: Requirements 19.2**

**Property 31: Proficiency Color Coding**
*For any* skill with proficiency >= 90, the indicator should use expert color; 75-89 should use advanced color; 60-74 should use intermediate color.
**Validates: Requirements 19.3**

**Property 32: Skill Hover Information**
*For any* skill item, hovering should reveal additional information (years of experience, related projects, or description).
**Validates: Requirements 19.4**

**Property 33: Section Navigation Transitions**
*For any* navigation between sections (via nav links or CTA buttons), a smooth transition animation should be applied.
**Validates: Requirements 20.2**

**Property 34: Loading State Placeholders**
*For any* asynchronous content (GitHub data, images), loading placeholders or skeleton screens should be displayed while content is fetching.
**Validates: Requirements 20.3**

**Property 35: Critical Asset Preloading**
*For any* critical asset (hero image, fonts, above-the-fold CSS), preload hints should be included in the HTML head.
**Validates: Requirements 20.5**

**Property 36: Statistics Counter Animation**
*For any* statistic counter, when the statistics section enters the viewport, the counter should animate from 0 to its target value over 2 seconds with easing.
**Validates: Requirements 21.3, 21.4**

**Property 37: Statistics Icon Display**
*For any* statistic item, an accompanying icon should be displayed.
**Validates: Requirements 21.5**

**Property 38: Testimonial Data Completeness**
*For any* displayed testimonial, it should show the quote, recommender's name, role, and company (all required fields).
**Validates: Requirements 22.2**

**Property 39: Testimonial Carousel Transitions**
*For any* testimonial navigation (next/previous), the transition between testimonials should be animated with slide or fade effects.
**Validates: Requirements 22.4**

**Property 40: Blog Post Data Completeness**
*For any* displayed blog post, it should show title, excerpt, publication date, and featured image (all required fields).
**Validates: Requirements 23.2**

**Property 41: Blog Post Navigation**
*For any* blog post card, clicking should navigate to the full article (internal link or external URL).
**Validates: Requirements 23.4**

**Property 42: Blog Post Tags Display**
*For any* blog post, associated tags or categories should be displayed.
**Validates: Requirements 23.5**

**Property 43: GitHub Repository Data Completeness**
*For any* displayed pinned repository, it should show name, description, and technology tags.
**Validates: Requirements 25.6**

**Property 44: Social Icon Hover Animations**
*For any* social media icon, hovering should apply animation effects (scale, color change, or rotation).
**Validates: Requirements 26.4**

**Property 45: Scroll Progress Accuracy**
*For any* scroll position, the progress bar width should accurately reflect the percentage of page scrolled (0% at top, 100% at bottom).
**Validates: Requirements 27.2**

**Property 46: Interactive Element Cursor Change**
*For any* interactive element (button, link, clickable card), hovering should change the cursor to pointer.
**Validates: Requirements 29.2**

**Property 47: Click Ripple Effect**
*For any* click event on the page, a visual ripple or particle effect should be created at the click location.
**Validates: Requirements 29.3**

**Property 48: Code Snippet Copy Button**
*For any* code snippet, a "Copy Code" button should be present and functional.
**Validates: Requirements 30.4**

**Property 49: Code Copy Feedback**
*For any* code copy action, clicking the copy button should copy the code to clipboard and display a confirmation message.
**Validates: Requirements 30.5**

**Property 50: Code Language Label**
*For any* code snippet, the programming language should be displayed as a label.
**Validates: Requirements 30.6**


## Error Handling

### Form Submission Errors

**Scenario**: Contact form submission fails due to network error, backend unavailability, or email service failure

**Handling Strategy**:
1. Frontend catches API errors in try-catch block
2. Display user-friendly error message: "Failed to send message. Please try again or contact directly at ahrahat.cse@gmail.com"
3. Keep form data intact (don't clear fields)
4. Provide retry button
5. Log error details to console for debugging

**Frontend Implementation**:
```typescript
// client/src/components/sections/Contact.tsx
const handleSubmit = async (data: ContactFormData) => {
  setIsSubmitting(true);
  try {
    await contactAPI.submit(data);
    showSuccessToast("Message sent successfully!");
    resetForm();
  } catch (error) {
    console.error("Contact form error:", error);
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 429) {
        showErrorToast("Too many submissions. Please try again in 15 minutes.");
      } else if (error.response?.status === 400) {
        showErrorToast("Invalid form data. Please check your inputs.");
      } else {
        showErrorToast("Failed to send message. Please try again or email directly.");
      }
    } else {
      showErrorToast("Network error. Please check your connection.");
    }
  } finally {
    setIsSubmitting(false);
  }
};
```

**Backend Implementation**:
```typescript
// server/src/controllers/contactController.ts
export const submitContact = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Validate input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    // Save to database
    const contact = new Contact({
      ...req.body,
      ipAddress: req.ip,
      userAgent: req.get('user-agent')
    });
    await contact.save();

    // Send email (async, don't wait)
    sendContactEmail(req.body)
      .then(() => {
        contact.status = 'sent';
        contact.emailSentAt = new Date();
        contact.save();
      })
      .catch(err => {
        console.error('Email send failed:', err);
        contact.status = 'failed';
        contact.save();
      });

    res.status(200).json({
      success: true,
      message: 'Message received. We will get back to you soon!'
    });
  } catch (error) {
    next(error);  // Pass to error handler middleware
  }
};
```

### GitHub API Errors

**Scenario**: GitHub API request fails or rate limit exceeded

**Handling Strategy**:
1. Implement fallback to cached data (localStorage)
2. Display last successful fetch timestamp
3. Show graceful error message: "Unable to load live GitHub data. Showing cached information."
4. Retry with exponential backoff
5. Provide manual refresh button

**Implementation**:
```typescript
const fetchGitHubData = async () => {
  try {
    const data = await githubAPI.getUser(username);
    localStorage.setItem('github_cache', JSON.stringify({ data, timestamp: Date.now() }));
    return data;
  } catch (error) {
    const cached = localStorage.getItem('github_cache');
    if (cached) {
      const { data, timestamp } = JSON.parse(cached);
      showWarning(`Showing cached data from ${formatDate(timestamp)}`);
      return data;
    }
    throw new Error("Unable to load GitHub data");
  }
};
```

### Image Loading Errors

**Scenario**: Project images or profile images fail to load

**Handling Strategy**:
1. Use `onError` handler on img elements
2. Replace with placeholder image or gradient background
3. Display fallback icon or initials
4. Log error for monitoring

**Implementation**:
```typescript
<img
  src={project.imageUrl}
  alt={project.name}
  onError={(e) => {
    e.currentTarget.src = '/assets/placeholder-project.png';
    console.warn(`Failed to load image: ${project.imageUrl}`);
  }}
/>
```

### Animation Performance Issues

**Scenario**: Animations cause performance degradation on low-end devices

**Handling Strategy**:
1. Detect `prefers-reduced-motion` media query
2. Simplify or disable animations when detected
3. Use CSS `will-change` sparingly
4. Implement frame rate monitoring
5. Fallback to CSS transitions instead of JavaScript animations

**Implementation**:
```typescript
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const animationVariants = prefersReducedMotion
  ? { hidden: {}, visible: {} } // No animation
  : { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } };
```

### Data Validation Errors

**Scenario**: Invalid or missing data in configuration files

**Handling Strategy**:
1. Validate data structure on app initialization
2. Use TypeScript for compile-time type checking
3. Provide default values for optional fields
4. Log validation errors with specific field information
5. Gracefully skip invalid items rather than crashing

**Implementation**:
```typescript
const validateProject = (project: any): project is Project => {
  if (!project.id || !project.name || !project.description) {
    console.error("Invalid project data:", project);
    return false;
  }
  return true;
};

const validProjects = projects.filter(validateProject);
```

### Browser Compatibility Issues

**Scenario**: Features not supported in older browsers

**Handling Strategy**:
1. Use feature detection (not browser detection)
2. Provide polyfills for critical features (Intersection Observer, ResizeObserver)
3. Graceful degradation for non-critical features
4. Display browser update notice for very old browsers

**Implementation**:
```typescript
if (!('IntersectionObserver' in window)) {
  // Load polyfill or use fallback
  import('intersection-observer');
}
```

### Database Connection Errors

**Scenario**: MongoDB connection fails or times out

**Handling Strategy**:
1. Implement connection retry logic with exponential backoff
2. Log connection errors for monitoring
3. Return 503 Service Unavailable to clients
4. Use connection pooling for efficiency
5. Set appropriate timeouts

**Implementation**:
```typescript
// server/src/config/database.ts
import mongoose from 'mongoose';

const connectDB = async (retries = 5) => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    if (retries > 0) {
      console.log(`Retrying connection... (${retries} attempts left)`);
      await new Promise(resolve => setTimeout(resolve, 5000));
      return connectDB(retries - 1);
    }
    throw new Error('Failed to connect to MongoDB after multiple attempts');
  }
};

// Handle connection events
mongoose.connection.on('disconnected', () => {
  console.warn('MongoDB disconnected. Attempting to reconnect...');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB error:', err);
});

export default connectDB;
```

### Environment Variable Errors

**Scenario**: Required environment variables are missing

**Handling Strategy**:
1. Validate environment variables on server startup
2. Fail fast with clear error messages
3. Provide .env.example file with all required variables
4. Use dotenv-safe or similar for validation

**Implementation**:
```typescript
// server/src/config/validateEnv.ts
const requiredEnvVars = [
  'MONGODB_URI',
  'EMAIL_USER',
  'EMAIL_PASSWORD',
  'PORT',
  'NODE_ENV'
];

export const validateEnv = () => {
  const missing = requiredEnvVars.filter(varName => !process.env[varName]);
  
  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(', ')}\n` +
      'Please check your .env file.'
    );
  }
};

// Call in server.ts before starting server
validateEnv();
```

## Testing Strategy

### Overview

The portfolio will use a dual testing approach combining unit tests for specific examples and edge cases with property-based tests for universal correctness properties. This ensures both concrete functionality and general correctness across all inputs.

### Testing Tools

**Unit Testing**:
- **Vitest**: Fast unit test runner with React Testing Library integration
- **React Testing Library**: Component testing with user-centric queries
- **@testing-library/user-event**: Realistic user interaction simulation
- **@testing-library/jest-dom**: Custom matchers for DOM assertions

**Property-Based Testing**:
- **fast-check**: Property-based testing library for TypeScript/JavaScript
- Minimum 100 iterations per property test
- Custom generators for domain-specific data (PersonalInfo, Skill, Project, etc.)

**E2E Testing** (Optional):
- **Playwright** or **Cypress**: End-to-end testing for critical user flows
- Test complete user journeys (landing → navigation → contact form submission)

**Visual Regression** (Optional):
- **Percy** or **Chromatic**: Visual diff testing for UI changes
- Capture screenshots across different viewports and themes

### Unit Testing Strategy

**Focus Areas**:
1. **Component Rendering**: Verify specific content is displayed correctly
2. **User Interactions**: Test button clicks, form submissions, navigation
3. **Edge Cases**: Empty states, error states, loading states
4. **Integration Points**: API calls, localStorage, theme context

**Example Unit Tests**:

```typescript
// Hero component rendering
describe('Hero Component', () => {
  it('displays the full name', () => {
    render(<Hero personalInfo={mockPersonalInfo} />);
    expect(screen.getByText('Ashraful Hossain Rahat (MAH Rahat)')).toBeInTheDocument();
  });

  it('displays all CTA buttons', () => {
    render(<Hero personalInfo={mockPersonalInfo} />);
    expect(screen.getByRole('button', { name: /view projects/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /contact me/i })).toBeInTheDocument();
  });
});

// Contact form validation
describe('Contact Form', () => {
  it('shows error when email is invalid', async () => {
    render(<Contact personalInfo={mockPersonalInfo} />);
    const emailInput = screen.getByLabelText(/email/i);
    await userEvent.type(emailInput, 'invalid-email');
    await userEvent.click(screen.getByRole('button', { name: /send/i }));
    expect(screen.getByText(/invalid email format/i)).toBeInTheDocument();
  });

  it('shows error when required fields are empty', async () => {
    render(<Contact personalInfo={mockPersonalInfo} />);
    await userEvent.click(screen.getByRole('button', { name: /send/i }));
    expect(screen.getByText(/name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/email is required/i)).toBeInTheDocument();
  });
});

// Dark mode toggle
describe('Theme Toggle', () => {
  it('switches theme when clicked', async () => {
    render(<Navigation />);
    const themeToggle = screen.getByRole('button', { name: /toggle theme/i });
    await userEvent.click(themeToggle);
    expect(document.documentElement).toHaveClass('dark');
  });

  it('persists theme preference to localStorage', async () => {
    render(<Navigation />);
    const themeToggle = screen.getByRole('button', { name: /toggle theme/i });
    await userEvent.click(themeToggle);
    expect(localStorage.getItem('theme')).toBe('dark');
  });
});
```

### Property-Based Testing Strategy

**Configuration**:
- Minimum 100 iterations per property test (due to randomization)
- Each test tagged with: `Feature: mah-rahat-portfolio, Property {number}: {property_text}`
- Custom generators for domain types

**Custom Generators**:

```typescript
// Generators for property-based tests
import * as fc from 'fast-check';

const skillArbitrary = fc.record({
  name: fc.string({ minLength: 1, maxLength: 50 }),
  proficiency: fc.integer({ min: 0, max: 100 }),
  category: fc.constantFrom(...Object.values(SkillCategory)),
  yearsOfExperience: fc.option(fc.integer({ min: 0, max: 20 })),
});

const projectArbitrary = fc.record({
  id: fc.uuid(),
  name: fc.string({ minLength: 1, maxLength: 100 }),
  description: fc.string({ minLength: 10, maxLength: 200 }),
  longDescription: fc.string({ minLength: 50, maxLength: 500 }),
  category: fc.constantFrom(...Object.values(ProjectCategory)),
  technologies: fc.array(fc.string(), { minLength: 1, maxLength: 10 }),
  features: fc.array(fc.string(), { minLength: 1, maxLength: 5 }),
  imageUrl: fc.webUrl(),
  liveUrl: fc.option(fc.webUrl()),
  githubUrl: fc.option(fc.webUrl()),
  featured: fc.boolean(),
});

const experienceArbitrary = fc.record({
  id: fc.uuid(),
  title: fc.string({ minLength: 1, maxLength: 100 }),
  company: fc.string({ minLength: 1, maxLength: 100 }),
  location: fc.string({ minLength: 1, maxLength: 100 }),
  startDate: fc.date().map(d => d.toISOString().split('T')[0]),
  endDate: fc.oneof(
    fc.date().map(d => d.toISOString().split('T')[0]),
    fc.constant('Present')
  ),
  description: fc.array(fc.string(), { minLength: 1, maxLength: 5 }),
  technologies: fc.option(fc.array(fc.string(), { minLength: 1, maxLength: 10 })),
});
```

**Example Property Tests**:

```typescript
// Feature: mah-rahat-portfolio, Property 6: Experience Chronological Ordering
describe('Experience Timeline Properties', () => {
  it('displays experiences in reverse chronological order', () => {
    fc.assert(
      fc.property(
        fc.array(experienceArbitrary, { minLength: 2, maxLength: 10 }),
        (experiences) => {
          const { container } = render(<Experience experiences={experiences} />);
          const displayedDates = Array.from(container.querySelectorAll('[data-testid="experience-date"]'))
            .map(el => el.textContent);
          
          // Verify dates are in descending order
          for (let i = 0; i < displayedDates.length - 1; i++) {
            const current = new Date(displayedDates[i]);
            const next = new Date(displayedDates[i + 1]);
            expect(current >= next).toBe(true);
          }
        }
      ),
      { numRuns: 100 }
    );
  });
});

// Feature: mah-rahat-portfolio, Property 7: Experience Data Completeness
describe('Experience Data Completeness', () => {
  it('displays all required fields for every experience', () => {
    fc.assert(
      fc.property(
        fc.array(experienceArbitrary, { minLength: 1, maxLength: 10 }),
        (experiences) => {
          const { container } = render(<Experience experiences={experiences} />);
          
          experiences.forEach(exp => {
            expect(screen.getByText(exp.title)).toBeInTheDocument();
            expect(screen.getByText(exp.company)).toBeInTheDocument();
            expect(screen.getByText(exp.location)).toBeInTheDocument();
            expect(screen.getByText(new RegExp(exp.startDate))).toBeInTheDocument();
          });
        }
      ),
      { numRuns: 100 }
    );
  });
});

// Feature: mah-rahat-portfolio, Property 11: Image Lazy Loading
describe('Image Lazy Loading', () => {
  it('applies lazy loading to all below-the-fold images', () => {
    fc.assert(
      fc.property(
        fc.array(projectArbitrary, { minLength: 3, maxLength: 10 }),
        (projects) => {
          const { container } = render(<Projects projects={projects} />);
          const images = container.querySelectorAll('img[data-below-fold="true"]');
          
          images.forEach(img => {
            expect(img).toHaveAttribute('loading', 'lazy');
          });
        }
      ),
      { numRuns: 100 }
    );
  });
});

// Feature: mah-rahat-portfolio, Property 22: Image Alt Text
describe('Image Accessibility', () => {
  it('ensures all images have descriptive alt text', () => {
    fc.assert(
      fc.property(
        fc.array(projectArbitrary, { minLength: 1, maxLength: 10 }),
        (projects) => {
          const { container } = render(<Projects projects={projects} />);
          const images = container.querySelectorAll('img');
          
          images.forEach(img => {
            const alt = img.getAttribute('alt');
            expect(alt).toBeTruthy();
            expect(alt.length).toBeGreaterThan(0);
            expect(alt).not.toBe('image'); // Not generic
          });
        }
      ),
      { numRuns: 100 }
    );
  });
});

// Feature: mah-rahat-portfolio, Property 31: Proficiency Color Coding
describe('Skill Proficiency Visualization', () => {
  it('applies correct color coding based on proficiency level', () => {
    fc.assert(
      fc.property(
        fc.array(skillArbitrary, { minLength: 1, maxLength: 20 }),
        (skills) => {
          const { container } = render(<Skills skills={skills} />);
          
          skills.forEach(skill => {
            const indicator = container.querySelector(`[data-skill="${skill.name}"] .proficiency-indicator`);
            const computedColor = window.getComputedStyle(indicator).backgroundColor;
            
            if (skill.proficiency >= 90) {
              expect(computedColor).toMatch(/expert-color/); // Expert color
            } else if (skill.proficiency >= 75) {
              expect(computedColor).toMatch(/advanced-color/); // Advanced color
            } else if (skill.proficiency >= 60) {
              expect(computedColor).toMatch(/intermediate-color/); // Intermediate color
            }
          });
        }
      ),
      { numRuns: 100 }
    );
  });
});
```

### Test Coverage Goals

- **Unit Test Coverage**: Minimum 80% code coverage
- **Property Test Coverage**: All 50 correctness properties implemented
- **Critical Path Coverage**: 100% coverage of user-critical flows (navigation, contact form, project viewing)
- **Accessibility Coverage**: All WCAG AA criteria tested

### Continuous Integration

**CI Pipeline**:
1. Run linter (ESLint) and formatter (Prettier)
2. Run TypeScript type checking
3. Run unit tests with coverage report
4. Run property-based tests (100 iterations each)
5. Build production bundle
6. Run Lighthouse CI for performance metrics
7. Deploy preview to Vercel/Netlify

**Quality Gates**:
- All tests must pass
- Code coverage >= 80%
- No TypeScript errors
- Lighthouse scores: Performance >= 90, Accessibility >= 95, Best Practices >= 90, SEO >= 95

### Manual Testing Checklist

**Cross-Browser Testing**:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

**Responsive Testing**:
- [ ] Mobile (320px - 767px)
- [ ] Tablet (768px - 1023px)
- [ ] Desktop (1024px - 1920px)
- [ ] Large Desktop (> 1920px)

**Accessibility Testing**:
- [ ] Keyboard-only navigation
- [ ] Screen reader (NVDA/JAWS/VoiceOver)
- [ ] Color contrast verification
- [ ] Focus indicators visible
- [ ] ARIA labels present

**Performance Testing**:
- [ ] Lighthouse audit (all pages)
- [ ] WebPageTest analysis
- [ ] Network throttling (3G, 4G)
- [ ] Animation frame rate monitoring

**User Acceptance Testing**:
- [ ] All content displays correctly
- [ ] All links work
- [ ] Contact form sends emails
- [ ] GitHub data loads
- [ ] Dark mode works
- [ ] Animations are smooth
- [ ] No console errors

