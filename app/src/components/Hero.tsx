'use client';

import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      {/* Background Image */}
      <img
        src="/hero-bg.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-radial from-cream/40 via-transparent to-transparent z-10" />
      
      {/* Content */}
      <div className="relative z-20 max-w-4xl px-6 md:px-10">
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-2">
          <span className="text-sage font-medium">Disson</span>
          <span className="text-forest">Lab</span>
        </h1>
        
        <p className="text-lg md:text-xl text-forest/85 tracking-wide mb-12 leading-relaxed">
          Websites. Web apps. Telegram bots.
          <br />
          <span className="font-semibold text-sage">Grown in harmony.</span>
        </p>
        
        {/* Minimal outline buttons */}
        <div className="flex gap-4 justify-center flex-wrap">
          <Link 
            href="#contact" 
            className="min-w-[180px] px-8 py-4 border-[1.5px] border-forest text-forest rounded-full font-medium transition-all hover:bg-forest hover:text-cream"
          >
            Start a project
          </Link>
          <Link 
            href="#portfolio" 
            className="min-w-[180px] px-8 py-4 border-[1.5px] border-forest text-forest rounded-full font-medium transition-all hover:bg-forest hover:text-cream"
          >
            View our works
          </Link>
        </div>
      </div>
    </section>
  );
}
