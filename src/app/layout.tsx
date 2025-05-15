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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${orbitron.variable} ${azeret_mono.variable} antialiased`}
      >
        <App>{children}</App>
      </body>
    </html>
  );
}
