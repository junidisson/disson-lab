'use client';

export function About() {
  return (
    <section id="about" className="min-h-screen py-24 px-6 md:px-10 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-sage mb-4">
            Who we are
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-forest mb-6">
            About Disson Lab
          </h2>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Philosophy */}
          <div>
            <h3 className="font-display text-2xl font-semibold text-forest mb-6">
              Technology inspired by nature
            </h3>
            <div className="space-y-4 text-forest/75 leading-relaxed">
              <p>
                We believe the best digital products grow like living things — organically, 
                sustainably, and in harmony with the people who use them.
              </p>
              <p>
                Our approach combines deep product thinking with technical excellence. 
                We don't just build features; we cultivate solutions that evolve with your business.
              </p>
              <p>
                Every project starts with understanding: your users, your goals, your constraints. 
                From there, we design and develop with intention — no bloat, no unnecessary complexity.
              </p>
            </div>
          </div>

          {/* Right - Values */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center flex-shrink-0">
                <span className="text-xl">🌱</span>
              </div>
              <div>
                <h4 className="font-semibold text-forest mb-1">Grow with purpose</h4>
                <p className="text-sm text-forest/70">Every feature serves a goal. We build what matters and skip the rest.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center flex-shrink-0">
                <span className="text-xl">🌿</span>
              </div>
              <div>
                <h4 className="font-semibold text-forest mb-1">Sustainable by design</h4>
                <p className="text-sm text-forest/70">Clean code, clear architecture. Products that scale without breaking.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center flex-shrink-0">
                <span className="text-xl">🤝</span>
              </div>
              <div>
                <h4 className="font-semibold text-forest mb-1">Partnership, not just service</h4>
                <p className="text-sm text-forest/70">Your success is our metric. We're invested in outcomes, not just outputs.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center flex-shrink-0">
                <span className="text-xl">⚡</span>
              </div>
              <div>
                <h4 className="font-semibold text-forest mb-1">Move fast, stay rooted</h4>
                <p className="text-sm text-forest/70">Agile delivery with solid foundations. Speed without sacrificing quality.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
