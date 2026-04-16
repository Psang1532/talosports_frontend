'use client'

import { useState } from 'react'
import Link from 'next/link'
import { sponsorshipsData, investmentsData, ticketsData, merchData } from '@/lib/data'
import type { MarketCard } from '@/types'

type Tab = 'sponsorships' | 'investments' | 'tickets' | 'merch'

function MarketCardUI({ card }: { card: MarketCard }) {
  return (
    <div className="market-card">
      <div className="market-card-header">
        <span className={`market-card-type ${card.typeClass}`}>{card.typeLabel}</span>
        <span className={`market-card-badge ${card.badgeClass}`}>{card.badgeLabel}</span>
      </div>
      <div className="market-card-body">
        <div className="market-card-title">{card.title}</div>
        <div className="market-card-sub">{card.sub}</div>
        <div className="market-card-value-lbl">{card.valueLbl}</div>
        <div className="market-card-value">{card.value}</div>
        {card.progressWidth && (
          <div className="market-progress">
            <div className="market-progress-fill" style={{ width: card.progressWidth }} />
          </div>
        )}
        {card.progressNote && (
          <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{card.progressNote}</div>
        )}
        <div className="market-card-footer">
          <div className="market-card-tags">
            {card.tags.map((t) => <span key={t} className="tag">{t}</span>)}
          </div>
          <Link
            href="/register"
            className="btn btn-navy"
            style={{ fontSize: '0.65rem', padding: '0.5rem 1rem' }}
          >
            {card.ctaLabel}
          </Link>
        </div>
      </div>
    </div>
  )
}

const tabs: { id: Tab; label: string; data: MarketCard[] }[] = [
  { id: 'sponsorships', label: 'Sponsorships',      data: sponsorshipsData },
  { id: 'investments',  label: 'Investments',        data: investmentsData },
  { id: 'tickets',      label: 'Tickets & Events',   data: ticketsData },
  { id: 'merch',        label: 'Merch & Memberships',data: merchData },
]

export default function MarketplaceSection() {
  const [activeTab, setActiveTab] = useState<Tab>('sponsorships')

  return (
    <section className="market-section" id="marketplace">
      <div className="inner">
        <p className="sec-label">Live Marketplace</p>
        <h2 className="sec-title">Browse the <em>exchange</em>.</h2>
        <p className="sec-sub">Open deals, live sponsorships, ticket sales and merchandise — visible to all. Participate after joining.</p>

        <div className="market-tabs">
          {tabs.map((t) => (
            <div
              key={t.id}
              className={`market-tab${activeTab === t.id ? ' active' : ''}`}
              onClick={() => setActiveTab(t.id)}
            >
              {t.label}
            </div>
          ))}
        </div>

        {tabs.map((t) => (
          <div key={t.id} className={`market-panel${activeTab === t.id ? ' active' : ''}`}>
            {t.data.map((card, i) => <MarketCardUI key={i} card={card} />)}
          </div>
        ))}
      </div>
    </section>
  )
}
