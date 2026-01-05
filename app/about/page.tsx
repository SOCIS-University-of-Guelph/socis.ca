import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaDiscord, FaInstagram, FaExternalLinkAlt } from "react-icons/fa";

export default function AboutPage() {
  return (
    <section className="w-full text-mainblack">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl sm:text-7xl font-extrabold tracking-tight mb-6">
            About SOCIS
          </h1>
          <p className="text-base sm:text-lg text-mainblack/70 max-w-3xl mx-auto">
            The Society of Computing and Information Science (SOCIS) represents
            computing students at the University of Guelph. We build community,
            create opportunities, and support students academically,
            professionally, and socially.
          </p>
        </div>

        {/* Goals Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          {/* Image Container - Standardized Size */}
          <div className="relative aspect-square w-full max-w-[420px] mx-auto overflow-hidden rounded-xl border border-white/10 shadow-sm">
            <Image
              src="/img_5716.png"
              alt="SOCIS Meeting"
              fill
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Mission</h2>
            <p className="text-base sm:text-lg text-mainblack/70 mb-6">
              SOCIS exists to empower students in Computer Science, Software
              Engineering, and related disciplines by fostering collaboration,
              leadership, and real-world experience beyond the classroom.
            </p>
            <ul className="space-y-3 text-mainblack/80">
              <li>• Create academic and professional growth opportunities</li>
              <li>• Host inclusive social and competitive events</li>
              <li>• Connect students with industry, research, and peers</li>
              <li>• Advocate for student needs within the university</li>
            </ul>
          </div>
        </div>

        {/* What We Do Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          {/* Text */}
          <div className="order-2 md:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">What We Do</h2>
            <p className="text-base sm:text-lg text-mainblack/70 mb-6">
              Throughout the year, SOCIS organizes events that help students
              grow technically, socially, and professionally — whether that’s
              through hackathons, workshops, industry talks, or community game
              nights.
            </p>
            <p className="text-base sm:text-lg text-mainblack/70">
              We work closely with umbrella organizations and partner clubs to
              ensure students get the most value from their university
              experience.
            </p>
          </div>

          {/* Image Container - Standardized Size */}
          <div className="relative aspect-square w-full max-w-[420px] mx-auto overflow-hidden rounded-xl border border-white/10 shadow-sm order-1 md:order-2">
            <Image
              src="/img_5708.png"
              alt="SOCIS Community"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Get Involved</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Discord */}
            <Link
              href="https://discord.gg/hWJAeq9R"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg text-base sm:text-xl"
            >
              <FaDiscord size={22} /> Join Our Discord
            </Link>

            {/* Instagram */}
            <Link
              href="https://www.instagram.com/socis.uog/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] hover:from-[#F77737] hover:via-[#E1306C] hover:to-[#833AB4] text-white font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg text-base sm:text-xl"
            >
              <FaInstagram size={22} /> Follow on Instagram
            </Link>

            {/* All Links */}
            <Link
              href="/contact"
              className="flex items-center justify-center gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-mainblack text-white font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg text-base sm:text-xl"
            >
              <FaExternalLinkAlt size={22} /> View All Of Our Links
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}