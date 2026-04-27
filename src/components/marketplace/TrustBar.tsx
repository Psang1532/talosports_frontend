// src/components/marketplace/TrustBar.tsx

const TRUST_ITEMS = [
  {
    icon: '✓',
    title: 'Verified & Secure',
    desc: 'All opportunities are verified for authenticity and safety.',
  },
  {
    icon: '◎',
    title: 'Transparent Deals',
    desc: 'Real-time updates, bidding activity, and clear timelines.',
  },
  {
    icon: '◉',
    title: 'Built for Impact',
    desc: 'Empowering athletes, brands, fans, and communities.',
  },
  {
    icon: '⊕',
    title: 'Global Reach',
    desc: 'Connecting Africa to the global sports economy.',
  },
];

export default function TrustBar() {
  return (
    <div className="trust-bar">
      {TRUST_ITEMS.map((item) => (
        <div key={item.title} className="trust-item">
          <div className="trust-icon">{item.icon}</div>
          <div>
            <div className="trust-title">{item.title}</div>
            <div className="trust-desc">{item.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
