"use client";

import { useState } from "react";
import Tabs from "./components/tabs";
import Filters from "./components/filters";
import DealCard from "./components/deals";
import styles from "./styles/marketplace.module.css";

// ─── Types ───────────────────────────────────────────────────────────────────
export type Deal = {
  id: string;
  type: "ATHLETE SPONSORSHIP" | "CLUB PARTNERSHIP" | "CLUB SPONSORSHIP";
  status: "OPEN" | "CLOSING SOON";
  trending?: boolean;
  name: string;
  subtitle: string;
  country: string;
  detail: string;
  asking: number;
  askingUnit: string;
  brandDemand: "High brand demand" | "Medium brand demand";
  audienceReach: string;
  brandsNegotiating?: string;
  brandsBidding?: string;
  closesIn: string;
  tags: string[];
  sport: string;
  image?: string;
};

// ─── Mock data ────────────────────────────────────────────────────────────────
const ALL_DEALS: Deal[] = [
  {
    id: "1",
    type: "ATHLETE SPONSORSHIP",
    status: "OPEN",
    trending: true,
    name: "Wanjiru Chepkemoi — Athletics",
    subtitle: "Kenya · Long-distance runner",
    country: "Kenya",
    detail: "2× national champion",
    asking: 48000,
    askingUnit: "/ year",
    brandDemand: "High brand demand",
    audienceReach: "120K",
    brandsNegotiating: "3 brands in negotiation",
    closesIn: "Closes in 48h",
    tags: ["ATHLETICS", "KENYA", "ENDORSEMENT"],
    sport: "Athletics",
  },
  {
    id: "2",
    type: "CLUB PARTNERSHIP",
    status: "OPEN",
    name: "Accra Lions FC — Kit Deal",
    subtitle: "Ghana Premier League",
    country: "Ghana",
    detail: "4,200 match attendees/game",
    asking: 120000,
    askingUnit: "/ season",
    brandDemand: "High brand demand",
    audienceReach: "250K",
    brandsNegotiating: "1 brand in negotiation",
    closesIn: "Closes in 5d",
    tags: ["FOOTBALL", "GHANA", "KIT"],
    sport: "Football",
  },
  {
    id: "3",
    type: "CLUB SPONSORSHIP",
    status: "CLOSING SOON",
    name: "Tendai Mutamba — Rugby",
    subtitle: "Zimbabwe · Flanker",
    country: "Zimbabwe",
    detail: "Super Rugby prospect",
    asking: 22000,
    askingUnit: "/ year",
    brandDemand: "Medium brand demand",
    audienceReach: "90K",
    brandsBidding: "5 brands bidding",
    closesIn: "Closes in 48h",
    tags: ["RUGBY", "ZIMBABWE"],
    sport: "Rugby",
  },
  {
    id: "4",
    type: "ATHLETE SPONSORSHIP",
    status: "OPEN",
    name: "Amara Diallo — Football",
    subtitle: "Senegal · Midfielder",
    country: "Senegal",
    detail: "AFCON squad member",
    asking: 65000,
    askingUnit: "/ year",
    brandDemand: "High brand demand",
    audienceReach: "340K",
    brandsNegotiating: "2 brands in negotiation",
    closesIn: "Closes in 7d",
    tags: ["FOOTBALL", "SENEGAL", "ENDORSEMENT"],
    sport: "Football",
  },
  {
    id: "5",
    type: "CLUB PARTNERSHIP",
    status: "OPEN",
    name: "Nairobi City Stars — Jersey",
    subtitle: "KPL · Nairobi, Kenya",
    country: "Kenya",
    detail: "12,000 season ticket holders",
    asking: 80000,
    askingUnit: "/ season",
    brandDemand: "High brand demand",
    audienceReach: "180K",
    brandsNegotiating: "4 brands in negotiation",
    closesIn: "Closes in 3d",
    tags: ["FOOTBALL", "KENYA", "JERSEY"],
    sport: "Football",
  },
  {
    id: "6",
    type: "CLUB SPONSORSHIP",
    status: "CLOSING SOON",
    trending: true,
    name: "Fatima Ouédraogo — Basketball",
    subtitle: "Burkina Faso · Point Guard",
    country: "Burkina Faso",
    detail: "Continental championship finalist",
    asking: 30000,
    askingUnit: "/ year",
    brandDemand: "Medium brand demand",
    audienceReach: "75K",
    brandsBidding: "3 brands bidding",
    closesIn: "Closes in 24h",
    tags: ["BASKETBALL", "BURKINA FASO"],
    sport: "Basketball",
  },
];

// ─── Module tabs ───────────────────────────────────────────────────────────────
const MODULE_TABS = [
  { id: "sponsorships", label: "Sponsorships & Partnerships " },
  { id: "athlete", label: "Athlete Economy & Brands " },
  { id: "fan", label: "Fan Engagement" },
  { id: "data", label: "Sports Data & Intelligence " },
  { id: "investment", label: "Sports Investment & Infrastructure Hub" },
];

