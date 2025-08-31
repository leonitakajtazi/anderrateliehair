import React from 'react';
import AnimatedSection from './AnimatedSection';

const VisitUs: React.FC = () => {
  return (
    <AnimatedSection id="contact" className="py-20 md:py-32 bg-brand-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-4">Visit Us</h2>
          <p className="text-lg max-w-2xl mx-auto text-brand-text">
            We can't wait to welcome you to our salon.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2 bg-brand-bg p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-serif text-brand-dark mb-6">Contact & Hours</h3>
            <div className="space-y-4 text-brand-text">
              <div className="flex items-start">
                <LocationMarkerIcon />
                <p>Shefqet Shkupi, Prishtina 10000</p>
              </div>
              <div className="flex items-start">
                <PhoneIcon />
                <a href="tel:+38345924333" className="hover:text-brand-primary transition-colors">+383 45 924 333</a>
              </div>
              <div className="flex items-start">
                <ClockIcon />
                <p>MON - SUN : 8:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 h-80 md:h-auto bg-brand-bg rounded-lg flex items-center justify-center">
            {/* Placeholder for Google Maps embed */}
            <p className="text-gray-500">Map Area</p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

// SVG Icon Components
const LocationMarkerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-brand-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-brand-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-brand-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default VisitUs;