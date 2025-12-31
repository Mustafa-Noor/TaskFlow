# 📋 TaskFlow - Modern Project Management System

<div align="center">

![MERN Stack](https://img.shields.io/badge/MERN-Stack-green?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

**A production-ready, full-stack MERN application for collaborative project and task management with Kanban board, drag-and-drop functionality, and real-time updates.**

[🚀 Live Demo (Frontend)](https://your-app.vercel.app) • [🔗 API Backend](https://mustafanoor-taskflow-backend.hf.space/api) • [📖 API Docs](#api-documentation)

</div>

---

## ✨ Features

### 🔐 Authentication & Authorization
- **JWT-based Authentication** with 7-day token expiration
- **Secure Password Hashing** using bcryptjs
- **Protected Routes** with role-based access control (Admin, Manager, Member)
- **Persistent Login** with localStorage token management

### 📊 Project Management
- **Full CRUD Operations**: Create, Read, Update, Delete projects
- **Project Dashboard** with grid layout and visual cards
- **Search & Filter** projects by name and status
- **Team Member Management**: Add/remove members from projects
- **Project Statistics**: Track progress and completion rates
- **Edit Mode** with pre-populated forms and instant updates

### ✅ Task Management
- **Kanban Board Interface** with drag-and-drop functionality
- **Three Status Columns**: Todo, In Progress, Completed
- **Task Prioritization**: Low, Medium, High, Urgent
- **Task Assignment** to team members
- **Due Date Tracking** with visual indicators
- **Full CRUD Operations**: Create, edit, update, delete tasks
- **Drag & Drop**: Move tasks between status columns seamlessly
- **Task Filtering**: Filter by assignee, priority, or status
- **Task Statistics**: Real-time task count by status

### 🎨 Modern UI/UX
- **Responsive Design**: Mobile-first approach, works on all devices
- **Gradient Theme**: Purple-blue gradient aesthetics
- **Modal Dialogs**: Clean forms for creating/editing projects and tasks
- **Loading States**: Visual feedback during API operations
- **Error Handling**: User-friendly error messages
- **Smooth Animations**: CSS transitions for better UX
- **Delete Confirmations**: Prevent accidental data loss

### 🔒 Security Features
- **Helmet.js**: HTTP security headers protection
- **Rate Limiting**: 100 requests per 15 minutes per IP
- **CORS Configuration**: Controlled cross-origin resource sharing
- **Input Validation**: Server-side validation for all endpoints
- **Password Requirements**: Minimum 6 characters enforced
- **Error Sanitization**: No sensitive data exposure in errors

## 🛠️ Tech Stack

### Backend
| Technology | Version | Purpose |
|-----------|---------|---------|
| **Node.js** | 20.16.0 | JavaScript runtime |
| **Express.js** | 4.18.2 | RESTful API framework |
| **MongoDB** | Atlas Cloud | NoSQL database |
| **Mongoose** | 7.5.0 | MongoDB ODM |
| **jsonwebtoken** | 9.0.2 | JWT authentication |
| **bcryptjs** | 2.4.3 | Password hashing |
| **helmet** | 7.0.0 | Security middleware |
| **express-rate-limit** | 6.10.0 | API rate limiting |
| **cors** | 2.8.5 | CORS middleware |
| **dotenv** | 16.3.1 | Environment variables |

### Frontend
| Technology | Version | Purpose |
|-----------|---------|---------|
| **React** | 19.2.0 | UI library |
| **Vite** | 7.2.4 | Build tool & dev server |
| **React Router DOM** | 6.15.0 | Client-side routing |
| **Axios** | 1.5.0 | HTTP client |
| **Context API** | Built-in | State management |
| **CSS3** | - | Styling with gradients |

### Deployment
- **Backend**: Hugging Face Spaces (Docker container)
- **Frontend**: Vercel (Planned)
- **Database**: MongoDB Atlas (Cloud)

## 📁 Project Structure

```
mern_project/
│
├── backend/                      # Express.js API Server
│   ├── config/
│   │   └── db.js                # MongoDB connection setup
│   │
│   ├── controllers/             # Business logic handlers
│   │   ├── authController.js    # Authentication (register, login)
│   │   ├── projectController.js # Project CRUD operations
│   │   ├── taskController.js    # Task CRUD operations
│   │   └── userController.js    # User profile management
│   │
│   ├── middleware/
│   │   └── authMiddleware.js    # JWT verification & route protection
│   │
│   ├── models/                  # Mongoose schemas
│   │   ├── User.js              # User schema (name, email, password, role)
│   │   ├── Project.js           # Project schema (title, description, members)
│   │   └── Task.js              # Task schema (title, status, priority, dueDate)
│   │
│   ├── routes/                  # API endpoints
│   │   ├── authRoutes.js        # /api/auth (register, login)
│   │   ├── projectRoutes.js     # /api/projects (CRUD + members)
│   │   ├── taskRoutes.js        # /api/tasks (CRUD + filters)
│   │   └── userRoutes.js        # /api/users (profile, search)
│   │
│   ├── .env                     # Environment variables (not in repo)
│   ├── .env.production.example  # Production env template
│   ├── .dockerignore            # Docker build exclusions
│   ├── Dockerfile               # Docker container configuration
│   ├── server.js                # App entry point (port 7860)
│   └── package.json             # Dependencies & scripts
│
├── frontend/                    # React + Vite SPA
│   ├── public/
│   │   └── vite.svg             # App favicon
│   │
│   ├── src/
│   │   ├── components/          # React components
│   │   │   ├── Login.jsx        # Login form
│   │   │   ├── Register.jsx     # Registration form
│   │   │   ├── ProjectList.jsx  # Projects grid with CRUD modals
│   │   │   ├── ProjectDetail.jsx # Single project view
│   │   │   ├── TaskBoard.jsx    # Kanban board with drag-and-drop
│   │   │   ├── TaskCard.jsx     # Draggable task card
│   │   │   ├── Navbar.jsx       # Navigation header
│   │   │   └── ProtectedRoute.jsx # Route guard
│   │   │
│   │   ├── context/             # Global state management
│   │   │   ├── AuthContext.jsx  # Authentication state
│   │   │   ├── ProjectContext.jsx # Project operations
│   │   │   └── TaskContext.jsx   # Task operations
│   │   │
│   │   ├── hooks/               # Custom React hooks
│   │   │   ├── useAuth.js       # Auth context hook
│   │   │   ├── useProject.js    # Project context hook
│   │   │   └── useTask.js       # Task context hook
│   │   │
│   │   ├── styles/              # CSS modules
│   │   │   ├── index.css        # Global styles & variables
│   │   │   ├── Auth.css         # Login/Register styles
│   │   │   ├── Navbar.css       # Navigation styles
│   │   │   ├── Projects.css     # Project list styles
│   │   │   ├── ProjectDetail.css # Project detail styles
│   │   │   ├── TaskBoard.css    # Kanban board styles
│   │   │   └── TaskCard.css     # Task card styles
│   │   │
│   │   ├── App.jsx              # Root component with routing
│   │   └── main.jsx             # React entry point
│   │
│   ├── .env.production          # Production API URL
│   ├── vercel.json              # Vercel deployment config
│   ├── vite.config.js           # Vite configuration
│   ├── index.html               # HTML template
│   └── package.json             # Dependencies & scripts
│
├── .gitignore                   # Git exclusions
└── README.md                    # This file
```

## 🚀 Installation & Setup

### Prerequisites
Ensure you have the following installed:
- **Node.js** (v20.19.0 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** (comes with Node.js)
- **MongoDB Atlas account** - [Sign up](https://www.mongodb.com/cloud/atlas)
- **Git** - [Download](https://git-scm.com/)

### 📦 Backend Setup

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd mern_project
```

2. **Navigate to backend directory**
```bash
cd backend
```

3. **Install dependencies**
```bash
npm install
```

4. **Configure environment variables**

Create a `.env` file in the `backend/` directory:

```env
# Database
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/taskflow?retryWrites=true&w=majority

# JWT Secret (use a strong, random string)
JWT_SECRET=your_super_secret_jwt_key_minimum_32_characters_long

# Server Configuration
PORT=5000
NODE_ENV=development
```

> **Note**: For production, use a strong JWT secret (32+ characters). You can generate one with:
> ```bash
> node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
> ```

5. **Start the development server**
```bash
npm run dev      # with nodemon (auto-reload)
# or
npm start        # without auto-reload
```

✅ Backend should now be running at `http://localhost:5000`

Test the health endpoint:
```bash
curl http://localhost:5000/api/health
```

---

### 🎨 Frontend Setup

1. **Navigate to frontend directory**
```bash
cd ../frontend
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables (optional for local development)**

Create `.env.local` file in the `frontend/` directory:

```env
# Development (uses Vite proxy)
VITE_API_URL=http://localhost:5000/api
```

> **Note**: In development, the Vite proxy automatically forwards `/api` requests to `http://localhost:5000`. You don't need this file unless you want to override the default.

4. **Start the development server**
```bash
npm run dev
```

✅ Frontend should now be running at `http://localhost:5173`

5. **Build for production**
```bash
npm run build      # Creates optimized build in dist/
npm run preview    # Preview production build locally
```

---

### 🗄️ MongoDB Atlas Setup

1. **Create a MongoDB Atlas cluster**
   - Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Create a free cluster
   - Choose your cloud provider and region

2. **Create a database user**
   - Go to "Database Access"
   - Click "Add New Database User"
   - Set username and password
   - Grant "Read and write to any database" role

3. **Whitelist your IP address**
   - Go to "Network Access"
   - Click "Add IP Address"
   - Choose "Allow Access from Anywhere" (0.0.0.0/0) for development
   - For production, restrict to your server IP

4. **Get your connection string**
   - Go to "Clusters" → Click "Connect"
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database user password
   - Replace `<dbname>` with `taskflow` or your preferred database name

---

### 🧪 Testing the Application

1. **Register a new user**
   - Navigate to `http://localhost:5173/register`
   - Create an account

2. **Create a project**
   - After login, click "Create Project"
   - Fill in project details

3. **Create tasks**
   - Click on a project card
   - Use "Create Task" modal
   - Test drag-and-drop between columns

4. **Test edit/delete**
   - Click "Edit" on any project or task
   - Confirm deletions work with confirmation dialogs

## 📡 API Documentation

### Base URLs
- **Production**: `https://mustafanoor-taskflow-backend.hf.space/api`
- **Development**: `http://localhost:5000/api`

### Authentication

All protected routes require a JWT token in the Authorization header:
```
Authorization: Bearer <your_jwt_token>
```

#### Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Response (201)**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "64f8a9b...",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "Member"
  }
}
```

#### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

---

### Projects

#### Get All Projects
```http
GET /api/projects?page=1&limit=10&search=marketing
Authorization: Bearer <token>
```

**Response (200)**
```json
{
  "projects": [
    {
      "_id": "64f8a9b...",
      "title": "Marketing Campaign",
      "description": "Q1 2024 campaign",
      "status": "Active",
      "members": ["userId1", "userId2"],
      "createdBy": "userId1",
      "createdAt": "2024-01-15T10:30:00Z"
    }
  ],
  "totalPages": 3,
  "currentPage": 1
}
```

#### Create Project
```http
POST /api/projects
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "New Project",
  "description": "Project description",
  "status": "Active"
}
```

#### Update Project
```http
PUT /api/projects/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Updated Title",
  "status": "Completed"
}
```

#### Delete Project
```http
DELETE /api/projects/:id
Authorization: Bearer <token>
```

---

### Tasks

#### Get Tasks by Project
```http
GET /api/tasks/project/:projectId?status=Todo&priority=High
Authorization: Bearer <token>
```

**Response (200)**
```json
[
  {
    "_id": "64f8a9c...",
    "title": "Design homepage",
    "description": "Create wireframes and mockups",
    "projectId": "64f8a9b...",
    "status": "In Progress",
    "priority": "High",
    "assignedTo": "userId1",
    "dueDate": "2024-02-01T23:59:59Z",
    "createdAt": "2024-01-15T10:30:00Z"
  }
]
```

#### Create Task
```http
POST /api/tasks
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Task title",
  "description": "Task description",
  "projectId": "64f8a9b...",
  "status": "Todo",
  "priority": "Medium",
  "assignedTo": "userId1",
  "dueDate": "2024-02-01"
}
```

#### Update Task
```http
PUT /api/tasks/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "status": "Completed",
  "priority": "Low"
}
```

#### Delete Task
```http
DELETE /api/tasks/:id
Authorization: Bearer <token>
```

---

### Users

#### Get User Profile
```http
GET /api/users/profile
Authorization: Bearer <token>
```

#### Update Profile
```http
PUT /api/users/profile
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "John Updated",
  "email": "newemail@example.com"
}
```

---

### Error Responses

All errors follow this format:

```json
{
  "msg": "Error message description",
  "errors": [
    {
      "field": "email",
      "message": "Email is required"
    }
  ]
}
```

**Common Status Codes:**
- `200` - Success
- `201` - Created
- `400` - Bad Request (validation errors)
- `401` - Unauthorized (invalid/missing token)
- `403` - Forbidden (insufficient permissions)
- `404` - Not Found
- `429` - Too Many Requests (rate limit exceeded)
- `500` - Internal Server Error

---

### Rate Limiting

API is rate-limited to **100 requests per 15 minutes** per IP address.

Rate limit headers:
```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 99
X-RateLimit-Reset: 1640000000
```

## 🚢 Deployment

### Backend Deployment (Hugging Face Spaces)

**Status**: ✅ **LIVE** at [https://mustafanoor-taskflow-backend.hf.space/api](https://mustafanoor-taskflow-backend.hf.space/api)

The backend is deployed as a Docker container on Hugging Face Spaces.

#### Deployment Steps:

1. **Create a new Space on Hugging Face**
   - Go to [huggingface.co/spaces](https://huggingface.co/spaces)
   - Click "Create new Space"
   - Choose "Docker" as the SDK
   - Set Space name (e.g., `TaskFlow-backend`)

2. **Configure local git**
```bash
cd backend
git init
git add .
git commit -m "Initial commit"
```

3. **Add Hugging Face remote and push**
```bash
git remote add space https://huggingface.co/spaces/<your-username>/TaskFlow-backend
git branch -M main
git push --force space main
```

4. **Set environment secrets in Space settings**
   - Go to Space Settings → Variables and secrets
   - Add:
     - `MONGO_URI`: Your MongoDB Atlas connection string
     - `JWT_SECRET`: Your JWT secret key
     - `NODE_ENV`: `production`
     - `PORT`: `7860` (required by Hugging Face)

5. **Verify deployment**
```bash
curl https://<your-username>-taskflow-backend.hf.space/api/health
```

**Docker Configuration** (`Dockerfile`):
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 7860
ENV NODE_ENV=production
CMD ["node", "server.js"]
```

