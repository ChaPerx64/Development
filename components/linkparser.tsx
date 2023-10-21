// import { Text } from "react";
import React from "react";
import { Link } from "@nextui-org/react";

function parseAsProps(str) {
  return JSON.parse(
    `{ ${str
      .replaceAll("'", '"')
      .replaceAll(/ \w*=/g, (s) => ` "${s.slice(1, -1)}": `)} }`.replaceAll(
      '" "',
      '", "'
    )
  );
}

function getFisrtObject(
  htmltext,
  keyprop,
  { openingtag, closingtag, nextui_class } // custom classes not implemented
) {
  htmltext = htmltext.slice(openingtag.length);
  const openingtag_end_ind = htmltext.indexOf(">");
  const props = parseAsProps(htmltext.slice(0, openingtag_end_ind));
  htmltext = htmltext.slice(openingtag_end_ind + 1);
  const closingtag_index = htmltext.indexOf(closingtag);
  const innertext = htmltext.slice(0, closingtag_index);
  return (
    <Link key={keyprop} {...props}>
      {innertext}
    </Link>
  );
}

function parseTagObject({ arr, keyprop }) {
  const tag = {
    openingtag: "<a",
    closingtag: "</a>",
    nextui_class: Link, // not implemented
  };
  let [htmltext, ...dom] = arr;
  if (htmltext.indexOf(tag.openingtag) == 0) {
    dom = [...dom, getFisrtObject(htmltext, keyprop, tag)];
    htmltext = htmltext.slice(
      htmltext.indexOf(tag.closingtag) + tag.closingtag.length
    );
    return { arr: [htmltext, ...dom], keyprop: keyprop + 1 };
  } else {
    return { arr, keyprop };
  }
}

function parseTextObject({ arr, keyprop }) {
  let [htmltext, ...dom] = arr;
  if (htmltext == "") return { arr, keyprop };
  const tag_ind = htmltext.indexOf("<");
  if (tag_ind == -1) {
    return { arr: ["", ...dom, htmltext], keyprop: keyprop + 1 };
  } else {
    dom = [
      ...dom,
      React.createElement("text", { key: keyprop }, htmltext.slice(0, tag_ind)),
    ];
    htmltext = htmltext.slice(tag_ind);
    return { arr: [htmltext, ...dom], keyprop: keyprop + 1 };
  }
}

export default function LinkParser({
  arr,
  keyprop,
}: {
  arr: Array<any | string>;
  keyprop: number;
}) {
  return arr[0] == ""
    ? arr.slice(1)
    : LinkParser(parseTextObject(parseTagObject({ arr, keyprop })));
}
