import React, { useRef, useLayoutEffect } from "react";
import { splitText } from "../../../Components/splitText";
import demoSix from "../../../styles/demo-six/demo-six.module.scss";

export function CenterBoxTitle() {
  const titleSplitRef = useRef();
  const textSplitRef = useRef();

  useLayoutEffect(() => {
    titleSplitRef.current && splitText(titleSplitRef.current);
    textSplitRef.current && splitText(textSplitRef.current);
  }, []);

  return (
    <div className={demoSix.box_title}>
      <h1 ref={titleSplitRef}>
        <span>THE ARC VECTOR</span>
      </h1>
      <p ref={textSplitRef}>
        <span>The world's most advanced motorcycle.</span>
      </p>
    </div>
  );
}
