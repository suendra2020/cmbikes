import { Award, ShieldCheck, HeartHandshake, History, Target, Eye, Users, ChevronRight } from "lucide-react";
import HeroBanner from "./HeroBanner";

interface AboutViewProps {
  setCurrentTab: (tab: string) => void;
}

export default function AboutView({ setCurrentTab }: AboutViewProps) {
  const coreValues = [
    {
      icon: ShieldCheck,
      title: "Unyielding Integrity",
      desc: "Every motorcycle passes a rigorous 120-point diagnostic check. No odometer tampering, no hidden accidental records — just pristine mechanical perfection."
    },
    {
      icon: Award,
      title: "Curated Excellence",
      desc: "We pick only the finest superbikes and certified commuter options. We stock machines we would proudly ride ourselves, representing true class."
    },
    {
      icon: HeartHandshake,
      title: "Rider First Support",
      desc: "From customizable low-interest EMI tenures to full RTO assistance and hassle-free cashless insurance claim routing, we take care of the heavy lifting."
    }
  ];

  const milestones = [
    { year: "2018", title: "Showroom Inception", desc: "Started with a modest curation of 15 certified premium motorcycles in Channasandra, Bangalore." },
    { year: "2020", title: "Superbike Expansion", desc: "Inaugurated our dedicated superbike division, introducing Kawasaki, Ducati, and Triumph custom delivery pipelines." },
    { year: "2022", title: "Digitized Valuation", desc: "Launched Bengaluru's first instant multi-brand valuation system, boosting customer exchanges." },
    { year: "2024", title: "Elite EV Partnership", desc: "Collaborated with premium high-speed EV developers like Ather, offering smart green speed solutions." },
    { year: "2026", title: "The Sovereign Hub", desc: "Celebrating over 4,850+ successful handovers, standing strong as Channasandra's ultimate motorcycle dealership." }
  ];

  return (
    <div id="about-view" className="space-y-24 pb-16">
      
      {/* 1. Hero Banner */}
      <HeroBanner
        title="OUR HERITAGE"
        subtitle="Fueling motorcycle passions in Bengaluru with absolute transparency, mechanical certification, and premium class."
        backgroundImage="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=1600&auto=format&fit=crop&q=80"
        category="About CM Bikes"
      />

      {/* 2. Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative order-last lg:order-first">
          <div className="absolute inset-0 bg-brand-cyan/10 rounded-2xl filter blur-[40px] opacity-25"></div>
          <div className="relative glass-panel rounded-2xl p-3 border-white/5 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1486006920555-c77dce18193b?w=800&auto=format&fit=crop&q=80"
              alt="Motorcycle showroom mechanical bay"
              className="w-full h-auto rounded-xl object-cover"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="h-1 w-12 bg-brand-cyan"></div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">
            THE CHANNASANDRA LANDMARK OF RIDING ENTHUSIASTS
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed font-light">
            Founded by a dedicated team of racers, long-distance touring specialists, and financial technicians, <span className="text-brand-cyan font-bold">CM Bikes</span> was born out of a single frustration: the lack of trust and premium care in the pre-owned and multi-brand motorcycle market in Bangalore.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed font-light">
            We realized that purchasing a motorcycle is not just a commercial transaction; it is the realization of a lifelong dream. Whether it's a first college commuter bike or a 1000cc track superbike, every buyer deserves the same red-carpet luxury treatment, authentic mechanical guarantees, and fast documentation support.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed font-light">
            Today, housed in our state-of-the-art facility in Channasandra, we offer a sanctuary for riders. A place where you can browse the world's finest machines under one roof, talk with experts who understand torque curves, and secure financial support with leading lenders instantly.
          </p>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="glass-panel rounded-2xl p-8 sm:p-10 border-white/5 space-y-6 hover:border-brand-cyan/20 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 flex items-center justify-center border border-brand-cyan/30 shadow-[0_0_15px_rgba(0,176,255,0.1)]">
              <Target className="w-6 h-6 text-brand-cyan" />
            </div>
            <h3 className="font-display font-bold text-2xl text-white uppercase tracking-tight">Our Mission</h3>
            <p className="text-gray-300 text-sm leading-relaxed font-light">
              To deliver unmatched value, absolute safety, and mechanical excellence to Bengaluru's motorcycle community. We strive to offer an honest, pressure-free showroom environment where technology, finance, and automotive passion combine to create seamless handovers.
            </p>
          </div>

          {/* Vision */}
          <div className="glass-panel rounded-2xl p-8 sm:p-10 border-white/5 space-y-6 hover:border-brand-cyan/20 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-brand-teal/10 flex items-center justify-center border border-brand-teal/30 shadow-[0_0_15px_rgba(0,229,255,0.1)]">
              <Eye className="w-6 h-6 text-brand-teal" />
            </div>
            <h3 className="font-display font-bold text-2xl text-white uppercase tracking-tight">Our Vision</h3>
            <p className="text-gray-300 text-sm leading-relaxed font-light">
              To become Karnataka's most trusted, digitally-integrated premium motorcycle dealer ecosystem. We envision a future where exchanging, financing, insuring, and maintaining high-performance machines is as smooth and fast as a twist of the throttle.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-cyan">Foundational Pillars</span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">
            THE VALUES THAT SEPARATE US FROM THE MASSES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreValues.map((val, idx) => (
            <div key={idx} className="glass-panel p-6 sm:p-8 rounded-2xl border-white/5 hover:border-brand-cyan/20 hover:scale-[1.02] transition-all duration-300 space-y-4 text-center sm:text-left">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 mx-auto sm:mx-0">
                <val.icon className="w-5 h-5 text-brand-cyan" />
              </div>
              <h4 className="text-white font-display font-bold text-lg uppercase tracking-tight">{val.title}</h4>
              <p className="text-gray-400 text-xs leading-relaxed font-light">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Business Timeline / Milestones */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="space-y-2 text-center md:text-left">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-cyan">The Growth Curve</span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">
            OUR HISTORICAL RIDE IN BENGALURU
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {milestones.map((milestone, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-2xl border-white/5 hover:border-brand-cyan/20 transition-all duration-300 space-y-4">
              <span className="inline-block font-mono text-xs font-bold text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/25 px-2.5 py-0.5 rounded-full">
                {milestone.year}
              </span>
              <h4 className="text-white font-display font-bold text-base uppercase tracking-tight">{milestone.title}</h4>
              <p className="text-gray-400 text-xs leading-relaxed font-light">{milestone.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Professional Team & Showroom Staff */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-cyan">Our Crew</span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">
            MEET THE SUPERBIKE RELATIONSHIP EXPERTS
          </h2>
          <p className="text-gray-400 text-sm font-light">
            A dynamic group of engineers, certified RTO liaisons, and passionate superbikers dedicated to serving you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Surendra V.", role: "Founder & General Manager", desc: "Long-distance cruiser enthusiast with over 15 years in motorcycle distribution.", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80" },
            { name: "Suresh Gowda", role: "Superbike Sales Consultant", desc: "Track-day racer and spec wizard. Knows everything about gear ratios & electronics.", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80" },
            { name: "Amit Reddy", role: "Head of Finance & Evaluations", desc: "Master of low-interest credit lines. Formulates the perfect custom EMI setups.", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300&auto=format&fit=crop&q=80" },
            { name: "Megha Rao", role: "RTO Paperwork & Claims Coordinator", desc: "Our liaison with Bengaluru RTO networks. Cleans up ownership transfers instantly.", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&auto=format&fit=crop&q=80" }
          ].map((crew, idx) => (
            <div key={idx} className="glass-panel p-5 rounded-2xl border-white/5 hover:border-brand-cyan/20 group transition-all duration-300 text-center space-y-4">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto border-2 border-white/10 group-hover:border-brand-cyan transition-colors">
                <img
                  src={crew.avatar}
                  alt={crew.name}
                  className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="space-y-1">
                <h4 className="text-white font-display font-bold text-base uppercase tracking-tight">{crew.name}</h4>
                <p className="text-xs text-brand-cyan font-mono">{crew.role}</p>
              </div>
              <p className="text-gray-400 text-xs font-light leading-relaxed px-2">
                {crew.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Achievements Action Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-2xl p-8 border-brand-cyan/20 text-center space-y-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-1 bg-brand-cyan/10 px-3 py-1 rounded-full text-xs font-mono text-brand-cyan border border-brand-cyan/25 uppercase">
            🏆 Award Winning Dealership
          </div>
          <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
            VOTED BENGALURU'S MOST TRUSTED INDEPENDENT MOTORCYCLE HUB (2025)
          </h3>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-light">
            Our transparent vehicle checkups, instant valuation exchange matrix, and pre-negotiated bank loan rates won us the regional Bangalore Automotive Excellence award. Experience the difference yourself!
          </p>
          <button
            onClick={() => setCurrentTab("contact")}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-brand-cyan to-brand-teal text-brand-dark font-extrabold text-sm uppercase tracking-wider hover:scale-105 transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <span>Speak to our Founders</span>
            <ChevronRight className="w-4 h-4 text-brand-dark" />
          </button>
        </div>
      </section>

    </div>
  );
}
