# 📧 Email Setup Guide - Receive Messages from Your Website

## ✅ Email Updated!

Your email has been updated to: **ashrafulhossainrahat@gmail.com**

All contact form submissions will now be sent to this email address.

---

## 🚀 How to Set Up Email Functionality

To receive emails from your contact form, you need to:

1. **Set up Gmail App Password**
2. **Configure the server environment**
3. **Start the backend server**

---

## Step 1: Create Gmail App Password

### Why App Password?
Google doesn't allow regular passwords for third-party apps anymore. You need a special "App Password".

### How to Create:

1. **Go to your Google Account**
   - Visit: https://myaccount.google.com/

2. **Enable 2-Step Verification** (if not already enabled)
   - Go to Security → 2-Step Verification
   - Follow the steps to enable it

3. **Create App Password**
   - Go to Security → 2-Step Verification → App passwords
   - Or visit directly: https://myaccount.google.com/apppasswords
   
4. **Generate Password**
   - Select app: "Mail"
   - Select device: "Other (Custom name)"
   - Enter name: "Portfolio Website"
   - Click "Generate"
   
5. **Copy the 16-character password**
   - It will look like: `abcd efgh ijkl mnop`
   - **Save this password** - you'll need it!

---

## Step 2: Configure Server Environment

1. **Go to the server folder**
   ```bash
   cd server
   ```

2. **Create `.env` file** (if it doesn't exist)
   ```bash
   copy .env.example .env
   ```
   Or on Mac/Linux:
   ```bash
   cp .env.example .env
   ```

3. **Edit the `.env` file**
   
   Open `server/.env` and update these values:

   ```env
   # Server Configuration
   PORT=5000
   NODE_ENV=development

   # MongoDB Configuration (optional - only if you want to save messages to database)
   MONGODB_URI=mongodb://localhost:27017/portfolio

   # Email Configuration - UPDATE THESE!
   EMAIL_USER=ashrafulhossainrahat@gmail.com
   EMAIL_PASSWORD=your-16-character-app-password-here

   # CORS Configuration
   CLIENT_URL=http://localhost:5173

   # Rate Limiting
   RATE_LIMIT_WINDOW_MS=900000
   RATE_LIMIT_MAX_REQUESTS=5
   ```

4. **Replace `EMAIL_PASSWORD`** with the App Password you generated in Step 1
   - Remove spaces from the password
   - Example: `abcdefghijklmnop`

---

## Step 3: Start the Backend Server

1. **Install dependencies** (if not already done)
   ```bash
   cd server
   npm install
   ```

2. **Start the server**
   ```bash
   npm run dev
   ```

3. **You should see:**
   ```
   ✅ Email transporter is ready
   🚀 Server running on port 5000
   ```

---

## Step 4: Start the Frontend

In a **new terminal**:

1. **Go to client folder**
   ```bash
   cd client
   ```

2. **Start the frontend**
   ```bash
   npm run dev
   ```

3. **Open your website**
   - Visit: http://localhost:5173

---

## Step 5: Test the Contact Form

1. **Go to the Contact section** on your website
2. **Fill out the form:**
   - Name: Test User
   - Email: test@example.com
   - Subject: Test Message
   - Message: This is a test!

3. **Click "Send Message"**

4. **Check your email** (ashrafulhossainrahat@gmail.com)
   - You should receive a nicely formatted email!

---

## 🎯 Quick Setup Summary

```bash
# Terminal 1 - Backend
cd server
npm install
# Create .env file and add your Gmail App Password
npm run dev

# Terminal 2 - Frontend
cd client
npm install
npm run dev
```

Then visit: http://localhost:5173

---

## 📧 What Emails Look Like

When someone submits the contact form, you'll receive an email with:

- **Subject:** Portfolio Contact: [Their Subject]
- **From:** Your Gmail (ashrafulhossainrahat@gmail.com)
- **Reply-To:** The sender's email (so you can reply directly)
- **Content:**
  - Sender's name
  - Sender's email
  - Subject
  - Message
  - Timestamp

---

## 🔧 Troubleshooting

### Error: "Invalid login"
- Make sure you're using an **App Password**, not your regular Gmail password
- Check that 2-Step Verification is enabled
- Remove spaces from the App Password

### Error: "Connection refused"
- Make sure the backend server is running (`npm run dev` in server folder)
- Check that PORT 5000 is not being used by another app

### Error: "CORS error"
- Make sure `CLIENT_URL` in `.env` matches your frontend URL
- Default is `http://localhost:5173`

### Not receiving emails?
- Check your Gmail spam folder
- Verify the email address in `server/src/utils/emailService.js` is correct
- Check server console for error messages

---

## 🌐 For Production (When Deploying)

When you deploy your website, you'll need to:

1. **Update `.env` on your server** with:
   - Your production domain in `CLIENT_URL`
   - Same Gmail credentials

2. **Keep your App Password secure**
   - Never commit `.env` to Git
   - Use environment variables on your hosting platform

3. **Consider using a service like:**
   - SendGrid
   - Mailgun
   - AWS SES
   - For better deliverability and features

---

## ✅ Checklist

- [ ] Created Gmail App Password
- [ ] Created `server/.env` file
- [ ] Added `EMAIL_USER=ashrafulhossainrahat@gmail.com`
- [ ] Added `EMAIL_PASSWORD=your-app-password`
- [ ] Started backend server (`npm run dev` in server folder)
- [ ] Started frontend (`npm run dev` in client folder)
- [ ] Tested contact form
- [ ] Received test email

---

## 📝 Important Notes

1. **Keep your App Password secret!**
   - Never share it
   - Never commit it to Git
   - The `.env` file is already in `.gitignore`

2. **Backend must be running**
   - The contact form won't work without the backend server
   - Keep it running while testing

3. **Email limits**
   - Gmail has sending limits (500 emails/day for free accounts)
   - For high-volume sites, consider a dedicated email service

---

**Need help?** Let me know if you encounter any issues! 🚀
