
import React from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <header className="navbar-header">
      <div className="navbar-logo-name">
                <div className="navbar-title">
          <span className="navbar-name">अक्षय जवळे</span>
          <span className="navbar-designation">ग्राम महसूल अधिकारी</span>
        </div>
      </div>
      <nav className="navbar-nav">
        <Link to="/" className="navbar-link">मुख्य पृष्ठ</Link>
        {/* <Link to="/services" className="navbar-link">सेवा</Link> */}
        <Link to="/documents" className="navbar-link">नोंदी व आवश्यक कागदपत्रे</Link>
        <Link to="/village-info" className="navbar-link">गावाची माहिती</Link>
        <Link to="/schemes" className="navbar-link">सरकारी योजना</Link>
        <Link to="/contact" className="navbar-link">संपर्क कार्यालय</Link>
        <Link to="/farmer-id" className="navbar-link">शेतकरी ओळखपत्र</Link>
      </nav>
    </header>
  );
};

export default Navbar;
