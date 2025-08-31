export interface Service {
  icon: JSX.Element;
  name: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
}

export type GalleryCategory = 'All' | 'Coloring' | 'Styling' | 'Cuts';

export interface GalleryImage {
  id: number;
  category: GalleryCategory;
  imageUrl: string;
  alt: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  imageUrl: string;
}