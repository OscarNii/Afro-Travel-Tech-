export interface Experience {
  id: string;
  title: string;
  location: string;
  // price: number;
  rating: number;
  reviews: number;
  tag: string;
  image: string;
}

export interface City {
  id: string;
  name: string;
  image: string;
  experienceCount: number;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  quote: string;
}
