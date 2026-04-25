import type { Metadata } from "next";
import { personal } from "@/data/profile";
import { bricolage, dmMono, inter } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: `${personal.shortName} | Software engineer`,
  description: personal.tagline,
  openGraph: {
    title: personal.shortName,
    description: personal.tagline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bricolage.variable} ${dmMono.variable} h-full font-sans antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
