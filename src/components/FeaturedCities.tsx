import { ArrowRight } from 'lucide-react';
import { featuredCities } from '../lib/data';
import { cn } from '../lib/utils';

export default function FeaturedCities({ className }: { className?: string }) {
  return (
    <section className={cn("py-24 bg-white dark:bg-neutral-900", className)}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6 tracking-tight leading-tight">
              Featured Destinations
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 font-light">
              Explore the most vibrant Afro-centric hubs across Europe. From the streets of London to the nightlife of Berlin.
            </p>
          </div>
          <button className="flex items-center gap-2 text-amber-600 dark:text-amber-500 font-semibold hover:text-amber-700 dark:hover:text-amber-400 transition-colors group whitespace-nowrap">
            View all cities
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCities.map((city, index) => (
            <div
              key={city.id}
              className={cn(
                "group relative rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 border border-transparent dark:border-neutral-800",
                index === 0 ? "md:col-span-2 lg:col-span-2 aspect-[16/9] lg:aspect-auto lg:h-[400px]" : "aspect-[4/5] lg:h-[400px]"
              )}
            >
              <img
                src={city.image}
                alt={city.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col justify-end h-full">
                <h3 className="text-3xl font-bold text-white mb-2 tracking-tight group-hover:-translate-y-2 transition-transform duration-500">
                  {city.name}
                </h3>
                <p className="text-amber-400 font-medium text-lg opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-500 delay-100">
                  {city.experienceCount} Experiences
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
