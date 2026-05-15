'use client'

import { useState } from "react";

const STATS = [
  { value: "13",    label: "Host Cities",               sub: "across 3 countries" },
  { value: "24",    label: "Nations Competing",          sub: "1.4B+ combined population" },
  { value: "$2.1B", label: "Projected Economic Impact",  sub: "direct & indirect" },
  { value: "1.8B",  label: "Global TV Audience",         sub: "broadcast reach" },
];

const TALO_ROLES = [
  {
    num: "01",
    title: "Tournament Sponsorship Valuation",
    desc: "TALO publishes the first independent, data-backed valuation of AFCON 2027 sponsorship inventory — from title rights to kit deals and broadcast integrations.",
  },
  {
    num: "02",
    title: "Athlete Commercial Intelligence",
    desc: "Real-time earnings data and commercial profiles for every player in the 24-team squads. The definitive resource for brands activating athlete partnerships.",
  },
  {
    num: "03",
    title: "Fan Economy Mapping",
    desc: "First-party fan behaviour data from 250K+ TALO members across host markets. Spend propensity, brand affinity, and engagement benchmarks for tournament activations.",
  },
  {
    num: "04",
    title: "Live Deal Intelligence",
    desc: "TALO tracks every sponsorship, endorsement, and investment deal flowing into the AFCON ecosystem in real time — giving partners a competitive edge no media report can match.",
  },
];

const AFCON_PARTNERS = [
  {
    tier: "Official Beverage Partner",
    name: "Coca-Cola",
    logo: "🥤",
    initial: "CC",
    color: "#E61C24",
    desc: "Activating across all 13 host cities with fan zones, matchday experiences, and athlete hydration partnerships. Coca-Cola's AFCON presence spans broadcast, in-stadium, and digital — reach 1.8B viewers through one activation.",
    offer: "Fan Zone Activations",
    offerDetail: "Exclusive sponsor of official AFCON fan parks across Nairobi, Kampala & Dar es Salaam.",
  },
  {
    tier: "Official Spirits & Hospitality Partner",
    name: "Diageo",
    logo: "🥃",
    initial: "DG",
    color: "#B8963E",
    desc: "Diageo's portfolio — Guinness, Johnnie Walker, and Smirnoff — underpins AFCON hospitality suites and athlete entertainment. The world's largest spirits group brings category exclusivity and deep African market penetration.",
    offer: "VIP Hospitality Suite Access",
    offerDetail: "Diageo-hosted executive suites at marquee fixtures including the Semi-Finals and Final.",
  },
  {
    tier: "Official Accommodation Partner",
    name: "Partner Hotels",
    logo: "🏨",
    initial: "HT",
    color: "#4A90D9",
    desc: "A curated network of official tournament hotels offering preferential rates for registered players, delegations, and accredited commercial partners. Seamless booking, guaranteed availability, and tournament-grade security protocols.",
    offer: "Preferential Player & Partner Rates",
    offerDetail: "Up to 35% below market rate for TALO-accredited athletes and delegation members across all host cities.",
  },
];

const STADIUM_URL = "https://www.cafonline.com/media/brpfuxd5/tangiers-stadium2.jpg?width=1320";

// Hero + AFCON: lighter overlay so the image shows through more
const fixedBg: React.CSSProperties = {
  backgroundImage: `
    linear-gradient(180deg, rgba(13,31,45,0.82) 0%, rgba(13,31,45,0.48) 40%, rgba(13,31,45,0.62) 70%, rgba(13,31,45,0.96) 100%),
    url("${STADIUM_URL}")
  `,
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
  backgroundRepeat: "no-repeat",
};

// TALO section: heavier uniform overlay — translucent navy, image still visible beneath
const fixedBgDark: React.CSSProperties = {
  backgroundImage: `
    linear-gradient(180deg, rgba(13,31,45,0.88) 0%, rgba(13,31,45,0.88) 100%),
    url("${STADIUM_URL}")
  `,
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
  backgroundRepeat: "no-repeat",
};

