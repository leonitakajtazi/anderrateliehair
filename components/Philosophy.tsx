import React from 'react';
import AnimatedSection from './AnimatedSection';

const Philosophy: React.FC = () => {
  return (
    <AnimatedSection id="philosophy" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden order-last md:order-first">
            <img src="https://picsum.photos/seed/philosophy/800/1000" alt="Serene salon interior" className="w-full h-full object-cover" />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-6">Our Philosophy</h2>
            <div className="max-w-xl mx-auto md:mx-0">
              <p className="text-lg text-brand-text mb-4">
                At Anderr Atelie, we believe that true beauty is a reflection of your unique personality and spirit. Our philosophy is centered around a personalized approach, ensuring that every service is tailored to you.
              </p>
              <p className="text-lg text-brand-text">
                We are committed to using high-quality, sustainable products and continuous education to bring you the latest trends and timeless styles. Our goal is to create a welcoming and luxurious space where you can relax, rejuvenate, and leave feeling your most confident and beautiful self.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Philosophy;