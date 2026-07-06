export type EventLink = {
  label: string;
  href: string;
  type: "discord" | "instagram" | "website";
};

export type Event = {
  name: string;
  description: string;
  date: string;
  time: string;
  location: string;
  mediaSource?: string;
  links?: EventLink[];
  slug: string;
};

export const upcomingEvents: Event[] = [];

export const pastEvents: Event[] = [
  {
    name: "URA/USRA Mixer: Network With CIS Professors & Co-Op Students!",
    description:
      "Come join us as several CIS professors outline upcoming positions opening in their labs and to learn about the co-op experience from several UofG students in the co-op stream of BComp!",
    date: "January 29, 2026",
    time: "1:00 PM – 3:00 PM",
    location: "Reynolds Building 1101",
    mediaSource: "/urausrmixer.png",
    slug: "ura-usra-mixer",
    links: [
      {
        label: "SOCIS Discord",
        href: "https://discord.gg/hWJAeq9R",
        type: "discord",
      },
    ],
  },
  {
    name: "GDSC Hacks 2026: Guelph's Biggest Hackathon!",
    description:
      "GDSC Hacks is GDG’s annual hackathon where students build, learn, and collaborate on exciting technical projects. All skill levels are welcome.",
    date: "TBD (~May 2026)",
    time: "TBD (All-Weekend Event, Friday–Sunday)",
    location: "University of Guelph Campus",
    mediaSource: "/gdsc_hacks.png",
    slug: "gdsc-hacks-2026",
    links: [
      {
        label: "SOCIS Discord",
        href: "https://discord.gg/hWJAeq9R",
        type: "discord",
      },
      {
        label: "GDG Discord",
        href: "https://discord.gg/EwE9DAZ5",
        type: "discord",
      },
    ],
  },
];
