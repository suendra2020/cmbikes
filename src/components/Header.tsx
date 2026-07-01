import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Phone, ShieldCheck, HelpCircle, RefreshCw, Sparkles, ShoppingBag, Sun, Moon } from "lucide-react";
import logoImg from "../assets/images/cmbikes-dark.png";

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  onOpenEnquiry?: (subject?: string, bikeName?: string) => void;
}

export default function Header({ currentTab, setCurrentTab, onOpenEnquiry }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const primaryLinks = [
    { id: "home", label: "Home" },
    { id: "new-bikes", label: "New Bikes" },
    { id: "used-bikes", label: "Used Bikes" },
    { id: "exchange", label: "Exchange" },
    { id: "finance", label: "Finance" },
    { id: "contact", label: "Contact Us" },
  ];

  const secondaryLinks = [
    { id: "accessories", label: "Accessories", icon: ShoppingBag },
    { id: "about", label: "About Us", icon: Sparkles },
    { id: "sell-bike", label: "Sell Bike", icon: RefreshCw },
    { id: "insurance", label: "Insurance", icon: ShieldCheck },
    { id: "gallery", label: "Gallery", icon: HelpCircle },
    { id: "reviews", label: "Reviews & Testimonials", icon: HelpCircle },
    { id: "faqs", label: "FAQs", icon: HelpCircle },
  ];

  const handleNavClick = (tabId: string) => {
    setCurrentTab(tabId);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-brand-dark/95 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.8)] border-b border-white/5 text-white"
          : "py-5 bg-gradient-to-b from-brand-dark/80 to-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo - Styled directly from logo image */}
          <div 
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-2 cursor-pointer group select-none py-1"
          >
            <img 
              src={logoImg} 
              alt="CM Bikes Logo" 
              className="logobikes h-10 sm:h-12 w-auto rounded-lg object-contain border border-white/10 group-hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(0,176,255,0.1)] bg-white p-0.5"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-1.5" aria-label="Desktop navigation">
            {primaryLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  currentTab === link.id
                    ? "bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30 shadow-[0_0_15px_rgba(0,176,255,0.15)]"
                    : "text-gray-300 hover:text-white hover:bg-white/5 border border-transparent"
                }`}
              >
                {link.label}
              </button>
            ))}

            {/* Dropdown for Secondary Pages */}
            <div className="relative">
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onBlur={() => setTimeout(() => setServicesDropdownOpen(false), 200)}
                className={`flex items-center gap-1 px-3.5 py-1.5 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 border border-transparent transition-all duration-200 ${
                  secondaryLinks.some((l) => l.id === currentTab)
                    ? "bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20"
                    : ""
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-xl bg-brand-dark/95 border border-white/10 backdrop-blur-xl p-2 shadow-[0_20px_50px_rgba(0,0,0,0.9)] z-50">
                  {secondaryLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => handleNavClick(link.id)}
                      className={`flex w-full items-center gap-2.5 px-3 py-2 rounded-lg text-left text-sm transition-all duration-150 ${
                        currentTab === link.id
                          ? "bg-brand-cyan/20 text-brand-cyan"
                          : "text-gray-300 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <link.icon className="w-4 h-4 text-brand-cyan" />
                      <span>{link.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Call / Test Ride CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+919900088812"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/10 text-gray-300 hover:text-white hover:bg-white/5 text-sm font-medium transition-all duration-200"
            >
              <Phone className="w-4 h-4 text-brand-cyan" />
              <span className="font-mono text-xs">+91 99000 88812</span>
            </a>
            <button
              onClick={() => {
                if (onOpenEnquiry) {
                  onOpenEnquiry("Book Test", "");
                } else {
                  handleNavClick("contact");
                }
              }}
              className="relative overflow-hidden group px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-cyan to-brand-teal text-brand-dark font-semibold text-sm tracking-wide shadow-[0_4px_20px_rgba(0,176,255,0.4)] hover:shadow-[0_4px_30px_rgba(0,176,255,0.6)] hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <span className="relative z-10 flex items-center gap-1">
                Book Test
              </span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            </button>
          </div>

          {/* Mobile Menu Trigger Container */}
          <div className="flex items-center gap-1 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[65px] z-40 overflow-y-auto border-t bg-brand-dark/95 border-white/5 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-4 py-6 space-y-2">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest px-3 mb-1">
              Explore Showroom
            </p>
            {primaryLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`flex w-full px-4 py-3 rounded-xl text-left text-base font-medium transition-all duration-150 ${
                  currentTab === link.id
                    ? "bg-brand-cyan/20 text-brand-cyan shadow-sm"
                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}

            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest px-3 pt-4 mb-1">
              Our Services
            </p>
            {secondaryLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`flex w-full items-center gap-3 px-4 py-3 rounded-xl text-left text-base font-medium transition-all duration-150 ${
                  currentTab === link.id
                    ? "bg-brand-cyan/20 text-brand-cyan"
                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                <link.icon className="w-5 h-5 text-brand-cyan" />
                <span>{link.label}</span>
              </button>
            ))}

            <div className="pt-6 px-3 space-y-3">
              <a
                href="tel:+919900088812"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl border border-white/10 text-gray-300 hover:text-white bg-white/5 text-base font-medium transition-all duration-200"
              >
                <Phone className="w-5 h-5 text-brand-cyan" />
                <span className="font-mono">+91 99000 88812</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenEnquiry) {
                    onOpenEnquiry("Book Test", "");
                  } else {
                    handleNavClick("contact");
                  }
                }}
                className="flex items-center justify-center w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-teal text-brand-dark font-bold text-base shadow-[0_4px_25px_rgba(0,176,255,0.3)]"
              >
                Book Test
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