export default function Summit() {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);
  const [hoveredRole, setHoveredRole] = useState<number | null>(null);
  const [hoveredPartner, setHoveredPartner] = useState<number | null>(null);

  return (
    <div style={{ fontFamily: "'Raleway', sans-serif", color: "var(--cream)", overflowX: "hidden" }}>

      {/* ── HERO ── */}
      <div style={{
        ...fixedBg,
        position: "relative",
        minHeight: "85vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "0 64px 80px",
      }}>
        {/* Subtle gold grid */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "linear-gradient(rgba(200,146,42,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(200,146,42,0.025) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }} />

        {/* Top bar */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0,
          display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "28px 64px",
          borderBottom: "1px solid rgba(200,146,42,0.14)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span style={{ width: 1, height: 18, background: "rgba(200,146,42,0.45)" }} />
            <span style={{ fontSize:13, fontWeight: 700, letterSpacing: 2.5, color: "rgb(255,255,255)", textTransform: "uppercase" }}>TALO Summit Series</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <span style={{ fontSize: 14, color: "rgba(255,255,255,0.60)", letterSpacing: 1 }}>Nairobi · Accra · Lagos</span>
            <button style={{ background: "var(--gold)", color: "#0D1F2D", border: "none", padding: "10px 22px", borderRadius: 6, fontWeight: 700, fontSize: 13, letterSpacing: 1, cursor: "pointer", textTransform: "uppercase" }}>
              Partnership Applications
            </button>
          </div>
        </div>

        {/* Headline block */}
        <div style={{ position: "relative", maxWidth: 860 }}>
          <div style={{
            position: "absolute",
            top: -36, bottom: -36, left: -44, right: -44,
            background: "rgba(13,31,45,0.58)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            borderRadius: 14,
            border: "1px solid rgba(200,146,42,0.13)",
            pointerEvents: "none",
          }} />
          <div style={{ position: "relative" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(200,146,42,0.12)", border: "1px solid rgba(200,146,42,0.28)", borderRadius: 4, padding: "6px 14px", marginBottom: 28 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--gold)", display: "inline-block" }} />
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2, color: "var(--gold)", textTransform: "uppercase" }}>Save the Date · 12th – 14th May 2026</span>
            </div>
            <h1 style={{ fontSize: "clamp(42px, 6vw, 86px)", fontWeight: 900, lineHeight: 1.0, letterSpacing: -2, marginBottom: 6, color: "#ffffff" }}>
              AFCON 2027
            </h1>
            <h1 style={{ fontSize: "clamp(42px, 6vw, 86px)", fontWeight: 900, lineHeight: 1.0, letterSpacing: -2, marginBottom: 28, color: "var(--gold)" }}>
              Football Economy<br />Summit
            </h1>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.60)", lineHeight: 1.75, maxWidth: 520, marginBottom: 40, fontWeight: 400 }}>
              The continent's premier gathering of brands, federations, investors, and commercial strategists — convened around the biggest sporting event Africa has ever hosted.
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              <button style={{ background: "var(--gold)", color: "#0D1F2D", border: "none", padding: "15px 30px", borderRadius: 8, fontWeight: 800, fontSize: 13, letterSpacing: 0.5, cursor: "pointer", textTransform: "uppercase" }}>
                Apply for Accreditation
              </button>
              <button style={{ background: "transparent", color: "rgba(255,255,255,0.65)", border: "1px solid rgba(255,255,255,0.2)", padding: "15px 30px", borderRadius: 8, fontWeight: 600, fontSize: 13, cursor: "pointer", textTransform: "uppercase" }}>
                Download Prospectus
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── AFCON CONTEXT ── */}
      <div style={{
        ...fixedBg,
        borderTop: "1px solid rgba(200,146,42,0.14)",
        padding: "72px 64px 84px",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
          <div>
            <div style={{ fontSize: 17, fontWeight: 700, letterSpacing: 3, color: "var(--gold)", textTransform: "uppercase", marginBottom: 16 }}>About AFCON 2027</div>
            <h2 style={{ fontSize: 36, fontWeight: 900, lineHeight: 1.1, color: "#ffffff", marginBottom: 20, letterSpacing: -0.5 }}>
              The Biggest Sporting<br />Event in Africa's History.
            </h2>
            <p style={{ fontSize: 17, color: "rgb(255,255,255)", lineHeight: 1.78, marginBottom: 16 }}>
              The Africa Cup of Nations 2027 will be co-hosted by Kenya, Uganda, and Tanzania — marking the first time the tournament expands to 24 teams and the first East African co-hosting in AFCON history. Across 13 cities and purpose-built or upgraded stadiums, the tournament runs from January to February 2027.
            </p>
            <p style={{ fontSize: 17, color: "rgb(255, 255, 255)", lineHeight: 1.78 }}>
              With over 1.8 billion global viewers, 500,000+ expected in-stadium attendees, and a projected $2.1B economic footprint, AFCON 2027 is not just a football tournament — it is the commercial opportunity that will define a generation of African sports business.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, borderRadius: 12, overflow: "hidden", border: "1px solid rgba(200,146,42,0.22)" }}>
            {STATS.map((s, i) => (
              <div
                key={i}
                onMouseEnter={() => setHoveredStat(i)}
                onMouseLeave={() => setHoveredStat(null)}
                style={{
                  background: hoveredStat === i ? "rgba(200,146,42,0.15)" : "rgba(13,31,45,0.65)",
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                  padding: "32px 28px",
                  borderRight: i % 2 === 0 ? "1px solid rgba(200,146,42,0.16)" : "none",
                  borderBottom: i < 2 ? "1px solid rgba(200,146,42,0.16)" : "none",
                  transition: "background 0.2s",
                  cursor: "default",
                }}
              >
                <div style={{ fontSize: 36, fontWeight: 900, color: "var(--gold)", lineHeight: 1, marginBottom: 6 }}>{s.value}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#ffffff", marginBottom: 4 }}>{s.label}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.42)" }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── AFCON OFFICIAL PARTNERSHIPS ── */}
      <div style={{
        ...fixedBgDark,
        borderTop: "1px solid rgba(200,146,42,0.14)",
        padding: "88px 64px 100px",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          {/* Section header */}
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 14 }}>
            <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: 3, color: "var(--gold)", textTransform: "uppercase" }}>Official Partnerships</div>
            <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, var(--gold), transparent)", opacity: 0.35 }} />
          </div>

          <h2 style={{ fontSize: 38, fontWeight: 900, lineHeight: 1.08, color: "#ffffff", marginBottom: 16, letterSpacing: -0.8, maxWidth: 620 }}>
            The Commercial Backbone<br />
            <span style={{ color: "var(--gold)" }}>Powering AFCON 2027.</span>
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.52)", lineHeight: 1.75, maxWidth: 580, marginBottom: 56 }}>
            TALO's official partnerships with Coca-Cola, Diageo, and our curated hotel network give every athlete, brand, and investor on the platform access to the commercial infrastructure of the tournament itself.
          </p>

          {/* Partner cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginBottom: 60 }}>
            {AFCON_PARTNERS.map((p, i) => (
              <div
                key={i}
                onMouseEnter={() => setHoveredPartner(i)}
                onMouseLeave={() => setHoveredPartner(null)}
                style={{
                  background: hoveredPartner === i
                    ? "rgba(200,146,42,0.09)"
                    : "rgba(13,31,45,0.72)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: hoveredPartner === i
                    ? "1px solid rgba(200,146,42,0.45)"
                    : "1px solid rgba(200,146,42,0.16)",
                  borderRadius: 12,
                  padding: "32px 28px 28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 0,
                  transition: "background 0.25s, border-color 0.25s",
                  cursor: "default",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Subtle top accent line in partner brand color */}
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0,
                  height: 3,
                  background: p.color,
                  opacity: hoveredPartner === i ? 0.9 : 0.45,
                  transition: "opacity 0.25s",
                  borderRadius: "12px 12px 0 0",
                }} />

                {/* Tier badge */}
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 7,
                  background: "rgba(200,146,42,0.1)",
                  border: "1px solid rgba(200,146,42,0.22)",
                  borderRadius: 4, padding: "4px 10px",
                  marginBottom: 22, alignSelf: "flex-start",
                }}>
                  <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--gold)", display: "inline-block", flexShrink: 0 }} />
                  <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: 1.8, color: "var(--gold)", textTransform: "uppercase" }}>
                    {p.tier}
                  </span>
                </div>

                {/* Logo monogram + partner name */}
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 10,
                    background: p.color,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 15, fontWeight: 900, color: "#ffffff",
                    letterSpacing: 1, flexShrink: 0,
                    opacity: 0.92,
                  }}>
                    {p.initial}
                  </div>
                  <div style={{ fontSize: 22, fontWeight: 900, color: "#ffffff", letterSpacing: -0.3 }}>{p.name}</div>
                </div>

                {/* Description */}
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.68, marginBottom: 24 }}>
                  {p.desc}
                </p>

                {/* Offer highlight strip */}
                <div style={{
                  marginTop: "auto",
                  background: "rgba(200,146,42,0.07)",
                  border: "1px solid rgba(200,146,42,0.2)",
                  borderRadius: 8,
                  padding: "14px 16px",
                }}>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2, color: "var(--gold)", textTransform: "uppercase", marginBottom: 5 }}>
                    {p.offer}
                  </div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", lineHeight: 1.5 }}>
                    {p.offerDetail}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA banner */}
          <div style={{
            background: "rgba(200,146,42,0.07)",
            border: "1px solid rgba(200,146,42,0.22)",
            borderRadius: 12,
            padding: "32px 40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 32,
          }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2.5, color: "var(--gold)", textTransform: "uppercase", marginBottom: 8 }}>
                Exclusive to TALO-Accredited Athletes & Partners
              </div>
              <div style={{ fontSize: 18, fontWeight: 800, color: "#ffffff", lineHeight: 1.3 }}>
                Access preferential hotel rates, partner hospitality,<br />and co-branded activations through the TALO platform.
              </div>
            </div>
            <div style={{ display: "flex", gap: 12, flexShrink: 0 }}>
              <button style={{
                background: "var(--gold)", color: "#0D1F2D",
                border: "none", padding: "13px 26px", borderRadius: 8,
                fontWeight: 800, fontSize: 12, letterSpacing: 0.8,
                cursor: "pointer", textTransform: "uppercase", whiteSpace: "nowrap",
              }}>
                Claim Partner Benefits
              </button>
              <button style={{
                background: "transparent", color: "rgba(255,255,255,0.65)",
                border: "1px solid rgba(255,255,255,0.18)", padding: "13px 26px", borderRadius: 8,
                fontWeight: 600, fontSize: 12, cursor: "pointer",
                textTransform: "uppercase", whiteSpace: "nowrap",
              }}>
                Partnership Deck
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── TALO'S ROLE — translucent navy over fixed stadium image ── */}
      <div style={{
        ...fixedBgDark,
        borderTop: "1px solid rgba(200,146,42,0.10)",
        padding: "80px 64px 100px",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 56 }}>
            <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: 3, color: "var(--gold)", textTransform: "uppercase" }}>TALO's Role</div>
            <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, var(--gold), transparent)", opacity: 0.35 }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
            <div>
              <h2 style={{ fontSize: 40, fontWeight: 900, lineHeight: 1.08, color: "#ffffff", marginBottom: 24, letterSpacing: -1 }}>
                TALO Is the Official<br />
                <span style={{ color: "var(--gold)" }}>Commercial Intelligence</span><br />
                Partner for AFCON 2027.
              </h2>
              <p style={{ fontSize: 17, color: "rgba(255,255,255,0.62)", lineHeight: 1.75, marginBottom: 18 }}>
                While broadcast rights, ticket revenues, and player contracts dominate the headlines, the real commercial opportunity in AFCON 2027 is less visible — and almost entirely unmapped. Sponsorship valuations are guesswork. Athlete commercial data is scattered. Fan behaviour at tournament scale is uncharted territory.
              </p>
              <p style={{ fontSize: 17, color: "rgba(255,255,255,0.62)", lineHeight: 1.75, marginBottom: 18 }}>
                TALO changes that. As the continent's only live commercial dataset on African sport, TALO provides the definitive intelligence layer for every brand, federation, broadcaster, and investor that wants to participate intelligently in AFCON 2027's commercial ecosystem — not just sponsor and hope.
              </p>
              <p style={{ fontSize: 17, color: "rgba(255,255,255,0.62)", lineHeight: 1.75 }}>
                At the Football Economy Summit, TALO will publish its inaugural AFCON Commercial Intelligence Report — presenting verified data on sponsorship valuations, athlete economics, and fan monetisation opportunity across all 24 competing nations.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {TALO_ROLES.map((item, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setHoveredRole(i)}
                  onMouseLeave={() => setHoveredRole(null)}
                  style={{
                    background: hoveredRole === i ? "rgba(200,146,42,0.08)" : "rgba(255,255,255,0.05)",
                    borderTop: "1px solid rgba(255,255,255,0.09)",
                    borderRight: "1px solid rgba(255,255,255,0.09)",
                    borderBottom: "1px solid rgba(255,255,255,0.09)",
                    borderLeft: "3px solid var(--gold)",
                    borderRadius: 8,
                    padding: "20px 24px",
                    display: "flex",
                    gap: 20,
                    alignItems: "flex-start",
                    transition: "background 0.2s",
                    cursor: "default",
                  }}
                >
                  <span style={{ fontSize:30 , fontWeight: 1000, color: "var(--gold)", opacity: 0.35, lineHeight: 1, flexShrink: 0, marginTop: 2 }}>
                    {item.num}
                  </span>
                  <div>
                    <div style={{ fontSize: 24, fontWeight: 700, color: "#ffffff", marginBottom: 6 }}>{item.title}</div>
                    <div style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
