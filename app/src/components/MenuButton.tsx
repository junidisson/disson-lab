'use client';

import { useState, useEffect } from 'react';

export function MenuButton() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      {/* Menu button - top right */}
      <button 
        className="fixed top-7 right-7 z-50 w-8 h-6 flex flex-col justify-between cursor-pointer group"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
      >
        <span className={`block w-full h-[3px] bg-forest rounded-sm transition-all duration-300 shadow-[0_0_0_1.5px_var(--color-cream),0_0_0_2.5px_var(--color-forest)] ${isOpen ? 'rotate-45 translate-y-[10px]' : ''}`} />
        <span className={`block w-full h-[3px] bg-forest rounded-sm transition-all duration-300 shadow-[0_0_0_1.5px_var(--color-cream),0_0_0_2.5px_var(--color-forest)] ${isOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-full h-[3px] bg-forest rounded-sm transition-all duration-300 shadow-[0_0_0_1.5px_var(--color-cream),0_0_0_2.5px_var(--color-forest)] ${isOpen ? '-rotate-45 -translate-y-[10px]' : ''}`} />
      </button>

      {/* Backdrop */}
      <div 
        className={`fixed inset-0 z-30 bg-forest/20 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Right side panel */}
      <div 
        className={`fixed top-0 right-0 z-40 h-full w-72 bg-cream/98 backdrop-blur-md shadow-2xl transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <nav className="flex flex-col gap-6 pt-24 px-10">
          <a 
            href="#about" 
            onClick={() => setIsOpen(false)}
            className="text-xl font-display text-forest hover:text-sage transition-colors"
          >
            About
          </a>
          <a 
            href="#services" 
            onClick={() => setIsOpen(false)}
            className="text-xl font-display text-forest hover:text-sage transition-colors"
          >
            Services
          </a>
          <a 
            href="#portfolio" 
            onClick={() => setIsOpen(false)}
            className="text-xl font-display text-forest hover:text-sage transition-colors"
          >
            Portfolio
          </a>
          <a 
            href="#contact" 
            onClick={() => setIsOpen(false)}
            className="text-xl font-display text-forest hover:text-sage transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </>
  );
}
