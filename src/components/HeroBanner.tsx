import { Sparkles } from "lucide-react";

interface HeroBannerProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  category?: string;
}

export default function HeroBanner({
  title,
  subtitle,
  backgroundImage = "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=1600&auto=format&fit=crop&q=80",
  category
}: HeroBannerProps) {
  return (
    <div className="relative h-[45vh] min-h-[350px] w-full flex items-center overflow-hidden bg-brand-dark pt-4 md:pt-0">
      {/* Background Image with elegant dark parallax cover & overlay gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover object-center opacity-40 scale-105 animate-pulse-slow"
          loading="eager"
        />
        {/* Radial and Linear gradient masks */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-transparent to-brand-dark/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,176,255,0.05)_0%,transparent_70%)]"></div>
      </div>

      {/* Grid Pattern overlay for tech aesthetic */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="max-w-3xl space-y-4">
          
          {/* Tag */}
          {category && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cyan/15 border border-brand-cyan/30 text-brand-cyan text-xs font-mono font-bold tracking-widest uppercase animate-pulse">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{category}</span>
            </div>
          )}

          {/* Heading */}
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-none uppercase">
            {title}
          </h1>

          {/* Slogan Line Divider */}
          <div className="h-1.5 w-24 bg-gradient-to-r from-brand-cyan to-brand-teal rounded-full"></div>

          {/* Subtitle */}
          <p className="text-gray-300 text-base sm:text-lg md:text-xl font-light tracking-wide max-w-2xl leading-relaxed">
            {subtitle}
          </p>

        </div>
      </div>
    </div>
  );
}
