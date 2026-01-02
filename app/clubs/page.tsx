import React from "react";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
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
    mediaSource: "/socis_logo.png",
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
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Header */}
        <div className="flex items-center gap-6 mb-8">
          <h2 className="text-7xl font-extrabold tracking-tight">
            Clubs Under SOCIS
          </h2>

          <Link
            href="https://linktr.ee/socis"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-5 px-8 py-4 bg-mainblack hover:bg-mainblack/90 text-mainwhite font-semibold rounded-lg transition-colors duration-200"
          >
            <span className="text-2xl">View Our Linktree</span>
            <FaExternalLinkAlt size={24} />
          </Link>
        </div>

        <p className="text-lg text-mainblack/70 max-w-4xl mb-12">
          SOCIS is the academic society representing the Bachelor of Computing at
          the University of Guelph. Beyond our own initiatives, we directly support
          and fund the university’s leading computing clubs—creating a unified
          space where students can explore, specialize, and grow.
        </p>

        <div className="hidden sm:flex flex-wrap gap-8 justify-start">
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

        <div className="flex flex-col gap-8 sm:hidden">
          {clubs.map((club) => (
            <ClubCard
              key={`${club.clubName}-mobile`}
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
