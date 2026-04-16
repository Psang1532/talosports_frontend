import type { FeedMessage, StatItem, AthleteCard, MarketCard } from '@/types'

export const feedMessages: FeedMessage[] = [
  { type: 'invest',   label: '💰 Investment',   body: 'Nairobi FC Academy — $240K round\n52% funded · 22 investors',         meta: 'Just now · Nairobi, KE' },
  { type: 'sponsor',  label: '🤝 Sponsorship',  body: 'MTN Uganda × Femi Nkosi · Boxing\n1-year brand deal · signed',         meta: '3 min ago · Kampala, UG' },
  { type: 'ticket',   label: '🎟️ Tickets',      body: 'CAF Champions League Semi · Cairo\n4,200 / 5,000 sold',                meta: 'Selling fast · 2 days left' },
  { type: 'transfer', label: '⚡ Transfer',      body: 'Almaz Osei · Marathon · Ethiopia\nEuropean interest — 3 bids open',    meta: '8 min ago · Verified' },
  { type: 'invest',   label: '💰 Diaspora Fund', body: 'East Africa Sports Trust\n$864K raised of $1.2M · 61 investors',      meta: '12 min ago · Multi-regional' },
  { type: 'sponsor',  label: '🤝 Sponsorship',  body: 'Airtel Africa × Lagos United FC\nKit deal · $180K · 2 seasons',        meta: '18 min ago · Lagos, NG' },
  { type: 'ticket',   label: '🎟️ Memberships',  body: 'Gor Mahia FC Fan Club · 890 new\nmembers joined this week',            meta: 'Ongoing · Nairobi, KE' },
  { type: 'transfer', label: '⚡ Free Agent',    body: 'Kwame Asante · Midfielder · Ghana\nTransfer window open · 4 bids',     meta: '22 min ago · Accra, GH' },
]

export const registeredClubs: string[] = [
  'Nairobi City Stars FC', 'Gor Mahia FC', 'AFC Leopards', 'Tusker FC', 'KCB FC',
  'Wazito FC', 'Bandari FC', "Murang'a SEAL FC", 'Kariobangi Sharks', 'Ulinzi Stars FC',
  'Lagos United FC', 'Enyimba FC', 'Rangers International FC', 'Heartland FC', 'Plateau United FC',
  'Accra Lions FC', 'Asante Kotoko SC', 'Hearts of Oak SC', 'Medeama SC', 'Dreams FC',
  'Orlando Pirates FC', 'Kaizer Chiefs FC', 'Mamelodi Sundowns FC', 'Cape Town City FC',
  'Al Ahly SC', 'Zamalek SC', 'Pyramids FC', 'Simba SC', 'Yanga SC', 'Azam FC',
  'KCCA FC', 'Vipers SC', 'SC Villa', 'URA FC', 'Eldoret Athletics Club',
  'Kenya Police Athletics', 'Athletics Kenya Elite', 'Stade Malien', 'Mamelodi Athletics',
]

export const statsData: StatItem[] = [
  { num: '54',    label: 'African Nations' },
  { num: '18K+',  label: 'Verified Athletes' },
  { num: '$4.1B', label: 'Capital Deployed' },
  { num: '620+',  label: 'Active Investors' },
  { num: '2,800+',label: 'Sponsorships Listed' },
  { num: '340K',  label: 'Fan Members' },
]

