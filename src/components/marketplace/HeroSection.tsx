// src/components/marketplace/HeroSection.tsx

import { HERO_METRICS } from '@/lib/marketplace-data';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div>
        <div className="hero-eyebrow">Live Marketplace</div>
        <h1 className="hero-title">
          Explore the<br />
          <span>Sports Economy.</span>
        </h1>
        <p className="hero-sub">
          Sponsorships, investments, fan experiences, and athlete opportunities
          — all in one ecosystem.
        </p>
      </div>

      <div className="metrics-grid">
        {HERO_METRICS.map((metric) => (
          <div key={metric.label} className="metric-card">
            <div className="metric-value">{metric.value}</div>
            <div className="metric-label">{metric.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
