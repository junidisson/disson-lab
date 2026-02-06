'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-6 flex justify-between items-center bg-cream/80 backdrop-blur-md">
      <Link href="/" className="font-display text-2xl font-semibold">
        <span className="text-sage">Disson</span>
        <span className="text-forest">Lab</span>
      </Link>
      
      <div className="hidden md:flex items-center gap-8">
        <Link href="#about" className="text-sm font-medium text-forest/80 hover:text-forest transition-colors">
          About
        </Link>
        <Link href="#services" className="text-sm font-medium text-forest/80 hover:text-forest transition-colors">
          Services
        </Link>
        <Link href="#portfolio" className="text-sm font-medium text-forest/80 hover:text-forest transition-colors">
          Portfolio
        </Link>
        <Button 
          asChild
          className="bg-forest hover:bg-forest/90 text-cream rounded-full px-6"
        >
          <Link href="#contact">Contact</Link>
        </Button>
      </div>
    </nav>
  );
}
