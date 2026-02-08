# 🚀 Deployment Guide - MAH Rahat Portfolio

This guide will help you deploy your portfolio website to production.

## 📋 Prerequisites

Before deploying, ensure you have:
- ✅ MongoDB Atlas account (free tier available)
- ✅ Gmail account with 2FA enabled
- ✅ GitHub account with your code pushed
- ✅ Vercel/Netlify account (for frontend)
- ✅ Railway/Render account (for backend)

## 🗄️ Step 1: Set Up MongoDB Atlas

### 1.1 Create Database
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up or log in
3. Create a new cluster (free M0 tier is sufficient)
4. Wait for cluster to be created (2-3 minutes)

### 1.2 Configure Database Access
1. Go to **Database Access** in left sidebar
2. Click **Add New Database User**
3. Choose **Password** authentication
4. Create username and strong password (save these!)
5. Set user privileges to **Read and write to any database**
6. Click **Add User**

### 1.3 Configure Network Access
1. Go to **Network Access** in left sidebar
2. Click **Add IP Address**
3. Click **Allow Access from Anywhere** (0.0.0.0/0)
4. Click **Confirm**

### 1.4 Get Connection String
1. Go to **Database** in left sidebar
2. Click **Connect** on your cluster
3. Choose **Connect your application**
4. Copy the connection string
5. Replace `<password>` with your database user password
6. Replace `<dbname>` with `portfolio` or your preferred name

Example:
```
mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority
```

## 📧 Step 2: Set Up Gmail for Contact Form

### 2.1 Enable 2-Factor Authentication
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable **2-Step Verification** if not already enabled

