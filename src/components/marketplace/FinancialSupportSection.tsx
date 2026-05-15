// src/features/sponsorship/FinancialSupportSection.tsx

import React from "react";
import { FINANCIAL_PRODUCTS } from "@/lib/sponsorshipdata";
import type { FinancialProduct } from "@/types/sponsorship";
import styles from "../../features/sponsorship/sponsorship.module.css";

// Inline SVG icons keyed by name — avoids adding an icon lib dependency
const ICONS: Record<string, React.ReactNode> = {
  ShieldCheck: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  ),
  Banknote: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <circle cx="12" cy="12" r="2" />
      <path d="M6 12h.01M18 12h.01" />
    </svg>
  ),
  Building2: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
      <path d="M10 6h4M10 10h4M10 14h4M10 18h4" />
    </svg>
  ),
  Lock: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
};

export default function FinancialSupportSection(): React.ReactElement {
  return (
    <div className={styles.finSection}>
      <p className={styles.sectionLabel}>Financial support for athletes</p>

      <div className={styles.finGrid}>
        {FINANCIAL_PRODUCTS.map((product: FinancialProduct) => (
          <div
            key={product.id}
            className={`${styles.finCard} ${product.featured ? styles.finCardFeatured : ""}`}
          >
            <div className={styles.finIcon}>{ICONS[product.icon]}</div>

            <h3 className={styles.finTitle}>{product.title}</h3>
            <p className={styles.finDesc}>{product.description}</p>

            {product.partner && (
              <span
                className={`${styles.partnerBadge} ${product.pendingConfirmation ? styles.partnerPending : ""}`}
              >
                {product.pendingConfirmation ? "⏳ " : ""}
                {product.partner}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
