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
  { id: "tom-bedford", name: "Tom Bedford", title: "Pastor", church: "Placeholder Church", bio: "Placeholder bio for Tom Bedford.", photo: "/speakers/tom-bedford.jpg", roles: ["breakout-main", "breakout-pastors"] },
  { id: "buck-hudson", name: "Buck Hudson", title: "Pastor", church: "Placeholder Church", bio: "Placeholder bio for Buck Hudson.", photo: "/speakers/buck-hudson.jpg", roles: ["breakout-main", "breakout-pastors"] },
  { id: "jb-masinde", name: "JB Masinde", title: "Pastor", church: "Placeholder Church", bio: "Placeholder bio for JB Masinde.", photo: "/speakers/jb-masinde.jpg", roles: ["breakout-main", "breakout-pastors"] },
  { id: "marcus-elliot", name: "Marcus Elliot", title: "Lead Pastor", church: "Common Ground", bio: "Placeholder bio for Marcus Elliot.", photo: "/speakers/marcus-elliot.jpg", roles: ["main-session"] },
  { id: "naomi-park", name: "Naomi Park", title: "Director", church: "Upper Room Collective", bio: "Placeholder bio for Naomi Park.", photo: "/speakers/naomi-park.jpg", roles: ["main-session"] },
  { id: "jeremiah-cole", name: "Jeremiah Cole", title: "Pastor", church: "CLF Church", bio: "Placeholder bio for Jeremiah Cole.", photo: "/speakers/jeremiah-cole.jpg", roles: ["main-session"] },
];
