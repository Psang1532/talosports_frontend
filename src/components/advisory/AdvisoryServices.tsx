// src/components/advisory/AdvisoryServices.tsx

import { ADVISORY_SERVICES } from '@/lib/advisory-data';
import {
  IconStrategy,
  IconPartnership,
  IconValuation,
  IconRights,
  IconMarket,
  IconOperations,
} from '@/components/advisory/AdvisoryIcons';

const SERVICE_ICONS = {
  strategy:    IconStrategy,
  partnership: IconPartnership,
  valuation:   IconValuation,
  rights:      IconRights,
  market:      IconMarket,
  operations:  IconOperations,
};

export default function AdvisoryServices() {
  return (
    <section className="adv-services" id="adv-services">
      <div className="adv-services-layout">
        <div className="adv-services-left">
          <p className="adv-section-label">What We Do</p>
          <h2 className="adv-section-title">
            Strategy.<br />Structure.<br />Commercial Results.
          </h2>
          <p>
            We combine deep sports industry expertise with data-driven insight and a
            hands-on commercial approach to help our partners win.
          </p>
          <a href="#" className="adv-btn-dark">
            See How We Work <span>→</span>
          </a>
        </div>

        <div className="adv-services-grid">
          {ADVISORY_SERVICES.map((service) => {
            const Icon = SERVICE_ICONS[service.icon];
            return (
              <div key={service.id} className="adv-service-card">
                <Icon className="adv-service-icon" />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
