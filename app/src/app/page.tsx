import { MenuButton } from '@/components/MenuButton';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      <MenuButton />
      <Hero />
      <Services />
      
      {/* Placeholder sections */}
      <section id="about" className="min-h-screen flex items-center justify-center bg-white">
        <h2 className="font-display text-4xl text-forest">About — Coming soon</h2>
      </section>
      
      <section id="portfolio" className="min-h-screen flex items-center justify-center bg-cream">
        <h2 className="font-display text-4xl text-forest">Portfolio — Coming soon</h2>
      </section>
      
      <section id="contact" className="min-h-screen flex items-center justify-center bg-white">
        <h2 className="font-display text-4xl text-forest">Contact — Coming soon</h2>
      </section>
    </main>
  );
}
