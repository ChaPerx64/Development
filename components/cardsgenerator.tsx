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
import LinkParser from "./linkparser";

function stringToLi(text, key) {
  return (
    <li key={key}>
      <LinkParser dom={[text]}></LinkParser>
    </li>
  );
}

function getBlock({ innertext, blocktype }, key) {
  if (blocktype == "paragraph") {
    return (
      <p key={key} className="mt-2 break-words">
        <LinkParser dom={[innertext]}></LinkParser>
      </p>
    );
  }
  if (blocktype == "header") {
    return (
      <p key={key} className="mt-2 break-words text-lg">
        <LinkParser dom={[innertext]}></LinkParser>
      </p>
    );
  }
  if (blocktype == "list") {
    return (
      <ul key={key} className="mt-2 break-words list-inside list-disc">
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
          <div
            ref={ref}
            key={i}
            className="flex-grow flex-shrink-0 flex-basis-5/6 w-5/6"
          >
            <Card key={i} id={`card_${i}`} className={"w-2/5 ml-auto mr-0"}>
              <CardHeader className="text-xl">
                <p>{header}</p>
              </CardHeader>
              <Divider />
              <CardBody className="flex flex-col items-start justify-center break-words">
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
          </div>
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
