// src/components/advisory/AdvisoryImpact.tsx

import { IMPACT_STATS } from '@/lib/advisory-data';

export default function AdvisoryImpact() {
  return (
    <section className="adv-impact" id="adv-impact">
      <div className="adv-impact-layout">
        <div className="adv-impact-left">
          <p className="adv-section-label">The Impact</p>
          <h2 className="adv-section-title">
            Real Partners.<br />Real Results.
          </h2>
          <p>
            We've helped federations, leagues, clubs, brands and investors unlock value
            and achieve commercial success.
          </p>
          <a href="#" className="adv-btn-outline-green">
            View Case Studies <span>→</span>
          </a>
        </div>

        <div className="adv-stats">
          {IMPACT_STATS.map((stat) => (
            <div key={stat.label} className="adv-stat">
              <div className="adv-stat-num">
                {stat.value}<span>{stat.suffix}</span>
              </div>
              <p className="adv-stat-label">{stat.label}</p>
              <p className="adv-stat-desc">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
