# TeamFlow - Setup Instructions

## ✅ Current Status

### Backend
- ✅ Server running on port 5000
- ✅ MongoDB connected successfully
- ✅ All API routes configured
- ✅ Environment variables set

### Frontend  
- ✅ React components created
- ✅ State management configured
- ⏳ Ready for installation

---

## 🚀 Quick Start Guide

### Backend is Already Running! 
Your backend server is currently running with MongoDB connected.

**Backend Server:**
- URL: `http://localhost:5000`
- Status: ✅ Running

---

## 📱 Frontend Setup

### Step 1: Install Dependencies
```bash
cd frontend
npm install --legacy-peer-deps
```

This may take 2-3 minutes. The `--legacy-peer-deps` flag helps with dependency resolution.

### Step 2: Start Frontend Development Server
```bash
npm start
```

This will automatically open `http://localhost:3000` in your browser.

---

## 🧪 Testing the Application

### 1. Register a New Account
- Go to http://localhost:3000/register
- Fill in: Name, Email, Password
- Click "Register"

### 2. Login
- Go to http://localhost:3000/login
- Use your credentials
- You'll be redirected to /projects

### 3. Create a Project
- Click "+ New Project"
- Enter project title, description, and deadline
- Click "Create Project"

### 4. Add Tasks
- Click on a project to view details
- Click "+ Add Task"
- Fill task details and create

### 5. Manage Tasks
- Drag tasks between status columns (Todo, In Progress, In Review, Done)
- Click on priority to change it
- Click the × button to delete

---

## 📋 Available API Endpoints

### Authentication
```
POST   /api/auth/register
POST   /api/auth/login
```

### Projects
```
GET    /api/projects                    - Get all projects
POST   /api/projects                    - Create project
GET    /api/projects/:id                - Get project details
PUT    /api/projects/:id                - Update project
DELETE /api/projects/:id                - Delete project
POST   /api/projects/:id/members        - Add member
DELETE /api/projects/:id/members        - Remove member
```

### Tasks
```
GET    /api/tasks/project/:projectId    - Get tasks
POST   /api/tasks                       - Create task
PUT    /api/tasks/:id                   - Update task
DELETE /api/tasks/:id                   - Delete task
GET    /api/tasks/stats/:projectId      - Task stats
```

### Users
```
GET    /api/users/profile               - Get profile
PUT    /api/users/profile               - Update profile
GET    /api/users/all                   - Get all users
```

---

## 🔧 Troubleshooting

### Backend Connection Issues
If you see "MongoDB Connect Error":
1. Check your MongoDB Atlas connection string in `.env`
2. Verify your IP address is whitelisted in MongoDB Atlas
3. Ensure your password is correct (no special characters that need encoding)

### Frontend Port Already in Use
If port 3000 is in use:
```bash
npm start -- --port 3001
```

### Clear Cache & Reinstall
```bash
rm -r node_modules package-lock.json
npm install --legacy-peer-deps
```

---

## 📝 Project Files

```
mern_project/
├── backend/
│   ├── config/db.js              - MongoDB connection
│   ├── controllers/              - Business logic
│   ├── middleware/               - Auth middleware
│   ├── models/                   - Database schemas
│   ├── routes/                   - API endpoints
│   ├── server.js                 - Express app
│   ├── .env                      - Environment variables
│   └── package.json
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/           - React components
│   │   ├── context/              - State management
│   │   ├── hooks/                - Custom hooks
│   │   ├── styles/               - CSS files
│   │   ├── App.js                - Main app
│   │   └── index.js              - Entry point
│   └── package.json
└── README.md
```

---

## 🎯 Next Steps

1. ✅ Backend is running - no action needed
2. 🔄 Install frontend dependencies: `npm install --legacy-peer-deps`
3. 🚀 Start frontend: `npm start`
4. 🧪 Test the application with sample data
5. 📝 Customize and expand features as needed

---

## 💡 Tips

- **Development**: Keep backend and frontend terminals open while developing
- **Hot Reload**: Both servers support hot reload - save and changes appear instantly
- **API Testing**: Use Postman or VS Code REST Client to test API endpoints
- **Database**: Access MongoDB Atlas dashboard to view your data in real-time

---

## 📞 Support

If you encounter any issues:
1. Check the terminal output for error messages
2. Verify all environment variables are set correctly
3. Ensure MongoDB Atlas IP whitelist includes your current IP
4. Check that ports 5000 and 3000 are available

Happy coding! 🚀
