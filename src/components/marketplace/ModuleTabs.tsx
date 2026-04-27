'use client';

// src/components/marketplace/ModuleTabs.tsx

import { MARKETPLACE_TABS } from '@/lib/marketplace-data';
import type { TabId } from '@/types/marketplace';

interface ModuleTabsProps {
  activeTab: TabId;
  onChange: (tab: TabId) => void;
}

export default function ModuleTabs({ activeTab, onChange }: ModuleTabsProps) {
  return (
    <div className="module-tabs">
      {MARKETPLACE_TABS.map((tab) => (
        <button
          key={tab.id}
          className={`module-tab${activeTab === tab.id ? ' active' : ''}`}
          onClick={() => onChange(tab.id)}
          aria-selected={activeTab === tab.id}
          role="tab"
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
