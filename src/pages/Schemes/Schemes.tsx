import React from 'react';
import { FaUser, FaUsers, FaMoneyCheckAlt, FaIdCard, FaCertificate, FaRegAddressCard } from 'react-icons/fa';
import './Schemes.scss';

const Schemes: React.FC = () => (
  <section className="schemes-section">
    <h2>Central Government Schemes</h2>
    <div className="scheme-card">
      {FaUser({ className: 'scheme-icon' })}
      <div>
        <h3>Indira Gandhi National Old Age Pension Scheme (IGNOAPS)</h3>
        <p><strong>About:</strong> Provides monthly pension to elderly persons from Below Poverty Line (BPL) families.</p>
        <p><strong>Eligibility:</strong> Age 60+ years, belonging to BPL household.</p>
        <p><strong>Documents:</strong> Age proof, BPL card, Aadhaar, bank passbook.</p>
      </div>
    </div>
    <div className="scheme-card">
      {FaUsers({ className: 'scheme-icon' })}
      <div>
        <h3>Rashtriya Kutumb Yojna (Family Benefit Scheme)</h3>
        <p><strong>About:</strong> Provides one-time financial assistance to BPL families on the death of the main earning member.</p>
        <p><strong>Eligibility:</strong> Death of breadwinner (18–60 years), family must be BPL.</p>
        <p><strong>Documents:</strong> Death certificate, BPL card, Aadhaar, bank details.</p>
      </div>
    </div>
    <h2>State Government Schemes (Maharashtra)</h2>
    <div className="scheme-card">
      {FaMoneyCheckAlt({ className: 'scheme-icon' })}
      <div>
        <h3>Sanjay Gandhi Niradhar Yojna</h3>
        <p><strong>About:</strong> Monthly pension for destitute persons like disabled, widows, orphans, and those below poverty line.</p>
        <p><strong>Eligibility:</strong> Age 18–65 years, destitute and without means of livelihood.</p>
        <p><strong>Documents:</strong> Income certificate, domicile proof, Aadhaar, bank details, disability/widow certificate (if applicable).</p>
      </div>
    </div>
    <div className="scheme-card">
      {FaRegAddressCard({ className: 'scheme-icon' })}
      <div>
        <h3>Shravan Bal Seva Rajya Nivrutti Vetan Yojna</h3>
        <p><strong>About:</strong> Pension scheme for senior citizens from economically weaker sections.</p>
        <p><strong>Eligibility:</strong> Age 65+ years, annual family income below govt. limit.</p>
        <p><strong>Documents:</strong> Age proof, income certificate, Aadhaar, bank passbook.</p>
      </div>
    </div>
  </section>
);

export default Schemes;