---

### Frontend Deployment (Vercel)

**Status**: 🟡 **Pending** - Configuration complete, ready to deploy

The frontend is configured for deployment on Vercel with SPA routing.

#### Deployment Steps:

1. **Install Vercel CLI** (optional)
```bash
npm install -g vercel
```

2. **Deploy via Vercel Dashboard** (Recommended)
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your repository
   - Configure settings:
     - **Framework Preset**: Vite
     - **Root Directory**: `frontend`
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`
   - Add environment variable:
     - `VITE_API_URL` = `https://mustafanoor-taskflow-backend.hf.space/api`
   - Click "Deploy"

3. **Deploy via CLI** (Alternative)
```bash
cd frontend
vercel --prod
```

4. **Update README with live URL**
   - After deployment, update the "Live Demo" link at the top of this README

**Vercel Configuration** (`vercel.json`):
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

---

### Database (MongoDB Atlas)

**Status**: ✅ **LIVE** - Cloud-hosted database

- **Provider**: MongoDB Atlas
- **Region**: Auto-selected for optimal latency
- **Backup**: Automatic cloud backups enabled
- **Connection**: Secure TLS/SSL connection

**Production Checklist:**
- ✅ IP whitelist configured (0.0.0.0/0 for all IPs or specific server IPs)
- ✅ Database user created with read/write permissions
- ✅ Connection string added to backend environment secrets
- ✅ Connection pooling enabled via Mongoose

