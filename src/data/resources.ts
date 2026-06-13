export type MainSession = {
  id: string;
  title: string;
  speaker: string;
  day: string;
  youtubeUrl: string;
};

export type BreakoutNote = {
  slug: string;
  title: string;
  speaker: string;
  day: string;
  excerpt: string;
  notesMarkdown: string;
  pdfUrl?: string;
};

export type VideoDownload = {
  title: string;
  description: string;
  driveUrl: string;
  sizeLabel?: string;
};

export const mainSessions: MainSession[] = [
  {
    id: "opening-night",
    title: "Opening Night Session",
    speaker: "Jeremiah Cole",
    day: "Friday — Oct 17",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: "saturday-morning",
    title: "Morning Worship + Word",
    speaker: "Naomi Park",
    day: "Saturday — Oct 18",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: "saturday-night",
    title: "Saturday Night Session",
    speaker: "Naomi Park",
    day: "Saturday — Oct 18",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: "sunday-sending",
    title: "Morning Gathering + Sending",
    speaker: "Jeremiah Cole",
    day: "Sunday — Oct 19",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
];

export const breakoutNotes: BreakoutNote[] = [
  {
    slug: "identity-beyond-performance",
    title: "Identity Beyond Performance",
    speaker: "Alana Fields",
    day: "Saturday — 11:00 AM",
    excerpt:
      "What does it mean to live from belovedness instead of performance? A practical look at rooting your identity outside this generation's metrics.",
    notesMarkdown: `## Opening

We live in a generation handed a metric for every part of life — followers, salaries, streaks. The question is whether our identity is rooted in *what we produce* or in *who God says we are*.

## Three movements

1. **Naming the performance script** — surface the unspoken rules you live under.
2. **Hearing the Father's voice** — practices for daily belovedness.
3. **Living unhurried** — rhythms that protect identity from collapse.

## Scriptures

- Matthew 3:17
- Romans 8:14–17
- 1 John 3:1

## Practical takeaways

- A short morning practice you can sustain for 30 days.
- One relationship to invite into the process.
- One metric to fast from this month.
`,
    pdfUrl: "",
  },
  {
    slug: "prayer-that-doesnt-quit",
    title: "Prayer That Doesn't Quit",
    speaker: "Priscilla Jones",
    day: "Saturday — 11:00 AM",
    excerpt:
      "A working session on sustained prayer — not as a moment but a lifestyle. Bring a journal. Expect to actually pray.",
    notesMarkdown: `## The premise

Most of us know how to pray *intensely*. Few of us know how to pray *durably*. This session is about the second.

## Framework

- **Anchor** — a fixed time, a fixed place, a fixed posture.
- **Order** — adoration, confession, intercession, listening.
- **Friction** — what to do when nothing is happening.

## Practice

We spent the last 20 minutes praying together in silence and out loud. Notes below are scaffolding, not a substitute.
`,
    pdfUrl: "",
  },
  {
    slug: "vocation-and-calling",
    title: "Vocation + Calling",
    speaker: "Marcus Elliot",
    day: "Saturday — 2:00 PM",
    excerpt:
      "How to think about work, calling, and ordinary faithfulness when everything around you tells you to optimize and exit.",
    notesMarkdown: `## The lie of optimization

You were not given a life to optimize. You were given a life to steward.

## Reframing vocation

- Vocation is *voice* — who is calling you, and to what?
- Calling is rarely a lightning bolt; it is usually a long obedience.

## Questions to sit with

1. Where am I most tempted to exit?
2. Who am I responsible to in this season?
3. What would faithfulness look like over the next 5 years, not 5 months?
`,
    pdfUrl: "",
  },
];

export const videoDownloads: VideoDownload[] = [
  {
    title: "Full Weekend — Highlight Reel",
    description: "A 6-minute recap of the weekend — shareable with your church or small group.",
    driveUrl: "https://drive.google.com/drive/folders/example",
    sizeLabel: "MP4 · 240 MB",
  },
  {
    title: "Sermon Audio Pack",
    description: "All four main session audio files (MP3) for offline listening.",
    driveUrl: "https://drive.google.com/drive/folders/example",
    sizeLabel: "ZIP · 180 MB",
  },
];
