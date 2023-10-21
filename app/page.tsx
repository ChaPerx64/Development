"use client";
import React, { useState, useRef } from "react";
import MyNavbar from "./navbar";
import { Pagination } from "@nextui-org/react";
import BgSlider from "../components/backgroundslider";

import CardsGenerator from "../components/cardsgenerator";
import data from "../resources/content.json" assert { type: "json" };
import switchelementanimation from "../components/switchelementanimation";

export default function Page() {
  const [currSlide, setSlide] = useState(0);
  const slideref = useRef(null);
  const [displayedCard, setDisplayedCard] = useState(currSlide);
  const changingclass = "translate-x-full";
  switchelementanimation({
    ref: slideref,
    setState: setDisplayedCard,
    newState: currSlide,
    cssclass: changingclass,
  });
  return (
    <>
      <MyNavbar isBordered data={data} setslide={setSlide} />
      <main className={"static h-auto md:h-[90vh] w-full"}>
        <div
          className={
            "md:absolute mt-5 bottom-5 left-0 \
                z-50 w-full flex items-center justify-center"
          }
        >
          <Pagination
            showShadow
            total={data.sections.length}
            page={currSlide + 1}
            onChange={(n) => {
              setSlide(n - 1);
            }}
          />
        </div>
        <div
          className={
            "w-full md:h-full md:w-1/2 flex z-0 items-center justify-center"
          }
        >
          <BgSlider
            images={data.sections.map(({ img }) => img)}
            currSlide={currSlide}
          />
        </div>
        <div
          className={`md:absolute md:bottom-0 md:left-0 my-7 md:my-auto \
                h-auto md:h-[93vh] w-full \
                flex flex-row items-center justify-center \
                transition-transform ${changingclass}`}
          ref={slideref}
        >
          <div className={"flex-basis-5/6 w-5/6"}>
            <CardsGenerator
              className={"w-full md:w-1/2 ml-auto"}
              sections={data.sections.map(({ header, text }) => ({
                header,
                text,
              }))}
              state={[displayedCard, setSlide]}
            />
          </div>
        </div>
      </main>
    </>
  );
}
