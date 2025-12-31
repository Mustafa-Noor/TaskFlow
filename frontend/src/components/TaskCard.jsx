const TaskCard = ({ task, onDragStart, onEdit, onDelete }) => {
  return (
    <div
      className="task-card"
      draggable
      onDragStart={(e) => onDragStart(e, task._id)}
    >
      <div className="task-title">{task.title}</div>
      {task.description && (
        <div className="task-description">{task.description}</div>
      )}
      <div className="task-footer">
        <span className={`task-priority priority-${task.priority}`}>
          {task.priority}
        </span>
        {task.dueDate && (
          <span className="task-assignee">
            Due: {new Date(task.dueDate).toLocaleDateString()}
          </span>
        )}
      </div>
      <div style={{ marginTop: '0.75rem', display: 'flex', gap: '0.5rem' }}>
        <button 
          onClick={(e) => { e.stopPropagation(); onEdit(task); }}
          className="btn-secondary"
          style={{ flex: 1, padding: '0.25rem 0.5rem', fontSize: '0.75rem' }}
        >
          Edit
        </button>
        <button 
          onClick={(e) => { e.stopPropagation(); onDelete(task._id); }}
          className="btn-logout"
          style={{ flex: 1, padding: '0.25rem 0.5rem', fontSize: '0.75rem' }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
