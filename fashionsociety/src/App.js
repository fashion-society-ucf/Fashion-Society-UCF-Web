import React from 'react';
import './App.css';
import './components/NavBar.css'
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About.js';
import Events from './components/Events.js';
import Committees from './components/Committees.js';

function App() {
  return (

    <div className="App">
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/committees" element={<Committees />} />
        </Routes>
      </div>

  );
}

export default App;
