import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';

function App() {
  return (
    <>
    <Router>
      {/* NavBar estará sempre visível em todas as páginas */}
      <NavBar />
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
         </Routes>
      {/* Footer estará sempre visível em todas as páginas */}
      <Footer />
    </Router>
    </>
  )
}

export default App