---

### Environment Variables Summary

#### Backend (Production)
```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/taskflow
JWT_SECRET=<64-character-random-string>
NODE_ENV=production
PORT=7860
```

#### Frontend (Production)
```env
VITE_API_URL=https://mustafanoor-taskflow-backend.hf.space/api
```

---

### Post-Deployment Testing

1. **Test backend health**
```bash
curl https://mustafanoor-taskflow-backend.hf.space/api/health
```

2. **Test authentication**
```bash
curl -X POST https://mustafanoor-taskflow-backend.hf.space/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","password":"test123"}'
```

3. **Test frontend**
   - Navigate to your Vercel URL
   - Register a new account
   - Create a project
   - Create tasks and test drag-and-drop

---

### Monitoring & Logs

- **Backend Logs**: View in Hugging Face Space → Logs tab
- **Frontend Logs**: View in Vercel Dashboard → Deployments → Function Logs
- **Database Metrics**: View in MongoDB Atlas → Clusters → Metrics

---

### Troubleshooting

**Backend not responding:**
- Check Hugging Face Space logs for errors
- Verify MongoDB connection string is correct
- Ensure port 7860 is set in environment variables

**Frontend API calls failing:**
- Verify `VITE_API_URL` is set correctly
- Check browser console for CORS errors
- Ensure backend CORS is configured for your frontend domain

