import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { cn } from '../lib/utils';
import { useTheme } from './ThemeProvider';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else if (theme === 'light') {
      setTheme('dark');
    } else {
      // If system, check current system preference and toggle
      const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(isSystemDark ? 'light' : 'dark');
    }
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md shadow-sm py-4 border-b border-transparent dark:border-neutral-800'
          : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <img 
            src="/src/AfriNex.png" 
            alt="AfriNex" 
            className="w-10 h-10 object-contain group-hover:opacity-90 transition-opacity rounded-full" 
          />
          <span className={cn(
            "font-semibold text-xl tracking-tight transition-colors",
            isScrolled ? "text-neutral-900 dark:text-white" : "text-white drop-shadow-md"
          )}>
            AfriNex
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/explore" className={cn(
            "text-sm font-medium transition-colors hover:text-amber-500",
            isScrolled ? "text-neutral-600 dark:text-neutral-300 dark:hover:text-amber-500" : "text-white/90 drop-shadow-sm"
          )}>Sessions</Link>
          <a href="/#featured-destinations" className={cn(
            "text-sm font-medium transition-colors hover:text-amber-500",
            isScrolled ? "text-neutral-600 dark:text-neutral-300 dark:hover:text-amber-500" : "text-white/90 drop-shadow-sm"
          )}>Featured Hubs</a>
          <Link to="/explore" className={cn(
            "text-sm font-medium transition-colors hover:text-amber-500",
            isScrolled ? "text-neutral-600 dark:text-neutral-300 dark:hover:text-amber-500" : "text-white/90 drop-shadow-sm"
          )}>View all sessions</Link>
          
          <button 
            onClick={toggleTheme}
            className={cn(
              "p-2 rounded-full transition-colors",
              isScrolled 
                ? "text-neutral-600 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800" 
                : "text-white hover:bg-white/20"
            )}
            aria-label="Toggle theme"
          >
            {theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches) ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          <a 
            href="#contact"
            className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg shadow-amber-600/20 hover:shadow-amber-600/40"
          >
            Partners
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className={cn(
              "p-2 rounded-full transition-colors",
              isScrolled 
                ? "text-neutral-600 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800" 
                : "text-white hover:bg-white/20"
            )}
            aria-label="Toggle theme"
          >
            {theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches) ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          <button 
            className="p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={cn("w-6 h-6", isScrolled ? "text-neutral-900 dark:text-white" : "text-white")} />
            ) : (
              <Menu className={cn("w-6 h-6", isScrolled ? "text-neutral-900 dark:text-white" : "text-white")} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-neutral-950 shadow-xl border-t border-neutral-100 dark:border-neutral-800 flex flex-col p-6 gap-4">
          <Link to="/explore" className="text-neutral-600 dark:text-neutral-300 font-medium text-lg" onClick={() => setIsMobileMenuOpen(false)}>Sessions</Link>
          <a href="/#featured-destinations" className="text-neutral-600 dark:text-neutral-300 font-medium text-lg" onClick={() => setIsMobileMenuOpen(false)}>Featured Hubs</a>
          <Link to="/explore" className="text-neutral-600 dark:text-neutral-300 font-medium text-lg" onClick={() => setIsMobileMenuOpen(false)}>View all sessions</Link>
          <a 
            href="#contact"
            className="bg-amber-600 text-white px-6 py-3 rounded-xl text-base font-medium mt-4 text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Partners
          </a>
        </div>
      )}
    </nav>
  );
}
