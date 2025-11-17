import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {

  title: "SOCIS | Home",
  description: "Homepage for SOCIS.ca",
  
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {

  return (

    <html lang="en">

      <body>

        {children}

      </body>

    </html>

  );

}
