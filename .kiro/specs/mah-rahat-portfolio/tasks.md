# Implementation Plan: MAH Rahat Portfolio Website (MERN Stack)

## Overview

This implementation plan breaks down the development of the MAH Rahat portfolio website into discrete, actionable tasks. The project uses the MERN stack (MongoDB, Express.js, React.js, Node.js) with TypeScript throughout. Tasks are organized to build incrementally, with testing integrated throughout the development process.

## Tasks

- [x] 1. Project Setup and Configuration
  - Initialize monorepo structure with client and server directories
  - Set up package.json files for root, client, and server
  - Configure TypeScript for both frontend and backend
  - Set up Vite for frontend build tooling
  - Configure Tailwind CSS with custom theme colors
  - Set up ESLint and Prettier for code quality
  - Create .env.example files with required environment variables
  - Initialize Git repository and create .gitignore
  - _Requirements: All requirements (foundation)_

- [x] 2. Backend Foundation
  - [x] 2.1 Set up Express server with TypeScript
    - Create server.ts with Express app initialization
    - Configure middleware (cors, helmet, morgan, express.json)
    - Set up error handling middleware
    - Configure port and basic routes
    - _Requirements: 7.4, 7.5, 7.6_

  - [x] 2.2 Configure MongoDB connection
    - Create database.ts with Mongoose connection logic
    - Implement connection retry with exponential backoff
    - Add connection event handlers (connected, disconnected, error)
    - Create environment variable validation
    - _Requirements: 7.4_

  - [x] 2.3 Create Contact model and schema
    - Define Mongoose schema for contact submissions
    - Add validation rules (required fields, max lengths, email format)
    - Create indexes for efficient querying
    - Add timestamps (createdAt, updatedAt)
    - _Requirements: 7.1, 7.2, 7.3, 7.4_

  - [x] 2.4 Implement contact controller and routes
    - Create contactController with submitContact function
    - Add express-validator middleware for input validation
    - Implement rate limiting (5 requests per 15 minutes)
    - Create POST /api/contact route
    - _Requirements: 7.2, 7.3, 7.4_

  - [x] 2.5 Set up Nodemailer email service
    - Create emailService.ts with transporter configuration
    - Implement sendContactEmail function
    - Create HTML email template
    - Add error handling for email failures
    - _Requirements: 7.4, 7.5, 7.6_

  - [ ]* 2.6 Write unit tests for backend
    - Test contact controller validation logic
    - Test email service with mock transporter
    - Test rate limiter middleware
    - Test error handler middleware
    - _Requirements: 7.2, 7.3, 7.4, 7.5, 7.6_

- [x] 3. Frontend Foundation and Layout
  - [x] 3.1 Create React app structure with TypeScript
    - Set up main.tsx and App.tsx
    - Configure React Router (if needed)
    - Create folder structure (components, hooks, contexts, utils, types)
    - Set up Tailwind CSS globals and custom styles
    - _Requirements: All requirements (foundation)_

  - [x] 3.2 Define TypeScript interfaces and types
    - Create types/index.ts with all interfaces (PersonalInfo, Skill, Project, Experience, etc.)
    - Define enums (SkillCategory, ProjectCategory)
    - Export all types for use across components
    - _Requirements: All requirements (type safety)_

  - [x] 3.3 Create data configuration files
    - Create data/personal.ts with MAH Rahat's information
    - Create data/skills.ts with all technical skills
    - Create data/experience.ts with work history
    - Create data/projects.ts with project details
    - Create data/education.ts with educational background
    - _Requirements: 1.1, 1.2, 2.1, 2.2, 2.3, 3.1-3.4, 4.3, 5.1, 5.3-5.5, 6.1-6.3_

  - [x] 3.4 Create Theme Context for dark mode
    - Implement ThemeContext with light/dark mode state
    - Create useTheme custom hook
    - Add localStorage persistence for theme preference
    - Implement system preference detection (prefers-color-scheme)
    - Add CSS variables for theme colors
    - _Requirements: 15.1-15.6_

  - [x] 3.5 Create common reusable components
    - Create Button component with variants and animations
    - Create Card component with hover effects
    - Create Section component with consistent spacing
    - Create AnimatedText component with entrance animations
    - _Requirements: All requirements (reusable UI)_

  - [ ]* 3.6 Write property test for theme persistence
    - **Property 25: Dark Mode Contrast**
    - **Validates: Requirements 15.3**

