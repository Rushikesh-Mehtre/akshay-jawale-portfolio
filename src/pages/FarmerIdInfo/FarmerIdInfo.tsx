import React from 'react';
import { FaSeedling, FaStar, FaUser, FaQuestionCircle, FaFileAlt, FaLaptop, FaClock, FaBullhorn } from 'react-icons/fa';
import './FarmerIdInfo.scss';

const FarmerIdInfo: React.FC = () => (
  <section className="farmer-id-section">
    <h2>🌾 Agristack व Farmer ID माहिती केंद्र</h2>
    
    <div className="farmer-id-card">
      {FaSeedling({ className: 'farmer-icon' })}
      <div>
        <h3>📖 Agristack म्हणजे काय?</h3>
        <ul>
          <li>Agristack ही भारत सरकारची डिजिटल शेतीसाठीची मोठी योजना आहे.</li>
          <li>यामध्ये सर्व शेतकऱ्यांची माहिती एकाच डिजिटल प्लॅटफॉर्मवर उपलब्ध करून दिली जाते.</li>
          <li>त्यासाठी प्रत्येक शेतकऱ्याला एक Unique Farmer ID (शेतकरी ओळख क्रमांक) दिला जातो.</li>
          <li>हा Farmer ID म्हणजे शेतकऱ्याचा आधार कार्डासारखा कृषी ओळखपत्र आहे.</li>
        </ul>
      </div>
    </div>

    <div className="farmer-id-card">
      {FaStar({ className: 'farmer-icon' })}
      <div>
        <h3>⭐ Agristack / Farmer ID चे महत्व</h3>
        <ul>
          <li>✅ शेतकऱ्यांना शासनाच्या सर्व कृषी योजना एका ID द्वारे मिळतात</li>
          <li>✅ अनुदान, विमा, कर्जमाफी, बियाणे, खत यासाठी अर्ज सोपा होतो</li>
          <li>✅ 7/12 उताऱ्यावर माहिती थेट जोडली जाते</li>
          <li>✅ शेतकऱ्यांची खरी माहिती शासनाकडे पोहोचते</li>
          <li>✅ डिजिटल नोंदीमुळे वेळ, पैसा व कागदपत्रांची बचत</li>
        </ul>
      </div>
    </div>

    <div className="farmer-id-card">
      {FaUser({ className: 'farmer-icon' })}
      <div>
        <h3>👨‍🌾 Farmer ID कोणाला मिळेल?</h3>
        <ul>
          <li>✅ भारतातील सर्व शेतकरी</li>
          <li>✅ जमिनीचे मालक तसेच बटाईदार / ठेकेदार शेतकरी</li>
          <li>✅ महिला शेतकरी आणि संयुक्त कुटुंबातील शेतकरी</li>
        </ul>
      </div>
    </div>

    <div className="farmer-id-card">
      {FaQuestionCircle({ className: 'farmer-icon' })}
      <div>
        <h3>❓ Farmer ID का आवश्यक आहे?</h3>
        <ul>
          <li>✅ शासनाच्या योजनांचा थेट लाभ मिळवण्यासाठी</li>
          <li>✅ बँकेकडून कृषी कर्ज, विमा, अनुदान मिळवण्यासाठी</li>
          <li>✅ शेतीतील डिजिटल सक्षमीकरणासाठी</li>
          <li>✅ भविष्यातील योजनांसाठी आधारभूत कागदपत्र म्हणून</li>
        </ul>
      </div>
    </div>

    <div className="farmer-id-card">
      {FaFileAlt({ className: 'farmer-icon' })}
      <div>
        <h3>📌 Farmer ID साठी लागणारी कागदपत्रे</h3>
        <ul>
          <li>📄 आधार कार्ड</li>
          <li>📄 7/12 उतारा / जमीन दस्त</li>
          <li>📄 बँक पासबुक</li>
          <li>📄 मोबाईल नंबर</li>
          <li>📄 पासपोर्ट साईज फोटो</li>
        </ul>
      </div>
    </div>

    <div className="farmer-id-card">
      {FaLaptop({ className: 'farmer-icon' })}
      <div>
        <h3>🖥️ Farmer ID नोंदणी कशी करावी?</h3>
        <ol>
          <li><strong>1️⃣</strong> MahaDBT पोर्टल किंवा अधिकृत कृषी विभागाच्या वेबसाईटवर जा</li>
          <li><strong>2️⃣</strong> नवीन नोंदणी (Registration) निवडा</li>
          <li><strong>3️⃣</strong> आधार व मोबाईल नंबर टाकून OTP द्वारे लॉगिन करा</li>
          <li><strong>4️⃣</strong> तुमची जमिनीची माहिती, बँक माहिती, वैयक्तिक माहिती भरा</li>
          <li><strong>5️⃣</strong> आवश्यक कागदपत्रे अपलोड करा</li>
          <li><strong>6️⃣</strong> सबमिट करा → तुम्हाला Unique Farmer ID (शेतकरी आयडी) मिळेल</li>
        </ol>
      </div>
    </div>

    <div className="farmer-id-card">
      {FaClock({ className: 'farmer-icon' })}
      <div>
        <h3>🕒 Farmer ID नोंदणी कधी करावी?</h3>
        <ul>
          <li>ही नोंदणी संपूर्ण वर्षभर चालू असते</li>
          <li>पण सरकारी योजना जाहीर झाल्यावर त्यासाठी नोंदणी झालेली असणे आवश्यक आहे</li>
        </ul>
      </div>
    </div>

    <div className="farmer-id-card">
      {FaBullhorn({ className: 'farmer-icon' })}
      <div>
        <h3>📢 शेतकऱ्यांसाठी संदेश</h3>
        <ul>
          <li>🌾 आपला Farmer ID तातडीने तयार करा</li>
          <li>🌾 शासनाच्या सर्व कृषी योजना व अनुदान मिळवण्यासाठी ही प्रक्रिया अत्यंत आवश्यक आहे</li>
          <li>🌾 डिजिटल शेतकरी बना – डिजिटल भारताचा भाग बना</li>
        </ul>
      </div>
    </div>
  </section>
);

export default FarmerIdInfo;