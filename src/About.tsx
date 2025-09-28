import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => (
  <div>
    <h2>About Page</h2>
    <p>This is the about page of the portfolio.</p>
    <nav>
      <Link to="/">Home</Link> | <Link to="/contact">Contact</Link>
    </nav>
  </div>
);

export default About;
