import React from "react";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import EventCard from "../components/EventCard";

const events = [
  {
    name: "Intro To The Society Of Computer & Information Sciences (SOCIS)",
    description:
      "Learn what SOCIS is, what we do throughout the year, and how you can get involved. Meet the executive team and connect with fellow computing students.",
    date: "January 6, 2026",
    time: "5:00 PM – 7:00 PM",
    location: "PCH 001M",
    mediaSource: "/article1.png",
    links: [
      {
        label: "SOCIS Discord",
        href: "https://discord.gg/hWJAeq9R",
        type: "discord",
      },
    ],
  },
  {
    name: "Haskayne School Of Business: Digital Innovation Challenge",
    description:
      "The Haskayne School of Business is pleased to host its annual Digital Innovation Challenge Case Competition presented by the Steve and Tina Wilson Family Foundation.",
    date: "February 7, 2026 (Initial) / March 2026 (Finals)",
    time: "TBD (All-Weekend Event, Friday-Sunday)",
    location: "Online (Initial) / University of Calgary (Finals)",
    mediaSource: "/ucalgary.jpg",
    links: [
      {
        label: "SOCIS Discord",
        href: "https://discord.gg/hWJAeq9R",
        type: "discord",
      },
      {
        label: "Event Website",
        href: "https://engage.ucalgary.ca/dicc2026",
        type: "website",
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
