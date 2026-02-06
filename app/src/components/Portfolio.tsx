'use client';

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Application',
    description: 'Full-featured online store with inventory management, payment processing, and analytics dashboard.',
    tags: ['Next.js', 'Stripe', 'PostgreSQL'],
    color: 'from-sage/20 to-sage/5',
  },
  {
    title: 'Delivery Bot',
    category: 'Telegram Bot',
    description: 'Automated ordering system for restaurant chain. Handles 500+ daily orders with payment integration.',
    tags: ['Python', 'Telegram API', 'Redis'],
    color: 'from-forest/15 to-forest/5',
  },
  {
    title: 'SaaS Dashboard',
    category: 'Web Application',
    description: 'Real-time analytics platform for e-commerce businesses. Custom charts, reports, and alerts.',
    tags: ['React', 'D3.js', 'WebSocket'],
    color: 'from-wood/30 to-wood/10',
  },
  {
    title: 'Booking Mini App',
    category: 'Telegram Mini App',
    description: 'Appointment scheduling system integrated with Google Calendar and payment processing.',
    tags: ['TWA', 'Node.js', 'Calendar API'],
    color: 'from-sage/20 to-sage/5',
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="min-h-screen py-24 px-6 md:px-10 bg-cream">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-sage mb-4">
            Our work
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-forest mb-5">
            Portfolio
          </h2>
          <p className="text-lg text-forest/70 max-w-xl mx-auto leading-relaxed">
            A selection of projects we've nurtured from concept to launch.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white border border-forest/10 rounded-2xl overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg hover:border-sage"
            >
              {/* Preview area */}
              <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                <span className="text-forest/40 font-display text-lg">{project.category}</span>
              </div>
              
              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium text-sage uppercase tracking-wide">
                    {project.category}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold text-forest mb-3">
                  {project.title}
                </h3>
                <p className="text-sm text-forest/70 leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-cream border border-forest/10 text-forest/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-forest/60 mb-4">Have a project in mind?</p>
          <a 
            href="#contact" 
            className="inline-block px-8 py-4 border-[1.5px] border-forest text-forest rounded-full font-medium transition-all hover:bg-forest hover:text-cream"
          >
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
}
