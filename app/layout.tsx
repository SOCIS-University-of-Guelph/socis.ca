import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavigationBar from "./components/NavigationBar";

export const metadata: Metadata = {

  title: "SOCIS | Home",
  description: "TBD", // @todo this description
  
};

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (

    <html lang="en">

      <head/>

      <body className="bg-mainblack h-screen">

        <NavigationBar />
        
        <main>

          {children}

        </main>

      </body>

    </html>

  );

}


