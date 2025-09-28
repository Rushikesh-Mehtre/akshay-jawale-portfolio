import React from 'react';
import './footer.scss';

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer-content">
      <span className="footer-title">District Revenue Office</span>
      <span className="footer-contact">Contact: revenueoffice@email.gov.in | +91-1234567890</span>
      <span className="footer-copyright">&copy; {new Date().getFullYear()} Government of India</span>
    </div>
  </footer>
);

export default Footer;
