import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LuCalendarRange } from "react-icons/lu";
import { GoClock } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { FaExternalLinkAlt, FaDiscord } from "react-icons/fa";

type DiscordLink = {
  label: string;
  href: string;
};

type EventCardProps = {
  name: string;
  description: string;
  date: string;
  time: string;
  location: string;
  learnMoreLink: string;
  mediaSource?: string;
  variant?: "default" | "events";
  discordLinks?: DiscordLink[];
};

export default function EventCard({
  name,
  description,
  date,
  time,
  location,
  learnMoreLink,
  mediaSource,
  variant = "default",
  discordLinks = [],
}: EventCardProps) {
  return (
    <div className="group w-full max-w-sm bg-mainblack border border-white/10 rounded-xl overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl">
      {/* Poster */}
      <div className="relative h-52 w-full">
        <Image
          src={mediaSource ?? "/socis_logo.png"}
          alt={`${name} poster`}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-4 text-mainwhite">
        {/* Title */}
        <div className="h-16 overflow-hidden">
          <h2 className="text-xl font-bold tracking-tight leading-tight">
            {name}
          </h2>
        </div>

        {/* Meta */}
        <div className="h-20 flex flex-col gap-2 text-sm text-mainwhite/80">
          <div className="flex items-center gap-2">
            <LuCalendarRange size={16} />
            <span>{date}</span>
          </div>

          <div className="flex items-center gap-2">
            <GoClock size={16} />
            <span>{time}</span>
          </div>

          <div className="flex items-center gap-2">
            <IoLocationOutline size={16} />
            <span>{location}</span>
          </div>
        </div>

        {/* Description */}
        <div className="h-24 overflow-hidden">
          <p className="text-sm text-mainwhite/70 leading-relaxed">
            {description}
          </p>
        </div>

        {/* CTA */}
        <div className="mt-2 flex justify-center">
          {variant === "events" && discordLinks.length > 0 ? (
            <div className="flex flex-col gap-3 w-full">
              {discordLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="
                    flex items-center justify-center gap-2
                    w-full
                    px-4 py-2
                    rounded-lg
                    bg-[#5865F2]/15 text-[#5865F2]
                    font-semibold
                    transition-all
                    hover:bg-[#5865F2]/25
                  "
                >
                  <FaDiscord size={18} />
                  {link.label}
                </Link>
              ))}
            </div>
          ) : (
            <Link
              href={learnMoreLink}
              className="
                flex items-center justify-center gap-2
                w-full
                rounded-lg px-4 py-3
                bg-white/10 text-mainwhite
                font-semibold
                transition-all
                hover:bg-white/20
              "
            >
              Learn more
              <FaExternalLinkAlt size={16} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
