import { useState } from 'react';
import { Filter, SlidersHorizontal } from 'lucide-react';
import ExperienceCard from '../components/ExperienceCard';
import SearchBar from '../components/SearchBar';
import PageTransition from '../components/PageTransition';
import { trendingExperiences, recommendedExperiences } from '../lib/data';

const allExperiences = [...trendingExperiences, ...recommendedExperiences];

export default function Explore() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Keynotes', 'Workshops', 'Panels', 'Networking', 'Cloud Labs'];

  const filteredExperiences = activeCategory === 'All' 
    ? allExperiences 
    : allExperiences.filter(exp => exp.tag === activeCategory);

  return (
    <PageTransition>
      <main className="min-h-screen bg-neutral-50 dark:bg-neutral-950 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-white mb-6 tracking-tight">
            Explore Sessions
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 font-light max-w-2xl mb-12">
            Discover top tech talks, hands-on workshops, panels, and cloud labs from leading practitioners.
          </p>
          
          <div className="bg-white dark:bg-neutral-900 p-4 rounded-3xl shadow-sm border border-neutral-100 dark:border-neutral-800 mb-12">
            <SearchBar className="shadow-none border-none" />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex overflow-x-auto pb-2 -mx-6 px-6 md:mx-0 md:px-0 gap-3 w-full md:w-auto hide-scrollbar">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                    activeCategory === category
                      ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-md'
                      : 'bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-900 dark:hover:border-neutral-700 hover:text-neutral-900 dark:hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <button className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 font-semibold hover:border-neutral-900 dark:hover:border-neutral-700 hover:text-neutral-900 dark:hover:text-white transition-all w-full md:w-auto justify-center">
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExperiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>

        {filteredExperiences.length === 0 && (
          <div className="text-center py-24">
            <Filter className="w-12 h-12 text-neutral-300 dark:text-neutral-700 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">No sessions found</h3>
            <p className="text-neutral-500 dark:text-neutral-400">Try adjusting your filters or search criteria.</p>
          </div>
        )}
      </div>
      </main>
    </PageTransition>
  );
}
