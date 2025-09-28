
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';


const Home: React.FC = () => (
  <div className="dashboard-container">
    <header className="dashboard-header">
      <h2>Dashboard</h2>
      <p>Welcome to the District Officer's Portal</p>
    </header>
    <div className="dashboard-tiles">
      <Link to="/services" className="dashboard-tile">Services</Link>
      <Link to="/documents" className="dashboard-tile">Documents Required</Link>
      <Link to="/village-info" className="dashboard-tile">Village Information</Link>
      <Link to="/schemes" className="dashboard-tile">Government Schemes</Link>
      <Link to="/contact" className="dashboard-tile">Contact Office</Link>
    </div>
  </div>
);

export default Home;
