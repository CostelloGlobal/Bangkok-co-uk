'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Icon } from './icons';

/* ------------------------------------------------------------------ */
/* SmartImage — next/image with a graceful seeded fallback so a dead   */
/* CDN URL can never leave a broken image on the page.                 */
/* ------------------------------------------------------------------ */
export function SmartImage({
  src,
  alt,
  seed,
  width = 1600,
  height = 1000,
  sizes = '100vw',
  quality = 80,
  priority = false,
  className = '',
}) {
  const attempts = { current: 0 };
  const [uri, setUri] = useState(src);

  const handleError = () => {
    if (attempts.current === 0) {
      attempts.current = 1;
      setUri(`https://picsum.photos/seed/${seed}/${width}/${height}.jpg`);
    }
  };

  return (
    <Image
      src={uri}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      quality={quality}
      priority={priority}
      onError={handleError}
      className={className}
    />
  );
}

/* ------------------------------------------------------------------ */
/* ExploreSearch — hero search bar with live suggestions. Picking one  */
/* smooth-scrolls to the matching area card and pulses a gold ring.    */
/* ------------------------------------------------------------------ */
const SUGGESTIONS = [
  { label: 'Old City & Temples', note: 'Grand Palace · Wat Pho · Wat Arun', id: 'area-old-city' },
  { label: 'Sukhumvit', note: 'Rooftops, malls & nightlife', id: 'area-sukhumvit' },
  { label: 'Chatuchak Market', note: '15,000 stalls, weekends', id: 'area-chatuchak' },
  { label: 'Chao Phraya River', note: 'The Riverside & long-tail boats', id: 'area-riverside' },
  { label: 'Chinatown (Yaowarat)', note: 'Street food after dark', id: 'area-chinatown' },
  { label: 'Silom & Lumpini', note: 'Value stays & city parks', id: 'area-silom' },
];

