"use client";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Button,
  Spacer,
} from "@nextui-org/react";
import { useRef } from "react";
import MainCardFooter from "./cardfooter";

function stringToLi(text, key) {
  return <li key={key}>{text}</li>;
}

function getBlock({ innertext, blocktype }, key) {
  if (blocktype == "paragraph") {
    return (
      <p key={key} className="mt-2">
        {innertext}
      </p>
    );
  }
  if (blocktype == "header") {
    return (
      <p key={key} className="text-lg mt-2">
        {innertext}
      </p>
    );
  }
  if (blocktype == "list") {
    return (
      <ul key={key} className="my-2 list-inside list-disc">
        {innertext.split("\n").map(stringToLi)}
      </ul>
    );
  } else {
    return <p key={key}>loading error{innertext}</p>;
  }
}

export default function CardsGenerator({ sections }) {
  return (
    <>
      {sections.map(({ header, text }, i, arr) => {
        const ref = useRef(null);
        return (
          <Card
            ref={ref}
            key={i}
            id={`card_${i}`}
            className={"flex-grow flex-shrink-0 flex-basis-5/6 w-1/3"}
          >
            <CardHeader className="text-xl">
              <p>{header}</p>
            </CardHeader>
            <Divider />
            <CardBody className="flex flex-col items-start justify-center">
              {text.map(getBlock)}
            </CardBody>
            <Divider />
            <MainCardFooter
              // func={scrollToCard}
              refer={ref}
              key={i}
              index={i}
              length={arr.length}
              className="flex flex-row justify-end space-x-unit-xs"
            />
          </Card>
        );
      })}
    </>
  );
}

// const scrollToLastFruit = () => {
//   const lastChildElement = ref.current?.lastElementChild;
//   lastChildElement?.scrollIntoView({ behavior: "smooth" });
// };

// function scrollToCard(id) {
//   const targetcard = ref.current?.
//   targetcard?.scrollIntoView({ behavior: "smooth", inline: "center" });
//   }, []);
// }
