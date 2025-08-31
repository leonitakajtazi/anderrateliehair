import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/salon/1920/1080')" }}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 p-6 text-brand-dark">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 tracking-tight leading-tight">
          Crafting Beauty, Inspiring Confidence.
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Welcome to Anderr Atelie, where we blend artistry with expertise to create your perfect look.
        </p>
        <a href="#contact" className="bg-brand-primary text-brand-bg font-bold py-3 px-8 rounded-full hover:opacity-90 transition-all duration-300 ease-in-out transform hover:scale-105">
          Book an Appointment
        </a>
      </div>
    </section>
  );
};

export default Hero;