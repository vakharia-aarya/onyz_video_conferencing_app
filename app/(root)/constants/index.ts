export const sidebarLinks = [
  {
    label: "Home",
    imgURL: "/icons/Home.svg",
    route: "/",
  },
  {
    label: "Upcoming",
    imgURL: "./icons/Upcoming.svg",
    route: "/upcoming",
  },
  {
    label: "Previous",
    imgURL: "./icons/Previous.svg",
    route: "/previous",
  },
  {
    label: "Recordings",
    imgURL: "./icons/Video.svg",
    route: "/recordings",
  },
  {
    label: "Personal Room",
    imgURL: "./icons/add-personal.svg",
    route: "/personal-room",
  },
];

export const homeCards = [
  {
    title: "New Meeting",
    description: "Start an instant meeting",
    imgURL: "/icons/add-meeting.svg",
    color: "bg-orange-1",
    action: "isInstantMeeting",
    route: false,
  },
  {
    title: "Join Meeting",
    description: "via invitation link",
    imgURL: "/icons/join-meeting.svg",
    color: "bg-blue-1",
    action: "isJoiningMeeting",
    route: false,
  },
  {
    title: "Schedule Meeting",
    description: "Plan your meeting",
    imgURL: "/icons/schedule.svg",
    color: "bg-purple-1",
    action: "isScheduleMeeting",
    route: false,
  },
  {
    title: "View Recording",
    description: "Check out your recordings",
    imgURL: "/icons/recordings.svg",
    color: "bg-yellow-1",
    action: "/recordings",
    route: true,
  },
];

export const avatarImages = [
  "/images/avatar-1.jpeg",
  "/images/avatar-2.jpeg",
  "/images/avatar-3.png",
  "/images/avatar-4.png",
  "/images/avatar-5.png",
];
