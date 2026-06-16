## Recommended styling improvements

The rebrand is solid, but a few things still feel like the old Bebas-era site rather than the warm, candlelit poster. None of these change layout, copy, or component structure — they're all token + typographic refinement.

### 1. Display type is too tightly tracked
DM Serif Display is a high-contrast serif — it needs *air*, not Bebas-style tight tracking. Right now `--font-display` is `letter-spacing: -0.02em` and hero/section headings use `tracking-wider` (a holdover from Bebas). Result: the serifs collide and the headings look cramped.

- Change `@utility font-display` to `letter-spacing: -0.01em`, `line-height: 1.0`.
- Remove `tracking-wider` from every `font-display` heading (Hero H1, section H2s, step numbers, schedule titles, footer). Let the serif breathe.

### 2. Hero H1 should be mixed case, not ALL CAPS
The poster's whole identity is "The Way" in mixed-case serif. All-caps DM Serif Display reads as generic editorial.

- Hero H1: render as `The Way` (huge) with `Conference` as a smaller line, instead of `THE WAY CONFERENCE` block. Keep current sizes.
- Same for the four section H2s (`NOT ANOTHER CONFERENCE.`, `THE SPEAKERS`, `THE SCHEDULE`, etc.) — switch to mixed case ("Not another conference.", "The Speakers", "The Schedule"). Eyebrows stay ALL CAPS — that contrast is the whole point.

### 3. Add candlelit glow + vignette to dark sections
Right now dark sections are flat warm-brown. The poster has a clear amber light source.

- Add a reusable `.candlelit` utility: radial-gradient from `rgba(220,140,55,0.18)` at top-center fading to transparent, plus an inset vignette `box-shadow: inset 0 0 200px rgba(0,0,0,0.45)`.
- Apply to Hero, Pastors on-ramp, and Schedule sections.

### 4. Grain is too subtle on the new palette
`.grain` is at opacity 0.18 with overlay blend — barely visible on the warmer cream. Bump to 0.28 and add it to `body` so the whole site has the paper texture, not just opt-in sections.

### 5. Copper frame is defined but unused
`--copper-frame` exists but only the hero uses it. Either:
- Add a 1px copper hairline under the SiteNav and above the SiteFooter to echo the poster's inset border, OR
- Remove the token if we're not committing to it.

Recommend: add the hairlines. Cheap, ties the chrome to the poster.

### 6. Gold accent is doing too much
`--gold` (#C68A3C) is used for: eyebrows, step numbers, step closing lines, hover states, CTA bg, focus rings, bottom border on Pastors strip. It dilutes the accent.

- Keep gold for: primary CTAs, eyebrows, the step `01–04` numerals.
- Switch the step closing lines and the Pastors `border-b-2` to `--copper-frame` (deeper, more poster-like).

### 7. Button shape
Current buttons are `rounded-[2px]` — almost-square. The poster aesthetic would read better with either fully sharp (`rounded-none`) or a softer `rounded-md`. Recommend `rounded-none` to match the poster's hard edges.

### Out of scope
- No layout, section order, copy, route, or component-structure changes.
- No new fonts or imagery.

### Questions
1. OK to switch all display headings to mixed case (keeping eyebrows uppercase)?
2. Copper hairlines under nav / above footer — yes or skip?
3. Buttons: fully sharp (`rounded-none`) or keep the 2px?
