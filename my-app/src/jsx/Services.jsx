import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';import "swiper/css";
import "swiper/css/navigation";
import "../css/services.css";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";


import img1 from "../assets/images/construction.png";
import img2 from "../assets/images/geology.png";
import img3 from "../assets/images/water.png";
import img4 from "../assets/images/hvac.png";
import img5 from "../assets/images/automation.png";
import img6 from "../assets/images/electric.png";
import img7 from "../assets/images/estimation.png";
import helmet from "../assets/images/каска.png";
import building from "../assets/images/building-pic.png";

const services = [
  {
    title: "Архитектура и строительство",
    subtitle: "Architecture And Construction",
    description: "Проектируем и реализуем архитектурные и строительные решения под ключ.",
    image: img1, 
  },
  {
    title: "Инженерная геодезия и геология",
    subtitle: "Engineering Geodesy And Geology",
    description: "Выполняем геодезические и геологические изыскания для подготовки проектной базы.",
    image: img2,
  },
  {
    title: "Водоснабжение и канализация",
    subtitle: "Water Supply And Sewerage",
    description: "Разрабатываем системы водоснабжения и водоотведения для объектов любой сложности.",
    image: img3,
  },
  {
    title: "Отопление, вентиляция и кондиционирование",
    subtitle: "Heating, Ventilation, And Air Conditioning (HVAC)",
    description: "Проектируем и внедряем эффективные климатические системы.",
    image: img4,
  },
  {
    title: "Контроль, автоматизация и связь",
    subtitle: "Control, Automation, And Communication",
    description: "Создаем системы автоматизации, диспетчеризации и телекоммуникационной связи.",
    image: img5,
  },
  {
    title: "Электроснабжение объектов под ключ",
    subtitle: "Electrical Power Supply",
    description: "Разрабатываем проекты по внутреннему и внешнему электроснабжению объектов.",
    image: img6,
  },
  {
    title: "Сметная документация, организация строительства, технико-экономическая часть",
    subtitle: "Cost Estimation, Construction Management, And Feasibility Studies",
    description: "Готовим сметы, планируем строительные процессы и рассчитываем технико-экономические показатели.",
    image: img7,
  },
];


export default function ServiceSlider() {


  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.swiper &&
      prevRef.current &&
      nextRef.current
    ) {
      swiperRef.current.swiper.params.navigation.prevEl = prevRef.current;
      swiperRef.current.swiper.params.navigation.nextEl = nextRef.current;
      swiperRef.current.swiper.navigation.init();
      swiperRef.current.swiper.navigation.update();
    }
  }, []);

const navigate = useNavigate();

const handleMoreClick = () => {
  navigate("/services");
};


  return (
    <div className="service-slider-wrapper">
      <div className="services-section">
        <div className="services-header">
          <div className="what-we-offer">
            <img src={helmet} alt="Helmet Icon" className="helmet-icon" />
            <p>What We Offer</p>
          </div>
          <h2>Основные Направления Деятельности</h2>
        </div>
      </div>

      <div className="slider-navigation">
        <button className="swiper-button-prev custom-nav prev-btn">‹</button>
        <button className="swiper-button-next custom-nav next-btn">›

        </button>
      </div>

      <Swiper
  modules={[Navigation, Mousewheel, Keyboard]}
  spaceBetween={40}
  slidesPerView={1.4}
  centeredSlides
  loop
  navigation={{
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }}
  speed={800}
  mousewheel={{ forceToAxis: true, sensitivity: 1 }}
  keyboard={{ enabled: true }}
  touchRatio={0.5}
  simulateTouch={true}
  className="service-swiper"
>
  {services.map((service, index) => {
    const isLastSlide = index === services.length - 1;
    return (
      <SwiperSlide key={index}>
        <div className={`service-card-wide ${isLastSlide ? "last-service-card" : ""}`}>
          <div className="service-text">
            <div className="service-subtitle-wrapper">
              <span className="service-subtitle">
                <img src={building} alt="Icon" className="subtitle-icon" />
                {service.subtitle}
              </span>
            </div>
            <h4>{service.title}</h4>
            <p>{service.description}</p>
<button className="service-button" onClick={handleMoreClick}>
  Подробнее
</button>
          </div>
          <div className="service-image">
            <img src={service.image} alt={service.title} />
          </div>
        </div>
      </SwiperSlide>
    );
  })}
</Swiper>
<div className="swiper-button-prev custom-swiper-button">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  </div>
  <div className="swiper-button-next custom-swiper-button">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 6l6 6-6 6" />
    </svg>
  </div>
    </div>
  );
}
