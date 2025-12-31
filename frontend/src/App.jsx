import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ProjectProvider } from "./context/ProjectContext";
import { TaskProvider } from "./context/TaskContext";
import { useAuth } from "./hooks/useAuth";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import ProjectList from "./components/ProjectList";
import ProjectDetail from "./components/ProjectDetail";
import ProtectedRoute from "./components/ProtectedRoute";

const AppContent = () => {
  const { token } = useAuth();

  return (
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/projects"
          element={
            <ProtectedRoute>
              <ProjectProvider token={token}>
                <TaskProvider token={token}>
                  <ProjectList />
                </TaskProvider>
              </ProjectProvider>
            </ProtectedRoute>
          }
        />
        <Route
          path="/projects/:id"
          element={
            <ProtectedRoute>
              <ProjectProvider token={token}>
                <TaskProvider token={token}>
                  <ProjectDetail />
                </TaskProvider>
              </ProjectProvider>
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Navigate to="/projects" replace />} />
      </Routes>
  );
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

export default App;
