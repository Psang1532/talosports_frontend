const badges = [
  { icon: '💰', title: 'Investments & Sponsorships', desc: 'Live deal flow across 54 African nations' },
  { icon: '👛', title: 'Athlete Wallet & Payouts',    desc: 'M-Pesa, mobile money & SWIFT — same day' },
  { icon: '🎟️', title: 'Tickets, Merch & Memberships', desc: 'Fan economy built into every club profile' },
]

export default function AuthPanelLeft() {
  return (
    <div className="auth-panel-left">
      <div className="auth-brand-logo">TALO</div>
      <div className="auth-brand-sub">Central Exchange for African Sports</div>
      <div className="auth-brand-quote">
        &ldquo;The <span>360° economy</span> of African sport — athletes, investors, fans,
        clubs and diaspora, all in one exchange.&rdquo;
      </div>
      <div className="auth-panel-badges">
        {badges.map((b) => (
          <div key={b.title} className="auth-badge">
            <div className="auth-badge-icon">{b.icon}</div>
            <div className="auth-badge-txt">
              <strong>{b.title}</strong>
              {b.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
