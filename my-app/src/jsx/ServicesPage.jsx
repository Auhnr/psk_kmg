
import React from 'react';
import '../css/services-page.css'; // Переименованный CSS файл
import kaska from "../assets/images/каска.png"; // Путь к изображению
import building from "../assets/images/building-pic.png"; // Путь к изображению
import seviceimg1 from "../assets/images/service-img1.png"; // Путь к изображению
import seviceimg2 from "../assets/images/service-img2.png"; // Путь к изображению
import seviceimg3 from "../assets/images/service-img3.png"; // Путь к изображению
import seviceimg4 from "../assets/images/service-img4.png"; // Путь к изображению
import seviceimg5 from "../assets/images/water.png"; // Путь к изображению
import seviceimg6 from "../assets/images/hvac.png"; // Путь к изображению
import seviceimg7 from "../assets/images/automation.png"; // Путь к изображению
import seviceimg8 from "../assets/images/electric.png"; // Путь к изображению
import seviceimg9 from "../assets/images/estimation.png"; // Путь к изображению
import seviceimg10 from "../assets/images/service-img10.png"; // Путь к изображению



const ServicesPage = () => {
  return (
    <div className="details-container">
      {/* Секция Architecture And Construction */}
    <div className="details-line">
        <img src={kaska} alt="Каска" className="details-icon" />
      <span className="details-main-title">ТОО ПСК “КаспийМунайГаз”</span>
    </div>

      <h1 className="title-service">Услуги</h1>

      <section className="details-block details-flex-block">
  <div className="details-text-side">
    <div className="details-build">
      <img src={building} alt="icon-building" className="details-icon" />
      <p className="details-main-title">Architecture And Construction</p>
    </div>
    <h2 className="details-subtitle">Архитектура и строительство</h2>
    
    <ul className="details-features">
      <li className="details-feature">Разработка проектов гражданских, общественных и промышленных зданий и сооружений.</li>
      <li className="details-feature">Проектирование сооружений объектов инфраструктуры.</li>
      <li className="details-feature">Проектирование вахтовых поселков и производственных баз.</li>
      <li className="details-feature">Проектирование автодорог.</li>
    </ul>
  </div>

  <img src={seviceimg1} alt="serviceimg1" className="img-sec-services" />
</section>


      {/* Секция Инженерная геодезия */}
<section className="details-block">
  <div className="details-flex-block">
    {/* Левая часть — текст */}
    <div className="details-text-side">
      <div className="details-build">
        <img src={building} alt="icon-building" className="details-icon" />
        <p className="details-main-title">Engineering Geodesy</p>
      </div>

      <h2 className="details-subtitle">Инженерная геодезия</h2>

        <ul className="details-features">
          <li className="details-feature">Сбор и обработка материалов инженерных изысканий прошлых лет, топографогеодезических, картографических, аэрофотосъемочных и других материалов и данных; рекогносцировочное обследование территории;</li>
          <li className="details-feature">Закладка и координирование геодезических знаков:</li>
          <li className="details-feature">Создание (развитие) опорных геодезических сетей, включая геодезические сети специального назначения для строительства; создание планово-высотных съемочных геодезических сетей;</li>
          <li className="details-feature">Выполнение топографической съемки масштабов 1:200, 1:500, 1:1000, 1:2000, 1:5000 и 1:10 000 и составление по результатам карт и планов соответствующих масштабов.</li>
          <li className="details-feature">Съемка подземных коммуникаций и сетей;</li>
          <li className="details-feature">Полевое трассирование трубопроводов (электролиний, кабелей и т.п.), с закреплением и набором отметок для последующего построения продольного профиля для проектируемого трубопровода (электролиний, кабелей и т.п.).</li>
          <li className="details-feature">Геодезические стационарные наблюдения за деформациями оснований зданий и сооружений, земной поверхности и толщи горных пород в районах развития опасных природных и техноприродных процессов;</li>
          <li className="details-feature">Батиметрическая съемка;</li>
          <li className="details-feature">Морское изыскание.</li>
        </ul>


    </div>

    {/* Правая часть — изображение */}
<div style={{ display: 'flex', flexDirection: 'column' }}>
  <img src={seviceimg2} alt="1" className="img-sec-service" />
  <img src={seviceimg3} alt="2" className="img-sec-service" />
</div>

  </div>
</section>

<section className="details-block">
  <div className="details-flex-block">
    {/* Левая часть — текст */}
    <div className="details-text-side">
      <div className="details-build">
        <img src={building} alt="icon-building" className="details-icon" />
        <p className="details-main-title">Engineering Geology</p>
      </div>

      <h2 className="details-subtitle">Инженерная геология</h2>

        <ul className="details-features">
          <li className="details-feature">Инженерно-геологические изыскания;</li>
          <li className="details-feature">Проходка инженерно-геологических скважин (бурения инженерно-геологических скважин);</li>
          <li className="details-feature">Бурение в акватории водоемов и рек;</li>
          <li className="details-feature">Полевые исследования грунтов (Статическое зондирование грунтов);</li>
          <li className="details-feature">Гидрогеологические исследования;</li>
          <li className="details-feature">Электрометрические работы для проектов антикоррозийной защиты.</li>
        </ul>

                    {/* <div className="details-equipment">
            <button className="details-equipment-button">Используемое оборудование</button>
        </div> */}
    </div>

    {/* Правая часть — изображение */}
<div style={{ display: 'flex', flexDirection: 'column' }}>
  <img src={seviceimg4} alt="1" className="img-sec-service" />
</div>

  </div>
</section>

<section className="details-block">
  <div className="details-flex-block">
    {/* Левая часть — текст */}
    <div className="details-text-side">
      <div className="details-build">
        <img src={building} alt="icon-building" className="details-icon" />
        <p className="details-main-title">Water Supply and Sewerage</p>
      </div>

      <h2 className="details-subtitle">Водоснабжение и канализция</h2>

        <ul className="details-features">
          <li className="details-feature">Расчет и проектирование сетей, насосных станций объектов водоснабжения, пожаротушения и канализации.</li>
          <li className="details-feature">Гидравлический расчет и проектирование сетей систем хозяйственно-питьевого, производственного, противопожарного и оборотного водоснабжения;</li>
          <li className="details-feature">Проектирование насосных станций водоснабжения и пожаротушения;</li>
          <li className="details-feature">Выбор и компоновка оборудования по водоподготовке;</li>
          <li className="details-feature">Расчет и проектирование внутренних сетей хозяйственного - питьевого и горячего водоснабжения и канализации;</li>
          <li className="details-feature">Расчет и проектирование полей испарения и фильтрации, КНС канализационных очистных сооружений.</li>
        </ul>
    </div>

    {/* Правая часть — изображение */}
<div style={{ display: 'flex', flexDirection: 'column' }}>
  <img src={seviceimg5} alt="1" className="img-sec-servicess" />
</div>

  </div>
</section>


<section className="details-block">
  <div className="details-flex-block">
    {/* Левая часть — текст */}
    <div className="details-text-side">
      <div className="details-build">
        <img src={building} alt="icon-building" className="details-icon" />
        <p className="details-main-title">Heating, Ventilation, and Air Conditioning (HVAC)</p>
      </div>

      <h2 className="details-subtitle">Отопление, вентиляция и кондиционирование</h2>

        <ul className="details-features">
          <li className="details-feature">Расчет и проектирование теплоснабжения и тепловых сетей, отопления промышленных, общественных и социальных объектов.</li>
          <li className="details-feature">Расчет и проектирование газоснабжения промышленных, общественных и социальных объектов.</li>
          <li className="details-feature">Расчет и проектирование систем вентиляции и кондиционирования воздуха.</li>
        </ul>
    </div>

    {/* Правая часть — изображение */}
<div style={{ display: 'flex', flexDirection: 'column' }}>
  <img src={seviceimg6} alt="1" className="img-sec-service" />
</div>

  </div>
</section>

<section className="details-block">
  <div className="details-flex-block">
    {/* Левая часть — текст */}
    <div className="details-text-side">
      <div className="details-build">
        <img src={building} alt="icon-building" className="details-icon" />
        <p className="details-main-title">Control, Automation, and Communication</p>
      </div>

      <h2 className="details-subtitle">Контроль, автоматизация, связь</h2>

        <ul className="details-features">
          <li className="details-feature">Разработка и проектирование схем автоматического управления технологическими процессами.</li>
          <li className="details-feature">Разработка и проектирование схем противоаварийной защиты и сигнализации противоаварийных ситуаций.</li>
          <li className="details-feature">Разработка и проектирование систем пожарной сигнализации и оповещения при пожаре</li>
          <li className="details-feature">Разработка и проектирование ВОЛС, телефонных станций, громкоговорящей связи, систем беспроводного доступа.</li>
        </ul>
    </div>

    {/* Правая часть — изображение */}
<div style={{ display: 'flex', flexDirection: 'column' }}>
  <img src={seviceimg7} alt="1" className="img-sec-service" />
</div>

  </div>
</section>

<section className="details-block">
  <div className="details-flex-block">
    {/* Левая часть — текст */}
    <div className="details-text-side">
      <div className="details-build">
        <img src={building} alt="icon-building" className="details-icon" />
        <p className="details-main-title">Electrical Power Supply</p>
      </div>

      <h2 className="details-subtitle">Электроснабжение</h2>

        <ul className="details-features">
          <li className="details-feature">Расчет и проектирование воздушных, кабельных линий электропередач напряжением 0.4кВ до 35кВ.</li>
          <li className="details-feature">Расчет и проектирование распределительных устройств и подстанций ПС на напряжение 35/10/0.4кВ КТП 10/0/4кВ.</li>
          <li className="details-feature">Расчет и проектирование электроснабжения и электрооборудования зданий и сооружений.</li>
          <li className="details-feature">Расчет и проектирование систем электрообогрева.</li>
          <li className="details-feature">Расчет и проектирование систем катодной защиты.</li>
        </ul>
    </div>

    {/* Правая часть — изображение */}
<div style={{ display: 'flex', flexDirection: 'column' }}>
  <img src={seviceimg8} alt="1" className="img-sec-service" />
</div>

  </div>
</section>

<section className="details-block">
  <div className="details-flex-block">
    {/* Левая часть — текст */}
    <div className="details-text-side">
      <div className="details-build">
        <img src={building} alt="icon-building" className="details-icon" />
        <p className="details-main-title">Cost Estimation, Construction Management, and Feasibility Studies</p>
      </div>

      <h2 className="details-subtitle">Сметная документация, организация строительства, технико-экономическая часть</h2>

        <ul className="details-features">
          <li className="details-feature">Разработка сметной и ресурсной документации. Сметная стоимость строительства является основой для определения размера инвестиционных средств на строительство, формирования цен на строительную продукцию.</li>
          <li className="details-feature">Разработка проекта организации строительства. Организационно-технологическая проектная документация обеспечивает целенаправленность всех организационных и технических решений на ввод объектов в эксплуатацию с проектным качеством, в установленные сроки с минимальным потреблением ресурсов.</li>
          <li className="details-feature">Разработка раздела: эффективность инвестиций и технико-экономические показатели. Принципы расчетов, заложенные в программе, соответствуют международной методике по оценке инвестиционных проектов ЮНИДО. Оценка проекта с трех основных точек зрения: эффективность инвестиционных затрат, финансовая состоятельность, риск осуществления проекта</li>
        </ul>
    </div>

    {/* Правая часть — изображение */}
<div style={{ display: 'flex', flexDirection: 'column' }}>
  <img src={seviceimg9} alt="1" className="img-sec-service" />
  <img src={seviceimg10} alt="2" className="img-sec-service" />
</div>

  </div>
</section>

    </div>
  );
};

export default ServicesPage;

