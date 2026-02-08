# Requirements Document

## Introduction

This document specifies the requirements for a modern, animated portfolio website for MAH Rahat (Ashraful Hossain Rahat), a Full-Stack AI Engineer. The website will showcase technical expertise, professional experience, and projects with a focus on engineering aesthetics rather than graphic design. The platform will feature smooth animations, a colorful yet professional design, and comprehensive information about skills, experience, and achievements.

## Glossary

- **Portfolio_System**: The complete web application that displays professional information
- **Hero_Section**: The landing page component with introduction and call-to-action
- **Skills_Visualizer**: Component that displays technical skills with interactive elements
- **Project_Showcase**: Component that displays project information with details and links
- **Experience_Timeline**: Component that displays work history in chronological order
- **Contact_Form**: Component that enables visitor communication
- **Animation_Engine**: System responsible for smooth transitions and micro-interactions
- **Responsive_Layout**: Design system that adapts to different screen sizes
- **Navigation_System**: Component that enables movement between sections
- **Contact_Form**: Component that enables visitor communication
- **Statistics_Counter**: Component that displays animated numerical achievements
- **Code_Showcase**: Component that displays syntax-highlighted code examples
- **GitHub_Integration**: System that fetches and displays GitHub activity data
- **Theme_System**: System that manages light/dark mode preferences
- **Visitor**: Any user accessing the portfolio website

## Requirements

### Requirement 1: Hero Section Display

**User Story:** As a visitor, I want to see a compelling introduction when I land on the portfolio, so that I immediately understand who MAH Rahat is and what he does.

#### Acceptance Criteria

1. WHEN a visitor loads the homepage, THE Hero_Section SHALL display the full name "Ashraful Hossain Rahat (MAH Rahat)"
2. WHEN the Hero_Section renders, THE Portfolio_System SHALL display the primary role "Full-Stack AI Engineer | Computer Vision Specialist"
3. WHEN the Hero_Section loads, THE Animation_Engine SHALL animate the text elements with smooth entrance transitions
4. WHEN the Hero_Section is visible, THE Portfolio_System SHALL display call-to-action buttons for "View Projects" and "Contact Me"
5. WHEN a visitor clicks a call-to-action button, THE Navigation_System SHALL scroll to the corresponding section smoothly

### Requirement 2: About Section Content

**User Story:** As a visitor, I want to learn about MAH Rahat's background and expertise, so that I can understand his professional profile.

#### Acceptance Criteria

1. THE Portfolio_System SHALL display location information "Dhaka, Bangladesh"
2. THE Portfolio_System SHALL display contact information including email "ahrahat.cse@gmail.com" and phone "+880 1791-441041"
3. THE Portfolio_System SHALL display social links for LinkedIn "linkedin.com/in/ah-rahat" and GitHub "github.com/MAH-Rahat"
4. WHEN a visitor clicks a social link, THE Portfolio_System SHALL open the link in a new browser tab
5. THE Portfolio_System SHALL display a professional summary highlighting AI/ML expertise and full-stack development capabilities

### Requirement 3: Skills Visualization

**User Story:** As a visitor, I want to see MAH Rahat's technical skills organized by category, so that I can quickly assess his technical capabilities.

#### Acceptance Criteria

1. THE Skills_Visualizer SHALL display programming languages: Python, JavaScript (ES6+), TypeScript, C, SQL, HTML5/CSS3
2. THE Skills_Visualizer SHALL display web technologies: MongoDB, Express.js, React.js, Node.js
3. THE Skills_Visualizer SHALL display AI & Data tools: TensorFlow, PyTorch, OpenCV, Pandas, NumPy, Scikit-learn, Keras, Matplotlib, Seaborn, Plotly
4. THE Skills_Visualizer SHALL display development tools: Git/GitHub, Adobe Creative Suite, Figma, Canva
5. WHEN a skill category enters the viewport, THE Animation_Engine SHALL animate the skill items with staggered entrance effects
6. THE Skills_Visualizer SHALL group skills into logical categories: Programming, Web Technologies, AI & Data, Tools, Languages, Soft Skills

### Requirement 4: Experience Timeline Display

**User Story:** As a visitor, I want to see MAH Rahat's work history in chronological order, so that I can understand his career progression.

#### Acceptance Criteria

