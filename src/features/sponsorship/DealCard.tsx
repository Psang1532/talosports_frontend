'use client';

// src/features/sponsorship/DealCard.tsx

import { useState } from 'react';
import type { DealCard as DealCardType } from '@/types/marketplace';

const BADGE_CLASSES: Record<string, string> = {
  open: 'badge badge-open',
  trending: 'badge badge-trending',
  featured: 'badge badge-featured',
  new: 'badge badge-new',
  closing: 'badge badge-closing',
};

interface DealCardProps {
  deal: DealCardType;
}

export default function DealCard({ deal }: DealCardProps) {
  const [saved, setSaved] = useState(false);

  return (
    <div className="deal-card">
      <div className="card-header">
        <div className="deal-type">{deal.type}</div>
        <div className="card-badges">
          {deal.badges.map((badge) => (
            <span key={badge.label} className={BADGE_CLASSES[badge.variant] ?? 'badge'}>
              {badge.label}
            </span>
          ))}
        </div>
      </div>

      <div className="card-body">
        <div className="athlete-row">
          <div
            className="athlete-avatar"
            style={{ background: deal.avatarGradient ?? 'linear-gradient(135deg, #0d1b2a 0%, #e8a020 100%)' }}
          >
            {deal.avatarInitials}
          </div>
          <div className="athlete-info">
            <div className="name">{deal.name}</div>
            <div className="meta">
              {deal.location}&nbsp;·&nbsp;{deal.description}
            </div>
          </div>
        </div>

        <div className="asking-label">Asking</div>
        <div className="asking-price">
          {deal.asking} / {deal.period}
        </div>

        <div className="stats-row">
          {deal.stats.map((stat) => (
            <div key={stat} className="stat-pill">
              {stat}
            </div>
          ))}
        </div>

        <div className="card-meta-row">
          <div className="card-meta-item">
            {deal.negotiations > 0
              ? `${deal.negotiations} brand${deal.negotiations > 1 ? 's' : ''} in negotiation`
              : 'No active negotiations'}
          </div>
          <div className="card-meta-item">Closes in {deal.closesIn}</div>
        </div>

        <div className="tags-row">
          {deal.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="card-actions">
          <button
            className="btn-save"
            onClick={() => setSaved((s) => !s)}
            style={{
              borderColor: saved ? '#22c55e' : undefined,
              color: saved ? '#16a34a' : undefined,
            }}
          >
            {saved ? '✓ Saved' : 'Save'}
          </button>
          <button className="btn-view">View Deal</button>
        </div>
      </div>
    </div>
  );
}
