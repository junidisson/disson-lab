'use client';

import { useState } from 'react';

export function MenuButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Menu button - top right */}
      <button 
        className="fixed top-7 right-7 z-50 w-8 h-6 flex flex-col justify-between cursor-pointer group"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
      >
        <span className="block w-full h-[3px] bg-forest rounded-sm transition-all shadow-[0_0_0_1.5px_var(--color-cream),0_0_0_2.5px_var(--color-forest)] group-hover:bg-sage" />
        <span className="block w-full h-[3px] bg-forest rounded-sm transition-all shadow-[0_0_0_1.5px_var(--color-cream),0_0_0_2.5px_var(--color-forest)] group-hover:bg-sage" />
        <span className="block w-full h-[3px] bg-forest rounded-sm transition-all shadow-[0_0_0_1.5px_var(--color-cream),0_0_0_2.5px_var(--color-forest)] group-hover:bg-sage" />
      </button>

      {/* Menu overlay (TODO: implement full menu) */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-cream/95 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setIsOpen(false)}
        >
          <nav className="flex flex-col gap-8 text-center">
            <a href="#about" className="text-2xl font-display text-forest hover:text-sage transition-colors">About</a>
            <a href="#services" className="text-2xl font-display text-forest hover:text-sage transition-colors">Services</a>
            <a href="#portfolio" className="text-2xl font-display text-forest hover:text-sage transition-colors">Portfolio</a>
            <a href="#contact" className="text-2xl font-display text-forest hover:text-sage transition-colors">Contact</a>
          </nav>
        </div>
      )}
    </>
  );
}
