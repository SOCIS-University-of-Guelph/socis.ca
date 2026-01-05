import React from "react";
import Link from "next/link";
import { FaExternalLinkAlt, FaDiscord, FaInstagram } from "react-icons/fa";
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
    time: "TBD (All-Weekend Event, Friday–Sunday)",
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
    time: "TBD (All-Weekend Event, Friday–Sunday)",
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
        <div className="mb-8">
          <h2 className="text-4xl sm:text-7xl font-extrabold tracking-tight mb-6">
            Upcoming Events
          </h2>

          {/* Social / Links buttons (RESTORED) */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Discord */}
            <Link
              href="https://discord.gg/hWJAeq9R"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center justify-center gap-3
                px-6 py-3 sm:px-8 sm:py-4
                bg-[#5865F2] hover:bg-[#4752C4]
                text-white font-semibold
                rounded-lg
                transition-all duration-200
                hover:-translate-y-0.5 hover:shadow-lg
                text-base sm:text-xl
                w-full sm:w-auto
              "
            >
              <FaDiscord size={22} />
              Join Our Discord
            </Link>

            {/* Instagram */}
            <Link
              href="https://www.instagram.com/socis.uog/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center justify-center gap-3
                px-6 py-3 sm:px-8 sm:py-4
                bg-gradient-to-r
                from-[#F58529] via-[#DD2A7B] to-[#8134AF]
                hover:from-[#F77737] hover:via-[#E1306C] hover:to-[#833AB4]
                text-white font-semibold
                rounded-lg
                transition-all duration-200
                hover:-translate-y-0.5 hover:shadow-lg
                text-base sm:text-xl
                w-full sm:w-auto
              "
            >
              <FaInstagram size={22} />
              Follow on Instagram
            </Link>

            {/* All Links */}
            <Link
              href="/contact"
              className="
                flex items-center justify-center gap-3
                px-6 py-3 sm:px-8 sm:py-4
                bg-mainblack text-mainwhite font-semibold
                rounded-lg
                transition-all duration-200
                hover:-translate-y-0.5 hover:shadow-lg
                text-base sm:text-xl
                w-full sm:w-auto
              "
            >
              <FaExternalLinkAlt size={22} />
              View All Of Our Links
            </Link>
          </div>
        </div>

        {/* Description */}
        <p className="text-base sm:text-lg text-mainblack/70 max-w-4xl mb-12">
          SOCIS hosts academic, social, and professional events throughout the
          year. Join us to learn, connect, and engage with the computing
          community at the University of Guelph.
        </p>

        {/* Events Grid */}
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
              variant="events"
              links={event.links}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
