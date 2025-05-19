import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/navbar.png'; // Caminho corrigido

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
      <Link to="/" className="logo">
          <img 
            src={logo} // Usando a importação
            alt="SETEC 2025" 
            className="logo-image"
          />
        </Link>

        <button 
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Início</Link>
          <Link to="/inscricoes" className="nav-link" onClick={() => setIsOpen(false)}>Inscrições</Link>
          <Link to="/galeria" className="nav-link" onClick={() => setIsOpen(false)}>Galeria</Link>
          <Link to="/cronograma" className="nav-link" onClick={() => setIsOpen(false)}>Cronograma</Link>
          <Link to="/exposicoes" className="nav-link" onClick={() => setIsOpen(false)}>Exposições</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;