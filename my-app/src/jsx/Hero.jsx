import React from "react";
import { Link } from "react-router-dom";
import "../css/hero.css";
import "../css/style.css";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p>ТОО ПСК "КаспийМунайГаз"</p>
        <h1>
          ПРОЕКТИРОВАНИЕ И СТРОИТЕЛЬСТВО<br />ОБЪЕКТОВ ЛЮБОЙ СЛОЖНОСТИ
        </h1>
        <Link to="/about" className="hero-button">
          О компании
        </Link>
      </div>
    </section>
  );
}
