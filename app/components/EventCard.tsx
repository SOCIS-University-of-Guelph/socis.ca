// the card sections are of fixed size so they look uniform. limit your title to 75 chars, and desc to 150 chars
// limit your perk tags to 10 chars if possible 

import { ComponentType } from "react";
import Link from "next/link";
import Image from "next/image";
import { ImCalendar } from "react-icons/im";
import { FaClock } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

type Perk = {

  text: string;
  color: string;
  icon?: ComponentType<{ className?: string; size?: number }>;

};

type EventCardProps = {

  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  href: string;
  perks?: Perk[];
  mediaSource?: string;

};

const eventInfoProps = {

  wrapperClass: "flex items-center gap-2",
  textClass: "text-lg tracking-tighter",

};

const iconProps = {

  size: 22,
  className: "text-mainwhite",

};

export default function EventCard( {title, description, date, time, location, href, mediaSource, perks = []}: EventCardProps) {
  
  const { wrapperClass, textClass } = eventInfoProps;

  return (

    <div className="w-110 hover:scale-102 bg-mainblack rounded-lg overflow-hidden shadow-lg transition duration-300">
      
      <div className="w-full h-48 relative">

        <Image src={mediaSource ?? "/socis_logo.png"} alt="Event Poster" fill className="object-cover"/>

      </div>

      <div className="p-5 text-mainwhite flex flex-col gap-4 h-full">

        <div className="h-12 flex flex-wrap gap-2 justify-center">

          {perks.slice(0, 3).map((perk, i) => {

            const Icon = perk.icon;

            return (

              <span key={i} className={`flex items-center gap-2 px-3 text-sm font-semibold rounded-lg text-mainwhite ${perk.color}`}>

                {Icon && <Icon size={20} />}
                {perk.text}

              </span>

            );

          })}

        </div>

        <div className="h-10 flex flex-wrap gap-x-6 gap-y-2 text-sm justify-center">

          <div className={wrapperClass}>

            <ImCalendar {...iconProps} />
            <span className={textClass}>{date}</span>

          </div>

          <div className={wrapperClass}>

            <FaClock {...iconProps} />
            <span className={textClass}>{time}</span>

          </div>

          <div className={wrapperClass}>

            <CiLocationOn {...iconProps} />
            <span className={textClass}>{location}</span>

          </div>

        </div>

        <div className="h-24 overflow-hidden">

          <h1 className="text-2xl font-bold tracking-tight">{title}</h1>

        </div>

        <div className="h-20 overflow-hidden">

          <p className="text-sm opacity-90 leading-snug">{description}</p>

        </div>

        <div>

          <Link href={href} className="bg-mainwhite hover:bg-mainwhite/70 rounded-md p-2 inline-block text-sm font-semibold text-mainblack transition">Learn More →</Link>

        </div>

      </div>

    </div>

  );
  
}
