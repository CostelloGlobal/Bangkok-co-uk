/* ============================================================================
   Bangkok.co.uk — UK-focused Bangkok travel authority landing page
   ----------------------------------------------------------------------------
   Section anchors prepared for future internal linking:
     #why-visit  #areas  #where-to-stay  #things-to-do  #plan
     #getting-there  #when-to-visit  #budget  #trust  #faq  #newsletter
   ========================================================================== */

import { Icon } from '../components/icons';
import {
  SmartImage,
  ExploreSearch,
  AreaCard,
  MonthStrip,
  NewsletterForm,
} from '../components/interactive';

const LAST_REVIEWED = '1 February 2025';

const HERO_IMG =
  'https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=2400&auto=format&fit=crop';

const HERO_VIDEO_ID = 'tET1abGvZDk';
const HERO_POSTER =
  'https://images.unsplash.com/photo-1563492065599-3520f775eeed?q=80&w=2400&auto=format&fit=crop';

const U = (id) => `https://images.unsplash.com/${id}?q=80&w=1600&auto=format&fit=crop`;

const NAV_LINKS = [
  ['Destinations', '#areas'],
  ['Things To Do', '#things-to-do'],
  ['Where To Stay', '#where-to-stay'],
  ['Getting There', '#getting-there'],
  ['Travel Guide', '#faq'],
];

const FACTS = [
  { icon: 'plane', k: 'Flight time from the UK', v: '11–11½ hours direct from London Heathrow; 13–17 hours with one stop from Manchester, Birmingham, Edinburgh and other UK airports.' },
  { icon: 'clock', k: 'Time difference', v: 'Thailand is 7 hours ahead of the UK (6 during British Summer Time).' },
  { icon: 'wallet', k: 'Currency', v: 'Thai Baht (THB, ฿) — around ฿45 to £1. Cash rules the markets; cards work in malls and hotels.' },
  { icon: 'sun', k: 'Climate', v: 'Tropical year-round: 29–36°C by day. Cool and dry November–February; monsoon June–October.' },
  { icon: 'passport', k: 'Language & entry', v: 'Thai is the official language; English is widely spoken in tourist areas. UK passports: 60 days visa-free.' },
  { icon: 'pin', k: 'Why it works', v: 'A complete city-break destination in its own right — and the gateway to Thailand’s islands, jungles and ancient capitals.' },
];

const AREAS = [
  {
    id: 'area-old-city',
    name: 'Old City & Rattanakosin',
    kicker: 'The historic core',
    thai: 'รัตนโกสินทร์',
    short: 'the Old City',
    bestFor: 'first-timers and temple lovers',
    img: U('photo-1533050487297-09b450131914'),
    seed: 'bk-old-city',
    alt: 'Golden spires of the Grand Palace complex in Bangkok’s Old City under a blue sky',
    sizes: '(min-width: 768px) 58vw, 100vw',
    span: 'md:col-span-7',
    imgH: 'h-64 sm:h-80 md:h-[430px]',
    desc: 'The historic heart of Bangkok, home to its grandest sights: the Grand Palace and Wat Phra Kaew, the reclining Buddha at Wat Pho and Wat Arun rising across the river. Wide boulevards, canal-side shophouses and the city’s best museums make this the district to slow down in.',
    plan: [
      { t: '08:30', d: 'Grand Palace at opening — beat the heat and the tour groups (฿500, dress code enforced).' },
      { t: '11:30', d: 'Wat Pho for the reclining Buddha, then a 30-minute massage on site (from ฿420).' },
      { t: '15:00', d: 'Cross the river on the ฿5 ferry and climb Wat Arun’s terrace before the light turns golden.' },
      { t: '19:00', d: 'Dinner on the Tha Tien stretch, long-tail boats chattering past.' },
    ],
  },
  {
    id: 'area-sukhumvit',
    name: 'Sukhumvit',
    kicker: 'The modern spine',
    thai: 'สุขุมวิท',
    short: 'Sukhumvit',
    bestFor: 'nightlife, dining and easy BTS living',
    img: U('photo-1563492065599-3520f775eeed'),
    seed: 'bk-sukhumvit',
    alt: 'Bangkok traffic streaming through Sukhumvit after dark beneath neon signs',
    sizes: '(min-width: 768px) 42vw, 100vw',
    span: 'md:col-span-5',
    imgH: 'h-64 sm:h-80 md:h-[430px]',
    desc: 'Bangkok’s modern spine, running from Nana out past Thong Lor and On Nut — malls (Terminal 21, EmQuartier), international kitchens, speakeasies and some of the city’s highest rooftop bars. By day it’s cafés and day-spas; after dark, Soi 11 and Thong Lor take over.',
    plan: [
      { t: '11:00', d: 'Terminal 21 — a different world city on every floor, plus a food court that costs pennies.' },
      { t: '16:00', d: 'Benjakitti Park’s skyline boardwalk, built out over the water.' },
      { t: '19:30', d: 'Izakayas and wine bars around Thong Lor 10.' },
      { t: '22:00', d: 'One last cocktail on a Soi 11 rooftop.' },
    ],
  },
  {
    id: 'area-chinatown',
    name: 'Chinatown / Yaowarat',
    kicker: 'Noodle nirvana',
    thai: 'เยาวราช',
    short: 'Chinatown',
    bestFor: 'food lovers and night photographers',
    img: U('photo-1552550018-5253c1b171e3'),
    seed: 'bk-chinatown',
    alt: 'Neon-lit street scene in Bangkok’s Chinatown at night',
    sizes: '(min-width: 768px) 33vw, 100vw',
    span: 'md:col-span-4',
    imgH: 'h-56',
    desc: 'One of the world’s great Chinatowns — a gilded, incense-scented grid of gold shops, herbalists and street vendors, crowned by Wat Traimit’s 5.5-tonne solid-gold Buddha. Come hungry: Yaowarat Road becomes one of Asia’s finest open-air restaurants after 6pm, and the MRT’s Wat Mangkon station drops you right inside it.',
    plan: [
      { t: '10:00', d: 'Wat Traimit’s Golden Buddha before the crowds.' },
      { t: '14:00', d: 'Crawl Sampeng Lane’s wholesale alley, coffee in a shophouse after.' },
      { t: '18:30', d: 'The Yaowarat night feast — oyster omelette, guay jub, toasted buns.' },
    ],
  },
  {
    id: 'area-riverside',
    name: 'Riverside',
    kicker: 'The River of Kings',
    thai: 'เจ้าพระยา',
    short: 'the Riverside',
    bestFor: 'scenic stays, families and sunsets',
    img: U('photo-1528181304800-259b08848526'),
    seed: 'bk-riverside',
    alt: 'Long-tail boats on the water in Thailand, in the style of the Chao Phraya River',
    sizes: '(min-width: 768px) 33vw, 100vw',
    span: 'md:col-span-4',
    imgH: 'h-56',
    desc: 'The Chao Phraya is Bangkok’s original highway, lined with temples, former trading houses and grand hotels. Orange-flag express boats stitch it together for about ฿20 a hop, linking IconSiam’s indoor floating market, Wat Arun and the night stalls of Asiatique.',
    plan: [
      { t: '09:00', d: 'Orange-flag boat from Sathorn pier (about ฿20).' },
      { t: '11:00', d: 'IconSiam and its indoor floating market.' },
      { t: '16:30', d: 'Wat Arun from the east bank as the sun drops.' },
      { t: '19:00', d: 'Asiatique night market and the riverside ferris wheel.' },
    ],
  },
  {
    id: 'area-chatuchak',
    name: 'Chatuchak',
    kicker: 'Weekend city',
    thai: 'จตุจักร',
    short: 'Chatuchak',
    bestFor: 'shoppers and Saturday-morning browsers',
    img: U('photo-1552465011-b4e21bf6e79a'),
    seed: 'bk-chatuchak',
    alt: 'Busy covered market alley packed with stalls and shoppers',
    sizes: '(min-width: 768px) 33vw, 100vw',
    span: 'md:col-span-4',
    imgH: 'h-56',
    desc: 'Weekend Bangkok at full volume: the legendary Chatuchak Weekend Market spreads roughly 15,000 stalls across 27 numbered zones, with the superb Or Tor Kor produce market next door. Arrive by 10am, carry water, and haggle with a smile. Saturdays and Sundays, 9am–6pm.',
    plan: [
      { t: '10:00', d: 'MRT to Kamphaeng Phet — coffee first, then zones 2–6.' },
      { t: '13:00', d: 'Or Tor Kor market for the city’s best mango sticky rice.' },
      { t: '16:00', d: 'The quieter craft alleys as the crowds thin.' },
    ],
  },
  {
    id: 'area-silom',
    name: 'Silom & Lumpini',
    kicker: 'The value play',
    thai: 'สีลม',
    short: 'Silom',
    bestFor: 'value hotels and central transport links',
    horizontal: true,
    img: U('photo-1512553353614-82a7370096dc'),
    seed: 'bk-silom',
    alt: 'Tuk-tuk waiting in a Bangkok street near Silom',
    sizes: '(min-width: 768px) 38vw, 100vw',
    span: 'md:col-span-12',
    desc: 'Thailand’s financial district on weekdays — then the side streets take over. Convent Road’s lunch carts are a city institution, monitor lizards sunbathe in Lumpini Park beneath the towers, and Patpong’s famous night market runs nightly under the neon. It also sits on the BTS/MRT interchange at Sala Daeng.',
    plan: [
      { t: '08:00', d: 'Lumpini Park before the heat — yes, the lizards are real.' },
      { t: '12:00', d: 'Convent Road’s legendary lunch carts.' },
      { t: '20:00', d: 'MRT from Si Lom to Chinatown in three stops for dinner.' },
    ],
  },
];

