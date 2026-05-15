// src/lib/sponsorshipdata.ts

import type { Athlete, Brand, SponsorshipDeal, FinancialProduct } from '@/types/sponsorship';

export const BRANDS: Brand[] = [
  { id: 'nike',      name: 'Nike',      color: '#111111' },
  { id: 'bata',      name: 'Bata',      color: '#D62C27' },
  { id: 'nivea',     name: 'Nivea',     color: '#003C8F' },
  { id: 'versaman',  name: 'Versaman',  color: '#F4A900' },
  { id: 'safaricom', name: 'Safaricom', color: '#00A86B' },
  { id: 'cocacola',  name: 'Coca-Cola', color: '#E4002B' },
  { id: 'absa',      name: 'Absa',      color: '#DC0032' },
  { id: 'mtn',       name: 'MTN',       color: '#FF6200' },
];

export const ATHLETES: Athlete[] = [
  {
    id: 'a1',
    name: 'Amara Osei',
    sport: 'Marathon',
    engagementRate: 8.7,
    verified: true,
    status: 'Free Agent',
    interestedBrands: ['Nike', 'Versaman'],
    region: 'Eldoret, KE',
  },
  {
    id: 'a2',
    name: 'Yusuf Diallo',
    sport: 'Sprint',
    engagementRate: 7.9,
    verified: true,
    status: 'Free Agent',
    interestedBrands: ['Nike', 'MTN'],
    region: 'Abuja, NG',
  },
  {
    id: 'a3',
    name: 'Fatou Kone',
    sport: 'Soccer',
    engagementRate: 7.1,
    verified: true,
    status: 'Open to Offers',
    interestedBrands: ['Bata', 'Nivea'],
    region: 'Dakar, SN',
  },
  {
    id: 'a4',
    name: 'Chidi Eze',
    sport: 'Boxing',
    engagementRate: 6.4,
    verified: false,
    status: 'Contracted',
    interestedBrands: ['Versaman'],
    region: 'Lagos, NG',
  },
  {
    id: 'a5',
    name: 'Tendai Mwangi',
    sport: 'Rugby',
    engagementRate: 6.0,
    verified: true,
    status: 'Contracted',
    interestedBrands: ['Bata'],
    region: 'Johannesburg, ZA',
  },
  {
    id: 'a6',
    name: 'Aisha Kamau',
    sport: 'Sprint',
    engagementRate: 5.8,
    verified: true,
    status: 'Open to Offers',
    interestedBrands: ['Nivea', 'Coca-Cola'],
    region: 'Nairobi, KE',
  },
  {
    id: 'a7',
    name: 'Kwame Asante',
    sport: 'Soccer',
    engagementRate: 5.2,
    verified: false,
    status: 'Free Agent',
    interestedBrands: ['MTN'],
    region: 'Accra, GH',
  },
  {
    id: 'a8',
    name: 'Lindiwe Dube',
    sport: 'Marathon',
    engagementRate: 4.9,
    verified: true,
    status: 'Contracted',
    interestedBrands: ['Nike'],
    region: 'Cape Town, ZA',
  },
];

export const SPONSORSHIP_DEALS: SponsorshipDeal[] = [
  {
    id: 'd1',
    brand: 'Nike',
    category: 'Apparel',
    title: 'Running Kit Endorsement',
    sport: 'Marathon',
    region: 'East Africa',
    duration: '18 months',
    requiresVerified: true,
    escrowProtected: true,
  },
  {
    id: 'd2',
    brand: 'Nivea',
    category: 'Skincare',
    title: 'Face of Africa Campaign',
    sport: 'Any',
    region: 'Pan-African',
    duration: '12 months',
    minEngagementRate: 4.2,
    requiresVerified: true,
    escrowProtected: true,
  },
  {
    id: 'd3',
    brand: 'Bata',
    category: 'Footwear',
    title: 'Grassroots Ambassadors',
    sport: 'Soccer / Rugby',
    region: 'West & South Africa',
    duration: '24 months',
    minEngagementRate: 3.8,
    requiresVerified: false,
    escrowProtected: true,
  },
  {
    id: 'd4',
    brand: 'Versaman',
    category: 'Fashion',
    title: 'Style Partnership',
    sport: 'Boxing / Sprint',
    region: 'Kenya & Nigeria',
    duration: '6 months',
    requiresVerified: true,
    escrowProtected: true,
  },
];

export const FINANCIAL_PRODUCTS: FinancialProduct[] = [
  {
    id: 'f1',
    icon: 'ShieldCheck',
    title: 'Escrow-protected deals',
    description:
      'All sponsorship contracts are held in escrow until milestones are confirmed by both parties. Funds release automatically on completion.',
    featured: true,
  },
  {
    id: 'f2',
    icon: 'Banknote',
    title: 'Personal loans',
    description:
      'Short-term personal finance linked to confirmed contracts and your verified engagement profile.',
    partner: 'Zarusha by Absa',
  },
  {
    id: 'f3',
    icon: 'Building2',
    title: 'Athlete mortgages',
    description:
      'Home loan products tailored to variable sports income cycles and contract timelines.',
    partner: 'Absa Bank Kenya',
  },
  {
    id: 'f4',
    icon: 'Lock',
    title: 'Preferential rate locking',
    description:
      'Confirmed preferential interest rate locking for verified Talo athletes. Pending final partner sign-off.',
    partner: 'Zarusha · Absa',
    pendingConfirmation: true,
  },
];

export const SPORTS = ['Marathon', 'Soccer', 'Rugby', 'Sprint', 'Boxing'] as const;
export const STATUSES = ['Free Agent', 'Open to Offers', 'Contracted'] as const;