**Database connection errors:**
- Check MongoDB Atlas IP whitelist
- Verify database user credentials
- Test connection string with MongoDB Compass

## 🎯 Key Learning Outcomes

This project demonstrates proficiency in:

### Full-Stack Development
- ✅ Building RESTful APIs with Express.js and Node.js
- ✅ Database design with MongoDB and Mongoose ODM
- ✅ React component architecture with hooks and Context API
- ✅ State management patterns (Context + Custom Hooks)
- ✅ Client-server communication with Axios

### Authentication & Security
- ✅ JWT-based authentication implementation
- ✅ Password hashing with bcryptjs
- ✅ Protected routes and middleware
- ✅ HTTP security headers with Helmet.js
- ✅ API rate limiting to prevent abuse

### Modern Development Practices
- ✅ Environment-based configuration (.env files)
- ✅ Git version control and branching strategies
- ✅ Docker containerization for deployment
- ✅ RESTful API design principles
- ✅ Error handling and validation
- ✅ CORS configuration for cross-origin requests

### UI/UX Design
- ✅ Responsive design principles (mobile-first)
- ✅ Drag-and-drop interactions (HTML5 Drag & Drop API)
- ✅ Modal dialogs for user interactions
- ✅ Loading states and user feedback
- ✅ CSS gradients and modern styling

