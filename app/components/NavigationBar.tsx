"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function NavigationBar() {
  const [open, setOpen] = useState(false);

  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Clubs", href: "/clubs" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="w-full bg-mainblack text-mainwhite border-b border-mainwhite/40 shadow-xl">
      <nav className="px-6 md:px-48 py-6 md:py-12 h-fit md:h-28 flex items-center justify-between">
        {/* Logo + Text */}
        <Link
          href="/"
          draggable="false"
          className="select-none flex items-center gap-4 group"
        >
          {/* Logo */}
          <Image
            draggable="false"
            src="/socis_logo.png"
            alt="SOCIS Logo"
            width={72}
            height={72}
            className="transition duration-200 group-hover:brightness-75"
          />

          {/* Text */}
          <div className="leading-tight hidden sm:block transition duration-200 group-hover:text-mainwhite/75">
            <p className="font-bold text-lg md:text-xl">
              Society Of Computer and
            </p>
            <p className="font-bold text-lg md:text-xl">Information Sciences</p>
          </div>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-6 font-main font-semibold text-lg">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              draggable="false"
              className="select-none p-2 hover:brightness-75 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden p-2"
        >
          {open ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      {open && (
        <div className="md:hidden flex flex-col bg-mainblack border-t border-mainwhite/20">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-6 py-4 font-main font-semibold transition"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
