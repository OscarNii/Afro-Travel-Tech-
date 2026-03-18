import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ExperienceCard from '../components/ExperienceCard';
import CategoryGrid from '../components/CategoryGrid';
import FeaturedCities from '../components/FeaturedCities';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import ContactSection from '../components/ContactSection';
import PageTransition from '../components/PageTransition';
import { trendingExperiences, recommendedExperiences } from '../lib/data';

export default function Home() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
        <Hero />
        
        {/* Trending Experiences */}
        <section className="py-24 bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6 tracking-tight leading-tight">
                Featured Sessions
              </h2>
              <p className="text-xl text-neutral-600 dark:text-neutral-400 font-light">
                Discover the most relevant talks, workshops, and cloud labs happening right now.
              </p>
            </div>
            <Link 
              to="/explore"
              className="flex items-center gap-2 text-amber-600 dark:text-amber-500 font-semibold hover:text-amber-700 dark:hover:text-amber-400 transition-colors group whitespace-nowrap"
            >
              View all sessions
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="flex overflow-x-auto pb-12 -mx-6 px-6 md:mx-0 md:px-0 gap-8 snap-x snap-mandatory hide-scrollbar">
            {trendingExperiences.map((experience) => (
              <div key={experience.id} className="min-w-[320px] md:min-w-[400px] snap-center">
                <ExperienceCard experience={experience} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CategoryGrid />
      <FeaturedCities />

      {/* Personalized Section */}
      <section className="py-24 bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6 tracking-tight leading-tight">
                Recommended Tracks
              </h2>
              <p className="text-xl text-neutral-600 dark:text-neutral-400 font-light">
                Curated sessions and workshops based on your interests in IT, cloud, and security.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recommendedExperiences.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <ContactSection />
      <CTASection />
      </main>
    </PageTransition>
  );
}
