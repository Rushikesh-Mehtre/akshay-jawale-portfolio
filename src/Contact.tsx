import React from 'react';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => (
  <div>
    <h2>Contact Page</h2>
    <p>Get in touch!</p>
    <nav>
      <Link to="/">Home</Link> | <Link to="/about">About</Link>
    </nav>
  </div>
);

export default Contact;
