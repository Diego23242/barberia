import React from 'react';
import images from '../mock/images';
import AnimatedSection from './AnimatedSection';

const Team = () => {
  const barbers = [
    {
      name: "Carlos Méndez",
      specialty: "Cortes Clásicos",
      experience: "15 años",
      image: images.barber1
    },
    {
      name: "Alejandro Ruiz",
      specialty: "Barbas y Estilos Modernos",
      experience: "10 años",
      image: images.barber2
    },
    {
      name: "David López",
      specialty: "Tratamientos Capilares",
      experience: "8 años",
      image: images.barber3
    }
  ];

  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center text-amber-400 mb-4">Nuestro Equipo</h2>
          <p className="text-xl text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Profesionales certificados con años de experiencia en el arte de la barbería
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {barbers.map((barber, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="group relative overflow-hidden rounded-xl shadow-2xl hover:shadow-amber-500/20 transition-all duration-500">
                <div className="h-96 overflow-hidden">
                  <img 
                    src={barber.image} 
                    alt={barber.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 bg-gray-800">
                  <h3 className="text-2xl font-bold text-white mb-1">{barber.name}</h3>
                  <p className="text-amber-400 mb-2">{barber.specialty}</p>
                  <p className="text-gray-300">Experiencia: {barber.experience}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;