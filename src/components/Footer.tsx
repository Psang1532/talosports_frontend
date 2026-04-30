import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <span className="footer-logo">TALO</span>
          <p className="footer-tag">
            Central Exchange for African Sports.
            <br />
            Athletes · Investors · Fans · Clubs · Diaspora.
            <br />
            One platform. One economy.
          </p>
        </div>
        <div>
          <p className="fcol-title">Platform</p>
          <ul className="flinks">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/marketplace">Marketplace</Link>
            </li>
            <li>
              <a href="/#roles">Ecosystem</a>
            </li>
            <li>
              <a href="/#how">How It Works</a>
            </li>
            <li>
              <Link href="/advisory">Advisory</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="fcol-title">Join</p>
          <ul className="flinks">
            <li>
              <Link href="/login">Sign In</Link>
            </li>
            <li>
              <Link href="/register?role=talent">Register as Talent</Link>
            </li>
            <li>
              <Link href="/register?role=investor">Register as Investor</Link>
            </li>
            <li>
              <Link href="/register?role=club">Register a Club</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bot">
        <p className="fcopy">
          © 2026 TALO Africa. All rights reserved.
        </p>
        <ul className="flegal">
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Terms</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
