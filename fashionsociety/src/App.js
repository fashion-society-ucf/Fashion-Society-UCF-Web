import React from 'react';
import './App.css';
import './components/NavBar.css'
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About.js';
import Events from './components/Events.js';
import Committees from './components/Committees.js';
import DesignCommittee from './components/Design';
import StylingCommittee from './components/Styling';
import ModelingCommittee from './components/Modeling';
import BeautyCommittee from './components/Beauty';
import PhotographyCommittee from './components/Photography';
import SocialMediaCommittee from './components/SocialMedia';
import ProductionCommittee from './components/Production';
import ZineCommittee from './components/Zine';
import WebCommittee from './components/WebDesign';


function App() {
  return (

    <div className="App">
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/committees" element={<Committees />} />
          <Route path="/design" element={<DesignCommittee />} />
          <Route path="/styling" element={<StylingCommittee />} />
          <Route path="/modeling" element={<ModelingCommittee />} />
          <Route path="/beauty" element={<BeautyCommittee />} />
          <Route path="/photography" element={<PhotographyCommittee />} />
          <Route path="/socialmedia" element={<SocialMediaCommittee />} />
          <Route path="/production" element={<ProductionCommittee />} />
          <Route path="/webdesign" element={<WebCommittee />} />
          <Route path="/zine" element={<ZineCommittee />} />
        
        </Routes>
      </div>

  );
}

export default App;
