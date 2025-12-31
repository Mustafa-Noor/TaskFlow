import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProject } from '../hooks/useProject';
import Navbar from './Navbar';

const ProjectList = () => {
  const { projects, loading, fetchProjects, createProject, updateProject, deleteProject } = useProject();
  const [showModal, setShowModal] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!title) {
      setError('Title is required');
      return;
    }

    try {
      if (editingProject) {
        await updateProject(editingProject._id, { title, description, deadline: deadline || undefined });
      } else {
        await createProject({ title, description, deadline: deadline || undefined });
      }
      setTitle('');
      setDescription('');
      setDeadline('');
      setEditingProject(null);
      setShowModal(false);
      fetchProjects();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEdit = (e, project) => {
    e.stopPropagation();
    setEditingProject(project);
    setTitle(project.title);
    setDescription(project.description || '');
    setDeadline(project.deadline ? new Date(project.deadline).toISOString().split('T')[0] : '');
    setShowModal(true);
  };

  const handleDelete = async (e, projectId) => {
    e.stopPropagation();
    if (window.confirm('Are you sure you want to delete this project?')) {
      try {
        await deleteProject(projectId);
        fetchProjects();
      } catch (err) {
        alert('Failed to delete project: ' + err.message);
      }
    }
  };

  const handleCreateNew = () => {
    setEditingProject(null);
    setTitle('');
    setDescription('');
    setDeadline('');
    setShowModal(true);
  };

  return (
    <>
      <Navbar />
      <div className="projects-container">
        <div className="projects-header">
          <h1>My Projects</h1>
          <button onClick={handleCreateNew} className="btn-create">
            + New Project
          </button>
        </div>

        {loading ? (
          <div>Loading projects...</div>
        ) : (
          <div className="projects-grid">
            {projects.map((project) => (
              <div
                key={project._id}
                className="project-card"
              >
                <div onClick={() => navigate(`/projects/${project._id}`)} style={{ cursor: 'pointer' }}>
                  <h3>{project.title}</h3>
                  <p>{project.description || 'No description'}</p>
                  <div className="project-meta">
                    <span>Members: {project.members?.length || 0}</span>
                    <span>
                      {project.deadline
                        ? new Date(project.deadline).toLocaleDateString()
                        : 'No deadline'}
                    </span>
                  </div>
                </div>
                <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
                  <button 
                    onClick={(e) => handleEdit(e, project)} 
                    className="btn-secondary"
                    style={{ flex: 1 }}
                  >
                    Edit
                  </button>
                  <button 
                    onClick={(e) => handleDelete(e, project._id)} 
                    className="btn-logout"
                    style={{ flex: 1 }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {showModal && (
          <div className="modal-overlay" onClick={() => setShowModal(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h2>{editingProject ? 'Edit Project' : 'Create New Project'}</h2>
                <button onClick={() => setShowModal(false)} className="btn-close">
                  ×
                </button>
              </div>
              {error && <div className="error-message">{error}</div>}
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="title">Project Title</label>
                  <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter project title"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <input
                    type="text"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter project description"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="deadline">Deadline (Optional)</label>
                  <input
                    type="date"
                    id="deadline"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn-primary">
                  {editingProject ? 'Update Project' : 'Create Project'}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProjectList;
