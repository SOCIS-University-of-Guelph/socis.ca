import React from "react";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import EventCard from "../components/EventCard";
import { upcomingEvents } from "../data/events";

export default function EventsPage() {
  return (
    <section className="w-full text-mainblack">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 sm:gap-6 mb-8">
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
        <p className="text-base sm:text-lg text-mainblack/70 max-w-4xl mx-auto text-center mb-12">
          SOCIS hosts academic, social, and professional events throughout the
          year. Join us to learn, connect, and engage with the computing
          community at the University of Guelph.
        </p>

        {upcomingEvents.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-8">
            {upcomingEvents.map((event) => (
              <div
                key={event.name}
                className="flex justify-center w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.334rem)]"
              >
                <EventCard
                  name={event.name}
                  description={event.description}
                  date={event.date}
                  time={event.time}
                  location={event.location}
                  learnMoreLink="/events"
                  mediaSource={event.mediaSource}
                  slug={event.slug}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-3xl mx-auto text-center rounded-3xl border border-black/10 bg-white p-10 text-mainblack/70 shadow-sm">
            <p className="text-lg font-semibold text-mainblack mb-2">
              No upcoming events at the moment.
            </p>
            <p>
              Check the events page for past events and future announcements.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
