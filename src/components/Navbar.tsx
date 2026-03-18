import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { cn } from '../lib/utils';
import { useTheme } from './ThemeProvider';
import logo from '../AfriNex.png';

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
            src={logo} 
            alt="AfriNex" 
            className="w-10 h-10 object-contain group-hover:opacity-90 transition-opacity rounded-full"
            style={{ display: 'inline-block', width: '100%', maxWidth: '100%' }}
          />
          <span className={cn(
            "font-semibold text-xl tracking-tight transition-colors",
            isScrolled ? "text-neutral-900 dark:text-white" : "text-white drop-shadow-md"
          )}>
            AfriNex
          </span>
        </Link>

        {/* Rest of the code */}
      </div>
    </nav>
  );
}