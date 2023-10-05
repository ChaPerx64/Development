"use client";
import React from "react";
import MyNavbar from "./navbar";
import Main from "./main";
import { Providers } from "./providers";
import { Divider, Spacer } from "@nextui-org/react";
import { Jost } from "next/font/google";
import BgSlider from "../components/backgroundslider";

// If loading a variable font, you don't need to specify the font weight
const jost = Jost({ subsets: ["latin", "cyrillic"] });

import "../styles/global.css";
import CardsGenerator from "../components/cardsgenerator";
import data from "../resources/content.json" assert { type: "json" };
// text-foreground bg-background
let htmlClassName = `light ${jost.className}`;
const navbarheight = 6;
const mainheight = 100 - navbarheight;
const cardheight = 50;
const cardspacing = mainheight - cardheight;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={htmlClassName}>
      <body className="h-screen">
        <Providers>
          <MyNavbar isBordered height="6vh" data={data} />
          <main className="static h-[93vh] w-full">
            <div className="h-full w-1/2 flex items-center justify-center sticky">
              <BgSlider />
            </div>
            <div className="absolute top-[7vh] left-0 h-[93vh] w-full overflow-y-auto flex flex-row items-center justify-start gap-x-[100vw]">
              <div></div>
              <CardsGenerator sections={data.sections} />
              <div></div>
            </div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
