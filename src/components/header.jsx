import React, { useState, useEffect } from 'react';
import heroBg from '../assets/headerimg.webp';
import "../css/Header.css";
import { FaWhatsapp } from 'react-icons/fa';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  return (
    <header className={`hero ${menuOpen ? 'menu-open' : ''}`} id='home' style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="overlay"></div>

      <div className="hero-content">
        <h1>
          NEUR<strong style={{ color: "#f4c10f",fontFamily: "Universe" }}>O</strong>NILE
        </h1>
        <h3 style={{ color: "#f4c10f" }}>Infinite Possibilities in Wire Harness Solutions</h3>
        <p>Custom-built wire harnesses for automotive, industrial, and electronic applications.</p>
        <p>
          At NEURONILE, we specialize in designing and manufacturing high-quality wire harnesses
          tailored to your exact needs. Whether you're in automotive, machinery, or electronics,
          we bring reliability and precision to every connection.
        </p>
        <a
          href="https://wa.me/18253335276"
          className="hero-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          
     Let's chat
  <FaWhatsapp className="whatsapp-icon" />
  <span className="speech-bubble">Let's chat with Neuronile</span>
        </a>
      </div>
    </header>
  );
};
