# The Way Conference — Project Context

Read this file before any edit. Do not modify it without being asked.

---

## Project

**The Way Conference** is a 3-day discipleship gathering, Oct 16–18, 2026, Raleigh NC. Hosted by CLF Church.

Two audiences under one roof:
- **Primary track:** Young adults
- **Secondary track:** Pastors and international leaders

Built around a four-stage formation process: **Deliverance → Transformation → Rulership → Mission**

---

## Design System

Do not change any of these without being explicitly asked.

| Token | Value |
|---|---|
| Background | `#F7F4EF` (cream) |
| Dark warm | `#1E1A14` |
| Near-black | `#141210` |
| Gold accent | `#C49A3A` |
| Display font | Bebas Neue |
| Body font | Inter |
| Border radius | None (sharp corners only) |

- Hero: video background with gradient overlay
- Sibling aesthetic to After Hours Raleigh, but more energetic

---

## Architecture

These decisions are locked. Do not refactor without being asked.

- **Dual-track data:** Single TypeScript source, filtered by track tags
- **URL parameter persistence** across navigation
- `/pastors` is a standalone canonical hub
- **QR code routing** per attendee type
- **Resource gating** via a boolean flag in `site.ts` — currently **OFF**

---

## Voice & Copy Rules

- Homepage is young-adults-voiced, with one compact pastors on-ramp section linking to `/pastors`
- **Positioning: formation-first.** Not mobilization-first, experience-first, or network-first.
- Name specific tensions over vague empowerment. Prefer concrete details (e.g., After Hours 500/month, origin story) over abstract spiritual claims.
- **Avoid** generic conference phrasing like "worship, teaching, and community"
- **Tagline:** "Restoring a generation to their identity so they can step boldly into their purpose."