const STAY_MATCH = [
  ['Your first time, sightseeing central', 'Old City or Riverside'],
  ['Nightlife, malls and dining on tap', 'Sukhumvit (Asok–Thong Lor)'],
  ['You travel to eat', 'Chinatown (Yaowarat)'],
  ['Families and special occasions', 'Riverside'],
  ['Sharp value, big-city convenience', 'Silom'],
  ['Market obsessives', 'Chatuchak — as a day trip, stay central'],
];

const TODO = [
  {
    n: '01', icon: 'pin', title: 'Temples & Culture',
    blurb: 'Bangkok’s old kingdom, rendered in gold and porcelain.',
    items: [
      ['Grand Palace & Wat Phra Kaew', 'Home of the Emerald Buddha and 240 years of royal pageantry. Opens 8.30am, last entry around 3.30pm; ฿500 (£11) and a strict dress code — shoulders and knees covered.'],
      ['Wat Pho', 'The 46-metre reclining Buddha and the birthplace of Thai massage. 8am–6.30pm; ฿300, with 30-minute massages on site from ฿420.'],
      ['Wat Arun', 'The 79-metre “Temple of Dawn” — its porcelain-studded prang is at its best at sunset, seen across the river. 8am–6pm; ฿200.'],
      ['Wat Traimit', 'Chinatown’s Golden Buddha: 5.5 tonnes of solid gold that hid under plaster for two centuries. 8am–5pm; from ฿40.'],
      ['Jim Thompson House', 'The teak labyrinth of the American who revived Thai silk — and vanished in 1967. Guided tours; ฿200.'],
    ],
  },
  {
    n: '02', icon: 'bag', title: 'Markets & Shopping',
    blurb: 'From 15,000-stall cities to boats piled with mangoes.',
    items: [
      ['Chatuchak Weekend Market', 'Around 15,000 stalls across 27 numbered zones, Saturdays and Sundays 9am–6pm. Go early, follow the locals, haggle with a smile.'],
      ['Sampeng Lane, Chinatown', 'A century-old wholesale alley barely wide enough for two trolleys — silks, firecrackers and gold trinkets for pocket change.'],
      ['Damnoen Saduak Floating Market', 'The postcard scene: long-tail boats heaped with fruit, 1.5 hours from the city. Arrive 7–9am, before the tour buses.'],
      ['Or Tor Kor Market', 'Bangkok’s poshest produce hall and some of its best cheap eating — the mango sticky rice (from ฿120) is a rite of passage.'],
      ['When it rains', 'Flip to air-con retail: Terminal 21, EmQuartier or MBK, where haggling gives way to fixed prices and vast food courts.'],
    ],
  },
  {
    n: '03', icon: 'flame', title: 'Food & Nightlife',
    blurb: 'Eat like it’s a competitive sport. Bangkok obliges.',
    items: [
      ['Street food 101', 'Pad kra pao with a fried egg from ฿60 (£1.10), boat noodles by the bowl near Victory Monument, mango sticky rice for pudding. Trust queues of locals, not photos of celebrities.'],
      ['Jay Fai', 'The goggle-wearing queen of the crab omelette, still cooking over charcoal in her Michelin-starred shophouse. Dishes from ฿1,000; book or queue early.'],
      ['Thipsamai', 'Pad thai wrapped in a whisper-thin egg crepe, served since 1966 and a Michelin Bib Gourmand fixture. Queue from the 5pm opening.'],
      ['Yaowarat after dark', 'From 6pm Chinatown’s main road becomes one long open-air kitchen: oyster omelettes, peppery guay jub soup, charcoal-toasted buns.'],
      ['Rooftop hour', 'Sky Bar at Lebua (yes, that one), Vertigo at the Banyan Tree, Octave above Thong Lor — cocktails ฿400–700 with the whole city underneath.'],
    ],
  },
];

