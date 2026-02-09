'use client';

const projects = [
  {
    title: 'Agentic Insights',
    category: 'AI Dashboard',
    description: 'AI-powered business analytics dashboard with real-time data visualization, reservations management, and intelligent reporting.',
    tags: ['Next.js', 'AI/ML', 'Analytics'],
    color: 'from-sage/20 to-sage/5',
    image: '/portfolio/agentic-insights.jpg',
    url: '/portfolio/agentic-insights',
  },
  {
    title: 'Natura E-Commerce',
    category: 'Online Store',
    description: 'Premium organic skincare e-commerce platform with elegant product showcases, cart system, and seamless checkout experience.',
    tags: ['E-Commerce', 'Tailwind', 'Stripe'],
    color: 'from-wood/30 to-wood/10',
    image: '/portfolio/ecommerce.jpg',
    url: '/portfolio/ecommerce',
  },
  {
    title: 'Titans Battle',
    category: 'Telegram Mini App',
    description: 'Epic turn-based combat game built as a Telegram Mini App. Character collection, gear upgrades, and competitive arena battles.',
    tags: ['Telegram TWA', 'Game Dev', 'Node.js'],
    color: 'from-forest/15 to-forest/5',
    image: '/portfolio/titans-battle.jpg',
    url: '/portfolio/titans-battle',
  },
  {
    title: 'OrderFlow Bot',
    category: 'Telegram Bot',
    description: 'Automated ordering and support system for businesses. Handles orders, answers questions, and manages workflows — all inside Telegram.',
    tags: ['Telegram API', 'Python', 'Automation'],
    color: 'from-sage/20 to-sage/5',
    image: '/portfolio/telegram-bot.jpg',
    url: '/portfolio/telegram-bot',
  },
  {
    title: 'Botion AI Notes',
    category: 'SaaS Landing',
    description: 'Startup landing page for a Botion AI meeting notes product. Clean design with pricing tiers, feature highlights, and conversion-optimized layout.',
    tags: ['React', 'SaaS', 'Landing Page'],
    color: 'from-forest/15 to-forest/5',
    image: '/portfolio/startup-landing.jpg',
    url: '/portfolio/startup-landing',
  },
  {
    title: 'AgentOS Dashboard',
    category: 'Web Application',
    description: 'AI assistant control center with real-time monitoring, conversation management, workflow builder, and knowledge base integration.',
    tags: ['Dashboard', 'WebSocket', 'AI Agents'],
    color: 'from-wood/30 to-wood/10',
    image: '/portfolio/ai-dashboard.jpg',
    url: '/portfolio/ai-dashboard',
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white border border-forest/10 rounded-2xl overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg hover:border-sage"
            >
              {/* Preview area with actual image */}
              <div className="h-48 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform group-hover:scale-105"
                />
                {/* Overlay for better text readability if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              {/* Content */}
              <div className="p-6">
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
