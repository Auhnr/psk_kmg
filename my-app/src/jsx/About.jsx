import React from "react";
import "../css/style.css";
import "../css/about.css";
import icon from "../assets/images/icon.png"; // Assuming the icon is in the assets/images directory


export default function AboutSection() {
  return (
    <section className="about">
      <div className="about-content">
        <h3>О компании</h3>
        <p id="about">
          Компания была создана в 2007 году, и по сегодняшний день работает в
          области проектирования и строительства в разных отраслях народного
          хозяйства. Товарищество обладает производственными помещениями,
          соответствующим оборудованием, квалифицированным персоналом,
          документированной системой качества, необходимыми материальными и
          финансовыми ресурсами, обеспечивающими выполнение задач по
          удовлетворению потребностей потребителей и всех заинтересованных
          сторон в сфере деятельности Товарищества.
        </p>

        <img src= {icon} alt="icon" className="icon"/>
        <h5 className="with-check">18+ лет опыта</h5>
        <p>
          Мы работаем на рынке более 18 лет, успешно реализуя проекты разного
          уровня сложности.
        </p>
        <img src= {icon} alt="icon" className="icon"/>
        <h5 className="with-check">100+ выполненных проектов</h5>
        <p>
          Наши проекты соответствуют международным стандартам и требованиям
          безопасности.
        </p>
        <img src= {icon} alt="icon" className="icon"/>
        <h5 className="with-check">Лицензированная деятельность</h5>
        <p>
          Мы обладаем государственной лицензией, подтверждающей нашу квалификацию
          и соответствие требованиям.
        </p>
      </div>
    </section>
  );
}