const QUICK = [
  { icon: 'plane', k: 'Direct flights', v: 'Heathrow → Suvarnabhumi in about 11 hrs 20 min (Thai Airways, British Airways).' },
  { icon: 'passport', k: 'Visa (UK passports)', v: '60 days visa-free, extendable +30; free Digital Arrival Card online before you fly.' },
  { icon: 'train', k: 'Airport → centre', v: 'Airport Rail Link: 26 min to Phaya Thai for ฿45 (~£1) — or a taxi for ฿350–500.' },
  { icon: 'wallet', k: 'Daily budget', v: '£40–60 per person is comfortable; street-food meals from ฿60 (£1.10).' },
];

const FLIGHTS = [
  { icon: 'plane', t: 'Direct — London Heathrow → Suvarnabhumi (BKK)', d: 'Thai Airways and British Airways fly the route in around 11 hours 20 minutes, daily in both directions. Expect roughly £450–650 return in shoulder season, and £750+ over Christmas and New Year.' },
  { icon: 'clock', t: 'One-stop from the rest of the UK', d: 'Manchester, Birmingham, Edinburgh, Glasgow and more connect through Doha (Qatar), Dubai (Emirates), Istanbul (Turkish) or Singapore (Singapore Airlines). Total journey time 13–17 hours; fares from about £400 return.' },
  { icon: 'wallet', t: 'When fares dip', d: 'Low season — May–June and September–October — routinely undercuts December peak fares by 30–40%. Midweek departures are cheapest.' },
];

const TRANSPORT = [
  { icon: 'train', t: 'BTS Skytrain & MRT', d: 'The fastest way across town, and blissfully air-conditioned. Single journeys ฿17–62; a one-day Skytrain pass is around ฿140. Sala Daeng/Si Lom and Asok/Sukhumvit are the key interchanges.' },
  { icon: 'waves', t: 'Chao Phraya express boats', d: 'Orange-flag boats run the river for a flat fare of about ฿20 a hop — genuinely the best-value sightseeing tour in Bangkok.' },
  { icon: 'car', t: 'Ride-hailing & taxis', d: 'Grab and Bolt quote fixed fares up front (a cross-town run is typically ฿120–250). Metered taxis are cheap — but insist on the meter.' },
  { icon: 'car', t: 'Tuk-tuks', d: 'An experience, not a transport system. Agree the fare first — short hops ฿60–150 — and politely decline any driver offering a “special temple tour” (it ends at a gem shop).' },
  { icon: 'waves', t: 'Khlong boats', d: 'The Saen Saep canal boats slice diagonally across the city for ฿10–32, spray included. Fast, bracing, unforgettable.' },
];

const AIRPORTS = [
  { icon: 'train', t: 'Suvarnabhumi (BKK)', d: 'The Airport Rail Link reaches Phaya Thai in 26 minutes for ฿45, connecting to the BTS. Metered taxis run ฿350–500 plus the ฿50 airport surcharge; allow 40–60 minutes in traffic.' },
  { icon: 'plane', t: 'Don Mueang (DMK)', d: 'The low-cost terminal, 25 km north. Take the SRT dark-red commuter line to Krung Thep Aphiwat, or budget an hour by taxi at peak times.' },
];

const MONTHS = [
  { abbr: 'Jan', name: 'January', high: 32, low: 22, rain: 13, wet: 1, best: true, verdict: 'Prime time — dry, bright and “cool” by Bangkok standards.', note: 'Peak season: book flights and river-view rooms well ahead.' },
  { abbr: 'Feb', name: 'February', high: 33, low: 23, rain: 20, wet: 2, best: true, verdict: 'The driest, most reliable month of the year.', note: 'Chinese New Year fills Yaowarat with lanterns; Makha Bucha falls in February or March (lunar dates vary).' },
  { abbr: 'Mar', name: 'March', high: 34, low: 25, rain: 40, wet: 3, verdict: 'Hot and building; sightsee early, lunch long.', note: 'Occasional regional haze; evenings stay pleasant on the river.' },
  { abbr: 'Apr', name: 'April', high: 36, low: 26, rain: 85, wet: 6, verdict: 'The hottest month — 38°C+ spikes are normal.', note: 'Songkran (13–15 April) turns the whole city into a joyful, city-wide water fight.' },
  { abbr: 'May', name: 'May', high: 35, low: 26, rain: 200, wet: 13, verdict: 'The monsoon arrives — short, fierce afternoon downpours.', note: 'Low season: hotel rates dip noticeably.' },
  { abbr: 'Jun', name: 'June', high: 34, low: 26, rain: 160, wet: 12, verdict: 'Wet but green; plan indoor stops between showers.', note: 'Downpours usually last an hour, not a day.' },
  { abbr: 'Jul', name: 'July', high: 33, low: 25, rain: 170, wet: 13, verdict: 'Rainy season proper — dramatic skies, empty queues.', note: 'Asalha Bucha brings candle-lit temple processions in July or August.' },
  { abbr: 'Aug', name: 'August', high: 33, low: 25, rain: 200, wet: 14, verdict: 'Wet and humid — a museum, mall and food-crawl month.', note: 'UK school holidays push fares up despite the rain.' },
  { abbr: 'Sep', name: 'September', high: 33, low: 25, rain: 330, wet: 17, verdict: 'Bangkok’s wettest month. Pack patience and a poncho.', note: 'The river runs high; a few low-lying piers occasionally close.' },
  { abbr: 'Oct', name: 'October', high: 33, low: 25, rain: 290, wet: 13, verdict: 'Monsoon easing — late October can be surprisingly clear.', note: 'The vegetarian festival colours Chinatown in October.' },
  { abbr: 'Nov', name: 'November', high: 32, low: 23, rain: 50, wet: 4, best: true, verdict: 'The cool season opens — arguably the single best month to visit.', note: 'Loy Krathong (full moon, usually November): thousands of candle-lit krathong drift down the Chao Phraya.' },
  { abbr: 'Dec', name: 'December', high: 32, low: 22, rain: 10, wet: 1, best: true, verdict: 'Peak cool season — blue skies and festive lights along the river.', note: 'Christmas and New Year are big business; book early.' },
];

