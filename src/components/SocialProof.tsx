const quotes = [
  {
    text: 'TALO helped me close a KES 900K sponsorship deal in under two weeks. My wallet received the payout instantly via M-Pesa. This is infrastructure African athletes have needed for decades.',
    author: 'Wanjiru Chepkemoi',
    role: 'Long-distance Athlete · Kenya · 2× National Champion',
  },
  {
    text: 'As a diaspora investor based in London, I finally have a structured way to put capital into African sport. The deal flow is real, the verification is rigorous, and the returns are tracked transparently.',
    author: 'David Nkrumah-Asante',
    role: 'Private Investor · Ghana/UK · $120K deployed on TALO',
  },
  {
    text: 'We scouted three players, ran our fan membership campaign and raised our first institutional round — all on one platform. TALO is the central exchange we wished existed when we started.',
    author: 'James Otieno',
    role: 'General Manager · Accra Lions FC · Ghana Premier League',
  },
]

export default function SocialProof() {
  return (
    <section className="proof-section">
      <div className="proof-quotes">
        {quotes.map((q) => (
          <div key={q.author} className="proof-quote">
            <div className="proof-quote-text">&ldquo;{q.text}&rdquo;</div>
            <div className="proof-quote-author">{q.author}</div>
            <div className="proof-quote-role">{q.role}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
