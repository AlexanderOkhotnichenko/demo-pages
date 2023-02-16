import React from "react";
import topBar from "../../../styles/demo-six/top-bar/top-bar.module.scss";

export function TopBar() {
  return (
    <div className={topBar.topBar}>
      <div className={topBar.content}>
        <a className={`${topBar.link} trigger-cursor`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="97.287"
            height="35.741"
            viewBox="0 0 97.287 35.741"
            className={topBar.svg_logo}
          >
            <path
              d="M269.185,6.9c-1.434,1.158-2.895,2.288-4.356,3.446-6.478-5.817-13.122-6.2-18.057-1.1a12.529,12.529,0,0,0-.165,17.12c4.99,5.265,11.523,4.962,18.25-.91,1.461,1.13,2.922,2.288,4.383,3.418-3.225,5.376-11.771,8.188-18.746,6.285A17.767,17.767,0,0,1,237.4,18.064,17.692,17.692,0,0,1,250.3.7C257.248-1.371,265.739,1.386,269.185,6.9Z"
              transform="translate(-171.953)"
            />
            <path
              d="M26.989,10.935Q17.106,23.754,7.305,36.518H0C9.07,24.774,18,13.223,26.934,1.7h5.955V36.463H27.265V11.018C27.182,10.99,27.072,10.963,26.989,10.935Z"
              transform="translate(0 -1.224)"
            />
            <g>
              <path
                d="M162.389,36.663h-7.306q-9.8-12.736-19.656-25.555c-.11.028-.193.055-.3.083V36.636H129.5V1.9h6.01C144.332,13.341,153.264,24.864,162.389,36.663Z"
                transform="translate(-93.8 -1.369)"
              />
              <path
                d="M165.428,7.032c-1.378-1.819-2.757-3.584-4.328-5.651,3.915.221,7.471-.441,10.972.606a12.109,12.109,0,0,1,5.376,19.656,2.811,2.811,0,0,1-.441.3c-1.158-1.516-2.343-3.032-3.5-4.576,1.434-2.784,1.626-5.514-.358-8.05C171.135,6.784,168.24,6.977,165.428,7.032Z"
                transform="translate(-116.688 -0.988)"
              />
            </g>
          </svg>
        </a>
        <div className={`${topBar.menu} trigger-cursor`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="83"
            height="21"
            viewBox="0 0 83 21"
            className={topBar.svg_line}
          >
            <path d="M83,1.5H0v-3H83Z" transform="translate(0 1)" />
            <path d="M83,1.5H0v-3H83Z" transform="translate(0 20)" />
          </svg>
        </div>
      </div>
    </div>
  );
}