- [x] 4. Navigation and Layout Components
  - [x] 4.1 Implement Navigation component
    - Create fixed navigation bar with logo and links
    - Implement active section highlighting with Intersection Observer
    - Add smooth scroll to section on link click
    - Create mobile hamburger menu with slide-in animation
    - Add theme toggle button
    - _Requirements: 9.1-9.5, 15.1_

  - [x] 4.2 Implement ScrollProgressBar component
    - Create progress bar that fills based on scroll position
    - Calculate scroll percentage (0% at top, 100% at bottom)
    - Apply fixed positioning at top of viewport
    - _Requirements: 27.1-27.5_

  - [x] 4.3 Implement BackToTop button
    - Show button when scrolled down more than 500px
    - Implement smooth scroll to top on click
    - Hide button with fade-out when near top
    - Position in bottom-right corner
    - _Requirements: 28.1-28.5_

  - [x] 4.4 Implement Footer component
    - Display copyright information
    - Add social media links
    - Include quick navigation links
    - _Requirements: 2.3, 2.4, 26.1_

  - [ ]* 4.5 Write property tests for navigation
    - **Property 1: Navigation Link Scrolling**
    - **Property 2: Active Section Highlighting**
    - **Property 45: Scroll Progress Accuracy**
    - **Validates: Requirements 1.5, 9.2, 9.3, 27.2_

- [x] 5. Hero Section with Animations
  - [x] 5.1 Create ParticleBackground component
    - Implement canvas-based particle system
    - Add mouse parallax effect
    - Ensure particles don't interfere with text readability
    - Respect prefers-reduced-motion setting
    - _Requirements: 17.1, 17.2, 17.5, 17.6_

  - [x] 5.2 Create TypingAnimation component
    - Implement typing effect that cycles through roles
    - Add realistic typing speed with variable delays
    - Include blinking cursor effect
    - Pause for 2 seconds between role changes
    - _Requirements: 18.1-18.5_

  - [x] 5.3 Implement Hero section
    - Display full name and animated roles
    - Add fade-in animations for text elements
    - Create CTA buttons (View Projects, Contact Me)
    - Add social media links with icons
    - Include Download Resume button
    - _Requirements: 1.1-1.5, 2.3, 2.4, 24.1-24.4_

  - [ ]* 5.4 Write property tests for Hero animations
    - **Property 5: Viewport Animation Triggers**
    - **Property 27: Parallax Mouse Movement**
    - **Validates: Requirements 10.1, 17.2_

- [x] 6. About and Statistics Sections
  - [x] 6.1 Implement About section
    - Display location, email, and phone information
    - Add professional bio/summary
    - Include profile image with animations
    - Display contact methods with icons
    - _Requirements: 2.1, 2.2, 2.5_

  - [x] 6.2 Create Statistics component with animated counters
    - Display key metrics (Years of Experience, Projects Completed, etc.)
    - Implement counter animation from 0 to target value
    - Trigger animation when section enters viewport
    - Use easing functions for smooth counting
    - Add icons for each statistic
    - _Requirements: 21.1-21.5_

  - [ ]* 6.3 Write property tests for statistics
    - **Property 36: Statistics Counter Animation**
    - **Property 37: Statistics Icon Display**
    - **Validates: Requirements 21.3, 21.4, 21.5_

- [x] 7. Skills Section with Visualizations
  - [x] 7.1 Implement Skills component
    - Group skills by category (Programming, Web Tech, AI & Data, Tools, etc.)
    - Display each skill with name and proficiency level
    - Create animated progress bars or circular indicators
    - Implement color coding based on proficiency (expert, advanced, intermediate)
    - Add hover tooltips with additional information
    - _Requirements: 3.1-3.6, 19.1-19.5_

  - [x] 7.2 Add skill proficiency animations
    - Trigger animations when skills section enters viewport
    - Animate proficiency indicators from 0% to target value
    - Use staggered animations for multiple skills
    - _Requirements: 3.5, 19.2_

  - [ ]* 7.3 Write property tests for skills
    - **Property 4: Skills Category Grouping**
    - **Property 29: Skill Proficiency Visualization**
    - **Property 30: Proficiency Animation on Viewport Entry**
    - **Property 31: Proficiency Color Coding**
    - **Property 32: Skill Hover Information**
    - **Validates: Requirements 3.6, 19.1, 19.2, 19.3, 19.4_

