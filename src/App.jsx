// src/App.jsx
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import EventSignup from './pages/EventSignup.jsx';
import EventLogin from './pages/EventLogin.jsx';  
import Mapa from './pages/Mapa.jsx';
import Turismo from './pages/Turismo.jsx';
import GastronomiaRestaurantes from './pages/Gastronomia.jsx';
import Lineup from './pages/LineUp.jsx';
import Gps from './pages/Gps.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<EventSignup />} />
        <Route path="/login" element={<EventLogin />} /> 
        <Route path="/mais/mapa" element={<Mapa />} />
        <Route path="/mais/turismo" element={<Turismo />} />
        <Route path="/gastronomia/restaurantes" element={<GastronomiaRestaurantes />} />
        <Route path="/lineup/sexta" element={<Lineup />} />
        <Route path="/mais/gps" element={<Gps />} />

        {/* Rota 404 - Página não encontrada */}
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
    </Router>
  );
}

export default App;
