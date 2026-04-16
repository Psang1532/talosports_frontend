"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import AuthPanelLeft from "@/components/AuthPanelLeft";
import { registeredClubs } from "@/lib/data";
import type { Role } from "@/types";

// ─── Step bar ───────────────────────────────────────────────────────────────
function StepBar({ step }: { step: number }) {
  const labels = ["Your Role", "Your Details", "Verify & Submit"];
  return (
    <div className="step-bar">
      {labels.map((label, i) => {
        const num = i + 1;
        const circleClass = num < step ? "done" : num === step ? "active" : "";
        return (
          <div key={label} className="step-item">
            <div className={`step-circle ${circleClass}`}>
              {num < step ? "✓" : num}
            </div>
            {i < labels.length - 1 && (
              <div className={`step-line${num < step ? " done" : ""}`} />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── Club autocomplete ───────────────────────────────────────────────────────
function ClubSearch() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const matches = query.trim()
    ? registeredClubs
        .filter((c) => c.toLowerCase().includes(query.toLowerCase()))
        .slice(0, 8)
    : [];

  return (
    <div style={{ position: "relative" }}>
      <input
        type="text"
        placeholder="e.g. Nairobi City Stars FC"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        onFocus={() => query && setOpen(true)}
      />
      {open && query && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "#fff",
            border: "1.5px solid var(--cream-dark)",
            borderTop: "none",
            borderRadius: "0 0 var(--radius) var(--radius)",
            zIndex: 50,
            maxHeight: 260,
            overflowY: "auto",
          }}
        >
          {matches.length === 0 ? (
            <div
              style={{
                padding: "0.7rem 1rem",
                fontSize: "0.8rem",
                color: "var(--text-muted)",
                fontStyle: "italic",
              }}
            >
              No registered clubs found — your entry will be saved as typed.
            </div>
          ) : (
            matches.map((club) => (
              <div
                key={club}
                onMouseDown={() => {
                  setQuery(club);
                  setOpen(false);
                }}
                style={{
                  padding: "0.65rem 1rem",
                  fontSize: "0.83rem",
                  cursor: "pointer",
                  borderBottom: "1px solid var(--cream-dark)",
                  color: "var(--text)",
                }}
              >
                <span
                  style={{
                    color: "var(--gold)",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginRight: "0.5rem",
                  }}
                >
                  ✓ Verified
                </span>
                {club}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

// ─── Portfolio links ─────────────────────────────────────────────────────────
function PortfolioLinks() {
  const [links, setLinks] = useState([""]);
  return (
    <div className="form-group">
      <label>Media Portfolio Links</label>
      <p
        style={{
          fontSize: "0.7rem",
          color: "var(--text-muted)",
          marginBottom: "0.6rem",
          fontStyle: "italic",
        }}
      >
        Add links to highlight reels, match footage, press features or your
        profile page.
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          marginBottom: "0.5rem",
        }}
      >
        {links.map((val, i) => (
          <div
            key={i}
            style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}
          >
            <input
              type="url"
              placeholder="https://youtube.com/watch?v=…"
              value={val}
              onChange={(e) => {
                const next = [...links];
                next[i] = e.target.value;
                setLinks(next);
              }}
              style={{ flex: 1 }}
            />
            <button
              type="button"
              onClick={() =>
                setLinks(
                  links.length > 1 ? links.filter((_, j) => j !== i) : [""],
                )
              }
              style={{
                background: "none",
                border: "1.5px solid var(--cream-dark)",
                borderRadius: "var(--radius)",
                width: 34,
                height: 38,
                cursor: "pointer",
                color: "var(--text-muted)",
                fontSize: "1rem",
                flexShrink: 0,
              }}
            >
              ×
            </button>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={() => setLinks([...links, ""])}
        style={{
          background: "none",
          border: "1.5px dashed var(--cream-dark)",
          borderRadius: "var(--radius)",
          width: "100%",
          padding: "0.55rem",
          fontSize: "0.72rem",
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--text-muted)",
          cursor: "pointer",
        }}
      >
        + Add Another Link
      </button>
    </div>
  );
}

// ─── Role-specific fields (Step 2) ──────────────────────────────────────────
function TalentFields() {
  const [isFreeAgent, setIsFreeAgent] = useState("yes");
  return (
    <div>
      <div className="form-row">
        <div className="form-group">
          <label>First Name</label>
          <input type="text" placeholder="e.g. Wanjiru" />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input type="text" placeholder="e.g. Chepkemoi" />
        </div>
      </div>
      <div className="form-group">
        <label>Sport</label>
        <select>
          <option value="">Select…</option>
          {[
            "Football (Soccer)",
            "Athletics",
            "Rugby",
            "Basketball",
            "Boxing",
            "Swimming",
            "Cycling",
            "Cricket",
            "Tennis",
            "Other",
          ].map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Position / Discipline</label>
          <input type="text" placeholder="e.g. Midfielder / Marathon" />
        </div>
        <div className="form-group">
          <label>Country</label>
          <input type="text" placeholder="e.g. Kenya" />
        </div>
      </div>
      <div className="form-group">
        <label>Club / Team (search)</label>
        <ClubSearch />
      </div>
      <div className="form-group">
        <label>Free Agent?</label>
        <select
          value={isFreeAgent}
          onChange={(e) => setIsFreeAgent(e.target.value)}
        >
          <option value="yes">Yes — actively seeking</option>
          <option value="no">No — under contract</option>
          <option value="open">Open to offers</option>
        </select>
      </div>
      {isFreeAgent === "no" && (
        <div
          className="form-group"
          style={{ animation: "fadeSlideIn 0.25s ease both" }}
        >
          <label>Current Contract Expiry Date</label>
          <input type="date" style={{ color: "var(--text)" }} />
          <p
            style={{
              fontSize: "0.7rem",
              color: "var(--text-muted)",
              marginTop: "0.4rem",
              fontStyle: "italic",
            }}
          >
            Kept private — used to generate timely transfer opportunity alerts.
          </p>
        </div>
      )}
      <div className="form-group">
        <label>Personal Best / Key Stat</label>
        <input type="text" placeholder="e.g. Marathon PB: 2:04:32" />
      </div>
      <PortfolioLinks />
      <div className="form-group">
        <label>Brief Bio</label>
        <textarea
          rows={3}
          placeholder="Tell investors about your career highlights…"
          style={{ resize: "vertical" }}
        />
      </div>
    </div>
  );
}

function InvestorFields() {
  return (
    <div>
      <div className="form-row">
        <div className="form-group">
          <label>First Name</label>
          <input type="text" placeholder="e.g. David" />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input type="text" placeholder="e.g. Nkrumah" />
        </div>
      </div>
      <div className="form-group">
        <label>Organisation / Fund Name</label>
        <input type="text" placeholder="e.g. Adidas Sports Fund" />
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Investment Focus</label>
          <select>
            <option value="">Select…</option>
            <option>Individual Athletes</option>
            <option>Sports Clubs</option>
            <option>Both</option>
          </select>
        </div>
        <div className="form-group">
          <label>Budget Range (USD)</label>
          <select>
            <option value="">Select…</option>
            <option>Under $50K</option>
            <option>$50K – $200K</option>
            <option>$200K – $1M</option>
            <option>$1M+</option>
          </select>
        </div>
      </div>
      <div className="form-group">
        <label>Sports of Interest</label>
        <input type="text" placeholder="e.g. Athletics, Football, Rugby" />
      </div>
      <div className="form-group">
        <label>Website / LinkedIn</label>
        <input type="url" placeholder="https://…" />
      </div>
    </div>
  );
}

function ClubFields() {
  return (
    <div>
      <div className="form-row">
        <div className="form-group">
          <label>Contact First Name</label>
          <input type="text" placeholder="e.g. James" />
        </div>
        <div className="form-group">
          <label>Contact Last Name</label>
          <input type="text" placeholder="e.g. Otieno" />
        </div>
      </div>
      <div className="form-group">
        <label>Club / Organisation Name</label>
        <input type="text" placeholder="e.g. Nairobi FC" />
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Sport</label>
          <select>
            <option value="">Select…</option>
            <option>Football (Soccer)</option>
            <option>Athletics</option>
            <option>Rugby</option>
            <option>Basketball</option>
            <option>Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>League / Division</label>
          <input type="text" placeholder="e.g. Kenyan Premier League" />
        </div>
      </div>
      <div className="form-group">
        <label>Year Founded</label>
        <input type="number" placeholder="e.g. 1998" min={1850} max={2026} />
      </div>
      <div className="form-group">
        <label>Official Club Website</label>
        <input type="url" placeholder="https://…" />
      </div>
      <div className="form-group">
        <label>Transfer / Recruitment Contact Email</label>
        <input type="email" placeholder="transfers@yourclub.com" />
      </div>
    </div>
  );
}

// ─── Main register page ──────────────────────────────────────────────────────
function RegisterPageInner() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [role, setRole] = useState<Role>("talent");
  const [step, setStep] = useState(1);

  useEffect(() => {
    const r = searchParams.get("role") as Role | null;
    if (r && ["talent", "investor", "club"].includes(r)) setRole(r);
  }, [searchParams]);

  function handleRegistrationSubmit() {
    router.push(`/onboarding?role=${role}`);
  }

  const roles: { id: Role; icon: string; label: string }[] = [
    { id: "talent", icon: "🏃", label: "Talent" },
    { id: "investor", icon: "💼", label: "Investor" },
    { id: "club", icon: "🏟️", label: "Club" },
  ];

  return (
    <div className="auth-page">
      <div className="auth-nav">
        <Link
          href="/"
          className="logo"
          style={{ fontFamily: "'Raleway',sans-serif", fontSize: "1.45rem" }}
        >
          TALO
        </Link>
        <div className="auth-nav-links">
          <Link href="/">← Back to Home</Link>
          <Link href="/login" className="highlight">
            Sign In
          </Link>
        </div>
      </div>

      <div className="auth-body">
        <AuthPanelLeft />

        <div className="auth-panel-right">
          <div className="auth-form-wrap">
            <>
                <h2 className="form-title">Join the Exchange.</h2>
                <p className="form-sub">
                  Already have an account? <Link href="/login">Sign in</Link>
                </p>

                <StepBar step={step} />

                {/* ── STEP 1: Role selection ── */}
                {step === 1 && (
                  <div>
                    <p
                      style={{
                        fontSize: "0.82rem",
                        color: "var(--text-muted)",
                        marginBottom: "1.2rem",
                      }}
                    >
                      Select your primary role on the exchange.
                    </p>
                    <div className="role-selector">
                      {roles.map((r) => (
                        <button
                          key={r.id}
                          type="button"
                          className={`role-btn${role === r.id ? " selected" : ""}`}
                          onClick={() => setRole(r.id)}
                        >
                          <div className="role-icon">{r.icon}</div>
                          <div className="role-name">{r.label}</div>
                        </button>
                      ))}
                    </div>

                    <div className="form-group">
                      <label>Email Address</label>
                      <input type="email" placeholder="you@example.com" />
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label>Password</label>
                        <input
                          type="password"
                          placeholder="Min. 8 characters"
                        />
                      </div>
                      <div className="form-group">
                        <label>Confirm Password</label>
                        <input type="password" placeholder="Repeat password" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Country</label>
                      <select>
                        <option value="">Select country…</option>
                        {[
                          "Kenya",
                          "Nigeria",
                          "Ghana",
                          "South Africa",
                          "Ethiopia",
                          "Tanzania",
                          "Uganda",
                          "Senegal",
                          "Zimbabwe",
                          "Egypt",
                          "Morocco",
                          "Ivory Coast",
                          "Cameroon",
                          "Other",
                        ].map((c) => (
                          <option key={c}>{c}</option>
                        ))}
                      </select>
                    </div>

                    <button
                      className="btn btn-navy btn-full"
                      onClick={() => setStep(2)}
                    >
                      Continue →
                    </button>
                  </div>
                )}

                {/* ── STEP 2: Role-specific details ── */}
                {step === 2 && (
                  <div>
                    {role === "talent" && <TalentFields />}
                    {role === "investor" && <InvestorFields />}
                    {role === "club" && <ClubFields />}
                    <div
                      style={{
                        display: "flex",
                        gap: "1rem",
                        marginTop: "1rem",
                      }}
                    >
                      <button
                        className="btn btn-outline"
                        style={{ flex: 1 }}
                        onClick={() => setStep(1)}
                      >
                        ← Back
                      </button>
                      <button
                        className="btn btn-navy"
                        style={{ flex: 2 }}
                        onClick={() => setStep(3)}
                      >
                        Continue →
                      </button>
                    </div>
                  </div>
                )}

                {/* ── STEP 3: Verification & submit ── */}
                {step === 3 && (
                  <div>
                    <div
                      style={{
                        background: "#fff",
                        borderRadius: "var(--radius)",
                        padding: "1.5rem",
                        marginBottom: "1.5rem",
                        border: "1px solid var(--cream-dark)",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "0.78rem",
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: "var(--text-muted)",
                          marginBottom: "1rem",
                        }}
                      >
                        Upload for Verification
                      </p>
                      <div className="form-group">
                        <label>Government-Issued ID</label>
                        <input
                          type="file"
                          style={{
                            fontSize: "0.82rem",
                            padding: "0.6rem 0.8rem",
                            background: "var(--cream)",
                          }}
                          accept=".pdf,.jpg,.png"
                        />
                      </div>
                      {role === "talent" && (
                        <div className="form-group">
                          <label>
                            Competition Credential / Certificate (optional)
                          </label>
                          <input
                            type="file"
                            style={{
                              fontSize: "0.82rem",
                              padding: "0.6rem 0.8rem",
                              background: "var(--cream)",
                            }}
                            accept=".pdf,.jpg,.png"
                          />
                        </div>
                      )}
                    </div>

                    <div className="form-group">
                      <label>Phone Number</label>
                      <input type="tel" placeholder="+254 700 000000" />
                    </div>
                    <div className="form-group">
                      <label>How did you hear about Talo?</label>
                      <select>
                        {[
                          "Social Media",
                          "Word of Mouth",
                          "Event / Conference",
                          "News / Media",
                          "iLabAfrica",
                          "Other",
                        ].map((o) => (
                          <option key={o}>{o}</option>
                        ))}
                      </select>
                    </div>

                    <div className="check-group">
                      <input type="checkbox" id="terms" />
                      <label htmlFor="terms">
                        I agree to the <a href="#">Terms of Service</a> and{" "}
                        <a href="#">Privacy Policy</a>. I confirm all submitted
                        information is accurate.
                      </label>
                    </div>
                    <div className="check-group">
                      <input type="checkbox" id="comms" />
                      <label htmlFor="comms">
                        Send me platform updates, bid alerts and free agency
                        notifications.
                      </label>
                    </div>

                    <div style={{ display: "flex", gap: "1rem" }}>
                      <button
                        className="btn btn-outline"
                        style={{ flex: 1 }}
                        onClick={() => setStep(2)}
                      >
                        ← Back
                      </button>
                      <button
                        className="btn btn-primary"
                        style={{ flex: 2 }}
                        onClick={handleRegistrationSubmit}
                      >
                        Continue to Onboarding →
                      </button>
                    </div>
                  </div>
                )}
              </>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RegisterPage() {
  return (
    <Suspense
      fallback={
        <div style={{ padding: "2rem", textAlign: "center" }}>Loading...</div>
      }
    >
      <RegisterPageInner />
    </Suspense>
  );
}