### 2.2 Generate App Password
1. Go to [App Passwords](https://myaccount.google.com/apppasswords)
2. Select **Mail** and **Other (Custom name)**
3. Enter "Portfolio Website"
4. Click **Generate**
5. Copy the 16-character password (save this!)

## 🖥️ Step 3: Deploy Backend (Railway)

### 3.1 Create Railway Account
1. Go to [Railway.app](https://railway.app)
2. Sign up with GitHub

### 3.2 Deploy Backend
1. Click **New Project**
2. Choose **Deploy from GitHub repo**
3. Select your portfolio repository
4. Railway will auto-detect the Node.js app

### 3.3 Configure Environment Variables
1. Go to your project
2. Click on the service
3. Go to **Variables** tab
4. Add these variables:

```env
PORT=5000
NODE_ENV=production
MONGODB_URI=your_mongodb_connection_string
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASSWORD=your_16_char_app_password
CLIENT_URL=https://your-frontend-url.vercel.app
```

### 3.4 Configure Build Settings
1. Go to **Settings** tab
2. Set **Root Directory** to `server`
3. Set **Build Command** to `npm install`
4. Set **Start Command** to `npm start`

### 3.5 Get Backend URL
1. Go to **Settings** > **Networking**
2. Click **Generate Domain**
3. Copy the URL (e.g., `https://your-app.railway.app`)

## 🌐 Step 4: Deploy Frontend (Vercel)

### 4.1 Create Vercel Account
1. Go to [Vercel.com](https://vercel.com)
2. Sign up with GitHub

### 4.2 Import Project
1. Click **Add New** > **Project**
2. Import your GitHub repository
3. Vercel will auto-detect Vite

### 4.3 Configure Build Settings
1. **Framework Preset**: Vite
2. **Root Directory**: `client`
3. **Build Command**: `npm run build`
4. **Output Directory**: `dist`

### 4.4 Add Environment Variables
1. Go to **Environment Variables** section
2. Add these variables:

```env
VITE_API_URL=https://your-backend.railway.app/api
VITE_GITHUB_USERNAME=MAH-Rahat
```

### 4.5 Deploy
1. Click **Deploy**
2. Wait for build to complete (2-3 minutes)
3. Your site will be live at `https://your-project.vercel.app`

## 🔄 Step 5: Update Backend with Frontend URL

1. Go back to Railway
2. Update `CLIENT_URL` environment variable with your Vercel URL
3. Redeploy the backend

## 🎨 Step 6: Add Custom Domain (Optional)

### For Vercel (Frontend)
1. Go to **Settings** > **Domains**
2. Add your custom domain
3. Follow DNS configuration instructions
4. Wait for SSL certificate (automatic)

### For Railway (Backend)
1. Go to **Settings** > **Networking**
2. Add custom domain
3. Configure DNS records
4. Wait for SSL certificate

## 📦 Step 7: Add Assets

### Project Images
1. Add project screenshots to `client/public/assets/projects/`
2. Name them according to your projects data file
3. Commit and push to trigger redeployment

### Resume PDF
1. Add your resume as `client/public/assets/MAH_Rahat_Resume.pdf`
2. Commit and push

### Favicon
1. Replace `client/public/vite.svg` with your logo
2. Update `client/index.html` favicon link if needed

### OG Image
1. Create a 1200x630px image for social sharing
2. Save as `client/public/og-image.jpg`
3. Update meta tags in `client/index.html` if needed

## ✅ Step 8: Test Everything

### Test Frontend
- [ ] Visit your Vercel URL
- [ ] Check all sections load correctly
- [ ] Test dark mode toggle
- [ ] Test navigation and smooth scrolling
- [ ] Test responsive design on mobile
- [ ] Check all links work

### Test Backend
- [ ] Submit a test contact form
- [ ] Check if email is received
- [ ] Verify rate limiting works
- [ ] Check MongoDB for saved contact

### Test SEO
- [ ] Check meta tags with [Meta Tags](https://metatags.io/)
- [ ] Validate structured data with [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Test Open Graph with [Facebook Debugger](https://developers.facebook.com/tools/debug/)

## 🔧 Troubleshooting

### Backend Issues

**Error: Cannot connect to MongoDB**
- Check MongoDB Atlas network access allows all IPs
- Verify connection string is correct
- Check database user has correct permissions

**Error: Email not sending**
- Verify Gmail app password is correct (16 characters, no spaces)
- Check 2FA is enabled on Gmail
- Try generating a new app password

**Error: CORS issues**
- Verify `CLIENT_URL` in backend matches your frontend URL
- Check CORS middleware is configured correctly

### Frontend Issues

**Error: API calls failing**
- Verify `VITE_API_URL` points to correct backend URL
- Check backend is running and accessible
- Open browser console for detailed errors

**Error: Build failing**
- Check all dependencies are in package.json
- Verify Node version compatibility
- Check for TypeScript/ESLint errors

## 📊 Monitoring

### Railway (Backend)
- View logs in Railway dashboard
- Monitor CPU and memory usage
- Set up alerts for downtime

### Vercel (Frontend)
- View deployment logs
- Monitor bandwidth usage
- Check analytics for visitor stats

## 🔄 Continuous Deployment

Both Railway and Vercel support automatic deployments:

1. Push code to GitHub
2. Deployments trigger automatically
3. Changes go live in 2-3 minutes

## 🎉 You're Live!

Your portfolio is now deployed and accessible worldwide!

**Frontend**: https://your-project.vercel.app
**Backend**: https://your-backend.railway.app

Share your portfolio:
- Add to LinkedIn profile
- Share on social media
- Include in resume
- Add to GitHub profile README

## 📝 Next Steps

1. **Analytics**: Add Google Analytics or Vercel Analytics
2. **Monitoring**: Set up Sentry for error tracking
3. **Performance**: Run Lighthouse audits and optimize
4. **SEO**: Submit sitemap to Google Search Console
5. **Updates**: Keep dependencies updated regularly

## 🆘 Need Help?

- Railway Docs: https://docs.railway.app
- Vercel Docs: https://vercel.com/docs
- MongoDB Atlas Docs: https://docs.atlas.mongodb.com

Good luck! 🚀
