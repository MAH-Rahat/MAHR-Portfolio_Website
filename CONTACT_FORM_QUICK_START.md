# 🚀 Contact Form Quick Start

## ✅ What I Updated

1. **Email address changed to:** `ashrafulhossainrahat@gmail.com`
2. **Updated files:**
   - `server/src/utils/emailService.js` - Email recipient
   - `client/src/data/personal.js` - Your contact email
   - `server/.env` - Email configuration

---

## 🎯 To Make Contact Form Work:

### Step 1: Get Gmail App Password (5 minutes)

1. Go to: https://myaccount.google.com/apppasswords
2. You may need to enable 2-Step Verification first
3. Create an App Password for "Mail"
4. Copy the 16-character password (like: `abcd efgh ijkl mnop`)

### Step 2: Update `.env` File

1. Open `server/.env`
2. Replace `your_gmail_app_password_here` with your App Password
3. Remove spaces from the password
4. Save the file

**Example:**
```env
EMAIL_USER=ashrafulhossainrahat@gmail.com
EMAIL_PASSWORD=abcdefghijklmnop
```

### Step 3: Start Both Servers

**Terminal 1 - Backend:**
```bash
cd server
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd client
npm run dev
```

### Step 4: Test It!

1. Open http://localhost:5173
2. Go to Contact section
3. Fill out the form
4. Click "Send Message"
5. Check your email: ashrafulhossainrahat@gmail.com

---

## ⚠️ Important

- **Backend MUST be running** for the contact form to work
- Without the backend, you'll see the error: "Failed to send message"
- Keep both terminals open while testing

---

## 🔍 How to Check if Backend is Running

When you run `npm run dev` in the server folder, you should see:

```
✅ Email transporter is ready
🚀 Server running on port 5000
```

If you see errors, check:
1. Is the App Password correct in `.env`?
2. Is port 5000 available?
3. Are all dependencies installed? (`npm install`)

---

## 📧 What Happens When Someone Contacts You?

1. They fill out the form on your website
2. Form data is sent to your backend server
3. Backend sends an email to: **ashrafulhossainrahat@gmail.com**
4. You receive a nicely formatted email with:
   - Their name
   - Their email (you can reply directly)
   - Subject
   - Message
   - Timestamp

---

## 🎉 That's It!

Once you add your Gmail App Password to `server/.env` and start both servers, your contact form will work perfectly!

**Need the detailed guide?** Check `EMAIL_SETUP_GUIDE.md`
