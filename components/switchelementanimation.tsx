import React, { useEffect } from "react";

export default function switchelementanimation({
  ref,
  setState,
  newState,
  cssclass,
  delay = 400,
}: {
  ref: React.MutableRefObject<HTMLElement>;
  setState: React.ComponentState;
  newState: number;
  cssclass: string;
  delay: number;
}) {
  useEffect(() => {
    // const timeout = delay ? delay : 400;
    setTimeout(() => {
      ref.current.className = ref.current.className.replace(` ${cssclass}`, "");
      setState(newState);
    }, delay);
    return () => {
      ref.current.className = ref.current.className.concat(` ${cssclass}`);
    };
  });
}
