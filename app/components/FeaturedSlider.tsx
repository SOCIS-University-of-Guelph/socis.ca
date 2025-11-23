"use client";
import React from 'react';
import FeaturedEvent from './FeaturedEvent';
import { FaPauseCircle, FaPlayCircle, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from 'react';
// @todo: add autoplay
// @todo: the switching between slides is kind of glitchy fix it 
export default function FeaturedSlider() {

  const [isPaused, setIsPaused] = useState(false); // for featured slider
  const [currentSlide, setCurrentSlide] = useState(0); // for slider dots
  const nextSlide = () => { setCurrentSlide((prev) => (prev + 1) % featuredArticles.length)}
  const prevSlide = () => { setCurrentSlide((prev) => prev === 0 ? featuredArticles.length - 1 : prev - 1)}

  // should stick to 3 max please!
  const featuredArticles = [

    {

      titleOfEvent: "SOCIS Hosts Largest Research Mixer of the Year!",
      descriptionOfEvent: "CIS students packed the seminar hall to network with several professors who told them how simple it is to begin student research!",
      isVideo: true,
      mediaSource: "/socisresearchmixer.mp4",
      href: "/resources",
      postingDate: "Nov 21, 2025",
      
    },
    
    {

      titleOfEvent: "Socis Logo with text",
      descriptionOfEvent: "This is a placeholder.",
      isVideo: false,
      mediaSource: "/socis_logo_with_text.png",
      href: "/about",
      postingDate: "Nov 22, 2025"

    },

    {

      titleOfEvent: "University of Guelph",
      descriptionOfEvent: "This is a placeholder.",
      isVideo: false,
      mediaSource: "/uofg_logo.png",
      href: "/contact",
      postingDate: "Nov 22, 2025"


    },

  ]

  return (

    <>

      <div className='relative overflow-hidden w-full h-200'>

        <FeaturedEvent {...featuredArticles[currentSlide]}/>

      </div>

      <div className="w-full flex items-center justify-center gap-6 py-6 text-black select-none">


        {/* <button onClick = {() => setIsPaused(!isPaused)} className="text-3xl hover:text-gray-700 transition"> {isPaused ? (<FaPlayCircle />) : (<FaPauseCircle/>) }</button> */}
        <button onClick = {prevSlide} className="text-2xl hover:text-gray-700 transition"><FaChevronLeft /></button>

        <div className="flex items-center gap-3"> {/* dots */}

          {
          
            featuredArticles.map((_, i) => (

              <button key={i} onClick={() => setCurrentSlide(i)}
               className={`w-3 h-3 rounded-full transition ${currentSlide === i ? "bg-black" : "border border-black"}`}
              />)
              
            )
            
          }
        </div>

        <button onClick = {nextSlide} className="text-2xl hover:text-gray-700 transition"><FaChevronRight /></button>

      </div>

    </>

  );

}