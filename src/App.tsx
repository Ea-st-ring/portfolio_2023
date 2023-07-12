import React from 'react';
import './App.css';
import { styled } from 'styled-components';
import Main from './pages/Main';
import Project from './pages/Project';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/project' element={<Project/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
