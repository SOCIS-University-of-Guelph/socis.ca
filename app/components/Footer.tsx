import React from "react";
import Link from "next/link";
import { FaDiscord, FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Image from "next/image";

const socials = [

  {

    name: "Discord",
    icon: FaDiscord,
    href: "https://discord.gg/EF3k8aKp",
    hoverClass: "hover:text-[#5865F2]"

  },

  {

    name: "LinkedIn",
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/company/uog-socis",
    hoverClass: "hover:text-[#0A66C2]"

  },

  {

    name: "Instagram",
    icon: FaInstagram,
    href: "https://instagram.com/socis.uog",
    hoverClass: "hover:text-[#AB369D]"

  },

  {

    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com/SOCIS-University-of-Guelph",
    hoverClass: "hover:text-[#999999]"

  }

];

export default function Footer() {

  return (

    <footer className="w-full bg-mainblack text-mainwhite border-t border-mainwhite/10">

      <div className="max-w-7xl mx-auto px-6 py-8">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

          <div>

            <Image alt="SOCIS Logo" src="/socis_logo.png" width={150} height={30} className="select-none"/>
            <p className="text-md mt-3 font-bold">Society of Computing and Information Sciences</p>
            <p className="text-sm opacity-60 mt-2 max-w-xs">The largest CS academic society at the University of Guelph!</p>

          </div>

          <div className="flex flex-col">

            <h2 className="font-bold text-lg mb-3">Socials</h2>

            <div className="flex flex-col gap-3 text-sm opacity-80 transition-all">

              {socials.map((item) => {

                const Icon = item.icon;

                return (

                  <Link key={item.name} href={item.href} target="_blank" className={`flex items-center gap-2 transition-all rounded-md px-4 py-2 bg-white/10 justify-center md:bg-transparent md:justify-start md:px-0 md:py-1
                    ${item.hoverClass}`}
                  >

                    <Icon className="text-lg" />
                    {item.name}

                  </Link>

                );

              })}

            </div>

          </div>

        </div>

        <div className="mt-8 border-t border-white/10 pt-4 text-sm opacity-60">© {new Date().getFullYear()} SOCIS</div>

      </div>

    </footer>

  );

}
