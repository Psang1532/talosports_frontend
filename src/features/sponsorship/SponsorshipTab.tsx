'use client';

// src/features/sponsorship/SponsorshipTab.tsx

import { useState } from 'react';
import FiltersPanel from './FiltersPanel';
import DealsArea from './DealsArea';
import type { FilterState } from '@/types/marketplace';

const DEFAULT_FILTERS: FilterState = {
  sport: 'All Sports',
  country: 'All Countries',
  budgetMin: '',
  budgetMax: '',
  dealType: 'All Types',
  audienceReach: 'Any',
};

export default function SponsorshipTab() {
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);
  const [appliedFilters, setAppliedFilters] = useState<FilterState>(DEFAULT_FILTERS);

  function handleApply() {
    setAppliedFilters(filters);
  }

  function handleClear() {
    setFilters(DEFAULT_FILTERS);
    setAppliedFilters(DEFAULT_FILTERS);
  }

  return (
    <div className="content-area">
      <FiltersPanel
        filters={filters}
        onChange={setFilters}
        onApply={handleApply}
        onClear={handleClear}
      />
      <DealsArea appliedFilters={appliedFilters} />
    </div>
  );
}
