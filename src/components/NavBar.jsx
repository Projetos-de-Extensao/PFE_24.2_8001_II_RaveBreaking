import React, { useState } from "react";
import { Link } from "react-router-dom";
import Accordion from "./Accordion.jsx"; // Importando o componente Accordion

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">LollaPalooza</div>
      <div className="nav-icons">
          <Link to="/signup">
            <button className="signup-btn">SIGN UP</button>
          </Link>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`navbar-menu ${isOpen ? "open" : ""}`}>
        <li className="nav-item">
          <Link to="/">HOME</Link>
        </li>
        <li className="nav-item">
          <Accordion 
            title="LINE-UP ▼"
            content={
              <>
                <Link to="/lineup/sexta">Sexta-feira (28/03)</Link><br />
                <Link to="/lineup/sabado">Sábado (29/03)</Link><br />
                <Link to="/lineup/domingo">Domingo (30/03)</Link>
              </>
            }
          />
        </li>
        <li className="nav-item">
          <Accordion 
            title="GASTRONOMIA ▼"
            content={
              <>
                <Link to="/gastronomia/restaurantes">Restaurantes Locais</Link>
              </>
            }
          />
        </li>
        <li className="nav-item">
          <Accordion 
            title="MAIS ▼"
            content={
              <>
                <Link to="/mais/mapa">Mapa Local</Link><br />
                <Link to="/mais/gps">GPS</Link><br />
                <Link to="/mais/turismo">Turismo</Link>
              </>
            }
          />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
