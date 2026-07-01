import { useState, useRef, ChangeEvent, DragEvent, FormEvent } from "react";
import { Upload, CheckCircle2, ShieldCheck, DollarSign, Clock, RefreshCw, Send, Loader2, X, Sparkles, BadgeInfo } from "lucide-react";
import HeroBanner from "./HeroBanner";

export default function SellBikeView() {
  const [isAppraisalModalOpen, setIsAppraisalModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    bikeBrand: "",
    bikeModel: "",
    year: "",
    kmDriven: "",
    expectedPrice: "",
    message: ""
  });

  const [files, setFiles] = useState<File[]>([]);
  const [dragActive, setDragActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Drag and drop handlers for file upload usability guidelines
  const handleDrag = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const fileList = Array.from(e.dataTransfer.files);
      setFiles(prev => [...prev, ...fileList]);
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const fileList = Array.from(e.target.files);
      setFiles(prev => [...prev, ...fileList]);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const removeFile = (idxToRemove: number) => {
    setFiles(prev => prev.filter((_, idx) => idx !== idxToRemove));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate premium valuation submission pipeline
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitted(true);
      setLoading(false);
      setFiles([]);
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        bikeBrand: "",
        bikeModel: "",
        year: "",
        kmDriven: "",
        expectedPrice: "",
        message: ""
      });
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <div id="sell-bike-view" className="space-y-16 pb-16">
      {/* 1. Hero */}
      <HeroBanner
        title="SELL YOUR MOTORCYCLE"
        subtitle="Unmatched valuations, instant payout options, and zero hassle. Submit your vehicle coordinates and let our evaluation experts formulate a direct purchase offer."
        backgroundImage="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=1600&auto=format&fit=crop&q=80"
        category="Valuation Center"
      />

      {/* 2. Selling Content Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Columns - Benefits & Info */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-cyan">Hassle-Free Sales</span>
            <h2 className="font-display font-black text-3xl text-white uppercase tracking-tight">
              WHY CHOOSE CM BIKES TO SELL YOUR MACHINE?
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              Selling privately in Bengaluru involves endless spam calls, low-ball bids, risky test-rides, and complex RTO office runs. CM Bikes eliminates the stress.
            </p>
          </div>

          <div className="space-y-6">
            {[
              { icon: DollarSign, color: "text-emerald-400", title: "Highest Valuation Guarantee", desc: "Our 50-point scientific check evaluates the exact health of your chassis, mechanicals, and custom additions to propose top market valuations." },
              { icon: Clock, color: "text-brand-cyan", title: "Instant Bank Settlements", desc: "No delays. Once the vehicle appraisal completes, the agreed funds are instantly transferred directly to your bank account via RTGS/IMPS." },
              { icon: RefreshCw, color: "text-purple-400", title: "Complimentary paperwork transfer", desc: "We complete the entire RTO paperwork, NOC issuance, HP cancellation, and ownership change operations on our own budget." }
            ].map((benefit, idx) => (
              <div key={idx} className="glass-panel p-5 rounded-2xl border-white/5 flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                  <benefit.icon className={`w-5 h-5 ${benefit.color}`} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-white font-display font-bold text-sm uppercase tracking-wide">{benefit.title}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed font-light">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Columns - Appraisal Launcher Card */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-6 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-gradient-to-br from-brand-dark/80 via-brand-dark/40 to-brand-cyan/[0.02]">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse"></div>
              <span className="text-xs font-mono tracking-widest text-brand-cyan uppercase">VIP Appraisal intake portal</span>
            </div>

            <div className="space-y-2">
              <h3 className="font-display font-extrabold text-2xl text-white uppercase tracking-tight">
                Sell Your Superbike Online
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light">
                Submit your motorcycle metadata, coordinates, and physical parameters to lock in an instant appraisal evaluation from our certified specialists. Guaranteed high-payout valuation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                { title: "Direct Bank Transfer", desc: "Get paid instantly within 30 minutes of offer acceptance." },
                { title: "Free Doorstep Inspection", desc: "No need to drive. We inspect at your home or office." },
                { title: "Complimentary Paperwork", desc: "Complete RTO ownership transfer handled on our budget." },
                { title: "Zero Obligation Offer", desc: "Our valuations are free and 100% commitment-free." }
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
              onClick={() => setIsAppraisalModalOpen(true)}
              className="w-full relative overflow-hidden group py-4 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-teal text-brand-dark font-extrabold text-sm uppercase tracking-wider shadow-[0_4px_25px_rgba(0,176,255,0.35)] hover:shadow-[0_4px_35px_rgba(0,176,255,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 mt-4"
            >
              <span>Start Instant Online Appraisal</span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            </button>
          </div>
        </div>

      </section>

      {/* Appraisal Modal Overlay */}
      {isAppraisalModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto p-4 bg-brand-dark/95 backdrop-blur-md flex items-start sm:items-center justify-center py-8 animate-in fade-in duration-200">
          <div className="max-w-2xl w-full relative my-auto">
            <button
              onClick={() => setIsAppraisalModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-lg text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 transition-all z-50 cursor-pointer"
              title="Close form"
            >
              <X className="w-5 h-5" />
            </button>
            
            {submitted ? (
              <div className="glass-panel rounded-2xl p-8 border-brand-cyan/30 text-center space-y-6 shadow-xl animate-in scale-in duration-300 bg-brand-dark">
                <div className="mx-auto w-16 h-16 bg-brand-cyan/10 rounded-full flex items-center justify-center border border-brand-cyan">
                  <CheckCircle2 className="w-8 h-8 text-brand-cyan animate-bounce" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-2xl text-white uppercase tracking-tight">Appraisal Request Submitted!</h3>
                  <p className="text-gray-300 text-sm leading-relaxed font-light">
                    Thank you for submitting your motorcycle specs to <span className="text-brand-cyan font-bold">CM Bikes</span>. Our vehicle appraisal officers are analyzing the model metadata and will contact you via phone or WhatsApp in 30 minutes!
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setIsAppraisalModalOpen(false);
                  }}
                  className="w-full py-3 rounded-xl border border-white/10 text-gray-400 hover:text-white hover:bg-white/5 text-sm uppercase font-bold tracking-widest transition-colors duration-200"
                >
                  Close & Return
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-panel rounded-2xl p-6 sm:p-8 space-y-5 border-white/10 shadow-2xl bg-brand-dark max-h-[85vh] overflow-y-auto no-scrollbar">
                <h3 className="font-display font-bold text-xl text-white uppercase tracking-tight">
                  Motorcycle Appraisal Intake
                </h3>
                <p className="text-xs text-gray-400">
                  Please populate the metadata fields below. Our specialists cross-reference these with real-time Bengaluru market demand to secure your high-payout valuation quote.
                </p>

                {/* Personal details row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-gray-300 uppercase tracking-wider">Your Full Name <span className="text-brand-cyan">*</span></label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Surendra V"
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
                      placeholder="10-digit mobile"
                      className="w-full bg-brand-dark/80 border border-white/10 focus:border-brand-cyan/60 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-600 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-gray-300 uppercase tracking-wider">Email Address <span className="text-brand-cyan">*</span></label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. your@email.com"
                      className="w-full bg-brand-dark/80 border border-white/10 focus:border-brand-cyan/60 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-600 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Vehicle parameters row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-gray-300 uppercase tracking-wider">Bike Brand <span className="text-brand-cyan">*</span></label>
                    <input
                      type="text"
                      name="bikeBrand"
                      required
                      value={formData.bikeBrand}
                      onChange={handleChange}
                      placeholder="e.g. KTM, RE, Honda"
                      className="w-full bg-brand-dark/80 border border-white/10 focus:border-brand-cyan/60 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-600 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-gray-300 uppercase tracking-wider">Bike Model <span className="text-brand-cyan">*</span></label>
                    <input
                      type="text"
                      name="bikeModel"
                      required
                      value={formData.bikeModel}
                      onChange={handleChange}
                      placeholder="e.g. Classic 350, Duke"
                      className="w-full bg-brand-dark/80 border border-white/10 focus:border-brand-cyan/60 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-600 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-gray-300 uppercase tracking-wider">Registration Year <span className="text-brand-cyan">*</span></label>
                    <input
                      type="number"
                      name="year"
                      required
                      value={formData.year}
                      onChange={handleChange}
                      placeholder="e.g. 2023"
                      className="w-full bg-brand-dark/80 border border-white/10 focus:border-brand-cyan/60 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-600 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* KM, price */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-gray-300 uppercase tracking-wider">Kilometers Driven <span className="text-brand-cyan">*</span></label>
                    <input
                      type="number"
                      name="kmDriven"
                      required
                      value={formData.kmDriven}
                      onChange={handleChange}
                      placeholder="Odometer reading in km"
                      className="w-full bg-brand-dark/80 border border-white/10 focus:border-brand-cyan/60 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-600 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-gray-300 uppercase tracking-wider">Expected Payout Price (₹) <span className="text-brand-cyan">*</span></label>
                    <input
                      type="number"
                      name="expectedPrice"
                      required
                      value={formData.expectedPrice}
                      onChange={handleChange}
                      placeholder="e.g. 150000"
                      className="w-full bg-brand-dark/80 border border-white/10 focus:border-brand-cyan/60 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-600 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Styled drag and drop file upload following layout guidelines */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-gray-300 uppercase tracking-wider">Upload Motorcycle Pictures</label>
                  
                  <div
                    onDragEnter={handleDrag}
                    onDragOver={handleDrag}
                    onDragLeave={handleDrag}
                    onDrop={handleDrop}
                    onClick={triggerFileInput}
                    className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all ${
                      dragActive
                        ? "border-brand-cyan bg-brand-cyan/10 shadow-[0_0_15px_rgba(0,176,255,0.15)]"
                        : "border-white/10 hover:border-brand-cyan/45 bg-white/[0.01]"
                    }`}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <Upload className="w-8 h-8 text-brand-cyan mx-auto mb-2 animate-pulse" />
                    <p className="text-xs text-white font-medium">
                      Drag and drop your motorcycle photos here, or <span className="text-brand-cyan font-bold">browse manually</span>
                    </p>
                    <p className="text-[10px] text-gray-500 mt-1">Supports PNG, JPG, JPEG • High-resolution images get faster quotes.</p>
                  </div>

                  {/* File checklist */}
                  {files.length > 0 && (
                    <div className="pt-2 space-y-1">
                      <p className="text-[10px] text-gray-400 font-mono">Selected Photos ({files.length}):</p>
                      <div className="flex flex-wrap gap-2">
                        {files.map((file, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-2.5 py-1 text-[10px] text-gray-300 font-mono">
                            <span className="truncate max-w-[120px]">{file.name}</span>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                removeFile(idx);
                              }}
                              className="text-red-400 hover:text-red-300 font-bold"
                            >
                              ×
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-gray-300 uppercase tracking-wider">Service history, modifications, or outstanding dues</label>
                  <textarea
                    name="message"
                    rows={2}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="e.g. Serviced at authorized centers, holds new rear tire, zero outstanding challans..."
                    className="w-full bg-brand-dark/80 border border-white/10 focus:border-brand-cyan/60 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-600 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-teal text-brand-dark font-black text-xs uppercase tracking-widest shadow-md hover:shadow-lg disabled:opacity-50 transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-brand-dark" />
                      <span>Processing Valuation Data...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-brand-dark" />
                      <span>Submit appraisal request</span>
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
