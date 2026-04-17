export default function WalletStrip() {
  return (
    <section className="wallet-strip">
      <div className="wallet-grid">

        {/* Demo wallet card */}
        <div className="wallet-card-demo">
          <div className="wallet-demo-top">
            <div className="wallet-demo-logo">TALO</div>
            <div className="wallet-demo-chip" />
          </div>
          <div className="wallet-demo-balance">
            <div className="wallet-demo-bal-lbl">Athlete Wallet Balance</div>
            <div className="wallet-demo-bal-num">KES 284,500</div>
            <div className="wallet-demo-bal-sub">≈ $2,196 USD · Updated live</div>
          </div>
          <div className="wallet-demo-txns">
            {[
              { label: 'Safaricom Sponsorship Q1', amount: '+KES 120,000', dir: 'in' },
              { label: 'Merchandise sales',         amount: '+KES 48,200',  dir: 'in' },
              { label: 'Transfer fee share',         amount: '+KES 116,300', dir: 'in' },
              { label: 'Platform fee 2.5%',          amount: '−KES 7,115',  dir: 'out' },
            ].map((t) => (
              <div key={t.label} className="wallet-txn">
                <span className="wallet-txn-label">{t.label}</span>
                <span className={`wallet-txn-amount ${t.dir}`}>{t.amount}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Feature list */}
        <div>
          <p className="sec-label" style={{ color: 'var(--gold)' }}>Athlete Monetisation</p>
          <h2 className="sec-title light" style={{ color: '#fff', marginBottom: '0.8rem' }}>
            Your wallet.<br /><em>Your earnings.</em>
          </h2>
          <p className="sec-sub light" style={{ marginBottom: '2.5rem' }}>
            Every deal, sponsorship, ticket and merchandise sale flows directly into your TALO
            wallet — with instant mobile-money payouts across Africa.
          </p>
          <div className="wallet-features">
            {[
              { title: 'Multi-currency Wallet',         desc: 'Hold KES, NGN, GHS, ZAR, USD and more. Exchange rates updated in real time.' },
              { title: 'M-Pesa & Mobile Money Payouts', desc: 'Withdraw to M-Pesa, Airtel Money, MTN Mobile Money or your bank in minutes.' },
              { title: 'Revenue Streams Dashboard',     desc: 'Track sponsorship income, transfer fees, merchandise and fan revenue in one view.' },
              { title: 'Escrow-Protected Deals',        desc: 'All deals are held in escrow until conditions are met. No more late payments.' },
            ].map((f) => (
              <div key={f.title} className="wallet-feat">
                <div>
                  <div className="wallet-feat-title">{f.title}</div>
                  <div className="wallet-feat-desc">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}