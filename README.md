# TeamFlow - Project Management System

A full-stack MERN application for managing projects and tasks collaboratively.

## Features

- **User Authentication**: Register, login with JWT-based authentication
- **Project Management**: Create, update, and delete projects
- **Task Management**: Create, assign, and track tasks with status and priority
- **Team Collaboration**: Add team members to projects
- **Responsive Design**: Mobile-friendly UI built with React
- **Real-time Updates**: Seamless API integration with Axios

## Tech Stack

### Backend
- **Node.js & Express.js**: RESTful API server
- **MongoDB & Mongoose**: Database with ODM
- **JWT**: Secure authentication
- **bcryptjs**: Password hashing

### Frontend
- **React 18**: UI library
- **React Router**: Client-side routing
- **Axios**: HTTP client for API calls
- **Context API**: State management

## Project Structure

```
mern_project/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── projectController.js
│   │   ├── taskController.js
│   │   └── userController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Project.js
│   │   └── Task.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── projectRoutes.js
│   │   ├── taskRoutes.js
│   │   └── userRoutes.js
│   ├── .env.example
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   ├── ProjectList.js
│   │   │   ├── ProjectDetail.js
│   │   │   ├── TaskBoard.js
│   │   │   ├── TaskCard.js
│   │   │   ├── Navbar.js
│   │   │   └── ProtectedRoute.js
│   │   ├── context/
│   │   │   ├── AuthContext.js
│   │   │   ├── ProjectContext.js
│   │   │   └── TaskContext.js
│   │   ├── hooks/
│   │   │   ├── useAuth.js
│   │   │   ├── useProject.js
│   │   │   └── useTask.js
│   │   ├── styles/
│   │   │   ├── index.css
│   │   │   ├── Auth.css
│   │   │   ├── Navbar.css
│   │   │   ├── Projects.css
│   │   │   ├── ProjectDetail.css
│   │   │   ├── TaskBoard.css
│   │   │   └── TaskCard.css
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
└── .gitignore
```

## Installation & Setup

### Prerequisites
- Node.js (v14+)
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
npm install
```

2. Create `.env` file (copy from `.env.example`):
```bash
MONGO_URI=mongodb://localhost:27017/teamflow
JWT_SECRET=your_super_secret_jwt_key_here_change_in_production
PORT=5000
NODE_ENV=development
```

3. Start the server:
```bash
npm run dev  # with nodemon
# or
npm start   # without hot reload
```

Server runs on `http://localhost:5000`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
npm install
```

2. Start the development server:
```bash
npm start
```

Frontend runs on `http://localhost:3000`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Projects
- `GET /api/projects` - Get all projects (with pagination & search)
- `POST /api/projects` - Create new project
- `GET /api/projects/:id` - Get project details with tasks
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project
- `POST /api/projects/:id/members` - Add member to project
- `DELETE /api/projects/:id/members` - Remove member from project

### Tasks
- `GET /api/tasks/project/:projectId` - Get tasks by project (with filters)
- `POST /api/tasks` - Create new task
- `PUT /api/tasks/:id` - Update task status/priority
- `DELETE /api/tasks/:id` - Delete task
- `GET /api/tasks/stats/:projectId` - Get task statistics

### Users
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile
- `GET /api/users/all` - Get all users (with pagination & search)

## Features Implemented

✅ User Authentication & Authorization
✅ JWT-based secure token management
✅ Project CRUD operations
✅ Task management with status tracking
✅ Role-based access control
✅ Task filtering & pagination
✅ Responsive React UI
✅ Protected routes
✅ Error handling & validation
✅ Context API for state management
✅ Axios API integration

## Additional Features to Consider

- 📧 Email notifications
- 📁 File upload support
- 💬 Comments & discussion threads
- 📊 Analytics & reports
- 🔔 Real-time notifications (Socket.io)
- 📱 Mobile app
- 🌙 Dark mode
- 🔍 Advanced filtering & sorting

## Deployment

### Backend Deployment (Heroku/Render)
1. Set environment variables on hosting platform
2. Connect MongoDB Atlas database
3. Deploy with `git push`

### Frontend Deployment (Vercel/Netlify)
1. Build: `npm run build`
2. Deploy build folder
3. Set API URL to backend domain

## Contributing

1. Create a feature branch
2. Commit changes
3. Push to branch
4. Create Pull Request

## License

MIT License - feel free to use this project for learning purposes.
