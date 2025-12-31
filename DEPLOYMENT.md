# TaskFlow - Deployment Guide

Complete guide to deploy TaskFlow MERN application with backend on Hugging Face Spaces and frontend on Vercel.

## 🚀 Architecture Overview

- **Backend API**: Hugging Face Spaces (Docker) - https://huggingface.co/spaces/MustafaNoor/TaskFlow-backend
- **Frontend**: Vercel (React + Vite)
- **Database**: MongoDB Atlas (Cloud)

---

## 📋 Prerequisites

1. GitHub account (for code repository)
2. MongoDB Atlas account (free tier)
3. Hugging Face account (for backend hosting)
4. Vercel account (for frontend hosting)

---

## 🗄️ Step 1: Set Up MongoDB Atlas

### 1.1 Create Database Cluster

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up or log in
3. Click **"Build a Database"**
4. Select **M0 FREE** tier
5. Choose a cloud provider and region (closest to your users)
6. Name your cluster (e.g., `taskflow-cluster`)
7. Click **"Create Cluster"** (takes 3-5 minutes)

### 1.2 Configure Network Access

1. In Atlas, go to **Network Access** (left sidebar)
2. Click **"Add IP Address"**
3. Click **"Allow Access from Anywhere"** (0.0.0.0/0)
   - ⚠️ This is required for Hugging Face Spaces
4. Click **"Confirm"**

### 1.3 Create Database User

1. Go to **Database Access** (left sidebar)
2. Click **"Add New Database User"**
3. Choose **Password** authentication
4. Set username: `taskflow-admin`
5. Click **"Autogenerate Secure Password"** and **COPY IT**
6. Set privileges to **"Read and write to any database"**
7. Click **"Add User"**

### 1.4 Get Connection String

1. Go to **Database** (left sidebar)
2. Click **"Connect"** on your cluster
3. Select **"Connect your application"**
4. Copy the connection string (looks like):
   ```
   mongodb+srv://taskflow-admin:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
5. Replace `<password>` with the password you copied earlier
6. Replace the database name (add `/taskflow` before the `?`):
   ```
   mongodb+srv://taskflow-admin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/taskflow?retryWrites=true&w=majority
   ```

---

## 🤗 Step 2: Deploy Backend to Hugging Face Spaces

### 2.1 Prepare Backend Files

Your backend already has:
- ✅ `Dockerfile` - Container configuration
- ✅ `.dockerignore` - Excludes unnecessary files
- ✅ `README.md` - Space documentation

### 2.2 Create Hugging Face Space

1. Go to [Hugging Face Spaces](https://huggingface.co/spaces)
2. Click **"Create new Space"**
3. Fill in details:
   - **Space name**: `TaskFlow-backend`
   - **License**: Apache 2.0
   - **SDK**: **Docker**
   - **Hardware**: Free CPU (basic)
4. Click **"Create Space"**

### 2.3 Upload Backend Files

**Option A: Git (Recommended)**

```bash
# Navigate to backend folder
cd backend

# Initialize git (if not already)
git init
git add .
git commit -m "Initial backend deployment"

# Add Hugging Face as remote
git remote add hf https://huggingface.co/spaces/MustafaNoor/TaskFlow-backend
git push hf main
```

**Option B: Web Upload**

1. In your Space, click **"Files"** tab
2. Upload these files from your `backend` folder:
   - `Dockerfile`
   - `.dockerignore`
   - `README.md`
   - `package.json`
   - `package-lock.json`
   - `server.js`
   - `config/` folder
   - `controllers/` folder
   - `models/` folder
   - `routes/` folder
   - `middleware/` folder

### 2.4 Configure Environment Variables (Secrets)

1. In your Space, go to **Settings** tab
2. Scroll to **"Variables and secrets"**
3. Add these secrets (click **"New secret"** for each):

   | Secret Name | Value | Example |
   |-------------|-------|---------|
   | `MONGO_URI` | Your MongoDB connection string | `mongodb+srv://taskflow-admin:...` |
   | `JWT_SECRET` | Random 32+ character string | `your-super-secret-jwt-key-change-this-32chars` |
   | `NODE_ENV` | `production` | `production` |
   | `CORS_ORIGIN` | Your Vercel URL (add after frontend deploy) | `https://taskflow.vercel.app` |

   **Generate JWT_SECRET:**
   ```bash
   # In PowerShell:
   -join ((65..90) + (97..122) + (48..57) | Get-Random -Count 32 | % {[char]$_})
   ```

4. Click **"Save"** for each secret

### 2.5 Verify Deployment

1. Wait for build to complete (5-10 minutes first time)
2. Check **"Logs"** tab for any errors
3. Once running, test the health endpoint:
   ```
   https://mustafanoor-taskflow-backend.hf.space/api/health
   ```
   Should return: `{"status":"ok","message":"TaskFlow API is running"}`

4. Your backend URL is:
   ```
   https://mustafanoor-taskflow-backend.hf.space
   ```

---

