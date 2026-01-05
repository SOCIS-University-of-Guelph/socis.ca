import React from "react";
import Link from "next/link";
import {
  FaExternalLinkAlt,
  FaDiscord,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { TbBrandLinktree } from "react-icons/tb";
export default function ContactPage() {
  return (
    <section className="w-full text-mainblack">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-4xl sm:text-7xl font-extrabold tracking-tight mb-6">
            Contact SOCIS
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-mainblack/70 max-w-4xl mb-8">
            The Society of Computer & Information Sciences (SOCIS) represents
            computing students at the University of Guelph. Whether you’re
            looking to get involved, collaborate with our clubs, sponsor an
            event, or stay connected, these platforms are the best way to reach
            us.
          </p>

          {/* CTA buttons — full container width */}
          <div className="flex flex-col gap-4 max-w-4xl">
            {/* Linktree */}
            <Link
              href="https://linktr.ee/socis"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-full
                flex items-center justify-center gap-3
                px-6 py-3 sm:px-8 sm:py-4
                bg-[#42E45F] text-mainblack
                font-semibold rounded-lg
                transition-all duration-200
                hover:-translate-y-0.5 hover:shadow-lg
                text-base sm:text-xl
              "
            >
              <TbBrandLinktree size={22} />
              View Our Linktree
            </Link>

            {/* Discord */}
            <Link
              href="https://discord.gg/hWJAeq9R"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-full
                flex items-center justify-center gap-3
                px-6 py-3 sm:px-8 sm:py-4
                bg-[#5865F2] hover:bg-[#4752C4]
                text-white font-semibold rounded-lg
                transition-all duration-200
                hover:-translate-y-0.5 hover:shadow-lg
                text-base sm:text-xl
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
                w-full
                flex items-center justify-center gap-3
                px-6 py-3 sm:px-8 sm:py-4
                bg-gradient-to-r
                from-[#F58529] via-[#DD2A7B] to-[#8134AF]
                hover:from-[#F77737] hover:via-[#E1306C] hover:to-[#833AB4]
                text-white font-semibold rounded-lg
                transition-all duration-200
                hover:-translate-y-0.5 hover:shadow-lg
                text-base sm:text-xl
              "
            >
              <FaInstagram size={22} />
              Follow on Instagram
            </Link>

            {/* LinkedIn */}
            <Link
              href="https://www.linkedin.com/company/uog-socis/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-full
                flex items-center justify-center gap-3
                px-6 py-3 sm:px-8 sm:py-4
                bg-[#0A66C2] hover:bg-[#004182]
                text-white font-semibold rounded-lg
                transition-all duration-200
                hover:-translate-y-0.5 hover:shadow-lg
                text-base sm:text-xl
              "
            >
              <FaLinkedin size={22} />
              Connect on LinkedIn
            </Link>

            {/* GitHub */}
            <Link
              href="https://github.com/SOCIS-University-of-Guelph"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-full
                flex items-center justify-center gap-3
                px-6 py-3 sm:px-8 sm:py-4
                bg-[#24292F] hover:bg-black
                text-white font-semibold rounded-lg
                transition-all duration-200
                hover:-translate-y-0.5 hover:shadow-lg
                text-base sm:text-xl
              "
            >
              <FaGithub size={22} />
              View Our GitHub
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
