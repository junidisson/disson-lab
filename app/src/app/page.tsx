import { MenuButton } from '@/components/MenuButton';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { About } from '@/components/About';
import { Portfolio } from '@/components/Portfolio';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      <MenuButton />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 px-6 bg-cream border-t border-forest/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-display text-lg">
            <span className="text-forest">Disson</span>
            <span className="text-sage">Lab</span>
          </div>
          <p className="text-sm text-forest/50">
            © 2026 Disson Lab. Grown in harmony. 🌱
          </p>
        </div>
      </footer>
    </main>
  );
}
