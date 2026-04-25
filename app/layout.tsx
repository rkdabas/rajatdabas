import type { Metadata } from "next";
import { bricolage, dmMono, inter } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio | Design system shell",
  description:
    "Design shell based on the hex.co marketing layout. Replace with your own content.",
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
