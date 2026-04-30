import type { FeedMessage, StatItem,  } from '@/types'

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
