import React from "react";
import Link from "next/link";
import { FaExternalLinkAlt, FaDiscord, FaInstagram } from "react-icons/fa";
import EventCard from "../components/EventCard";

const events = [
  {
    name: "SOCIS x Gryphon Gaming: League of Legends Grand Finals",
    description:
      "Join us and watch both teams compete for the $250 prize pool over free pizza, drinks, and live commentary from our hosts.",
    date: "November 27, 2025",
    time: "5:00 PM – 10:00 PM",
    location: "PCH 001M",
    learnMoreLink: "/events",
    mediaSource: "/League_Grand_Finals_Poster_2.png",
  },
  {
    name: "TBD Event #2",
    description: "Details coming soon.",
    date: "TBD",
    time: "TBD",
    location: "TBD",
    learnMoreLink: "/events",
  },
  {
    name: "TBD Event #3",
    description: "Details coming soon.",
    date: "TBD",
    time: "TBD",
    location: "TBD",
    learnMoreLink: "/events",
  },
];

export default function EventsPage() {
  return (
    <section className="w-full text-mainblack">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="mb-8">
          <h2 className="text-4xl sm:text-7xl font-extrabold tracking-tight mb-6">
            Upcoming Events
          </h2>

          {/* Social buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Discord */}
            <Link
              href="https://discord.gg/hWJAeq9R"
              target="_blank"
              rel="noopener noreferrer"
              className="
      flex items-center justify-center gap-3
      px-6 py-3 sm:px-8 sm:py-4
      bg-[#5865F2]
      hover:bg-[#4752C4]
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
              href="https://instagram.com/YOUR_INSTAGRAM"
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

        {/* Responsive Grid (desktop + mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {events.map((event) => (
            <EventCard
              key={event.name}
              name={event.name}
              description={event.description}
              date={event.date}
              time={event.time}
              location={event.location}
              learnMoreLink="/events" // still required but NOT USED
              mediaSource={event.mediaSource}
              variant="events"
              discordLinks={[
                { label: "Discord", href: "#" },
                { label: "Partner Discord", href: "#" },
              ]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
