"use client";

import data from "../resources/content.json" assert { type: "json" };
import CardsGenerator from "../components/cardsgenerator";

export default function Page() {
  return <CardsGenerator {...data} />;
}
