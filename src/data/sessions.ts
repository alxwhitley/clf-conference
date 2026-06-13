export type Track = "main" | "pastors";

export interface Session {
  id: string;
  day: "thursday" | "friday" | "saturday" | "sunday";
  time: string;
  title: string;
  description: string;
  tracks: Track[];
  type: "main-session" | "breakout" | "meal" | "worship";
  breakoutOptions?: {
    track: Track;
    speaker: string;
    title: string;
    description: string;
  }[];
}

export const sessions: Session[] = [
  // THURSDAY — pastors only
  { id: "thu-morning", day: "thursday", time: "9:00 AM", title: "Morning Session", description: "Opening gathering for pastors and senior leaders.", tracks: ["pastors"], type: "main-session" },
  { id: "thu-afternoon", day: "thursday", time: "2:00 PM", title: "Afternoon Session", description: "Deep dive for pastoral leadership.", tracks: ["pastors"], type: "main-session" },
  { id: "thu-dinner", day: "thursday", time: "7:00 PM", title: "Leaders Dinner", description: "Hosted dinner for pastors and senior leaders.", tracks: ["pastors"], type: "meal" },

  // FRIDAY — shared
  { id: "fri-night", day: "friday", time: "7:00 PM", title: "Opening Night", description: "The Way begins. All attendees gather.", tracks: ["main", "pastors"], type: "main-session" },

  // SATURDAY — shared sessions + breakouts
  { id: "sat-morning", day: "saturday", time: "10:00 AM", title: "Morning Session", description: "Session two of The Way.", tracks: ["main", "pastors"], type: "main-session" },
  {
    id: "sat-breakout-1", day: "saturday", time: "1:00 PM", title: "Breakout Session 1", description: "", tracks: ["main", "pastors"], type: "breakout",
    breakoutOptions: [
      { track: "main", speaker: "Tom Bedford", title: "Walking in Deliverance", description: "Practical tools for sustained freedom." },
      { track: "pastors", speaker: "Buck Hudson", title: "Leading a Deliverance Culture", description: "Building a church culture where freedom is the norm." },
    ],
  },
  {
    id: "sat-breakout-2", day: "saturday", time: "2:30 PM", title: "Breakout Session 2", description: "", tracks: ["main", "pastors"], type: "breakout",
    breakoutOptions: [
      { track: "main", speaker: "Buck Hudson", title: "Identity After the Breakthrough", description: "Who are you on the other side of freedom?" },
      { track: "pastors", speaker: "JB Masinde", title: "Shepherding Transformation", description: "How pastors guide their people through real change." },
    ],
  },
  {
    id: "sat-breakout-3", day: "saturday", time: "4:00 PM", title: "Breakout Session 3", description: "", tracks: ["main", "pastors"], type: "breakout",
    breakoutOptions: [
      { track: "main", speaker: "JB Masinde", title: "Stepping Into Mission", description: "From identity to assignment — what your mission looks like." },
      { track: "pastors", speaker: "Tom Bedford", title: "The Pastor as Missionary", description: "Reclaiming apostolic vision for your local church." },
    ],
  },
  { id: "sat-night", day: "saturday", time: "7:00 PM", title: "Night Session", description: "The climax of the weekend. All attendees gather.", tracks: ["main", "pastors"], type: "main-session" },

  // SUNDAY — shared
  { id: "sun-morning", day: "sunday", time: "10:00 AM", title: "Morning Gathering", description: "Commissioning and send-out. The Way continues beyond the weekend.", tracks: ["main", "pastors"], type: "main-session" },
];

export const dayLabels: Record<Session["day"], { short: string; long: string; date: string }> = {
  thursday: { short: "Thu", long: "Thursday", date: "Oct 16" },
  friday: { short: "Fri", long: "Friday", date: "Oct 17" },
  saturday: { short: "Sat", long: "Saturday", date: "Oct 18" },
  sunday: { short: "Sun", long: "Sunday", date: "Oct 19" },
};
