import type { Metadata } from "next";
import { Red_Hat_Text } from "next/font/google";
import "./globals.css";

//fonts
const redhattext = Red_Hat_Text({weight:["600", "700"], subsets:["latin"]})

export const metadata: Metadata = {
  title: "Countdown",
  description: "Countdown Clock",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={redhattext.className}>
        {children}

      </body>

    </html>
  );
}
