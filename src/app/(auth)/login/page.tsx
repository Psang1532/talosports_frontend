import Link from 'next/link'
import AuthPanelLeft from '@/components/AuthPanelLeft'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Sign In — TALO' }

export default function LoginPage() {
  return (
    <div className="auth-page">
      {/* Auth nav */}
      <div className="auth-nav">
        <Link href="/" className="logo" style={{ fontFamily: "'Raleway',sans-serif", fontSize: '1.45rem' }}>
          TALO
        </Link>
        <div className="auth-nav-links">
          <Link href="/">← Back to Home</Link>
          <Link href="/register" className="highlight">Create Account</Link>
        </div>
      </div>

      <div className="auth-body">
        <AuthPanelLeft />

        <div className="auth-panel-right">
          <div className="auth-form-wrap">
            <h2 className="form-title">Welcome back.</h2>
            <p className="form-sub">
              Sign in to your Talo account. Don&apos;t have one?{' '}
              <Link href="/register">Create account</Link>
            </p>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input id="email" type="email" placeholder="you@example.com" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input id="password" type="password" placeholder="Enter your password" />
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1.5rem' }}>
              <Link href="/forgot-password" style={{ fontSize: '0.78rem', color: 'var(--gold)', fontWeight: 600, textDecoration: 'none' }}>
                Forgot password?
              </Link>
            </div>

            <button className="btn btn-navy btn-full">Sign In</button>

            <div className="divider"><span>or continue as</span></div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '0.7rem', marginBottom: '1.5rem' }}>
              <Link href="/register?role=talent"   className="btn btn-outline btn-full" style={{ padding: '0.7rem', fontSize: '0.65rem' }}>Talent</Link>
              <Link href="/register?role=investor" className="btn btn-outline btn-full" style={{ padding: '0.7rem', fontSize: '0.65rem' }}>Investor</Link>
              <Link href="/register?role=club"     className="btn btn-outline btn-full" style={{ padding: '0.7rem', fontSize: '0.65rem' }}>Club</Link>
            </div>

            <p style={{ textAlign: 'center', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              New to Talo?{' '}
              <Link href="/register" style={{ color: 'var(--gold)', fontWeight: 600 }}>
                Create your account →
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}