const BUDGETS = [
  { t: 'Traveller', d: 'Hostels and simple guesthouses, street food on every corner, BTS and boat fares', p: '£30–45' },
  { t: 'Comfortable', d: '3–4★ hotels, a mix of street food and sit-down dinners, the occasional Grab', p: '£60–110' },
  { t: 'Splash-out', d: 'Riverside five-stars, sky-bar evenings, private guides and spa afternoons', p: '£180+' },
];

const PRICES = [
  ['Plate of pad kra pao, street stall', '฿60–100 · £1.10–1.80'],
  ['Bowl of boat noodles', '฿50–80 · £1.10–1.80'],
  ['Iced Thai milk tea', '฿25–45 · 55p–£1'],
  ['Singha beer, shop-bought', '฿55–70 · £1.20–1.50'],
  ['BTS Skytrain journey', 'from ฿17 · 35p'],
  ['Grand Palace admission', '฿500 · £11'],
  ['Cocktail at a sky bar', '฿400–700 · £9–15'],
  ['Mid-range dinner for two', '฿600–1,200 · £13–26'],
];

const TRUST = [
  { icon: 'shield', t: 'On-the-ground expertise', d: 'Written and verified by UK travel specialists with genuine Bangkok knowledge — the team has lived in, and keeps returning to, the Thai capital. Every recommendation here has been eaten, queued for or climbed.' },
  { icon: 'clock', t: 'Regularly updated', d: `Last reviewed: ${LAST_REVIEWED}. Fares, opening hours and visa rules are re-checked against official sources before every update — no recycled 2019 brochures.` },
  { icon: 'users', t: 'Official sources we rely on', d: 'We cross-check entry rules and travel advice with the Tourism Authority of Thailand and the FCDO, and link out when they’re the better authority.' },
];

const FAQS = [
  {
    q: 'How many days do you need in Bangkok?',
    a: 'Most travellers find three to four full days is the sweet spot for a first visit to Bangkok. That gives you a day for the Grand Palace, Wat Pho and Wat Arun, another for markets and Chinatown, a third for the river, rooftop bars or a cooking class, and a buffer for a day trip to Ayutthaya or the Damnoen Saduak Floating Market. Two days covers the essentials if you are passing through; five or more lets you explore the capital at a genuinely local pace.',
  },
  {
    q: 'Is Bangkok safe for tourists?',
    a: 'Yes — Bangkok is one of Southeast Asia’s safer capitals for visitors, with low levels of violent crime and millions of British tourists welcomed each year; the FCDO’s standard advice applies. The practical risks are petty ones: pickpockets in crowded markets, inflated taxi and tuk-tuk fares (use the meter or a ride-hailing app like Grab), and the well-known “temple is closed” gem scam. Traffic is the biggest daily hazard, so look both ways even at green men.',
  },
  {
    q: 'What’s the best time of year to visit Bangkok?',
    a: 'The best time to visit Bangkok is the cool season, from November to February, when daytime temperatures sit around 30–32°C with blue skies, low humidity and very little rain. December and January are peak months, so book accommodation early. March to May is fiercely hot, with April regularly topping 38°C. The June-to-October monsoon brings dramatic but usually short afternoon downpours; September is the wettest month. Late November or early December gets you the best weather with thinner crowds.',
  },
  {
    q: 'Do UK citizens need a visa for Thailand?',
    a: 'No. UK passport holders can enter Thailand visa-free for up to 60 days under Thailand’s visa exemption scheme, and that stay can be extended by a further 30 days at a local immigration office if you need longer. Your passport must be valid for at least six months beyond your arrival date, and you should be able to show onward or return travel. Since May 2025, all arrivals must also complete the free Thailand Digital Arrival Card (TDAC) online before boarding.',
  },
  {
    q: 'How do you get from Bangkok airport to the city centre?',
    a: 'Bangkok’s main airport, Suvarnabhumi (BKK), is 30 km east of the centre. The Airport Rail Link runs every 10–15 minutes and takes 26 minutes to Phaya Thai for 45 baht (about £1), connecting straight onto the BTS Skytrain. A metered taxi costs roughly 350–500 baht plus the 50-baht airport surcharge and takes 40–60 minutes depending on traffic. From Don Mueang (DMK), used by most low-cost carriers, take the SRT dark-red commuter line or a taxi — allow an hour in rush hour.',
  },
  {
    q: 'Is Bangkok expensive to visit?',
    a: 'Not by UK standards — that’s a large part of its appeal. A filling plate of pad kra pao from a street stall costs 60–100 baht (£1.10–1.80), a BTS journey starts around 17 baht (35p), and excellent mid-range hotels are widely available for £45–80 a night. A comfortable daily budget is £40–60 per person mixing street food with markets, or £100–150 if you want riverside hotels and rooftop dinners. Alcohol is the main exception: high taxes mean sky-bar cocktails run 400–700 baht.',
  },
];

