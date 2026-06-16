## Match the poster's "THE WAY" font

The poster uses a high-contrast didone-style serif — extreme thick/thin contrast, sharp triangular serifs, flat-apex A, and a W where the inner strokes cross at the top. The current `DM Serif Display` is close in spirit but rounder, less contrasted, and the W is different.

The exact poster font is most likely a paid type (looks like **Tobias** or **GT Super Display**). The closest free Google Font match is **Bodoni Moda** (specifically the SemiBold/Bold display optical size), with **Playfair Display** as a softer fallback.

### Plan

1. Swap the display font from DM Serif Display → **Bodoni Moda** (`@import` via Google Fonts in `src/styles.css`, `wght 700–900`, optical size 96 for display).
2. Update `--font-display` CSS variable + `@utility font-display` to use Bodoni Moda, keep current `letter-spacing: -0.01em`, `line-height: 1`.
3. Hero H1 only: render `THE WAY` in ALL CAPS (matches poster) at the existing huge size; keep `Conference` as the smaller mixed-case sub-line beneath in cream/85.
4. Leave all other section H2s on the new Bodoni Moda in their current mixed case — they'll inherit the new font automatically.
5. No layout, color, spacing, or copy changes. No new assets.

### Out of scope
- Replicating the curved "ANNUAL CLF CONFRNCE 2026" arc text.
- Buying/embedding the exact commercial font.
- Changes to body font (Inter stays).

### Question
The poster type is commercial; **Bodoni Moda** is the closest free match. OK to use it, or would you prefer **Playfair Display** (softer) or that I source the exact paid font (e.g. Tobias / GT Super) if you have a license?
