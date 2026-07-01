import { useState } from "react";
import { Sparkles, X, ChevronLeft, ChevronRight, SlidersHorizontal, Image } from "lucide-react";
import { GALLERY_DATA } from "../data";
import { GalleryItem } from "../types";
import HeroBanner from "./HeroBanner";

export default function GalleryView() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ["All", "Showroom", "Deliveries", "Bikes", "Events"];

  const filteredItems = GALLERY_DATA.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  const handleOpenLightbox = (item: GalleryItem) => {
    // Find index in filtered items to allow correct left/right carousel toggling
    const idx = filteredItems.findIndex((x) => x.id === item.id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <div id="gallery-view" className="space-y-16 pb-16">
      {/* 1. Hero */}
      <HeroBanner
        title="SHOWROOM GALLERY"
        subtitle="Step inside our world of absolute velocity. Take a digital tour of our luxury Channasandra showroom floor, celebratory client deliveries, and Sunday rider breakfast rides."
        backgroundImage="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=1600&auto=format&fit=crop&q=80"
        category="Media & Celebrations"
      />

      {/* 2. Category selection tab bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-2xl p-5 border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-white font-display font-bold text-sm uppercase tracking-wider flex items-center gap-1.5 shrink-0">
            <Sparkles className="w-4.5 h-4.5 text-brand-cyan" />
            <span>Filter Media Archives</span>
          </span>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setLightboxIndex(null);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all border ${
                  activeCategory === cat
                    ? "bg-brand-cyan text-brand-dark border-brand-cyan shadow-sm"
                    : "bg-white/5 text-gray-300 border-white/5 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Masonry/Grid Photos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(item)}
              className="glass-panel rounded-2xl overflow-hidden border-white/5 hover:border-brand-cyan/30 group cursor-pointer shadow-lg relative aspect-video"
            >
              {/* Photo */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-700 opacity-75 group-hover:opacity-100"
                loading="lazy"
              />

              {/* Hover content mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 space-y-2">
                <span className="text-[9px] font-mono font-bold text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/20 px-2 py-0.5 rounded-full inline-block uppercase tracking-wider self-start">
                  {item.category}
                </span>
                <h4 className="text-white font-display font-bold text-sm sm:text-base uppercase tracking-tight leading-tight">
                  {item.title}
                </h4>
                <p className="text-[10px] text-gray-400 font-mono flex items-center gap-1">
                  <Image className="w-3.5 h-3.5 text-brand-cyan" />
                  <span>Click to expand high-res media</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Interactive Lightbox Carousel Overlay */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 overflow-y-auto p-4 bg-brand-dark/95 backdrop-blur-md flex items-start sm:items-center justify-center py-8 animate-in fade-in duration-200">
          
          {/* Close trigger */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 p-2 rounded-lg text-gray-400 hover:text-white bg-white/5 transition-colors z-50"
            title="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev trigger */}
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-6 p-3 rounded-full text-gray-400 hover:text-white hover:bg-white/5 transition-colors z-50"
            title="Previous Image"
          >
            <ChevronLeft className="w-8 h-8 text-brand-cyan" />
          </button>

          {/* Next trigger */}
          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-6 p-3 rounded-full text-gray-400 hover:text-white hover:bg-white/5 transition-colors z-50"
            title="Next Image"
          >
            <ChevronRight className="w-8 h-8 text-brand-cyan" />
          </button>

          {/* Lightbox content card */}
          <div className="max-w-4xl w-full text-center space-y-4 animate-in scale-in duration-300 my-auto">
            <div className="glass-panel p-2 rounded-2xl border-white/10 overflow-hidden inline-block shadow-2xl max-h-[75vh]">
              <img
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                className="max-w-full max-h-[65vh] object-contain rounded-lg"
              />
            </div>
            
            {/* Meta */}
            <div className="max-w-lg mx-auto space-y-1">
              <span className="text-[10px] font-mono font-bold text-brand-cyan uppercase tracking-widest block">
                {filteredItems[lightboxIndex].category} archives
              </span>
              <h3 className="font-display font-extrabold text-base sm:text-lg md:text-xl text-white uppercase tracking-tight leading-snug">
                {filteredItems[lightboxIndex].title}
              </h3>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}
