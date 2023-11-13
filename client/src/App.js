
import React from 'react';
import HomePage from './Home';
import LoginForm from '../src/Components/Login';
import RegisterForm from '../src/Components/Register';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path='/login' element={<LoginForm/>} />
        <Route path='/Register' element={<RegisterForm/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
