import { ShieldCheck, HelpCircle, FileText, Activity, AlertOctagon, HeartHandshake, ShieldAlert } from "lucide-react";
import HeroBanner from "./HeroBanner";

export default function InsuranceView() {
  const insuranceTypes = [
    {
      title: "Comprehensive Coverage",
      tag: "Highly Recommended",
      desc: "Guarantees 100% financial shelter against damage to your own vehicle due to accidents, theft, fire, animal collisions, natural calamities, and third-party liabilities."
    },
    {
      title: "Third-Party Liability Cover",
      tag: "Mandatory By Law",
      desc: "Covers bodily injuries, death, or severe property damage caused to third parties due to your motorcycle. Holds zero own-damage recovery capabilities."
    },
    {
      title: "Zero Depreciation Add-On",
      tag: "Best for Superbikes",
      desc: "Removes plastic, glass, fiber, and rubber degradation cuts during claims. Secure 100% replacement value on all spare parts during repairs."
    }
  ];

  return (
    <div id="insurance-view" className="space-y-16 pb-16">
      {/* 1. Hero */}
      <HeroBanner
        title="INSURANCE & CLAIMS"
        subtitle="Safeguard your velocity. Explore zero-depreciation coverage, direct cashless claim settlements, and instant online renewals with Bangalore's leading underwriters."
        backgroundImage="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=1600&auto=format&fit=crop&q=80"
        category="Safety Shield"
      />

      {/* 2. Insurance Types Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-1">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-cyan">Shield Layers</span>
          <h2 className="font-display font-black text-3xl text-white uppercase tracking-tight">MOTORCYCLE POLICY OPTIONS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insuranceTypes.map((policy, idx) => (
            <div key={idx} className="glass-panel p-6 sm:p-8 rounded-2xl border-white/5 hover:border-brand-cyan/20 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 flex items-center justify-center border border-brand-cyan/20">
                    <ShieldCheck className="w-5 h-5 text-brand-cyan" />
                  </div>
                  <span className="text-[9px] font-mono font-bold tracking-wider uppercase text-brand-teal bg-brand-teal/10 border border-brand-teal/30 px-2.5 py-0.5 rounded-full animate-pulse">
                    {policy.tag}
                  </span>
                </div>
                <h3 className="text-white font-display font-bold text-lg uppercase tracking-tight">{policy.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed font-light">{policy.desc}</p>
              </div>

              <div className="pt-6 border-t border-white/5 mt-6">
                <button
                  onClick={() => {
                    const txt = encodeURIComponent(`Hello CM Bikes, I want to enquire about the ${policy.title} plan for my motorcycle. Please contact me.`);
                    window.open(`https://wa.me/919900088812?text=${txt}`, "_blank");
                  }}
                  className="w-full py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-brand-cyan hover:text-brand-cyan text-white text-xs font-mono tracking-wider transition-colors"
                >
                  Consult Relationship Expert
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Cashless Claim Process & Partners */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        
        {/* Left Column - Claims Support */}
        <div className="lg:col-span-7 space-y-6 flex flex-col justify-center">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-cyan">Claims Desk Assistance</span>
          <h2 className="font-display font-black text-3xl text-white uppercase tracking-tight leading-none">
            CASHLESS REPAIRS & EXPERT SURVEYOR ALIGNMENT
          </h2>
          <p className="text-gray-300 text-sm font-light leading-relaxed">
            Met with an unfortunate road incident? CM Bikes stands as your shield. Do not panic — our dedicated claims support team takes care of the recovery, estimation, surveyor alignment, and paper clearance directly.
          </p>
          <p className="text-gray-400 text-xs font-light leading-relaxed">
            Simply transport your vehicle to our Channasandra workshop. We have seamless cashless tie-ups with Bajaj Allianz, ICICI Lombard, HDFC Ergo, Tata AIG, Liberty, and New India Assurance. You only settle the legal compulsory deductible fee — we settle the entire parts & labor bill directly with the insurance firm!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-gray-300 pt-2 font-medium">
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-4.5 h-4.5 text-brand-cyan" />
              <span>Free roadside towing in Bangalore</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-4.5 h-4.5 text-brand-cyan" />
              <span>Instant vehicle inspection estimates</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-4.5 h-4.5 text-brand-cyan" />
              <span>In-house surveyor visits within 24 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-4.5 h-4.5 text-brand-cyan" />
              <span>Genuine OEM parts replacement policy</span>
            </div>
          </div>
        </div>

        {/* Right Column - Checklist */}
        <div className="lg:col-span-5 glass-panel rounded-2xl p-6 sm:p-8 border-white/5 space-y-6 flex flex-col justify-between">
          <div className="space-y-1">
            <h4 className="text-white font-display font-bold text-base uppercase tracking-tight flex items-center gap-2">
              <FileText className="w-5 h-5 text-brand-cyan" />
              <span>IMMEDIATE CLAIMS DOC CHECKLIST</span>
            </h4>
            <p className="text-[10px] text-gray-500">Keep these records prepped to guarantee immediate Surveyor approvals.</p>
          </div>

          <ul className="space-y-3 text-xs text-gray-300">
            <li className="flex items-start gap-2 leading-relaxed">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-1.5 shrink-0"></div>
              <span>Copy of valid <strong>Motorcycle Insurance Policy</strong> note</span>
            </li>
            <li className="flex items-start gap-2 leading-relaxed">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-1.5 shrink-0"></div>
              <span>Copy of rider's valid <strong>Driving License</strong> (DL)</span>
            </li>
            <li className="flex items-start gap-2 leading-relaxed">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-1.5 shrink-0"></div>
              <span>Copy of vehicle's <strong>Registration Certificate</strong> (RC Book)</span>
            </li>
            <li className="flex items-start gap-2 leading-relaxed">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-1.5 shrink-0"></div>
              <span>Police FIR copy (Mandatory only during theft or heavy third-party property claim)</span>
            </li>
            <li className="flex items-start gap-2 leading-relaxed">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-1.5 shrink-0"></div>
              <span>Signed Claim Form & Satisfaction Voucher during delivery</span>
            </li>
          </ul>

          <div className="border-t border-white/5 pt-4">
            <a
              href="tel:+919900088812"
              className="w-full py-3.5 rounded-xl bg-brand-cyan text-brand-dark font-black text-xs uppercase tracking-wider text-center block"
            >
              Contact Emergency Claims Office
            </a>
          </div>
        </div>

      </section>
    </div>
  );
}