- [x] 8. Experience Timeline
  - [x] 8.1 Implement Experience component
    - Create vertical timeline with connecting line
    - Display timeline dots/nodes for each position
    - Show job title, company, location, and date range
    - Add description and technologies for each position
    - Implement alternating left/right layout on desktop
    - _Requirements: 4.1-4.5_

  - [x] 8.2 Add timeline animations
    - Animate timeline items with sequential reveal effects
    - Use staggered animations for multiple items
    - Trigger animations when section enters viewport
    - _Requirements: 4.4_

  - [ ]* 8.3 Write property tests for experience
    - **Property 6: Experience Chronological Ordering**
    - **Property 7: Experience Data Completeness**
    - **Validates: Requirements 4.1, 4.2_

- [x] 9. Projects Showcase
  - [x] 9.1 Implement Projects component
    - Create project cards with image, title, description, and tech stack
    - Add filter buttons for project categories (All, AI/ML, Full-Stack, Web Dev)
    - Implement 3D tilt effect on hover
    - Display project links (live demo, GitHub) when available
    - Add lazy loading for project images
    - _Requirements: 5.1-5.10_

  - [x] 9.2 Add project filtering and animations
    - Implement filter state management
    - Animate layout changes when filter is applied
    - Use Framer Motion's LayoutGroup for smooth transitions
    - _Requirements: 5.8, 5.9_

  - [ ]* 9.3 Write property tests for projects
    - **Property 8: Project Data Completeness**
    - **Property 9: Project Hover Effects**
    - **Property 10: Conditional Project Links**
    - **Property 11: Image Lazy Loading**
    - **Validates: Requirements 5.2, 5.6, 5.7, 5.10, 11.2_

- [x] 10. AI/ML Showcase Section
  - [x] 10.1 Create NeuralNetworkVisualization component
    - Implement SVG-based neural network diagram
    - Add animated connections with flowing particles
    - Trigger animations when section enters viewport
    - _Requirements: 16.2, 16.3_

  - [x] 10.2 Create CodeSnippet component
    - Implement syntax highlighting with Prism.js
    - Add "Copy Code" button for each snippet
    - Display programming language label
    - Show confirmation message when code is copied
    - _Requirements: 16.5, 30.1-30.6_

  - [x] 10.3 Implement AIShowcase section
    - Display AI/ML expertise highlights
    - Show AI-specific skills with proficiency indicators
    - Include code examples from different domains (Python, JavaScript)
    - Display metrics or achievements related to AI projects
    - _Requirements: 16.1-16.6_

  - [ ]* 10.4 Write property tests for code snippets
    - **Property 26: Code Snippet Syntax Highlighting**
    - **Property 48: Code Snippet Copy Button**
    - **Property 49: Code Copy Feedback**
    - **Property 50: Code Language Label**
    - **Validates: Requirements 16.5, 30.3, 30.4, 30.5, 30.6_

- [x] 11. Education and GitHub Integration
  - [x] 11.1 Implement Education section
    - Display current education (BRAC University)
    - Show previous education (Dhaka College, Ideal School)
    - Display achievements and certifications
    - Add fade-in animations when section enters viewport
    - _Requirements: 6.1-6.4_

  - [x] 11.2 Create GitHub Integration component
    - Fetch GitHub data using GitHub API
    - Display statistics (repos, stars, followers, contributions)
    - Show pinned repositories with descriptions and tech tags
    - Implement loading skeleton while fetching
    - Add error handling with fallback to cached data
    - Cache data in localStorage with 5-minute expiry
    - _Requirements: 25.1-25.6_

  - [ ]* 11.3 Write unit tests for GitHub integration
    - Test API call with mock responses
    - Test loading state display
    - Test error handling and fallback
    - Test cache expiry logic
    - _Requirements: 25.3, 25.4, 25.5_

- [x] 12. Contact Form with Backend Integration
  - [x] 12.1 Create API service for frontend
    - Set up Axios instance with base URL
    - Create contactAPI.submit function
    - Add request/response interceptors
    - Implement timeout handling
    - _Requirements: 7.4_

  - [x] 12.2 Implement Contact form component
    - Create form with fields: name, email, subject, message
    - Implement React Hook Form for form management
    - Add Zod schema for validation
    - Display real-time validation errors
    - Show loading state during submission
    - Display success/error toast notifications
    - _Requirements: 7.1-7.6_

  - [x] 12.3 Add contact methods section
    - Display email, phone, and social media links
    - Implement "Copy Email" button with clipboard API
    - Show "Copied!" confirmation message
    - Add hover animations to social icons
    - _Requirements: 26.1-26.6_

  - [ ]* 12.4 Write property tests for form validation
    - **Property 12: Form Field Validation**
    - **Property 13: Email Format Validation**
    - **Property 14: Form Submission API Call**
    - **Validates: Requirements 7.2, 7.3, 7.4_

