import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SearchBar from './SearchBar';
import { cn } from '../lib/utils';

const images = [
  'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1560439514-4e9645039924?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1561489396-888724a1543d?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1503428593586-e225b39bddfe?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      {images.map((src, index) => (
        <div
          key={src}
          className={cn(
            "absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out",
            index === currentImage ? "opacity-100" : "opacity-0"
          )}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-neutral-900/60 via-neutral-900/40 to-neutral-900/80 backdrop-blur-[2px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-center text-center mt-20">
        <span className="inline-block py-1 px-3 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-sm font-semibold tracking-wider uppercase mb-6 backdrop-blur-md">
          Tech Conference • Cloud Engineering
        </span>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-6 drop-shadow-lg max-w-5xl">
          Discover the Future of Tech & Cloud Engineering
        </h1>
        
        <p className="text-lg md:text-2xl text-neutral-200 mb-12 max-w-2xl font-light drop-shadow-md">
          Keynotes, workshops, hands-on labs, and security talks for IT professionals and decision makers.
        </p>

        <div className="w-full max-w-4xl mb-12">
          <SearchBar />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            to="/explore"
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all flex items-center justify-center gap-2 shadow-xl shadow-amber-600/20 hover:shadow-amber-600/40 hover:-translate-y-0.5"
          >
            Explore Sessions <ArrowRight className="w-5 h-5" />
          </Link>
          <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5">
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
}
