export interface Speaker {
  id: string;
  name: string;
  title: string;
  church: string;
  bio: string;
  photo: string;
  roles: ("main-session" | "breakout-main" | "breakout-pastors")[];
}

export const speakers: Speaker[] = [
  { id: "tom-bedford", name: "Tom Bedford", title: "", church: "", bio: "", photo: "/speakers/tom-bedford.jpg", roles: ["breakout-main", "breakout-pastors"] },
  { id: "buck-hudson", name: "Buck Hudson", title: "", church: "", bio: "", photo: "/speakers/buck-hudson.jpg", roles: ["breakout-main", "breakout-pastors"] },
  { id: "jb-masinde", name: "JB Masinde", title: "", church: "", bio: "", photo: "/speakers/jb-masinde.jpg", roles: ["breakout-main", "breakout-pastors"] },
];