### Cloud Deployment
- ✅ MongoDB Atlas cloud database setup
- ✅ Docker containerization (Hugging Face Spaces)
- ✅ SPA deployment with routing (Vercel)
- ✅ Environment variable management in production
- ✅ Production build optimization

---

## 📊 Database Schema

### User Model
```javascript
{
  name: String (required),
  email: String (required, unique),
  password: String (required, hashed),
  role: String (enum: ['Admin', 'Manager', 'Member'], default: 'Member'),
  createdAt: Date (auto-generated)
}
```

### Project Model
```javascript
{
  title: String (required),
  description: String,
  status: String (enum: ['Active', 'On Hold', 'Completed'], default: 'Active'),
  members: [ObjectId] (ref: 'User'),
  createdBy: ObjectId (ref: 'User', required),
  createdAt: Date (auto-generated),
  updatedAt: Date (auto-updated)
}
```

### Task Model
```javascript
{
  title: String (required),
  description: String,
  projectId: ObjectId (ref: 'Project', required),
  status: String (enum: ['Todo', 'In Progress', 'Completed'], default: 'Todo'),
  priority: String (enum: ['Low', 'Medium', 'High', 'Urgent'], default: 'Medium'),
  assignedTo: ObjectId (ref: 'User'),
  dueDate: Date,
  createdAt: Date (auto-generated),
  updatedAt: Date (auto-updated)
}
```

---

## 🛣️ Frontend Routes

| Route | Component | Access | Description |
|-------|-----------|--------|-------------|
| `/` | `Login` | Public | Login page (redirects to `/projects` if authenticated) |
| `/register` | `Register` | Public | User registration |
| `/projects` | `ProjectList` | Protected | Projects dashboard with CRUD operations |
| `/projects/:id` | `ProjectDetail` | Protected | Single project view with Kanban board |

**Route Protection**: All routes except `/` and `/register` require authentication via `ProtectedRoute` wrapper.

---

## 🧩 Architecture Diagram

