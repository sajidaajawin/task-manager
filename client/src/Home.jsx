
import React from 'react';
import TaskList from './Components/Tasklist';
import TaskForm from './Components/Taskform';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import TaskFilter from './Components/Tasklistfillter';

const HomePage = () => {
  return (
    <div>
        <Navbar />
      <TaskList />
      <TaskForm />
   <TaskFilter />
      <Footer />
    </div>
  );
};

export default HomePage;
