// src/components/advisory/AdvisoryHero.tsx

import { ADVISORY_PILLARS } from "@/lib/advisory-data";
import {
  IconExcellence,
  IconData,
  IconCommercial,
} from "@/components/advisory/AdvisoryIcons";

const PILLAR_ICONS = {
  excellence: IconExcellence,
  data: IconData,
  commercial: IconCommercial,
};

// Swap this URL for your own image once you have one.
// Attribution: StockCake — free to use licence.
const HERO_IMAGE =
  "https://images.stockcake.com/public/0/7/b/07b67dab-a90c-4cff-819b-c4b27f073b83/partnership-reaches-heights-stockcake.jpg";

export default function AdvisoryHero() {
  return (
    <section className="adv-hero">
      {/* ── BACKGROUND IMAGE ── */}
      <div
        className="adv-hero-bg"
        style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
      />

      {/* ── DARK GRADIENT OVERLAY — keeps text readable ── */}
      <div className="adv-hero-overlay" />

      {/* ── FLOATING CONTENT ── */}
      <div className="adv-hero-content">
        {/* LEFT — eyebrow + title + description */}
        <div className="adv-hero-left">
          <p className="adv-hero-eyebrow fade-up fade-up-1">
            Turning Sports Data Into Commercial Advantage
          </p>
          <h1 className="adv-hero-title fade-up fade-up-2">
            Advisory &amp;
            <br />
            <span>Commercial</span>
            <br />
            Studio
          </h1>
          <p className="adv-hero-desc fade-up fade-up-3">
            The TALO Advisory and Commercial Studio helps,
            brands, investors and institutions unlock value, build partnerships
            and drive growth.
          </p>
        </div>

        {/* TOP RIGHT — pillars */}
        <div className="adv-hero-pillars fade-up fade-up-4">
          {ADVISORY_PILLARS.map((pillar) => {
            const Icon = PILLAR_ICONS[pillar.icon];
            return (
              <div key={pillar.title} className="adv-pillar">
                <Icon className="adv-pillar-icon" />
                <h4>{pillar.title}</h4>
                <p>{pillar.description}</p>
              </div>
            );
          })}
        </div>

        {/* BOTTOM RIGHT — actions */}
        <div className="adv-hero-actions fade-up fade-up-5">
          <a href="#" className="adv-btn-cta">
            Work With Us <span>→</span>
          </a>
          <a href="#adv-services" className="adv-btn-outline">
            Explore Our Services <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
