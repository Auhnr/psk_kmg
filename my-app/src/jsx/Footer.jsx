import React from 'react';
import Logo from '../assets/images/PSK_KMG_logo.png';
import "../css/footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="contacts"> {/* ✅ Добавлен id */}
      <div className="footer-container">
        
        {/* Левая колонка: Логотип и описание */}
        <div className="footer-left">
          <img src={Logo} alt="ПСК КаспийМунаЙгаз" className="footer-logo" />
          <p className="footer-description">
            Работаем с 2007 года в сфере проектирования и строительства. Обладаем собственной производственной базой, квалифицированным персоналом и следуем международным стандартам качества, безопасности и экологии.
          </p>
          <div className="footer-line"></div>
        </div>

        {/* Центр: Часы работы */}
        <div className="footer-center">
          <h3 className="footer-title">Часы работы:</h3>
          <table className="working-hours">
            <tbody>
              <tr><td>понедельник</td><td>9:00 - 18:00</td></tr>
              <tr><td>вторник</td><td>9:00 - 18:00</td></tr>
              <tr><td>среда</td><td>9:00 - 18:00</td></tr>
              <tr><td>четверг</td><td>9:00 - 18:00</td></tr>
              <tr><td>пятница</td><td>9:00 - 18:00</td></tr>
              <tr><td>суббота</td><td>выходной</td></tr>
              <tr><td>воскресенье</td><td>выходной</td></tr>
            </tbody>
          </table>
        </div>

        {/* Правая колонка: Контакты */}
        <div className="footer-right">
          <h3 className="footer-title">Контакты:</h3>
          <p className="contact-item">📍 Адрес: РК, г. Атырау, мкр. Сары-Арка, дом 40, офис 101</p>
          <p className="contact-item">📞 Телефон: +7 (7122) 99 28 21</p>
          <p className="contact-item">📧 Email: info@psk-kmg.kz</p>
        </div>
      </div>

      <p className="footer-copy">
        © Официальный сайт ТОО “ПСК КаспийМунайГаз” 2025. Все права защищены.
      </p>
    </footer>
  );
};

export default Footer;
