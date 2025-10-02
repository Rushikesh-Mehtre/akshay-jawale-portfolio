import React from 'react';
import { FaUser, FaUsers, FaMoneyCheckAlt,FaRegAddressCard } from 'react-icons/fa';
import './Schemes.scss';

const Schemes: React.FC = () => (
  <section className="schemes-section">
    <h2>केंद्र सरकारच्या योजना</h2>
    <div className="scheme-card">
      {FaUser({ className: 'scheme-icon' })}
      <div>
        <h3>इंदिरा गांधी राष्ट्रीय वृद्धावस्था पेन्शन योजना (IGNOAPS)</h3>
        <p><strong>विषयी:</strong> गरिबी रेषेखालील (BPL) कुटुंबातील वृद्ध व्यक्तींना मासिक पेन्शन प्रदान करणे.</p>
        <p><strong>पात्रता:</strong> वय ६०+ वर्षे, BPL कुटुंबातील सदस्य.</p>
        <p><strong>कागदपत्रे:</strong> वयाचा पुरावा, BPL कार्ड, आधार, बँक पासबुक.</p>
      </div>
    </div>
    <div className="scheme-card">
      {FaUsers({ className: 'scheme-icon' })}
      <div>
        <h3>राष्ट्रीय कुटुंब योजना (कौटुंबिक लाभ योजना)</h3>
        <p><strong>विषयी:</strong> मुख्य कमावत्या व्यक्तीच्या मृत्यूनंतर BPL कुटुंबांना एकवेळ आर्थिक सहाय्य प्रदान करणे.</p>
        <p><strong>पात्रता:</strong> कमावत्या व्यक्तीचा मृत्यू (१८-६० वर्षे), कुटुंब BPL असावे.</p>
        <p><strong>कागदपत्रे:</strong> मृत्यू प्रमाणपत्र, BPL कार्ड, आधार, बँक तपशील.</p>
      </div>
    </div>
    <h2>राज्य सरकारच्या योजना</h2>
    <div className="scheme-card">
      {FaMoneyCheckAlt({ className: 'scheme-icon' })}
      <div>
        <h3>संजय गांधी निराधार योजना</h3>
        <p><strong>विषयी:</strong> अपंग, विधवा, अनाथ व गरिबी रेषेखालील निराधार व्यक्तींसाठी मासिक पेन्शन.</p>
        <p><strong>पात्रता:</strong> वय १८-६५ वर्षे, निराधार आणि उपजीविकेचे साधन नसलेले.</p>
        <p><strong>कागदपत्रे:</strong> उत्पन्न प्रमाणपत्र, निवास पुरावा, आधार, बँक तपशील, अपंगत्व/विधवा प्रमाणपत्र (लागू असल्यास).</p>
      </div>
    </div>
    <div className="scheme-card">
      {FaRegAddressCard({ className: 'scheme-icon' })}
      <div>
        <h3>श्रावण बाल सेवा राज्य निवृत्ती वेतन योजना</h3>
        <p><strong>विषयी:</strong> आर्थिकदृष्ट्या दुर्बल वर्गातील ज्येष्ठ नागरिकांसाठी पेन्शन योजना.</p>
        <p><strong>पात्रता:</strong> वय ६५+ वर्षे, वार्षिक कौटुंबिक उत्पन्न शासकीय मर्यादेपेक्षा कमी.</p>
        <p><strong>कागदपत्रे:</strong> वयाचा पुरावा, उत्पन्न प्रमाणपत्र, आधार, बँक पासबुक.</p>
      </div>
    </div>
  </section>
);

export default Schemes;
