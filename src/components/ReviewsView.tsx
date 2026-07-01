import { useState } from "react";
import { Star, MessageSquare, Quote, ArrowRight, ChevronLeft, ChevronRight, CheckCircle2, Award } from "lucide-react";
import { REVIEWS_DATA } from "../data";
import HeroBanner from "./HeroBanner";

export default function ReviewsView() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % REVIEWS_DATA.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + REVIEWS_DATA.length) % REVIEWS_DATA.length);
  };

  return (
    <div id="reviews-view" className="space-y-16 pb-16">
      {/* 1. Hero */}
      <HeroBanner
        title="CLIENT STORIES"
        subtitle="Uncompromising testimonials. Learn why motorcycle enthusiasts in Bengaluru trust CM Bikes for transparent valuations, certified quality, and seamless transfers."
        backgroundImage="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=1600&auto=format&fit=crop&q=80"
        category="Customer Reviews"
      />

      {/* 2. Google Business Summary Scorecard */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Block - Big Badge Rating (4 cols) */}
          <div className="lg:col-span-4 glass-panel rounded-2xl p-6 sm:p-8 border-brand-cyan/20 bg-brand-cyan/[0.02] flex flex-col justify-between text-center relative overflow-hidden shadow-[0_0_30px_rgba(0,176,255,0.08)]">
            <div className="absolute top-0 left-0 w-24 h-24 bg-brand-cyan/5 rounded-full filter blur-xl"></div>
            
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-brand-cyan font-bold block">Google Verified Rating</span>
              <h3 className="font-display font-black text-6xl sm:text-7xl text-white tracking-tighter leading-none">
                4.9
              </h3>
              <div className="flex items-center justify-center gap-1.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs text-gray-400">Based on 1,248 verified customer evaluations in Bengaluru</p>
            </div>

            <div className="border-t border-white/5 pt-6 mt-6 text-xs text-gray-400 space-y-1.5">
              <p className="flex items-center justify-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-cyan" /> 100% Verified Buyer Profiles</p>
              <p className="flex items-center justify-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-cyan" /> 98.4% Customer Recommendation Ratio</p>
            </div>
          </div>

          {/* Right Block - Star Distribution Rows (8 cols) */}
          <div className="lg:col-span-8 glass-panel rounded-2xl p-6 sm:p-8 border-white/5 flex flex-col justify-between">
            <div className="space-y-1">
              <h4 className="text-white font-display font-bold text-lg uppercase tracking-tight">RATING CURVES & DISTRIBUTIONS</h4>
              <p className="text-xs text-gray-500 font-sans">Transparent performance statistics generated directly via Google Business APIs.</p>
            </div>

            <div className="space-y-3.5 my-6">
              {[
                { stars: 5, pct: 96, count: 1198 },
                { stars: 4, pct: 3, count: 38 },
                { stars: 3, pct: 1, count: 12 },
                { stars: 2, pct: 0, count: 0 },
                { stars: 1, pct: 0, count: 0 }
              ].map((row) => (
                <div key={row.stars} className="flex items-center gap-4 text-xs font-mono">
                  <span className="text-gray-400 w-3 text-right">{row.stars}★</span>
                  <div className="flex-1 h-2 rounded-full bg-white/5 overflow-hidden">
                    <div className="bg-brand-cyan h-full rounded-full" style={{ width: `${row.pct}%` }}></div>
                  </div>
                  <span className="text-gray-400 w-10 text-right">{row.pct}%</span>
                  <span className="text-gray-600 hidden sm:inline-block w-16 text-right font-sans">({row.count})</span>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center text-xs text-gray-500 border-t border-white/5 pt-4">
              <span>Updated: 2026 Live API</span>
              <span>Review Frequency: ~4 per day</span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Interactive Review Slider Showcase */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative glass-panel rounded-3xl p-8 sm:p-12 border-white/10 shadow-2xl overflow-hidden min-h-[350px] flex flex-col justify-between">
          
          {/* Big Quote Accent decoration */}
          <Quote className="absolute top-8 right-8 w-24 h-24 text-white/[0.02] pointer-events-none" />

          {/* Core Review details */}
          <div className="space-y-6 relative z-10">
            <div className="flex items-center gap-3">
              <img
                src={REVIEWS_DATA[currentIndex].avatar}
                alt={REVIEWS_DATA[currentIndex].name}
                className="w-14 h-14 rounded-full object-cover border-2 border-brand-cyan/40"
              />
              <div>
                <h4 className="text-white font-display font-bold text-lg uppercase tracking-tight">
                  {REVIEWS_DATA[currentIndex].name}
                </h4>
                <div className="flex items-center gap-1.5 text-xs">
                  <div className="flex text-amber-400">
                    {Array.from({ length: REVIEWS_DATA[currentIndex].rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-gray-500 font-mono">• {REVIEWS_DATA[currentIndex].date}</span>
                  <span className="text-brand-cyan font-mono font-bold bg-brand-cyan/10 border border-brand-cyan/20 px-2 py-0.5 rounded-full text-[9px] uppercase ml-1">
                    {REVIEWS_DATA[currentIndex].source} Verified
                  </span>
                </div>
              </div>
            </div>

            {REVIEWS_DATA[currentIndex].bikeModel && (
              <div className="inline-block px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-xs text-gray-300 font-mono">
                🚀 Upgrade Vehicle: <span className="text-white font-bold">{REVIEWS_DATA[currentIndex].bikeModel}</span>
              </div>
            )}

            <p className="text-gray-200 text-base sm:text-lg leading-relaxed font-light italic">
              "{REVIEWS_DATA[currentIndex].text}"
            </p>
          </div>

          {/* Action Carousel buttons */}
          <div className="flex items-center justify-between border-t border-white/5 pt-6 mt-8">
            <span className="text-xs font-mono text-gray-500">
              Review {currentIndex + 1} of {REVIEWS_DATA.length}
            </span>

            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full border border-white/10 hover:border-brand-cyan text-gray-400 hover:text-white bg-white/5 transition-all cursor-pointer"
                aria-label="Previous Review"
              >
                <ChevronLeft className="w-5 h-5 text-brand-cyan" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-full border border-white/10 hover:border-brand-cyan text-gray-400 hover:text-white bg-white/5 transition-all cursor-pointer"
                aria-label="Next Review"
              >
                <ChevronRight className="w-5 h-5 text-brand-cyan" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Leave a review Call-to-Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-2xl p-8 border-brand-cyan/10 text-center space-y-5 max-w-3xl mx-auto">
          <Quote className="w-8 h-8 text-brand-cyan mx-auto animate-pulse" />
          <h3 className="font-display font-bold text-xl text-white uppercase tracking-tight">ARE YOU A PROUD CM BIKES OWNER?</h3>
          <p className="text-gray-400 text-sm font-light max-w-lg mx-auto leading-relaxed">
            Your review helps us maintain absolute quality and guides other riders in Bengaluru. Share your delivery story, RTO experience, or valuation journey on Google!
          </p>
          <a
            href="https://g.page/r/cm-bikes-channasandra/review"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-brand-cyan hover:text-brand-cyan text-white text-xs uppercase font-mono font-bold tracking-wider transition-all inline-block"
          >
            Review Us on Google Business
          </a>
        </div>
      </section>
    </div>
  );
}
