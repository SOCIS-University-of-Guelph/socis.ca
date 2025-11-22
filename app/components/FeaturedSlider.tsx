import React from 'react';
import FeaturedEvent from './FeaturedEvent';
import { FaPauseCircle, FaPlayCircle, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function FeaturedSlider() {

  // should stick to 3 max please!
  const featuredArticles = [

    {
      title: "SOCIS Hosts Largest Research Mixer of the Year!",
      description: "CIS students packed the seminar hall to network with professors who told them how easy it is to begin student research!",
      mediaSource: "/socisresearchmixer.mp4",
      href: "/resources",
      postingDate: "Nov 21, 2025",
      
    },
    
    {
      title: "Placeholder Event",
      description: "This is a placeholder."
    },

    {
      title: "Placeholder Event",
      description: "This is a placeholder."
    },

  ]

  return (

    <>

      <div className='relative overflow-hidden w-full h-200'>

        <FeaturedEvent isVideo href={featuredArticles[0].href} postingDate={featuredArticles[0].postingDate} mediaSource = {featuredArticles[0].mediaSource} titleOfEvent={featuredArticles[0].title} descriptionOfEvent={featuredArticles[0].description}/>

      </div>

      <div className="w-full flex items-center justify-center gap-6 py-6 text-black select-none">

        <button className="text-3xl hover:text-gray-700 transition"><FaPauseCircle /></button>
        <button className="text-2xl hover:text-gray-700 transition"><FaChevronLeft /></button>

        <div className="flex items-center gap-3">

          <div className="w-3 h-3 rounded-full border border-black"></div>
          <div className="w-3 h-3 rounded-full bg-black"></div>
          <div className="w-3 h-3 rounded-full border border-black"></div>
  
        </div>

        <button className="text-2xl hover:text-gray-700 transition"><FaChevronRight /></button>

      </div>

    </>

  );

}