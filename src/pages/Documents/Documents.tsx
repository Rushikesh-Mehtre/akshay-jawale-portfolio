import React from 'react';
import { FaMoneyBillWave, FaHome, FaUsers, FaFileContract } from 'react-icons/fa';
import './Documents.scss';

const Documents: React.FC = () => (
  <section className="documents-section">
    <h2>नोंदी व आवश्यक कागदपत्रे</h2>
    
    <div className="document-card">
      {FaMoneyBillWave({ className: 'document-icon' })}
      <div>
        <h3>१) उत्पन्न दाखला (Income Certificate)</h3>
        <p><strong>📌 आवश्यक कागदपत्रे:</strong></p>
        <ul>
          <li>अर्जदाराचा अर्ज (निर्धारित फॉर्म)</li>
          <li>आधार कार्ड / ओळखपत्र</li>
          <li>रहिवासी पुरावा (रहिवासी दाखला, राशन कार्ड, विज बिल, मालमत्ता कर पावती)</li>
          <li>मागील ३–६ महिन्यांचे पगार स्लिप / उत्पन्न प्रमाणपत्र (जर नोकरीत असाल तर)</li>
          <li>शेतजमिनीचा उतारा (७/१२) (जर शेती उत्पन्न असेल तर)</li>
          <li>बँक पासबुक/स्टेटमेंट (काही वेळा आवश्यक असते)</li>
          <li>घोषणापत्र (स्वत:कडून की उत्पन्न हे इतकेच आहे)</li>
        </ul>
      </div>
    </div>

    <div className="document-card">
      {FaHome({ className: 'document-icon' })}
      <div>
        <h3>२) रहिवासी दाखला (Residential Certificate)</h3>
        <p><strong>📌 आवश्यक कागदपत्रे:</strong></p>
        <ul>
          <li>अर्जदाराचा अर्ज फॉर्म</li>
          <li>आधार कार्ड / मतदार ओळखपत्र (Voter ID) / पासपोर्ट</li>
          <li>राशन कार्ड / घरपट्टी पावती / विज बिल / पाणी बिल (रहिवास सिद्ध करण्यासाठी)</li>
          <li>जमीन/घर मालकीचा पुरावा (७/१२ उतारा, मालमत्ता कर पावती, भाडेकरारपत्र – applicable असल्यास)</li>
          <li>जन्म दाखला / शाळा सोडल्याचा दाखला (काही वेळा पुरावा म्हणून)</li>
        </ul>
      </div>
    </div>

    <div className="document-card">
      {FaUsers({ className: 'document-icon' })}
      <div>
        <h3>३) जात प्रमाणपत्र (Caste Certificate)</h3>
        <p><strong>📌 आवश्यक कागदपत्रे:</strong></p>
        <ul>
          <li>अर्जदाराचा अर्ज फॉर्म</li>
          <li>आधार कार्ड / ओळखपत्र</li>
          <li>शाळा सोडल्याचा दाखला (School Leaving Certificate) (जात नमूद असलेला)</li>
          <li>पालकांचे जात प्रमाणपत्र (जर आधी काढलेले असेल तर)</li>
          <li>जन्म दाखला / निवास पुरावा</li>
          <li>राशन कार्ड / मतदार ओळखपत्र</li>
          <li>वारसा दाखला / वडिलांचे ७/१२ उतारे (गावात राहण्याचा पुरावा म्हणून)</li>
          <li>घोषणापत्र (जात सत्य असल्याची स्वत:ची हमी)</li>
        </ul>
      </div>
    </div>

    <div className="document-card">
      {FaFileContract({ className: 'document-icon' })}
      <div>
        <h3>४) फेरफार प्रकार व आवश्यक कागदपत्रे</h3>
        <p><strong>📑 फेरफार प्रकार व आवश्यक कागदपत्रे</strong></p>
        
        <p><strong>१) खरेदी (Sale / Purchase)</strong></p>
        <ul>
          <li>खरेदीखत (Sale Deed)</li>
          <li>स्टॅम्प ड्युटी व नोंदणी पावती</li>
          <li>अर्जदाराचा अर्ज</li>
          <li>विद्यमान ७/१२ व ८अ उतारे</li>
          <li>आधार कार्ड / ओळखपत्र</li>
        </ul>

        <p><strong>२) बोली / लिलाव (Auction)</strong></p>
        <ul>
          <li>लिलाव आदेशाची प्रत</li>
          <li>विक्रीचा दाखला (Sale Certificate)</li>
          <li>७/१२ व ८अ उतारे</li>
          <li>अर्जदाराचा अर्ज</li>
        </ul>

        <p><strong>३) इकरार (Agreement / Lease)</strong></p>
        <ul>
          <li>करारनाम्याची प्रत</li>
          <li>नोंदणी पावती</li>
          <li>अर्जदाराचा अर्ज</li>
          <li>७/१२ व ८अ उतारे</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Documents;
