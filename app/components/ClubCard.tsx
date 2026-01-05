import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaDiscord, FaInstagram } from "react-icons/fa";
import { IoGlobeOutline } from "react-icons/io5";

type ClubCardProps = {
  clubName: string;
  description: string;
  discord?: string;
  instagram?: string;
  website?: string;
  mediaSource?: string;
};

export default function ClubCard({
  clubName,
  description,
  discord,
  instagram,
  website,
  mediaSource,
}: ClubCardProps) {
  return (
    <div className="group w-full max-w-sm bg-mainblack border border-white/10 rounded-xl overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-48 w-full bg-mainblack">
        <div className="absolute inset-6">
          <Image
            src={mediaSource ?? "/socis_logo.png"}
            alt={`${clubName} poster`}
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="p-5 flex flex-col gap-3 text-mainwhite">
        <div className="h-18 overflow-hidden">
          <h1 className="text-xl font-bold tracking-tight">{clubName}</h1>
        </div>

        <div className="h-28 overflow-hidden">
          <p className="text-sm text-mainwhite/70 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="mt-3 flex flex-col gap-3 md:flex-row md:gap-6 md:justify-center">
          {discord && (
            <Link
              href={discord}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-2
                rounded-md px-4 py-2
                bg-white/10 text-mainwhite/80
                justify-center
                transition-all
                hover:text-[#5865F2]
                md:bg-transparent md:px-0 md:py-1
              "
            >
              <FaDiscord size={22} />
              Discord
            </Link>
          )}

          {instagram && (
            <Link
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-2
                rounded-md px-4 py-2
                bg-white/10 text-mainwhite/80
                justify-center
                transition-all
                hover:text-[#AB369D]
                md:bg-transparent md:px-0 md:py-1
              "
            >
              <FaInstagram size={22} />
              Instagram
            </Link>
          )}

          {website && (
            <Link
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-2
                rounded-md px-4 py-2
                bg-white/10 text-mainwhite/80
                justify-center
                transition-all
                hover:text-blue-400
                md:bg-transparent md:px-0 md:py-1
              "
            >
              <IoGlobeOutline size={22} />
              Website
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
