import Link from "next/link";
import Image from "next/image";
import { ImCalendar } from "react-icons/im";
import { FaClock } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

type Props = {

  title: string;
  date: string;
  time: string;
  location: string;
  href: string;
  mediaSource?: string;

};

export default function MobileEventCard( {title, date, time, location, href, mediaSource}: Props ) {

  return (

    <div className="bg-mainblack rounded-lg overflow-hidden shadow-lg w-full max-w-xs mx-auto p-4 sm:hidden">

      <div className="w-full h-28 relative">

        <Image src={mediaSource ?? "/socis_logo.png"} alt="Event Poster" fill className="object-cover"/>

      </div>

      <h1 className="mt-3 text-lg font-bold text-mainwhite">{title}</h1>

      <div className="mt-2 text-mainwhite text-sm flex flex-col gap-1 opacity-90">

        <div className="flex items-center gap-2">

          <ImCalendar size={16} className="text-blue-400" />
          <span>{date}</span>

        </div>

        <div className="flex items-center gap-2">

          <FaClock size={16} className="text-blue-400" />
          <span>{time}</span>

        </div>

        <div className="flex items-center gap-2">

          <CiLocationOn size={18} className="text-blue-400" />
          <span>{location}</span>

        </div>

      </div>

      <Link href={href}className="inline-block mt-3 text-sm font-semibold bg-mainwhite text-mainblack px-3 py-2 rounded-md hover:bg-mainwhite/80 transition">

        Learn More →

      </Link>

    </div>

  );
  
}
