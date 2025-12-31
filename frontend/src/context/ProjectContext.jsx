import { createContext, useState, useCallback } from 'react';
import axios from 'axios';

export const ProjectContext = createContext();

const API_URL = import.meta.env.VITE_API_URL || '/api';

export const ProjectProvider = ({ children, token }) => {
  const [projects, setProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getConfig = useCallback(() => ({
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }), [token]);

  const fetchProjects = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(`${API_URL}/projects`, getConfig());
      setProjects(response.data.projects);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch projects');
    } finally {
      setLoading(false);
    }
  }, [getConfig]);

  const fetchProjectById = useCallback(async (id) => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(`${API_URL}/projects/${id}`, getConfig());
      setCurrentProject(response.data);
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch project');
    } finally {
      setLoading(false);
    }
  }, [getConfig]);

  const createProject = useCallback(async (projectData) => {
    try {
      setError(null);
      const response = await axios.post(`${API_URL}/projects`, projectData, getConfig());
      setProjects((prev) => [...prev, response.data]);
      return response.data;
    } catch (err) {
      const message = err.response?.data?.message || 'Failed to create project';
      setError(message);
      throw new Error(message);
    }
  }, [getConfig]);

  const updateProject = useCallback(async (id, projectData) => {
    try {
      setError(null);
      const response = await axios.put(`${API_URL}/projects/${id}`, projectData, getConfig());
      setProjects((prev) =>
        prev.map((project) => (project._id === id ? response.data : project))
      );
      if (currentProject?._id === id) {
        setCurrentProject(response.data);
      }
      return response.data;
    } catch (err) {
      const message = err.response?.data?.message || 'Failed to update project';
      setError(message);
      throw new Error(message);
    }
  }, [getConfig, currentProject]);

  const deleteProject = useCallback(async (id) => {
    try {
      setError(null);
      await axios.delete(`${API_URL}/projects/${id}`, getConfig());
      setProjects((prev) => prev.filter((project) => project._id !== id));
      if (currentProject?._id === id) {
        setCurrentProject(null);
      }
    } catch (err) {
      const message = err.response?.data?.message || 'Failed to delete project';
      setError(message);
      throw new Error(message);
    }
  }, [getConfig, currentProject]);

  return (
    <ProjectContext.Provider
      value={{
        projects,
        currentProject,
        loading,
        error,
        fetchProjects,
        fetchProjectById,
        createProject,
        updateProject,
        deleteProject,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
