'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';

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
          <span className="text-sage">Disson</span>
          <span className="text-forest">Lab</span>
        </h1>
        
        <p className="text-lg md:text-xl text-forest/85 tracking-wide mb-12 leading-relaxed">
          Websites. Web apps. Telegram bots.
          <br />
          <span className="font-semibold text-sage">Built in harmony.</span>
        </p>
        
        <Button 
          size="lg" 
          className="bg-forest hover:bg-forest/90 text-cream rounded-full px-8 py-6 text-base font-medium shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
        >
          Start a Project
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-forest/60 animate-bounce">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown className="h-5 w-5" />
      </div>
    </section>
  );
}
