import React from "react";
import Link from "next/link";

export default function CommunityBanner() {
  return (
    <section className="w-full px-6 pb-10">
      <div
        className="
          relative
          w-full
          h-160
          rounded-3xl
          overflow-hidden
          shadow-sm
        "
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/community.jpg')" }}
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 h-full flex items-center">
          <div className="px-12 max-w-xl text-white">
            <h2 className="text-4xl font-extrabold tracking-tight mb-4">
              A community you’ll love
            </h2>

            <p className="text-lg opacity-90 mb-6">
              Explore more clubs made possible by SOCIS, meet like-minded
              students, and find your place within the computing community at
              the University of Guelph.
            </p>

            <Link
              href="/clubs"
              className="
                inline-block
                bg-white
                text-black
                font-semibold
                px-6
                py-3
                rounded-lg
                hover:bg-white/80
                transition
              "
            >
              Learn About Our Clubs →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
