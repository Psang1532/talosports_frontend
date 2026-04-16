'use client'

import { useState } from 'react'
import Link from 'next/link'

const steps = ['Profile', 'Preferences', 'Launch']

function StepBar({ step }: { step: number }) {
  return (
    <div className="step-bar">
      {steps.map((label, i) => {
        const num = i + 1
        const circleClass = num < step ? 'done' : num === step ? 'active' : ''
        return (
          <div key={label} className="step-item">
            <div className={`step-circle ${circleClass}`}>{num < step ? '✓' : num}</div>
            {i < steps.length - 1 && <div className={`step-line${num < step ? ' done' : ''}`} />}
          </div>
        )
      })}
    </div>
  )
}

export default function OnboardingPage() {
  const [step, setStep] = useState(1)
  const [done, setDone] = useState(false)

  return (
    <div className="auth-page">
      <div className="auth-nav">
        <Link href="/" className="logo" style={{ fontFamily: "'Raleway',sans-serif", fontSize: '1.45rem' }}>TALO</Link>
        <div className="auth-nav-links">
          <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' }}>
            Step {step} of {steps.length} — {steps[step - 1]}
          </span>
        </div>
      </div>

      <div className="auth-body">
        {/* Left branding panel */}
        <div className="auth-panel-left">
          <div className="auth-brand-logo">TALO</div>
          <div className="auth-brand-sub">Complete Your Profile</div>
          <div className="auth-brand-quote">
            The more complete your profile, the more deals and opportunities surface for you automatically.
          </div>
          <div className="auth-panel-badges">
            {[
              { icon: '✅', title: 'Verified profiles get 4× more bids',  desc: 'Upload ID and credentials to unlock full exchange access.' },
              { icon: '🔔', title: 'Smart deal alerts',                   desc: 'Set your preferences to receive only relevant opportunities.' },
              { icon: '💸', title: 'Wallet ready in minutes',             desc: 'Connect M-Pesa or bank to start receiving payouts immediately.' },
            ].map((b) => (
              <div key={b.title} className="auth-badge">
                <div className="auth-badge-icon">{b.icon}</div>
                <div className="auth-badge-txt"><strong>{b.title}</strong>{b.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="auth-panel-right">
          <div className="auth-form-wrap">
            {done ? (
              <div className="success-screen show">
                <div className="success-icon">🚀</div>
                <div className="success-title">You&apos;re live on TALO!</div>
                <div className="success-sub">
                  Your profile is active and your wallet is ready. Head to the dashboard
                  to explore live deals, manage your wallet and start transacting.
                </div>
                <Link href="/" className="btn btn-primary">Go to Exchange →</Link>
              </div>
            ) : (
              <>
                <h2 className="form-title">
                  {step === 1 && 'Complete your profile.'}
                  {step === 2 && 'Set your preferences.'}
                  {step === 3 && 'Connect your wallet.'}
                </h2>
                <p className="form-sub">
                  {step === 1 && 'Add a photo, bio and your public exchange details.'}
                  {step === 2 && 'Tell us what deals, alerts and opportunities matter to you.'}
                  {step === 3 && "Link your mobile money or bank to start receiving payouts."}
                </p>

                <StepBar step={step} />

                {/* STEP 1 — Profile */}
                {step === 1 && (
                  <div>
                    <div className="form-group">
                      <label>Profile Photo</label>
                      <input type="file" accept="image/*" style={{ fontSize: '0.82rem', padding: '0.6rem 0.8rem', background: 'var(--cream)' }} />
                    </div>
                    <div className="form-group">
                      <label>Public Display Name</label>
                      <input type="text" placeholder="How you appear on the exchange" />
                    </div>
                    <div className="form-group">
                      <label>Bio (public)</label>
                      <textarea rows={4} placeholder="Describe yourself, your career and what you're looking for on TALO…" style={{ resize: 'vertical' }} />
                    </div>
                    <div className="form-group">
                      <label>Social / Website Links</label>
                      <input type="url" placeholder="Instagram, Twitter, personal site…" />
                    </div>
                    <button className="btn btn-navy btn-full" onClick={() => setStep(2)}>Save & Continue →</button>
                    <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                      <button type="button" onClick={() => setStep(2)} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '0.78rem', textDecoration: 'underline' }}>
                        Skip for now
                      </button>
                    </p>
                  </div>
                )}

                {/* STEP 2 — Preferences */}
                {step === 2 && (
                  <div>
                    <div className="form-group">
                      <label>Deal Types You&apos;re Interested In</label>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginTop: '0.5rem' }}>
                        {['Sponsorships', 'Investments', 'Transfers', 'Tickets', 'Merchandise', 'Fan Memberships'].map((opt) => (
                          <label key={opt} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', color: 'var(--text)', textTransform: 'none', letterSpacing: 0, cursor: 'pointer' }}>
                            <input type="checkbox" defaultChecked style={{ accentColor: 'var(--gold)', width: 15, height: 15 }} />
                            {opt}
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Sports of Interest</label>
                      <input type="text" placeholder="e.g. Athletics, Football, Rugby" />
                    </div>
                    <div className="form-group">
                      <label>Regions of Interest</label>
                      <select>
                        <option value="">All Africa</option>
                        <option>East Africa</option>
                        <option>West Africa</option>
                        <option>Southern Africa</option>
                        <option>North Africa</option>
                        <option>Central Africa</option>
                        <option>Global (Diaspora)</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Notification Frequency</label>
                      <select>
                        <option>Real-time (Recommended)</option>
                        <option>Daily digest</option>
                        <option>Weekly summary</option>
                        <option>Off</option>
                      </select>
                    </div>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <button className="btn btn-outline" style={{ flex: 1 }} onClick={() => setStep(1)}>← Back</button>
                      <button className="btn btn-navy"    style={{ flex: 2 }} onClick={() => setStep(3)}>Continue →</button>
                    </div>
                  </div>
                )}

                {/* STEP 3 — Wallet */}
                {step === 3 && (
                  <div>
                    <div style={{ background: '#fff', borderRadius: 'var(--radius)', padding: '1.5rem', marginBottom: '1.5rem', border: '1px solid var(--cream-dark)' }}>
                      <p style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                        Connect Payout Method
                      </p>
                      <div className="form-group">
                        <label>Payout Method</label>
                        <select>
                          <option>M-Pesa (Kenya)</option>
                          <option>Airtel Money</option>
                          <option>MTN Mobile Money</option>
                          <option>Bank Transfer (SWIFT)</option>
                          <option>PayPal</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Mobile Money Number / Account</label>
                        <input type="text" placeholder="+254 700 000 000" />
                      </div>
                      <div className="form-group">
                        <label>Preferred Currency</label>
                        <select>
                          <option>KES — Kenyan Shilling</option>
                          <option>NGN — Nigerian Naira</option>
                          <option>GHS — Ghanaian Cedi</option>
                          <option>ZAR — South African Rand</option>
                          <option>USD — US Dollar</option>
                          <option>GBP — British Pound</option>
                        </select>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <button className="btn btn-outline" style={{ flex: 1 }} onClick={() => setStep(2)}>← Back</button>
                      <button className="btn btn-primary" style={{ flex: 2 }} onClick={() => setDone(true)}>
                        Launch My Profile →
                      </button>
                    </div>
                    <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                      <button type="button" onClick={() => setDone(true)} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '0.78rem', textDecoration: 'underline' }}>
                        Skip — I&apos;ll connect my wallet later
                      </button>
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
