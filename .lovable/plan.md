## Issues in the screenshot

1. **Speakers section has no top padding** — `className="bg-cream pb-24 md:pb-32"` only pads the bottom, so the "The Speakers" headline butts up against the dark Pastors strip with no breathing room.
2. **Pastors strip layout feels broken on mid widths** — the `[1fr_1.4fr]` two-column grid leaves the eyebrow stranded far to the left while the paragraph + button compete for the right column, and the button often wraps awkwardly under the paragraph at this viewport.
3. **Copper hairline under the Pastors strip** sits directly against the cream section with no gap, reading as a stray line rather than a frame.

## Fix

**`src/routes/index.tsx` — Speakers section (line 137):**
- Change `className="bg-cream pb-24 md:pb-32"` → `className="bg-cream py-24 md:py-32"` so the section gets matching top padding like every other section on the page.

**`src/routes/index.tsx` — Pastors on-ramp (lines 119–134):**
- Bump vertical padding from `py-16 md:py-20` → `py-20 md:py-28` to match the rhythm of neighboring sections (without going full `py-32`, since this is an interstitial strip).
- Restructure the inner grid so it stops fighting itself at this width. Switch from the nested `[1fr_1.4fr]` + inner flex to a single 3-column layout on `md+`:
  - Column 1: eyebrow (`For Pastors & Leaders`)
  - Column 2: paragraph (allowed to span and breathe)
  - Column 3: button (right-aligned, doesn't wrap under the paragraph)
  - On mobile, stacks vertically as it does today.
- Keep the `candlelit` background, `border-b border-copper-frame`, and all copy unchanged.

**No other files touched.** No copy, color, font, or component-API changes — purely spacing and grid structure on the home page.
