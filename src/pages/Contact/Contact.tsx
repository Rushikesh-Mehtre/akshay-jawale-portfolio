
import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaUser, FaIdBadge } from 'react-icons/fa';
import './Contact.scss';

const Contact: React.FC = () => (
  <section className="contact-section">
    <h2>संपर्क कार्यालय</h2>
    <div className="contact-info">
      <div className="contact-item">
        {FaUser({ className: 'contact-icon' })}
        <span>नाव:</span>
        <span>अक्षय जवळे</span>
      </div>
      <div className="contact-item">
        {FaIdBadge({ className: 'contact-icon' })}
        <span>पदनाम:</span>
        <span>ग्राम महसूल अधिकारी (तलाठी)</span>
      </div>
      <div className="contact-item">
        {FaEnvelope({ className: 'contact-icon' })}
        <span>ईमेल:</span>
        <a href="mailto:jawaleakshay99@gmail.com">jawaleakshay99@gmail.com</a>
      </div>
      <div className="contact-item">
        {FaPhoneAlt({ className: 'contact-icon' })}
        <span>मोबाईल:</span>
        <a href="tel:9373510034">9373510034</a>
      </div>
      <div className="contact-item">
        {FaMapMarkerAlt({ className: 'contact-icon' })}
        <span>पत्ता:</span>
        <span>ग्रामपंचायत कार्यालय, महागाव, सातारा </span>
      </div>
    </div>
  </section>
);

export default Contact;
