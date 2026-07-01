import { useState } from "react";
import { Search, Sparkles, ShieldCheck, BadgeInfo, CheckCircle, CheckCircle2 } from "lucide-react";
import { BIKES_DATA } from "../data";
import { Bike } from "../types";
import HeroBanner from "./HeroBanner";

interface BuyBikeViewProps {
  onOpenEnquiry?: (subject?: string, bikeName?: string) => void;
}

export default function BuyBikeView({ onOpenEnquiry }: BuyBikeViewProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBike, setSelectedBike] = useState<Bike | null>(BIKES_DATA[0]);

  const filteredBikes = BIKES_DATA.filter((bike) =>
    bike.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
    bike.model.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div id="buy-bike-view" className="space-y-16 pb-16">
      {/* 1. Hero */}
      <HeroBanner
        title="PURCHASE PORTAL"
        subtitle="Secure your dream machine. Select from our elite showroom fleet of premium sportbikes, cruisers, or certified pre-owned rides below and request priority delivery."
        backgroundImage="https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=1600&auto=format&fit=crop&q=80"
        category="Acquisition Center"
      />

      {/* 2. Double Column Layout: Interactive Catalog + Real-time Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Quick Browser Catalog (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel rounded-2xl p-6 border-white/5 space-y-4">
              <h3 className="text-white font-display font-bold text-lg uppercase tracking-tight flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-brand-cyan" />
                <span>Select from Showroom Fleet ({filteredBikes.length} available)</span>
              </h3>
              
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter catalog instantly by model keyword..."
                  className="w-full bg-brand-dark/80 border border-white/10 focus:border-brand-cyan/60 rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all"
                />
              </div>
            </div>

            {/* Scrollable Bike Selection List */}
            <div className="space-y-3.5 max-h-[600px] overflow-y-auto pr-2 no-scrollbar">
              {filteredBikes.map((bike) => {
                const isSelected = selectedBike?.id === bike.id;
                return (
                  <div
                    key={bike.id}
                    onClick={() => setSelectedBike(bike)}
                    className={`glass-panel p-4 rounded-xl border transition-all duration-200 cursor-pointer flex items-center gap-4 ${
                      isSelected
                        ? "border-brand-cyan/40 bg-brand-cyan/[0.04] shadow-[0_0_20px_rgba(0,176,255,0.1)]"
                        : "border-white/5 hover:border-white/15"
                    }`}
                  >
                    <img
                      src={bike.image}
                      alt={bike.model}
                      className="w-20 h-16 object-cover rounded-lg border border-white/5"
                    />
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-brand-cyan font-semibold">
                          {bike.brand}
                        </span>
                        <span className="text-[10px] font-mono text-gray-500">
                          {bike.condition === "New" ? "Brand New" : `Certified Pre-Owned • ${bike.year}`}
                        </span>
                      </div>
                      
                      <h4 className="text-white font-display font-bold text-sm uppercase truncate">
                        {bike.model}
                      </h4>
                      
                      <p className="text-xs text-gray-400 font-mono mt-1">
                        Ex-showroom: <span className="text-white font-bold">₹{bike.price.toLocaleString("en-IN")}</span> • {bike.engine}
                      </p>
                    </div>

                    <div className="shrink-0">
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                        isSelected ? "border-brand-cyan bg-brand-cyan" : "border-white/20"
                      }`}>
                        {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-brand-dark"></span>}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: VIP Acquisition Launcher Card */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-6 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-gradient-to-br from-brand-dark/80 via-brand-dark/40 to-brand-cyan/[0.02]">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-cyan animate-pulse" />
                <span className="text-xs font-mono tracking-widest text-brand-cyan uppercase">VIP Acquisition Center</span>
              </div>

              {selectedBike ? (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl border border-brand-cyan/20 bg-brand-cyan/5 space-y-2">
                    <p className="text-[10px] font-mono tracking-widest text-brand-cyan uppercase">Target Machine Selected</p>
                    <h4 className="font-display font-extrabold text-xl text-white uppercase tracking-tight">
                      {selectedBike.brand} <span className="text-brand-cyan">{selectedBike.model}</span>
                    </h4>
                    <div className="flex items-center justify-between text-xs font-mono text-gray-400">
                      <span>Condition: {selectedBike.condition}</span>
                      <span className="text-white font-bold">₹{selectedBike.price.toLocaleString("en-IN")}</span>
                    </div>
                  </div>

                  <div className="space-y-3 pt-2">
                    {[
                      { title: "No Hidden Surcharges", desc: "Transparent RTO charges and standard insurance rates." },
                      { title: "Immediate Keys Handover", desc: "In-house registration completed in under 120 minutes." },
                      { title: "Full Verification Done", desc: "100+ points mechanical validation checklist complete." }
                    ].map((benefit, idx) => (
                      <div key={idx} className="flex gap-2.5 items-start">
                        <CheckCircle2 className="w-4.5 h-4.5 text-brand-cyan shrink-0 mt-0.5" />
                        <div className="space-y-0.5">
                          <p className="text-white font-semibold text-xs uppercase tracking-wide font-display">{benefit.title}</p>
                          <p className="text-gray-400 text-[11px] leading-snug">{benefit.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      if (onOpenEnquiry) {
                        onOpenEnquiry(
                          "Direct Purchase Acquisition Enquiry",
                          `${selectedBike.brand} ${selectedBike.model} (${selectedBike.condition === "New" ? "New Launch" : "Pre-Owned"})`
                        );
                      }
                    }}
                    className="w-full relative overflow-hidden group py-4 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-teal text-brand-dark font-extrabold text-sm uppercase tracking-wider shadow-[0_4px_25px_rgba(0,176,255,0.35)] hover:shadow-[0_4px_35px_rgba(0,176,255,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Secure Acquisition Form</span>
                    <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                  </button>
                </div>
              ) : (
                <div className="space-y-4 py-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 mx-auto">
                    <BadgeInfo className="w-6 h-6 text-gray-400" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-white font-bold text-sm">Select Your Motorcycle</h4>
                    <p className="text-gray-400 text-xs max-w-xs mx-auto leading-relaxed">
                      Please pick a machine from the catalog panel on the left to activate our secure acquisition portal.
                    </p>
                  </div>
                </div>
              )}

              <p className="text-[10px] text-gray-500 text-center font-mono">
                🔒 SSL Encrypted Checkout Request • Guaranteed response within 30 mins.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Dealership Assurances Column */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center sm:text-left">
          {[
            { title: "No Hidden Surcharges", desc: "All prices quoted are transparent. CM Bikes charges strictly legal RTO tax rates and standard insurance valuations." },
            { title: "Flexible Low-Credit EMI", desc: "Collaborations with IDFC First Bank, HDFC, and Cholamandalam ensure loan approvals even for medium CIBIL profiles." },
            { title: "Immediate Keys Delivery", desc: "With complete paperwork done under our in-house registry channels, walk out with your bike keys in under 120 minutes." }
          ].map((item, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-2xl border-white/5 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 flex items-center justify-center border border-brand-cyan/20 mx-auto sm:mx-0">
                <CheckCircle className="w-4 h-4 text-brand-cyan" />
              </div>
              <h4 className="text-white font-display font-bold text-base uppercase tracking-tight">{item.title}</h4>
              <p className="text-gray-400 text-xs leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
