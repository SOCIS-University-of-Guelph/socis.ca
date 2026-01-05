import React from "react";
import Link from "next/link";
import { FaExternalLinkAlt, FaDiscord, FaInstagram } from "react-icons/fa";
import ClubCard from "../components/ClubCard";

// @todo better logos and get logos for gccc, gcss, gwics, and gcc
const clubs = [
  {
    clubName: "Society Of Computer & Information Sciences",
    description:
      "SOCIS is the official academic society representing Computer Science at the University of Guelph. We support student success through events, funding, advocacy, and by empowering the university’s computing clubs.",
    discord: "https://discord.gg/hWJAeq9R",
    instagram: "https://www.instagram.com/socis.uog/",
    website: "https://socis.ca",
    mediaSource: "/socis_logo.png",
  },
  {
    clubName: "Google Developer Groups – Guelph",
    description:
      "GDG Guelph is a community of developers and students passionate about Google technologies, software development, and learning through hands-on workshops, talks, and collaborative projects.",
    discord: "https://discord.gg/EwE9DAZ5",
    instagram: "https://www.instagram.com/gdg_guelph/",
    website: "https://www.gdgguelph.com/",
    mediaSource: "/gdsc_logo.png",
  },
  {
    clubName: "Guelph Cyber Security Society",
    description:
      "The Guelph Cyber Security Society focuses on cybersecurity education, ethical hacking, and awareness through workshops, competitions, and hands-on technical learning.",
    discord: "https://discord.gg/4bJ5qUFw",
    instagram: "https://www.instagram.com/guelphcss",
    website: "",
    mediaSource: "/gcss_logo.png",
  },
  {
    clubName: "Guelph Women In Computer Science",
    description:
      "GWICS is dedicated to supporting and uplifting women and gender-diverse students in computing through mentorship, community-building events, and professional development opportunities.",
    discord: "https://discord.gg/bKvbNJPZ",
    instagram: "https://www.instagram.com/guelphwics",
    website: "",
    mediaSource: "/gwics_logo.png",
  },
  {
    clubName: "Guelph Cloud Computing Club",
    description:
      "An umbrella club funded by SOCIS, providing opportunities for learning, networking, and growth.",
    discord: "https://discord.gg/example5",
    instagram: "https://instagram.com/example5",
    website: "",
    mediaSource: "/gccc_logo.png",
  },
  {
    clubName: "Guelph Coding Community",
    description:
      "A SOCIS-backed computing club dedicated to student engagement and technical development.",
    discord: "",
    instagram: "https://instagram.com/example6",
    website: "",
    mediaSource: "/socis_logo.png",
  },
];

export default function ClubsPage() {
  return (
    <section className="w-full text-mainblack">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-4xl sm:text-7xl font-extrabold tracking-tight mb-6">
            Clubs Under SOCIS
          </h2>

          {/* Social / Links buttons */}
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
          SOCIS is the academic society representing the Bachelor of Computing
          at the University of Guelph. Beyond our own initiatives, we directly
          support and fund the university’s leading computing clubs—creating a
          unified space where students can explore, specialize, and grow.
        </p>

        {/* Clubs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {clubs.map((club) => (
            <ClubCard
              key={club.clubName}
              clubName={club.clubName}
              description={club.description}
              discord={club.discord}
              instagram={club.instagram}
              website={club.website}
              mediaSource={club.mediaSource}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