export const metadata = {
  metadataBase: new URL('https://bangkok.co.uk'),
  title: 'Bangkok Holidays: UK Travel Guide | Bangkok.co.uk',
  description:
    'UK guide to Bangkok holidays: flight times, visas, best months, temples, markets and street food — verified by Bangkok travel specialists.',
  alternates: { canonical: '/' },
  keywords: [
    'Bangkok holidays', 'visit Bangkok', 'Bangkok travel guide',
    'things to do in Bangkok', 'Bangkok Thailand holidays', 'UK to Bangkok flights',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: '/',
    siteName: 'Bangkok.co.uk',
    title: 'Bangkok Holidays: Temples, Street Food & the Heart of Thailand',
    description:
      'The UK’s independent guide to visiting Bangkok — flight times, visas, the best months, real neighbourhoods and where the locals eat.',
    images: [{ url: HERO_IMG, width: 2400, height: 1350, alt: 'Wat Arun at sunset across the Chao Phraya River, Bangkok' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bangkok Holidays: UK Travel Guide | Bangkok.co.uk',
    description: 'Flight times, visas, best months, temples and street food — Bangkok, verified for UK travellers.',
    images: [HERO_IMG],
  },
};

const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'TouristDestination',
      '@id': 'https://bangkok.co.uk/#bangkok',
      name: 'Bangkok',
      alternateName: ['Krung Thep Maha Nakhon', 'กรุงเทพมหานคร', 'Bangkok, Thailand'],
      description:
        'Bangkok, the capital of Thailand, is one of the world’s great city destinations for UK travellers: direct flights from London Heathrow in around 11–11½ hours, a cool season from November to February, golden temples such as Wat Pho and Wat Arun, the Chao Phraya River, and some of the best street food on earth.',
      url: 'https://bangkok.co.uk/',
      image: HERO_IMG,
      geo: { '@type': 'GeoCoordinates', latitude: 13.7563, longitude: 100.5018 },
      touristType: ['UK travellers', 'First-time visitors', 'Couples', 'Families', 'Food travellers', 'City-break travellers'],
      includesAttraction: [
        { '@type': 'TouristAttraction', name: 'Grand Palace', url: 'https://bangkok.co.uk/#things-to-do' },
        { '@type': 'TouristAttraction', name: 'Wat Pho', url: 'https://bangkok.co.uk/#things-to-do' },
        { '@type': 'TouristAttraction', name: 'Wat Arun', url: 'https://bangkok.co.uk/#things-to-do' },
        { '@type': 'TouristAttraction', name: 'Chatuchak Weekend Market', url: 'https://bangkok.co.uk/#areas' },
        { '@type': 'TouristAttraction', name: 'Chao Phraya River', url: 'https://bangkok.co.uk/#areas' },
      ],
      keywords: 'Bangkok holidays, visit Bangkok, Bangkok travel guide, things to do in Bangkok, UK to Bangkok flights',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://bangkok.co.uk/#faq',
      mainEntity: FAQS.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bangkok.co.uk/' },
        { '@type': 'ListItem', position: 2, name: 'Destinations', item: 'https://bangkok.co.uk/#areas' },
        { '@type': 'ListItem', position: 3, name: 'Bangkok', item: 'https://bangkok.co.uk/' },
      ],
    },
  ],
};

function SectionHead({ id, eyebrow, title, sub }) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow flex items-center gap-3 text-gold-deep">
        <span className="h-px w-8 bg-[#c9a84c]" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 id={id} className="mt-3 scroll-mt-28 font-display text-3xl font-semibold leading-[1.12] text-jade sm:text-4xl lg:text-[2.6rem]">
        {title}
      </h2>
      {sub && <p className="mt-4 text-lg leading-relaxed text-ink-soft">{sub}</p>}
    </div>
  );
}