export function ExploreSearch() {
  const [q, setQ] = useState('');
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  const list = SUGGESTIONS.filter((s) =>
    s.label.toLowerCase().includes(q.trim().toLowerCase())
  );

  const go = (s) => {
    if (!s) return;
    const el = document.getElementById(s.id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.classList.add('flash-target');
      setTimeout(() => el.classList.remove('flash-target'), 1900);
    }
    setOpen(false);
    setQ('');
  };

  return (
    <div className="relative w-full max-w-xl">
      <form
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
          go(list[active] || list[0]);
        }}
      >
        <div className="flex items-center gap-2 rounded-full bg-white p-1.5 pl-5 shadow-[0_18px_50px_-12px_rgba(0,0,0,0.45)] ring-1 ring-black/5">
          <Icon name="search" className="h-[18px] w-[18px] shrink-0 text-gold-deep" />
          <input
            type="text"
            value={q}
            onChange={(e) => { setQ(e.target.value); setOpen(true); setActive(0); }}
            onFocus={() => setOpen(true)}
            onBlur={() => setTimeout(() => setOpen(false), 140)}
            onKeyDown={(e) => {
              if (e.key === 'ArrowDown') { e.preventDefault(); setOpen(true); setActive((a) => Math.min(a + 1, list.length - 1)); }
              else if (e.key === 'ArrowUp') { e.preventDefault(); setActive((a) => Math.max(a - 1, 0)); }
              else if (e.key === 'Escape') { setOpen(false); }
            }}
            placeholder="Where do you want to explore? Try “Old City” or “Chinatown”"
            aria-label="Search Bangkok neighbourhoods"
            className="w-full bg-transparent py-2.5 text-[15px] text-[#2b2418] placeholder:text-[#9a8f76] focus:outline-none"
          />
          <button
            type="submit"
            className="ml-auto shrink-0 rounded-full bg-[#b33a3a] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#96302f]"
          >
            Explore
          </button>
        </div>
      </form>

      {open && list.length > 0 && (
        <ul className="absolute left-0 right-0 top-[calc(100%+10px)] z-20 overflow-hidden rounded-2xl bg-white py-2 shadow-2xl ring-1 ring-[#e8dfc9]">
          {list.map((s, i) => (
            <li key={s.id}>
              <button
                type="button"
                onMouseDown={(e) => { e.preventDefault(); go(s); }}
                onMouseEnter={() => setActive(i)}
                className={`flex w-full items-center justify-between gap-4 px-5 py-2.5 text-left text-sm ${
                  i === active ? 'bg-[#fff9e6]' : ''
                }`}
              >
                <span className="font-semibold text-[#2b2418]">{s.label}</span>
                <span className="hidden text-xs text-[#8b8266] sm:block">{s.note}</span>
              </button>
            </li>
          ))}
        </ul>
      )}

      {open && q.trim() && list.length === 0 && (
        <div className="absolute left-0 right-0 top-[calc(100%+10px)] z-20 rounded-2xl bg-white px-5 py-3 text-sm text-ink-soft shadow-2xl ring-1 ring-[#e8dfc9]">
          No match — try “Old City”, “Sukhumvit” or “Chinatown”.
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* AreaCard — neighbourhood card with a collapsible, ready-made day    */
/* plan. The plan stays in the DOM (collapsed) for SEO/AI extraction.  */
/* ------------------------------------------------------------------ */
export function AreaCard({ area }) {
  const [open, setOpen] = useState(false);

  return (
    <article
      id={area.id}
      className={`${area.span} ${area.horizontal ? 'md:flex' : ''} group scroll-mt-28 overflow-hidden rounded-2xl border border-line bg-white shadow-[0_1px_0_rgba(43,36,24,0.04)] transition-shadow duration-300 hover:shadow-[0_20px_45px_-20px_rgba(43,36,24,0.35)]`}
    >
      <div
        className={`relative overflow-hidden ${
          area.horizontal ? 'h-56 w-full md:h-auto md:min-h-[280px] md:w-[38%] md:shrink-0' : ''
        }`}
      >
        <SmartImage
          src={area.img}
          seed={area.seed}
          alt={area.alt}
          width={1200}
          height={800}
          sizes={area.sizes}
          className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] ${
            area.horizontal ? 'h-56 md:absolute md:inset-0 md:h-full' : area.imgH
          }`}
        />
        <span className="thai absolute bottom-2.5 right-4 text-2xl text-white/90 drop-shadow-[0_1px_6px_rgba(0,0,0,0.55)]">
          {area.thai}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-[1.35rem] font-semibold leading-snug text-jade">{area.name}</h3>
        <p className="eyebrow mt-1 text-gold-deep">{area.kicker}</p>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{area.desc}</p>
        <p className="mt-4 text-sm">
          <span className="font-semibold text-jade">Best for:</span>{' '}
          <span className="text-ink-soft">{area.bestFor}</span>
        </p>

        <div className="mt-auto pt-5">
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-terra transition-colors hover:text-terra-deep"
          >
            Explore {area.short}
            <Icon name="chevron" className={`h-4 w-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
          </button>

          <div
            className={`grid transition-all duration-500 ease-out ${
              open ? 'mt-3 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
            }`}
          >
            <div className="overflow-hidden">
              <div className="rounded-xl border-l-4 border-[#c9a84c] bg-[#fff9e6] p-4">
                <p className="eyebrow text-gold-deep">A simple day plan</p>
                <ol className="mt-2.5 space-y-2 text-sm leading-snug text-[#3e3623]">
                  {area.plan.map((s) => (
                    <li key={s.t} className="flex gap-3">
                      <span className="w-11 shrink-0 font-semibold tabular-nums text-jade">{s.t}</span>
                      <span>{s.d}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* MonthStrip — interactive month-by-month climate selector. All 12    */
/* months render server-side (extractable); selection swaps a panel.   */
/* ------------------------------------------------------------------ */
export function MonthStrip({ months }) {
  const [sel, setSel] = useState(10); // November — the "best month" default
  const m = months[sel];

  return (
    <div>
      <div className="grid grid-cols-4 gap-1.5 sm:grid-cols-6 md:grid-cols-12">
        {months.map((mo, i) => (
          <button
            key={mo.abbr}
            type="button"
            onClick={() => setSel(i)}
            aria-pressed={sel === i}
            title={mo.name}
            className={`relative rounded-lg px-1 py-2.5 text-center transition-colors ${
              sel === i
                ? 'bg-jade text-[#faf4e8]'
                : 'bg-white text-[#2b2418] ring-1 ring-[#e8dfc9] hover:bg-[#fff9e6]'
            }`}
          >
            {mo.best && (
              <span
                className={`absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full ${
                  sel === i ? 'bg-[#e9d9a6]' : 'bg-[#c9a84c]'
                }`}
                title="Peak cool season"
              />
            )}
            <span className="block text-[11px] font-semibold uppercase tracking-wide">{mo.abbr}</span>
            <span className="mt-0.5 block text-sm font-semibold tabular-nums">{mo.high}°</span>
            <span
              className="mx-auto mt-1.5 block h-1.5 w-5 rounded-full"
              style={{
                opacity: 0.25 + (mo.rain / 340) * 0.75,
                background: sel === i ? '#e9d9a6' : '#0f5132',
              }}
            />
          </button>
        ))}
      </div>
      <p className="mt-3 text-xs text-ink-soft">
        The bar under each month shows relative rainfall — the darker the bar, the wetter. Gold dots mark peak
        cool-season months.
      </p>

      <div key={sel} className="rise mt-5 rounded-2xl border border-line bg-white p-6 md:p-7">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h3 className="font-display text-2xl font-semibold text-jade">{m.name}</h3>
          <p className="font-display text-lg italic text-gold-deep">{m.verdict}</p>
        </div>
        <dl className="mt-5 grid grid-cols-2 gap-4 border-t border-line pt-4 sm:grid-cols-4">
          {[
            ['Avg high', `${m.high}°C`],
            ['Avg low', `${m.low}°C`],
            ['Rainfall', `~${m.rain} mm`],
            ['Wet days', `~${m.wet}`],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="eyebrow text-gold-deep">{k}</dt>
              <dd className="mt-1 font-display text-xl font-semibold tabular-nums text-[#2b2418]">{v}</dd>
            </div>
          ))}
        </dl>
        {m.note && (
          <p className="mt-4 flex items-start gap-2.5 text-sm leading-relaxed text-ink-soft">
            <Icon name="calendar" className="mt-0.5 h-4 w-4 shrink-0 text-[#c9a84c]" />
            {m.note}
          </p>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* NewsletterForm — local validation + inline success state.           */
/* ------------------------------------------------------------------ */
export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [done, setDone] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
    if (!ok) {
      setError('Please enter a valid email address — e.g. you@example.co.uk');
      return;
    }
    setError('');
    setDone(true);
  };

  if (done) {
    return (
      <div className="rounded-2xl bg-[#0a3a23] p-6 ring-1 ring-[#c9a84c]/40">
        <p className="flex items-center gap-2.5 font-display text-xl font-semibold text-[#faf4e8]">
          <Icon name="check" className="h-5 w-5 text-[#c9a84c]" />
          You’re on the list — khob khun!
        </p>
        <p className="mt-2 text-sm leading-relaxed text-[#bfd8c8]">
          Your first Bangkok briefing lands this week. Didn’t get it? Check your spam folder, or add
          hello@bangkok.co.uk to your contacts.
        </p>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={submit}>
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor="newsletter-email" className="sr-only">Email address</label>
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.co.uk"
          className="w-full rounded-full border border-[#c9a84c]/50 bg-white/10 px-5 py-3 text-[15px] text-white placeholder:text-[#bfd8c8] focus:border-[#c9a84c] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/40"
        />
        <button
          type="submit"
          className="shrink-0 rounded-full bg-[#c9a84c] px-6 py-3 text-sm font-bold text-[#241b05] transition-colors hover:bg-[#d9bc66]"
        >
          Sign me up
        </button>
      </div>
      {error && (
        <p className="mt-2.5 text-sm text-[#f3c2c2]" role="alert">{error}</p>
      )}
      <p className="mt-3.5 text-xs leading-relaxed text-[#bfd8c8]">
        One email a month. No spam, no selling your data — unsubscribe in one click.
      </p>
    </form>
  );
}