1. THE Experience_Timeline SHALL display work experience in reverse chronological order (most recent first)
2. WHEN displaying each position, THE Experience_Timeline SHALL show job title, company name, location, and date range
3. THE Experience_Timeline SHALL display the following positions:
   - Web Developer at QuantaCraft Digital, Dhaka (2025)
   - Digital Marketing & Sales Executive at Stylescape & Bilipotro (2023-2024)
   - Sales Executive at Aarong (2023)
   - Senior Graphic Designer at Diggger, Chillox, Skillshikhun, North South Startup Next (2022-2023)
   - Graphic Designer at Chaaway (2021)
   - Project Debug at Nerv System BD (2020)
4. WHEN the Experience_Timeline enters the viewport, THE Animation_Engine SHALL animate timeline items with sequential reveal effects
5. THE Experience_Timeline SHALL use visual indicators (dots, lines, or cards) to represent the chronological flow

### Requirement 5: Project Showcase

**User Story:** As a visitor, I want to explore MAH Rahat's key projects with details and links, so that I can evaluate his practical work.

#### Acceptance Criteria

1. THE Project_Showcase SHALL display at least three key projects: EcoCycle, Shilpohaaat, and Journey-Partner
2. WHEN displaying each project, THE Project_Showcase SHALL show project name, description, technologies used, key features, and project category (AI/ML, Full-Stack, etc.)
3. FOR the EcoCycle project, THE Project_Showcase SHALL display: "Full-Stack Recycling Management Platform (MERN): Multi-role digital platform for urban recycling with gamification, impact tracking, and logistics"
4. FOR the Shilpohaaat project, THE Project_Showcase SHALL display: "E-commerce Platform: Built for local artisans with product management, user authentication, and responsive UI"
5. FOR the Journey-Partner project, THE Project_Showcase SHALL display: "GitHub Journey Partner: Web app for students to find travel companions, post requests, get fare estimates, interact with community (PHP + MySQL)"
6. WHEN a visitor hovers over a project card, THE Animation_Engine SHALL apply 3D tilt effects, scale transformations, and dynamic shadow transitions
7. WHERE project links are available, THE Project_Showcase SHALL display clickable buttons to view live demos or source code
8. THE Project_Showcase SHALL include filter buttons to sort projects by category (All, AI/ML, Full-Stack, Web Development)
9. WHEN a filter is selected, THE Animation_Engine SHALL animate the transition between filtered states with fade and slide effects
10. THE Project_Showcase SHALL display project screenshots or mockups with lazy loading

### Requirement 6: Education Information

**User Story:** As a visitor, I want to see MAH Rahat's educational background, so that I can understand his academic qualifications.

#### Acceptance Criteria

1. THE Portfolio_System SHALL display current education: "BRAC University - B.Sc. in Computer Science and Engineering (3rd Year, 2022-Present)"
2. THE Portfolio_System SHALL display previous education: "Dhaka College (2017-2019)" and "Ideal School and College (Foundation)"
3. THE Portfolio_System SHALL display achievements: "Leadership Training Certificate - Strategic Planning & Team Management (2023)" and "Participant, Prompt Engineering Competition - AI-integrated web solution"
4. WHEN the education section enters the viewport, THE Animation_Engine SHALL animate education items with fade-in effects

### Requirement 7: Contact Form Functionality

**User Story:** As a visitor, I want to send a message to MAH Rahat through the website, so that I can initiate communication easily.

#### Acceptance Criteria

1. THE Contact_Form SHALL display input fields for visitor name, email, subject, and message
2. WHEN a visitor submits the form with empty required fields, THE Contact_Form SHALL display validation error messages
3. WHEN a visitor enters an invalid email format, THE Contact_Form SHALL display an email validation error
4. WHEN a visitor submits a valid form, THE Portfolio_System SHALL send the message to "ahrahat.cse@gmail.com"
5. WHEN a message is successfully sent, THE Contact_Form SHALL display a success confirmation message
6. WHEN a message fails to send, THE Contact_Form SHALL display an error message and allow retry

### Requirement 8: Responsive Design

**User Story:** As a visitor using any device, I want the portfolio to display correctly on my screen size, so that I can access all content comfortably.

#### Acceptance Criteria

