import React from 'react';
import { BsGithub } from "react-icons/bs";
import socialbar from "./socialbar.module.scss";

export function Socialbar() {
  return (
    <div className={socialbar.socialbar}>
      <a href="https://freelancehunt.com/freelancer/rain_jv.html" className={`${socialbar.socialbar__link} --i-1`} title="Freelancehunt">
        <img src="./img/header/freelancehunt.webp" alt="Freelancehunt" />
      </a>
      <a href="https://github.com/AlexanderOkhotnichenko" className={`${socialbar.socialbar__link} --i-2`} title="GitHub">
        <BsGithub />
      </a>
    </div>
  )
}