import type { Metadata } from "next";
import "./globals.css";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

export const metadata: Metadata = {

  title: "SOCIS | Home",
  description: "TBD", // @todo this description
  
};

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (

    <html lang="en">

      <head/>

      <body className="bg-mainblack min-h-screen flex flex-col">

        <NavigationBar />
        
        <main className="flex-1">

          {children}

        </main>

        <Footer/>
        
      </body>

    </html>

  );

}


