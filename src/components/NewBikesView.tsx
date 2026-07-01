import { useState } from "react";
import { Search, SlidersHorizontal, MessageSquare, Info, Calendar, ArrowRight, X, Sparkles, Star } from "lucide-react";
import { BIKES_DATA } from "../data";
import { Bike } from "../types";
import HeroBanner from "./HeroBanner";
import EnquiryForm from "./EnquiryForm";

export default function NewBikesView() {
  const [searchQuery, setSearchQuery] = useState("");
  const [brandFilter, setBrandFilter] = useState("All");
  const [fuelFilter, setFuelFilter] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [selectedBike, setSelectedBike] = useState<Bike | null>(null);
  const [enquiryBike, setEnquiryBike] = useState<Bike | null>(null);

  // Filter only New bikes
  const newBikes = BIKES_DATA.filter((b) => b.condition === "New");

  // Filtering Logic
  const filteredBikes = newBikes
    .filter((bike) => {
      const matchesSearch =
        bike.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        bike.model.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesBrand = brandFilter === "All" || bike.brand === brandFilter;
      const matchesFuel = fuelFilter === "All" || bike.fuelType === fuelFilter;
      return matchesSearch && matchesBrand && matchesFuel;
    })
    .sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "mileage") return b.mileage - a.mileage;
      return 0; // Default sorted by list sequence
    });

  const uniqueBrands = ["All", ...Array.from(new Set(newBikes.map((b) => b.brand)))];

  return (
    <div id="new-bikes-view" className="space-y-16 pb-16">
      {/* 1. Hero */}
      <HeroBanner
        title="NEW LAUNCHES"
        subtitle="Unveil Bengaluru's most formidable fleet of pristine superbikes, custom cruisers, and high-performance smart electrics."
        backgroundImage="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=1600&auto=format&fit=crop&q=80"
        category="Latest Arrivals"
      />

      {/* 2. Search, Filters, and Sorting Panel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-2xl p-6 border-white/5 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
            {/* Search Input */}
            <div className="lg:col-span-5 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search models (e.g. Ninja, Panigale, GS)..."
                className="w-full bg-brand-dark border border-white/10 focus:border-brand-cyan/60 rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all duration-200"
              />
            </div>

            {/* Brand Filter */}
            <div className="lg:col-span-3">
              <select
                value={brandFilter}
                onChange={(e) => setBrandFilter(e.target.value)}
                className="w-full bg-brand-dark border border-white/10 focus:border-brand-cyan/60 rounded-xl px-4 py-3 text-sm text-white outline-none transition-all"
              >
                <option value="All">Filter by Brand: All</option>
                {uniqueBrands.filter(b => b !== "All").map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </div>

            {/* Fuel Filter */}
            <div className="lg:col-span-2">
              <select
                value={fuelFilter}
                onChange={(e) => setFuelFilter(e.target.value)}
                className="w-full bg-brand-dark border border-white/10 focus:border-brand-cyan/60 rounded-xl px-4 py-3 text-sm text-white outline-none transition-all"
              >
                <option value="All">Fuel: All</option>
                <option value="Petrol">Petrol</option>
                <option value="Electric">Electric (EV)</option>
              </select>
            </div>

            {/* Sort Dropdown */}
            <div className="lg:col-span-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-brand-dark border border-white/10 focus:border-brand-cyan/60 rounded-xl px-4 py-3 text-sm text-white outline-none transition-all"
              >
                <option value="default">Sort Sequence</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="mileage">Highest Mileage/Range</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Product Catalog Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredBikes.length === 0 ? (
          <div className="text-center py-20 glass-panel rounded-2xl border-white/5 space-y-4">
            <SlidersHorizontal className="w-12 h-12 text-brand-cyan mx-auto animate-pulse" />
            <h3 className="text-white font-display font-bold text-xl uppercase">No Matches Found</h3>
            <p className="text-gray-400 text-sm max-w-md mx-auto">
              We couldn't find any new motorcycles matching your search filters. Try resetting the filters or type a different model keyword.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setBrandFilter("All");
                setFuelFilter("All");
                setSortBy("default");
              }}
              className="px-6 py-2.5 rounded-full bg-brand-cyan text-brand-dark font-extrabold text-xs uppercase"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBikes.map((bike) => {
              // Pre-fill WhatsApp message text
              const waText = encodeURIComponent(
                `Hello CM Bikes, I am highly interested in purchasing the brand new ${bike.brand} ${bike.model}. Please share the detailed on-road price in Bangalore and available finance schemes.`
              );

              return (
                <div
                  key={bike.id}
                  className="glass-panel rounded-2xl overflow-hidden border-white/5 hover:border-brand-cyan/30 group transition-all duration-300 flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
                >
                  {/* Photo & Badge */}
                  <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-brand-dark/50">
                    {bike.badge && (
                      <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-brand-cyan text-brand-dark text-[10px] font-mono font-black uppercase tracking-wider">
                        {bike.badge}
                      </span>
                    )}
                    <img
                      src={bike.image}
                      alt={`${bike.brand} ${bike.model}`}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono uppercase tracking-widest text-brand-cyan font-bold">
                          {bike.brand}
                        </span>
                        <div className="flex items-center gap-1 text-[11px] font-mono text-gray-400 bg-white/5 px-2 py-0.5 rounded-full border border-white/5">
                          <span>{bike.year}</span>
                          <span>•</span>
                          <span>{bike.fuelType}</span>
                        </div>
                      </div>
                      <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white uppercase group-hover:text-brand-cyan transition-colors tracking-tight">
                        {bike.model}
                      </h3>
                    </div>

                    <p className="text-xs text-gray-400 leading-relaxed font-light line-clamp-2">
                      {bike.description}
                    </p>

                    {/* Quick Specs Grid */}
                    <div className="grid grid-cols-3 gap-2 py-4 border-y border-white/5 text-center text-[10px] font-mono text-gray-400 bg-white/[0.01] rounded-xl">
                      <div>
                        <span className="block text-white font-bold text-xs">{bike.engine}</span>
                        <span>Engine Capacity</span>
                      </div>
                      <div>
                        <span className="block text-white font-bold text-xs">
                          {bike.mileage} {bike.fuelType === "Petrol" ? "km/l" : "km"}
                        </span>
                        <span>{bike.fuelType === "Petrol" ? "Est. Mileage" : "EV Range"}</span>
                      </div>
                      <div>
                        <span className="block text-white font-bold text-xs">₹{(bike.emi).toLocaleString("en-IN")}</span>
                        <span>Starts @ EMI</span>
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="flex items-end justify-between pt-1">
                      <div>
                        <span className="text-[10px] text-gray-500 uppercase tracking-widest block font-mono">Ex-Showroom Bangalore</span>
                        <span className="font-mono text-lg sm:text-xl font-black text-white">
                          ₹{bike.price.toLocaleString("en-IN")}
                        </span>
                      </div>

                      {/* Info Button */}
                      <button
                        onClick={() => setSelectedBike(bike)}
                        className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono text-white tracking-wider border border-white/5 hover:border-brand-cyan/20 transition-all cursor-pointer"
                      >
                        <Info className="w-3.5 h-3.5 text-brand-cyan" />
                        <span>Specs</span>
                      </button>
                    </div>

                    {/* Card Actions */}
                    <div className="grid grid-cols-2 gap-3 pt-3">
                      <button
                        onClick={() => setEnquiryBike(bike)}
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-teal text-brand-dark font-extrabold text-xs uppercase tracking-wider shadow-sm hover:shadow-[0_0_20px_rgba(0,176,255,0.25)] transition-all cursor-pointer text-center"
                      >
                        Enquire Now
                      </button>
                      <a
                        href={`https://wa.me/919900088812?text=${waText}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 rounded-xl border border-white/10 hover:border-emerald-500/40 text-gray-300 hover:text-white bg-white/5 text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* 4. Specifications Detailed Lightbox Overlay */}
      {selectedBike && (
        <div className="fixed inset-0 z-50 overflow-y-auto p-4 bg-brand-dark/95 backdrop-blur-md flex items-start sm:items-center justify-center py-8 animate-in fade-in duration-200">
          <div className="glass-panel rounded-2xl max-w-2xl w-full border-white/10 overflow-hidden shadow-[0_0_50px_rgba(0,176,255,0.2)] animate-in scale-in duration-300 flex flex-col my-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-white/5">
              <div>
                <span className="text-[10px] font-mono text-brand-cyan uppercase tracking-widest">{selectedBike.brand} Motors</span>
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white uppercase tracking-tight">{selectedBike.model} Specifications</h3>
              </div>
              <button
                onClick={() => setSelectedBike(null)}
                className="p-1.5 rounded-lg text-gray-400 hover:text-white bg-white/5 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable details */}
            <div className="p-6 space-y-6 overflow-y-auto max-h-[60vh] sm:max-h-[70vh]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                <img
                  src={selectedBike.image}
                  alt={selectedBike.model}
                  className="w-full h-44 object-cover rounded-xl border border-white/10"
                />
                <div className="space-y-2">
                  <h4 className="text-white font-display font-bold text-base uppercase">Brief Description</h4>
                  <p className="text-gray-400 text-xs leading-relaxed font-light">
                    {selectedBike.description}
                  </p>
                  <div className="bg-brand-cyan/10 px-3 py-2 rounded-xl border border-brand-cyan/20 inline-block">
                    <span className="text-xs text-brand-cyan font-mono font-bold">Showroom: Channasandra</span>
                  </div>
                </div>
              </div>

              {/* Specs Table */}
              <div className="space-y-3">
                <h4 className="text-white font-display font-bold text-sm uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-brand-cyan" />
                  <span>Technical Data & Performance Matrix</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {[
                    { label: "Engine displacement", val: selectedBike.engine },
                    { label: "Maximum output power", val: selectedBike.specs.power },
                    { label: "Peak generated torque", val: selectedBike.specs.torque },
                    { label: "Braking configuration", val: selectedBike.specs.brakes },
                    { label: "Kerb weight", val: selectedBike.specs.weight },
                    { label: "Fuel tank capacity", val: selectedBike.specs.tankCapacity },
                    { label: "Certified mileage/range", val: `${selectedBike.mileage} ${selectedBike.fuelType === "Petrol" ? "km/l" : "km"}` },
                    { label: "Fuel type system", val: selectedBike.fuelType },
                  ].map((spec, idx) => (
                    <div key={idx} className="flex justify-between p-3 rounded-lg bg-white/[0.02] border border-white/5">
                      <span className="text-gray-500 font-sans">{spec.label}</span>
                      <span className="text-white font-mono font-bold text-right">{spec.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer triggers */}
            <div className="p-4 border-t border-white/5 bg-white/[0.01] flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedBike(null)}
                className="px-4 py-2 rounded-xl text-gray-400 hover:text-white text-xs font-mono"
              >
                Close Specs
              </button>
              <button
                onClick={() => {
                  setEnquiryBike(selectedBike);
                  setSelectedBike(null);
                }}
                className="px-6 py-2.5 rounded-xl bg-brand-cyan text-brand-dark font-extrabold text-xs uppercase"
              >
                Request Call Back
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 5. Enquiry Lightbox Overlay */}
      {enquiryBike && (
        <div className="fixed inset-0 z-50 overflow-y-auto p-4 bg-brand-dark/95 backdrop-blur-md flex items-start sm:items-center justify-center py-8 animate-in fade-in duration-200">
          <div className="max-w-lg w-full relative my-auto">
            <button
              onClick={() => setEnquiryBike(null)}
              className="absolute top-4 right-4 p-2 rounded-lg text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 transition-all z-50 cursor-pointer"
              title="Close form"
            >
              <X className="w-5 h-5" />
            </button>
            <EnquiryForm
              initialBike={`${enquiryBike.brand} ${enquiryBike.model}`}
              subject="New Superbike Enquiry"
              onSuccess={() => setTimeout(() => setEnquiryBike(null), 3000)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