- [x] 13. Accessibility Implementation
  - [x] 13.1 Add semantic HTML and ARIA labels
    - Use semantic elements (header, nav, main, section, footer)
    - Add ARIA labels to icon-only buttons
    - Ensure all images have descriptive alt text
    - Add aria-live regions for dynamic content
    - _Requirements: 14.1, 14.2, 14.4_

  - [x] 13.2 Implement keyboard navigation
    - Ensure all interactive elements are keyboard accessible
    - Add visible focus indicators
    - Maintain logical tab order
    - Implement keyboard shortcuts for navigation (optional)
    - _Requirements: 14.3, 14.5, 14.6_

  - [x] 13.3 Ensure color contrast compliance
    - Verify all text meets WCAG AA contrast ratios (4.5:1)
    - Test both light and dark modes
    - Adjust colors if needed
    - _Requirements: 12.6, 15.3_

  - [ ]* 13.4 Write property tests for accessibility
    - **Property 18: Color Contrast Accessibility**
    - **Property 19: Semantic HTML Structure**
    - **Property 20: ARIA Labels for Icon Buttons**
    - **Property 21: Keyboard Focus Indicators**
    - **Property 22: Image Alt Text**
    - **Property 23: Keyboard Navigation Support**
    - **Property 24: Logical Tab Order**
    - **Validates: Requirements 12.6, 14.1, 14.2, 14.3, 14.4, 14.5, 14.6_

- [x] 14. Responsive Design and Mobile Optimization
  - [x] 14.1 Implement responsive breakpoints
    - Configure Tailwind breakpoints (mobile < 768px, tablet 768-1024px, desktop > 1024px)
    - Apply responsive classes to all components
    - Test layouts at all breakpoints
    - _Requirements: 8.1-8.3_

  - [x] 14.2 Create mobile navigation
    - Implement hamburger menu icon
    - Create slide-in mobile menu with animations
    - Ensure menu closes on link click
    - _Requirements: 8.4, 8.5_

  - [x] 14.3 Optimize touch targets for mobile
    - Ensure all interactive elements are at least 44x44px
    - Add appropriate spacing between touch targets
    - Test on actual mobile devices
    - _Requirements: 8.7_

  - [ ]* 14.4 Write property test for touch targets
    - **Property 15: Touch Target Sizing**
    - **Validates: Requirements 8.7_

- [x] 15. Animation System and Performance
  - [x] 15.1 Create animation utilities
    - Define reusable Framer Motion variants (fadeIn, slideUp, staggerContainer, scaleIn)
    - Create useIntersectionObserver hook for viewport detection
    - Implement prefers-reduced-motion detection
    - _Requirements: 10.1-10.5_

  - [x] 15.2 Implement custom cursor effects (optional)
    - Create custom cursor component with trailing effect
    - Change cursor appearance on interactive elements
    - Add click ripple effects
    - Disable on touch devices
    - _Requirements: 29.1-29.5_

  - [x] 15.3 Optimize animation performance
    - Use CSS transforms instead of position changes
    - Apply will-change sparingly
    - Implement frame rate monitoring
    - Simplify animations on low-end devices
    - _Requirements: 10.3, 10.4, 11.5_

  - [ ]* 15.4 Write property tests for animations
    - **Property 16: Hover Transition Timing**
    - **Property 17: Animation Easing**
    - **Property 46: Interactive Element Cursor Change**
    - **Property 47: Click Ripple Effect**
    - **Validates: Requirements 10.2, 10.3, 29.2, 29.3_

- [x] 16. SEO and Metadata
  - [x] 16.1 Add meta tags and Open Graph
    - Set page title: "MAH Rahat - Full-Stack AI Engineer | Portfolio"
    - Add meta description
    - Include Open Graph tags for social sharing
    - Add Twitter Card meta tags
    - _Requirements: 13.1-13.3_

  - [x] 16.2 Implement structured data
    - Add JSON-LD schema for Person
    - Include relevant properties (name, jobTitle, url, sameAs, etc.)
    - Validate with Google's Structured Data Testing Tool
    - _Requirements: 13.4_

  - [x] 16.3 Create sitemap and robots.txt
    - Generate sitemap.xml
    - Create robots.txt allowing all crawlers
    - Add sitemap reference to robots.txt
    - _Requirements: 13.5, 13.6_

