import Link from 'next/link'
import AuthPanelLeft from '@/components/AuthPanelLeft'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Reset Password — TALO' }

export default function ForgotPasswordPage() {
  return (
    <div className="auth-page">
      <div className="auth-nav">
        <Link href="/" className="logo" style={{ fontFamily: "'Raleway',sans-serif", fontSize: '1.45rem' }}>
          TALO
        </Link>
        <div className="auth-nav-links">
          <Link href="/login">← Back to Sign In</Link>
          <Link href="/register" className="highlight">
            Create Account
          </Link>
        </div>
      </div>

      <div className="auth-body">
        <AuthPanelLeft />

        <div className="auth-panel-right">
          <div className="auth-form-wrap">
            <h2 className="form-title">Reset your password.</h2>
            <p className="form-sub">
              Enter the email address linked to your account and we&apos;ll send a secure password reset link.
            </p>

            <div className="form-group">
              <label htmlFor="reset-email">Email Address</label>
              <input id="reset-email" type="email" placeholder="you@example.com" />
            </div>

            <button className="btn btn-navy btn-full">Send Reset Link</button>

            <p style={{ textAlign: 'center', fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '1rem' }}>
              Remembered your password?{' '}
              <Link href="/login" style={{ color: 'var(--gold)', fontWeight: 600 }}>
                Return to sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}