export const athletesData: AthleteCard[] = [
  { initials: 'WC', flag: '🇰🇪', name: 'Wanjiru Chepkemoi', sport: 'Athletics · Long Distance', statusClass: 'status-active',  statusLabel: 'Sponsorship Open', valLabel: 'Asking',   valAmount: '$48K/yr' },
  { initials: 'CO', flag: '🇳🇬', name: 'Chidi Okonkwo',      sport: 'Football · Right Wing',     statusClass: 'status-free',    statusLabel: 'Free Agent',       valLabel: 'Bids',     valAmount: '4 open' },
  { initials: 'KA', flag: '🇬🇭', name: 'Kwame Asante',        sport: 'Football · Midfielder',     statusClass: 'status-free',    statusLabel: 'Transfer Listed',  valLabel: 'Value',    valAmount: '$85K' },
  { initials: 'TM', flag: '🇿🇼', name: 'Tendai Mutamba',      sport: 'Rugby · Flanker',           statusClass: 'status-active',  statusLabel: 'Sponsorship Open', valLabel: 'Asking',   valAmount: '$22K/yr' },
  { initials: 'AD', flag: '🇸🇳', name: 'Amara Diallo',        sport: 'Athletics · Sprint',        statusClass: 'status-free',    statusLabel: 'Available',        valLabel: 'Seeking',  valAmount: 'Sponsor' },
  { initials: 'FN', flag: '🇿🇦', name: 'Femi Nkosi',          sport: 'Boxing · Welterweight',     statusClass: 'status-seeking', statusLabel: 'Seeking Investor', valLabel: 'Target',   valAmount: '$30K' },
  { initials: 'AO', flag: '🇪🇹', name: 'Almaz Osei',          sport: 'Athletics · Marathon',      statusClass: 'status-active',  statusLabel: 'Brand Deal Open',  valLabel: 'Asking',   valAmount: '$35K/yr' },
]

export const sponsorshipsData: MarketCard[] = [
  {
    typeClass: 'sponsor', typeLabel: 'Sponsorship', badgeClass: 'badge-open', badgeLabel: 'Open',
    title: 'Wanjiru Chepkemoi — Athletics', sub: 'Kenya · Long-distance running · 2× national champion',
    valueLbl: 'Asking', value: '$48,000 / year', progressWidth: '65%', progressNote: '3 brands in negotiation',
    tags: ['Athletics', 'Kenya', 'Endorsement'], ctaLabel: 'Bid →',
  },
  {
    typeClass: 'sponsor', typeLabel: 'Sponsorship', badgeClass: 'badge-open', badgeLabel: 'Open',
    title: 'Accra Lions FC — Kit Deal', sub: 'Ghana Premier League · 4,200 match attendees/game',
    valueLbl: 'Asking', value: '$120,000 / season', progressWidth: '30%', progressNote: '1 brand in negotiation',
    tags: ['Football', 'Ghana', 'Kit'], ctaLabel: 'Bid →',
  },
  {
    typeClass: 'sponsor', typeLabel: 'Sponsorship', badgeClass: 'badge-funded', badgeLabel: 'Closing Soon',
    title: 'Tendai Mutamba — Rugby', sub: 'Zimbabwe · Flanker · Super Rugby prospect',
    valueLbl: 'Asking', value: '$22,000 / year', progressWidth: '88%', progressNote: '5 brands bidding — closes in 48h',
    tags: ['Rugby', 'Zimbabwe'], ctaLabel: 'Bid →',
  },
]

export const investmentsData: MarketCard[] = [
  {
    typeClass: 'invest', typeLabel: 'Investment', badgeClass: 'badge-open', badgeLabel: 'Open',
    title: 'Nairobi FC Youth Academy', sub: 'Kenya · Infrastructure round · Tier 2 academy build-out',
    valueLbl: 'Target', value: '$480,000', progressWidth: '52%', progressNote: '22 investors · $240K raised',
    tags: ['Football', 'Academy', 'Kenya'], ctaLabel: 'Invest →',
  },
  {
    typeClass: 'invest', typeLabel: 'Investment', badgeClass: 'badge-open', badgeLabel: 'Open',
    title: 'East Africa Sports Trust', sub: 'Diaspora fund · Multi-sport · East Africa',
    valueLbl: 'Target', value: '$1,200,000', progressWidth: '72%', progressNote: '61 investors · $864K raised',
    tags: ['Diaspora', 'Multi-Sport', 'Fund'], ctaLabel: 'Invest →',
  },
  {
    typeClass: 'invest', typeLabel: 'Investment', badgeClass: 'badge-funded', badgeLabel: 'Funded',
    title: 'Femi Nkosi — Boxer Equity', sub: 'South Africa · Welterweight · WBC ranking target',
    valueLbl: 'Raise', value: '$30,000', progressWidth: '100%', progressNote: 'Fully funded — 8 investors',
    tags: ['Boxing', 'Athlete Equity', 'South Africa'], ctaLabel: 'View →',
  },
]