```
┌─────────────────────────────────────────────────────────┐
│                      Frontend (React)                    │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │   Login/     │  │  Project     │  │    Task      │  │
│  │   Register   │  │   List       │  │    Board     │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
│         │                  │                  │          │
│         └──────────────────┴──────────────────┘          │
│                           │                              │
│                  ┌────────▼────────┐                     │
│                  │  Context API    │                     │
│                  │  (Auth/Project/ │                     │
│                  │   Task)         │                     │
│                  └────────┬────────┘                     │
│                           │                              │
│                  ┌────────▼────────┐                     │
│                  │    Axios HTTP   │                     │
│                  │     Client      │                     │
│                  └────────┬────────┘                     │
└───────────────────────────┼─────────────────────────────┘
                            │
                  ┌─────────▼─────────┐
                  │   HTTPS Request   │
                  │  (JWT in Header)  │
                  └─────────┬─────────┘
                            │
┌───────────────────────────▼─────────────────────────────┐
│                  Backend (Express.js)                    │
│  ┌──────────────────────────────────────────────────┐   │
│  │            Rate Limiter Middleware               │   │
│  └────────────────────┬─────────────────────────────┘   │
│  ┌────────────────────▼─────────────────────────────┐   │
│  │            CORS & Helmet Middleware              │   │
│  └────────────────────┬─────────────────────────────┘   │
│  ┌────────────────────▼─────────────────────────────┐   │
│  │         JWT Authentication Middleware            │   │
│  │           (verifies token if present)            │   │
│  └────────────────────┬─────────────────────────────┘   │
│                       │                                  │
│  ┌────────┬───────────┴───────────┬────────────────┐    │
│  │        │                       │                │    │
│  ▼        ▼                       ▼                ▼    │
│ Auth   Projects                Tasks            Users   │
│ Routes  Routes                 Routes           Routes  │
│  │        │                       │                │    │
│  ▼        ▼                       ▼                ▼    │
│ Auth   Project                 Task             User    │
│ Ctrl   Controller              Controller       Ctrl    │
│  │        │                       │                │    │
│  └────────┴───────────┬───────────┴────────────────┘    │
│                       │                                  │
│              ┌────────▼────────┐                         │
│              │    Mongoose     │                         │
│              │      ODM        │                         │
│              └────────┬────────┘                         │
└───────────────────────┼─────────────────────────────────┘
                        │
              ┌─────────▼─────────┐
              │   MongoDB Atlas   │
              │   (Cloud DB)      │
              │  ┌──────────────┐ │
              │  │ Users Coll.  │ │
              │  │ Projects     │ │
              │  │ Tasks        │ │
              │  └──────────────┘ │
              └───────────────────┘
```

---

## 🐛 Known Issues & Future Enhancements

### Known Issues
- None currently - all core features working as expected ✅

### Potential Future Enhancements
- 📧 **Email Notifications**: Send email alerts for task assignments and due dates
- 💬 **Comments System**: Add threaded discussions on tasks
- 📎 **File Attachments**: Upload and attach files to tasks
- 📊 **Analytics Dashboard**: Visualize project progress with charts
- 🔔 **Real-time Updates**: Implement WebSocket for live collaboration
- 🌙 **Dark Mode**: Toggle between light and dark themes
- 🔍 **Advanced Search**: Full-text search across projects and tasks
- 📱 **Mobile App**: Native mobile app using React Native
- 🔄 **Task Templates**: Create reusable task templates
- 📅 **Calendar View**: Display tasks in calendar format
- 🏷️ **Tags System**: Categorize tasks with custom tags
- 👥 **Activity Feed**: Show recent project/task activity
- 🔐 **Two-Factor Auth**: Enhanced security with 2FA
- 📈 **Progress Tracking**: Burndown charts and velocity metrics
- 🌐 **Internationalization**: Multi-language support

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this project:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Development Guidelines
- Follow existing code style and conventions
- Write clear commit messages
- Test your changes thoroughly
- Update documentation for new features
- Ensure no eslint errors or warnings

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

```
MIT License

Copyright (c) 2024 TaskFlow

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 👨‍💻 Author

**Mustafa Noor**

- GitHub: [@MustafaNoor](https://github.com/MustafaNoor)
- Hugging Face: [@MustafaNoor](https://huggingface.co/MustafaNoor)
- Project: Web Technologies (Semester 5)

---

## 🙏 Acknowledgments

- **MongoDB Atlas** for cloud database hosting
- **Hugging Face** for backend hosting infrastructure
- **Vercel** for frontend deployment platform
- **React Documentation** for excellent learning resources
- **Express.js Community** for comprehensive guides
- **Web Technologies Course** for project guidance

---

## 📞 Support

If you have any questions or need help with setup:

1. Check the [Setup Guide](SETUP_GUIDE.md) for detailed instructions
2. Review the [Deployment Guide](DEPLOYMENT.md) for hosting steps
3. Open an issue on GitHub for bug reports
4. Contact via email for general inquiries

---

<div align="center">

**⭐ Star this repository if you find it helpful!**

Made with ❤️ and ☕ for Web Technologies Course

[🔝 Back to Top](#-taskflow---modern-project-management-system)

</div>
