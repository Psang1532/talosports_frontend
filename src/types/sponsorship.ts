// src/types/sponsorship.ts

export type AthleteStatus = 'Free Agent' | 'Open to Offers' | 'Contracted';

export interface Athlete {
  id: string;
  name: string;
  sport: Sport;
  engagementRate: number; // percentage, e.g. 8.7
  verified: boolean;
  status: AthleteStatus;
  interestedBrands: string[];
  region: string;
}

export type Sport = 'Marathon' | 'Soccer' | 'Rugby' | 'Sprint' | 'Boxing';

export interface Brand {
  id: string;
  name: string;
  color: string; // hex for dot indicator
}

export interface SponsorshipDeal {
  id: string;
  brand: string;
  category: string;
  title: string;
  sport: string;
  region: string;
  duration: string;
  minEngagementRate?: number; // percentage
  requiresVerified: boolean;
  escrowProtected: boolean;
}

export interface FinancialProduct {
  id: string;
  icon: string; // lucide icon name
  title: string;
  description: string;
  partner?: string;
  featured?: boolean;
  pendingConfirmation?: boolean;
}

export interface TalentFilters {
  sport: Sport | '';
  status: AthleteStatus | '';
  verifiedOnly: boolean;
}