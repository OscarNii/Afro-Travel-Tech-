import { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react';
import { cn } from '../lib/utils';

export default function ContactSection({ className }: { className?: string }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    try {
      const formData = new FormData(formRef.current!);
      const messageData = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
      };
      console.log('Contact form submitted:', messageData);
      setSuccess(true);
      formRef.current?.reset();
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className={cn("py-24 bg-neutral-50 dark:bg-neutral-950", className)}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6 tracking-tight leading-tight">
              Contact & Partnerships
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 font-light mb-12 max-w-lg">
              Questions about speaking, sponsoring, or partnering? Reach out to our team.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-500/20 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-amber-600 dark:text-amber-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-neutral-900 dark:text-white mb-1">Email Us</h4>
                  <p className="text-neutral-600 dark:text-neutral-400">info@techdrivencorelations.com</p>
                  <p className="text-neutral-600 dark:text-neutral-400">partnerships@techdrivencorelations.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-500/20 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-amber-600 dark:text-amber-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-neutral-900 dark:text-white mb-1">Call Us</h4>
                  <p className="text-neutral-600 dark:text-neutral-400">+44 20 7123 4567</p>
                  <p className="text-neutral-600 dark:text-neutral-400">Mon-Fri, 9am-6pm GMT</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-500/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-amber-600 dark:text-amber-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-neutral-900 dark:text-white mb-1">Visit Us</h4>
                  <p className="text-neutral-600 dark:text-neutral-400">124 Cultural Hub Street</p>
                  <p className="text-neutral-600 dark:text-neutral-400">London, UK EC1A 1BB</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-neutral-900 rounded-3xl p-8 md:p-10 shadow-xl border border-neutral-100 dark:border-neutral-800">
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8">Send us a Message</h3>
            {success ? (
              <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-3xl p-12 text-center">
                <CheckCircle className="w-16 h-16 text-green-600 dark:text-green-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-green-900 dark:text-green-100 mb-4">Message Sent Successfully!</h3>
                <p className="text-lg text-green-800 dark:text-green-200 mb-8">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                <button
                  onClick={() => setSuccess(false)}
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-xl flex items-center gap-2 mx-auto transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">First Name</label>
                    <input 
                      name="firstName"
                      type="text" 
                      id="firstName" 
                      required
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Last Name</label>
                    <input 
                      name="lastName"
                      type="text" 
                      id="lastName" 
                      required
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Email Address</label>
                  <input 
                    name="email"
                    type="email" 
                    id="email" 
                    required
                    className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Subject</label>
                  <input 
                    name="subject"
                    type="text" 
                    id="subject" 
                    required
                    className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                    placeholder="How can we help?"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Message</label>
                  <textarea 
                    name="message"
                    id="message" 
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full bg-amber-600 hover:bg-amber-700 disabled:bg-amber-500 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-amber-600/20 hover:shadow-amber-600/40"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
