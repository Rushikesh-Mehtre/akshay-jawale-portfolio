
import React, { useState } from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="navbar-header">
      <div className="navbar-logo-name">
  <img src={require('../../assets/Ashoka_Chakra.svg').default} alt="Ashoka Chakra" className="navbar-logo" />
        <div className="navbar-title">
          <span className="navbar-name">Akshay Jawale</span>
          <span className="navbar-designation">District Officer</span>
        </div>
      </div>
      <button className="navbar-hamburger" onClick={handleMenuToggle} aria-label="Toggle navigation">
        {menuOpen ? (
          <span className="navbar-cross">&#10005;</span> // Unicode cross (X)
        ) : (
          <>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </>
        )}
      </button>
      <nav className={menuOpen ? 'navbar-nav open' : 'navbar-nav'}>
        <Link to="/" className="navbar-link" onClick={() => setMenuOpen(false)}>Dashboard</Link>
        <Link to="/services" className="navbar-link" onClick={() => setMenuOpen(false)}>Services</Link>
        <Link to="/documents" className="navbar-link" onClick={() => setMenuOpen(false)}>Documents Required</Link>
        <Link to="/village-info" className="navbar-link" onClick={() => setMenuOpen(false)}>Village Information</Link>
        <Link to="/schemes" className="navbar-link" onClick={() => setMenuOpen(false)}>Government Schemes</Link>
        <Link to="/contact" className="navbar-link" onClick={() => setMenuOpen(false)}>Contact Office</Link>
      </nav>
    </header>
  );
};

export default Navbar;
