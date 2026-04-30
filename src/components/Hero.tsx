'use client'

import Link from 'next/link'
import LiveFeed from './LiveFeed'

const HERO_IMAGE =
  'https://images.pexels.com/photos/29804436/pexels-photo-29804436/free-photo-of-vibrant-nigerian-sports-fans-in-stadium.jpeg?auto=compress&cs=tinysrgb&w=1920'

export default function HeroSection() {
  return (
    <section className="hero">

      {/* ── BACKGROUND IMAGE ── */}
      <div
        className="hero-bg"
        style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
      />

      {/* ── DARK OVERLAY — keeps text readable ── */}
      <div className="hero-overlay" />

      <div className="hero-ghost">TALO</div>

      <div className="hero-content">
        <div className="hero-eyebrow-wrap">
          <div className="live-badge" />
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
          <Link href="/register" className="btn btn-primary">Register</Link>
          <a href="/marketplace" className="btn btn-ghost">
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
