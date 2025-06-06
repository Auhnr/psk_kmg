import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from "./jsx/Header";
import HeroSection from "./jsx/Hero";
import AboutSection from "./jsx/About";
import ServicesSection from "./jsx/Services";
import ExperienceSection from "./jsx/Experience"; 
import LicensesSection from "./jsx/Licences";
import PartnersSection from "./jsx/Partners";
import Footer from "./jsx/Footer";
import ServicesPage from "./jsx/ServicesPage";
import ScrollToTop from "./jsx/ScrollToTop";
import AboutPage from "./jsx/AboutPage";
import ProjectsPage from "./jsx/ProjectsPage";

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#contacts') {
      const element = document.getElementById('contacts');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <ExperienceSection />
            <LicensesSection />
            <PartnersSection />
          </>
        } />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
