import React from 'react';
import '../css/AboutPage.css';
import img from '../assets/images/aboutpage-img.png'; 
import kaska from "../assets/images/каска.png";

const CompanyInfo = () => {
  return (
    <div className="company-container">
      {/* Первая секция: изображение и текст */}
      <section className="company-intro">
        <div className="company-image">
          <img src={img} alt="ТОО ПСК КаспийМунайГаз" />
        </div>
        
        <div className="company-description">
            <div className="company-header">
                 <img src={kaska} alt="icon-company" className="company-header-icon" />
                 <p className="company-header-title">ТОО ПСК "КаспийМунайГаз"</p>
            </div>          
            <h2 className='company-container-h2'>О компании</h2>
            <p>Компания была создана 2007 году, и по сегодняшний день работает в области проектирования и строительства в разных отраслях народного хозяйства. Товарищество обладает производственными помещениями, соответствующим оборудованием, квалифицированным персоналом, документированной системой качества, необходимыми материальными и финансовыми ресурсами, обеспечивающими выполнение задач по удовлетворению потребностей потребителей и всех заинтересованных сторон в сфере деятельности Товарищества.</p>
            <p>Руководством принята <strong>Политика в области качества</strong>, безопасности, охраны труда и охраны окружающей среды, определяющая главные цели, это: Оказание услуг, максимально удовлетворяющих требования потребителей и дальнейшее последовательное улучшение своей деятельности с позиции охраны окружающей среды, безопасности и охраны труда на базе функционирования международных стандартов.</p>
      </div>
      </section>
      
      {/* Вторая секция: политика качества */}
      <section className="quality-policy">
        <h2 className='quality-policy-h2'>Политика организации в области качества</h2>
        <ul className="policy-list">
          <li>Постоянное повышение результативности в соответствии требованиям международных стандартов.</li>
          <li>Разработка продукции, отвечающей требованиям нормативно правовых актов, удовлетворяющей ожиданиям и требованиям Заказчика.</li>
          <li>Сохранение престижа и создание устойчивого авторитета и высокого доверия у Заказчика.</li>
          <li>Конкурентоспособность предлагаемой продукции и услуг при выполнении работ в области топогеодезических и геологических изысканий, разработки проектов, строительства и экологии.</li>
          <li>Получение устойчивой прибыли.</li>
        </ul>
      </section>
    </div>
  );
};

export default CompanyInfo;