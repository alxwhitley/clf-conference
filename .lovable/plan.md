# Breakout Notes — Empty State + Detail Page Polish

## Changes

### 1. Data shape (`src/data/resources.ts`)
Treat an empty `notesMarkdown` (or whitespace-only) as "notes not yet available." No schema change required — content authors just leave the string empty until ready.

### 2. Card behavior (`src/routes/resources.tsx`)
Replace the `<Link>` wrapping each breakout card with a click handler:
- If `notesMarkdown.trim()` is non-empty → navigate to `/resources/$slug` (current behavior).
- If empty → open a small modal (shadcn `Dialog`) saying: **"Notes coming soon — these will be published once they're made available."** with a close button.

The card visual (read more + download icon) stays the same.

### 3. Detail page (`src/routes/resources.$slug.tsx`)
Move the **Download PDF** button to the upper-right corner of the page header, floating opposite the back link, so it's always visible at the top. When `pdfUrl` is missing, the button is hidden (the card-level popup already gates entry, so this is just a safety).

Layout sketch:
```
← All resources                                    [ Download PDF ]
Friday — Oct 17
Identity Beyond Performance
Alana Fields

## Opening
...notes body...
```

On mobile the download button drops below the back link to avoid crowding.

## Out of scope
- No changes to YouTube cards or video downloads section.
- No backend / upload UI — content still managed via `src/data/resources.ts`.
