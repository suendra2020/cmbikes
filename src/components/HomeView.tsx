import { useState, useEffect } from "react";
import { Sparkles, ArrowRight, ShieldCheck, Award, Zap, ChevronRight, ChevronLeft, Phone, MessageSquare, Star, CheckCircle, Volume2, VolumeX } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { BIKES_DATA, BRAND_LIST, REVIEWS_DATA } from "../data";
import { Bike } from "../types";

// High-fidelity curated premium slides for luxury brand storytelling
const HERO_SLIDES = [
  {
    id: "cinematic",
    type: "video",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-motorcyclist-riding-on-a-country-road-41718-large.mp4",
    fallbackImage: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=1600&auto=format&fit=crop&q=80",
    badge: "Channasandra's No. 1 Premium Motorcycle Showroom",
    titleStart: "THE BIKE THAT SUITS YOUR",
    titleHighlight: "NEED & CLASS",
    subtitle: "Experience absolute reliability and style. Discover Bengaluru's finest curation of certified streetfighters, cruisers, and smart electrics with immediate ownership.",
    primaryCtaText: "Explore Bikes",
    primaryTab: "new-bikes",
    secondaryCtaText: "Book Test",
    secondaryTab: "contact"
  },
  {
    id: "mt15",
    type: "image",
    imageUrl: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=1600&auto=format&fit=crop&q=80",
    badge: "Hypernaked Street Legend",
    titleStart: "YAMAHA MT-15 VERSION 2",
    titleHighlight: "DARK WARRIOR",
    subtitle: "Command Bengaluru roads with the hyper-naked MT-15 V2. Packed with VVA racing performance, sleek aggressive styling, and exceptional fuel economy.",
    primaryCtaText: "Acquire Machine",
    primaryTab: "new-bikes",
    secondaryCtaText: "Calculate EMI",
    secondaryTab: "finance"
  },
  {
    id: "classic350",
    type: "image",
    imageUrl: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=1600&auto=format&fit=crop&q=80",
    badge: "Timeless Vintage Icon",
    titleStart: "ROYAL ENFIELD CLASSIC 350",
    titleHighlight: "SIGNATURE THUMP",
    subtitle: "Pure retro cruiser styling, absolute J-series engine refinement, and vintage command. Ideal for local weekend getaways and daily commutes.",
    primaryCtaText: "Trade-in Exchange",
    primaryTab: "exchange",
    secondaryCtaText: "Inquire Stock",
    secondaryTab: "contact"
  }
];

interface HomeViewProps {
  setCurrentTab: (tab: string) => void;
  setSelectedBike: (bike: Bike | null) => void;
  onOpenEnquiry?: (subject?: string, bikeName?: string) => void;
}

