import React from 'react';
import { Service, TeamMember, GalleryImage, Testimonial, GalleryCategory } from './types';

export const services: Service[] = [
  {
    icon: <ScissorsIcon />,
    name: 'Precision Cuts',
    description: 'Tailored haircuts that complement your features and lifestyle, from classic bobs to modern layers.',
  },
  {
    icon: <PaintBrushIcon />,
    name: 'Vibrant Coloring',
    description: 'Expert color services including balayage, highlights, and full-color treatments using premium products.',
  },
  {
    icon: <SparklesIcon />,
    name: 'Elegant Styling',
    description: 'Perfect for any occasion, from blowouts and updos to intricate braids and sleek straightening.',
  },
  {
    icon: <DropletIcon />,
    name: 'Keratin Treatments',
    description: 'Smooth, frizz-free hair with our nourishing and long-lasting keratin smoothing treatments.',
  },
  {
    icon: <HeartIcon />,
    name: 'Bridal & Occasion',
    description: 'Look your absolute best on your special day with our bespoke bridal hair and styling packages.',
  },
  {
    icon: <RazorIcon />,
    name: 'Men\'s Grooming',
    description: 'Sharp cuts, classic shaves, and modern styling tailored for the discerning gentleman.',
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: 'Elira Anderr',
    role: 'Master Stylist & Owner',
    imageUrl: 'https://picsum.photos/seed/elira/400/400',
    bio: 'With over 15 years of experience, Elira founded Anderr Atelie to create a haven of beauty and creativity. She specializes in transformative cuts and colors.',
  },
  {
    name: 'Besnik Krasniqi',
    role: 'Color Specialist',
    imageUrl: 'https://picsum.photos/seed/besnik/400/400',
    bio: 'Besnik is a true artist when it comes to hair color. From subtle balayage to vibrant, bold hues, he brings passion and precision to every client.',
  },
  {
    name: 'Fjolla Gashi',
    role: 'Styling Expert',
    imageUrl: 'https://picsum.photos/seed/fjolla/400/400',
    bio: 'Fjolla has an eye for elegance and form. She excels at creating stunning updos, perfect blowouts, and styles that last for any and every occasion.',
  },
];

export const galleryImages: GalleryImage[] = [
  { id: 1, category: 'Coloring', imageUrl: 'https://picsum.photos/seed/gal1/600/800', alt: 'Vibrant balayage hair color' },
  { id: 2, category: 'Cuts', imageUrl: 'https://picsum.photos/seed/gal2/600/800', alt: 'Sharp bob haircut' },
  { id: 3, category: 'Styling', imageUrl: 'https://picsum.photos/seed/gal3/600/800', alt: 'Elegant wedding updo' },
  { id: 4, category: 'Coloring', imageUrl: 'https://picsum.photos/seed/gal4/600/800', alt: 'Pastel pink hair color' },
  { id: 5, category: 'Styling', imageUrl: 'https://picsum.photos/seed/gal5/600/800', alt: 'Voluminous blowout style' },
  { id: 6, category: 'Cuts', imageUrl: 'https://picsum.photos/seed/gal6/600/800', alt: 'Modern layered haircut' },
];

export const testimonials: Testimonial[] = [
  {
    quote: 'Absolutely the best salon experience I have ever had. The attention to detail and care is unmatched. I left feeling like a new person!',
    author: 'Linda M.',
    imageUrl: 'https://picsum.photos/seed/linda/100/100',
  },
  {
    quote: 'The coloring service is phenomenal. Besnik understood exactly what I wanted and executed it perfectly. Highly recommend!',
    author: 'Drita K.',
    imageUrl: 'https://picsum.photos/seed/drita/100/100',
  },
  {
    quote: 'A beautiful salon with a wonderful, professional team. My haircut by Fjolla was perfect. This is my new go-to place in Prishtina.',
    author: 'Alba R.',
    imageUrl: 'https://picsum.photos/seed/alba/100/100',
  },
];

export const galleryCategories: GalleryCategory[] = ['All', 'Coloring', 'Styling', 'Cuts'];

// Helper Icon components
function ScissorsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 6a3 3 0 100-6 3 3 0 000 6zM6 18a3 3 0 100-6 3 3 0 000 6zM13 6l-6 6M13 18l-6-6" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.121 8.121L12 12m2.879-2.879L12 12m0 0L9.121 14.879" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 6a3 3 0 11-6 0 3 3 0 016 0zM18 18a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function PaintBrushIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z" />
    </svg>
  );
}

function SparklesIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M19 3v4M17 5h4M12 21v-4M10 19h4M5 12H3m18 0h-2M12 3v2m0 14v2M8.5 6.5l-2-2m11 11l-2-2m2-9l-2 2m-7 7l-2 2" />
    </svg>
  );
}

function DropletIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25c0 2.895 2.015 5.25 4.5 5.25s4.5-2.355 4.5-5.25c0-3.64-4.5-8.25-4.5-8.25s-4.5 4.61-4.5 8.25z" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  );
}

function RazorIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3.75L6 6m12 12l2.25 2.25M12 12l6-6-3-3-6 6-6 6 3 3 6-6z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 5.25l4.5 4.5" />
    </svg>
  );
}