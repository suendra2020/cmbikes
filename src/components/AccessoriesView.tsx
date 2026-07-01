import { useState } from "react";
import { Search, ShoppingBag, MessageSquare, Star, SlidersHorizontal, ChevronRight } from "lucide-react";
import { ACCESSORIES_DATA } from "../data";
import { Accessory } from "../types";
import HeroBanner from "./HeroBanner";

export default function AccessoriesView() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const categories = ["All", "Helmets", "Riding Gear", "Exhausts", "Electronics", "Care Products"];

  const filteredAccessories = ACCESSORIES_DATA.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === "All" || item.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div id="accessories-view" className="space-y-16 pb-16">
      {/* 1. Hero */}
      <HeroBanner
        title="ELITE ACCESSORIES"
        subtitle="Arm your ride. Browse a hand-picked collection of premium aerodynamic racing helmets, climate-vented riding gear, titanium exhausts, and precision electronics."
        backgroundImage="https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?w=1600&auto=format&fit=crop&q=80"
        category="Gear & Upgrades"
      />

      {/* 2. Filter & search bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-2xl p-6 border-white/5 space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search premium helmets, jackets, lubes..."
                className="w-full bg-brand-dark border border-white/10 focus:border-brand-cyan/60 rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all"
              />
            </div>

            {/* Category selection */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategoryFilter(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all border ${
                    categoryFilter === cat
                      ? "bg-brand-cyan text-brand-dark border-brand-cyan shadow-sm"
                      : "bg-white/5 text-gray-300 border-white/5 hover:text-white hover:border-white/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 3. Catalog Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredAccessories.length === 0 ? (
          <div className="text-center py-20 glass-panel rounded-2xl border-white/5 space-y-4">
            <SlidersHorizontal className="w-12 h-12 text-brand-cyan mx-auto" />
            <h3 className="text-white font-display font-bold text-lg uppercase">No Gear Found</h3>
            <p className="text-gray-400 text-xs max-w-sm mx-auto">
              We couldn't locate any products in our current stock matching that keyword. Try resetting your query.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAccessories.map((item) => {
              const waText = encodeURIComponent(
                `Hello CM Bikes, I am interested in purchasing the following premium accessory: ${item.name} priced at ₹${item.price.toLocaleString("en-IN")}. Please confirm its stock availability in Channasandra showroom.`
              );

              return (
                <div
                  key={item.id}
                  className="glass-panel rounded-2xl overflow-hidden border-white/5 hover:border-brand-cyan/30 group transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Photo */}
                  <div className="relative h-56 w-full overflow-hidden bg-brand-dark/50">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                    />
                    <span className="absolute top-4 left-4 z-10 px-2.5 py-0.5 rounded-full bg-brand-dark/80 border border-white/10 text-brand-cyan text-[9px] font-mono font-bold uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>

                  {/* Info details */}
                  <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-0.5 text-amber-400">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${
                                i < Math.floor(item.rating) ? "fill-amber-400" : "opacity-35"
                              }`}
                            />
                          ))}
                          <span className="text-[10px] text-gray-400 ml-1 font-mono">({item.rating})</span>
                        </div>
                        <span className="text-[9px] font-mono text-gray-500">In Stock</span>
                      </div>
                      
                      <h3 className="font-display font-bold text-base text-white uppercase group-hover:text-brand-cyan transition-colors tracking-tight line-clamp-2">
                        {item.name}
                      </h3>
                      
                      <p className="text-xs text-gray-400 leading-relaxed font-light line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-4">
                      <div>
                        <span className="text-[9px] text-gray-500 uppercase font-mono block">Showroom Price</span>
                        <span className="font-mono text-base font-extrabold text-white">
                          ₹{item.price.toLocaleString("en-IN")}
                        </span>
                      </div>

                      <a
                        href={`https://wa.me/919900088812?text=${waText}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-xl bg-brand-cyan text-brand-dark font-extrabold text-xs uppercase tracking-wider hover:shadow-[0_0_15px_rgba(0,176,255,0.3)] transition-all flex items-center gap-1 shrink-0"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Order Now</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
