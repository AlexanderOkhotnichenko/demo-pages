import React, { useLayoutEffect } from 'react';
import { gsap, Expo } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSRulePlugin } from 'gsap/all';
import { NavLink } from "react-router-dom";
import navbar from "./navbar.module.scss";
import "./active.scss";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSRulePlugin);

export function Navbar({openMenu, removeOpenClass}) {
  const getOpenClass = (open) => open ? navbar.open : '';

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(`.${navbar.menu__item}.--i-1`, {
        delay: 0.4,
        duration: 0.5,
        y: 40,
        opacity: 0,
        ease: Expo.ease,
        scrollTrigger: {
          trigger: `.${navbar.menu__item}.--i-1`,
          toggleActions: 'play none none none'
        }
      });

      gsap.from(`.${navbar.menu__item}.--i-2`, {
        delay: 0.5,
        duration: 0.5,
        y: 40,
        opacity: 0,
        ease: Expo.ease,
        scrollTrigger: {
          trigger: `.${navbar.menu__item}.--i-2`,
          toggleActions: 'play none none none'
        }
      });

      gsap.from(`.${navbar.menu__item}.--i-3`, {
        delay: 0.6,
        duration: 0.5,
        y: 40,
        opacity: 0,
        ease: Expo.ease,
        scrollTrigger: {
          trigger: `.${navbar.menu__item}.--i-3`,
          toggleActions: 'play none none none'
        }
      });

      gsap.to(CSSRulePlugin.getRule(`.${navbar.menu__link}::before`), {
        delay: 1,
        duration: 0.7,
        cssRule: {
          width: '100%',
      }});
    });
    return () => ctx.revert();
   });

  return (
    <nav className={`${navbar.nav} ${getOpenClass(openMenu)}`}>
      <ul className={navbar.menu}>
        <li className={`${navbar.menu__item} --i-1`}><NavLink to="catallog" className={`${navbar.menu__link} --i-1`} onClick={removeOpenClass}>Catallog</NavLink></li>
        <li className={`${navbar.menu__item} --i-2`}><NavLink to="404" className={`${navbar.menu__link} --i-2`} onClick={removeOpenClass}>404</NavLink></li>
        <li className={`${navbar.menu__item} --i-3`}><NavLink to="contact" className={`${navbar.menu__link} --i-3`} onClick={removeOpenClass}>Contact Us</NavLink></li>
      </ul>
    </nav>
  )
}