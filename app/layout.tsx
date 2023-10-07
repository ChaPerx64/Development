"use client";
import React, { useState } from "react";
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
  const [currSlide, setSlide] = useState(0);
  return (
    <html lang="en" className={htmlClassName}>
      <body className="h-screen">
        <Providers>
          <MyNavbar isBordered height="6vh" data={data} setslide={setSlide} />
          <main className="static h-[93vh] w-full">
            <div className="h-full w-1/2 flex items-center justify-center sticky">
              <BgSlider
                images={data.sections.map(({ img }) => img)}
                currSlide={currSlide}
              />
            </div>
            <div className="absolute top-[7vh] left-0 h-[93vh] w-full overflow-hidden flex flex-row items-center justify-start">
              <CardsGenerator
                sections={data.sections.map(({ header, text }) => ({
                  header,
                  text,
                }))}
                state={[currSlide, setSlide]}
              />
            </div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
