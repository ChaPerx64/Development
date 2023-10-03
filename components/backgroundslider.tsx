import { Image } from "@nextui-org/react";
import NextImage from "next/image";
import next from "next";
import pic1 from "../resources/Photo1.jpg";

export default function BgSlider() {
  return (
    <div className="w-3/4">
      <Image
        isBlurred
        src="https://raw.githubusercontent.com/ChaPerx64/Development/main/resources/Photo1.jpg"
        alt="blah-blah"
        width={4000}
        height={4000}
      />
    </div>
  );
}
