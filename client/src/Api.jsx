import axios from 'axios';

const Apis= 'api'

const api = axios.create({
  baseURL: Apis,
});
const endpoints = {
  tasks: '/tasks', 
};


const tasksApi = {
  getAllTasks: () => api.get('http://localhost:3001/tasks'),
  addTask: (task) => api.post('http://localhost:3001/tasks', task),
  updateTask: (taskId, updatedTask) => api.put(`${'http://localhost:3001/tasks'.tasks}/${taskId}`, updatedTask),
  deleteTask: (taskId) => api.delete(`${'http://localhost:3001/tasks'.tasks}/${taskId}`),
};

export { tasksApi };
