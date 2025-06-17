import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/header.css";
import logo from "../assets/images/PSK_KMG_logo.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header>
       <div id="logo">
    <Link to="/">
      <img src={logo} alt="Логотип" />
    </Link>
  </div>

  <div className="header-right">
    <nav id="nav-bar">
      <ul>
        <li><Link to="/">Главная</Link></li>
        <li><Link to="/about">О компании</Link></li>
        <li><Link to="/services">Услуги</Link></li>
        <li><Link to="/projects">Проекты</Link></li>
        <li><Link to="/contacts">Контакты</Link></li>
      </ul>

      <div className="language">
        <label htmlFor="language-selector" className="visually-hidden">Язык</label>
        <select id="language-selector" name="language">
          <option value="ru">RU</option>
          <option value="en">EN</option>
          <option value="kz">KZ</option>
        </select>
      </div>
    </nav>

          {/* Бургер и язык — мобильная версия */}
      <div className="mobile-controls" style={{ display: "flex", alignItems: "center" }}>
        <div className="mobile-language">
          <label htmlFor="language-selector-mobile" className="visually-hidden">Язык</label>
          <select id="language-selector-mobile" name="language-mobile">
            <option value="ru">RU</option>
            <option value="en">EN</option>
            <option value="kz">KZ</option>
          </select>
        </div>

        <div
          className={`burger-menu ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Меню"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Мобильное меню */}
      <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <li><Link to="/" onClick={toggleMenu}>Главная</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>О компании</Link></li>
          <li><Link to="/services" onClick={toggleMenu}>Услуги</Link></li>
          <li><Link to="/projects" onClick={toggleMenu}>Проекты</Link></li>
          <li><Link to="/contacts" onClick={toggleMenu}>Контакты</Link></li>
        </ul>
      </div>

      {/* Оверлей */}
      <div
        className={`menu-overlay ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      />
  </div>


    </header>
  );
}
