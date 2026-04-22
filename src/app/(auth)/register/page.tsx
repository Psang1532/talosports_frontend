'use client'

import { useState, useEffect, Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams, useRouter } from 'next/navigation'
import AuthPanelLeft from '@/components/AuthPanelLeft'
import type { Role } from '@/types'

// ─── Main register page ──────────────────────────────────────────────────────
function RegisterPageInner() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [role, setRole] = useState<Role>('talent')

  useEffect(() => {
    const r = searchParams.get('role') as Role | null
    if (r && ['talent', 'investor', 'club'].includes(r)) setRole(r)
  }, [searchParams])

  const roles: { id: Role; label: string }[] = [
    { id: 'talent',   label: 'Talent' },
    { id: 'investor', label: 'Investor' },
    { id: 'club',     label: 'Club' },
  ]

  function handleSubmit() {
    router.push(`/onboarding?role=${role}`)
  }

  return (
    <div className="auth-page">

      {/* Nav */}
      <div className="auth-nav">
        <Link
          href="/"
          className="logo"
          style={{ fontFamily: "'Raleway',sans-serif", fontSize: '1.45rem' }}
        >
          TALO
        </Link>
        <div className="auth-nav-links">
          <Link href="/">← Back to Home</Link>
          <Link href="/login" className="highlight">Sign In</Link>
        </div>
      </div>

      <div className="auth-body">
        <AuthPanelLeft />

        <div className="auth-panel-right">
          <div className="auth-form-wrap">

            <h2 className="form-title">Join the Exchange.</h2>
            <p className="form-sub">
              Already have an account?{' '}
              <Link href="/login">Sign in</Link>
            </p>

            {/* ── Role selector ── */}
            <div className="role-selector" style={{ marginBottom: '1.8rem' }}>
              {roles.map((r) => (
                <button
                  key={r.id}
                  type="button"
                  className={`role-btn${role === r.id ? ' selected' : ''}`}
                  onClick={() => setRole(r.id)}
                >
                  <div className="role-name">{r.label}</div>
                </button>
              ))}
            </div>

            {/* ── Email & password ── */}
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Min. 8 characters"
                autoComplete="new-password"
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                id="confirm-password"
                type="password"
                placeholder="Repeat password"
                autoComplete="new-password"
              />
            </div>

            {/* ── Terms ── */}
            <div className="check-group">
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">
                I agree to the <a href="#">Terms of Service</a> and{' '}
                <a href="#">Privacy Policy</a>.
              </label>
            </div>

            {/* ── Submit ── */}
            <button
              className="btn btn-primary btn-full"
              onClick={handleSubmit}
              style={{ marginBottom: '1.4rem' }}
            >
              Create Account →
            </button>

            {/* ── Divider ── */}
            <div className="divider"><span>or continue with</span></div>

            {/* ── Social sign-in ── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>

              <button
                type="button"
                className="btn btn-outline btn-full"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', fontSize: '0.78rem' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Continue with Google
              </button>

              <button
                type="button"
                className="btn btn-outline btn-full"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', fontSize: '0.78rem' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Continue with Facebook
              </button>

              <button
                type="button"
                className="btn btn-outline btn-full"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', fontSize: '0.78rem' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                Continue with X
              </button>

            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Suspense wrapper (required for useSearchParams) ─────────────────────────
export default function RegisterPage() {
  return (
    <Suspense fallback={<div style={{ padding: '2rem', textAlign: 'center' }}>Loading...</div>}>
      <RegisterPageInner />
    </Suspense>
  )
}
