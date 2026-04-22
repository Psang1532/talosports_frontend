"use client";

import { useState } from "react";
import type { Deal } from "../page";
import styles from "../styles/marketplace.module.css";

type DealCardProps = {
  deal: Deal;
  viewMode: "grid" | "list";
};

// Initials avatar fallback
function Avatar({ name }: { name: string }) {
  const initials = name
    .split("—")[0]
    .trim()
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
  return (
    <div className={styles.avatar}>
      {initials}
    </div>
  );
}

export default function DealCard({ deal, viewMode }: DealCardProps) {
  const [saved, setSaved] = useState(false);

  const badgeClass =
    deal.status === "CLOSING SOON" ? styles.badgeClosing : styles.badgeOpen;

  const demandClass =
    deal.brandDemand === "High brand demand"
      ? styles.demandHigh
      : styles.demandMed;

  return (
    <article className={`${styles.dealCard} ${viewMode === "list" ? styles.dealCardList : ""}`}>
      {/* Card header band */}
      <div className={styles.cardBand}>
        <span className={styles.cardType}>{deal.type}</span>
        <div className={styles.cardBadges}>
          <span className={badgeClass}>{deal.status}</span>
          {deal.trending && <span className={styles.badgeTrending}>🔥 TRENDING</span>}
        </div>
      </div>

      {/* Identity row */}
      <div className={styles.cardIdentity}>
        <Avatar name={deal.name} />
        <div className={styles.cardMeta}>
          <h3 className={styles.cardName}>{deal.name}</h3>
          <p className={styles.cardSub}>{deal.subtitle}</p>
          <p className={styles.cardDetail}>{deal.detail}</p>
        </div>
      </div>

      {/* Asking price */}
      <div className={styles.cardAsking}>
        <span className={styles.cardAskingLabel}>ASKING</span>
        <span className={styles.cardAskingValue}>
          ${deal.asking.toLocaleString()}{" "}
          <span className={styles.cardAskingUnit}>{deal.askingUnit}</span>
        </span>
      </div>

      {/* Stats row */}
      <div className={styles.cardStats}>
        <span className={`${styles.cardStat} ${demandClass}`}>
          📈 {deal.brandDemand}
        </span>
        <span className={styles.cardStat}>
          👥 {deal.audienceReach} Audience Reach
        </span>
      </div>

      {/* Negotiation info */}
      <div className={styles.cardFooterInfo}>
        {deal.brandsNegotiating && (
          <span className={styles.cardNeg}>{deal.brandsNegotiating}</span>
        )}
        {deal.brandsBidding && (
          <span className={styles.cardNeg}>{deal.brandsBidding}</span>
        )}
        <span className={styles.cardClose}>⏱ {deal.closesIn}</span>
      </div>

      {/* Tags */}
      <div className={styles.cardTags}>
        {deal.tags.map((tag) => (
          <span key={tag} className={styles.cardTag}>{tag}</span>
        ))}
      </div>

      {/* Actions */}
      <div className={styles.cardActions}>
        <button
          className={`${styles.saveBtn} ${saved ? styles.saveBtnActive : ""}`}
          onClick={() => setSaved((s) => !s)}
          aria-label={saved ? "Unsave deal" : "Save deal"}
        >
          {saved ? "✓ Saved" : "Save"}
        </button>
        <button className={styles.viewBtn}>
          View Deal →
        </button>
      </div>
    </article>
  );
}
