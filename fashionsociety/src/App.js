import React from 'react';
import './App.css';
import NavBar from './components/ui/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About/About.js';
import Events from './components/pages/Events.js';
import Committees from './components/pages/Committees/Committees.js';

function App() {
  return (
    <main className="racing-sans one-regular">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/committees" element={<Committees />} />
      </Routes>
    </main>
  );
}

export default App;
