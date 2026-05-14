// src/lib/marketplace-data.ts

import type { MarketplaceTab, MetricStat, DealCard } from '@/types/marketplace';

export const MARKETPLACE_TABS: MarketplaceTab[] = [
  { id: 0, label: 'Sponsorships & Endorsements', shortLabel: 'Sponsorships' },
  { id: 1, label: 'Agent Dashboard', shortLabel: 'Agency' },
  { id: 2, label: 'Fan Engagement', shortLabel: 'Fan Engagement' },
  { id: 3, label: 'Sports Data & Intelligence Layer', shortLabel: 'Data & Intel' },
  { id: 4, label: 'Sports Investment & Infrastructure Hub', shortLabel: 'Investment' },
];

export const HERO_METRICS: MetricStat[] = [
  { value: '1,250+', label: 'Active Deals' },
  { value: '3,800+', label: 'Athletes & Clubs' },
  { value: '250K+', label: 'Fan Community' },
  { value: '$24.6M+', label: 'Deal Value Created' },
];

export const TICKER_ITEMS: string[] = [
  'Membership Launch · Gor Mahia FC Fan Club · 890 new members this week',
  'Brand Deal · Adidas Africa x 5 TALO-verified athletes · Announced',
  'New Investment · KES 4.2M into Nairobi FC youth academy',
  'Sponsorship Closed · SportsPesa x Western Bulldogs FC · Confirmed',
  'New Athlete · Amara Diallo · Sprint · Senegal · Verified',
  'Brand Deal · Nike East Africa x 3 athletes · In Negotiation',
];

export const MOCK_DEALS: DealCard[] = [
  {
    id: '1',
    type: 'Athlete Sponsorship',
    badges: [
      { label: 'Open', variant: 'open' },
      { label: 'Trending', variant: 'trending' },
    ],
    avatarInitials: 'WC',
    avatarGradient: 'linear-gradient(135deg, #0d1b2a 0%, #e8a020 100%)',
    name: 'Wanjiru Chepkemoi — Athletics',
    sport: 'Athletics',
    location: 'Kenya',
    description: 'Long-distance runner · 2× national champion',
    asking: '$48,000',
    period: 'year',
    stats: ['↑ High brand demand', '120K Audience Reach'],
    negotiations: 3,
    closesIn: '48h',
    tags: ['Athletics', 'Kenya', 'Endorsement'],
  },
  {
    id: '2',
    type: 'Club Partnership',
    badges: [{ label: 'Open', variant: 'open' }],
    avatarInitials: 'AL',
    avatarGradient: 'linear-gradient(135deg, #1a3a1a 0%, #f4a500 100%)',
    name: 'Accra Lions FC — Kit Deal',
    sport: 'Football',
    location: 'Ghana',
    description: 'Ghana Premier League · 4,200 match attendees/game',
    asking: '$120,000',
    period: 'season',
    stats: ['↑ High brand demand', '250K Audience Reach'],
    negotiations: 1,
    closesIn: '5d',
    tags: ['Football', 'Ghana', 'Kit'],
  },
  {
    id: '3',
    type: 'Brand Campaign',
    badges: [
      { label: 'Open', variant: 'open' },
      { label: 'Featured', variant: 'featured' },
    ],
    avatarInitials: 'KO',
    avatarGradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
    name: 'Kofi Owusu — Basketball',
    sport: 'Basketball',
    location: 'Nigeria',
    description: 'Professional · Lagos City Ballers · 180K social following',
    asking: '$32,000',
    period: 'campaign',
    stats: ['↑ Rising star', '180K Audience Reach'],
    negotiations: 2,
    closesIn: '7d',
    tags: ['Basketball', 'Nigeria', 'Social'],
  },
  {
    id: '4',
    type: 'Athlete Endorsement',
    badges: [
      { label: 'Closing Soon', variant: 'closing' },
    ],
    avatarInitials: 'AD',
    avatarGradient: 'linear-gradient(135deg, #2d1b69 0%, #e8a020 100%)',
    name: 'Amara Diallo — Sprint',
    sport: 'Athletics',
    location: 'Senegal',
    description: 'National record holder · 100m & 200m',
    asking: '$60,000',
    period: 'year',
    stats: ['↑ International reach', '95K Audience Reach'],
    negotiations: 4,
    closesIn: '24h',
    tags: ['Athletics', 'Senegal', 'Endorsement'],
  },
  {
    id: '5',
    type: 'Club Partnership',
    badges: [{ label: 'New', variant: 'new' }],
    avatarInitials: 'NF',
    avatarGradient: 'linear-gradient(135deg, #003580 0%, #e8a020 100%)',
    name: 'Nairobi FC — Stadium Rights',
    sport: 'Football',
    location: 'Kenya',
    description: 'Kenyan Premier League · 8,000 capacity stadium',
    asking: '$200,000',
    period: 'season',
    stats: ['↑ High visibility', '400K Audience Reach'],
    negotiations: 0,
    closesIn: '30d',
    tags: ['Football', 'Kenya', 'Stadium'],
  },
  {
    id: '6',
    type: 'Athlete Sponsorship',
    badges: [
      { label: 'Open', variant: 'open' },
      { label: 'Trending', variant: 'trending' },
    ],
    avatarInitials: 'ZM',
    avatarGradient: 'linear-gradient(135deg, #0d2b0d 0%, #22c55e 100%)',
    name: 'Zanele Mokoena — Swimming',
    sport: 'Swimming',
    location: 'South Africa',
    description: 'Commonwealth Games medalist · 3× national champion',
    asking: '$28,000',
    period: 'year',
    stats: ['↑ Growing sport', '65K Audience Reach'],
    negotiations: 2,
    closesIn: '14d',
    tags: ['Swimming', 'South Africa', 'Sponsorship'],
  },
];

export const SPORT_OPTIONS = ['All Sports', 'Athletics', 'Football', 'Rugby', 'Golf'];
export const COUNTRY_OPTIONS = ['All Countries', 'Kenya', 'South Africa', 'Tanzania'];
export const DEAL_TYPE_OPTIONS = ['All Types', 'Sponsorship', 'Endorsement', 'Kit Deal', 'Investment', 'Club Partnership'];
export const AUDIENCE_OPTIONS = ['Any', 'Under 50K', '50K – 100K', '100K – 250K', '250K+'];
export const SORT_OPTIONS = [
  { value: 'relevant', label: 'Most Relevant' },
  { value: 'newest', label: 'Newest' },
  { value: 'closing', label: 'Closing Soon' },
  { value: 'highest', label: 'Highest Value' },
  { value: 'competitive', label: 'Most Competitive' },
];