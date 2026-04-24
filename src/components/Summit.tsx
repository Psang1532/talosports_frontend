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

export default function Summit() {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);
  const [hoveredRole, setHoveredRole] = useState<number | null>(null);

  return (
    <div style={{ fontFamily: "'Roboto', sans-serif", background: "var(--navy)", color: "var(--cream)", minHeight: "100vh", overflowX: "hidden" }}>

      {/* ── HERO ── */}
      <div style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0 64px 80px", overflow: "hidden" }}>

        {/* Subtle grid texture */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "linear-gradient(rgba(232,160,32,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(232,160,32,0.04) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }} />
        {/* Gold radial glow */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse 70% 55% at 65% 25%, rgba(232,160,32,0.07) 0%, transparent 70%)",
        }} />

        {/* Top bar */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "28px 64px", borderBottom: "1px solid rgba(232,160,32,0.12)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <span style={{ width: 1, height: 18, background: "var(--border)", opacity: 0.3 }} />
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: 2, color: "var(--text-light)", textTransform: "uppercase" }}>Summit Series</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <span style={{ fontSize: 12, color: "var(--text-light)", letterSpacing: 1 }}>Nairobi · Accra · Lagos</span>
            <button style={{ background: "var(--gold)", color: "var(--navy)", border: "none", padding: "10px 22px", borderRadius: 6, fontWeight: 700, fontSize: 12, letterSpacing: 1, cursor: "pointer", textTransform: "uppercase" }}>
              Patnership Applications
            </button>
          </div>
        </div>

        {/* Hero copy */}
        <div style={{ position: "relative", maxWidth: 900 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(232,160,32,0.1)", border: "1px solid rgba(232,160,32,0.22)", borderRadius: 4, padding: "6px 14px", marginBottom: 32 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--gold)", display: "inline-block" }} />
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2, color: "var(--gold)", textTransform: "uppercase" }}>Save the Date :12th - 14th May 2026</span>
          </div>

          <h1 style={{ fontSize: "clamp(42px, 6vw, 86px)", fontWeight: 900, lineHeight: 1.0, letterSpacing: -2, marginBottom: 6, color: "var(--white)" }}>
            AFCON 2027
          </h1>
          <h1 style={{ fontSize: "clamp(42px, 6vw, 86px)", fontWeight: 900, lineHeight: 1.0, letterSpacing: -2, marginBottom: 32, color: "var(--gold)" }}>
            Football Economy<br />Summit
          </h1>

          <p style={{ fontSize: 17, color: "var(--text-light)", lineHeight: 1.7, maxWidth: 540, marginBottom: 48, fontWeight: 300 }}>
            The continent's premier gathering of brands, federations, investors, and commercial strategists — convened around the biggest sporting event Africa has ever hosted.
          </p>

          <div style={{ display: "flex", gap: 12 }}>
            <button style={{ background: "var(--gold)", color: "var(--navy)", border: "none", padding: "15px 30px", borderRadius: 8, fontWeight: 800, fontSize: 14, cursor: "pointer" }}>
              Apply for Accreditation
            </button>
            <button style={{ background: "transparent", color: "var(--text-light)", border: "1px solid var(--border)", padding: "15px 30px", borderRadius: 8, fontWeight: 600, fontSize: 14, cursor: "pointer" }}>
              Download Prospectus
            </button>
          </div>
        </div>
      </div>

      {/* ── AFCON CONTEXT ── */}
      <div style={{ background: "var(--navy-mid)", borderTop: "1px solid rgba(232,160,32,0.1)", borderBottom: "1px solid rgba(232,160,32,0.1)", padding: "72px 64px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>

          <div>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 3, color: "var(--gold)", textTransform: "uppercase", marginBottom: 16 }}>About AFCON 2027</div>
            <h2 style={{ fontSize: 36, fontWeight: 900, lineHeight: 1.1, color: "var(--white)", marginBottom: 20, letterSpacing: -0.5 }}>
              The Biggest Sporting<br />Event in Africa's History.
            </h2>
            <p style={{ fontSize: 15, color: "var(--text-mid)", lineHeight: 1.75, marginBottom: 16 }}>
              The Africa Cup of Nations 2027 will be co-hosted by Kenya, Uganda, and Tanzania — marking the first time the tournament expands to 24 teams and the first East African co-hosting in AFCON history. Across 13 cities and purpose-built or upgraded stadiums, the tournament runs from January to February 2027.
            </p>
            <p style={{ fontSize: 15, color: "var(--text-mid)", lineHeight: 1.75 }}>
              With over 1.8 billion global viewers, 500,000+ expected in-stadium attendees, and a projected $2.1B economic footprint, AFCON 2027 is not just a football tournament — it is the commercial opportunity that will define a generation of African sports business.
            </p>
          </div>

          {/* Stats 2×2 */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, borderRadius: 12, overflow: "hidden", border: "1px solid var(--border)" }}>
            {STATS.map((s, i) => (
              <div
                key={i}
                onMouseEnter={() => setHoveredStat(i)}
                onMouseLeave={() => setHoveredStat(null)}
                style={{
                  background: hoveredStat === i ? "rgba(232,160,32,0.07)" : "var(--white)",
                  padding: "32px 28px",
                  borderRight: i % 2 === 0 ? "1px solid var(--border)" : "none",
                  borderBottom: i < 2 ? "1px solid var(--border)" : "none",
                  transition: "background 0.2s",
                  cursor: "default",
                }}
              >
                <div style={{ fontSize: 36, fontWeight: 900, color: "var(--gold)", lineHeight: 1, marginBottom: 6 }}>{s.value}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "var(--navy)", marginBottom: 4 }}>{s.label}</div>
                <div style={{ fontSize: 11, color: "var(--text-light)" }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── TALO'S ROLE ── */}
      <div style={{ padding: "80px 64px", maxWidth: 1200, margin: "0 auto" }}>

        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 56 }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 3, color: "var(--gold)", textTransform: "uppercase" }}>TALO's Role</div>
          <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, var(--gold), transparent)", opacity: 0.35 }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>

          {/* Prose column */}
          <div>
            <h2 style={{ fontSize: 40, fontWeight: 900, lineHeight: 1.08, color: "var(--white)", marginBottom: 24, letterSpacing: -1 }}>
              TALO Is the Official<br />
              <span style={{ color: "var(--gold)" }}>Commercial Intelligence</span><br />
              Partner for AFCON 2027.
            </h2>
            <p style={{ fontSize: 15, color: "var(--text-mid)", lineHeight: 1.75, marginBottom: 18 }}>
              While broadcast rights, ticket revenues, and player contracts dominate the headlines, the real commercial opportunity in AFCON 2027 is less visible — and almost entirely unmapped. Sponsorship valuations are guesswork. Athlete commercial data is scattered. Fan behaviour at tournament scale is uncharted territory.
            </p>
            <p style={{ fontSize: 15, color: "var(--text-mid)", lineHeight: 1.75, marginBottom: 18 }}>
              TALO changes that. As the continent's only live commercial dataset on African sport, TALO provides the definitive intelligence layer for every brand, federation, broadcaster, and investor that wants to participate intelligently in AFCON 2027's commercial ecosystem — not just sponsor and hope.
            </p>
            <p style={{ fontSize: 15, color: "var(--text-mid)", lineHeight: 1.75 }}>
              At the Football Economy Summit, TALO will publish its inaugural AFCON Commercial Intelligence Report — presenting verified data on sponsorship valuations, athlete economics, and fan monetisation opportunity across all 24 competing nations.
            </p>
          </div>

          {/* Role cards column */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {TALO_ROLES.map((item, i) => (
              <div
                key={i}
                onMouseEnter={() => setHoveredRole(i)}
                onMouseLeave={() => setHoveredRole(null)}
                style={{
                  background: hoveredRole === i ? "rgba(232,160,32,0.04)" : "rgba(255,255,255,0.02)",
                  border: "1px solid var(--border)",
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
                <span style={{ fontSize: 22, fontWeight: 900, color: "var(--gold)", opacity: 0.3, lineHeight: 1, flexShrink: 0, marginTop: 2 }}>
                  {item.num}
                </span>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "var(--white)", marginBottom: 6 }}>{item.title}</div>
                  <div style={{ fontSize: 13, color: "var(--text-light)", lineHeight: 1.6 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
}
