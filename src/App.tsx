

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Documents from './pages/Documents/Documents';
import VillageInfo from './pages/VillageInfo/VillageInfo';
import Schemes from './pages/Schemes/Schemes';
import Contact from './pages/Contact/Contact';

import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/village-info" element={<VillageInfo />} />
        <Route path="/schemes" element={<Schemes />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
