import React from 'react';
import PartnerIcon from '../assets/images/icon-lic.png';
import CaspiiMunaiGaz from '../assets/images/caspii-munai-gaz.png';
import KazGerMunai from '../assets/images/kaz-ger-munai.png';
import Kaspiy from '../assets/images/kaspiy.png';
import Kubyr from '../assets/images/pipeline.png';
import ANM from '../assets/images/anm.png';
import Tcd from '../assets/images/tcd.png';
import Petrofac from '../assets/images/petrofac.png';
import "../css/partners.css";


const PartnersSection = () => {
  return (
    <div className="partners-container">
      <div className="partners-header">
        <img src={PartnerIcon} alt="Partners Icon" className="partner-icon" />
        <p className="partners-title">Partners & Clients</p>
      </div>
      <h2 className="partners-subtitle">Партнёры и клиенты</h2>
      
      {/* Первый ряд - 4 логотипа */}
      <div className="partners-row">
        <div className="partner-item">
          <img src={CaspiiMunaiGaz} alt="КАСПИЙМУНАЙГАЗ" className="partner-logo" />
        </div>
        <div className="partner-item">
          <img src={KazGerMunai} alt="КазГерМунай" className="partner-logo" />
        </div>
        <div className="partner-item">
          <img src={Kaspiy} alt="Каспий" className="partner-logo" />
        </div>
        <div className="partner-item">
          <img src={Kubyr} alt="КУБЫР" className="partner-logo" />
        </div>
      </div>

      {/* Второй ряд - 3 логотипа по центру */}
      <div className="partners-row centered-row">
        <div className="partner-item">
          <img src={ANM} alt="ANM" className="partner-logo" />
        </div>
        <div className="partner-item">
          <img src={Tcd} alt="TCD" className="partner-logo" />
        </div>
        <div className="partner-item">
          <img src={Petrofac} alt="Petrofac" className="partner-logo" />
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;