export const ticketsData: MarketCard[] = [
  {
    typeClass: 'ticket', typeLabel: '🎟️ Event Tickets', badgeClass: 'badge-open', badgeLabel: 'On Sale',
    title: 'AFCON Qualifier · Nigeria vs Ghana', sub: 'Lagos · Teslim Balogun Stadium · 18 Jan 2026',
    valueLbl: 'From', value: '₦8,500', progressWidth: '62%', progressNote: '7,400 / 12,000 tickets sold',
    tags: ['Football', 'AFCON', 'Nigeria'], ctaLabel: 'Buy Tickets →',
  },
  {
    typeClass: 'ticket', typeLabel: '🎟️ Event Tickets', badgeClass: 'badge-funded', badgeLabel: 'Selling Fast',
    title: 'CAF Champions League Semi-Final', sub: 'Cairo · 30 June Stadium · 28 Jan 2026',
    valueLbl: 'From', value: '$22', progressWidth: '84%', progressNote: '4,200 / 5,000 VIP sold',
    tags: ['Football', 'CAF', 'Egypt'], ctaLabel: 'Buy Tickets →',
  },
  {
    typeClass: 'ticket', typeLabel: '🎟️ Marathon Entry', badgeClass: 'badge-open', badgeLabel: 'Open',
    title: 'Nairobi International Marathon 2026', sub: 'Nairobi · 15 Feb 2026 · 42K & 10K routes',
    valueLbl: 'Entry', value: 'KES 1,500', progressNote: '1,840 entries registered',
    tags: ['Athletics', 'Marathon', 'Kenya'], ctaLabel: 'Register →',
  },
]

export const merchData: MarketCard[] = [
  {
    typeClass: 'merch', typeLabel: '⭐ Membership', badgeClass: 'badge-open', badgeLabel: 'Active',
    title: 'Gor Mahia FC — Fan Club Membership', sub: 'Kenya · Priority tickets, exclusive content, voting rights',
    valueLbl: 'Annual', value: 'KES 1,200',
    progressNote: '4,200 active members · Renews automatically',
    tags: ['Football', 'Fan Club', 'Kenya'], ctaLabel: 'Join →',
  },
  {
    typeClass: 'merch', typeLabel: '👕 Merchandise', badgeClass: 'badge-open', badgeLabel: 'In Stock',
    title: 'Wanjiru Chepkemoi — Signature Collection', sub: 'Athlete-owned merch · Training wear + accessories',
    valueLbl: 'Starting at', value: '$18',
    progressNote: 'Ships Pan-Africa + diaspora destinations',
    tags: ['Athletics', 'Merch'], ctaLabel: 'Shop →',
  },
  {
    typeClass: 'merch', typeLabel: '🏆 Pro Pass', badgeClass: 'badge-funded', badgeLabel: 'Exclusive',
    title: 'TALO Pro — Investor Membership', sub: 'Early deal access · Analytics dashboard · Priority bids',
    valueLbl: 'Monthly', value: '$49',
    progressNote: '620 pro members · Cancel anytime',
    tags: ['Pro', 'Investor', 'Analytics'], ctaLabel: 'Go Pro →',
  },
]

export const tickerItems = [
  { dot: 'green', text: 'New Investment · KES 4.2M into Nairobi FC youth academy' },
  { dot: 'blue',  text: 'Sponsorship Closed · SportsPesa × 3 Kenyan athletes · $180K deal' },
  { dot: '',      text: 'Transfer Listed · Kwame Asante · Midfielder · Ghana · Open' },
  { dot: 'green', text: 'Ticket Sale · AFCON Qualifier · Lagos · 2,400 sold in 6 hrs' },
  { dot: 'blue',  text: 'Diaspora Fund Round · $620K raised · 38 investors · East Africa Sports Trust' },
  { dot: '',      text: 'Free Agent · Amara Diallo · Sprint Specialist · Senegal · Available' },
  { dot: 'green', text: 'Membership Launch · Gor Mahia FC Fan Club · 890 new members this week' },
  { dot: 'blue',  text: 'Brand Deal · Adidas Africa × 5 TALO-verified athletes · Announced' },
]
