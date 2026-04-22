import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketplace | TALO — Sports Economy",
  description:
    "Explore sponsorships, investments, fan experiences, and athlete opportunities — all in one ecosystem.",
};

export default function MarketplaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="marketplace-root">
      {children}
    </div>
  );
}
