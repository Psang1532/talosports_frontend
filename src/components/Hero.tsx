'use client'

import Link from 'next/link'
import LiveFeed from './LiveFeed'

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-ghost">TALO</div>

      <div className="hero-content">
        <div className="hero-eyebrow-wrap">
          <div className="live-badge">
            <span className="live-dot" />
            Live Exchange
          </div>
        </div>

        <h1>
          Central Exchange for<br />
          <span>African Sports</span>
        </h1>
        <p className="hero-sub">
          One platform connecting athletes, investors, fans, clubs and the diaspora.
          Invest, sponsor, ticket, trade and monetise — all in real time.
        </p>
        <div className="hero-actions">
          <Link href="/register" className="btn btn-primary">Join the Exchange</Link>
          <a
            href="/#marketplace"
            className="btn btn-ghost"
          >
            Explore Marketplace
          </a>
        </div>
      </div>

      <LiveFeed />

      <div className="scroll-hint">
        <div className="scroll-ring">
          <div className="scroll-dot" />
        </div>
      </div>
    </section>
  )
}
