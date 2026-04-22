"use client";

import { useState } from "react";
import styles from "../styles/marketplace.module.css";

type FiltersState = {
  sport: string;
  country: string;
  budgetMin: string;
  budgetMax: string;
  dealType: string;
  audienceReach: string;
};

type FiltersProps = {
  filters: FiltersState;
  onChange: (updated: FiltersState) => void;
};

const SPORTS = ["All Sports", "Athletics", "Football", "Rugby", "Basketball", "Cricket", "Swimming"];
const COUNTRIES = [
  "All Countries", "Kenya", "Ghana", "Zimbabwe", "Nigeria", "South Africa",
  "Senegal", "Ethiopia", "Tanzania", "Uganda", "Burkina Faso",
];
const DEAL_TYPES = ["All Types", "Athlete Sponsorship", "Club Partnership", "Club Sponsorship", "Endorsement"];
const AUDIENCE_OPTIONS = ["Any", "50K+", "100K+", "250K+", "500K+", "1M+"];

export default function Filters({ filters, onChange }: FiltersProps) {
  const [localFilters, setLocalFilters] = useState<FiltersState>(filters);

  const update = (key: keyof FiltersState, value: string) => {
    setLocalFilters((prev) => ({ ...prev, [key]: value }));
  };

  const apply = () => onChange(localFilters);

  const clear = () => {
    const reset: FiltersState = {
      sport: "All Sports",
      country: "All Countries",
      budgetMin: "",
      budgetMax: "",
      dealType: "All Types",
      audienceReach: "Any",
    };
    setLocalFilters(reset);
    onChange(reset);
  };

  return (
    <div className={styles.filtersPanel}>
      <div className={styles.filtersHeader}>
        <span className={styles.filtersTitle}>Filters</span>
        <button className={styles.filtersClear} onClick={clear}>Clear all</button>
      </div>

      {/* Sport */}
      <div className={styles.filterGroup}>
        <label className={styles.filterLabel}>Sport</label>
        <select
          className={styles.filterSelect}
          value={localFilters.sport}
          onChange={(e) => update("sport", e.target.value)}
        >
          {SPORTS.map((s) => <option key={s}>{s}</option>)}
        </select>
      </div>

      {/* Country */}
      <div className={styles.filterGroup}>
        <label className={styles.filterLabel}>Country</label>
        <select
          className={styles.filterSelect}
          value={localFilters.country}
          onChange={(e) => update("country", e.target.value)}
        >
          {COUNTRIES.map((c) => <option key={c}>{c}</option>)}
        </select>
      </div>

      {/* Budget Range */}
      <div className={styles.filterGroup}>
        <label className={styles.filterLabel}>Budget Range</label>
        <div className={styles.budgetRow}>
          <input
            className={styles.filterInput}
            type="number"
            placeholder="Min"
            value={localFilters.budgetMin}
            onChange={(e) => update("budgetMin", e.target.value)}
          />
          <span className={styles.budgetDash}>–</span>
          <input
            className={styles.filterInput}
            type="number"
            placeholder="Max"
            value={localFilters.budgetMax}
            onChange={(e) => update("budgetMax", e.target.value)}
          />
        </div>
      </div>

      {/* Deal Type */}
      <div className={styles.filterGroup}>
        <label className={styles.filterLabel}>Deal Type</label>
        <select
          className={styles.filterSelect}
          value={localFilters.dealType}
          onChange={(e) => update("dealType", e.target.value)}
        >
          {DEAL_TYPES.map((d) => <option key={d}>{d}</option>)}
        </select>
      </div>

      {/* Audience Reach */}
      <div className={styles.filterGroup}>
        <label className={styles.filterLabel}>Audience Reach</label>
        <select
          className={styles.filterSelect}
          value={localFilters.audienceReach}
          onChange={(e) => update("audienceReach", e.target.value)}
        >
          {AUDIENCE_OPTIONS.map((a) => <option key={a}>{a}</option>)}
        </select>
      </div>

      <button className={styles.applyBtn} onClick={apply}>
        Apply Filters
      </button>
    </div>
  );
}