1. WHEN the viewport width is less than 768px, THE Responsive_Layout SHALL display a mobile-optimized layout
2. WHEN the viewport width is between 768px and 1024px, THE Responsive_Layout SHALL display a tablet-optimized layout
3. WHEN the viewport width is greater than 1024px, THE Responsive_Layout SHALL display a desktop-optimized layout
4. WHEN on mobile devices, THE Navigation_System SHALL display a hamburger menu icon
5. WHEN a visitor clicks the hamburger menu, THE Navigation_System SHALL display a mobile navigation menu with smooth slide-in animation
6. THE Responsive_Layout SHALL ensure all text remains readable across all screen sizes
7. THE Responsive_Layout SHALL ensure all interactive elements remain accessible and properly sized for touch on mobile devices

### Requirement 9: Navigation System

**User Story:** As a visitor, I want to navigate between different sections of the portfolio easily, so that I can find information quickly.

#### Acceptance Criteria

1. THE Navigation_System SHALL display a fixed navigation bar with links to: Home, About, Skills, Experience, Projects, Education, Contact
2. WHEN a visitor clicks a navigation link, THE Navigation_System SHALL scroll to the corresponding section with smooth scrolling animation
3. WHEN a section enters the viewport during scrolling, THE Navigation_System SHALL highlight the corresponding navigation link
4. WHEN the page is scrolled down, THE Navigation_System SHALL remain visible at the top of the viewport
5. THE Navigation_System SHALL display the portfolio logo or name on the left side of the navigation bar

### Requirement 10: Animation and Interaction System

**User Story:** As a visitor, I want to experience smooth animations and micro-interactions throughout the portfolio, so that the website feels modern and engaging.

#### Acceptance Criteria

1. WHEN any section enters the viewport for the first time, THE Animation_Engine SHALL trigger entrance animations for that section's content
2. WHEN a visitor hovers over interactive elements (buttons, links, cards), THE Animation_Engine SHALL apply hover state transitions within 200ms
3. THE Animation_Engine SHALL use easing functions for all animations to create natural motion
4. WHEN page transitions occur, THE Animation_Engine SHALL ensure animations complete without visual glitches
5. THE Animation_Engine SHALL respect user preferences for reduced motion when the prefers-reduced-motion media query is active

### Requirement 11: Performance Optimization

**User Story:** As a visitor, I want the portfolio to load quickly and perform smoothly, so that I have a seamless browsing experience.

#### Acceptance Criteria

1. WHEN a visitor loads the homepage, THE Portfolio_System SHALL achieve a First Contentful Paint (FCP) within 1.5 seconds on a standard 4G connection
2. THE Portfolio_System SHALL lazy-load images that are not in the initial viewport
3. THE Portfolio_System SHALL minify and bundle all CSS and JavaScript assets
4. THE Portfolio_System SHALL compress images to optimal sizes without visible quality loss
5. WHEN animations are running, THE Portfolio_System SHALL maintain a frame rate of at least 60 FPS on modern devices

### Requirement 12: Visual Design System

**User Story:** As a visitor, I want to see a cohesive, professional, and engineering-focused visual design, so that the portfolio clearly communicates technical expertise.

#### Acceptance Criteria

1. THE Portfolio_System SHALL use a colorful yet professional color palette with primary, secondary, and accent colors
2. THE Portfolio_System SHALL use typography that conveys technical professionalism (monospace fonts for code, clean sans-serif for body text)
3. THE Portfolio_System SHALL incorporate engineering-focused visual elements such as code snippets, terminal aesthetics, or data visualization motifs
4. THE Portfolio_System SHALL maintain consistent spacing, sizing, and alignment across all components
5. WHERE appropriate, THE Portfolio_System SHALL use subtle background patterns or gradients to add visual interest without overwhelming content
6. THE Portfolio_System SHALL ensure sufficient color contrast ratios (minimum 4.5:1 for normal text) for accessibility

### Requirement 13: SEO and Metadata

**User Story:** As MAH Rahat, I want my portfolio to be discoverable through search engines, so that potential employers and collaborators can find me.

#### Acceptance Criteria

1. THE Portfolio_System SHALL include a descriptive page title: "MAH Rahat - Full-Stack AI Engineer | Portfolio"
2. THE Portfolio_System SHALL include meta description: "Portfolio of Ashraful Hossain Rahat, a Full-Stack AI Engineer and Computer Vision Specialist from Dhaka, Bangladesh. Explore projects, skills, and experience in AI/ML and web development."
3. THE Portfolio_System SHALL include Open Graph meta tags for social media sharing with title, description, and image
4. THE Portfolio_System SHALL include structured data markup (JSON-LD) for Person schema
5. THE Portfolio_System SHALL generate a sitemap.xml file
6. THE Portfolio_System SHALL include a robots.txt file allowing all search engine crawlers

