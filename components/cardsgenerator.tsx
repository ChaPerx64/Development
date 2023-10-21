"use client";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import MainCardFooter from "./cardfooter";
import LinkParser from "./linkparser";

function stringToLi(text, key) {
  return (
    <li key={key}>
      <LinkParser arr={[text]} keyprop={0}></LinkParser>
    </li>
  );
}

function getBlock({ innertext, blocktype }, key) {
  if (blocktype == "paragraph") {
    return (
      <p key={key} className="mt-2 break-words">
        <LinkParser arr={[innertext]} keyprop={0}></LinkParser>
      </p>
    );
  }
  if (blocktype == "header") {
    return (
      <p key={key} className="mt-2 break-words text-lg">
        <LinkParser arr={[innertext]} keyprop={0}></LinkParser>
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

export default function CardsGenerator({
  sections,
  state: [currSlide, setSlide],
  ...props
}) {
  return (
    <Card {...props}>
      <CardHeader className="text-xl">
        <p>{sections[currSlide].header}</p>
      </CardHeader>
      <Divider />
      <CardBody className="flex flex-col items-start justify-center break-words">
        {sections[currSlide].text.map(getBlock)}
      </CardBody>
      <Divider />
      <MainCardFooter
        state={[currSlide, setSlide]}
        index={currSlide}
        length={sections.length}
      />
    </Card>
  );
}
