'use client';

import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with Telegram bot
    console.log('Form submitted:', formData);
    alert('Thanks! We\'ll get back to you soon.');
  };

  return (
    <section id="contact" className="min-h-screen py-24 px-6 md:px-10 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-sage mb-4">
            Get in touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-forest mb-5">
            Start a project
          </h2>
          <p className="text-lg text-forest/70 max-w-xl mx-auto leading-relaxed">
            Tell us about your idea. We'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left - Contact Info */}
          <div>
            <h3 className="font-display text-2xl font-semibold text-forest mb-6">
              Let's grow something together
            </h3>
            <p className="text-forest/70 leading-relaxed mb-8">
              Whether you have a clear vision or just a seed of an idea, we're here to help 
              you cultivate it into something real.
            </p>

            <div className="space-y-6">
              <a 
                href="mailto:hello@dissonlab.com" 
                className="flex items-center gap-4 text-forest hover:text-sage transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <span>hello@dissonlab.com</span>
              </a>

              <a 
                href="https://t.me/dissonlab" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-forest hover:text-sage transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                  </svg>
                </div>
                <span>@dissonlab</span>
              </a>
            </div>
          </div>

          {/* Right - Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-forest/20 bg-transparent text-forest placeholder:text-forest/40 focus:outline-none focus:border-sage transition-colors"
              />
              <input
                type="email"
                placeholder="Email address"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-forest/20 bg-transparent text-forest placeholder:text-forest/40 focus:outline-none focus:border-sage transition-colors"
              />
            </div>

            <select
              required
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-forest/20 bg-transparent text-forest focus:outline-none focus:border-sage transition-colors"
            >
              <option value="" disabled>What do you need?</option>
              <option value="strategy">Product Strategy</option>
              <option value="web">Web Development</option>
              <option value="telegram">Telegram Solutions</option>
              <option value="other">Something else</option>
            </select>

            <textarea
              placeholder="Tell us about your project..."
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-forest/20 bg-transparent text-forest placeholder:text-forest/40 focus:outline-none focus:border-sage transition-colors resize-none"
            />

            <button
              type="submit"
              className="w-full px-8 py-4 bg-forest text-cream rounded-full font-medium transition-all hover:bg-forest/90"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
