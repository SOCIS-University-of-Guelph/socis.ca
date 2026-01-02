import React from "react";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { CiPizza } from "react-icons/ci";
import { LuCupSoda } from "react-icons/lu";
import { MdMoneyOff } from "react-icons/md";
import EventCard from "../components/EventCard";
import MobileEventCard from "../components/MobileEventCard";

const events = [
  {
    title: "SOCIS x Gryphon Gaming Present: League Of Legends Tournament Grand Finals",
    description:
      "Join us and watch both teams compete for the $250 prize pool over some delicious pizza, drinks, and commentary from our hosts!",
    date: "11/27/2025",
    time: "5PM–10PM",
    location: "PCH 001M",
    href: "/resources",
    mediaSource: "/League_Grand_Finals_Poster_2.png",
    perks: [
      { text: "Free Event", color: "bg-green-600", icon: MdMoneyOff },
      { text: "Free Pizza", color: "bg-orange-600", icon: CiPizza },
      { text: "Free Drinks", color: "bg-blue-600", icon: LuCupSoda },
    ],
  },
  {
    title: "TBD Event #2",
    description: "This is a placeholder.",
    date: "TBD",
    time: "TBD",
    location: "TBD",
    href: "/events",
  },
  {
    title: "TBD Event #3",
    description: "This is a placeholder.",
    date: "TBD",
    time: "TBD",
    location: "TBD",
    href: "/events",
  },
  {
    title: "TBD Event #4",
    description: "This is a placeholder.",
    date: "TBD",
    time: "TBD",
    location: "TBD",
    href: "/events",
  },
];

export default function EventsPage() {
  return (
    <section className="w-full text-mainblack">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 ">

        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-8">
          <h2 className="text-4xl sm:text-7xl font-extrabold tracking-tight">
            Upcoming Events
          </h2>

          <Link
            href="https://discord.gg/hWJAeq9R"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center justify-center gap-3
              px-6 py-3
              sm:px-8 sm:py-4
              bg-mainblack hover:bg-mainblack/90
              text-mainwhite font-semibold
              rounded-lg transition-colors
              text-base sm:text-2xl
            "
          >
            Latest Updates on Discord
            <FaExternalLinkAlt size={20} />
          </Link>
        </div>

        <p className="text-base sm:text-lg text-mainblack/70 max-w-4xl mb-12">
          SOCIS hosts academic, social, and professional events throughout the
          year. Join us to learn, connect, and engage with the computing community
          at the University of Guelph.
        </p>

        <div className="hidden sm:flex flex-wrap gap-8 justify-center items-center">

          {events.map((event) => (
            <EventCard
              key={event.title}
              title={event.title}
              description={event.description}
              date={event.date}
              time={event.time}
              location={event.location}
              href={event.href}
              mediaSource={event.mediaSource}
              perks={event.perks}
            />
          ))}
        </div>

        <div className="flex flex-col gap-6 sm:hidden">
          {events.map((event) => (
            <MobileEventCard
              key={`${event.title}-mobile`}
              title={event.title}
              date={event.date}
              time={event.time}
              location={event.location}
              href={event.href}
              mediaSource={event.mediaSource}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
