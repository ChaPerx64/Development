"use client";
import "../styles/global.css";
import { Providers } from "./providers";
import { Jost } from "next/font/google";
const jost = Jost({ subsets: ["latin", "cyrillic"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`light ${jost.className}`}>
      <body className="h-auto md:h-screen overflow-x-hidden md:overflow-y-hidden">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
