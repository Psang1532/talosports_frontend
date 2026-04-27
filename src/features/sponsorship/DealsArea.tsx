'use client';

// src/features/sponsorship/DealsArea.tsx

import { useState, useMemo } from 'react';
import DealCard from '@/features/sponsorship/DealCard';
import { MOCK_DEALS, SORT_OPTIONS } from '@/lib/marketplace-data';
import type { FilterState, SortOption, SubTab, ViewMode } from '@/types/marketplace';

const SUB_TABS: { id: SubTab; label: string }[] = [
  { id: 'all', label: 'All Deals' },
  { id: 'athletes', label: 'Athletes' },
  { id: 'clubs', label: 'Clubs & Teams' },
  { id: 'campaigns', label: 'Brand Campaigns' },
  { id: 'endorsements', label: 'Endorsements' },
];

interface DealsAreaProps {
  appliedFilters: FilterState;
}

export default function DealsArea({ appliedFilters }: DealsAreaProps) {
  const [subTab, setSubTab] = useState<SubTab>('all');
  const [sort, setSort] = useState<SortOption>('relevant');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');

  const filteredDeals = useMemo(() => {
    let deals = [...MOCK_DEALS];

    // Sub-tab filter
    if (subTab === 'athletes') {
      deals = deals.filter((d) => d.type.toLowerCase().includes('athlete'));
    } else if (subTab === 'clubs') {
      deals = deals.filter((d) => d.type.toLowerCase().includes('club'));
    } else if (subTab === 'campaigns') {
      deals = deals.filter((d) => d.type.toLowerCase().includes('campaign'));
    } else if (subTab === 'endorsements') {
      deals = deals.filter((d) => d.type.toLowerCase().includes('endorsement'));
    }

    // Sport filter
    if (appliedFilters.sport !== 'All Sports') {
      deals = deals.filter((d) => d.sport === appliedFilters.sport);
    }

    // Country filter
    if (appliedFilters.country !== 'All Countries') {
      deals = deals.filter((d) => d.location === appliedFilters.country);
    }

    // Deal type filter
    if (appliedFilters.dealType !== 'All Types') {
      deals = deals.filter((d) =>
        d.tags.some((t) => t.toLowerCase() === appliedFilters.dealType.toLowerCase().replace('deal', '').trim())
      );
    }

    // Sort
    if (sort === 'closing') {
      deals = deals.sort((a, b) => {
        const toHours = (s: string) =>
          s.includes('h') ? parseInt(s) : parseInt(s) * 24;
        return toHours(a.closesIn) - toHours(b.closesIn);
      });
    } else if (sort === 'competitive') {
      deals = deals.sort((a, b) => b.negotiations - a.negotiations);
    }

    return deals;
  }, [subTab, sort, appliedFilters]);

  return (
    <div className="deals-area">
      {/* Sub-tabs */}
      <div className="sub-tabs-row">
        {SUB_TABS.map((tab) => (
          <div
            key={tab.id}
            className={`sub-tab${subTab === tab.id ? ' active' : ''}`}
            onClick={() => setSubTab(tab.id)}
            role="tab"
          >
            {tab.label}
          </div>
        ))}
      </div>

      {/* Toolbar */}
      <div className="deals-toolbar">
        <div className="results-count">
          Showing <strong>{filteredDeals.length} opportunities</strong>
        </div>
        <div className="toolbar-right">
          <span className="sort-label">Sort by:</span>
          <select
            className="sort-select"
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <div className="view-toggles">
            <button
              className={`view-btn${viewMode === 'grid' ? ' active' : ''}`}
              title="Grid view"
              onClick={() => setViewMode('grid')}
            >
              ⊞
            </button>
            <button
              className={`view-btn${viewMode === 'list' ? ' active' : ''}`}
              title="List view"
              onClick={() => setViewMode('list')}
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Cards grid */}
      <div
        className="cards-grid"
        style={{
          gridTemplateColumns: viewMode === 'list' ? '1fr' : undefined,
        }}
      >
        {filteredDeals.length > 0 ? (
          filteredDeals.map((deal) => <DealCard key={deal.id} deal={deal} />)
        ) : (
          <div
            style={{
              gridColumn: '1 / -1',
              padding: '60px 0',
              textAlign: 'center',
              color: 'var(--text-light)',
              fontSize: 14,
            }}
          >
            No deals match your current filters.
          </div>
        )}
      </div>
    </div>
  );
}
