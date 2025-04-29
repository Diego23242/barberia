import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Team from './components/Team';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      const sections = ['home', 'services', 'team', 'gallery', 'testimonials', 'booking'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="bg-black text-white">
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black py-3 shadow-xl' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-amber-400">EliteBarber</div>
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className={`${activeSection === 'home' ? 'text-amber-400' : 'text-white hover:text-amber-400'} transition-colors`}
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className={`${activeSection === 'services' ? 'text-amber-400' : 'text-white hover:text-amber-400'} transition-colors`}
            >
              Servicios
            </button>
            <button 
              onClick={() => scrollToSection('team')} 
              className={`${activeSection === 'team' ? 'text-amber-400' : 'text-white hover:text-amber-400'} transition-colors`}
            >
              Equipo
            </button>
            <button 
              onClick={() => scrollToSection('gallery')} 
              className={`${activeSection === 'gallery' ? 'text-amber-400' : 'text-white hover:text-amber-400'} transition-colors`}
            >
              Galería
            </button>
            <button 
              onClick={() => scrollToSection('booking')} 
              className={`${activeSection === 'booking' ? 'text-amber-400' : 'text-white hover:text-amber-400'} transition-colors`}
            >
              Reservas
            </button>
          </div>
          <button className="md:hidden text-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </nav>

      <main>
        <div id="home">
          <Hero />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="team">
          <Team />
        </div>
        <div id="gallery">
          <Gallery />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        <div id="booking">
          <BookingForm />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;

// DONE