### Requirement 14: Accessibility

**User Story:** As a visitor with accessibility needs, I want to navigate and understand the portfolio using assistive technologies, so that I can access all information.

#### Acceptance Criteria

1. THE Portfolio_System SHALL include proper semantic HTML elements (header, nav, main, section, footer)
2. THE Portfolio_System SHALL include ARIA labels for all interactive elements that lack visible text
3. WHEN using keyboard navigation, THE Portfolio_System SHALL provide visible focus indicators for all focusable elements
4. THE Portfolio_System SHALL ensure all images include descriptive alt text
5. THE Portfolio_System SHALL support keyboard-only navigation for all interactive features
6. THE Portfolio_System SHALL maintain a logical tab order throughout the page

### Requirement 15: Dark Mode Support

**User Story:** As a visitor who prefers dark interfaces, I want to toggle dark mode, so that I can view the portfolio comfortably in low-light conditions.

#### Acceptance Criteria

1. THE Portfolio_System SHALL provide a dark mode toggle button in the navigation bar
2. WHEN a visitor clicks the dark mode toggle, THE Portfolio_System SHALL switch between light and dark color schemes within 300ms
3. WHEN dark mode is active, THE Portfolio_System SHALL use light text on dark backgrounds with appropriate contrast ratios
4. WHEN a visitor enables dark mode, THE Portfolio_System SHALL persist the preference in browser local storage
5. WHEN a visitor returns to the site, THE Portfolio_System SHALL apply the previously selected theme preference
6. WHERE the user has not set a preference, THE Portfolio_System SHALL respect the prefers-color-scheme media query

### Requirement 16: AI/ML Expertise Showcase

**User Story:** As a visitor interested in AI capabilities, I want to see specific demonstrations of MAH Rahat's AI/ML expertise, so that I can understand his technical depth in this domain.

#### Acceptance Criteria

1. THE Portfolio_System SHALL include an AI/ML expertise section highlighting Computer Vision, Deep Learning, and Data Science capabilities
2. THE Portfolio_System SHALL display interactive visualizations demonstrating AI concepts (neural network diagrams, data flow animations, or model architecture visualizations)
3. WHEN the AI expertise section enters the viewport, THE Animation_Engine SHALL animate neural network node connections with flowing particle effects
4. THE Portfolio_System SHALL display specific AI/ML technologies with proficiency indicators: TensorFlow, PyTorch, OpenCV, Scikit-learn, Keras
5. WHERE applicable, THE Portfolio_System SHALL include code snippets showcasing AI/ML implementations with syntax highlighting
6. THE Portfolio_System SHALL display metrics or achievements related to AI projects (model accuracy, dataset sizes, or performance improvements)

### Requirement 17: Interactive Background Effects

**User Story:** As a visitor, I want to experience dynamic background effects that respond to my interactions, so that the portfolio feels modern and engaging.

#### Acceptance Criteria

1. THE Portfolio_System SHALL display an animated particle system or geometric pattern in the hero section background
2. WHEN a visitor moves their mouse, THE Animation_Engine SHALL create subtle parallax effects on background elements
3. THE Portfolio_System SHALL use gradient animations that smoothly transition between colors
4. WHEN scrolling through sections, THE Animation_Engine SHALL apply different background effects appropriate to each section's theme
5. THE Portfolio_System SHALL ensure background effects do not interfere with text readability
6. WHEN the prefers-reduced-motion setting is active, THE Portfolio_System SHALL disable or minimize background animations

### Requirement 18: Typing Animation and Dynamic Text

**User Story:** As a visitor, I want to see dynamic text animations in the hero section, so that the introduction feels engaging and highlights multiple aspects of expertise.

#### Acceptance Criteria

1. WHEN the hero section loads, THE Animation_Engine SHALL display a typing animation effect for role descriptions
2. THE Portfolio_System SHALL rotate through multiple role descriptions: "Full-Stack AI Engineer", "Computer Vision Specialist", "MERN Stack Developer", "Machine Learning Engineer"
3. WHEN each role description completes typing, THE Animation_Engine SHALL pause for 2 seconds before deleting and typing the next description
4. THE Animation_Engine SHALL use realistic typing speed with variable delays between characters
5. THE Portfolio_System SHALL include a blinking cursor effect during the typing animation

### Requirement 19: Skill Proficiency Visualization

**User Story:** As a visitor, I want to see visual representations of skill proficiency levels, so that I can quickly understand expertise depth in different technologies.

