import { Music, Utensils, Map, Users, CalendarDays, Cloud, Shield, Server } from 'lucide-react';
import { cn } from '../lib/utils';

const categories = [
  { id: 'cloud', label: 'Cloud Engineering', icon: Cloud, color: 'bg-orange-100 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400' },
  { id: 'security', label: 'Cybersecurity', icon: Shield, color: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400' },
  { id: 'devops', label: 'DevOps', icon: Server, color: 'bg-purple-100 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400' },
  { id: 'conferences', label: 'Conferences', icon: CalendarDays, color: 'bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400' },
  { id: 'networking', label: 'Networking', icon: Users, color: 'bg-rose-100 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400' },
];

export default function CategoryGrid({ className }: { className?: string }) {
  return (
    <section className={cn("py-20 bg-neutral-50 dark:bg-neutral-950", className)}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4 tracking-tight">
              Explore by Track
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl">
              Find sessions by track — cloud engineering, security, devops, and more.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category) => (
            <button
              key={category.id}
              className="group flex flex-col items-center justify-center p-8 rounded-3xl bg-white dark:bg-neutral-900 shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-100 dark:border-neutral-800 hover:-translate-y-1"
            >
              <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110", category.color)}>
                <category.icon className="w-8 h-8" />
              </div>
              <span className="text-neutral-900 dark:text-white font-semibold text-lg tracking-tight group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors">
                {category.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
