"use client";
import React, { useState, useRef, useEffect } from "react";
import MyNavbar from "./navbar";
import Main from "./main";
import { Providers } from "./providers";
import { Pagination } from "@nextui-org/react";
import { Jost } from "next/font/google";
import BgSlider from "../components/backgroundslider";

const jost = Jost({ subsets: ["latin", "cyrillic"] });

import "../styles/global.css";
import CardsGenerator from "../components/cardsgenerator";
import data from "../resources/content.json" assert { type: "json" };
import switchelementanimation from "../components/switchelementanimation";
let htmlClassName = `light ${jost.className}`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currSlide, setSlide] = useState(0);
  const slideref = useRef(null);
  const [displayedCard, setDisplayedCard] = useState(currSlide);
  const changingclass = "translate-x-3/4";
  switchelementanimation({
    ref: slideref,
    setState: setDisplayedCard,
    newState: currSlide,
    cssclass: changingclass,
  });
  return (
    <html lang="en" className={htmlClassName}>
      <body className="h-auto md:h-screen overflow-hidden">
        <Providers>
          <MyNavbar isBordered height="6vh" data={data} setslide={setSlide} />
          <main className={"static h-auto md:h-[93vh] w-full"}>
            <div
              className={
                "h-1/2 w-full md:h-full md:w-1/2 flex items-center justify-center"
              }
            >
              <BgSlider
                images={data.sections.map(({ img }) => img)}
                currSlide={currSlide}
              />
            </div>
            <div
              className={`absolute top-auto bottom-0 left-0 h-[93vh] w-full \
                flex flex-row items-center justify-center \
                transition-transform ${changingclass}`}
              ref={slideref}
            >
              <div className={"flex-basis-5/6 w-5/6"}>
                <CardsGenerator
                  className={"w-1/2 ml-auto"}
                  sections={data.sections.map(({ header, text }) => ({
                    header,
                    text,
                  }))}
                  state={[displayedCard, setSlide]}
                />
              </div>
            </div>
            <div className="absolute bottom-5 left-0 w-full flex items-center justify-center">
              <Pagination
                showShadow
                total={data.sections.length}
                page={currSlide + 1}
                onChange={(n) => {
                  setSlide(n - 1);
                }}
              />
            </div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