#### Acceptance Criteria

1. THE Skills_Visualizer SHALL display proficiency levels for each skill using animated progress bars, circular progress indicators, or rating systems
2. WHEN the skills section enters the viewport, THE Animation_Engine SHALL animate proficiency indicators from 0% to their target values
3. THE Skills_Visualizer SHALL use different colors to represent proficiency categories (Expert: 90-100%, Advanced: 75-89%, Intermediate: 60-74%)
4. WHEN a visitor hovers over a skill item, THE Skills_Visualizer SHALL display additional information such as years of experience or related projects
5. THE Skills_Visualizer SHALL group related skills with visual connections or proximity

### Requirement 20: Smooth Page Transitions and Loading States

**User Story:** As a visitor, I want to experience smooth transitions between page states and clear loading indicators, so that the interface feels polished and responsive.

#### Acceptance Criteria

1. WHEN the portfolio initially loads, THE Portfolio_System SHALL display a custom loading animation with the portfolio logo or initials
2. THE Animation_Engine SHALL use page transition animations when navigating between sections
3. WHEN images or content are loading, THE Portfolio_System SHALL display skeleton screens or loading placeholders
4. WHEN all initial content is loaded, THE Animation_Engine SHALL fade out the loading screen and reveal the hero section
5. THE Portfolio_System SHALL preload critical assets to minimize loading delays

### Requirement 21: Interactive Statistics Counter

**User Story:** As a visitor, I want to see animated statistics about MAH Rahat's experience and achievements, so that I can quickly grasp his professional impact.

#### Acceptance Criteria

1. THE Portfolio_System SHALL display an achievements section with animated counters for key metrics
2. THE Portfolio_System SHALL include statistics such as: Years of Experience, Projects Completed, Technologies Mastered, GitHub Contributions
3. WHEN the statistics section enters the viewport, THE Animation_Engine SHALL animate counters from 0 to their target values over 2 seconds
4. THE Animation_Engine SHALL use easing functions to create smooth counting animations
5. THE Portfolio_System SHALL display icons or visual elements accompanying each statistic

### Requirement 22: Testimonials or Recommendations Section

**User Story:** As a visitor, I want to see testimonials or recommendations from colleagues or clients, so that I can understand MAH Rahat's professional reputation.

#### Acceptance Criteria

1. WHERE testimonials are available, THE Portfolio_System SHALL display a testimonials section with quotes and attribution
2. WHEN displaying testimonials, THE Portfolio_System SHALL show the recommender's name, role, and company
3. THE Portfolio_System SHALL implement a carousel or slider for multiple testimonials with smooth transition animations
4. WHEN a visitor interacts with testimonial navigation, THE Animation_Engine SHALL slide or fade between testimonials
5. THE Portfolio_System SHALL auto-advance testimonials every 5 seconds unless the visitor manually navigates

### Requirement 23: Blog or Articles Section

**User Story:** As a visitor interested in MAH Rahat's insights, I want to see links to blog posts or articles, so that I can explore his technical writing and thought leadership.

#### Acceptance Criteria

1. WHERE blog content exists, THE Portfolio_System SHALL display a blog/articles section with recent posts
2. WHEN displaying blog posts, THE Portfolio_System SHALL show post title, excerpt, publication date, and featured image
3. THE Portfolio_System SHALL display at least 3 recent blog posts with "View All" link if more exist
4. WHEN a visitor clicks a blog post, THE Portfolio_System SHALL navigate to the full article
5. THE Portfolio_System SHALL include tags or categories for blog posts (AI/ML, Web Development, Tutorials, etc.)

### Requirement 24: Download Resume Functionality

**User Story:** As a recruiter or potential employer, I want to download MAH Rahat's resume, so that I can review his qualifications offline.

#### Acceptance Criteria

1. THE Portfolio_System SHALL display a "Download Resume" button in the hero section and contact section
2. WHEN a visitor clicks the download button, THE Portfolio_System SHALL initiate download of a PDF resume file
3. THE Portfolio_System SHALL display a download icon and clear label on the resume button
4. WHEN hovering over the download button, THE Animation_Engine SHALL apply scale and color transition effects
5. THE Portfolio_System SHALL track resume downloads using analytics (if analytics are implemented)

### Requirement 25: Social Proof and GitHub Integration

**User Story:** As a visitor evaluating technical skills, I want to see live GitHub activity and contribution data, so that I can verify active development work.

