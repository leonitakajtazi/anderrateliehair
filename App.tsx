
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import Team from './components/Team';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import VisitUs from './components/VisitUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-brand-bg text-brand-text font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <Services />
        <Team />
        <Gallery />
        <Testimonials />
        <VisitUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