const SUB_TABS: Record<string, string[]> = {
  sponsorships: ["All Deals", "Athletes", "Clubs & Teams", "Brand Campaigns", "Endorsements"],
  athlete: ["All Athletes", "Track & Field", "Football", "Rugby", "Basketball"],
  fan: ["Experiences", "Memberships", "Events", "Fan Clubs"],
  data: ["Analytics", "Performance", "Market Insights", "Scouting"],
  investment: ["Infrastructure", "Academies", "Ventures", "Facilities"],
};

// ─── Stats ─────────────────────────────────────────────────────────────────────
const STATS = [
  { value: "1,250+", label: "Active Deals" },
  { value: "3,800+", label: "Athletes & Clubs" },
  { value: "250K+", label: "Fan Community" },
  { value: "$24.6M+", label: "Deal Value Created" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function MarketplacePage() {
  const [activeModule, setActiveModule] = useState("sponsorships");
  const [activeSubTab, setActiveSubTab] = useState("All Deals");
  const [filters, setFilters] = useState({
    sport: "All Sports",
    country: "All Countries",
    budgetMin: "",
    budgetMax: "",
    dealType: "All Types",
    audienceReach: "Any",
  });
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("Most Relevant");

  // Filter deals based on sidebar filters
  const filteredDeals = ALL_DEALS.filter((deal) => {
    if (filters.sport !== "All Sports" && deal.sport !== filters.sport) return false;
    if (filters.country !== "All Countries" && deal.country !== filters.country) return false;
    if (filters.budgetMin && deal.asking < parseInt(filters.budgetMin)) return false;
    if (filters.budgetMax && deal.asking > parseInt(filters.budgetMax)) return false;
    return true;
  });

  return (
    <main className={styles.page}>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>LIVE MARKETPLACE</p>
          <h1 className={styles.heroHeading}>
            Explore the <span className={styles.heroAccent}>Sports Economy.</span>
          </h1>
          <p className={styles.heroSub}>
            Sponsorships, investments, fan experiences, and athlete opportunities —<br />
            all in one ecosystem.
          </p>
        </div>
        <div className={styles.statsRow}>
          {STATS.map((s) => (
            <div key={s.label} className={styles.statItem}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Module Tabs ── */}
      <Tabs
        moduleTabs={MODULE_TABS}
        activeModule={activeModule}
        onModuleChange={(id) => {
          setActiveModule(id);
          setActiveSubTab(SUB_TABS[id][0]);
        }}
        subTabs={SUB_TABS[activeModule]}
        activeSubTab={activeSubTab}
        onSubTabChange={setActiveSubTab}
      />

      {/* ── Body ── */}
      <div className={styles.body}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <Filters
            filters={filters}
            onChange={setFilters}
          />
        </aside>

        {/* Deals grid */}
        <section className={styles.deals}>
          <div className={styles.dealsHeader}>
            <span className={styles.dealsCount}>
              Showing {filteredDeals.length} opportunities
            </span>
            <div className={styles.dealsControls}>
              <label className={styles.sortLabel}>Sort by:</label>
              <select
                className={styles.sortSelect}
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option>Most Relevant</option>
                <option>Closing Soon</option>
                <option>Highest Value</option>
                <option>Lowest Value</option>
              </select>
              <div className={styles.viewToggle}>
                <button
                  className={`${styles.viewBtn} ${viewMode === "grid" ? styles.viewBtnActive : ""}`}
                  onClick={() => setViewMode("grid")}
                  aria-label="Grid view"
                >
                  ⊞
                </button>
                <button
                  className={`${styles.viewBtn} ${viewMode === "list" ? styles.viewBtnActive : ""}`}
                  onClick={() => setViewMode("list")}
                  aria-label="List view"
                >
                  ☰
                </button>
              </div>
            </div>
          </div>

          <div className={`${styles.dealsGrid} ${viewMode === "list" ? styles.dealsGridList : ""}`}>
            {filteredDeals.map((deal) => (
              <DealCard key={deal.id} deal={deal} viewMode={viewMode} />
            ))}
          </div>
        </section>
      </div>

      {/* ── Footer strip ── */}
      <div className={styles.trustBar}>
        {[
          { icon: "🛡️", title: "Verified & Secure", desc: "All opportunities are verified for authenticity and safety." },
          { icon: "👁️", title: "Transparent Deals", desc: "Real-time updates, bidding activity, and clear timelines." },
          { icon: "🌍", title: "Built for Impact", desc: "Empowering athletes, brands, fans, and communities." },
          { icon: "🔗", title: "Global Reach", desc: "Connecting Africa to the global sports economy." },
        ].map((t) => (
          <div key={t.title} className={styles.trustItem}>
            <span className={styles.trustIcon}>{t.icon}</span>
            <div>
              <p className={styles.trustTitle}>{t.title}</p>
              <p className={styles.trustDesc}>{t.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