export default function HomeView({ setCurrentTab, setSelectedBike, onOpenEnquiry }: HomeViewProps) {
  const [activeBrandFilter, setActiveBrandFilter] = useState("All");
  const [counters, setCounters] = useState({ deliveries: 0, rating: 0, brands: 0, check: 0 });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  // Incrementing statistics counter simulation for high-performance feel
  useEffect(() => {
    const interval = setInterval(() => {
      setCounters(prev => {
        const d = prev.deliveries < 4850 ? prev.deliveries + 150 : 4850;
        const r = prev.rating < 4.9 ? +(prev.rating + 0.2).toFixed(1) : 4.9;
        const b = prev.brands < 12 ? prev.brands + 1 : 12;
        const c = prev.check < 120 ? prev.check + 4 : 120;
        if (d === 4850 && r === 4.9 && b === 12 && c === 120) {
          clearInterval(interval);
        }
        return { deliveries: d, rating: r, brands: b, check: c };
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  // Premium autoplay rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const handleBikeClick = (bike: Bike) => {
    setSelectedBike(bike);
    if (bike.condition === "New") {
      setCurrentTab("new-bikes");
    } else {
      setCurrentTab("used-bikes");
    }
  };

  const featuredBikes = BIKES_DATA.slice(0, 4);

  return (
    <div id="home-view" className="space-y-24 pb-16">
      
      {/* 1. Cinematic Dynamic Carousel Hero Section (Optimized for all viewports) */}
      <section className="relative min-h-[calc(100vh-72px)] md:h-[calc(100vh-72px)] md:min-h-[700px] w-full flex items-center justify-center overflow-hidden bg-brand-dark pt-4 sm:pt-6 md:pt-0">
        
        {/* Background Visual Wrapper */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 w-full h-full"
            >
              {HERO_SLIDES[currentSlide].type === "video" ? (
                <video
                  src={HERO_SLIDES[currentSlide].videoUrl}
                  poster={HERO_SLIDES[currentSlide].fallbackImage}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className="w-full h-full object-cover object-center opacity-45"
                />
              ) : (
                <img
                  src={HERO_SLIDES[currentSlide].imageUrl}
                  alt={HERO_SLIDES[currentSlide].titleStart}
                  className="w-full h-full object-cover object-center opacity-45"
                />
              )}
            </motion.div>
          </AnimatePresence>
          {/* Overlay gradients for pristine luxury depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-brand-dark/80 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-transparent to-brand-dark/40 z-10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,176,255,0.08)_0%,transparent_65%)] z-10"></div>
        </div>

        {/* Tech Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none z-10"></div>

        {/* Content Container (Adapts size to fit on mobile viewports gracefully) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="space-y-5 sm:space-y-6 md:space-y-8 py-8 sm:py-12 md:py-0 flex flex-col items-center justify-center"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan/15 border border-brand-cyan/30 text-brand-cyan text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase animate-pulse">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{HERO_SLIDES[currentSlide].badge}</span>
              </div>

              <div className="space-y-3 sm:space-y-4 max-w-4xl mx-auto">
                <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white tracking-tighter leading-none uppercase">
                  {HERO_SLIDES[currentSlide].titleStart}{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-teal to-blue-500 neon-glow block sm:inline">
                    {HERO_SLIDES[currentSlide].titleHighlight}
                  </span>
                </h1>
                <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg font-light tracking-wide max-w-2xl mx-auto leading-relaxed px-2">
                  {HERO_SLIDES[currentSlide].subtitle}
                </p>
              </div>

              {/* Slogan Divider */}
              <div className="flex justify-center items-center gap-3">
                <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-brand-cyan"></div>
                <span className="text-[9px] sm:text-xs text-brand-cyan font-mono tracking-widest uppercase">CM BIKES BENGALURU</span>
                <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-brand-cyan"></div>
              </div>

              {/* Action CTAs - Responsive design ensuring 100% visibility on mobile */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-md mx-auto pt-2">
                <button
                  onClick={() => setCurrentTab(HERO_SLIDES[currentSlide].primaryTab)}
                  className="w-full sm:w-auto min-h-[44px] sm:min-h-0 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-brand-cyan to-brand-teal text-brand-dark font-extrabold tracking-wide text-xs sm:text-sm uppercase shadow-[0_4px_25px_rgba(0,176,255,0.4)] hover:shadow-[0_4px_35px_rgba(0,176,255,0.6)] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>{HERO_SLIDES[currentSlide].primaryCtaText}</span>
                  <ArrowRight className="w-4 h-4 text-brand-dark" />
                </button>
                <button
                  onClick={() => {
                    const slide = HERO_SLIDES[currentSlide];
                    if (onOpenEnquiry && slide.secondaryCtaText === "Book Test") {
                      onOpenEnquiry("Book Test", "");
                    } else if (onOpenEnquiry && slide.secondaryCtaText === "Inquire Stock") {
                      onOpenEnquiry("General Purchase Enquiry", `${slide.titleStart} ${slide.titleHighlight}`.trim());
                    } else {
                      setCurrentTab(slide.secondaryTab);
                    }
                  }}
                  className="w-full sm:w-auto min-h-[44px] sm:min-h-0 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border border-white/20 hover:border-brand-cyan text-white hover:bg-brand-cyan/10 font-bold tracking-wide text-xs sm:text-sm uppercase transition-all duration-200 cursor-pointer flex items-center justify-center"
                >
                  {HERO_SLIDES[currentSlide].secondaryCtaText}
                </button>
              </div>

              {/* Floating Indicators (Desktop Only) */}
              <div className="pt-8 hidden md:flex items-center justify-center gap-12 text-sm text-gray-400">
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-brand-cyan" /> 100% Certified Motors</span>
                <span className="flex items-center gap-1.5"><Star className="w-4 h-4 text-brand-cyan fill-brand-cyan" /> 4.9 Google Rated (1200+ Reviews)</span>
                <span className="flex items-center gap-1.5"><Award className="w-4 h-4 text-brand-cyan" /> Hassle-free Bangalore RTO Transfer</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Slide Left/Right Controls */}
        <button
          onClick={() => {
            setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
          }}
          className="absolute left-2.5 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full border border-white/10 bg-brand-dark/30 hover:bg-brand-cyan/25 hover:border-brand-cyan hover:text-brand-cyan hover:scale-110 text-white transition-all duration-200 cursor-pointer backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <button
          onClick={() => {
            setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
          }}
          className="absolute right-2.5 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full border border-white/10 bg-brand-dark/30 hover:bg-brand-cyan/25 hover:border-brand-cyan hover:text-brand-cyan hover:scale-110 text-white transition-all duration-200 cursor-pointer backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Slide indicators and audio toggle */}
        <div className="absolute bottom-6 left-4 sm:left-1/2 sm:-translate-x-1/2 z-30 flex items-center gap-2">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentSlide === idx ? "w-8 bg-brand-cyan" : "w-2 bg-white/30 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {HERO_SLIDES[currentSlide].type === "video" && (
          <button
            onClick={() => setIsMuted((prev) => !prev)}
            className="absolute bottom-5 right-4 sm:right-8 z-30 flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-brand-dark/40 backdrop-blur-md text-white hover:border-brand-cyan hover:text-brand-cyan text-[10px] font-mono tracking-wider transition-all duration-200 cursor-pointer"
            title={isMuted ? "Unmute video sound" : "Mute video sound"}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5 text-brand-cyan" /> : <Volume2 className="w-3.5 h-3.5 text-brand-cyan animate-pulse" />}
            <span className="hidden sm:inline">{isMuted ? "UNMUTE" : "MUTED"}</span>
          </button>
        )}

        {/* Scroll down trigger (Desktop only) */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-[9px] uppercase font-mono tracking-widest text-gray-500 pointer-events-none">
          <span>Scroll To Explore</span>
          <span className="w-1.5 h-5 rounded-full border border-gray-600 relative overflow-hidden">
            <span className="absolute top-0.5 left-1/2 -translate-x-1/2 w-0.5 h-1.5 bg-brand-cyan rounded-full animate-bounce"></span>
          </span>
        </div>
      </section>

      {/* 2. Brand Logos Slider Accent */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-2xl p-6 border-white/5 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="shrink-0 space-y-1 text-center md:text-left">
              <h4 className="text-xs font-mono uppercase tracking-widest text-brand-cyan">Premium Partners</h4>
              <p className="text-white font-display font-extrabold text-lg uppercase tracking-tight">World's Finest Brands Available</p>
            </div>
            {/* Scrollable list */}
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
              {BRAND_LIST.map((brand, idx) => (
                <div 
                  key={idx}
                  onClick={() => setCurrentTab("new-bikes")}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-dark border border-white/5 hover:border-brand-cyan/40 hover:scale-105 cursor-pointer transition-all duration-200"
                >
                  <span className="text-lg">{brand.logo}</span>
                  <span className="font-display font-bold text-sm text-white tracking-wide">{brand.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. High-Performance Stats Counters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            { value: `${counters.deliveries}+`, label: "Happy Deliveries", desc: "Across Karnataka" },
            { value: `${counters.rating} / 5.0`, label: "Google Business Rating", desc: "Top trusted dealership" },
            { value: `${counters.brands}+`, label: "Elite Brands Represented", desc: "Sport, Cruisers & EV" },
            { value: `${counters.check}-Point`, label: "Certified Pre-Owned Inspection", desc: "Strict quality assurance" }
          ].map((stat, idx) => (
            <div key={idx} className="glass-panel p-6 sm:p-8 rounded-2xl text-center space-y-2 border-white/5 hover:border-brand-cyan/20 hover:scale-[1.02] transition-all duration-300">
              <span className="block font-display font-black text-3xl sm:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-teal font-bold tracking-tight">
                {stat.value}
              </span>
              <h4 className="text-white font-display font-bold text-sm sm:text-base tracking-tight uppercase pt-2">
                {stat.label}
              </h4>
              <p className="text-xs text-gray-500 font-sans leading-snug">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Company Introduction & Trust */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-mono uppercase tracking-widest">
            <Award className="w-3.5 h-3.5" />
            <span>The CM Bikes Pedigree</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase leading-none">
            REVOLUTIONIZING THE MOTORCYCLE BUYING EXPERIENCE IN BENGALURU
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
            Located in Channasandra near Whitefield, CM Bikes is Bangalore's elite multi-brand motorcycle hub. From premium cruisers to certified pre-owned city commuter options and state-of-the-art electric vehicles, we make dream machines accessible.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">
            We don't just sell motorcycles — we fuel lifelong passions. Our absolute focus remains transparency: full 120-point digital inspections, premium finance packages with Bangalore's leading banks, clean hassle-free RTO paperwork, and dedicated service care.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-sm text-gray-300 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-brand-cyan" />
              <span>Instant valuation on old motorcycles</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-brand-cyan" />
              <span>Bengaluru's lowest EMI interest rates</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-brand-cyan" />
              <span>Full cash-less garage claim support</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-brand-cyan" />
              <span>Comprehensive 6-month warranty options</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan to-blue-600 rounded-2xl filter blur-[30px] opacity-20 animate-pulse-slow"></div>
          <div className="relative glass-panel rounded-2xl p-2 border-white/10 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            <img
              src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600&auto=format&fit=crop&q=80"
              alt="Premium Motorcycle delivery"
              className="w-full h-auto rounded-xl object-cover scale-100 hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* 5. Featured Bikes Catalog Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-cyan">Featured Curations</span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">
              HOT LAUNCHES & LATEST ADDITIONS
            </h2>
          </div>
          <button
            onClick={() => setCurrentTab("new-bikes")}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 text-gray-300 hover:text-white hover:border-brand-cyan hover:bg-brand-cyan/10 text-xs font-bold tracking-widest uppercase transition-all duration-200"
          >
            <span>View All Bikes</span>
            <ChevronRight className="w-4 h-4 text-brand-cyan" />
          </button>
        </div>

        {/* Bike Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredBikes.map((bike) => (
            <div
              key={bike.id}
              onClick={() => handleBikeClick(bike)}
              className="glass-panel rounded-2xl overflow-hidden border-white/5 hover:border-brand-cyan/30 group cursor-pointer hover:scale-[1.02] shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Section */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-brand-dark/50">
                {bike.badge && (
                  <span className="absolute top-3 left-3 z-10 px-2.5 py-0.5 rounded-full bg-brand-cyan text-brand-dark text-[10px] font-mono font-black uppercase">
                    {bike.badge}
                  </span>
                )}
                <img
                  src={bike.image}
                  alt={bike.model}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
              </div>

              {/* Specs & Pricing */}
              <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-brand-cyan font-bold">
                      {bike.brand}
                    </span>
                    <span className="text-[10px] font-mono text-gray-400">
                      {bike.year} • {bike.fuelType}
                    </span>
                  </div>
                  <h3 className="font-display font-extrabold text-base sm:text-lg text-white uppercase group-hover:text-brand-cyan transition-colors">
                    {bike.model}
                  </h3>
                </div>

                <div className="grid grid-cols-3 gap-2 py-3 border-y border-white/5 text-center text-[10px] font-mono text-gray-400">
                  <div>
                    <span className="block text-white font-bold">{bike.engine}</span>
                    <span>Engine</span>
                  </div>
                  <div>
                    <span className="block text-white font-bold">{bike.mileage} {bike.fuelType === "Petrol" ? "km/l" : "km"}</span>
                    <span>{bike.fuelType === "Petrol" ? "Mileage" : "Range"}</span>
                  </div>
                  <div>
                    <span className="block text-white font-bold">₹{bike.emi.toLocaleString("en-IN")}/mo</span>
                    <span>Est. EMI</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1.5">
                  <div>
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest block font-mono">Showroom Price</span>
                    <span className="font-mono text-base font-extrabold text-white">
                      ₹{bike.price.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <span className="p-2 rounded-full bg-white/5 text-brand-cyan group-hover:bg-brand-cyan group-hover:text-brand-dark transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Process Timeline Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-1.5 max-w-2xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-cyan">Speedy Transfers</span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">
            OWNERSHIP PROCESS IN 4 EASY STEPS
          </h2>
          <p className="text-gray-400 text-sm">
            Our customized customer intake program speeds up your waiting period. Drive home your machine in under 2 hours!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {/* Timeline Connector Line */}
          <div className="hidden md:block absolute top-[44px] left-[15%] right-[15%] h-[1.5px] bg-white/5 z-0"></div>

          {[
            { step: "01", title: "Select Ride", desc: "Browse new or certified pre-owned options. Book a premium test drive at Channasandra." },
            { step: "02", title: "Instant Valuate", desc: "Bring in your old bike for immediate 50-point valuation with maximum payout benefits." },
            { step: "03", title: "Custom Loan", desc: "Avail bespoke low-interest loan packages from partners like HDFC, ICICI, IDFC." },
            { step: "04", title: "Key Handover", desc: "Complete paper registration & Bangalore RTO transfers. Revel in the celebratory delivery!" }
          ].map((item, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-2xl relative z-10 border-white/5 hover:border-brand-cyan/20 transition-all duration-300 space-y-4">
              <span className="block font-mono text-3xl font-black text-brand-cyan/30">{item.step}</span>
              <h4 className="text-white font-display font-bold text-lg uppercase tracking-tight">{item.title}</h4>
              <p className="text-gray-400 text-xs leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Promotional / Call-To-Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-brand-dark p-8 sm:p-12 lg:p-16 border border-brand-cyan/20 shadow-[0_0_50px_rgba(0,176,255,0.15)]">
          {/* Visual Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=1200&auto=format&fit=crop&q=80"
              alt="Ducati track corner"
              className="w-full h-full object-cover opacity-15"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/70 to-transparent"></div>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-cyan font-bold block">Limited Time Festival Deals</span>
              <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight leading-none">
                GET RTO TRANSFER BENEFITS & FREE COMPREHENSIVE INSURANCE RENEWALS
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl font-light">
                Secure your booking today and receive a premium riding helmet, zero-depreciation insurance coverage extension, and instant 1st showroom service absolutely free!
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <button
                onClick={() => setCurrentTab("contact")}
                className="w-full py-4 rounded-full bg-gradient-to-r from-brand-cyan to-brand-teal text-brand-dark font-extrabold tracking-wide text-xs uppercase shadow-md hover:shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer text-center"
              >
                Claim Offer Now
              </button>
              <a
                href="https://wa.me/919900088812?text=Hello%20CM%20Bikes%2C%20I%20am%20interested%20in%20the%20festival%20promotional%20offer.%20Please%20contact%20me."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-full border border-white/10 hover:border-brand-cyan text-white hover:bg-brand-cyan/10 font-bold tracking-wide text-xs uppercase transition-all duration-200 text-center flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Google Maps & Hours Teaser */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-4 glass-panel rounded-2xl p-6 sm:p-8 border-white/5 space-y-6 flex flex-col justify-between">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-cyan font-bold block">Come Visit Us</span>
            <h3 className="font-display font-bold text-2xl text-white uppercase tracking-tight">CM BIKES SHOWROOM</h3>
            <p className="text-sm text-gray-400 font-light leading-relaxed">
              Main Road, Channasandra, near Whitefield, Bengaluru, Karnataka 560067. Open 7 days a week for premium motorcycle test rides, evaluation inspections, and documentation checks.
            </p>
          </div>

          <div className="space-y-4 border-t border-white/5 pt-6 text-sm">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-brand-cyan shrink-0" />
              <div className="font-mono">
                <p className="text-white">+91 99000 88812</p>
                <p className="text-[10px] text-gray-500">Sales Hotline</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MessageSquare className="w-5 h-5 text-emerald-400 shrink-0" />
              <div className="font-mono">
                <p className="text-white">+91 99000 88812</p>
                <p className="text-[10px] text-gray-500">WhatsApp Support</p>
              </div>
            </div>
          </div>

          <button
            onClick={() => setCurrentTab("contact")}
            className="w-full py-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-brand-cyan hover:text-brand-cyan text-white text-xs uppercase font-bold tracking-widest transition-all duration-200 cursor-pointer"
          >
            Get Detailed Directions
          </button>
        </div>

        <div className="lg:col-span-8 rounded-2xl overflow-hidden relative border border-white/10 min-h-[300px]">
          {/* Maps Iframe Embedded directly for absolute realism with zero API key constraints */}
          <iframe
            title="CM Bikes Channasandra location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15552.128795555776!2d77.74712079999999!3d12.9698748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11f9712bf39b%3A0xc6cb1bb6f4f291bd!2sChannasandra%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1711234567890!5m2!1sen!2sin"
            className="absolute inset-0 w-full h-full border-0 grayscale invert opacity-75 contrast-125 focus:outline-none"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

    </div>
  );
}
