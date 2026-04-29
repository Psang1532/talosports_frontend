// src/components/advisory/AdvisoryProcess.tsx

import { PROCESS_STEPS } from '@/lib/advisory-data';
import {
  IconDiscover,
  IconDesign,
  IconConnect,
  IconDeliver,
} from '@/components/advisory/AdvisoryIcons';

const STEP_ICONS = [IconDiscover, IconDesign, IconConnect, IconDeliver];

export default function AdvisoryProcess() {
  return (
    <section className="adv-process" id="adv-process">
      <div className="adv-process-layout">
        <div className="adv-process-left">
          <p className="adv-section-label">How We Work</p>
          <h2 className="adv-section-title">The Active Approach</h2>
          <p>
            We go beyond advising. We act as your partner in the market — connecting
            opportunities, aligning stakeholders and driving deals from strategy to signature.
          </p>
          <a href="#" className="adv-btn-outline-green">
            Our Process <span>→</span>
          </a>
        </div>

        <div className="adv-steps">
          {PROCESS_STEPS.map((step, i) => {
            const Icon = STEP_ICONS[i];
            return (
              <div key={step.number} className="adv-step">
                <div className="adv-step-circle">
                  <Icon className="adv-step-icon" />
                </div>
                <p className="adv-step-num">{step.label}</p>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
