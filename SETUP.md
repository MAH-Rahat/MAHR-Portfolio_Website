# 🚀 Quick Setup Guide

## Project Structure Created ✅

```
mah-rahat-portfolio/
├── client/                 # React Frontend (Vite + TypeScript + Tailwind)
│   ├── public/
│   ├── src/
│   │   ├── styles/
│   │   │   └── globals.css
│   │   ├── test/
│   │   │   └── setup.ts
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── vite-env.d.ts
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   └── .env.example
│
├── server/                 # Express Backend (Node.js + TypeScript)
│   ├── src/
│   │   ├── types/
│   │   │   └── index.ts
│   │   └── server.ts
│   ├── package.json
│   ├── tsconfig.json
│   ├── nodemon.json
│   └── .env.example
│
├── package.json           # Root package with scripts
├── .gitignore
├── README.md
└── SETUP.md              # This file
```

## 📦 Installation Steps

### 1. Install All Dependencies

```bash
# Install root, client, and server dependencies
npm run install:all
```

Or install individually:

```bash
# Root
npm install

# Client
cd client && npm install && cd ..

# Server
cd server && npm install && cd ..
```

### 2. Configure Environment Variables

#### Client Environment (.env in client/)
```bash
cd client
cp .env.example .env
```

Edit `client/.env`:
```env
VITE_API_URL=http://localhost:5000/api
VITE_GITHUB_USERNAME=MAH-Rahat
```

#### Server Environment (.env in server/)
```bash
cd server
cp .env.example .env
```

Edit `server/.env`:
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=your_mongodb_connection_string
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
CLIENT_URL=http://localhost:5173
```

### 3. Start Development Servers

```bash
# From root directory - runs both client and server
npm run dev
```

This will start:
- ✅ Frontend: http://localhost:5173
- ✅ Backend: http://localhost:5000

Or run individually:
```bash
# Frontend only
npm run dev:client

# Backend only
npm run dev:server
```

## 🧪 Testing

```bash
# Run all tests
npm test

# Test individually
npm run test:client
npm run test:server
```

## 🏗️ Build for Production

```bash
# Build both
npm run build

# Build individually
npm run build:client
npm run build:server
```

## 📝 Next Steps

1. ✅ **Task 1 Complete**: Project setup done!
2. 🔄 **Task 2**: Set up backend (MongoDB, Contact model, Email service)
3. 🔄 **Task 3**: Create frontend foundation (types, data, theme context)
4. 🔄 **Task 4**: Build navigation and layout components
5. 🔄 **Continue**: Follow tasks.md for remaining implementation

## 🛠️ Available Scripts

### Root Level
- `npm run dev` - Run both client and server
- `npm run build` - Build both projects
- `npm run install:all` - Install all dependencies
- `npm run lint` - Lint both projects
- `npm test` - Test both projects

### Client Scripts
- `npm run dev:client` - Start Vite dev server
- `npm run build:client` - Build for production
- `npm run lint:client` - Lint frontend code
- `npm run test:client` - Run frontend tests

### Server Scripts
- `npm run dev:server` - Start Express server with nodemon
- `npm run lint:server` - Lint backend code
- `npm run test:server` - Run backend tests

## 🎨 Tech Stack Configured

### Frontend
- ⚛️ React 18 with JavaScript (ES6+)
- ⚡ Vite for blazing fast builds
- 🎨 Tailwind CSS with custom theme
- 🎭 Framer Motion for animations
- 📝 React Hook Form for validation
- 🧪 Vitest + React Testing Library

### Backend
- 🟢 Node.js + Express with JavaScript
- 🍃 MongoDB with Mongoose
- 📧 Nodemailer for emails
- 🔒 Helmet for security
- 🚦 Rate limiting configured
- 🧪 Vitest for testing

## 🔐 MongoDB Setup (Required for Backend)

1. Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster (free tier available)
3. Create database user
4. Whitelist your IP or use 0.0.0.0/0 for development
5. Get connection string and add to `server/.env`

## 📧 Email Setup (Required for Contact Form)

1. Use Gmail account
2. Enable 2-factor authentication
3. Generate App Password: [Google Account Settings](https://myaccount.google.com/apppasswords)
4. Add credentials to `server/.env`

## ✅ Verification

After setup, verify everything works:

1. **Frontend**: Visit http://localhost:5173 - should see welcome page
2. **Backend**: Visit http://localhost:5000/health - should return JSON
3. **API**: Visit http://localhost:5000/api - should return API info

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5173 (frontend)
npx kill-port 5173

# Kill process on port 5000 (backend)
npx kill-port 5000
```

### Module Not Found
```bash
# Clear node_modules and reinstall
rm -rf node_modules client/node_modules server/node_modules
npm run install:all
```

## 📚 Documentation

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/docs/)

---

**Ready to build!** 🎉 Follow the tasks in `.kiro/specs/mah-rahat-portfolio/tasks.md` for step-by-step implementation.
