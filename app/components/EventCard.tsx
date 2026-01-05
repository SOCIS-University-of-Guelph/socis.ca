import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LuCalendarRange } from "react-icons/lu";
import { GoClock } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { FaExternalLinkAlt, FaDiscord, FaInstagram } from "react-icons/fa";

type EventLink = {
  label: string;
  href: string;
  type: "discord" | "instagram" | "website";
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
  links?: EventLink[];
};

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
    className: "bg-white/10 text-mainwhite hover:bg-white/20",
  },
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
  links = [],
}: EventCardProps) {
  const displayLinks = links.slice(0, 3); // HARD CAP at 3

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

        {/* CTA — FIXED HEIGHT */}
        <div className="mt-2 h-[132px] flex items-end">
          {variant === "events" && displayLinks.length > 0 ? (
            <div className="flex flex-col gap-3 w-full">
              {displayLinks.map((link, index) => {
                const Icon = LINK_STYLES[link.type].icon;
                return (
                  <Link
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      flex items-center justify-center gap-2
                      w-full px-4 py-2 rounded-lg
                      font-semibold transition-all
                      ${LINK_STYLES[link.type].className}
                    `}
                  >
                    <Icon size={18} />
                    {link.label}
                  </Link>
                );
              })}
            </div>
          ) : (
            <Link
              href={learnMoreLink}
              className="
                flex items-center justify-center gap-2
                w-full rounded-lg px-4 py-3
                bg-white/10 text-mainwhite
                font-semibold transition-all
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
