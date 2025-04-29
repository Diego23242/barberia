import React, { useState, useEffect } from 'react';
import images from '../mock/images';
import AnimatedSection from './AnimatedSection';

const Hero = () => {
  const [scissorOpen, setScissorOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setScissorOpen(prev => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={images.hero} 
          alt="Barbería de lujo" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <AnimatedSection>
          <h1 className="text-5xl md:text-7xl font-bold text-amber-400 mb-6">
            EliteBarber
          </h1>
        </AnimatedSection>
        
        <AnimatedSection delay={200}>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
            Donde la artesanía se encuentra con la elegancia para crear tu mejor versión
          </p>
        </AnimatedSection>
        
        <AnimatedSection delay={400}>
          <button className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-full transition-all transform hover:scale-105 shadow-lg">
            Reserva tu experiencia
          </button>
        </AnimatedSection>
        
        <AnimatedSection delay={600}>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg 
              width="40" 
              height="40" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className={`text-white transition-transform ${scissorOpen ? 'rotate-0' : 'rotate-45'}`}
            >
              <path d="M6 6l14 14"></path>
              <path d="M6 20l4-4"></path>
              <path d="M6 4l4 4"></path>
              <path d="M14 4l-4 4"></path>
            </svg>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Hero;