import React from 'react';
import AnimatedSection from './AnimatedSection';
import { testimonials } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <AnimatedSection className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-4">What Our Clients Say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-brand-surface p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
              <img src={testimonial.imageUrl} alt={testimonial.author} className="w-20 h-20 rounded-full mb-6 -mt-16 border-4 border-brand-bg" />
              <p className="text-brand-text italic mb-6">"{testimonial.quote}"</p>
              <h4 className="font-semibold text-brand-dark tracking-wider uppercase">{testimonial.author}</h4>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Testimonials;