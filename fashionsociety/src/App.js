import React from 'react';
import './App.css';
import NavBar from './components/ui/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About/About.js';
import Events from './components/pages/Events.js';
import Committees from './components/pages/Comittees/Committees.js';
import Production from './components/pages/Production.js';
import Design from './components/pages/Design.js';
import Modeling from './components/pages/Modeling.js';

function App() {
  return (
    <main className="racing-sans one-regular">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/committees" element={<Committees />} />
        <Route path='/production' element={<Production />} />
        <Route path='/design' element={<Design />} />
        <Route path='/modeling' element={<Modeling />} />
      </Routes>
    </main>
  );
}

export default App;
