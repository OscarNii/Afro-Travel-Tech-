import { Star } from 'lucide-react';
import { testimonials } from '../lib/data';
import { cn } from '../lib/utils';

export default function Testimonials({ className }: { className?: string }) {
  return (
    <section className={cn("py-24 bg-neutral-50 dark:bg-neutral-950", className)}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-16 text-center tracking-tight">
          Attendee Feedback
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-neutral-900 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-neutral-100 dark:border-neutral-800 flex flex-col h-full"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-amber-100 dark:border-amber-900"
                />
                <div>
                  <h4 className="font-bold text-neutral-900 dark:text-white text-lg">{testimonial.name}</h4>
                  <div className="flex items-center gap-1 mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "w-4 h-4",
                          i < testimonial.rating
                            ? "fill-amber-500 text-amber-500"
                            : "fill-neutral-200 text-neutral-200 dark:fill-neutral-700 dark:text-neutral-700"
                        )}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg italic font-light flex-1">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
