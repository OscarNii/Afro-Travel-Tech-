import React from 'react';
import { Heart, MapPin, Star } from 'lucide-react';
import { Experience } from '../types';
import { cn } from '../lib/utils';

interface ExperienceCardProps {
  experience: Experience;
  className?: string;
  key?: React.Key;
}

export default function ExperienceCard({ experience, className }: ExperienceCardProps) {
  return (
    <div className={cn("group relative flex flex-col bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-100 dark:border-neutral-800", className)}>
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={experience.image} 
          alt={experience.title} 
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Wishlist Button */}
        <button className="absolute top-4 right-4 p-2.5 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/40 transition-colors z-10">
          <Heart className="w-5 h-5 text-white" />
        </button>

        {/* Tag */}
        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-amber-600/90 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider shadow-sm">
          {experience.tag}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1 text-neutral-500 dark:text-neutral-400 text-sm font-medium">
            <MapPin className="w-4 h-4 text-amber-600" />
            {experience.location}
          </div>
          <div className="flex items-center gap-1 text-sm font-semibold text-neutral-900 dark:text-white">
            <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
            {experience.rating} <span className="text-neutral-400 dark:text-neutral-500 font-normal">({experience.reviews})</span>
          </div>
        </div>

        <h3 className="text-lg font-bold text-neutral-900 dark:text-white leading-tight mb-4 group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors line-clamp-2">
          {experience.title}
        </h3>

        <div className="mt-auto pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium uppercase tracking-wider">From</span>
            <span className="text-lg font-bold text-neutral-900 dark:text-white">€{experience.price}</span>
          </div>
          <a 
            href="/#contact"
            className="text-sm font-semibold text-amber-600 dark:text-amber-500 hover:text-amber-700 dark:hover:text-amber-400 bg-amber-50 dark:bg-amber-500/10 hover:bg-amber-100 dark:hover:bg-amber-500/20 px-4 py-2 rounded-full transition-colors inline-block text-center"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
}
