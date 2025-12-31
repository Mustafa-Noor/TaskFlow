import { useState } from 'react';
import { useTask } from '../hooks/useTask';
import TaskCard from './TaskCard';

const TaskBoard = ({ projectId }) => {
  const { tasks, createTask, updateTask, deleteTask } = useTask();
  const [showModal, setShowModal] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [error, setError] = useState('');

  const columns = [
    { id: 'Todo', title: 'To Do' },
    { id: 'In Progress', title: 'In Progress' },
    { id: 'In Review', title: 'In Review' },
    { id: 'Done', title: 'Done' },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!title) {
      setError('Title is required');
      return;
    }

    try {
      if (editingTask) {
        await updateTask(editingTask._id, {
          title,
          description,
          priority,
          dueDate: dueDate || undefined,
        });
      } else {
        await createTask({
          title,
          description,
          priority,
          dueDate: dueDate || undefined,
          projectId: projectId,
          status: 'Todo',
        });
      }
      setTitle('');
      setDescription('');
      setPriority('medium');
      setDueDate('');
      setEditingTask(null);
      setShowModal(false);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    setTitle(task.title);
    setDescription(task.description || '');
    setPriority(task.priority);
    setDueDate(task.dueDate ? new Date(task.dueDate).toISOString().split('T')[0] : '');
    setShowModal(true);
  };

  const handleDeleteTask = async (taskId) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      try {
        await deleteTask(taskId);
      } catch (err) {
        alert('Failed to delete task: ' + err.message);
      }
    }
  };

  const handleCreateNew = () => {
    setEditingTask(null);
    setTitle('');
    setDescription('');
    setPriority('medium');
    setDueDate('');
    setShowModal(true);
  };

  const handleDragStart = (e, taskId) => {
    e.dataTransfer.setData('taskId', taskId);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = async (e, newStatus) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData('taskId');
    const task = tasks.find((t) => t._id === taskId);

    if (task && task.status !== newStatus) {
      try {
        await updateTask(taskId, { status: newStatus });
      } catch (err) {
        console.error('Failed to update task:', err);
      }
    }
  };

  const getTasksByStatus = (status) => {
    return tasks.filter((task) => task.status === status);
  };

  return (
    <div className="task-board">
      <div className="board-header">
        <h2>Task Board</h2>
        <button onClick={handleCreateNew} className="btn-create">
          + New Task
        </button>
      </div>

      <div className="board-columns">
        {columns.map((column) => (
          <div
            key={column.id}
            className="board-column"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, column.id)}
          >
            <div className="column-header">
              <h3>{column.title}</h3>
              <span className="task-count">
                {getTasksByStatus(column.id).length}
              </span>
            </div>
            <div className="task-list">
              {getTasksByStatus(column.id).map((task) => (
                <TaskCard
                  key={task._id}
                  task={task}
                  onDragStart={handleDragStart}
                  onEdit={handleEditTask}
                  onDelete={handleDeleteTask}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{editingTask ? 'Edit Task' : 'Create New Task'}</h2>
              <button onClick={() => setShowModal(false)} className="btn-close">
                ×
              </button>
            </div>
            {error && <div className="error-message">{error}</div>}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="title">Task Title</label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter task title"
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter task description"
                />
              </div>
              <div className="form-group">
                <label htmlFor="priority">Priority</label>
                <select
                  id="priority"
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '5px', border: '1px solid #ddd' }}
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="dueDate">Due Date (Optional)</label>
                <input
                  type="date"
                  id="dueDate"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                />
              </div>
              <button type="submit" className="btn-primary">
                {editingTask ? 'Update Task' : 'Create Task'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskBoard;
