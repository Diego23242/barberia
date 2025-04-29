import React from 'react';
import images from '../mock/images';
import AnimatedSection from './AnimatedSection';

const Services = () => {
  const services = [
    {
      title: "Corte Elite",
      description: "Corte de cabello premium con técnicas avanzadas y acabado perfecto",
      price: "$45",
      duration: "45 min",
      image: images.service1
    },
    {
      title: "Afeitado Clásico",
      description: "Afeitado con navaja tradicional y productos de lujo para una piel impecable",
      price: "$35",
      duration: "30 min",
      image: images.service2
    },
    {
      title: "Tratamiento VIP",
      description: "Experiencia completa con corte, barba, mascarilla y masaje relajante",
      price: "$75",
      duration: "90 min",
      image: images.service3
    },
    {
      title: "Estilo de Barba",
      description: "Diseño y mantenimiento profesional de barba con productos exclusivos",
      price: "$30",
      duration: "30 min",
      image: images.service4
    }
  ];

  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center text-amber-400 mb-4">Servicios Premium</h2>
          <p className="text-xl text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Cada servicio es una experiencia diseñada para hombres que exigen lo mejor
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="group relative overflow-hidden rounded-xl shadow-2xl hover:shadow-amber-500/20 transition-all duration-500">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 bg-gray-800">
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-amber-400 font-bold text-lg">{service.price}</span>
                    <span className="text-gray-400">{service.duration}</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <button className="w-full py-2 bg-amber-500 text-black font-bold rounded-lg hover:bg-amber-400 transition-all">
                    Reservar
                  </button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;