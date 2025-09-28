
import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.scss';

const Contact: React.FC = () => (
  <section className="contact-section">
    <h2>Contact Office</h2>
    <div className="contact-info">
      <div className="contact-item">
        {FaEnvelope({ className: 'contact-icon' })}
        <span>Email:</span>
        <a href="mailto:jawaleakshay99@gmail.com">jawaleakshay99@gmail.com</a>
      </div>
      <div className="contact-item">
        {FaPhoneAlt({ className: 'contact-icon' })}
        <span>Mobile:</span>
        <a href="tel:9373510034">9373510034</a>
      </div>
      <div className="contact-item">
        {FaMapMarkerAlt({ className: 'contact-icon' })}
        <span>Address:</span>
        <span>Grampanchayat Office, Mahagaon</span>
      </div>
    </div>
  </section>
);

export default Contact;
