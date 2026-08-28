**You're not in trouble — that's correct!** The `..` at the top of a GitHub file list just means "go up one level" (a back button, basically). It's not a nested folder. Your `components` folder contains exactly what it should: `icons.js` and `interactive.js`. ✅

**That's 7 of 8 files done.** One left: `app/page.js` — the big one, and we'll do it in 3 paste-sized chunks as promised.

## Setting up the final file

1. Tap **Bangkok-co-uk** in the breadcrumb so you're at the repo **root** (must see all your folders/files, not be inside any folder).
2. **Add file → Create new file** → type `app/page.js`.
3. **Check the path line**: it must read `Bangkok-co-uk / app / page.js` — **one** app folder only. (Given history, triple-check this one!)
4. Paste **Part 1/3** below into the editor.
5. **Do NOT commit yet.** Just leave it sitting there and reply **"2"** — I'll give you Part 2, which you paste directly underneath Part 1 in the same editor. Then **"3"** the same way. Only after all three parts are in do you hit **Commit changes**.

*Cursor tip: after pasting Part 1, scroll to the very bottom of the editor and tap right after the last character before pasting Part 2. A stray blank line between parts is harmless — JavaScript doesn't care.*

## PART 1 of 3 — paste this now

```jsx
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

/* -------------------------------------------------------------------------- */
/* Constants & editorial data                                                 */
/* -------------------------------------------------------------------------- */

const LAST_REVIEWED = '1 February 2025'; // ← placeholder: update on each editorial review

const HERO_IMG =
  'https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=2400&auto=format&fit=crop';

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
```

Part 1 ends at the `];` closing the AREAS list. Reply **"2"** and I'll give you the next chunk to paste underneath.**PART 2 of 3** — back in the GitHub editor tab (don't commit!), tap right at the bottom of the code you've already pasted (just after the last `];`), and paste this directly underneath:

```jsx
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

/* FAQs — this single array feeds BOTH the rendered accordion and the
   FAQPage JSON-LD, so they can never drift out of sync. */
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

/* -------------------------------------------------------------------------- */
/* SEO metadata                                                               */
/* -------------------------------------------------------------------------- */

export const metadata = {
  metadataBase: new URL('https://bangkok.co.uk'),
  title: 'Bangkok Holidays: UK Travel Guide | Bangkok.co.uk', // 48 chars
  description:
    'UK guide to Bangkok holidays: flight times, visas, best months, temples, markets and street food — verified by Bangkok travel specialists.', // 138 chars
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

/* -------------------------------------------------------------------------- */
/* JSON-LD — TouristDestination, FAQPage (built from FAQS) and BreadcrumbList  */
/* -------------------------------------------------------------------------- */

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
```

**Quick check:** the very last line in your editor should now be `};` (closing the SCHEMA block). Still **don't commit**.

Reply **"3"** for the final chunk — the page's actual components and layout.const STAY_MATCH = [
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

/* FAQs — this single array feeds BOTH the rendered accordion and the
   FAQPage JSON-LD, so they can never drift out of sync. */
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

/* -------------------------------------------------------------------------- */
/* SEO metadata                                                               */
/* -------------------------------------------------------------------------- */

export const metadata = {
  metadataBase: new URL('https://bangkok.co.uk'),
  title: 'Bangkok Holidays: UK Travel Guide | Bangkok.co.uk', // 48 chars
  description:
    'UK guide to Bangkok holidays: flight times, visas, best months, temples, markets and street food — verified by Bangkok travel specialists.', // 138 chars
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

/* -------------------------------------------------------------------------- */
/* JSON-LD — TouristDestination, FAQPage (built from FAQS) and BreadcrumbList  */
/* -------------------------------------------------------------------------- */

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
