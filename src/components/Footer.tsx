import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import Logo from './Logo';

export default function Footer({ className }: { className?: string }) {
  return (
    <footer className={cn("bg-neutral-900 pt-24 pb-12 text-neutral-400 border-t border-neutral-800", className)}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2 group">
              <Logo className="w-10 h-10 group-hover:opacity-90 transition-opacity" />
              <span className="font-bold text-2xl tracking-tight text-white">
                Afro Travel
              </span>
            </Link>
            <p className="text-neutral-400 leading-relaxed font-light">
              Curating premium, Afro-centric cultural experiences across Europe. Discover your next adventure with us.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-all">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-lg mb-4 tracking-wide uppercase">Explore</h4>
            <a href="/#featured-destinations" className="hover:text-amber-500 transition-colors">Destinations</a>
            <Link to="/experiences" className="hover:text-amber-500 transition-colors">Experiences</Link>
            <Link to="/events" className="hover:text-amber-500 transition-colors">Events</Link>
            <Link to="/tours" className="hover:text-amber-500 transition-colors">Tours</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-lg mb-4 tracking-wide uppercase">Company</h4>
            <Link to="/about" className="hover:text-amber-500 transition-colors">About Us</Link>
            <Link to="/careers" className="hover:text-amber-500 transition-colors">Careers</Link>
            <Link to="/press" className="hover:text-amber-500 transition-colors">Press</Link>
            <Link to="/contact" className="hover:text-amber-500 transition-colors">Contact</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-lg mb-4 tracking-wide uppercase">Newsletter</h4>
            <p className="text-neutral-400 mb-4 font-light">
              Subscribe to get the latest updates on new experiences and exclusive offers.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:border-amber-500 flex-1 transition-colors"
              />
              <button
                type="submit"
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-bold transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-light">
          <p>&copy; {new Date().getFullYear()} Afro Travel Europe. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-amber-500 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-amber-500 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
