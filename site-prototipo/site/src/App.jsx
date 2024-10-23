// src/App.jsx
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import EventSignup from './pages/EventSignup.jsx';
import Mapa from './pages/Mapa.jsx';
import Turismo from './pages/Turismo.jsx';
import GastronomiaRestaurantes  from './pages/Gastronomia.jsx'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<EventSignup />} />
          <Route path="/mais/mapa" element={<Mapa />} />
          <Route path="/mais/turismo" element={<Turismo />} />
          <Route path="/gastronomia/restaurantes" element={<GastronomiaRestaurantes/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
