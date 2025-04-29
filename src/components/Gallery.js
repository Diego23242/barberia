import React, { useState } from 'react';
import images from '../mock/images';
import AnimatedSection from './AnimatedSection';

const Gallery = () => {
  const galleryItems = [
    { id: 1, image: images.gallery1, title: "Corte de precisión" },
    { id: 2, image: images.gallery2, title: "Afeitado tradicional" },
    { id: 3, image: images.gallery3, title: "Estilo personalizado" },
    { id: 4, image: images.gallery4, title: "Ambiente exclusivo" }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center text-amber-400 mb-4">Nuestro Espacio</h2>
          <p className="text-xl text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Un ambiente diseñado para ofrecerte la máxima comodidad y exclusividad
          </p>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {galleryItems.slice(0, 2).map((item) => (
              <div key={item.id} className="group relative overflow-hidden rounded-xl h-96">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 flex items-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {galleryItems.map((item, index) => (
              <div 
                key={item.id}
                className={`relative overflow-hidden rounded-xl h-48 cursor-pointer ${index === activeIndex ? 'ring-4 ring-amber-400' : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Gallery;