export type Role = 'talent' | 'investor' | 'club'

export interface FeedMessage {
  type: 'invest' | 'sponsor' | 'ticket' | 'transfer'
  label: string
  body: string
  meta: string
}

export interface StatItem {
  num: string
  label: string
}

export interface AthleteCard {
  initials: string
  flag: string
  name: string
  sport: string
  statusClass: 'status-free' | 'status-active' | 'status-seeking'
  statusLabel: string
  valLabel: string
  valAmount: string
}

export interface MarketCard {
  typeClass: string
  typeLabel: string
  badgeClass: string
  badgeLabel: string
  title: string
  sub: string
  valueLbl: string
  value: string
  progressWidth?: string
  progressNote?: string
  tags: string[]
  ctaLabel: string
}