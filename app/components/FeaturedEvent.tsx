import React from 'react';
import Link from 'next/link';

type FeaturedEventProps = {

  titleOfEvent: string;
  descriptionOfEvent: string;
  isVideo?: boolean;
  mediaSource?: string;
  href?: string;
  postingDate?: string;

};


export default function FeaturedEvent({titleOfEvent, descriptionOfEvent, isVideo, mediaSource, postingDate, href}: FeaturedEventProps) {

    return (

      <>

        { isVideo ? (<video src={mediaSource} autoPlay loop muted playsInline className="absolute w-full object-cover h-full"/>) : (<img src={mediaSource}/>)}

        <div className="absolute inset-0 bg-black/60"></div> {/* black overlay for videos do not remove */}

        <div className="absolute bottom-0 left-0 max-w-xl p-12 text-mainwhite">

        <p className="text-sm font-medium tracking-tighter uppercase opacity-80">{postingDate}</p>
        <h1 className="font-extrabold text-4xl md:text-5xl tracking-tighter leading-tight">{titleOfEvent}</h1>
        <p className="text-lg md:text-xl opacity-90 leading-relaxed">{descriptionOfEvent}</p>
        {href ? 

          (<Link href={href}>
          
            <button className="mt-3 px-6 py-2 rounded-lg bg-white/20 text-mainwhite font-semibold hover:bg-white/30 transition duration-200">Learn More →</button>  
          
          </Link>)
          
          : null
          
        }

      </div>
        
      </>

    );

}