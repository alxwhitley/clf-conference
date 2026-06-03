
## New Wave Conference Site

A 4-page marketing site for the New Wave young adults conference, built on the TanStack Start template with a custom warm-editorial design system.

## Design System (src/styles.css)

Replace template tokens with the New Wave palette and type stack:

- Fonts: load Bebas Neue (display) + Inter (body) via Google Fonts in `__root.tsx` head links.
- Color tokens (oklch equivalents of the provided hex):
  - `--cream #F7F4EF` → `--background`
  - `--surface #EDEAE2` → `--card` / `--muted`
  - `--dark #141210` → `--foreground` / nav CTA
  - `--dark-warm #1E1A14` → dark inversion sections (custom `--dark-warm` token)
  - `--gold #C49A3A` → `--accent` / `--primary`
  - `--border rgba(20,18,16,0.1)`
- Custom utilities: `.font-display` (Bebas Neue, tight tracking), `.eyebrow` (Inter 700, 9–10px, 2.5–3px tracking, uppercase, gold), `.grain` (CSS SVG noise overlay).
- No border-radius globally beyond 0–4px. No shadows. No gradients (except hero overlay).

## Routes

```
src/routes/
  __root.tsx         shared shell — fonts, nav, footer, <Outlet/>
  index.tsx          Home
  schedule.tsx       Full schedule with accordion breakouts
  speakers.tsx       Speaker grid
  pastors.tsx        Pastors Corner
```

Each route gets its own `head()` with unique title, description, og:title/description. Root carries fonts + sitewide defaults only (no og:image at root).

## Shared Components (src/components/)

- `SiteNav.tsx` — Logo "NEW WAVE" left, links (Schedule, Speakers, Pastors) center/right, dark "Register" CTA. Transparent over hero, becomes cream-bg after scroll (IntersectionObserver or scroll listener).
- `SiteFooter.tsx` — Dark bg, logo, nav, socials, CLF Church credit.
- `Eyebrow.tsx` — gold uppercase label.
- `SectionHeading.tsx` — eyebrow + Bebas Neue headline.
- `Button.tsx` variants: `primary` (gold fill, dark text), `ghost-dark`, `ghost-light`, `nav` (dark fill, cream text). Sharp corners.
- `Tag.tsx` — outlined gold pill for Everyone / Main + Pastors / Leaders.
- `MetaStrip.tsx` — dark bar, 4 columns, gold bottom border.
- `SpeakerCard.tsx` — surface bg, photo placeholder area, Bebas name, gold ministry label, optional bio.
- `ScheduleRow.tsx` — Day | Title | Tag row used on home teaser + leaders schedule.
- `BreakoutAccordion.tsx` — expandable slot with Main/Pastors tab switcher (gold underline active).

## Page composition

### Home (/)
1. Hero — full-viewport dark placeholder with centered play-icon + "BACKGROUND VIDEO" label, grain overlay, gradient dark→transparent bottom-up. Eyebrow "RALEIGH, NC — OCT 17–19", "NEW WAVE" headline (clamp 80–120px), subhead, Register Now (gold) + View Schedule (ghost).
2. Meta strip — When / Where / Who / Sessions.
3. About — cream, "WHAT IS NEW WAVE" eyebrow, "NOT ANOTHER CONFERENCE." headline, body copy.
4. Featured Speakers — 3 speaker cards + "Meet All Speakers" link to /speakers.
5. Schedule teaser — dark-warm inversion, 4–5 key rows, gold "See Full Schedule" → /schedule.
6. Register CTA — cream, "DON'T MISS IT.", gold button.
7. Footer.

### Schedule (/schedule)
- Short dark hero (50vh) "THE SCHEDULE".
- Optional day filter pills (Thu/Fri/Sat/Sun).
- Sections grouped by day. Rows show Time | Title | Location | Tag.
- General sessions render as plain rows tagged "Everyone".
- Breakout slots use `BreakoutAccordion` — click expands inline with Main/Pastors tabs; each tab lists sessions (title, speaker, room, 2–3 sentence description).

### Speakers (/speakers)
- Short dark hero "THE SPEAKERS".
- 3-col / 2-col / 1-col responsive grid of speaker cards with bio. Hover: subtle photo scale.

### Pastors Corner (/pastors)
- Short dark hero, eyebrow "FOR SENIOR LEADERS & PASTORS", headline "PASTORS CORNER", framing subtext.
- Vision section — cream, 2–3 paragraphs, more measured tone.
- Leaders schedule — dark inversion, Thu / Fri daytime / Sat daytime rows (no tab split).
- Leaders breakouts — cream accordion cards (title, speaker, room, description).
- CTA — "Bring Your Team" gold button.

## Content

All speakers, bios, session titles, times, rooms — realistic placeholder data defined in `src/data/conference.ts` (typed). Dates: Oct 17–19, 2025.

## Technical notes

- Mobile-first; test at 375px.
- Nav scroll transition: small `useEffect` listening to scrollY, toggles classes.
- Accordion: local component state with single-open behavior per slot; tab state per accordion.
- No video embed — hero is a dark textured div with grain + play-icon SVG.
- No Lovable Cloud (no backend needed).
- Set viewport to mobile in preview after build since mobile-first is emphasized.
