import { MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

const WHATSAPP_PHONE = '+31629532653';
const WHATSAPP_MESSAGE = 'Thank you for contacting AfriNex, How can we help you';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button after page load
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);
    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE.replace(/\+| /g, '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className={`
        fixed bottom-6 left-6 z-60 w-14 h-14 md:w-16 md:h-16 rounded-full 
        shadow-2xl hover:shadow-amber-500/25 transition-all duration-300
        bg-gradient-to-r from-emerald-500 to-emerald-600 
        dark:from-emerald-400 dark:to-emerald-500
        hover:from-emerald-600 hover:to-emerald-700 dark:hover:from-emerald-500 dark:hover:to-emerald-600
        hover:scale-110 hover:-translate-y-1 active:scale-95
        border-4 border-white/20 dark:border-neutral-900/50 backdrop-blur-sm
        animate-pulse-slow opacity-0 invisible
        ${isVisible ? 'opacity-100 visible animate-fade-in-up' : ''}
        md:bottom-8 md:left-8
      `}
      aria-label="Chat on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8 mx-auto text-white drop-shadow-md" />
    </button>
  );
}
