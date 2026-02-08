# 🎨 AH Rahat Portfolio Website

Modern, animated portfolio website for AH Rahat - Full-Stack AI Engineer & Computer Vision Specialist.

[![React](https://img.shields.io/badge/React-18+-61DAFB?logo=react)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?logo=mongodb)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

## ✨ Features

- 🎨 **Modern Design** - Clean, professional, and colorful
- 🌙 **Dark Mode** - Full dark mode support with persistence
- 📱 **Fully Responsive** - Perfect on mobile, tablet, and desktop
- ⚡ **Smooth Animations** - Framer Motion throughout
- 📧 **Working Contact Form** - Backend integration with email
- 🔍 **SEO Optimized** - Meta tags, structured data, sitemap
- ♿ **Accessible** - Semantic HTML, ARIA labels, keyboard navigation
- 🚀 **Fast Performance** - Optimized loading and code splitting
- 🔗 **GitHub Integration** - Live stats from GitHub API
- 🎯 **Project Showcase** - Enhanced visual effects and animations
- 🎮 **Interactive Game** - Hidden Snake game accessible via rocket button

## 📸 Preview

Visit the live site: [Coming Soon]

## 📚 Documentation

- **[QUICKSTART.md](./QUICKSTART.md)** - Get started in 5 minutes
- **[SETUP.md](./SETUP.md)** - Detailed setup instructions
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Deploy to production
- **[TROUBLESHOOTING.md](./TROUBLESHOOTING.md)** - Common issues and solutions
- **[PROJECT_COMPLETE.md](./PROJECT_COMPLETE.md)** - Feature overview
- **[FINAL_STATUS.md](./FINAL_STATUS.md)** - Project status report

## 🚀 Tech Stack

### Frontend (Client)
- React 18+ with JavaScript (ES6+)
- Vite for build tooling
- Tailwind CSS for styling
- Framer Motion for animations
- Axios for API calls
- React Hook Form for form validation

### Backend (Server)
- Node.js 18+ with Express.js
- JavaScript (ES6+ with ES Modules)
- MongoDB Atlas with Mongoose
- Nodemailer for email functionality
- Express Validator for validation
- Helmet for security

## 📁 Project Structure

```
mah-rahat-portfolio/
├── client/          # React frontend
├── server/          # Express backend
├── package.json     # Root package.json with scripts
└── README.md
```

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm run install:all
```

### 2. Configure Environment Variables

**Client** (`client/.env`):
```env
VITE_API_URL=http://localhost:5000/api
VITE_GITHUB_USERNAME=MAH-Rahat
```

**Server** (`server/.env`):
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=your_mongodb_connection_string
EMAIL_USER=ashrafulhossainrahat@gmail.com
EMAIL_PASSWORD=your_gmail_app_password
CLIENT_URL=http://localhost:5173
```

### 3. Start Development Servers
```bash
npm run dev
```

Visit:
- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:5000

📖 **Need help?** See [QUICKSTART.md](./QUICKSTART.md) for detailed instructions.

## 👨‍💻 Author

**AH Rahat (Ashraful Hossain Rahat)**
- Email: ashrafulhossainrahat@gmail.com
- LinkedIn: [linkedin.com/in/ah-rahat](https://linkedin.com/in/ah-rahat)
- GitHub: [github.com/MAH-Rahat](https://github.com/MAH-Rahat)

## 📄 License

MIT License - feel free to use this project for your own portfolio!

## 🎨 Customization

### Update Personal Information

Edit files in `client/src/data/`:
- `personal.js` - Name, bio, contact, statistics
- `skills.js` - Technical skills and proficiency
- `experience.js` - Work history
- `projects.js` - Project showcase
- `education.js` - Academic background

### Change Theme Colors

Edit `client/tailwind.config.js`:
```js
colors: {
  primary: colors.blue,    // Your primary color
  secondary: colors.purple, // Your secondary color
  accent: colors.orange,    // Your accent color
}
```

### Add Assets

- **Project Images**: `client/public/assets/projects/`
- **Resume PDF**: `client/public/assets/MAH_Rahat_Resume.pdf`
- **Favicon**: Replace `client/public/vite.svg`
- **OG Image**: `client/public/og-image.jpg`

## 📦 Available Scripts

### Root Level
```bash
npm run install:all    # Install all dependencies
npm run dev           # Start both client and server
npm run dev:client    # Start frontend only
npm run dev:server    # Start backend only
```

### Client
```bash
cd client
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
```

### Server
```bash
cd server
npm run dev          # Start with nodemon
npm start            # Start production server
```

## 🚀 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

**Quick Deploy**:
- **Frontend**: Vercel or Netlify
- **Backend**: Railway or Render
- **Database**: MongoDB Atlas (free tier)

## 🐛 Troubleshooting

Having issues? Check [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) for solutions.

**Common Issues**:
- Port already in use
- MongoDB connection errors
- Email not sending
- CORS errors

## 🙏 Acknowledgments

Built with React, Vite, Tailwind CSS, Framer Motion, Express, and MongoDB.

---

**Made with ❤️ by AH Rahat**
