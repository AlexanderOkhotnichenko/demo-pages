import React from "react";
import demoSix from "../../../styles/demo-six/demo-six.module.scss";

export function TopFigure() {
  return (
    <div className={demoSix.figure_wrapper}>
      <div className={`${demoSix.figure} ${demoSix.top}`}></div>
      <div className={`${demoSix.figure} ${demoSix.center}`}></div>
      <div className={`${demoSix.figure} ${demoSix.bottom}`}></div>
    </div>
  );
}
