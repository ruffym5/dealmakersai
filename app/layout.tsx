import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "deal-makers.ai | AI-Beratung für Ihr Unternehmen",
  description: "Strategie, Implementierung und Skalierung für nachhaltiges Wachstum",
  // Alternativer Weg über Metadata API, Next.js übernimmt dann automatisch <link rel="canonical" …>
  alternates: {
    canonical: "https://deal-makers.ai",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        {/* Fallback, falls du den canonical-Link lieber manuell setzen willst */}
        <link rel="canonical" href="https://deal-makers.ai" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        {/* HubSpot Tracking */}
        <Script
          id="hs-script-loader"
          strategy="afterInteractive"
          src="//js-eu1.hs-scripts.com/146200295.js"
        />
      </body>
    </html>
  );
}