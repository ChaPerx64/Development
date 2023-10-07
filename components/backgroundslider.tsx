import { Image } from "@nextui-org/react";
import NextImage from "next/image";
import next from "next";
import pic1 from "../resources/Photo1.jpg";
import { useEffect, useRef } from "react";

export default function BgSlider({ images, currSlide }) {
  // console.log(images[currSlide]);
  // const sections = data.sections
  const ref = useRef(null);
  const output = (
    <div className="w-3/4">
      <Image
        isBlurred
        as={NextImage}
        priority={true}
        src={images[currSlide]}
        className="transition-all duration-1000"
        alt="blah-blah"
        width={4000}
        height={4000}
        ref={ref}
      />
    </div>
  );
  useEffect(() => {
    // ref.current.hidden = "false";
    // console.log(ref.current);
    // console.log(ref.current.style);
    ref.current.className = ref.current.className.replace("hidden", "");
    return () => {
      console.log(ref);
      // ref.current.className += " hidden";
    };
  });
  return output;
}
