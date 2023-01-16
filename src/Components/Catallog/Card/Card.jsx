import React from "react";
import { Link } from 'react-router-dom';
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoSass } from "react-icons/io";
import { GoDatabase } from "react-icons/go";
import { SiGreensock } from "react-icons/si"
import card from "./card.module.scss";

export function Card({ id, img, link, description }) {
  return (
    <div className={card.card} id={id}>
      <div className={card.card__box}>
        <img src={img.src} alt={img.alt} className={card.card__preview} />
        <div className={card.card__stack}>
          <FaReact />
          <IoLogoJavascript />
          <IoLogoSass />
          <GoDatabase />
          <SiGreensock />
        </div>
      </div>
      <p className={card.card__description}>{description}</p>
      <Link to={link.link} className={card.card__link}><span>{link.title}</span></Link>
    </div>
  );
}
