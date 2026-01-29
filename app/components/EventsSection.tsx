import React from "react";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import EventCard from "../components/EventCard";

const events = [
  {
    name: "URA/USRA Mixer: Network With CIS Professors & Co-Op Students!",
    description:
      "Come join us as several CIS professors outline upcoming positions opening in their labs and to learn about the co-op experience from " + 
      "several UofG students in the co-op stream of BComp!",
    date: "January 29, 2026",
    time: "1:00 PM – 3:00 PM",
    location: "Reynolds Building 1101",
    mediaSource: "/urausrmixer.png",
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
    time: "TBD (All-Weekend Event, Friday-Sunday)",
    location: "University of Guelph Campus",
    mediaSource: "/gdsc_hacks.png",
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

export default function EventsPage() {
  return (
    <section className="w-full text-mainblack">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-8">
          <h2 className="text-4xl sm:text-7xl font-extrabold tracking-tight">
            Upcoming Events
          </h2>

          <Link
            href="/events"
            className="
              flex items-center justify-center gap-3
              px-6 py-3 sm:px-8 sm:py-4
              bg-mainblack hover:bg-mainblack/90
              text-mainwhite font-semibold
              rounded-lg transition-colors
              text-base sm:text-2xl
            "
          >
            View All Upcoming Events
            <FaExternalLinkAlt size={20} />
          </Link>
        </div>

        {/* Description */}
        <p className="text-base sm:text-lg text-mainblack/70 max-w-4xl mb-12">
          SOCIS hosts academic, social, and professional events throughout the
          year. Join us to learn, connect, and engage with the computing
          community at the University of Guelph.
        </p>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {events.map((event) => (
            <EventCard
              key={event.name}
              name={event.name}
              description={event.description}
              date={event.date}
              time={event.time}
              location={event.location}
              learnMoreLink="/events"
              mediaSource={event.mediaSource}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
