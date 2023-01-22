import React from "react";
import { Link } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoSass } from "react-icons/io";
import { GoDatabase } from "react-icons/go";
import { SiGreensock } from "react-icons/si";
import { Skeleton } from "../../ui/Skeleton";
import card from "../../styles/card.module.scss";

export function Card({ id, img, tags = [], link, description, loading }) {
  return loading ? (
    <Skeleton />
  ) : (
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
      <div className={card.card__info_box}>
        <ul className={card.card__tag}>
          {tags.map((tag, index) => (
            <li key={index}>
              <span>{tag.tag}</span>
            </li>
          ))}
        </ul>
        <Link to={link.link} className={card.card__link}>
          <span>{link.title}</span>
        </Link>
      </div>
    </div>
  );
}