function AnswerBlock({ children, className = '' }) {
  return (
    <div className={`rounded-xl border border-[#c9a84c] bg-[#fff9e6] p-5 shadow-[0_14px_40px_-24px_rgba(143,114,38,0.45)] ${className}`}>
      <p className="eyebrow flex items-center gap-2 text-gold-deep">
        <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
          <rect x="2.5" y="2.5" width="5" height="5" transform="rotate(45 5 5)" fill="#c9a84c" />
        </svg>
        Quick answer
      </p>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function FactRow({ icon, t, d }) {
  return (
    <div className="flex gap-4">
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#c9a84c]/50 bg-[#fff9e6] text-gold-deep">
        <Icon name={icon} className="h-4 w-4" />
      </span>
      <div>
        <h4 className="text-[15px] font-semibold text-[#2b2418]">{t}</h4>
        <p className="mt-1 text-sm leading-relaxed text-ink-soft">{d}</p>
      </div>
    </div>
  );
}

function Skyline() {
  const P = (d, delay) => <path key={d} d={d} pathLength="1" style={{ animationDelay: delay }} />;
  return (
    <svg
      viewBox="0 0 1440 200"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
      className="skyline pointer-events-none absolute bottom-0 left-0 z-[5] h-28 w-full text-[#ebcb80] sm:h-36 md:h-44"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {P('M0 188h1440', '0.1s')}
      {P('M92 188h64l-10-12h-44l-10 12Z', '1.35s')}
      {P('M116 176v-9h13v9', '1.4s')}
      {P('M129 167v-9h8', '1.45s')}
      {P('M262 188v-18h6l20-22q12-9 24 0l20 22h6v18', '1.2s')}
      {P('M300 146v-13', '1.32s')}
      {P('M420 188v-30q0-20 17-24 17 4 17 24v30', '1.12s')}
      {P('M437 134v-14m-6 6h12', '1.3s')}
      {P('M598 188v-24h10v-22h10v-16l7-26 7 26h10v16h10v22h10v24', '1s')}
      {P('M680 188v-36h12v-26h12v-24h12l8-44 8 44h12v24h12v26h12v36', '0.75s')}
      {P('M724 58V36', '0.9s')}
      {P('M778 188v-24h10v-22h10v-16l7-26 7 26h10v16h10v22h10v24', '1.05s')}
      {P('M1048 188v-70h28v70', '1.15s')}
      {P('M1062 118v-12', '1.25s')}
      {P('M1096 188v-40h20v-24h26v64', '1.1s')}
      {P('M1166 188v-92h26v92', '1.05s')}
      {P('M1158 96h42', '1.2s')}
      {P('M1224 188v-58h30v58', '1.15s')}
      {P('M1239 130v-14', '1.25s')}
      {P('M1282 188v-34h40v34', '1.2s')}
    </svg>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-[640px] items-end overflow-hidden bg-[#161310] md:min-h-[88vh]">
      <div className="absolute inset-0 h-full w-full overflow-hidden" aria-hidden="true">
        <iframe
          className="pointer-events-none absolute left-1/2 top-1/2 h-[130%] w-[130%]"
          style={{ transform: 'translate(-50%, -50%) scale(1.15) translateY(-7%)' }}
          src={`https://www.youtube-nocookie.com/embed/${HERO_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${HERO_VIDEO_ID}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&disablekb=1`}
          title="Bangkok — Tourism Authority of Thailand"
          allow="autoplay; encrypted-media"
          frameBorder="0"
        />
      </div>
      <noscript>
        <img
          src={HERO_POSTER}
          alt="Bangkok skyline"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </noscript>
      <div className="absolute inset-0 bg-gradient-to-t from-[#12100c]/90 via-[#12100c]/40 to-[#12100c]/15" aria-hidden="true" />
      <Skyline />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-[150px] pt-32 sm:px-6 sm:pb-[170px] md:pb-[210px]">
        <p className="eyebrow rise flex items-center gap-3 text-[#e9d9a6]" style={{ animationDelay: '0.05s' }}>
          <span className="h-px w-10 bg-[#c9a84c]" aria-hidden="true" />
          The UK’s independent Bangkok travel guide
        </p>
        <h1 className="mt-5 font-display text-[#fffdf7]">
          <span className="rise block text-[2.6rem] font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl" style={{ animationDelay: '0.15s' }}>
            Bangkok Holidays
          </span>
          <span className="rise mt-3 block text-xl font-medium italic text-[#efd9a0] sm:text-3xl lg:text-4xl" style={{ animationDelay: '0.25s' }}>
            — Temples, Street Food &amp; the Heart of Thailand
          </span>
        </h1>
        <p className="rise mt-5 max-w-2xl text-base leading-relaxed text-[#f3ead4] sm:text-lg" style={{ animationDelay: '0.35s' }}>
          Direct flights from the UK take around 11 hours — and Bangkok repays every one of them with golden
          temples, £1 street-food feasts, penny-fare river boats and 30°C February afternoons. This guide shows
          you when to visit Bangkok, where to stay and what to book first, whether it’s your first Bangkok
          holiday or your fifth.
        </p>
        <div className="rise mt-8 max-w-xl" style={{ animationDelay: '0.45s' }}>
          <ExploreSearch />
        </div>
      </div>
    </section>
  );
}

function WhyVisit() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHead
          id="why-visit"
          eyebrow="The short answer"
          title="Why Visit Bangkok? The Facts at a Glance"
          sub="The essentials for planning Bangkok holidays from the UK — checked and current at the time of our last review."
        />
        <AnswerBlock className="mt-8">
          <p className="max-w-4xl leading-relaxed text-[#3e3623]">
            Bangkok is the capital of Thailand and one of the most rewarding city breaks on earth for UK
            travellers. Direct flights from London Heathrow take around 11–11½ hours; the currency is the Thai
            Baht (roughly ฿45 to £1); and daytime temperatures sit between 29°C and 36°C all year, with the
            coolest, driest weather from November to February. Bangkok works brilliantly as a standalone
            three- or four-day holiday — or as the gateway to Thailand’s beaches, jungles and ancient capitals.
          </p>
          <dl className="mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
            {FACTS.map((f) => (
              <div key={f.k} className="border-t border-[#e3d5a8] pt-3">
                <dt className="eyebrow flex items-center gap-2 text-gold-deep">
                  <Icon name={f.icon} className="h-3.5 w-3.5" />
                  {f.k}
                </dt>
                <dd className="mt-1.5 text-[15px] font-medium leading-snug text-[#3e3623]">{f.v}</dd>
              </div>
            ))}
          </dl>
        </AnswerBlock>
      </div>
    </section>
  );
}

function Areas() {
  return (
    <section className="pb-16 md:pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHead
          id="areas"
          eyebrow="Neighbourhoods"
          title="Where to Stay in Bangkok: Areas & Neighbourhoods"
          sub="Bangkok isn’t one city but half a dozen, each with its own rhythm. Pick the one that matches your trip — then borrow our day plans."
        />

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">
          {AREAS.map((a) => (
            <AreaCard key={a.id} area={a} />
          ))}
        </div>

        <div className="mt-10 scroll-mt-28 rounded-2xl border border-line bg-white p-6 md:p-8">
          <p className="eyebrow text-gold-deep">Match your trip</p>
          <h3 id="where-to-stay" className="mt-2 scroll-mt-28 font-display text-2xl font-semibold text-jade">
            Where to stay in Bangkok: a quick match
          </h3>
          <ul className="mt-5">
            {STAY_MATCH.map(([who, where]) => (
              <li key={who} className="flex flex-wrap items-baseline gap-x-3 border-b border-dashed border-[#e4dac2] py-2.5 last:border-b-0">
                <span className="text-[15px] font-medium text-[#2b2418]">{who}</span>
                <span className="hidden flex-1 border-b border-dotted border-[#c9bfa4] sm:block" aria-hidden="true" />
                <span className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-jade">
                  <Icon name="pin" className="h-3.5 w-3.5 text-[#c9a84c]" />
                  {where}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-ink-soft">
            Every area card above shows who it suits best — tap <span className="font-semibold text-terra">Explore</span> for a ready-made day plan.
          </p>
        </div>
      </div>
    </section>
  );
}

function ThingsToDo() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHead
          id="things-to-do"
          eyebrow="The good stuff"
          title="Things To Do in Bangkok: Temples, Markets & Midnight Noodles"
          sub="Three lists we’d hand a friend — every entry priced, timed and worth your while."
        />

        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
          {TODO.map((col) => (
            <div key={col.n}>
              <div className="flex items-baseline gap-4 border-b-2 border-[#c9a84c] pb-4">
                <span className="font-display text-5xl font-semibold leading-none text-[#c9a84c]/45">{col.n}</span>
                <div>
                  <h3 className="flex items-center gap-2 font-display text-xl font-semibold text-jade">
                    <Icon name={col.icon} className="h-[18px] w-[18px] text-terra" />
                    {col.title}
                  </h3>
                  <p className="mt-1 text-sm italic text-ink-soft">{col.blurb}</p>
                </div>
              </div>
              <ul className="mt-5 space-y-4">
                {col.items.map(([name, detail]) => (
                  <li key={name} className="border-b border-dashed border-[#e0d5ba] pb-4 last:border-b-0 last:pb-0">
                    <h4 className="text-[15px] font-semibold text-jade">{name}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">{detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <figure className="mt-14 overflow-hidden rounded-2xl border border-line">
          <SmartImage
            src={U('photo-1555126634-323283e090fa')}
            seed="bangkok-street-food"
            alt="Chef tossing noodles in a flaming wok at a Bangkok street-food stall"
            width={1600}
            height={700}
            sizes="(min-width: 1152px) 1152px, 100vw"
            className="h-56 w-full object-cover sm:h-72 md:h-80"
          />
          <figcaption className="flex flex-wrap items-center gap-x-3 gap-y-1 bg-white px-5 py-4 text-sm text-ink-soft">
            <span className="eyebrow shrink-0 text-terra">Eat this</span>
            Late-night wok fire on Yaowarat Road — in Bangkok, street food isn’t a sideshow; it’s the headline act.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function Practical() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHead
          id="plan"
          eyebrow="Plan with confidence"
          title="Bangkok Practical Travel Guide: Flights, Visas & Getting Around"
          sub="The unglamorous details, handled — current at the time of our last review and checked against official sources."
        />

        <AnswerBlock className="mt-8">
          <dl className="grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
            {QUICK.map((q, i) => (
              <div key={q.k} className={i > 0 ? 'lg:border-l lg:border-[#e3d5a8] lg:pl-5' : ''}>
                <dt className="eyebrow flex items-center gap-2 text-gold-deep">
                  <Icon name={q.icon} className="h-3.5 w-3.5" />
                  {q.k}
                </dt>
                <dd className="mt-1.5 text-[14.5px] font-medium leading-snug text-[#3e3623]">{q.v}</dd>
              </div>
            ))}
          </dl>
        </AnswerBlock>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-10">
          <div>
            <h3 id="getting-there" className="scroll-mt-28 font-display text-2xl font-semibold text-jade">
              UK to Bangkok flights
            </h3>
            <div className="mt-5 space-y-6">
              {FLIGHTS.map((f) => <FactRow key={f.t} icon={f.icon} t={f.t} d={f.d} />)}
            </div>
            <h3 className="mt-10 font-display text-2xl font-semibold text-jade">Visas for UK passport holders</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              UK citizens get <strong className="font-semibold text-[#2b2418]">60 days on arrival visa-free</strong>,
              extendable by a further 30 days at any Thai immigration office (฿1,900). Your passport must be valid
              for at least six months beyond arrival, and you should be able to show onward travel. Since May 2025
              every arrival also completes the{' '}
              <strong className="font-semibold text-[#2b2418]">free Thailand Digital Arrival Card (TDAC)</strong>{' '}
              online before flying — ignore lookalike sites that charge for it.
            </p>
          </div>

          <div>
            <h3 className="font-display text-2xl font-semibold text-jade">Getting around the city</h3>
            <div className="mt-5 space-y-6">
              {TRANSPORT.map((t) => <FactRow key={t.t} icon={t.icon} t={t.t} d={t.d} />)}
            </div>
            <h3 className="mt-10 font-display text-2xl font-semibold text-jade">From the airport</h3>
            <div className="mt-5 space-y-6">
              {AIRPORTS.map((a) => <FactRow key={a.t} icon={a.icon} t={a.t} d={a.d} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhenToVisit() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHead
          id="when-to-visit"
          eyebrow="Climate & seasons"
          title="When Is the Best Time to Visit Bangkok?"
          sub="Short answer: November to February — but every month has its own character. Tap through the year."
        />
        <div className="mt-10">
          <MonthStrip months={MONTHS} />
        </div>
      </div>
    </section>
  );
}

function Budget() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHead
          id="budget"
          eyebrow="What it really costs"
          title="Is Bangkok Expensive? What a Bangkok Holiday Really Costs"
          sub="Short answer: no — and the numbers below show exactly how far £1 goes."
        />

        <div className="mt-10 max-w-4xl">
          {BUDGETS.map((b) => (
            <div key={b.t} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-line py-5">
              <div className="max-w-md">
                <h3 className="font-display text-xl font-semibold text-jade">{b.t}</h3>
                <p className="mt-1 text-sm text-ink-soft">{b.d}</p>
              </div>
              <p className="font-display text-2xl font-semibold tabular-nums text-jade">
                {b.p}
                <span className="ml-1 text-sm font-normal text-ink-soft">/ day</span>
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid max-w-4xl gap-x-12 gap-y-0 md:grid-cols-2">
          {PRICES.map(([what, cost]) => (
            <div key={what} className="flex items-baseline gap-3 border-b border-dashed border-[#e0d5ba] py-3">
              <span className="text-sm text-ink-soft">{what}</span>
              <span className="flex-1 border-b border-dotted border-[#c9bfa4]" aria-hidden="true" />
              <span className="shrink-0 text-sm font-semibold tabular-nums text-[#2b2418]">{cost}</span>
            </div>
          ))}
        </div>
        <p className="mt-5 max-w-4xl text-sm text-ink-soft">
          Rates at roughly ฿45 = £1. Cards are accepted in malls and hotels; carry cash for markets and street
          stalls. Prices verified at the time of our last review ({LAST_REVIEWED}).
        </p>
      </div>
    </section>
  );
}

function Trust() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div>
          <SectionHead id="trust" eyebrow="Our promise" title="Why Trust This Guide" />
          <p className="mt-6 max-w-xl font-display text-xl italic leading-relaxed text-jade md:text-2xl">
            “Nobody hands you Bangkok’s keys on day one. We’ve spent years earning them — and this guide is what
            we’d tell our own families.”
          </p>
          <p className="mt-5 max-w-xl leading-relaxed text-ink-soft">
            Bangkok.co.uk is an independent editorial guide. We don’t sell flights or package holidays, and
            nothing on this page is commissioned by an operator — the only bias here is towards places worth
            your limited annual leave.
          </p>
        </div>
        <div className="space-y-7">
          {TRUST.map((t) => (
            <div key={t.t} className="flex gap-4">
              <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#c9a84c]/60 bg-[#fff9e6] text-gold-deep">
                <Icon name={t.icon} className="h-[18px] w-[18px]" />
              </span>
              <div>
                <h3 className="text-[15px] font-semibold text-[#2b2418]">{t.t}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                  {t.d}{' '}
                  {t.t === 'Official sources we rely on' && (
                    <>
                      <a
                        href="https://www.tourismthailand.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-jade underline decoration-[#c9a84c] underline-offset-2 hover:text-terra"
                      >
                        Tourism Authority of Thailand
                      </a>{' '}
                      ·{' '}
                      <a
                        href="https://www.gov.uk/foreign-travel-advice/thailand"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-jade underline decoration-[#c9a84c] underline-offset-2 hover:text-terra"
                      >
                        FCDO Thailand travel advice
                      </a>
                    </>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHead
          id="faq"
          eyebrow="Your questions, answered"
          title="FAQs: Planning Your Bangkok Holiday"
          sub="The questions UK travellers actually ask us — answered in full, and kept current."
        />
        <div className="mt-10 max-w-3xl space-y-3">
          {FAQS.map((f) => (
            <details
              key={f.q}
              className="rounded-xl border border-line bg-white transition-colors open:border-[#c9a84c]/60 open:bg-[#fffdf7] open:shadow-[0_10px_30px_-18px_rgba(43,36,24,0.4)]"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4">
                <h3 className="font-display text-lg font-semibold text-jade">{f.q}</h3>
                <Icon name="plus" className="faq-icon h-5 w-5 shrink-0 text-[#c9a84c]" />
              </summary>
              <p className="max-w-3xl px-5 pb-5 leading-relaxed text-[#4a4433]">{f.a}</p>
            </details>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-sm text-ink-soft">
          Still stuck?{' '}
          <a
            href="mailto:hello@bangkok.co.uk"
            className="inline-flex items-center gap-1.5 font-semibold text-jade underline decoration-[#c9a84c] underline-offset-2 hover:text-terra"
          >
            <Icon name="mail" className="h-4 w-4" />
            hello@bangkok.co.uk
          </a>{' '}
          — a real person replies.
        </p>
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="relative overflow-hidden bg-jade py-16 md:py-20">
      <span
        aria-hidden="true"
        className="thai pointer-events-none absolute -right-6 -top-12 select-none text-[9rem] leading-none text-white/5 md:text-[13rem]"
      >
        กรุงเทพฯ
      </span>
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_480px]">
        <div>
          <p className="eyebrow flex items-center gap-3 text-[#e9d9a6]">
            <span className="h-px w-8 bg-[#c9a84c]" aria-hidden="true" />
            The monthly dispatch
          </p>
          <h2 id="newsletter" className="mt-3 scroll-mt-28 font-display text-3xl font-semibold leading-tight text-[#faf4e8] sm:text-4xl">
            Get Bangkok travel tips and Thailand inspiration straight to your inbox
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-[#bfd8c8]">
            One considered email a month: seasonal advice, new openings, fare alerts from the UK, and where the
            locals are eating right now. Written by our Bangkok team — never automated.
          </p>
        </div>
        <NewsletterForm />
      </div>
    </section>
  );
}

const SOCIALS = [
  ['Instagram', 'https://www.instagram.com', (<><rect x="3.5" y="3.5" width="17" height="17" rx="4.5" /><circle cx="12" cy="12" r="3.8" /><circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" /></>)],
  ['X (Twitter)', 'https://x.com', (<path d="M5 5l14 14M19 5 5 19" />)],
  ['YouTube', 'https://www.youtube.com', (<><rect x="3" y="6.5" width="18" height="11" rx="3" /><path d="m10.5 9.5 4.5 2.5-4.5 2.5Z" /></>)],
  ['Facebook', 'https://www.facebook.com', (<path d="M14 8h2V5h-2a4 4 0 0 0-4 4v2H8v3h2v6h3v-6h2.3l.7-3H13V9a1 1 0 0 1 1-1Z" />)],
];

function Footer() {
  return (
    <footer className="bg-jade-deep text-[#cfe2d6]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <p className="font-display text-xl font-bold tracking-tight text-[#faf4e8]">
            Bangkok<span className="text-[#c9a84c]">.co.uk</span>
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#9dbbaa]">
            The UK’s independent guide to Bangkok — temples, street food, river light, and where to find the good
            stuff. We don’t sell flights or packages; we just tell you where they’re worth spending.
          </p>
          <div className="mt-5 flex gap-3">
            {SOCIALS.map(([label, href, paths]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full text-[#cfe2d6] ring-1 ring-white/20 transition-colors hover:bg-white/10 hover:text-[#e9d9a6]"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]" aria-hidden="true">
                  {paths}
                </svg>
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Footer — explore">
          <h3 className="eyebrow text-[#e9d9a6]">Explore</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[['Destinations', '#areas'], ['Things To Do', '#things-to-do'], ['Where To Stay', '#where-to-stay'], ['Getting There', '#getting-there'], ['Travel Guide & FAQs', '#faq'], ['When To Visit', '#when-to-visit']].map(([l, h]) => (
              <li key={l}><a href={h} className="transition-colors hover:text-[#e9d9a6]">{l}</a></li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer — information">
          <h3 className="eyebrow text-[#e9d9a6]">Information</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><a href="#trust" className="transition-colors hover:text-[#e9d9a6]">About & Editorial Policy</a></li>
            <li><a href="mailto:hello@bangkok.co.uk" className="transition-colors hover:text-[#e9d9a6]">Contact</a></li>
            <li><a href="#" className="transition-colors hover:text-[#e9d9a6]">Privacy Policy</a></li>
            <li><a href="#" className="transition-colors hover:text-[#e9d9a6]">Terms of Use</a></li>
            <li><a href="#" className="transition-colors hover:text-[#e9d9a6]">Cookie Settings</a></li>
          </ul>
        </nav>

        <nav aria-label="Official resources">
          <h3 className="eyebrow text-[#e9d9a6]">Official resources</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[
              ['Tourism Authority of Thailand', 'https://www.tourismthailand.org'],
              ['FCDO Thailand travel advice', 'https://www.gov.uk/foreign-travel-advice/thailand'],
              ['Thailand Digital Arrival Card', 'https://tdac.immigration.go.th'],
            ].map(([l, h]) => (
              <li key={l}>
                <a
                  href={h}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-[#e9d9a6]"
                >
                  {l}
                  <Icon name="ext" className="h-3 w-3 opacity-70" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-6 text-xs text-[#8fae9c] sm:px-6">
          <p>© 2025 Bangkok.co.uk — Independent travel journalism. Prices and opening hours verified at the time of the last review; always confirm with official sources before you travel.</p>
          <p className="font-display italic">Made in London · Verified in Bangkok</p>
        </div>
      </div>
    </footer>
  );
}

function Header() {
  return (
    <header id="top" className="sticky top-0 z-50 border-b border-line bg-[#fffdf7]/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-6 px-4 sm:px-6">
        <a href="#top" className="flex shrink-0 items-center gap-2 font-display text-lg font-bold tracking-tight text-jade">
          <svg width="17" height="20" viewBox="0 0 18 22" fill="none" stroke="#c9a84c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M2 20h14M4 20v-6h10v6M6 14v-5h6v5M7.5 9 9 3l1.5 6M9 3V1" />
          </svg>
          Bangkok<span className="text-[#c9a84c]">.co.uk</span>
        </a>
        <nav aria-label="Primary" className="ml-auto hidden items-center gap-6 text-[13.5px] font-medium text-[#4a4433] lg:flex">
          {NAV_LINKS.map(([l, h]) => (
            <a key={l} href={h} className="transition-colors hover:text-jade">{l}</a>
          ))}
        </nav>
        <a
          href="#newsletter"
          className="ml-auto inline-flex shrink-0 rounded-full bg-[#b33a3a] px-4 py-1.5 text-[13px] font-semibold text-white transition-colors hover:bg-[#96302f] lg:ml-0"
        >
          Plan Your Trip
        </a>
      </div>
      <nav aria-label="Section shortcuts" className="flex gap-2 overflow-x-auto border-t border-[#efe8d6] px-4 py-2 text-[12.5px] font-medium lg:hidden">
        {NAV_LINKS.map(([l, h]) => (
          <a key={l} href={h} className="whitespace-nowrap rounded-full border border-line bg-white px-3 py-1 text-[#4a4433] transition-colors hover:border-[#c9a84c] hover:text-jade">
            {l}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />
      <Header />
      <main>
        <Hero />
        <WhyVisit />
        <Areas />
        <ThingsToDo />
        <Practical />
        <WhenToVisit />
        <Budget />
        <Trust />
        <Faq />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
