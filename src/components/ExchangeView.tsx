import { useState, ChangeEvent, FormEvent } from "react";
import { RefreshCw, ArrowRight, CheckCircle2, ShieldAlert, Award, FileText, Send, Loader2, X, Sparkles } from "lucide-react";
import HeroBanner from "./HeroBanner";

export default function ExchangeView() {
  const [isExchangeModalOpen, setIsExchangeModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    currentBike: "",
    year: "",
    kmDriven: "",
    targetBike: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitted(true);
    setLoading(false);
    setFormData({
      name: "",
      phone: "",
      currentBike: "",
      year: "",
      kmDriven: "",
      targetBike: "",
      message: ""
    });
  };

  return (
    <div id="exchange-view" className="space-y-16 pb-16">
      {/* 1. Hero */}
      <HeroBanner
        title="VALUATION & EXCHANGE"
        subtitle="Trade-in your old motorcycle with absolute class. Get premium valuations and upgrade to your desired superbikes or cruisers in under 2 hours."
        backgroundImage="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=1600&auto=format&fit=crop&q=80"
        category="Trade-In Center"
      />

      {/* 2. Exchange Benefits & Timeline Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-cyan">Max Payout Matrix</span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">
              UPGRADE IN MINUTES WITH ZERO COMPLEXITIES
            </h2>
            <p className="text-gray-300 text-sm font-light leading-relaxed">
              Why hassle with selling and buying separately when you can execute both actions at a single counter? Our premium Exchange Program guarantees unmatched payouts for your old vehicle and pre-negotiated discount coordinates on your next purchase.
            </p>

            <div className="space-y-4 pt-2">
              {[
                { icon: Award, title: "Rs. 15,000 Extra Valuation Over competitors", desc: "Our massive dealer network in Karnataka allows us to offer significantly higher valuations than standard automated trade-in websites." },
                { icon: RefreshCw, title: "Same-Day Transfer & Swap", desc: "Drive into our showroom with your old bike, complete paperwork, select your upgrade, and drive out with your new keys in under 120 minutes." },
                { icon: FileText, title: "Loan rollover assistance", desc: "If your old bike holds active hypothecation or an active unpaid loan, our finance team closes it directly with the bank to clear the trade." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 flex items-center justify-center border border-brand-cyan/20 shrink-0 mt-0.5">
                    <item.icon className="w-5 h-5 text-brand-cyan" />
                  </div>
                  <div>
                    <h4 className="text-white font-display font-bold text-sm uppercase tracking-wide">{item.title}</h4>
                    <p className="text-gray-400 text-xs leading-relaxed font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Exchange Launcher Card */}
          <div className="flex flex-col justify-center">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-6 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-gradient-to-br from-brand-dark/80 via-brand-dark/40 to-brand-cyan/[0.02]">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-cyan animate-pulse" />
                <span className="text-xs font-mono tracking-widest text-brand-cyan uppercase">VIP Upgrade intake portal</span>
              </div>

              <div className="space-y-2">
                <h3 className="font-display font-extrabold text-2xl text-white uppercase tracking-tight">
                  Same-Day Premium Exchange
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light">
                  Submit your current motorcycle parameters and choose your upgrade machine. We formulate a high-yield swap deal on your screen. Complete keys handover in 120 minutes.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  { title: "Highest Trade-In Rate", desc: "Up to ₹15,000 extra evaluation compared to generic portals." },
                  { title: "Same-Day Keys Swap", desc: "Ride in on your old bike, drive out on your target machine." },
                  { title: "Loan Rollover Desk", desc: "Unpaid loans are closed directly with your bank by our desk." },
                  { title: "RTO Verification", desc: "No complex legal hurdles. We handle complete ownership transfers." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-2.5 items-start">
                    <CheckCircle2 className="w-4.5 h-4.5 text-brand-cyan shrink-0 mt-0.5" />
                    <div className="space-y-0.5">
                      <p className="text-white font-semibold text-xs uppercase tracking-wide font-display">{item.title}</p>
                      <p className="text-gray-400 text-[11px] leading-snug">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setIsExchangeModalOpen(true)}
                className="w-full relative overflow-hidden group py-4 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-teal text-brand-dark font-extrabold text-sm uppercase tracking-wider shadow-[0_4px_25px_rgba(0,176,255,0.35)] hover:shadow-[0_4px_35px_rgba(0,176,255,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 mt-4 animate-pulse-slow"
              >
                <span>Initialize Upgrade Proposal</span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Exchange Modal Overlay */}
      {isExchangeModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto p-4 bg-brand-dark/95 backdrop-blur-md flex items-start sm:items-center justify-center py-8 animate-in fade-in duration-200">
          <div className="max-w-2xl w-full relative my-auto">
            <button
              onClick={() => setIsExchangeModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-lg text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 transition-all z-50 cursor-pointer"
              title="Close form"
            >
              <X className="w-5 h-5" />
            </button>
            
            {submitted ? (
              <div className="glass-panel rounded-2xl p-8 border-brand-cyan/30 text-center space-y-6 shadow-xl animate-in scale-in duration-300 bg-brand-dark">
                <CheckCircle2 className="w-16 h-16 text-brand-cyan mx-auto animate-bounce" />
                <h3 className="font-display font-bold text-2xl text-white uppercase tracking-tight">Valuation Query Transmitted</h3>
                <p className="text-gray-300 text-sm leading-relaxed font-light">
                  Excellent! Our trade-in team is formulating an estimated exchange payout range. We will contact you shortly to lock in your evaluation visit.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setIsExchangeModalOpen(false);
                  }}
                  className="w-full py-3 rounded-xl border border-white/10 text-gray-400 hover:text-white hover:bg-white/5 text-sm uppercase font-bold tracking-widest transition-colors duration-200"
                >
                  Close & Return
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-panel rounded-2xl p-6 sm:p-8 space-y-5 border-white/10 shadow-2xl bg-brand-dark max-h-[85vh] overflow-y-auto no-scrollbar">
                <div>
                  <h3 className="font-display font-bold text-xl text-white uppercase tracking-tight">Trade-In Upgrade Estimator</h3>
                  <p className="text-xs text-gray-400">Provide basic specifications. Get a priority pre-approval quote.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-gray-300 uppercase tracking-wider">Your Name <span className="text-brand-cyan">*</span></label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Surendra"
                      className="w-full bg-brand-dark/80 border border-white/10 focus:border-brand-cyan/60 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-600 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-gray-300 uppercase tracking-wider">Phone Number <span className="text-brand-cyan">*</span></label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="10-digit number"
                      className="w-full bg-brand-dark/80 border border-white/10 focus:border-brand-cyan/60 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-600 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-gray-300 uppercase tracking-wider">Your Current Motorcycle (Brand & Model) <span className="text-brand-cyan">*</span></label>
                  <input
                    type="text"
                    name="currentBike"
                    required
                    value={formData.currentBike}
                    onChange={handleChange}
                    placeholder="e.g. Bajaj Pulsar 150, Duke 200"
                    className="w-full bg-brand-dark/80 border border-white/10 focus:border-brand-cyan/60 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-600 outline-none transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-gray-300 uppercase tracking-wider">Registration Year <span className="text-brand-cyan">*</span></label>
                    <input
                      type="number"
                      name="year"
                      required
                      value={formData.year}
                      onChange={handleChange}
                      placeholder="e.g. 2021"
                      className="w-full bg-brand-dark/80 border border-white/10 focus:border-brand-cyan/60 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-600 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-gray-300 uppercase tracking-wider">KM Driven <span className="text-brand-cyan">*</span></label>
                    <input
                      type="number"
                      name="kmDriven"
                      required
                      value={formData.kmDriven}
                      onChange={handleChange}
                      placeholder="Odometer reading"
                      className="w-full bg-brand-dark/80 border border-white/10 focus:border-brand-cyan/60 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-600 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-gray-300 uppercase tracking-wider">Target Upgrade Machine <span className="text-brand-cyan">*</span></label>
                  <select
                    name="targetBike"
                    required
                    value={formData.targetBike}
                    onChange={handleChange}
                    className="w-full bg-brand-dark/80 border border-white/10 focus:border-brand-cyan/60 rounded-xl px-4 py-2.5 text-xs text-white outline-none"
                  >
                    <option value="">-- Select Upgrade --</option>
                    <option value="Kawasaki ZX-10R">Kawasaki Ninja ZX-10R</option>
                    <option value="Ducati Panigale V4">Ducati Panigale V4 S</option>
                    <option value="BMW R 1250 GS">BMW R 1250 GS Adventure</option>
                    <option value="RE Super Meteor 650">Royal Enfield Super Meteor 650</option>
                    <option value="KTM Duke 390">KTM Duke 390</option>
                    <option value="Ather 450 Apex">Ather 450 Apex (EV)</option>
                    <option value="Other Premium Bike">Other Showroom Pre-Owned Options</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-gray-300 uppercase tracking-wider">Any outstanding hypothecations or issues</label>
                  <textarea
                    name="message"
                    rows={2}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="e.g. Loan active with SBI, minor scratches on right tank wing..."
                    className="w-full bg-brand-dark/80 border border-white/10 focus:border-brand-cyan/60 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-600 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-teal text-brand-dark font-extrabold text-xs uppercase tracking-widest disabled:opacity-50 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-brand-dark" />
                      <span>Formulating valuation metrics...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-brand-dark" />
                      <span>Submit valuation request</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
