import React, { useState } from 'react';
import 'style.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [lineupDropdown, setLineupDropdown] = useState(false);
  const [gastronomiaDropdown, setGastronomiaDropdown] = useState(false);
  const [maisDropdown, setMaisDropdown] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="nav-menu">
          <li><Link to="/">HOME</Link></li>

          {/* Line-Up Dropdown */}
          <li
            className="nav-item"
            onMouseEnter={() => setLineupDropdown(true)}
            onMouseLeave={() => setLineupDropdown(false)}
          >
            <span className="nav-link">LINE-UP ▼</span>
            {lineupDropdown && (
              <ul className="dropdown">
                <li><Link to="/lineup/sexta">Sexta-feira (28/03)</Link></li>
                <li><Link to="/lineup/sabado">Sábado (29/03)</Link></li>
                <li><Link to="/lineup/domingo">Domingo (30/03)</Link></li>
              </ul>
            )}
          </li>

          {/* Gastronomia Dropdown */}
          <li
            className="nav-item"
            onMouseEnter={() => setGastronomiaDropdown(true)}
            onMouseLeave={() => setGastronomiaDropdown(false)}
          >
            <span className="nav-link">GASTRONOMIA ▼</span>
            {gastronomiaDropdown && (
              <ul className="dropdown">
                <li><Link to="/gastronomia/restaurantes">Restaurantes Locais</Link></li>
                <li><Link to="/gastronomia/cardapios">Cardápios</Link></li>
              </ul>
            )}
          </li>

          {/* Mais Dropdown */}
          <li
            className="nav-item"
            onMouseEnter={() => setMaisDropdown(true)}
            onMouseLeave={() => setMaisDropdown(false)}
          >
            <span className="nav-link">MAIS ▼</span>
            {maisDropdown && (
              <ul className="dropdown">
                <li><Link to="/mais/mapa">Mapa Local</Link></li>
                <li><Link to="/mais/gps">GPS</Link></li>
                <li><Link to="/mais/turismo">Turismo</Link></li>
              </ul>
            )}
          </li>
        </ul>

        <div className="nav-icons">
          <button className="signup-btn">SIGN UP</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
