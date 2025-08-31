import React from 'react';
import AnimatedSection from './AnimatedSection';
import { services } from '../constants';

const Services: React.FC = () => {
  return (
    <AnimatedSection id="services" className="py-20 md:py-32 bg-brand-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-4">Our Services</h2>
          <p className="text-lg max-w-2xl mx-auto text-brand-text">
            We offer a curated selection of services designed to enhance your natural beauty.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div key={index} className="bg-brand-bg p-8 rounded-lg shadow-sm text-center transform transition-transform duration-300 hover:-translate-y-2">
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-2xl font-serif text-brand-dark mb-3">{service.name}</h3>
              <p className="text-brand-text">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Services;