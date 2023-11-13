
import React from 'react';
import { useDispatch } from 'react-redux';
import { completeTask, deleteTask, updateTask} from '../redux/Taskslice';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const handleComplete = () => {
    dispatch(completeTask(task.id));
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };
  const handleUpdate = () => {
    dispatch(updateTask(task.id));
  };

  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Due Date: {task.dueDate}</p>
      <p>Status: {task.completed ? 'Completed' : 'Pending'}</p>
      <p>Priority: {task.priority}</p>
      <button onClick={handleComplete}>Complete</button>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleUpdate}> Update </button>
    </div>
  );
};

export default TaskItem;
