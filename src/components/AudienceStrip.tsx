import Link from "next/link";


const audience = [
  {
    title: "Athletes",
    desc: "Build your verified profile, monetise your brand, and close sponsorships and transfers — all from your phone.",
    
  },
  {
    title: "Investors",
    desc: "Access a continent-wide deal flow — athlete equity, club rounds, infrastructure funds and diaspora pools.",
    
  },
  {
    title: "Brands and Sponsors",
    desc: "Invest back home. Back the next generation of African sporting talent from anywhere in the world.",
    
  },
  {
    title: "Federations and Leagues",
    desc: "Scout at scale, manage transfers, raise institutional capital and run your fan economy inside one platform.",
    
  },
  {
    title: "Fans",
    desc: "Buy tickets, join memberships, collect merchandise and participate in the ownership of your favourite clubs.",
    
  },
  {
    title: "Diaspora",
    desc: "Connect with your community, support local talent, and invest in the future of African sports.",
    
  },
];

export default function AudienceStrip() {
  return (
    <section className="audience-strip" id="roles">
      <div className="inner" style={{ marginBottom: "2rem" }}>
        <p className="sec-label">Who It&apos;s For</p>
        <h2 className="sec-title">
          Six pillars of the <em>ecosystem</em>.
        </h2>
      </div>

      <div className="audience-grid">
        {audience.map((a) => (
          <div key={a.title} className="aud-card">
            <div className="aud-title">{a.title}</div>
            <div className="aud-desc">{a.desc}</div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "3rem" }}>
        <Link href="/register" className="btn btn-navy">
          Join the Exchange →
        </Link>
      </div>
    </section>
  );
}
