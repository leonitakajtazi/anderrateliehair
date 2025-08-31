import React from 'react';

const Header: React.FC = () => {
  const navLinks = [
    { href: '#philosophy', label: 'Our Philosophy' },
    { href: '#services', label: 'Services' },
    { href: '#team', label: 'Our Team' },
    { href: '#work', label: 'Our Work' },
    { href: '#contact', label: 'Visit Us' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-brand-bg/90 shadow-md backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-serif font-bold text-brand-dark tracking-wider">
          Anderr Atelie
        </a>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-brand-text hover:text-brand-primary transition-colors duration-300">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="md:hidden">
            {/* Mobile menu button can be added here */}
        </div>
      </div>
    </header>
  );
};

export default Header;