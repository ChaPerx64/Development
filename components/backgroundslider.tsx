import { useState } from "react";
import { Image } from "@nextui-org/react";
import NextImage from "next/image";
import next from "next";
import pic1 from "../resources/Photo1.jpg";
import { useEffect, useRef } from "react";
import switchelementanimation from "./switchelementanimation";

export default function BgSlider({ images, currSlide }) {
  const [displayedSlide, setDisplayedSlide] = useState(currSlide);
  const changingclass = "opacity-0";
  const ref = useRef(null);
  switchelementanimation({
    ref: ref,
    setState: setDisplayedSlide,
    newState: currSlide,
    cssclass: changingclass,
  });
  return (
    <div
      id="bgimagediv"
      className={`mt-5 md:mt-0 w-3/4 transition-opacity animate-floating ${changingclass}`}
      ref={ref}
    >
      <Image
        isBlurred
        as={NextImage}
        priority={true}
        src={images[displayedSlide]}
        alt="blah-blah"
        width={4000}
        height={4000}
      />
    </div>
  );
}
