import type { Metadata } from "next";
import "./globals.css";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "SOCIS",
  description:
    "The Society of Computing and Information Science (SOCIS) is a student organization at the University of Guelph.",
  authors: [
    {
      name: "SOCIS",
      url: "https://socis.ca",
    },
  ],
  keywords: [
    "socis",
    "society",
    "computing",
    "information",
    "science",
    "uog",
    "guelph",
    "university",
    "of",
    "guelph",
    "computer science",
    "software engineering",
    "data science",
    "cybersecurity",
    "web development",
    "programming",
    "club",
    "student",
    "organization",
    "engineering",
    "events",
  ],
  icons: {
    icon: "/socis_logo.png",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />

      <body className="bg-mainblack min-h-screen flex flex-col">
        <NavigationBar />

        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
