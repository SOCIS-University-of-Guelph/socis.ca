"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function NavigationBar() {

  const [open, setOpen] = useState(false);

  const navigationLinks = [

    { name: "About", href: "/about"},
    { name: "Events", href: "/events" },
    { name: "Clubs", href: "/clubs" },
    { name: "Featured", href: "/featured" },
    { name: "Resources", href: "/resources" },
    { name: "Contact", href: "/contact" },
    
  ];

  return (

    <header className="w-full bg-mainblack text-mainwhite border-b border-mainwhite/40 shadow-xl">

      <nav className="px-6 md:px-48 py-6 md:py-12 h-20 md:h-28 flex items-center justify-between">

        <Link href="/" draggable = "false" className="select-none group flex items-center">

					{/* smaller logo for mobile */}
  				<Image draggable = "false" src="/socis_logo.png" alt="SOCIS Logo" width={100} height={70} className="block md:hidden transition duration-200 group-hover:brightness-75"/>

  				{/* desktop logo */}
  				<Image draggable = "false" src="/socis_logo_with_text.png" alt="SOCIS Logo" width={400} height={100} className="hidden md:block transition duration-200 group-hover:brightness-75"/>

				</Link>

        {/* desktop navlinks*/}
        <div className="hidden md:flex items-center gap-6 font-main font-semibold text-lg">

          {navigationLinks.map(link => (

            <Link draggable = "false" key={link.href} href={link.href} className="select-none p-2 hover:brightness-75 transition">

              {link.name}

            </Link>

          ))}

        </div>

        {/* mobile link dropdown button */}
        <button onClick={() => setOpen(prev => !prev)} className="md:hidden p-2">

          {open ? <HiX size={28}/> : <HiMenu size={28}/>}

        </button>

      </nav>

      {/* mobile dropdown menu */}
      {open && (

        <div className="md:hidden flex flex-col bg-mainblack border-t border-mainwhite/20">

          {navigationLinks.map(link => (

            <Link key={link.href} href={link.href} className="px-6 py-4 font-main font-semibold transition" onClick={() => setOpen(false)}>

              {link.name}

            </Link>

          ))}

        </div>

      )}

    </header>

  );
	
}
