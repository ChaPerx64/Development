import { useState } from "react";
import { Image } from "@nextui-org/react";
import NextImage from "next/image";
import next from "next";
import pic1 from "../resources/Photo1.jpg";
import { useEffect, useRef } from "react";

export default function BgSlider({ images, currSlide }) {
  const [displayedSlide, setDisplayedSlide] = useState(currSlide);
  const ref = useRef(null);
  const output = (
    <div
      id="bgimagediv"
      className="w-3/4 transition-opacity animate-floating opacity-0"
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
  useEffect(() => {
    setTimeout(() => {
      ref.current.className = ref.current.className.replace(" opacity-0", "");
      setDisplayedSlide(currSlide);
    }, 400);
    return () => {
      ref.current.className = ref.current.className.concat(" opacity-0");
    };
  });
  return output;
}
