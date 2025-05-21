import type { Metadata } from "next";
import { Orbitron, Azeret_Mono } from "next/font/google";
import "./globals.css";

import App from ".";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const azeret_mono = Azeret_Mono({
  subsets: ["latin"],
  variable: "--font-azeret_mono",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Satoverse",
  description:
    "Satoverse is the first Layer 2 multi-chain memecoin built on Bitcoin, with a utility that unlocks faster, cheaper transactions. Bitcoin's slow speed, high costs, and massive energy demands have made it impossible for meme culture to thrive. Satoverse breaks these barriers with its fast, scalable Layer 2, unleashing memecoins on the biggest, most user-rich blockchain.",
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
  },
  openGraph: {
    title: "Satoverse - The First Layer 2 Memecoin on Bitcoin",
    description:
      "Satoverse brings memecoins to Bitcoin with a fast, scalable Layer 2 solution. Join the revolution.",
    url: "https://satoverse.xyz",
    siteName: "Satoverse",
    images: [
      {
        url: "/images/favicon.png",
        width: 1200,
        height: 630,
        alt: "Satoverse Open Graph Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Satoverse - The First Layer 2 Memecoin on Bitcoin",
    description:
      "Satoverse breaks Bitcoin's limits to unleash meme culture. Experience low fees and high speed.",
    images: ["/images/favicon.pngg"],
    creator: "@satoverse",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/images/bg.svg"
          as="image"
          type="image/svg+xml"
        />
        {/* Preload Joystix */}
        <link
          rel="preload"
          href="/fonts/Joystix/joystix.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        {/* Preload Strenuoes */}
        <link
          rel="preload"
          href="/fonts/Strenuoes/strenuous.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />

        {/* Preload Usuzi */}
        <link
          rel="preload"
          href="/fonts/Usuzi/usuzi.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${orbitron.variable} ${azeret_mono.variable} antialiased`}
      >
        <App>{children}</App>
      </body>
    </html>
  );
}
