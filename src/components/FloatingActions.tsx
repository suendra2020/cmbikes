import { useState, useEffect } from "react";
import { MessageSquare, Phone, Mail, Map, ArrowUp } from "lucide-react";

export default function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Coordinates or Search Query for CM Bikes Channasandra, Bangalore on Google Maps
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=CM+Bikes+Channasandra+Bengaluru";
  
  // WhatsApp Link with custom prompt requested by the user
  const whatsappUrl = "https://wa.me/919900088812?text=Hello%20CM%20Bikes%2C%20I%20am%20interested%20in%20purchasing%20a%20bike.%20Please%20contact%20me.";

  return (
    <div id="floating-dealership-actions" className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
      
      {/* Scroll to Top (Dynamic fade-in) */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-3.5 rounded-full bg-brand-dark/90 border border-white/10 text-white hover:text-brand-cyan hover:border-brand-cyan hover:scale-110 active:scale-95 shadow-2xl transition-all duration-300 backdrop-blur-md group"
          title="Scroll To Top"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
        </button>
      )}

      {/* Google Maps Button */}
      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3.5 rounded-full bg-brand-dark/90 border border-white/10 text-gray-300 hover:text-white hover:border-brand-cyan hover:scale-110 shadow-xl transition-all duration-300 backdrop-blur-md flex items-center justify-center"
        title="Find on Google Maps"
      >
        <Map className="w-5 h-5 text-blue-400" />
      </a>

      {/* Email Button */}
      <a
        href="mailto:info@cmbikesbangalore.com"
        className="p-3.5 rounded-full bg-brand-dark/90 border border-white/10 text-gray-300 hover:text-white hover:border-brand-cyan hover:scale-110 shadow-xl transition-all duration-300 backdrop-blur-md flex items-center justify-center"
        title="Email US"
      >
        <Mail className="w-5 h-5 text-purple-400" />
      </a>

      {/* Call Button */}
      <a
        href="tel:+919900088812"
        className="p-3.5 rounded-full bg-brand-dark/90 border border-white/10 text-gray-300 hover:text-white hover:border-brand-cyan hover:scale-110 shadow-xl transition-all duration-300 backdrop-blur-md flex items-center justify-center"
        title="Call Now"
      >
        <Phone className="w-5 h-5 text-brand-cyan" />
      </a>

      {/* WhatsApp Button (Largest & pulsating neon) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative p-4 rounded-full bg-emerald-500 hover:bg-emerald-400 hover:scale-110 active:scale-95 shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all duration-300 flex items-center justify-center group animate-bounce-slow"
        title="WhatsApp Now"
      >
        <MessageSquare className="w-6 h-6 text-white" />
        
        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full border-2 border-emerald-500 animate-ping opacity-75 pointer-events-none"></span>
      </a>

    </div>
  );
}
