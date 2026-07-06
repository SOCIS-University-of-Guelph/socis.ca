import React from "react";
import Link from "next/link";
import { FaExternalLinkAlt, FaDiscord, FaInstagram } from "react-icons/fa";
import EventCard from "../components/EventCard";
import { pastEvents, upcomingEvents } from "../data/events";

export default function EventsPage() {
  return (
    <section className="w-full text-mainblack">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-4xl sm:text-7xl font-extrabold tracking-tight mb-6">
            Events
          </h2>
          <p className="text-base sm:text-lg text-mainblack/70 max-w-4xl">
            SOCIS hosts academic, social, and professional events throughout the
            year. Join us to learn, connect, and engage with the computing
            community at the University of Guelph.
          </p>
        </div>

        {/* Social / Links buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Link
            href="https://discord.gg/hWJAeq9R"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg text-base sm:text-xl w-full sm:w-auto"
          >
            <FaDiscord size={22} /> Join Our Discord
          </Link>

          <Link
            href="https://www.instagram.com/socis.uog/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] hover:from-[#F77737] hover:via-[#E1306C] hover:to-[#833AB4] text-white font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg text-base sm:text-xl w-full sm:w-auto"
          >
            <FaInstagram size={22} /> Follow on Instagram
          </Link>

          <Link
            href="/contact"
            className="flex items-center justify-center gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-mainblack text-white font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg text-base sm:text-xl w-full sm:w-auto"
          >
            <FaExternalLinkAlt size={22} /> View All Of Our Links
          </Link>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <div className="mb-6">
            <h3 className="text-3xl sm:text-4xl font-bold mb-2">Upcoming Events</h3>
            <p className="text-mainblack/70 max-w-3xl">
              We are finalizing our next events schedule. In the meantime, check
              out our past events and join our channels for the latest updates.
            </p>
          </div>

          {upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
              {upcomingEvents.map((event) => (
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
                  links={event.links ?? []}
                  slug={event.slug}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-black/10 bg-white p-10 text-mainblack/70 shadow-sm">
              <p className="text-lg font-semibold text-mainblack mb-3">
                No confirmed events yet.
              </p>
              <p>
                Stay tuned here for the next SOCIS events. Join our Discord or
                follow us on Instagram to be the first to know when new events
                are announced.
              </p>
            </div>
          )}
        </div>

        {/* Past Events */}
        <div>
          <div className="mb-6">
            <h3 className="text-3xl sm:text-4xl font-bold mb-2">Past Events</h3>
            <p className="text-mainblack/70 max-w-3xl">
              A selection of recent SOCIS events to keep the archive visible while
              upcoming plans are finalized.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
            {pastEvents.map((event) => (
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
                links={event.links ?? []}
                slug={event.slug}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
