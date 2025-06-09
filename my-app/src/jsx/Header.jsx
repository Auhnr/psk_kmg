import React from "react";
import { Link } from "react-router-dom";
import "../css/header.css";
import logo from "../assets/images/PSK_KMG_logo.png";
import "../css/style.css";

export default function Header() {
  return (
    <header>
      <div id="logo">
        <Link to="/">
          <img src={logo} alt="Логотип" />
        </Link>
      </div>
      <nav id="nav-bar">
<ul>
  <li><Link to="/">Главная</Link></li>
  <li><Link to="/about">О компании</Link></li>
  <li><Link to="/services">Услуги</Link></li>
  <li><Link to="/projects">Проекты</Link></li>
<a href="#contacts">Контакты</a>
</ul>

        <div className="language">
          <select id="language-selector">
            <option value="en">RU</option>
            <option value="kz">EN</option>
            <option value="ru">KZ</option>
          </select>
        </div>
      </nav>
    </header>
  );
}