export type Tag = "Everyone" | "Main + Pastors" | "Leaders" | "Young Adults";

export type Speaker = {
  id: string;
  name: string;
  ministry: string;
  bio: string;
};

export const speakers: Speaker[] = [
  {
    id: "alana-fields",
    name: "Alana Fields",
    ministry: "Author + Teacher",
    bio: "Alana is the author of three books on prayer and presence. She teaches young women across the country to hear God's voice and live unafraid.",
  },
  {
    id: "david-okafor",
    name: "David Okafor",
    ministry: "Worship Pastor — The Bridge",
    bio: "David leads worship across the US and writes songs for the local church. His sets carry a rare combination of reverence and joy.",
  },
  {
    id: "priscilla-jones",
    name: "Priscilla Jones",
    ministry: "Founder — Sent Generation",
    bio: "Priscilla has spent fifteen years mobilizing young adults into missions. She teaches with the conviction of someone who has gone first.",
  },
];

export type Session = {
  time: string;
  title: string;
  location: string;
  tag: Tag;
  speaker?: string;
  description?: string;
};

export type BreakoutTrack = {
  track: "Main" | "Pastors";
  sessions: Session[];
};

export type ScheduleItem =
  | { type: "session"; session: Session }
  | { type: "breakout"; time: string; title: string; tracks: BreakoutTrack[] };

export type Day = {
  key: string;
  label: string;
  date: string;
  items: ScheduleItem[];
};

export const schedule: Day[] = [
  {
    key: "fri",
    label: "Friday",
    date: "Oct 17",
    items: [
      {
        type: "session",
        session: {
          time: "7:00 PM",
          title: "Opening Night Session",
          location: "Main Auditorium",
          tag: "Everyone",
        },
      },
    ],
  },
  {
    key: "sat",
    label: "Saturday",
    date: "Oct 18",
    items: [
      {
        type: "session",
        session: {
          time: "9:00 AM",
          title: "Morning Worship + Word",
          location: "Main Auditorium",
          tag: "Everyone",
        },
      },
      {
        type: "breakout",
        time: "11:00 AM",
        title: "Breakout Sessions",
        tracks: [
          {
            track: "Main",
            sessions: [
              {
                time: "11:00 AM",
                title: "Identity Beyond Performance",
                location: "Hall B",
                tag: "Young Adults",
                speaker: "Alana Fields",
                description:
                  "What does it mean to live from belovedness instead of performance? A practical session on rooting your identity outside the metrics this generation is handed.",
              },
              {
                time: "11:00 AM",
                title: "Prayer That Doesn't Quit",
                location: "Hall C",
                tag: "Young Adults",
                speaker: "Priscilla Jones",
                description:
                  "A working session on sustained prayer — not as a moment but as a lifestyle. Bring a journal. Expect to actually pray.",
              },
            ],
          },
          {
            track: "Pastors",
            sessions: [
              {
                time: "11:00 AM",
                title: "Pastoring The Distracted Generation",
                location: "Upper Room",
                tag: "Leaders",
                description:
                  "An honest conversation on shepherding 18–30s in an age of fragmented attention. What works, what doesn't, and what we have to repent of.",
              },
            ],
          },
        ],
      },
      {
        type: "breakout",
        time: "2:00 PM",
        title: "Afternoon Breakouts",
        tracks: [
          {
            track: "Main",
            sessions: [
              {
                time: "2:00 PM",
                title: "Vocation + Calling",
                location: "Hall B",
                tag: "Young Adults",
                description:
                  "How to think about work, calling, and ordinary faithfulness when everything around you tells you to optimize and exit.",
              },
            ],
          },
          {
            track: "Pastors",
            sessions: [
              {
                time: "2:00 PM",
                title: "Building A Young Adults Ministry That Lasts",
                location: "Upper Room",
                tag: "Leaders",
                description:
                  "Practical infrastructure for a young adults ministry — leadership pipeline, rhythms, money, and the slow work of formation.",
              },
            ],
          },
        ],
      },
      {
        type: "session",
        session: {
          time: "7:00 PM",
          title: "Saturday Night Session",
          location: "Main Auditorium",
          tag: "Everyone",
        },
      },
    ],
  },
  {
    key: "sun",
    label: "Sunday",
    date: "Oct 19",
    items: [
      {
        type: "session",
        session: {
          time: "10:00 AM",
          title: "Morning Gathering + Sending",
          location: "Main Auditorium",
          tag: "Everyone",
        },
      },
    ],
  },
];

export const pastorsSchedule: Session[] = [
  {
    time: "Fri 2:00 PM",
    title: "Pre-Conference Pastors Lunch",
    location: "Hospitality Suite",
    tag: "Leaders",
  },
  {
    time: "Sat 9:00 AM",
    title: "Leaders Morning Roundtable",
    location: "Upper Room",
    tag: "Leaders",
  },
  {
    time: "Sat 11:00 AM",
    title: "Pastoring The Distracted Generation",
    location: "Upper Room",
    tag: "Leaders",
  },
  {
    time: "Sat 2:00 PM",
    title: "Building A Young Adults Ministry That Lasts",
    location: "Upper Room",
    tag: "Leaders",
  },
  {
    time: "Sat 4:30 PM",
    title: "Q+A With The Pastoral Team",
    location: "Upper Room",
    tag: "Leaders",
  },
];

export const pastorsBreakouts = [
  {
    title: "Leading Through Burnout",
    location: "Upper Room",
    description:
      "An honest, unhurried conversation on sustainability in pastoral ministry — the warning signs, the patterns, and the practices that actually rebuild.",
  },
  {
    title: "Discipling Without A Program",
    location: "Hospitality Suite",
    description:
      "What discipleship looks like when you strip away the curriculum. A practical session on slow, embedded formation in the local church.",
  },
  {
    title: "Money, Power, And The Local Church",
    location: "Hall A",
    description:
      "A frank workshop on building a healthy financial and governance culture in a church that pastors young adults well.",
  },
];
