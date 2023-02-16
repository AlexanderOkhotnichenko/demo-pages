import React from "react";
import demoSix from "../../../styles/demo-six/demo-six.module.scss";

export function BtnScrollBottom() {
  return (
    <button className={`${demoSix.btn_scroll_bottom} trigger-cursor`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17.68"
        height="312.517"
        viewBox="0 0 17.68 312.517"
      >
        <g transform="translate(-1843.381 -624)">
          <text
            transform="translate(1852 646)"
            fill="#fff"
            fontSize="20"
            fontFamily="SegoeUI, Segoe UI"
          >
            <tspan x="-5.059" y="0">
              E
            </tspan>
            <tspan x="-5.898" y="27">
              X
            </tspan>
            <tspan x="-5.601" y="54">
              P
            </tspan>
            <tspan x="-4.707" y="81">
              L
            </tspan>
            <tspan x="-7.539" y="108">
              O
            </tspan>
            <tspan x="-5.981" y="135">
              R
            </tspan>
            <tspan x="-5.059" y="162">
              E
            </tspan>
          </text>
          <g transform="translate(79.441 34.119)">
            <path
              d="M12.5,11h-3V1.5H0v-3H12.5Z"
              transform="translate(1780.559 892.498) rotate(135)"
              fill="#fff"
            />
            <path
              d="M1.5,19.38h-3v-115.4h3Z"
              transform="translate(1772.779 880.896)"
              fill="#fff"
            />
          </g>
        </g>
      </svg>
    </button>
  );
}
