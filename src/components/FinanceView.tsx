import { useState, useEffect } from "react";
import { DollarSign, Landmark, Percent, Calendar, ShieldCheck, CheckCircle2, ChevronDown, Award } from "lucide-react";
import HeroBanner from "./HeroBanner";

export default function FinanceView() {
  // Calculator States
  const [loanAmount, setLoanAmount] = useState(250000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenure, setTenure] = useState(36); // in months

  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  // Dynamic EMI calculation on slider adjustment
  useEffect(() => {
    const P = loanAmount;
    const r = interestRate / 12 / 100;
    const n = tenure;

    // EMI Formula: [P x r x (1+r)^n] / [((1+r)^n) - 1]
    const emiAmount = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const grossPayment = emiAmount * n;
    const grossInterest = grossPayment - P;

    if (!isNaN(emiAmount) && isFinite(emiAmount)) {
      setEmi(Math.round(emiAmount));
      setTotalPayment(Math.round(grossPayment));
      setTotalInterest(Math.round(grossInterest));
    }
  }, [loanAmount, interestRate, tenure]);

  return (
    <div id="finance-view" className="space-y-16 pb-16">
      {/* 1. Hero */}
      <HeroBanner
        title="LOANS & EMI SCHEMES"
        subtitle="Unclutter your acquisition. Leverage Channasandra's lowest premium interest rates, zero foreclosure charges, and immediate bank pre-approvals."
        backgroundImage="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=1600&auto=format&fit=crop&q=80"
        category="Financial Services"
      />

      {/* 2. Dynamic Interactive EMI Calculator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Block - Sliders (7 cols) */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 border-white/5 space-y-6 flex flex-col justify-between">
            <div>
              <h3 className="font-display font-bold text-xl text-white uppercase tracking-tight flex items-center gap-2">
                <Landmark className="w-5 h-5 text-brand-cyan" />
                <span>DYNAMIC LOAN ESTIMATOR</span>
              </h3>
              <p className="text-xs text-gray-400 mt-1">Adjust sliders below to view real-time installment ranges based on your preferred capital.</p>
            </div>

            {/* Slider 1: Loan Amount */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-300 font-medium uppercase tracking-wider">Required loan Amount</span>
                <span className="font-mono font-bold text-brand-cyan text-sm">₹{loanAmount.toLocaleString("en-IN")}</span>
              </div>
              <input
                type="range"
                min={50000}
                max={1500000}
                step={10000}
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full accent-brand-cyan h-1.5 bg-white/10 rounded-full outline-none cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                <span>₹50,000</span>
                <span>₹15,00,000</span>
              </div>
            </div>

            {/* Slider 2: Interest Rate */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-300 font-medium uppercase tracking-wider">Expected interest Rate (p.a.)</span>
                <span className="font-mono font-bold text-brand-cyan text-sm">{interestRate}% p.a.</span>
              </div>
              <input
                type="range"
                min={6.9}
                max={15.0}
                step={0.1}
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full accent-brand-cyan h-1.5 bg-white/10 rounded-full outline-none cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                <span>6.9% (Best rate)</span>
                <span>15.0%</span>
              </div>
            </div>

            {/* Slider 3: Tenure Months */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-300 font-medium uppercase tracking-wider">Loan Repayment Tenure</span>
                <span className="font-mono font-bold text-brand-cyan text-sm">{tenure} Months ({tenure / 12} Yrs)</span>
              </div>
              <input
                type="range"
                min={12}
                max={60}
                step={12}
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="w-full accent-brand-cyan h-1.5 bg-white/10 rounded-full outline-none cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                <span>12 Months</span>
                <span>60 Months</span>
              </div>
            </div>

            <div className="bg-white/[0.01] border border-white/5 rounded-xl p-4 text-[11px] text-gray-500 leading-relaxed font-sans">
              ℹ️ Calculations above represent indicative showroom rates. Actual bank configurations are subject to credit scores (CIBIL) and profile validations.
            </div>
          </div>

          {/* Right Block - Calculations & Summary (5 cols) */}
          <div className="lg:col-span-5 glass-panel rounded-2xl p-6 sm:p-8 border-brand-cyan/20 bg-brand-cyan/[0.02] flex flex-col justify-between text-center relative overflow-hidden shadow-[0_0_40px_rgba(0,176,255,0.1)]">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-brand-cyan font-bold block">Estimated Installment</span>
              <h4 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight">
                ₹{emi.toLocaleString("en-IN")}<span className="text-xs text-gray-400 font-normal">/month</span>
              </h4>
              <p className="text-xs text-gray-400">Monthly EMI payable to partner bank</p>
            </div>

            {/* Bar Breakdown representation */}
            <div className="space-y-3 py-6 border-y border-white/5 my-4">
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">Principal Loan Capital:</span>
                <span className="text-white font-mono font-bold">₹{loanAmount.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">Total Interest Payable:</span>
                <span className="text-brand-cyan font-mono font-bold">+ ₹{totalInterest.toLocaleString("en-IN")}</span>
              </div>
              
              {/* Graphic bar split */}
              <div className="h-2 rounded-full bg-white/10 overflow-hidden flex">
                <div 
                  className="bg-brand-cyan h-full" 
                  style={{ width: `${(loanAmount / totalPayment) * 100}%` }}
                ></div>
                <div 
                  className="bg-brand-teal h-full" 
                  style={{ width: `${(totalInterest / totalPayment) * 100}%` }}
                ></div>
              </div>

              <div className="flex justify-between text-sm pt-2">
                <span className="text-white font-bold uppercase">Total Repayment Amount:</span>
                <span className="text-white font-mono font-extrabold">₹{totalPayment.toLocaleString("en-IN")}</span>
              </div>
            </div>

            <button
              onClick={() => {
                const waText = encodeURIComponent(
                  `Hello CM Bikes, I have calculated my estimated EMI scheme on your financial tool: Loan Amount: ₹${loanAmount.toLocaleString("en-IN")}, tenure: ${tenure} months. Please contact me to start pre-approval paperwork.`
                );
                window.open(`https://wa.me/919900088812?text=${waText}`, "_blank");
              }}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-teal text-brand-dark font-extrabold text-sm uppercase tracking-wider shadow-[0_4px_20px_rgba(0,176,255,0.3)] hover:scale-105 active:scale-95 transition-transform"
            >
              Get instant approval
            </button>
          </div>

        </div>
      </section>

      {/* 3. Bank Partners Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-1">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-cyan">Preferred lenders</span>
          <h3 className="font-display font-bold text-2xl text-white uppercase tracking-tight">OUR ESTEEMED BANK PARTNERS</h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { bank: "HDFC Bank", logo: "🏦", interest: "Starts @ 7.9% p.a." },
            { bank: "ICICI Bank", logo: "🏦", interest: "Starts @ 8.15% p.a." },
            { bank: "IDFC First", logo: "🏦", interest: "Starts @ 8.25% p.a." },
            { bank: "Tata Capital", logo: "🏦", interest: "Starts @ 8.4% p.a." },
            { bank: "Chola Finance", logo: "🏦", interest: "Starts @ 8.9% p.a." },
            { bank: "L&T Finance", logo: "🏦", interest: "Starts @ 9.1% p.a." }
          ].map((item, idx) => (
            <div key={idx} className="glass-panel p-4 rounded-xl border-white/5 text-center space-y-2">
              <span className="text-3xl block">{item.logo}</span>
              <h4 className="text-white font-display font-semibold text-xs uppercase tracking-tight">{item.bank}</h4>
              <p className="text-[10px] text-brand-cyan font-mono">{item.interest}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Eligibility & Required Documents Row */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        
        {/* Eligibility Checkpoints */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 border-white/5 space-y-5">
          <h4 className="text-white font-display font-bold text-lg uppercase tracking-tight flex items-center gap-2">
            <Award className="w-5 h-5 text-brand-cyan" />
            <span>LOAN ELIGIBILITY PARAMETERS</span>
          </h4>
          <ul className="space-y-4 text-xs sm:text-sm text-gray-300">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0" />
              <span><strong>Age Profile:</strong> Applicant must be between 18 to 65 years of age during maturity.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0" />
              <span><strong>Income Criteria:</strong> Minimum monthly salary of ₹20,000 for salaried, or verified ITR for self-employed individuals.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0" />
              <span><strong>Bengaluru Residency:</strong> Applicant must hold a valid residential address proof within Bengaluru RTO jurisdictions.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0" />
              <span><strong>CIBIL Credit Score:</strong> Minimum target CIBIL score of 650+ holds fast tracks. Scores above 750 secure premium rate discounts.</span>
            </li>
          </ul>
        </div>

        {/* Required Documents Checklist */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 border-white/5 space-y-5">
          <h4 className="text-white font-display font-bold text-lg uppercase tracking-tight flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-brand-cyan" />
            <span>REQUIRED DOCUMENT CHANNELS</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-gray-300">
            <div className="space-y-3">
              <p className="text-white font-bold uppercase tracking-wider text-[10px] text-brand-cyan">Salaried Employees</p>
              <ul className="space-y-2 list-disc pl-4 font-light leading-relaxed">
                <li>PAN Card & Aadhaar</li>
                <li>Last 3 Months Salary Slips</li>
                <li>Last 6 Months Bank Statement</li>
                <li>Address proof of Bengaluru</li>
                <li>2 Passport size Photos</li>
              </ul>
            </div>
            <div className="space-y-3 border-t sm:border-t-0 sm:border-l border-white/5 pt-4 sm:pt-0 sm:pl-4">
              <p className="text-white font-bold uppercase tracking-wider text-[10px] text-brand-cyan">Self-Employed / Business</p>
              <ul className="space-y-2 list-disc pl-4 font-light leading-relaxed">
                <li>PAN Card & Aadhaar</li>
                <li>Latest 2 Years Income Tax Returns (ITR)</li>
                <li>Last 6 Months Bank Statement</li>
                <li>Office Ownership / Shop License</li>
                <li>2 Passport size Photos</li>
              </ul>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
