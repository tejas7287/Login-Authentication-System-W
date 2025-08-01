import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// TODO: Import components when created
// import Login from './components/Login';
// import Register from './components/Register';
// import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Login Authentication System</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<div>Welcome to the Authentication System</div>} />
            {/* TODO: Add routes for login, register, dashboard */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;