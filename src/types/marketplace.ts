// src/types/marketplace.ts

export type TabId = 0 | 1 | 2 | 3 | 4;

export interface MarketplaceTab {
  id: TabId;
  label: string;
  shortLabel: string;
}

export interface MetricStat {
  value: string;
  label: string;
}

export interface DealBadge {
  label: string;
  variant: 'open' | 'trending' | 'featured' | 'new' | 'closing';
}

export interface DealCard {
  id: string;
  type: string;
  badges: DealBadge[];
  avatarInitials: string;
  avatarGradient?: string;
  name: string;
  sport: string;
  location: string;
  description: string;
  asking: string;
  period: string;
  stats: string[];
  negotiations: number;
  closesIn: string;
  tags: string[];
}

export interface FilterState {
  sport: string;
  country: string;
  budgetMin: string;
  budgetMax: string;
  dealType: string;
  audienceReach: string;
}

export type SortOption = 'relevant' | 'newest' | 'closing' | 'highest' | 'competitive';
export type ViewMode = 'list' ;
export type SubTab = 'all' | 'athletes' | 'clubs' | 'campaigns' | 'endorsements';