'use client';

// src/app/marketplace/page.tsx

import { useState } from 'react';
import HeroSection from '@/components/marketplace/HeroSection';
import ModuleTabs from '@/components/marketplace/ModuleTabs';
import TrustBar from '@/components/marketplace/TrustBar';
import SponsorshipTab from '@/features/sponsorship/SponsorshipTab';
import type { TabId } from '@/types/marketplace';

// Placeholder panels for tabs not yet built
function ComingSoon({ label }: { label: string }) {
  return (
    <div style={{ padding: '80px 0', textAlign: 'center', color: 'var(--text-light)' }}>
      <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>
        Coming Next
      </div>
      <div style={{ fontSize: 28, fontWeight: 800, color: 'var(--navy)' }}>{label}</div>
    </div>
  );
}

export default function MarketplacePage() {
  const [activeTab, setActiveTab] = useState<TabId>(0);

  return (
    <div className="page-wrapper">
      <HeroSection />

      <ModuleTabs activeTab={activeTab} onChange={setActiveTab} />

      <div className="tab-content">
        {activeTab === 0 && <SponsorshipTab />}
        {activeTab === 1 && <ComingSoon label="Agent Dashboard" />}
        {activeTab === 2 && <ComingSoon label="Fan Engagement" />}
        {activeTab === 3 && <ComingSoon label="Sports Data & Intelligence Layer" />}
        {activeTab === 4 && <ComingSoon label="Sports Investment & Infrastructure Hub" />}
      </div>

      <TrustBar />
    </div>
  );
}
