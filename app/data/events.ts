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

export const upcomingEvents: Event[] = [ 
{
    name: "SOCIS/Rocketry Club 2026: NASA Space Apps Challenge!",
    description:
      "Join SOCIS and the Rocketry Club for the 2026 NASA Space Apps Challenge! Spend 48 hours using NASA's open data to tackle real-world challenges on Earth and in space. Beginners and experienced hackers are welcome, and you can join solo or with a team of up to 6. Spots are limited to 40 participants, and there's NASA merch to grab!",
    date: "November 14 – 15, 2026",
    time: "9:00 AM – 5:00 PM",
    location: "THRN 1200, University of Guelph",
    mediaSource: "/socis_rocketry.png",
    slug: "nasa-space-apps-2026",
    links: [
      {
        label: "SOCIS Discord",
        href: "https://discord.gg/gzYWRmsWYw",
        type: "discord",
      },
      {
        label: "Rocketry Club Discord",
        href: "https://discord.gg/INVITE_CODE",
        type: "discord",
      },
    ],
  },
  {
    name: "Experience Ventures Hackathon 2026: Appllications Open!",
    description:
      "Join SOCIS for a 16-hour hackathon focused on real-world challenges surrounding health and well-being! Collaborate in cross-institutional teams with students from other universities, earn a $350 honorarium, and compete for a chance to attend the National Hackathon in Calgary. The event takes place November 28–29 in Kitchener, and applications are open until November 20!",
    date: "January 29, 2026",
    time: "TBD; 16 hour hackathon",
    location: "Catalyst, Kitchener, Ontario",
    mediaSource: "/EVH.jpg",
    slug: "experience-ventures-hackathon-2026",
    links: [
      {
        label: "SOCIS Discord",
        href: "https://discord.gg/hWJAeq9R",
        type: "discord",
      },
    ],
  },
  {
    name: "SOCIS/Gryphon Gaming 2026: League Tournament!",
    description:
      "Join Gryphon Gaming and SOCIS for the League of Legends tournament finals! Registration is now closed, but everyone is welcome to come watch the in-person finals on November 26th. Cheer on the teams while enjoying free pizza, drinks, raffles, live commentary, and more!",
    date: "November 26, 2026",
    time: "Doors open at 5:00 PM",
    location: "University Centre, Peter Clark Hall",
    mediaSource: "/league.png",
    slug: "league-tournament-2026",
    links: [
      {
        label: "SOCIS Discord",
        href: "https://discord.gg/hWJAeq9R",
        type: "discord",
      },
      {
        label: "GG Discord",
        href: "https://discord.gg/gryphon-gaming-474945469039247382",
        type: "discord",
      },
    ],
  }
];

export const pastEvents: Event[] = [
  {
    name: "Coding Competition 2026!",
    description:
      "Join SOCIS for an evening of competitive programming! Work individually or in teams of up to 3 to solve LeetCode and ICPC-style problems, fwith a chance to be part of a $450 prize pool. Pizza will be provided, and all skill levels are welcomed!",
    date: "October 16, 2026",
    time: "6:00 PM – 9:00 PM",
    location: "Reynolds Building 1101",
    mediaSource: "/codingcomp.jpg",
    slug: "coding-comp",
    links: [
      {
        label: "SOCIS Discord",
        href: "https://discord.gg/hWJAeq9R",
        type: "discord",
      },
    ],
  },
  {
    name: "SOCIS/Gryphon Gaming 2026: Valorant Tournament!",
    description:
      "Join Gryphon Gaming and SOCIS for an in-person VALORANT finals watch party! Cheer on two teams competing for the championship while enjoying free pizza, drinks, games, and a chance to win prizes.",
    date: "October 21, 2026",
    time: "5:00 PM – 11:00 PM",
    location: "University Centre, Peter Clark Hall",
    mediaSource: "/valorant.png",
    slug: "valorant-tournament-2026",
    links: [
      {
        label: "SOCIS Discord",
        href: "https://discord.gg/hWJAeq9R",
        type: "discord",
      },
      {
        label: "GG Discord",
        href: "https://discord.gg/gryphon-gaming-474945469039247382",
        type: "discord",
      },
    ],
  },
  {
    name: "AI/ML Workshop: Teaching A Machine To Read the Room!",
    description:
      "Join SOCIS for an AI/ML workshop exploring exciting concepts in Articifial Intelligence and Machine Learning. Learn, explore, and discover more about the world of AI!",
    date: "October 2, 2026",
    time: "1:00 PM – 4:00 PM",
    location: "Reynolds Building 1101",
    mediaSource: "/AiML.jpg",
    slug: "ai-ml-workshop",
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
  }
];
