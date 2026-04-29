// src/types/advisory.ts

export interface Pillar {
  icon: 'excellence' | 'data' | 'commercial';
  title: string;
  description: string;
}

export interface Service {
  id: string;
  icon: 'strategy' | 'partnership' | 'valuation' | 'rights' | 'market' | 'operations';
  title: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  label: string;
  title: string;
  description: string;
}

export interface ImpactStat {
  value: string;
  suffix: string;
  label: string;
  description: string;
}