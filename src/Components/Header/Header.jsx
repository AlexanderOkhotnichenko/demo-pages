import React, { useLayoutEffect, useState } from 'react';
// import { gsap, Power2, Back, Sine } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { Content } from '../Content';
import { Navbar } from './Navbar';
import { BurgerMenu } from './BurgerMenu';
import { Socialbar } from './Socialbar';
import { SiNutanix } from "react-icons/si";
import header from './header.module.scss';
// import socialbar from "./Socialbar/socialbar.module.scss";

// gsap.registerPlugin(ScrollTrigger);

export function Header() {
  const [open, setOpen] = useState(false);

  const getState = () => setOpen(!open);

  const removeClass = () => setOpen(false);

  // useLayoutEffect(() => {
  //   let ctx = gsap.context(() => {
  //     let tl = gsap.timeline();

  //     tl.fromTo(`.${header.header}`, {
  //       delay: 0.3,
  //       duration: 1,
  //       opacity: 0,
  //       left: '-5%',
  //       ease: Sine.easeOut
  //     }, {
  //       duration: 1,
  //       left: 0,
  //       opacity: 1,
  //       ease: Back.easeOut
  //     })
  //     tl.fromTo(`.${header.header__line}`, {
  //       duration: 1,
  //       opacity: 0,
  //       height: 0,
  //       ease: Power2.easeOut
  //     }, {
  //       duration: 1,
  //       opacity: 1,
  //       height: '100%',
  //       ease: Power2.easeOut
  //     })
  //     .from(`.${header.logo}`, {
  //       duration: 0.8,
  //       opacity: 0,
  //       scale: 1.5,
  //       ease: Back.easeOut
  //     })
  //     .from('.burger-menu-wrapper', {
  //       duration: 0.8,
  //       opacity: 0,
  //       scale: 1.5,
  //       ease: Back.easeOut
  //     }, "-=0.7")
  //     .from(`.${socialbar.socialbar__link}.--i-1`, {
  //       duration: 0.8,
  //       opacity: 0,
  //       scale: 1.5,
  //       ease: Back.easeOut
  //     }, "-=0.7")
  //     .from(`.${socialbar.socialbar__link}.--i-2`, {
  //       duration: 0.8,
  //       opacity: 0,
  //       scale: 1.5,
  //       ease: Back.easeOut
  //     }, "-=0.7")
      
  //   });
  //   return () => ctx.revert();
  // });

  return (
    <header className={header.header}>
      <div className={header.header__container}>
        <Content className={`${header.header__content} ${header.content}`}>
          <span className={header.header__line}></span>
          <Link to="/" className={header.logo}><SiNutanix /></Link>
          <Navbar openMenu={open} removeOpenClass={removeClass} />
          <BurgerMenu setOpenClass={getState} addOpenClass={open} />
          <Socialbar />
        </Content>
      </div>
    </header>
  )
}