import { useState } from "react";
import { HelpCircle, ChevronDown, Sparkles } from "lucide-react";
import { FAQ_DATA } from "../data";
import HeroBanner from "./HeroBanner";

export default function FaqView() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const categories = ["All", "Buying", "Selling", "Exchange", "Finance", "Insurance"];

  const filteredFaqs = FAQ_DATA.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  const toggleExpand = (idx: number) => {
    if (expandedIndex === idx) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(idx);
    }
  };

  return (
    <div id="faq-view" className="space-y-16 pb-16">
      {/* 1. Hero */}
      <HeroBanner
        title="HELP CENTER"
        subtitle="Deconstruct your queries. Find detailed information regarding RTO registrations, exchange pricing index, and cashless claim networks in Bengaluru."
        backgroundImage="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=1600&auto=format&fit=crop&q=80"
        category="Showroom FAQ"
      />

      {/* 2. Category Selector */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-2xl p-5 border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-white font-display font-bold text-sm uppercase tracking-wider flex items-center gap-1.5 shrink-0">
            <Sparkles className="w-4.5 h-4.5 text-brand-cyan animate-pulse" />
            <span>Select Query Category</span>
          </span>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setExpandedIndex(null); // Collapse all during category switch
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

      {/* 3. Accordions List with smooth height expansion */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {filteredFaqs.map((faq, idx) => {
          const isExpanded = expandedIndex === idx;
          return (
            <div
              key={idx}
              className={`glass-panel rounded-2xl border transition-all duration-300 overflow-hidden ${
                isExpanded ? "border-brand-cyan/40 bg-brand-cyan/[0.01]" : "border-white/5"
              }`}
            >
              {/* Question Trigger */}
              <button
                onClick={() => toggleExpand(idx)}
                className="w-full flex items-center justify-between p-5 text-left transition-colors cursor-pointer group"
              >
                <div className="flex items-start gap-3.5 pr-4">
                  <HelpCircle className={`w-5 h-5 shrink-0 mt-0.5 transition-colors ${isExpanded ? "text-brand-cyan animate-pulse" : "text-gray-500 group-hover:text-brand-cyan"}`} />
                  <span className={`font-display font-bold text-sm sm:text-base tracking-tight leading-normal uppercase transition-colors ${isExpanded ? "text-brand-cyan" : "text-white"}`}>
                    {faq.question}
                  </span>
                </div>
                <div className={`p-1.5 rounded-lg bg-white/5 text-gray-400 group-hover:text-white transition-all ${isExpanded ? "rotate-180 text-brand-cyan" : ""}`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {/* Answer Content Panel */}
              {isExpanded && (
                <div className="px-5 pb-6 pt-1 border-t border-white/5 animate-in fade-in slide-in-from-top-2 duration-300">
                  <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed">
                    {faq.answer}
                  </p>
                  <div className="flex items-center gap-2 pt-4 text-[10px] font-mono text-gray-500">
                    <span>Category: <strong className="text-brand-cyan uppercase">{faq.category}</strong></span>
                    <span>•</span>
                    <span>Showroom: Channasandra, Bangalore</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* 4. Still Need Help Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-2xl p-8 border-brand-cyan/10 text-center space-y-4 max-w-2xl mx-auto">
          <h3 className="font-display font-bold text-lg text-white uppercase tracking-tight">STILL HAVE UNRESOLVED QUESTIONS?</h3>
          <p className="text-gray-400 text-xs font-light max-w-md mx-auto">
            Our relationship executives are available 7 days a week on call or WhatsApp to answer complex RTO, valuation, or EMI interest queries!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <a
              href="tel:+919900088812"
              className="px-6 py-2.5 rounded-full border border-white/10 text-gray-300 hover:text-white hover:bg-white/5 text-xs font-bold uppercase tracking-wider transition-all"
            >
              Call Hotline
            </a>
            <a
              href="https://wa.me/919900088812?text=Hello%20CM%20Bikes%2C%20I%20have%20some%20queries%20regarding%20purchasing%2Fexchanging%20a%20motorcycle.%20Please%20assist%20me."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full bg-brand-cyan text-brand-dark text-xs font-bold uppercase tracking-wider transition-all"
            >
              WhatsApp Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