## 🌐 Step 3: Deploy Frontend to Vercel

### 3.1 Push Code to GitHub

1. Create a new repository on GitHub: `taskflow-mern`
2. Push your entire project:
   ```bash
   # From project root
   git init
   git add .
   git commit -m "Initial commit - TaskFlow MERN app"
   git remote add origin https://github.com/YOUR_USERNAME/taskflow-mern.git
   git push -u origin main
   ```

### 3.2 Deploy to Vercel

1. Go to [Vercel](https://vercel.com)
2. Sign up/login with GitHub
3. Click **"Add New Project"**
4. **Import** your `taskflow-mern` repository
5. Configure project:
   - **Framework Preset**: Vite
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

6. **Add Environment Variable**:
   - Click **"Environment Variables"**
   - Add variable:
     - **Name**: `VITE_API_URL`
     - **Value**: `https://mustafanoor-taskflow-backend.hf.space/api`
     - **Environments**: Production, Preview, Development

7. Click **"Deploy"**

### 3.3 Update Backend CORS

1. Go back to Hugging Face Space settings
2. Update the `CORS_ORIGIN` secret to your Vercel URL:
   ```
   https://your-project-name.vercel.app
   ```
3. Restart the Space (Settings → Factory reboot)

### 3.4 Test Your Application

1. Visit your Vercel URL: `https://your-project-name.vercel.app`
2. Register a new account
3. Create a project
4. Add tasks and drag them between columns
5. Test edit/delete functionality

---

## 🔧 Troubleshooting

### Backend Issues

**Build fails on Hugging Face:**
- Check Logs tab for error messages
- Verify all files were uploaded
- Ensure `Dockerfile` uses Node.js 20
- Check that all dependencies are in `package.json`

**API returns 500 errors:**
- Verify `MONGO_URI` is correct in Space secrets
- Check MongoDB Atlas network access allows 0.0.0.0/0
- View logs for connection errors

**CORS errors:**
- Verify `CORS_ORIGIN` in Space secrets matches your Vercel URL
- No trailing slash in CORS_ORIGIN
- Restart Space after changing secrets

### Frontend Issues

**Cannot connect to backend:**
- Verify `VITE_API_URL` environment variable in Vercel
- Check Network tab in browser dev tools
- Ensure backend health endpoint works

**404 on refresh:**
- Vercel should handle this automatically for SPA
- Check `vercel.json` if issues persist

**Environment variable not working:**
- Environment variables must start with `VITE_`
- Redeploy after adding environment variables

---

## 📝 Environment Variables Reference

### Backend (Hugging Face Spaces)

```env
MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/taskflow?retryWrites=true&w=majority
JWT_SECRET=your-32-character-random-string-here
NODE_ENV=production
CORS_ORIGIN=https://your-frontend.vercel.app
```

### Frontend (Vercel)

```env
VITE_API_URL=https://mustafanoor-taskflow-backend.hf.space/api
```

---

## 🔒 Security Considerations

### Implemented:
- ✅ Helmet.js security headers
- ✅ Rate limiting (100 requests per 15 minutes)
- ✅ CORS restricted to frontend domain
- ✅ JWT token authentication
- ✅ Password hashing with bcryptjs
- ✅ Environment variables for secrets

### Recommendations:
- Use strong JWT_SECRET (32+ characters)
- Regularly rotate JWT_SECRET
- Monitor MongoDB Atlas for suspicious activity
- Keep dependencies updated
- Use HTTPS only (enforced by platforms)

---

## 📊 Monitoring

### Hugging Face Spaces
- View real-time logs in Logs tab
- Check Space status on dashboard
- Free tier may sleep after inactivity (wakes on request)

### Vercel
- Analytics dashboard shows traffic
- Function logs for debugging
- Automatic error tracking

### MongoDB Atlas
- Monitor database usage
- Set up alerts for high usage
- View connection history

---

## 🚨 Important Notes

1. **Hugging Face Free Tier**: May sleep after 48 hours of inactivity
   - First request after sleep takes 10-20 seconds to wake
   - Consider upgrading for production use

2. **MongoDB Atlas Free Tier**: 512MB storage limit
   - Monitor usage in Atlas dashboard
   - Upgrade if approaching limit

3. **Vercel Free Tier**: 100GB bandwidth/month
   - More than enough for class projects
   - Automatic HTTPS and global CDN

4. **CORS Configuration**: Must update `CORS_ORIGIN` after frontend deployment

---

## 📱 Live Application

- **Frontend**: https://your-project-name.vercel.app
- **Backend API**: https://mustafanoor-taskflow-backend.hf.space/api
- **Health Check**: https://mustafanoor-taskflow-backend.hf.space/api/health

---

## 🆘 Support

If you encounter issues:
1. Check the Troubleshooting section above
2. View logs on both Hugging Face and Vercel
3. Verify all environment variables are set correctly
4. Test backend health endpoint independently
5. Check browser console for frontend errors

---

**Deployment completed!** 🎉
