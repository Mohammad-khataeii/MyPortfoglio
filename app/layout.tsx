import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cv.mohammadkhataei.us"),
  title: "Seyedmohammad Khataeipour | Software Engineer",
  description:
    "Portfolio of Seyedmohammad Khataeipour, software engineer focused on full-stack development, AI, robotics, and industrial software.",
  openGraph: {
    title: "Seyedmohammad Khataeipour | Software Engineer",
    description:
      "Full-stack, AI, robotics, and industrial software portfolio for Seyedmohammad Khataeipour.",
    url: "https://cv.mohammadkhataei.us",
    siteName: "Seyedmohammad Khataeipour Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seyedmohammad Khataeipour | Software Engineer",
    description:
      "Premium portfolio showcasing full-stack, AI, robotics, and industrial software work.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${ibmPlexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
