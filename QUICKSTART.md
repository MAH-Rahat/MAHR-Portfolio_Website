# ⚡ Quick Start Guide

Get your portfolio running locally in 5 minutes!

## 🚀 Installation

### 1. Install Dependencies
```bash
npm run install:all
```

This installs dependencies for both client and server.

### 2. Configure Environment Variables

#### Client (.env in client/ folder)
```env
VITE_API_URL=http://localhost:5000/api
VITE_GITHUB_USERNAME=MAH-Rahat
```

#### Server (.env in server/ folder)
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=your_mongodb_connection_string
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASSWORD=your_gmail_app_password
CLIENT_URL=http://localhost:5173
```

### 3. Set Up MongoDB (Required for Contact Form)

**Option A: MongoDB Atlas (Recommended)**
1. Create free account at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster
3. Get connection string
4. Add to `server/.env`

**Option B: Local MongoDB**
```bash
# Install MongoDB locally
# Then use: mongodb://localhost:27017/portfolio
```

### 4. Set Up Gmail (Required for Contact Form)

1. Enable 2FA on your Gmail account
2. Generate app password at [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
3. Add to `server/.env`

### 5. Start Development Servers

```bash
npm run dev
```

This starts both:
- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:5000

## 🎨 Customize Your Portfolio

### Update Personal Information

Edit these files in `client/src/data/`:

1. **personal.js** - Your name, bio, contact info, statistics
2. **skills.js** - Your technical skills and proficiency levels
3. **experience.js** - Work history and job descriptions
4. **projects.js** - Your projects with descriptions and links
5. **education.js** - Academic background and achievements

### Add Project Images

1. Create folder: `client/public/assets/projects/`
2. Add images matching your project IDs
3. Update image paths in `projects.js`

### Add Your Resume

1. Add PDF: `client/public/assets/MAH_Rahat_Resume.pdf`
2. Update path in Hero component if needed

### Change Colors

Edit `client/tailwind.config.js`:

```js
colors: {
  primary: colors.blue,    // Change to your preferred color
  secondary: colors.purple,
  accent: colors.orange,
}
```

## 🧪 Test Contact Form

1. Start both servers (`npm run dev`)
2. Go to Contact section
3. Fill out form
4. Submit
5. Check your email for the message

## 📱 Test Responsive Design

1. Open browser DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Test different screen sizes:
   - Mobile: 375px
   - Tablet: 768px
   - Desktop: 1440px

## 🌙 Test Dark Mode

Click the sun/moon icon in the navigation bar.

## 🔍 Common Issues

### Port Already in Use
```bash
# Kill process on port 5000 (backend)
npx kill-port 5000

# Kill process on port 5173 (frontend)
npx kill-port 5173
```

### MongoDB Connection Error
- Check connection string format
- Verify network access in MongoDB Atlas
- Ensure database user has correct permissions

### Email Not Sending
- Verify Gmail app password (16 characters)
- Check 2FA is enabled
- Try generating new app password

### Module Not Found
```bash
# Reinstall dependencies
npm run install:all
```

## 📦 Build for Production

### Build Frontend
```bash
cd client
npm run build
```

Output in `client/dist/`

### Build Backend
```bash
cd server
npm run build
```

Backend doesn't need building (JavaScript).

## 🚀 Deploy

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

Quick deploy options:
- **Frontend**: Vercel, Netlify
- **Backend**: Railway, Render, Heroku

## 📚 Project Structure

```
portfolio/
├── client/                 # Frontend (React + Vite)
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── data/          # Your personal data
│   │   ├── contexts/      # React contexts
│   │   ├── hooks/         # Custom hooks
│   │   ├── services/      # API services
│   │   ├── utils/         # Utilities
│   │   └── styles/        # Global styles
│   └── package.json
│
├── server/                # Backend (Express + MongoDB)
│   ├── src/
│   │   ├── config/        # Database config
│   │   ├── controllers/   # Route controllers
│   │   ├── middleware/    # Express middleware
│   │   ├── models/        # MongoDB models
│   │   ├── routes/        # API routes
│   │   └── utils/         # Utilities
│   └── package.json
│
├── .kiro/                 # Spec files
├── DEPLOYMENT.md          # Deployment guide
├── SETUP.md              # Detailed setup
├── README.md             # Project overview
└── package.json          # Root package
```

## 🎯 Next Steps

1. ✅ Customize your data files
2. ✅ Add project images
3. ✅ Test contact form
4. ✅ Test on mobile devices
5. ✅ Deploy to production

## 💡 Tips

- Use **Ctrl+C** to stop servers
- Changes auto-reload in development
- Check browser console for errors
- Use React DevTools for debugging

## 🆘 Need Help?

Check these files:
- [SETUP.md](./SETUP.md) - Detailed setup instructions
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Deployment guide
- [PROJECT_COMPLETE.md](./PROJECT_COMPLETE.md) - Feature overview
- [README.md](./README.md) - Project documentation

Happy coding! 🎉
