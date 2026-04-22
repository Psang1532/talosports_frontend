import Link from 'next/link'
import Hero from '@/components/Hero'
import StatsBand from '@/components/StatsBand'
import MarketplaceSection from '@/components/MarketplaceSection'
import AudienceStrip from '@/components/AudienceStrip'
import WalletStrip from '@/components/WalletStrip'
import SocialProof from '@/components/SocialProof'

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBand />
      <MarketplaceSection />
      <AudienceStrip />
      <section className="cta-split-upgrade" id="how">
        <div className="cta-pane-upgrade dark">
          <p className="cta-eye">How It Works</p>
          <h2 className="cta-h">Create your role-specific profile and enter the exchange in minutes.</h2>
          <p className="cta-p">
            Choose whether you are joining as talent, an investor, or a club.
            Complete verification, unlock deals, and transact through one shared market.
          </p>
          <ul className="cta-feature-list">
            <li>Verified onboarding tailored to each role.</li>
            <li>Clear routing to sign in, register, and complete onboarding.</li>
            <li>Unified access to sponsorships, investments, transfers, and payouts.</li>
          </ul>
          <div className="hero-actions">
            <Link href="/login" className="btn btn-ghost">
              Sign In
            </Link>
            <Link href="/register" className="btn btn-primary">
              Start Registration
            </Link>
          </div>
        </div>

        <div className="cta-pane-upgrade light">
          <p className="cta-eye">Join By Role</p>
          <h2 className="cta-h">Direct entry points for every side of the platform.</h2>
          <p className="cta-p">
            Users should not have to guess where to begin. The landing page exposes explicit role links for the three supported registration flows.
          </p>
          <ul className="cta-feature-list">
            <li>Talent profiles for athletes and sports professionals.</li>
            <li>Investor profiles for sponsors, scouts, and capital partners.</li>
            <li>Club profiles for teams, academies, and federations.</li>
          </ul>
          <div className="hero-actions" style={{ justifyContent: 'flex-start' }}>
            <Link href="/register?role=talent" className="btn btn-navy">
              Register as Talent
            </Link>
            <Link href="/register?role=investor" className="btn btn-outline">
              Register as Investor
            </Link>
            <Link href="/register?role=club" className="btn btn-outline">
              Register as Club
            </Link>
          </div>
        </div>
      </section>

      <WalletStrip />
      <SocialProof />
    </>
  )
}
