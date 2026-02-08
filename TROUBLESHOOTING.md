# 🔧 Troubleshooting Guide

Common issues and their solutions for the MAH Rahat Portfolio website.

## 🚨 Installation Issues

### Error: `npm install` fails

**Problem**: Dependencies fail to install

**Solutions**:
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json
rm -rf client/node_modules client/package-lock.json
rm -rf server/node_modules server/package-lock.json

# Reinstall
npm run install:all
```

### Error: Node version incompatibility

**Problem**: "Unsupported engine" error

**Solution**:
```bash
# Check your Node version
node --version

# Should be >= 16.x
# Update Node.js if needed
```

## 🖥️ Development Server Issues

### Error: Port already in use

**Problem**: `EADDRINUSE: address already in use :::5000` or `:::5173`

**Solutions**:
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:5000 | xargs kill -9
lsof -ti:5173 | xargs kill -9

# Or use npx
npx kill-port 5000
npx kill-port 5173
```

### Error: `npm run dev` doesn't start both servers

**Problem**: Only one server starts

**Solution**:
```bash
# Start servers separately in different terminals

# Terminal 1 - Backend
cd server
npm run dev

# Terminal 2 - Frontend
cd client
npm run dev
```

### Error: Frontend can't connect to backend

**Problem**: API calls return 404 or network errors

**Solutions**:
1. Check backend is running on port 5000
2. Verify `VITE_API_URL` in `client/.env`:
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```
3. Restart frontend server after changing .env
4. Check browser console for CORS errors

## 🗄️ MongoDB Issues

### Error: MongooseServerSelectionError

**Problem**: Cannot connect to MongoDB

**Solutions**:

1. **Check connection string format**:
   ```env
   # Correct format
   MONGODB_URI=mongodb+srv://username:password@cluster.xxxxx.mongodb.net/dbname?retryWrites=true&w=majority
   
   # Common mistakes:
   # - Missing password
   # - Wrong cluster URL
   # - Missing database name
   ```

2. **Check MongoDB Atlas network access**:
   - Go to MongoDB Atlas dashboard
   - Network Access → Add IP Address
   - Allow access from anywhere (0.0.0.0/0)

3. **Check database user permissions**:
   - Database Access → Check user exists
   - User should have "Read and write to any database"

4. **Test connection**:
   ```bash
   # In server directory
   node -e "require('mongoose').connect('YOUR_CONNECTION_STRING').then(() => console.log('Connected!')).catch(err => console.error(err))"
   ```

### Error: Authentication failed

**Problem**: "Authentication failed" error

**Solutions**:
1. Verify username and password in connection string
2. Check password doesn't contain special characters (URL encode if needed)
3. Recreate database user with new password

## 📧 Email Issues

### Error: Email not sending

**Problem**: Contact form submits but no email received

**Solutions**:

1. **Check Gmail app password**:
   ```env
   # Should be 16 characters, no spaces
   EMAIL_PASSWORD=abcd efgh ijkl mnop  # ❌ Wrong
   EMAIL_PASSWORD=abcdefghijklmnop     # ✅ Correct
   ```

2. **Verify 2FA is enabled**:
   - Go to Google Account Security
   - Enable 2-Step Verification
   - Generate new app password

3. **Check email configuration**:
   ```env
   EMAIL_USER=your_email@gmail.com  # Must be Gmail
   EMAIL_PASSWORD=your_16_char_app_password
   ```

4. **Test email service**:
   ```bash
   # Check server logs when submitting form
   # Should see "Email sent successfully" or error message
   ```

5. **Common issues**:
   - Using regular Gmail password instead of app password
   - 2FA not enabled
   - App password expired (generate new one)
   - Gmail account locked (check Gmail security alerts)

### Error: "Invalid login" from Nodemailer

**Problem**: Nodemailer authentication fails

**Solutions**:
1. Generate new app password
2. Ensure no spaces in password
3. Try different Gmail account
4. Check "Less secure app access" is NOT needed (app passwords work with 2FA)

## 🎨 Frontend Issues

### Error: Blank white screen

**Problem**: Frontend loads but shows nothing

**Solutions**:
1. Check browser console for errors (F12)
2. Verify all imports are correct
3. Check for JavaScript errors
4. Clear browser cache (Ctrl+Shift+Delete)
5. Try incognito mode

### Error: Dark mode not working

**Problem**: Theme toggle doesn't work

**Solutions**:
1. Check localStorage in browser DevTools
2. Clear localStorage: `localStorage.clear()`
3. Check ThemeContext is wrapping App
4. Verify Tailwind dark mode is configured

### Error: Animations not working

**Problem**: Framer Motion animations don't play

**Solutions**:
1. Check `prefers-reduced-motion` in OS settings
2. Verify Framer Motion is installed:
   ```bash
   cd client
   npm list framer-motion
   ```
3. Check browser console for errors
4. Try disabling browser extensions

### Error: Images not loading

**Problem**: Project images or assets don't display

**Solutions**:
1. Check image paths are correct
2. Verify images exist in `client/public/`
3. Use absolute paths from public: `/assets/image.jpg`
4. Check browser network tab for 404 errors
5. Verify image file extensions match code

### Error: GitHub API rate limit

**Problem**: "API rate limit exceeded" error

**Solutions**:
1. Wait 1 hour for rate limit reset
2. Use GitHub personal access token:
   ```js
   // In client/src/services/github.js
   headers: {
     Authorization: 'token YOUR_GITHUB_TOKEN'
   }
   ```
3. Increase cache duration in localStorage

## 🔐 CORS Issues

### Error: CORS policy blocked

**Problem**: "Access-Control-Allow-Origin" error

**Solutions**:

1. **Check backend CORS configuration**:
   ```js
   // server/src/server.js
   app.use(cors({
     origin: process.env.CLIENT_URL || 'http://localhost:5173',
     credentials: true
   }));
   ```

2. **Verify CLIENT_URL in server/.env**:
   ```env
   CLIENT_URL=http://localhost:5173
   ```

3. **Check frontend is using correct API URL**:
   ```env
   # client/.env
   VITE_API_URL=http://localhost:5000/api
   ```

4. **Restart both servers** after changing CORS settings

## 🏗️ Build Issues

### Error: Build fails

**Problem**: `npm run build` fails in client

**Solutions**:
```bash
# Check for errors
cd client
npm run build

