import React, { useLayoutEffect } from 'react';
import { gsap, Expo } from "gsap";
import { Link } from "react-router-dom";
import { Content } from '../Content/Content';
import { Navbar } from './Navbar';
import { BurgerMenu } from './BurgerMenu';
import styles from './styles.module.scss';

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function Header() {
   useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(`${styles.content__logo}`, {
        x: -20,
        opacity: 0,
        ease: Expo.ease,
        scrollTrigger: {
          trigger: ".styles_content__logo__LSUTH",
          toggleActions: 'play none none none'
        }
      });
    });
    return () => ctx.revert();
  });

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Content className={`${styles.header__content} ${styles.content}`}>
          <Link to="/" className={styles.logo}>DEMO PAGES</Link>
          <Navbar />
          <BurgerMenu />
        </Content>
      </div>
    </header>
  )
}