#### Acceptance Criteria

1. THE Portfolio_System SHALL display a GitHub contribution graph or activity feed
2. THE Portfolio_System SHALL show GitHub statistics: total repositories, stars received, followers, and contribution streak
3. WHEN the GitHub section loads, THE Portfolio_System SHALL fetch live data from the GitHub API
4. WHEN GitHub data is loading, THE Portfolio_System SHALL display loading placeholders
5. IF the GitHub API request fails, THE Portfolio_System SHALL display cached or fallback data
6. THE Portfolio_System SHALL display pinned repositories with descriptions and technology tags

### Requirement 26: Contact Methods and Social Links

**User Story:** As a visitor wanting to connect, I want multiple ways to reach MAH Rahat, so that I can choose my preferred communication method.

#### Acceptance Criteria

1. THE Portfolio_System SHALL display social media icons with links to LinkedIn, GitHub, email, and phone
2. WHEN a visitor clicks the email icon, THE Portfolio_System SHALL open the default email client with "ahrahat.cse@gmail.com" pre-filled
3. WHEN a visitor clicks the phone icon, THE Portfolio_System SHALL initiate a phone call to "+880 1791-441041" on mobile devices
4. THE Portfolio_System SHALL display social icons with hover animations (color change, scale, or rotation)
5. THE Portfolio_System SHALL include a "Copy Email" button that copies the email address to clipboard
6. WHEN email is copied, THE Portfolio_System SHALL display a temporary "Copied!" confirmation message

### Requirement 27: Scroll Progress Indicator

**User Story:** As a visitor, I want to see my progress through the portfolio, so that I know how much content remains.

#### Acceptance Criteria

1. THE Portfolio_System SHALL display a scroll progress bar at the top of the viewport
2. WHEN a visitor scrolls down the page, THE Portfolio_System SHALL update the progress bar to reflect scroll position
3. THE progress bar SHALL fill from 0% at the top of the page to 100% at the bottom
4. THE Portfolio_System SHALL use a visually distinct color for the progress bar that complements the design
5. THE progress bar SHALL remain visible and fixed at the top during scrolling

### Requirement 28: Back to Top Button

**User Story:** As a visitor who has scrolled down, I want a quick way to return to the top, so that I can easily navigate back to the beginning.

#### Acceptance Criteria

1. WHEN a visitor scrolls down more than 500 pixels, THE Portfolio_System SHALL display a "Back to Top" button
2. WHEN a visitor clicks the back to top button, THE Navigation_System SHALL smoothly scroll to the top of the page
3. WHEN scrolling back up past 500 pixels, THE Portfolio_System SHALL hide the back to top button with fade-out animation
4. THE back to top button SHALL be positioned in the bottom-right corner of the viewport
5. THE Animation_Engine SHALL apply hover effects to the back to top button (scale, color change, or shadow)

### Requirement 29: Cursor Effects and Micro-interactions

**User Story:** As a visitor, I want to experience custom cursor effects and micro-interactions, so that the portfolio feels premium and interactive.

#### Acceptance Criteria

1. WHERE appropriate for the design, THE Portfolio_System SHALL implement a custom cursor with a trailing effect or glow
2. WHEN hovering over interactive elements, THE Animation_Engine SHALL change the cursor appearance to indicate interactivity
3. WHEN clicking anywhere on the page, THE Animation_Engine SHALL create a ripple or particle effect at the click location
4. THE Portfolio_System SHALL ensure custom cursor effects do not interfere with usability
5. WHEN on touch devices, THE Portfolio_System SHALL disable custom cursor effects

### Requirement 30: Code Snippet Showcase

**User Story:** As a technical visitor, I want to see code examples demonstrating MAH Rahat's coding style and expertise, so that I can evaluate code quality.

#### Acceptance Criteria

1. THE Portfolio_System SHALL include a code showcase section with syntax-highlighted code snippets
2. THE Portfolio_System SHALL display code examples from different domains: AI/ML (Python), Web Development (JavaScript/React), Backend (Node.js)
3. WHEN displaying code snippets, THE Portfolio_System SHALL use proper syntax highlighting with a theme matching the overall design
4. THE Portfolio_System SHALL include a "Copy Code" button for each code snippet
5. WHEN a visitor clicks copy code, THE Portfolio_System SHALL copy the code to clipboard and display confirmation
6. THE Portfolio_System SHALL display the programming language label for each code snippet
