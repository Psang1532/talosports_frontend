// src/components/advisory/AdvisoryCtaBanner.tsx

export default function AdvisoryCtaBanner() {
  return (
    <div className="adv-cta-banner">
      <div className="adv-cta-banner-text">
        <h2>
          Let's Build <span>What's Next.</span>
        </h2>
        <p>
          Whether you're looking to grow revenue, forge new partnerships or enter new
          markets — our team is ready to help.
        </p>
      </div>
      <a href="#" className="adv-btn-cta" style={{ fontSize: 14, padding: '14px 32px' }}>
        Start the Conversation <span>→</span>
      </a>
    </div>
  );
}
