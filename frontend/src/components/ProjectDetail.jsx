import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProject } from '../hooks/useProject';
import { useTask } from '../hooks/useTask';
import Navbar from './Navbar';
import TaskBoard from './TaskBoard';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentProject, fetchProjectById } = useProject();
  const { fetchTasks } = useTask();

  useEffect(() => {
    fetchProjectById(id);
    fetchTasks(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (!currentProject) {
    return (
      <>
        <Navbar />
        <div className="projects-container">Loading project...</div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="projects-container">
        <button onClick={() => navigate('/projects')} className="btn-secondary">
          ← Back to Projects
        </button>
        <h1>{currentProject.title}</h1>
        <p>{currentProject.description}</p>
        <TaskBoard projectId={id} />
      </div>
    </>
  );
};

export default ProjectDetail;
