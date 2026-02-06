'use client';

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-forest fill-none stroke-[1.5]">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    ),
    title: 'Product Strategy',
    description: 'From seed to roadmap. We define what to build, why it matters to your users, and the fastest path to launch.',
    features: ['Market & user research', 'Product roadmapping', 'Feature scoping & specs', 'Go-to-market planning'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-forest fill-none stroke-[1.5]">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: 'Web Development',
    description: 'Rooted in performance, built to scale. Web applications that users need and businesses grow on.',
    features: ['Web applications & SaaS', 'Landing pages & websites', 'E-commerce solutions', 'API development'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-forest fill-none stroke-[1.5]">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
    ),
    title: 'Telegram Solutions',
    description: 'Bots and Mini Apps that automate, engage, and convert. The most organic way to reach your audience.',
    features: ['Custom Telegram bots', 'Mini Apps (TWA)', 'Payment integrations', 'CRM & automation'],
  },
];

export function Services() {
  return (
    <section id="services" className="min-h-screen py-24 px-6 md:px-10 bg-cream">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-sage mb-4">
            What we do
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-forest mb-5">
            Services
          </h2>
          <p className="text-lg text-forest/70 max-w-xl mx-auto leading-relaxed">
            We nurture ideas into digital products — and measure our success by your growth.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-forest/10 rounded-2xl p-10 transition-all hover:-translate-y-1 hover:shadow-lg hover:border-sage"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sage/15 to-sage/5 flex items-center justify-center mb-6">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-semibold text-forest mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[0.95rem] leading-relaxed text-forest/75 mb-5">
                {service.description}
              </p>

              {/* Features */}
              <ul className="pt-4 border-t border-forest/10 space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="text-sm text-forest/70 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-sage rounded-full flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
