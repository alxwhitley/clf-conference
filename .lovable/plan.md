# Resources Page Plan

A new `/resources` route showcasing main session videos, breakout session notes (blog-style), and downloadable video files. All content is hardcoded in a TypeScript data file for easy editing.

## What gets built

### 1. Data file: `src/data/resources.ts`
Three exported arrays:
- `mainSessions`: `{ id, title, speaker, day, youtubeUrl }[]` — YouTube IDs are parsed from the URL to build thumbnail URLs (`https://img.youtube.com/vi/{id}/maxresdefault.jpg`).
- `breakoutNotes`: `{ slug, title, speaker, day, notesMarkdown, pdfUrl? }[]` — markdown notes + optional PDF link.
- `videoDownloads`: `{ title, description, driveUrl, sizeLabel? }[]` — Google Drive share URLs.

### 2. New routes
- `src/routes/resources.tsx` — index page with three sections:
  - **Main Sessions** — grid of YouTube thumbnail cards (uses new `YouTubeCard` component). Click → opens YouTube in a new tab.
  - **Breakout Session Notes** — list of cards linking to each note's detail page.
  - **Video Downloads** — list of cards with "Download from Google Drive" buttons.
- `src/routes/resources.$slug.tsx` — blog-style detail page for a single breakout note. Renders markdown, with a "Download PDF" button at the top if `pdfUrl` is set.

### 3. New components
- `src/components/site/YouTubeCard.tsx` — thumbnail image with play-button overlay, title, speaker; entire card is an `<a target="_blank">` to the YouTube URL.
- `src/components/site/ResourceCard.tsx` — shared card style for notes and downloads, matching the existing dark/cream design tokens.

### 4. Navigation
Add `Resources` link to `SiteNav` (desktop + mobile menus), placed alongside Schedule / Speakers / For pastors & leaders.

## Technical notes
- Markdown rendering: install `react-markdown` + `remark-gfm` for the notes detail page.
- YouTube ID parsing: small util in `src/lib/youtube.ts` handling `youtube.com/watch?v=`, `youtu.be/`, and `youtube.com/shorts/` formats; falls back to `hqdefault.jpg` if `maxresdefault` 404s (via `onError`).
- PDF "download": plain `<a href={pdfUrl} download target="_blank">` — no generation, just links out.
- Drive "download": plain `<a href={driveUrl} target="_blank">` — opens the share link.
- Styling: reuse existing tokens (`bg-dark`, `text-cream`, `text-gold`, `font-display`, `eyebrow`) and `SiteLinkButton` for CTAs. No new design tokens needed.
- New route metadata: each route gets its own `head()` with unique title/description (per route-architecture guidance).

## Out of scope
- No backend, no auth, no admin UI.
- No PDF generation — PDFs must be pre-made and hosted (Drive link works fine).
- No video hosting — Drive links only.

To add new content later, edit `src/data/resources.ts`.
