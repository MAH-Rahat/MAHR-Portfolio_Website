// API Configuration
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// GitHub Configuration
export const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME || 'MAH-Rahat';
export const GITHUB_API_URL = 'https://api.github.com';

// Navigation Sections
export const NAV_SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'ai-showcase', label: 'AI & ML' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' }
];

// Animation Durations (ms)
export const ANIMATION_DURATION = {
  fast: 200,
  normal: 300,
  slow: 600
};

// Breakpoints (matches Tailwind)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
};

// Theme Colors
export const COLORS = {
  primary: {
    light: '#0ea5e9',
    dark: '#0284c7'
  },
  secondary: {
    light: '#d946ef',
    dark: '#c026d3'
  },
  accent: {
    light: '#f59e0b',
    dark: '#d97706'
  }
};

// Cache Duration (ms)
export const CACHE_DURATION = {
  github: 5 * 60 * 1000, // 5 minutes
  general: 10 * 60 * 1000 // 10 minutes
};
