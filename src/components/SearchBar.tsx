import { useState } from 'react';
import { Search, MapPin, Calendar, Activity } from 'lucide-react';
import { cn } from '../lib/utils';

export default function SearchBar({ className }: { className?: string }) {
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');

  return (
    <div className={cn(
      "bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl rounded-full shadow-2xl p-2 flex flex-col md:flex-row items-center gap-2 md:gap-4 border border-white/20 dark:border-neutral-800",
      className
    )}>
      <div className="flex-1 flex items-center gap-3 px-4 py-3 md:py-2 w-full md:w-auto border-b md:border-b-0 md:border-r border-neutral-200 dark:border-neutral-800">
        <MapPin className="w-5 h-5 text-amber-600 shrink-0" />
        <div className="flex flex-col w-full">
          <label className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">Location</label>
          <input 
            type="text" 
            placeholder="Where to?" 
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="bg-transparent border-none outline-none text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 font-medium w-full"
          />
        </div>
      </div>

      <div className="flex-1 flex items-center gap-3 px-4 py-3 md:py-2 w-full md:w-auto border-b md:border-b-0 md:border-r border-neutral-200 dark:border-neutral-800">
        <Calendar className="w-5 h-5 text-amber-600 shrink-0" />
        <div className="flex flex-col w-full">
          <label className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">Date</label>
          <input 
            type="text" 
            placeholder="Add dates" 
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="bg-transparent border-none outline-none text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 font-medium w-full"
          />
        </div>
      </div>

      <div className="flex-1 flex items-center gap-3 px-4 py-3 md:py-2 w-full md:w-auto">
        <Activity className="w-5 h-5 text-amber-600 shrink-0" />
        <div className="flex flex-col w-full">
          <label className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">Category</label>
          <select 
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="bg-transparent border-none outline-none text-neutral-900 dark:text-white font-medium w-full appearance-none"
          >
            <option value="" disabled className="dark:bg-neutral-900">Select type</option>
            <option value="events" className="dark:bg-neutral-900">Events</option>
            <option value="nightlife" className="dark:bg-neutral-900">Nightlife</option>
            <option value="tours" className="dark:bg-neutral-900">Cultural Tours</option>
            <option value="food" className="dark:bg-neutral-900">Food & Dining</option>
          </select>
        </div>
      </div>

      <button className="bg-amber-600 hover:bg-amber-700 text-white rounded-full p-4 md:px-8 md:py-4 flex items-center gap-2 transition-all shadow-lg shadow-amber-600/30 hover:shadow-amber-600/50 w-full md:w-auto justify-center mt-2 md:mt-0">
        <Search className="w-5 h-5" />
        <span className="font-semibold md:hidden">Search</span>
      </button>
    </div>
  );
}
