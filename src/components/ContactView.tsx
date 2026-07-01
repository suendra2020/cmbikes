import { MapPin, Phone, Clock, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";
import HeroBanner from "./HeroBanner";

interface ContactViewProps {
  onOpenEnquiry?: (subject?: string, bikeName?: string) => void;
}

export default function ContactView({ onOpenEnquiry }: ContactViewProps) {
  return (
    <div id="contact-view" className="space-y-16 pb-16">
      {/* 1. Hero */}
      <HeroBanner
        title="CONTACT SHOWROOM"
        subtitle="Walk right in. Experience the absolute velocity of our showroom floor first-hand or transmit a digital inquiry below for swift assistance."
        backgroundImage="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=1600&auto=format&fit=crop&q=80"
        category="Connect with Us"
      />

      {/* 2. Double Column Layout: Showroom metadata vs Enquiry Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        
        {/* Left Columns - Contact Metadata (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
          
          <div className="space-y-3">
            <div className="flex items-center gap-1.5 text-xs font-mono tracking-widest text-brand-cyan uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>HQ Coordinates</span>
            </div>
            <h2 className="font-display font-black text-3xl text-white uppercase tracking-tight">
              CM BIKES SHOWROOM BENGALURU
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light">
              Our flagship multi-brand facility is located at the center of Channasandra near Whitefield. Ample parking space and custom tracks for test drives are available.
            </p>
          </div>

          {/* Cards list */}
          <div className="space-y-4">
            
            {/* Address */}
            <div className="glass-panel p-5 rounded-xl border-white/5 flex gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 shrink-0 mt-0.5">
                <MapPin className="w-5 h-5 text-brand-cyan" />
              </div>
              <div className="space-y-1.5">
                <h4 className="text-white font-display font-bold text-xs uppercase tracking-wide font-mono">Showroom Location</h4>
                <p className="text-gray-400 text-xs leading-relaxed font-light">
                  CM Bikes, Main Road, Channasandra, near Whitefield, Bengaluru, Karnataka 560067
                </p>
              </div>
            </div>

            {/* Hotline & WhatsApp */}
            <div className="glass-panel p-5 rounded-xl border-white/5 flex gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 shrink-0 mt-0.5">
                <Phone className="w-5 h-5 text-brand-cyan" />
              </div>
              <div className="space-y-1.5 flex-1">
                <h4 className="text-white font-display font-bold text-xs uppercase tracking-wide font-mono">Sales & Support Hotline</h4>
                <div className="font-mono text-xs space-y-1">
                  <p className="text-white">Call: <a href="tel:+919900088812" className="hover:text-brand-cyan font-bold">+91 99000 88812</a></p>
                  <p className="text-white">WhatsApp: <a href="https://wa.me/919900088812" target="_blank" rel="noopener noreferrer" className="hover:text-brand-cyan font-bold">+91 99000 88812</a></p>
                </div>
              </div>
            </div>

            {/* Timings */}
            <div className="glass-panel p-5 rounded-xl border-white/5 flex gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 shrink-0 mt-0.5">
                <Clock className="w-5 h-5 text-brand-cyan" />
              </div>
              <div className="space-y-1.5">
                <h4 className="text-white font-display font-bold text-xs uppercase tracking-wide font-mono">Working Showroom Hours</h4>
                <p className="text-gray-300 text-xs font-bold font-sans">
                  9:30 AM – 8:30 PM (Monday to Sunday)
                </p>
                <p className="text-gray-500 text-[10px] leading-relaxed">
                  Open throughout holidays & weekends. Prior booking of superbikes test rides is highly advised to avoid waits.
                </p>
              </div>
            </div>

          </div>

          <div className="flex items-center gap-2 text-[10px] font-mono text-gray-500">
            <ShieldCheck className="w-4 h-4 text-brand-cyan" />
            <span>ISO 9001:2015 Certified Automotive Retailer</span>
          </div>

        </div>

        {/* Right Columns - Contact CTA Panel */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-6 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-gradient-to-br from-brand-dark/80 via-brand-dark/40 to-brand-cyan/[0.02]">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse"></div>
              <span className="text-xs font-mono tracking-widest text-brand-cyan uppercase">VIP Priority Connection Center</span>
            </div>

            <div className="space-y-2">
              <h3 className="font-display font-extrabold text-2xl text-white uppercase tracking-tight">
                Secure Digital Inquiries
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light">
                To guarantee priority queuing and instant routing to our certified superbike specialists, all showroom enquiries, loan requests, and test-ride bookings are managed through our secure modal intake system.
              </p>
            </div>

            {/* Quick stats/assurances */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                { title: "30-Min Call Response", desc: "Relationship manager allocated immediately." },
                { title: "Direct WhatsApp Line", desc: "Full digital brochures sent to your screen." },
                { title: "Priority Slot Booking", desc: "Skip showroom queues on your scheduled day." },
                { title: "Secure Encrypted", desc: "Your contact details are kept strictly private." }
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

            {/* Huge primary launch button */}
            <button
              onClick={() => {
                if (onOpenEnquiry) {
                  onOpenEnquiry("General Showroom Enquiry", "");
                }
              }}
              className="w-full relative overflow-hidden group py-4 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-teal text-brand-dark font-extrabold text-sm uppercase tracking-wider shadow-[0_4px_25px_rgba(0,176,255,0.35)] hover:shadow-[0_4px_35px_rgba(0,176,255,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 mt-4 animate-pulse-slow"
            >
              <span>Launch Secure Intake Form</span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            </button>

            <p className="text-[10px] text-gray-500 text-center font-mono">
              🔒 256-bit SSL Data Security Protocol • Multi-Brand Bengaluru HQ.
            </p>
          </div>
        </div>

      </section>

      {/* 3. Full-width embedded Google Map frame */}
      <section className="w-full h-[450px] relative border-y border-white/5">
        <iframe
          title="CM Bikes Channasandra location mapping"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15552.128795555776!2d77.74712079999999!3d12.9698748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11f9712bf39b%3A0xc6cb1bb6f4f291bd!2sChannasandra%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1711234567890!5m2!1sen!2sin"
          className="absolute inset-0 w-full h-full border-0 grayscale invert opacity-75 contrast-125 focus:outline-none"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}
