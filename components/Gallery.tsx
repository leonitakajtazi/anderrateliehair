import React, { useState, useMemo } from 'react';
import AnimatedSection from './AnimatedSection';
import { galleryImages, galleryCategories } from '../constants';
import { GalleryCategory } from '../types';

const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>('All');

  const filteredImages = useMemo(() => {
    if (activeFilter === 'All') {
      return galleryImages;
    }
    return galleryImages.filter(image => image.category === activeFilter);
  }, [activeFilter]);

  return (
    <AnimatedSection id="work" className="py-20 md:py-32 bg-brand-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-4">Our Work</h2>
          <p className="text-lg max-w-2xl mx-auto text-brand-text">
            A glimpse into the transformations we create every day.
          </p>
        </div>
        <div className="flex justify-center space-x-2 md:space-x-4 mb-10">
          {galleryCategories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 text-sm md:px-6 md:py-2 md:text-base rounded-full transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-brand-primary text-brand-bg font-semibold shadow-md'
                  : 'bg-brand-bg text-brand-text hover:bg-opacity-80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {filteredImages.map(image => (
            <div key={image.id} className="overflow-hidden rounded-lg group aspect-w-4 aspect-h-5">
               <img
                src={image.imageUrl}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Gallery;