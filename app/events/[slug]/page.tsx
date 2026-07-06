import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import { FaDiscord, FaExternalLinkAlt, FaInstagram } from "react-icons/fa";
import { GoClock } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { LuCalendarRange } from "react-icons/lu";
import { pastEvents, upcomingEvents } from "../../data/events";

const LINK_STYLES = {
  discord: {
    icon: FaDiscord,
    className: "bg-[#5865F2]/15 text-[#5865F2] hover:bg-[#5865F2]/25",
  },
  instagram: {
    icon: FaInstagram,
    className: "bg-pink-500/15 text-pink-500 hover:bg-pink-500/25",
  },
  website: {
    icon: FaExternalLinkAlt,
    className: "bg-mainblack/10 text-mainblack hover:bg-mainblack/20",
  },
};

export function generateStaticParams() {
  return [...upcomingEvents, ...pastEvents].map((event) => ({
    slug: event.slug,
  }));
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = [...upcomingEvents, ...pastEvents].find(
    (item) => item.slug === slug,
  );

  if (!event) {
    notFound();
  }

  return (
    <section className="w-full text-mainblack">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <Link
          href="/events"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-mainblack/70 transition-colors hover:text-mainblack"
        >
          ← Back to all events
        </Link>

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={event.mediaSource ?? "/socis_logo.png"}
                alt={`${event.name} poster`}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-mainblack/60">
                Event gallery
              </p>
              <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                {event.name}
              </h1>
            </div>

            <div className="space-y-3 rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2 text-mainblack/80">
                <LuCalendarRange size={18} />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2 text-mainblack/80">
                <GoClock size={18} />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-2 text-mainblack/80">
                <IoLocationOutline size={18} />
                <span>{event.location}</span>
              </div>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold">About this event</h2>
              <p className="text-base leading-relaxed text-mainblack/70">
                {event.description}
              </p>
            </div>

            {event.links && event.links.length > 0 ? (
              <div>
                <h2 className="mb-3 text-xl font-semibold">Event links</h2>
                <div className="flex flex-col gap-3">
                  {event.links.map((link, index) => {
                    const Icon = LINK_STYLES[link.type].icon;
                    return (
                      <Link
                        key={`${link.label}-${index}`}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center gap-2 rounded-lg px-4 py-3 font-semibold transition-all ${LINK_STYLES[link.type].className}`}
                      >
                        <Icon size={18} />
                        {link.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ) : null}

            <div className="rounded-2xl border border-dashed border-mainblack/20 bg-mainblack/5 p-6">
              <h2 className="mb-2 text-xl font-semibold">Photo gallery</h2>
              <p className="text-base leading-relaxed text-mainblack/70">
                Coming Soon
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
