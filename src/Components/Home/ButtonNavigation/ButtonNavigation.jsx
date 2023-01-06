import React from "react";
import './button-navigation.scss';

export function ButtonNavigation({ buttonRef, nameClass, nameSvg, namePath, click }) {
  return (
    <button ref={buttonRef} className={nameClass} onClick={click}>
      <svg className={nameSvg}>
        <use xlinkHref={`./sprites.svg#${namePath}`}></use>
      </svg>
    </button>
  );
}
