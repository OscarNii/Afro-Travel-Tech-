import { City, Experience, Testimonial } from '../types';

export const trendingExperiences: Experience[] = [
  {
    id: '1',
    title: 'Cloud Native Keynote',
    location: 'London, UK',
    price: 45,
    rating: 4.9,
    reviews: 128,
    tag: 'Keynote',
    image: 'https://plus.unsplash.com/premium_photo-1682123973193-e087937a9de9?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '2',
    title: 'DevSecOps Workshop',
    location: 'Paris, France',
    price: 85,
    rating: 4.8,
    reviews: 94,
    tag: 'Workshop',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '3',
    title: 'Cybersecurity Panel: Threats & Defenses',
    location: 'Berlin, Germany',
    price: 30,
    rating: 5.0,
    reviews: 215,
    tag: 'Panel',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '4',
    title: 'Cloud Labs: Hands-on Kubernetes',
    location: 'Amsterdam, Netherlands',
    price: 60,
    rating: 4.7,
    reviews: 82,
    tag: 'Cloud Lab',
    image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '5',
    title: 'Networking Breakfast: Black Founders',
    location: 'London, UK',
    price: 25,
    rating: 4.9,
    reviews: 156,
    tag: 'Networking',
    image: 'https://images.unsplash.com/photo-1520110120835-c96534a4c984?q=80&w=2334&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 't-6',
    title: 'Tech Innovation Summit',
    location: 'London, UK',
    price: 150,
    rating: 4.9,
    reviews: 320,
    tag: 'Conference',
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
    title: 'Edge Computing Roundtable',
    location: 'Paris, France',
    price: 55,
    rating: 4.8,
    reviews: 112,
    tag: 'Panel',
    image: 'https://images.unsplash.com/photo-1558008258-3256797b43f3?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '7',
    title: 'Cloud Security Workshop',
    location: 'London, UK',
    price: 40,
    rating: 4.6,
    reviews: 340,
    tag: 'Workshop',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '8',
    title: 'Future of AI & Ops Panel',
    location: 'Berlin, Germany',
    price: 35,
    rating: 4.9,
    reviews: 67,
    tag: 'Panel',
    image: 'https://images.unsplash.com/photo-1510511233900-1982d92bd835?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  }
];

export const featuredCities: City[] = [
  {
    id: 'c1',
    name: 'London',
    image: 'https://plus.unsplash.com/premium_photo-1671734045770-4b9e1a5e53a0?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    image: 'https://plus.unsplash.com/premium_photo-1677344289076-b4e8d7325e94?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    quote: 'AfriNex completely changed how I approach conferences. The Cloud Native Keynote was exceptional!',
  },
  {
    id: 't2',
    name: 'Marcus Adebayo',
    avatar: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&q=80&w=150',
    rating: 5,
    quote: 'Finding top tech sessions used to be scattered. This platform made it seamless — the London DevSecOps Workshop was fantastic.',
  },
  {
    id: 't3',
    name: 'Elena Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150',
    rating: 4,
    quote: 'A curated conference experience. I gained practical skills and networked with leading cloud engineers in Berlin.',
  }
];
