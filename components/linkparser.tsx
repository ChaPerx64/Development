// import { Text } from "react";
import React from "react";
import { Link } from "@nextui-org/react";

function insertLink(htmltext: string) {
  const opentag = htmltext.indexOf("<a href='");
  if (opentag == -1) {
    return <>{...[...dom.slice(1), htmltext]}</>;
  }
  const urlstart = opentag + "<a href=".length;
  const text1 = React.createElement(
    "text",
    { key: keyprop },
    htmltext.slice(0, opentag)
  );
  keyprop += 1;
  const urlend = htmltext.indexOf("' >");
  const href = htmltext.slice(urlstart, urlend);
  const closetag = htmltext.indexOf("</a>");
  const innertext = htmltext.slice(urlend + 1, closetag);
  const link = (
    <Link key={keyprop} href={href}>
      {innertext}
    </Link>
  );
  return [text1, link, htmltext.slice(closetag + 4)];
}

export default function LinkParser({ dom, keyprop }) {
  if (dom.length == 0) {
    dom = [];
  }
  const htmltext = dom[0];
  if (!keyprop) {
    keyprop = 0;
  }
  //   console.log(dom, htmltext);
  const opentag = htmltext.indexOf("<a href=");
  if (opentag == -1) {
    return <>{...[...dom.slice(1), htmltext]}</>;
  }
  const urlstart = opentag + "<a href='".length;
  dom = [
    ...dom,
    React.createElement("text", { key: keyprop }, htmltext.slice(0, opentag)),
  ];
  keyprop += 1;
  const urlend = htmltext.indexOf("'", urlstart);
  const href = htmltext.slice(urlstart, urlend);
  const closetag = htmltext.indexOf("</a>");
  const innertext = htmltext.slice(htmltext.indexOf(">", urlend) + 1, closetag);
  dom = [
    ...dom,
    <Link key={keyprop} href={href}>
      {innertext}
    </Link>,
  ];
  return LinkParser({
    dom: [htmltext.slice(closetag + 4), dom.slice(1)],
    keyprop: keyprop + 1,
  });
}
