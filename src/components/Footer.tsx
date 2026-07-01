import { MapPin, Phone, Mail, Clock, ShieldCheck, ChevronRight, Compass } from "lucide-react";
import logoImg from "../assets/images/cm_bikes_logo.jpg";

interface FooterProps {
  setCurrentTab: (tab: string) => void;
}

export default function Footer({ setCurrentTab }: FooterProps) {
  const handleNavClick = (tabId: string) => {
    setCurrentTab(tabId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="premium-footer" className="bg-brand-dark border-t border-white/5 pt-16 pb-8 text-gray-400 relative overflow-hidden">
      {/* Visual Accent - Cyan blur gradient */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-cyan/5 rounded-full filter blur-[100px] pointer-events-none"></div>
      <div className="absolute top-0 left-12 w-64 h-64 bg-brand-teal/5 rounded-full filter blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: About / Branding */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 cursor-pointer select-none" onClick={() => handleNavClick("home")}>
              <img 
                src={logoImg} 
                alt="CM Bikes Logo" 
                className="h-12 sm:h-14 w-auto rounded-lg object-contain border border-white/10 hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(0,176,255,0.1)] bg-white p-0.5"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed pt-2">
              Channasandra's premier luxury motorcycle dealership. Delivering absolute riding passion, certified quality superbikes, and tailored financial services in Bengaluru.
            </p>
            <div className="flex items-center gap-3 pt-3">
              <span className="text-xs text-white bg-white/5 border border-white/10 px-3 py-1 rounded-full flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-cyan" />
                100% Certified Dealership
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-display font-bold text-base uppercase tracking-wider flex items-center gap-2">
              <Compass className="w-4 h-4 text-brand-cyan" />
              <span>Explore Showroom</span>
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { id: "home", label: "Home Base" },
                { id: "new-bikes", label: "New Launches" },
                { id: "used-bikes", label: "Certified Pre-Owned" },
                { id: "accessories", label: "Riding Gear & Parts" },
                { id: "gallery", label: "Media Gallery" },
                { id: "reviews", label: "Customer Stories" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className="flex items-center gap-1 text-gray-400 hover:text-brand-cyan transition-colors duration-150 text-left"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-brand-cyan/60" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-4">
            <h3 className="text-white font-display font-bold text-base uppercase tracking-wider">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { id: "exchange", label: "Instant Valuation & Exchange" },
                { id: "sell-bike", label: "Sell Your Old Bike" },
                { id: "finance", label: "Low-EMI Loan Calculator" },
                { id: "insurance", label: "Cashless Claims Insurance" },
                { id: "faqs", label: "Frequently Asked Questions" },
                { id: "contact", label: "Schedule Service / Ride" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className="flex items-center gap-1 text-gray-400 hover:text-brand-cyan transition-colors duration-150 text-left"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-brand-cyan/60" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact / Address */}
          <div className="space-y-4">
            <h3 className="text-white font-display font-bold text-base uppercase tracking-wider">
              Experience Showroom
            </h3>
            <div className="space-y-3.5 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  CM Bikes, Main Road, Channasandra, near Whitefield, Bengaluru, Karnataka 560067
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-cyan shrink-0" />
                <a href="tel:+919900088812" className="hover:text-white transition-colors font-mono">
                  +91 99000 88812
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-cyan shrink-0" />
                <a href="mailto:info@cmbikesbangalore.com" className="hover:text-white transition-colors">
                  info@cmbikesbangalore.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">9:30 AM – 8:30 PM</p>
                  <p className="text-xs text-gray-500">Monday to Sunday Open</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Separator */}
        <div className="border-t border-white/5 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2026 CM Bikes Bengaluru. All rights reserved. Designed for premium riding enthusiasts.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-brand-cyan cursor-pointer transition-colors" onClick={() => handleNavClick("faqs")}>Terms & Conditions</span>
            <span className="hover:text-brand-cyan cursor-pointer transition-colors" onClick={() => handleNavClick("contact")}>Privacy Policy</span>
            <span className="hover:text-brand-cyan cursor-pointer transition-colors" onClick={() => handleNavClick("about")}>Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
