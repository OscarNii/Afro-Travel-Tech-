import { City, Experience, Testimonial } from '../types';

export const trendingExperiences: Experience[] = [
  {
    id: '1',
    title: 'Afrobeat Nightlife Tour',
    location: 'London, UK',
    price: 45,
    rating: 4.9,
    reviews: 128,
    tag: 'Nightlife',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    title: 'West African Culinary Masterclass',
    location: 'Paris, France',
    price: 85,
    rating: 4.8,
    reviews: 94,
    tag: 'Food',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    title: 'Black History Walking Tour',
    location: 'Berlin, Germany',
    price: 30,
    rating: 5.0,
    reviews: 215,
    tag: 'Culture',
    image: 'https://images.unsplash.com/photo-1513622470522-26c314a86eb4?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '4',
    title: 'Amapiano Sunset Boat Party',
    location: 'Amsterdam, Netherlands',
    price: 60,
    rating: 4.7,
    reviews: 82,
    tag: 'Events',
    image: 'https://images.unsplash.com/photo-1533174000220-9fa817394019?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '5',
    title: 'Diaspora Art Gallery Tour',
    location: 'London, UK',
    price: 25,
    rating: 4.9,
    reviews: 156,
    tag: 'Tours',
    image: 'https://images.unsplash.com/photo-1518998053401-878c730c5e69?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 't-6',
    title: 'Afro-Tech Innovation Summit',
    location: 'London, UK',
    price: 150,
    rating: 4.9,
    reviews: 320,
    tag: 'Events',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 't-7',
    title: 'Black Founders Networking Gala',
    location: 'Paris, France',
    price: 120,
    rating: 4.8,
    reviews: 215,
    tag: 'Events',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 't-8',
    title: 'Future of Tech Panel & Mixer',
    location: 'Berlin, Germany',
    price: 85,
    rating: 4.7,
    reviews: 180,
    tag: 'Events',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800',
  }
];

export const recommendedExperiences: Experience[] = [
  {
    id: '6',
    title: 'Pan-African Jazz Evening',
    location: 'Paris, France',
    price: 55,
    rating: 4.8,
    reviews: 112,
    tag: 'Events',
    image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '7',
    title: 'Jollof Festival VIP Pass',
    location: 'London, UK',
    price: 40,
    rating: 4.6,
    reviews: 340,
    tag: 'Food',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '8',
    title: 'Afro-Cuban Dance Workshop',
    location: 'Berlin, Germany',
    price: 35,
    rating: 4.9,
    reviews: 67,
    tag: 'Culture',
    image: 'https://images.unsplash.com/photo-1504609774667-124b89823908?auto=format&fit=crop&q=80&w=800',
  }
];

export const featuredCities: City[] = [
  {
    id: 'c1',
    name: 'London',
    image: 'https://images.unsplash.com/photo-1513635269975-5969336cd100?auto=format&fit=crop&q=80&w=800',
    experienceCount: 142,
  },
  {
    id: 'c2',
    name: 'Paris',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800',
    experienceCount: 89,
  },
  {
    id: 'c3',
    name: 'Berlin',
    image: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&q=80&w=800',
    experienceCount: 64,
  },
  {
    id: 'c4',
    name: 'Amsterdam',
    image: 'https://images.unsplash.com/photo-1517736996303-4eec4a66bb17?auto=format&fit=crop&q=80&w=800',
    experienceCount: 53,
  },
  {
    id: 'c5',
    name: 'Lisbon',
    image: 'https://images.unsplash.com/photo-1585214582618-971751221126?auto=format&fit=crop&q=80&w=800',
    experienceCount: 47,
  },
  {
    id: 'c6',
    name: 'Brussels',
    image: 'https://images.unsplash.com/photo-1559564484-e48b3e040ff4?auto=format&fit=crop&q=80&w=800',
    experienceCount: 38,
  },
  {
    id: 'c7',
    name: 'Madrid',
    image: 'https://images.unsplash.com/photo-1539037116277-4db20202af70?auto=format&fit=crop&q=80&w=800',
    experienceCount: 42,
  },
  {
    id: 'c8',
    name: 'Milan',
    image: 'https://images.unsplash.com/photo-1520440229-6469a149ac59?auto=format&fit=crop&q=80&w=800',
    experienceCount: 35,
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Jenkins',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    rating: 5,
    quote: 'Afro Travel Europe completely changed how I experience the continent. The culinary masterclass in Paris was unforgettable!',
  },
  {
    id: 't2',
    name: 'Marcus Adebayo',
    avatar: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&q=80&w=150',
    rating: 5,
    quote: 'Finding authentic cultural events used to be so hard. This platform makes it seamless. The London nightlife tour was incredible.',
  },
  {
    id: 't3',
    name: 'Elena Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150',
    rating: 4,
    quote: 'A beautiful, curated experience. I felt a deep connection to the diaspora community during my trip to Berlin.',
  }
];
