'use client';

// src/features/sponsorship/FiltersPanel.tsx

import {
  SPORT_OPTIONS,
  COUNTRY_OPTIONS,
  DEAL_TYPE_OPTIONS,
  AUDIENCE_OPTIONS,
} from '@/lib/marketplace-data';
import type { FilterState } from '@/types/marketplace';

interface FiltersPanelProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  onApply: () => void;
  onClear: () => void;
}

export default function FiltersPanel({ filters, onChange, onApply, onClear }: FiltersPanelProps) {
  function update(key: keyof FilterState, value: string) {
    onChange({ ...filters, [key]: value });
  }

  return (
    <aside className="filters-panel">
      <div className="filters-header">
        <span className="filters-title">Filters</span>
        <span className="clear-link" onClick={onClear} role="button" tabIndex={0}>
          Clear all
        </span>
      </div>

      <div className="filter-group">
        <div className="filter-label">Sport</div>
        <select
          className="filter-select"
          value={filters.sport}
          onChange={(e) => update('sport', e.target.value)}
        >
          {SPORT_OPTIONS.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <div className="filter-label">Country</div>
        <select
          className="filter-select"
          value={filters.country}
          onChange={(e) => update('country', e.target.value)}
        >
          {COUNTRY_OPTIONS.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <div className="filter-label">Budget Range</div>
        <div className="budget-row">
          <input
            className="budget-input"
            type="text"
            placeholder="Min"
            value={filters.budgetMin}
            onChange={(e) => update('budgetMin', e.target.value)}
          />
          <span className="budget-sep">–</span>
          <input
            className="budget-input"
            type="text"
            placeholder="Max"
            value={filters.budgetMax}
            onChange={(e) => update('budgetMax', e.target.value)}
          />
        </div>
      </div>

      <div className="filter-group">
        <div className="filter-label">Deal Type</div>
        <select
          className="filter-select"
          value={filters.dealType}
          onChange={(e) => update('dealType', e.target.value)}
        >
          {DEAL_TYPE_OPTIONS.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <div className="filter-label">Audience Reach</div>
        <select
          className="filter-select"
          value={filters.audienceReach}
          onChange={(e) => update('audienceReach', e.target.value)}
        >
          {AUDIENCE_OPTIONS.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <button className="btn-apply" onClick={onApply}>
        Apply Filters
      </button>
    </aside>
  );
}
