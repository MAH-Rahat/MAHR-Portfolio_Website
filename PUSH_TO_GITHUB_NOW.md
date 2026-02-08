# 🚀 Push to GitHub - Quick Commands

## Copy and paste these commands:

```bash
# Step 1: Configure Git
git config user.name "MAH Rahat"
git config user.email "ashrafulhossainrahat@gmail.com"

# Step 2: Initialize (if needed)
git init

# Step 3: Add remote repository
git remote add origin https://github.com/MAH-Rahat/MAHR-Portfolio_Website.git

# Step 4: Add all files
git add .

# Step 5: Commit
git commit -m "Complete portfolio website with AI features, games, and enhanced UI"

# Step 6: Push to GitHub
git branch -M main
git push -u origin main
```

---

## ⚠️ Important!

When it asks for password, you need a **Personal Access Token**:

1. Go to: https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Name it: "Portfolio Website"
4. Check: `repo` (full control of private repositories)
5. Click "Generate token"
6. **Copy the token**
7. Use it as your password when pushing

---

## 🔄 If Remote Already Exists

If you get "remote origin already exists" error:

```bash
git remote remove origin
git remote add origin https://github.com/MAH-Rahat/MAHR-Portfolio_Website.git
```

---

## ✅ After Pushing

Visit: https://github.com/MAH-Rahat/MAHR-Portfolio_Website

You should see all your files there!

---

## 📝 For Future Updates

```bash
git add .
git commit -m "Your update message"
git push
```

---

**That's it!** 🎉
