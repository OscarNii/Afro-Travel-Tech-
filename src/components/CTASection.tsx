import { ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

export default function CTASection({ className }: { className?: string }) {
  return (
    <section className={cn("py-24 bg-white dark:bg-neutral-950", className)}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-neutral-900 shadow-2xl">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&q=80&w=2000"
              alt="Community"
              className="w-full h-full object-cover opacity-40 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/90 via-neutral-900/60 to-transparent" />
          </div>

          <div className="relative z-10 p-12 md:p-24 max-w-3xl flex flex-col items-start">
            <span className="inline-block py-1.5 px-4 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-sm font-bold tracking-widest uppercase mb-8 backdrop-blur-md">
              Join the Movement
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
              Ready to experience Europe differently?
            </h2>
            <p className="text-xl text-neutral-300 mb-12 font-light max-w-xl leading-relaxed">
              Connect with the diaspora, discover hidden gems, and create memories that last a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all flex items-center justify-center gap-2 shadow-xl shadow-amber-600/20 hover:shadow-amber-600/40 hover:-translate-y-1">
                Join the Community <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full text-lg font-bold transition-all flex items-center justify-center gap-2 hover:-translate-y-1">
                Host an Experience
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
