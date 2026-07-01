import { useState } from "react";
import { Search, SlidersHorizontal, MessageSquare, ShieldCheck, Scale, CheckCircle, X, HelpCircle, ArrowRight } from "lucide-react";
import { BIKES_DATA } from "../data";
import { Bike } from "../types";
import HeroBanner from "./HeroBanner";
import EnquiryForm from "./EnquiryForm";

export default function UsedBikesView() {
  const [searchQuery, setSearchQuery] = useState("");
  const [brandFilter, setBrandFilter] = useState("All");
  const [kmFilter, setKmFilter] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  
  const [selectedBike, setSelectedBike] = useState<Bike | null>(null);
  const [enquiryBike, setEnquiryBike] = useState<Bike | null>(null);
  const [compareList, setCompareList] = useState<Bike[]>([]);

  // Filter used bikes only
  const usedBikes = BIKES_DATA.filter((b) => b.condition === "Used");

  // Filter used bikes logic
  const filteredBikes = usedBikes
    .filter((bike) => {
      const matchesSearch =
        bike.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        bike.model.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesBrand = brandFilter === "All" || bike.brand === brandFilter;
      
      let matchesKm = true;
      if (kmFilter === "low") matchesKm = (bike.kmDriven || 0) <= 10000;
      if (kmFilter === "medium") matchesKm = (bike.kmDriven || 0) > 10000 && (bike.kmDriven || 0) <= 20000;
      
      return matchesSearch && matchesBrand && matchesKm;
    })
    .sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "km-asc") return (a.kmDriven || 0) - (b.kmDriven || 0);
      if (sortBy === "year-desc") return b.year - a.year;
      return 0;
    });

  const uniqueBrands = ["All", ...Array.from(new Set(usedBikes.map((b) => b.brand)))];

  // Compare Checklist Toggle
  const toggleCompare = (bike: Bike) => {
    if (compareList.some((b) => b.id === bike.id)) {
      setCompareList(compareList.filter((b) => b.id !== bike.id));
    } else {
      if (compareList.length >= 3) {
        alert("You can compare up to 3 bikes simultaneously.");
        return;
      }
      setCompareList([...compareList, bike]);
    }
  };

  return (
    <div id="used-bikes-view" className="space-y-16 pb-16 relative">
      {/* 1. Hero */}
      <HeroBanner
        title="CERTIFIED PRE-OWNED"
        subtitle="Explore immaculate, low-mileage pre-owned motorcycles. Fully certified under our strict 120-point mechanical audit with clean paperwork guarantees."
        backgroundImage="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=1600&auto=format&fit=crop&q=80"
        category="Used Superbikes & Cruisers"
      />

      {/* 2. Filters & Searches */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-2xl p-6 border-white/5 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
            
            {/* Search */}
            <div className="lg:col-span-5 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search pre-owned (Classic, MT-15, Duke)..."
                className="w-full bg-brand-dark border border-white/10 focus:border-brand-cyan/60 rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all"
              />
            </div>

            {/* Brand */}
            <div className="lg:col-span-3">
              <select
                value={brandFilter}
                onChange={(e) => setBrandFilter(e.target.value)}
                className="w-full bg-brand-dark border border-white/10 focus:border-brand-cyan/60 rounded-xl px-4 py-3 text-sm text-white outline-none transition-all"
              >
                <option value="All">Brand: All</option>
                {uniqueBrands.filter(b => b !== "All").map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </div>

            {/* KM Driven Filter */}
            <div className="lg:col-span-2">
              <select
                value={kmFilter}
                onChange={(e) => setKmFilter(e.target.value)}
                className="w-full bg-brand-dark border border-white/10 focus:border-brand-cyan/60 rounded-xl px-4 py-3 text-sm text-white outline-none transition-all"
              >
                <option value="All">Odometer: All</option>
                <option value="low">Under 10,000 km</option>
                <option value="medium">10,000 km - 20,000 km</option>
              </select>
            </div>

            {/* Sort options */}
            <div className="lg:col-span-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-brand-dark border border-white/10 focus:border-brand-cyan/60 rounded-xl px-4 py-3 text-sm text-white outline-none transition-all"
              >
                <option value="default">Sort Options</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="km-asc">Lowest km Driven</option>
                <option value="year-desc">Latest Year Models</option>
              </select>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Pre-owned Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredBikes.length === 0 ? (
          <div className="text-center py-20 glass-panel rounded-2xl border-white/5 space-y-4">
            <SlidersHorizontal className="w-12 h-12 text-brand-cyan mx-auto animate-pulse" />
            <h3 className="text-white font-display font-bold text-xl uppercase">No Certified Bikes Match</h3>
            <p className="text-gray-400 text-sm max-w-md mx-auto">
              No pre-owned inventory matches these exact criteria. Try widening your search or reset the filter variables.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setBrandFilter("All");
                setKmFilter("All");
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
              const matchesCompare = compareList.some((b) => b.id === bike.id);
              const waText = encodeURIComponent(
                `Hello CM Bikes, I am interested in the certified pre-owned ${bike.brand} ${bike.model} (${bike.year} model, ${bike.kmDriven} km). Please share its availability and on-road details.`
              );

              return (
                <div
                  key={bike.id}
                  className="glass-panel rounded-2xl overflow-hidden border-white/5 hover:border-brand-cyan/30 group transition-all duration-300 flex flex-col justify-between shadow-lg"
                >
                  {/* Image, Badges */}
                  <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-brand-dark/50">
                    {bike.badge && (
                      <span className="absolute top-4 left-4 z-10 px-2.5 py-0.5 rounded-full bg-brand-teal text-brand-dark text-[9px] font-mono font-black uppercase tracking-wider">
                        {bike.badge}
                      </span>
                    )}

                    {/* Compare Checkbox Trigger */}
                    <button
                      onClick={() => toggleCompare(bike)}
                      className={`absolute top-4 right-4 z-10 px-3 py-1.5 rounded-full text-[10px] font-mono font-bold flex items-center gap-1 transition-all border ${
                        matchesCompare
                          ? "bg-brand-cyan text-brand-dark border-brand-cyan shadow-[0_0_15px_rgba(0,176,255,0.4)]"
                          : "bg-brand-dark/80 text-gray-300 border-white/10 hover:text-white hover:border-brand-cyan/50"
                      }`}
                    >
                      <Scale className="w-3.5 h-3.5" />
                      <span>{matchesCompare ? "Comparing" : "Compare"}</span>
                    </button>

                    <img
                      src={bike.image}
                      alt={`${bike.brand} ${bike.model}`}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-85 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
                  </div>

                  {/* Body Info */}
                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-brand-cyan font-bold">
                          {bike.brand}
                        </span>
                        <span className="text-[10px] font-mono text-gray-400 bg-white/5 px-2 py-0.5 rounded-full border border-white/5">
                          {bike.year} Model • {bike.owners} Owner(s)
                        </span>
                      </div>
                      <h3 className="font-display font-extrabold text-lg sm:text-xl text-white uppercase group-hover:text-brand-cyan transition-colors tracking-tight">
                        {bike.model}
                      </h3>
                    </div>

                    {/* Certifications Check */}
                    <div className="bg-brand-cyan/[0.03] border border-white/5 rounded-xl p-3 space-y-2 text-xs font-sans text-gray-300">
                      <div className="flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-brand-cyan shrink-0" />
                        <span>Odo: <strong className="text-white font-mono">{bike.kmDriven?.toLocaleString("en-IN")} km</strong> driven</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] text-gray-400">
                        <CheckCircle className="w-3.5 h-3.5 text-brand-teal shrink-0" />
                        <span className="truncate">Ins: {bike.insuranceStatus}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] text-gray-400">
                        <CheckCircle className="w-3.5 h-3.5 text-brand-teal shrink-0" />
                        <span className="truncate">Svc: {bike.serviceHistory}</span>
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="flex items-end justify-between pt-1">
                      <div>
                        <span className="text-[9px] text-gray-500 uppercase tracking-widest block font-mono">Certified Dealership Price</span>
                        <span className="font-mono text-lg sm:text-xl font-black text-white">
                          ₹{bike.price.toLocaleString("en-IN")}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-gray-400">
                        Est. EMI: <strong className="text-white">₹{bike.emi.toLocaleString("en-IN")}/mo</strong>
                      </span>
                    </div>

                    {/* Action buttons */}
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <button
                        onClick={() => setEnquiryBike(bike)}
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-teal text-brand-dark font-extrabold text-xs uppercase tracking-wider hover:shadow-lg transition-all cursor-pointer text-center"
                      >
                        Enquire
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

      {/* 4. Compare floating bottom bar tray */}
      {compareList.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-brand-dark/95 border-t border-brand-cyan/20 backdrop-blur-xl p-4 sm:p-5 shadow-[0_-20px_50px_rgba(0,0,0,0.9)] animate-in slide-in-from-bottom-20 duration-300">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-cyan/15 border border-brand-cyan/30 flex items-center justify-center">
                <Scale className="w-5 h-5 text-brand-cyan" />
              </div>
              <div>
                <h4 className="text-white font-display font-bold text-sm uppercase">Pre-owned Comparison Matrix</h4>
                <p className="text-xs text-gray-400">{compareList.length} of 3 motorcycles selected</p>
              </div>
            </div>

            {/* Selected items quick cards */}
            <div className="flex flex-wrap items-center gap-3 justify-center">
              {compareList.map((bike) => (
                <div key={bike.id} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full pl-2 pr-4 py-1 text-xs">
                  <img src={bike.image} alt={bike.model} className="w-6 h-6 rounded-full object-cover" />
                  <span className="text-white font-medium">{bike.brand} {bike.model}</span>
                  <button onClick={() => toggleCompare(bike)} className="text-gray-400 hover:text-red-400 ml-1">
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Compare Trigger button */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setCompareList([])}
                className="px-4 py-2 rounded-xl text-gray-400 hover:text-white text-xs font-mono font-medium"
              >
                Clear All
              </button>
              <button
                disabled={compareList.length < 2}
                onClick={() => setSelectedBike(compareList[0])} // opens compare details overlay modal
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-teal text-brand-dark font-black text-xs uppercase tracking-wider disabled:opacity-50 transition-all cursor-pointer"
              >
                Launch Side-by-Side {compareList.length < 2 ? "(Choose min. 2)" : ""}
              </button>
            </div>

          </div>
        </div>
      )}

      {/* 5. Compare detailed lightbox modal */}
      {selectedBike && compareList.length >= 2 && (
        <div className="fixed inset-0 z-50 overflow-y-auto p-4 bg-brand-dark/95 backdrop-blur-md flex items-start sm:items-center justify-center py-8 animate-in fade-in">
          <div className="glass-panel rounded-2xl max-w-4xl w-full border-white/10 overflow-hidden shadow-2xl flex flex-col my-auto">
            <div className="flex items-center justify-between p-5 border-b border-white/5">
              <h3 className="font-display font-extrabold text-xl text-white uppercase tracking-tight flex items-center gap-2">
                <Scale className="w-5 h-5 text-brand-cyan" />
                <span>Side-by-Side Comparison Matrix</span>
              </h3>
              <button onClick={() => setSelectedBike(null)} className="p-1.5 rounded-lg text-gray-400 hover:text-white bg-white/5">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Comparison Table */}
            <div className="p-6 overflow-x-auto">
              <table className="w-full text-left text-xs text-gray-300 min-w-[500px]">
                <thead>
                  <tr className="border-b border-white/5">
                    <th className="py-3 font-medium text-gray-500 uppercase font-mono">Parameters</th>
                    {compareList.map((bike) => (
                      <th key={bike.id} className="py-3 px-4 font-display font-bold text-white text-sm uppercase">
                        <img src={bike.image} alt={bike.model} className="w-24 h-16 object-cover rounded-lg mb-2 border border-white/5" />
                        <span className="block text-brand-cyan font-bold">{bike.brand}</span>
                        <span>{bike.model}</span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr>
                    <td className="py-3 font-medium text-gray-500 font-mono uppercase">Year & Odometer</td>
                    {compareList.map((bike) => (
                      <td key={bike.id} className="py-3 px-4 font-mono font-bold text-white">
                        {bike.year} • {bike.kmDriven?.toLocaleString()} km
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 font-medium text-gray-500 font-mono uppercase">Certified Price</td>
                    {compareList.map((bike) => (
                      <td key={bike.id} className="py-3 px-4 font-mono font-extrabold text-brand-cyan text-sm">
                        ₹{bike.price.toLocaleString()}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 font-medium text-gray-500 font-mono uppercase">Est. Monthly EMI</td>
                    {compareList.map((bike) => (
                      <td key={bike.id} className="py-3 px-4 font-mono text-white">
                        ₹{bike.emi.toLocaleString()}/mo
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 font-medium text-gray-500 font-mono uppercase">Capacity & Output</td>
                    {compareList.map((bike) => (
                      <td key={bike.id} className="py-3 px-4 font-mono text-gray-300">
                        {bike.engine} capacity <span className="block text-[10px] text-gray-500">{bike.specs.power}</span>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 font-medium text-gray-500 font-mono uppercase">Owner Status</td>
                    {compareList.map((bike) => (
                      <td key={bike.id} className="py-3 px-4 font-sans text-white">
                        {bike.owners} Owner(s)
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 font-medium text-gray-500 font-mono uppercase">Action Trigger</td>
                    {compareList.map((bike) => (
                      <td key={bike.id} className="py-3 px-4">
                        <button
                          onClick={() => {
                            setEnquiryBike(bike);
                            setSelectedBike(null);
                          }}
                          className="px-4 py-2 rounded-lg bg-brand-cyan text-brand-dark text-[10px] font-mono font-bold uppercase"
                        >
                          Enquire Bike
                        </button>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* 6. Enquiry Form overlay */}
      {enquiryBike && (
        <div className="fixed inset-0 z-50 overflow-y-auto p-4 bg-brand-dark/95 backdrop-blur-md flex items-start sm:items-center justify-center py-8 animate-in fade-in">
          <div className="max-w-lg w-full relative my-auto">
            <button
              onClick={() => setEnquiryBike(null)}
              className="absolute top-4 right-4 p-2 rounded-lg text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 transition-all z-50 cursor-pointer"
              title="Close form"
            >
              <X className="w-5 h-5" />
            </button>
            <EnquiryForm
              initialBike={`${enquiryBike.brand} ${enquiryBike.model} (Certified Pre-Owned)`}
              subject="Certified Pre-Owned Enquiry"
              onSuccess={() => setTimeout(() => setEnquiryBike(null), 3000)}
            />
          </div>
        </div>
      )}

    </div>
  );
}
