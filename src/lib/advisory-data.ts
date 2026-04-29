// src/lib/advisory-data.ts

import type { Pillar, Service, ProcessStep, ImpactStat } from '@/types/advisory';

export const ADVISORY_PILLARS: Pillar[] = [
  {
    icon: 'excellence',
    title: 'Excellence',
    description: 'We connect the right parties and accelerate commercial outcomes.',
  },
  {
    icon: 'data',
    title: 'Data-Backed',
    description: 'Every recommendation is powered by proprietary sports intelligence.',
  },
  {
    icon: 'commercial',
    title: 'Commercial Focused',
    description: 'We dont just advise — we help you close deals and create real impact.',
  },
];

export const ADVISORY_SERVICES: Service[] = [
  {
    id: 'strategy',
    icon: 'strategy',
    title: 'Commercial Strategy',
    description: 'We help define and execute commercial strategies that drive sustainable growth.',
  },
  {
    id: 'partnership',
    icon: 'partnership',
    title: 'Partnership Advisory',
    description: 'We identify, structure and negotiate partnerships that deliver long-term value.',
  },
  {
    id: 'valuation',
    icon: 'valuation',
    title: 'Valuation & Economics',
    description: 'We provide data-driven valuations and economic modelling to inform smarter decisions.',
  },
  {
    id: 'rights',
    icon: 'rights',
    title: 'Rights & Revenue Strategy',
    description: 'We optimise rights portfolios and revenue models across media, sponsorship and new revenue streams.',
  },
  {
    id: 'market',
    icon: 'market',
    title: 'Market Entry & Expansion',
    description: 'We support organisations entering new markets or scaling across Africa and beyond.',
  },
  {
    id: 'operations',
    icon: 'operations',
    title: 'Commercial Operations',
    description: 'We strengthen commercial capabilities and processes to improve execution and results.',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    label: '01. Discover',
    title: 'Discover',
    description: 'We listen, analyse and understand your goals, challenges and market opportunity.',
  },
  {
    number: '02',
    label: '02. Design',
    title: 'Design',
    description: 'We create a tailored strategy and commercial roadmap backed by data and insight.',
  },
  {
    number: '03',
    label: '03. Connect',
    title: 'Connect',
    description: 'We activate our network to connect you with the right partners, investors and opportunities.',
  },
  {
    number: '04',
    label: '04. Deliver',
    title: 'Deliver',
    description: 'We support execution, negotiate outcomes and ensure measurable impact.',
  },
];

export const IMPACT_STATS: ImpactStat[] = [
  {
    value: '$250M',
    suffix: '+',
    label: 'In Deal Value Facilitated',
    description: 'Across partnerships, rights and commercial transactions.',
  },
  {
    value: '50',
    suffix: '+',
    label: 'Organisations Advised',
    description: 'Including federations, leagues, investors and global brands.',
  },
  {
    value: '15',
    suffix: '+',
    label: 'Markets Engaged',
    description: 'Delivering impact across Africa and beyond.',
  },
];