- [x] 17. Loading States and Error Handling
  - [x] 17.1 Create LoadingScreen component
    - Design custom loading animation with logo
    - Implement fade-out when content is loaded
    - Preload critical assets
    - _Requirements: 20.1, 20.4, 20.5_

  - [x] 17.2 Implement skeleton screens
    - Create skeleton components for GitHub data
    - Add skeleton for project images
    - Show skeletons during loading states
    - _Requirements: 20.3_

  - [x] 17.3 Add comprehensive error handling
    - Handle API errors with user-friendly messages
    - Implement retry logic for failed requests
    - Add error boundaries for React components
    - Log errors for monitoring
    - _Requirements: 7.5, 7.6, 25.5_

  - [ ]* 17.4 Write property tests for loading states
    - **Property 34: Loading State Placeholders**
    - **Property 35: Critical Asset Preloading**
    - **Validates: Requirements 20.3, 20.5_

- [ ] 18. Testing and Quality Assurance
  - [ ] 18.1 Set up testing infrastructure
    - Configure Vitest for unit and property tests
    - Set up React Testing Library
    - Install fast-check for property-based testing
    - Configure test coverage reporting
    - _Requirements: All requirements (testing foundation)_

  - [ ] 18.2 Write unit tests for components
    - Test Hero component rendering
    - Test Contact form validation
    - Test theme toggle functionality
    - Test navigation link behavior
    - Test responsive menu
    - _Requirements: All requirements (specific examples)_

  - [ ]* 18.3 Write remaining property-based tests
    - Implement custom generators for domain types
    - Write tests for all 50 correctness properties
    - Configure 100 iterations per property test
    - Tag each test with property number and description
    - _Requirements: All requirements (universal properties)_

  - [ ] 18.4 Run accessibility audits
    - Use axe-core for automated accessibility testing
    - Test with keyboard-only navigation
    - Verify color contrast ratios
    - Test with screen readers (NVDA, VoiceOver)
    - _Requirements: 14.1-14.6_

- [x] 19. Deployment and CI/CD
  - [x] 19.1 Set up MongoDB Atlas
    - Create MongoDB Atlas account and cluster
    - Configure database user and network access
    - Get connection string
    - Set up database indexes
    - _Requirements: 7.4_

  - [x] 19.2 Deploy backend to Railway/Render
    - Create account on Railway or Render
    - Configure environment variables
    - Deploy Express backend
    - Test API endpoints
    - _Requirements: 7.4_

  - [x] 19.3 Deploy frontend to Vercel/Netlify
    - Create account on Vercel or Netlify
    - Connect GitHub repository
    - Configure build settings (Vite)
    - Set environment variables (API URL)
    - Deploy and test
    - _Requirements: All requirements (deployment)_

  - [x] 19.4 Set up CI/CD pipeline
    - Create GitHub Actions workflow
    - Run linter and type checking
    - Run all tests with coverage
    - Build production bundle
    - Deploy on successful build
    - _Requirements: All requirements (automation)_

  - [x] 19.5 Configure custom domain and SSL
    - Purchase/configure custom domain
    - Set up DNS records
    - Enable SSL certificates
    - Test HTTPS access
    - _Requirements: All requirements (production)_

- [x] 20. Final Polish and Optimization
  - [x] 20.1 Optimize images and assets
    - Compress all images (WebP format)
    - Generate multiple sizes for responsive images
    - Add lazy loading to below-the-fold images
    - Optimize SVG files
    - _Requirements: 11.2, 11.4_

  - [x] 20.2 Run Lighthouse audits
    - Achieve Performance score >= 90
    - Achieve Accessibility score >= 95
    - Achieve Best Practices score >= 90
    - Achieve SEO score >= 95
    - Fix any issues identified
    - _Requirements: 11.1, 11.5_

  - [x] 20.3 Cross-browser testing
    - Test on Chrome, Firefox, Safari, Edge
    - Test on mobile browsers (iOS Safari, Chrome Mobile)
    - Fix any browser-specific issues
    - _Requirements: All requirements (compatibility)_

  - [x] 20.4 Final user acceptance testing
    - Verify all content displays correctly
    - Test all links and navigation
    - Submit test contact form
    - Verify email delivery
    - Test dark mode toggle
    - Check animations on different devices
    - _Requirements: All requirements (validation)_

- [x] 21. Checkpoint - Final Review
  - Ensure all tests pass (unit and property tests)
  - Verify all requirements are met
  - Check deployment is stable
  - Review with user for any final adjustments
  - _Requirements: All requirements_

## Notes

- Tasks marked with `*` are optional testing tasks and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Backend tasks (2.x) should be completed before frontend API integration (12.x)
- Testing tasks are integrated throughout to catch errors early
- Property tests validate universal correctness properties with 100 iterations each
- Deployment tasks (19.x) require accounts on third-party services
- Final optimization (20.x) ensures production-ready quality
