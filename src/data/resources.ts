export interface Resource {
  sessionId: string;
  videoUrl?: string;
  notesUrl?: string;
  slidesUrl?: string;
  track: "main" | "pastors" | "shared";
}

export const resources: Resource[] = [];
