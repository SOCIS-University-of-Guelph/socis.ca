import React from "react";
import EventCard from "./EventCard";
import MobileEventCard from "./MobileEventCard";
import Link from "next/link";
import { CiPizza } from "react-icons/ci";
import { LuCupSoda } from "react-icons/lu";
import { MdMoneyOff } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";

// @todo: make this easier to update

export default function EventsSection() {

  return (

    <section className="w-full p-4 text-mainblack">

      <div className="flex items-center gap-6 mb-12">

        <h2 className="text-4xl text-mainblack font-extrabold tracking-tight">Upcoming Events</h2>

        <Link href="/events" className="flex items-center gap-2 px-5 py-2 bg-mainblack hover:bg-mainblack/90 text-mainwhite font-semibold rounded-lg transition-colors duration-200">

          View All Events
          <FaExternalLinkAlt size={14} />

        </Link>

      </div>

      {/* desktop layout */ }
      <div className="hidden sm:flex gap-8 justify-center flex-wrap">

        <EventCard
          title="SOCIS x Gryphon Gaming Present: League Of Legends Tournament Grand Finals"
          description="Join us and watch both teams compete for the $250 prize pool over some delicious pizza, drinks, and commentary from our hosts!"
          mediaSource="/League_Grand_Finals_Poster_2.png"
          href="/resources"
          date="11/27/2025"
          time="5PM-10PM"
          location="PCH 001M"
          perks={[
            { text: "Free Event", color: "bg-green-600", icon: MdMoneyOff },
            { text: "Free Pizza", color: "bg-orange-600", icon: CiPizza },
            { text: "Free Drinks", color: "bg-blue-600", icon: LuCupSoda },
          ]}
        />

        <EventCard title="TBD Event #2" description="This is a placeholder." href="/events" date="TBD" time="TBD" location="TBD" />
        <EventCard title="TBD Event #3" description="This is a placeholder." href="/events" date="TBD" time="TBD" location="TBD" />
        <EventCard title="TBD Event #4" description="This is a placeholder." href="/events" date="TBD" time="TBD" location="TBD" />
        
      </div>

      {/* MOBILE LAYOUT  */}
      <div className="flex flex-col gap-8 sm:hidden">

        <MobileEventCard
          title="SOCIS x Gryphon Gaming Present: League Of Legends Tournament Grand Finals"
          mediaSource="/League_Grand_Finals_Poster_2.png"
          href="/resources"
          date="11/27/2025"
          time="5PM-10PM"
          location="PCH 001M"
        />

        <MobileEventCard
          title="TBD Event #2"
          href="/events"
          date="TBD"
          time="TBD"
          location="TBD"
        />

        <MobileEventCard
          title="TBD Event #3"
          href="/events"
          date="TBD"
          time="TBD"
          location="TBD"
        />

        <MobileEventCard
          title="TBD Event #4"
          href="/events"
          date="TBD"
          time="TBD"
          location="TBD"
        />

      </div>

    </section>

  );

}
