import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-surface text-brand-text">
      <div className="container mx-auto px-6 py-8 text-center">
        <p className="font-serif text-2xl mb-2 text-brand-dark">Anderr Atelie HairBeauty</p>
        <p className="mb-4 text-sm text-brand-secondary">&copy; {new Date().getFullYear()} Anderr Atelie. All Rights Reserved.</p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:text-brand-primary transition-colors">Facebook</a>
          <a href="#" className="hover:text-brand-primary transition-colors">Instagram</a>
          <a href="#" className="hover:text-brand-primary transition-colors">TikTok</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;