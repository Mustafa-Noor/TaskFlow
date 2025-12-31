import { createContext, useState, useCallback } from 'react';
import axios from 'axios';

export const TaskContext = createContext();

const API_URL = import.meta.env.VITE_API_URL || '/api';

export const TaskProvider = ({ children, token }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getConfig = useCallback(() => ({
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }), [token]);

  const fetchTasks = useCallback(async (projectId) => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(`${API_URL}/tasks/project/${projectId}`, getConfig());
      setTasks(response.data.tasks);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch tasks');
    } finally {
      setLoading(false);
    }
  }, [getConfig]);

  const createTask = useCallback(async (taskData) => {
    try {
      setError(null);
      const response = await axios.post(`${API_URL}/tasks`, taskData, getConfig());
      setTasks((prev) => [...prev, response.data]);
      return response.data;
    } catch (err) {
      const message = err.response?.data?.message || 'Failed to create task';
      setError(message);
      throw new Error(message);
    }
  }, [getConfig]);

  const updateTask = useCallback(async (id, taskData) => {
    try {
      setError(null);
      const response = await axios.put(`${API_URL}/tasks/${id}`, taskData, getConfig());
      setTasks((prev) =>
        prev.map((task) => (task._id === id ? response.data : task))
      );
      return response.data;
    } catch (err) {
      const message = err.response?.data?.message || 'Failed to update task';
      setError(message);
      throw new Error(message);
    }
  }, [getConfig]);

  const deleteTask = useCallback(async (id) => {
    try {
      setError(null);
      await axios.delete(`${API_URL}/tasks/${id}`, getConfig());
      setTasks((prev) => prev.filter((task) => task._id !== id));
    } catch (err) {
      const message = err.response?.data?.message || 'Failed to delete task';
      setError(message);
      throw new Error(message);
    }
  }, [getConfig]);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loading,
        error,
        fetchTasks,
        createTask,
        updateTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
