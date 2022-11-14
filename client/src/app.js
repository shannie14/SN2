import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { NavResp, Login, Dashboard } from './components/index.js';
import { Home, Audience } from './pages/index.js';

function App() {
  return (
    <Router>
      <div>
        <NavResp />
        <div className="container">
        </div>
      </div>
    </Router>
  );
}

export default App;