# Common fixes:
# 1. Remove unused imports
# 2. Fix ESLint errors
# 3. Check for missing dependencies
npm install

# 4. Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### Error: "Module not found"

**Problem**: Import errors during build

**Solutions**:
1. Check file paths are correct
2. Verify file extensions (.jsx, .js)
3. Check case sensitivity (Linux/Mac)
4. Ensure all dependencies are installed

## 🚀 Deployment Issues

### Error: Vercel build fails

**Problem**: Frontend deployment fails

**Solutions**:
1. Check build logs in Vercel dashboard
2. Verify build settings:
   - Root Directory: `client`
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Check environment variables are set
4. Test build locally first:
   ```bash
   cd client
   npm run build
   ```

### Error: Railway deployment fails

**Problem**: Backend deployment fails

**Solutions**:
1. Check Railway logs
2. Verify environment variables
3. Check start command: `npm start`
4. Ensure package.json has start script
5. Check Node version in package.json

### Error: Environment variables not working in production

**Problem**: .env values not used in deployment

**Solutions**:
1. **Vercel**: Add variables in dashboard (Settings → Environment Variables)
2. **Railway**: Add variables in dashboard (Variables tab)
3. Don't commit .env files to Git
4. Redeploy after adding variables

## 🐛 Runtime Errors

### Error: "Cannot read property of undefined"

**Problem**: JavaScript runtime error

**Solutions**:
1. Check browser console for stack trace
2. Add optional chaining: `object?.property`
3. Add null checks: `if (object) { ... }`
4. Check data is loaded before rendering

### Error: React hydration mismatch

**Problem**: Server/client render mismatch

**Solutions**:
1. Check for random values in initial render
2. Ensure consistent data between renders
3. Use `useEffect` for client-only code
4. Check localStorage access

### Error: Memory leak warning

**Problem**: "Can't perform a React state update on unmounted component"

**Solutions**:
```jsx
useEffect(() => {
  let mounted = true;
  
  fetchData().then(data => {
    if (mounted) {
      setData(data);
    }
  });
  
  return () => {
    mounted = false;
  };
}, []);
```

## 📱 Mobile Issues

### Error: Touch events not working

**Problem**: Buttons/links don't work on mobile

**Solutions**:
1. Ensure touch targets are >= 44x44px
2. Add `-webkit-tap-highlight-color: transparent`
3. Check for hover-only interactions
4. Test on actual device, not just DevTools

### Error: Layout broken on mobile

**Problem**: Responsive design not working

**Solutions**:
1. Check Tailwind breakpoints
2. Test at different screen sizes
3. Verify viewport meta tag in index.html
4. Check for fixed widths instead of responsive units

## 🔍 Debugging Tips

### Enable Detailed Logging

**Backend**:
```js
// server/src/server.js
app.use(morgan('dev')); // Already enabled
```

**Frontend**:
```js
// Add console.logs in components
console.log('Data:', data);
console.error('Error:', error);
```

### Check Network Requests

1. Open DevTools (F12)
2. Go to Network tab
3. Submit form or trigger API call
4. Check request/response details

### Check React DevTools

1. Install React DevTools extension
2. Inspect component props and state
3. Check component hierarchy
4. Profile performance

### Check MongoDB Data

```bash
# Connect to MongoDB Atlas
# Use MongoDB Compass or Atlas UI
# Check if contacts are being saved
```

## 🆘 Still Having Issues?

### Checklist:
- [ ] All dependencies installed
- [ ] Environment variables configured
- [ ] MongoDB Atlas accessible
- [ ] Gmail app password correct
- [ ] Both servers running
- [ ] No console errors
- [ ] Correct Node version (>= 16)
- [ ] Ports not in use
- [ ] Browser cache cleared

### Get Help:
1. Check error message carefully
2. Search error on Google/Stack Overflow
3. Check GitHub issues for dependencies
4. Review documentation files
5. Check browser console and server logs

### Useful Commands:
```bash
# Check versions
node --version
npm --version

# Check running processes
netstat -ano | findstr :5000  # Windows
lsof -i :5000                 # Mac/Linux

# Clear everything and start fresh
rm -rf node_modules client/node_modules server/node_modules
rm -rf package-lock.json client/package-lock.json server/package-lock.json
npm cache clean --force
npm run install:all
npm run dev
```

## 📚 Additional Resources

- [Node.js Docs](https://nodejs.org/docs)
- [React Docs](https://react.dev)
- [Express Docs](https://expressjs.com)
- [MongoDB Docs](https://docs.mongodb.com)
- [Vite Docs](https://vitejs.dev)
- [Tailwind Docs](https://tailwindcss.com)

---

**Remember**: Most issues are caused by:
1. Missing environment variables
2. Incorrect configuration
3. Port conflicts
4. Outdated dependencies

Always check these first! 🔍
