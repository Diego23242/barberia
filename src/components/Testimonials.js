import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  const testimonials = [
    {
      quote: "La mejor experiencia de barbería que he tenido. Carlos es un artista con las tijeras.",
      author: "Juan Pérez",
      role: "Cliente frecuente"
    },
    {
      quote: "Desde que descubrí EliteBarber no voy a otro lugar. Atención impecable y resultados perfectos.",
      author: "Roberto Gómez",
      role: "Cliente desde 2019"
    },
    {
      quote: "Recomiendo totalmente sus servicios. El trato es excelente y el ambiente muy acogedor.",
      author: "Miguel Ángel",
      role: "Primera visita"
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center text-amber-400 mb-12">Lo que dicen nuestros clientes</h2>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="max-w-4xl mx-auto relative">
            <div className="bg-gray-900 rounded-2xl p-8 md:p-12 shadow-xl">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className={`transition-opacity duration-500 ${index === activeTestimonial ? 'opacity-100' : 'opacity-0 absolute'}`}
                >
                  <svg className="w-12 h-12 text-amber-400 mb-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                  <p className="text-xl text-white mb-6">{testimonial.quote}</p>
                  <div>
                    <p className="font-bold text-amber-400">{testimonial.author}</p>
                    <p className="text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-amber-500 text-black p-3 rounded-full hover:bg-amber-400 transition-all shadow-lg"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-amber-500 text-black p-3 rounded-full hover:bg-amber-400 transition-all shadow-lg"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Testimonials;

// DONE