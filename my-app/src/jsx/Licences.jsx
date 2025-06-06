import React from 'react';
// Импортируем изображения с правильными путями
import License1 from "../assets/images/лицензия1.png";
import License2 from "../assets/images/лицензия2.png";
import License3 from "../assets/images/лицензия3.png";
import License4 from "../assets/images/лицензия4.png";
import icon from "../assets/images/icon-lic.png"
import "../css/licences.css";

const LicensesSection = () => {
  return (
    <div className="licenses-container">
      <div className="licenses-title">
         <img src={icon} alt="icon" className="licenses-icon" />
         <p>Licences</p>
      </div>
      <h2 className="licenses-subtitle">Наши лицензии</h2>
      <div className="licenses-grid">
        <img src={License1} alt="Лицензия 1" className="license-image" />
        <img src={License2} alt="Лицензия 2" className="license-image" />
        <img src={License3} alt="Лицензия 3" className="license-image" />
        <img src={License4} alt="Лицензия 4" className="license-image" />
      </div>
    </div>
  );
};


export default LicensesSection;