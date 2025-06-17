import React from 'react';
import { Link } from "react-router-dom";
import buildingPic from "../assets/images/building-pic.png";
import icon from "../assets/images/icon-exp.png"; 
import locker from "../assets/images/icon-exp2.png"; 


import "../css/style.css";
import "../css/experience.css"; 

const ExperienceSection = () => {
  return (
    <section className="experience-section">
      <div className="container">
        <div className="section-header">
          <div className="upper-header">
            <img src={icon} alt="Experience Icon" className="section-icon" />
            <p>Experience</p>
          </div>
          <h1 className="section-title">Опыт работы</h1>
        </div>
        
        <p className="section-description">
          Мы принимали участие в многих проектах и имеем большой опыт.
        </p>

        <div className="experience-cards">
          <div className="experience-card">
            <img src={buildingPic} alt="Проектирование" className="section-icon" />
            <h2>В Области Проектирования</h2>
            <p>
              Включает проекты по электроснабжению, строительству буровых площадок, 
              нефтепроводным системам, образовательным и административным зданиям.
            </p>
            <Link to="/projects" className="details-button">Подробнее</Link>
          </div>

          <div className="experience-card">
            <img src={locker} alt="Строительство" className="section-icon" />
            <h2>В Области Строительства</h2>
            <p>
              Капитальные ремонты зданий, строительство вахтовых поселков, 
              монтаж инженерских сетей.
            </p>
            <Link to="/projects" className="details-button">Подробнее</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
