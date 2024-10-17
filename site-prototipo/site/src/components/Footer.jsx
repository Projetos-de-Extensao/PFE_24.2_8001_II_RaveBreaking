import React from 'react';
import 'style.css';

const Footer = () => {
  return (
    <footer className="footer">
      <a href="https://www.lollapaloozabr.com/" target="_blank" rel="noopener noreferrer">
        https://www.lollapaloozabr.com/
      </a>
      <div className="footer-social">
        <a href="#"><i className="fab fa-youtube"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-tiktok"></i></a>
      </div>
    </footer>
  );
};

export default Footer;
