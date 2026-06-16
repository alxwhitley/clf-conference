## Goal
Rebrand the entire site to match the warm, moody, candlelit feel of the 2026 Conference graphic, and replace the Bebas Neue display font with a high-contrast flared serif that replicates the "THE WAY" lettering.

## Display font replacement
The "THE WAY" lettering is a high-contrast serif with flared/cupped serifs and a slightly condensed feel. The closest free Google Font match is **DM Serif Display** (free, very similar flared serifs, dramatic thick/thin contrast). Alternates: Playfair Display (rounder), Bodoni Moda (sharper). I'll go with **DM Serif Display** unless you prefer one of the alternates.

- Swap `--font-display` from Bebas Neue → DM Serif Display across `src/styles.css` and the Google Fonts link in `src/routes/__root.tsx`.
- Keep Inter as body font (works well with this serif and matches the graphic's subhead).
- Adjust display tracking/leading so headlines feel like the poster (tighter letter-spacing, mixed-case allowed instead of forced uppercase in a few hero spots).

## Color palette (warm/moody)
Shift tokens in `src/styles.css` away from the current near-black + cream toward a warmer, darker, candlelit palette pulled from the image:

- `--dark` / `--dark-warm`: deep warm brown-black `#1A120B` / `#241810`
- `--cream`: warm parchment `#F2E6D2`
- `--surface`: muted clay `#E8D8C2`
- `--gold` (accent): warmer amber/copper `#C68A3C` → `#B97A2E`
- New `--copper-frame` `#A0673A` for the thin border treatment seen in the graphic
- `--text-muted`: warmer brown tint
- Background gradient on dark sections shifts from gold radial → amber/ember radial for that candlelit glow

## Hero treatment
- Use the new serif for "THE WAY CONFERENCE" instead of Bebas-style block caps.
- Warmer gradient overlays (amber glow on dark brown), heavier vignette.
- Optional thin copper inset frame echoing the poster border (1–2px inset border with `--copper-frame`).

## Component sweep
Apply the new tokens consistently. No layout changes — only colors, font-family, and minor typographic tuning:
- `Hero.tsx` — serif for H1, new overline color, warmer gradient
- `SiteNav.tsx`, `SiteFooter.tsx`, `MetaStrip.tsx`, `Eyebrow.tsx`, `Tag.tsx`, `Button.tsx` — verify all use semantic tokens (no hardcoded colors); adjust hover/active states for warmer palette
- `PageHero.tsx`, `SpeakerCard.tsx`, `ScheduleRow.tsx`, `BreakoutAccordion.tsx`, `TrackToggle.tsx`, `YouTubeCard.tsx` — token-only updates
- All routes (`index`, `about`, `pastors`, `schedule`, `speakers`, `resources`) inherit automatically via tokens; spot-fix any hardcoded `bg-dark`/`text-cream` usage that no longer reads well.

## Out of scope
- No layout, section order, copy, route, or component-structure changes.
- No new imagery added.

## Questions before I build
1. Confirm **DM Serif Display** as the display font, or pick Playfair Display / Bodoni Moda / something else?
2. Should the hero H1 stay all-caps ("THE WAY CONFERENCE") or switch to mixed case ("The Way") like the graphic, where only "The Way" is the giant serif?
3. Add the thin copper inset frame around hero/page sections to echo the poster border?
