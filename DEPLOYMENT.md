# 🚀 Vercel Deployment Guide

## Method 1: Deploy via Vercel Website (Recommended)

### Step 1: Create Vercel Account
1. Go to [vercel.com](https://vercel.com)
2. Click **Sign Up**
3. Sign up with GitHub, GitLab, or Bitbucket (recommended) or Email

### Step 2: Push Code to GitHub (If not already done)

#### Initialize Git Repository
```bash
cd student-leave-management
git init
git add .
git commit -m "Initial commit - Student Leave Management System"
```

#### Create GitHub Repository
1. Go to [github.com](https://github.com)
2. Click **New Repository**
3. Name it: `student-leave-management`
4. Don't initialize with README (we already have one)
5. Click **Create Repository**

#### Push to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/student-leave-management.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy on Vercel

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click **Add New** → **Project**
3. **Import Git Repository**:
   - Select your GitHub account
   - Find `student-leave-management` repository
   - Click **Import**

4. **Configure Project**:
   - **Framework Preset**: Vite (should auto-detect)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (auto-filled)
   - **Output Directory**: `dist` (auto-filled)
   - **Install Command**: `npm install` (auto-filled)

5. Click **Deploy**

6. Wait 1-2 minutes for deployment to complete

7. Your app will be live at: `https://your-project-name.vercel.app`

---

## Method 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```

### Step 3: Deploy
```bash
cd student-leave-management
vercel
```

Follow the prompts:
- **Set up and deploy**: Yes
- **Which scope**: Select your account
- **Link to existing project**: No
- **Project name**: student-leave-management
- **Directory**: ./ (press Enter)
- **Override settings**: No

### Step 4: Deploy to Production
```bash
vercel --prod
```

---

## Method 3: Deploy via Drag & Drop (No Git Required)

### Step 1: Build the Project
```bash
cd student-leave-management
npm run build
```

This creates a `dist` folder with production files.

### Step 2: Deploy to Vercel
1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click **Add New** → **Project**
3. Click **Browse** or drag the `dist` folder
4. Wait for upload and deployment

**Note**: This method doesn't support automatic redeployment on code changes.

---

## 🔧 Vercel Configuration

The project includes a `vercel.json` file with optimal settings:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

The `rewrites` configuration ensures React Router works correctly on Vercel.

---

## 🌐 Custom Domain (Optional)

### Add Custom Domain
1. Go to your project on Vercel Dashboard
2. Click **Settings** → **Domains**
3. Enter your domain name
4. Follow DNS configuration instructions
5. Wait for DNS propagation (5-10 minutes)

---

## 🔄 Automatic Deployments

Once connected to GitHub:
- **Every push to `main` branch** → Automatic production deployment
- **Every pull request** → Preview deployment with unique URL
- **Rollback** → Easy rollback to previous deployments

---

## 📊 Deployment Status

After deployment, you'll get:
- ✅ **Production URL**: `https://your-project.vercel.app`
- ✅ **Preview URLs**: For each branch/PR
- ✅ **Analytics**: Traffic and performance metrics
- ✅ **Logs**: Build and runtime logs

---

## 🛠️ Troubleshooting

### Build Fails?
Check the build logs on Vercel dashboard. Common issues:
- Missing dependencies: Run `npm install` locally first
- Build errors: Run `npm run build` locally to test

### Routes Not Working?
Make sure `vercel.json` is in the root directory with the rewrites configuration.

### Environment Variables?
If you add environment variables later:
1. Go to **Settings** → **Environment Variables**
2. Add your variables
3. Redeploy the project

---

## 📱 Test Your Deployment

After deployment, test all features:
- ✅ Login page loads
- ✅ All routes work (Student, Faculty, HOD dashboards)
- ✅ Navigation works
- ✅ Responsive design on mobile
- ✅ 404 page for invalid routes

---

## 🎉 Success!

Your Student Leave Management System is now live on Vercel!

Share your deployment URL:
```
https://your-project-name.vercel.app
```

---

## 📞 Need Help?

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Vercel Support**: [vercel.com/support](https://vercel.com/support)
- **Community**: [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)

---

**Happy Deploying! 🚀**
