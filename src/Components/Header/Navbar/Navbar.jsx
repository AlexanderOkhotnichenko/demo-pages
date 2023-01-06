import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

import styles from "./styles.module.scss";
import "./active.scss";

export function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.menu}>
        <li className={styles.menu__item}><NavLink to="/catallog" className={styles.menu__link}>Catallog</NavLink></li>
        <li className={styles.menu__item}><NavLink to="/404" className={styles.menu__link}>404</NavLink></li>
        <li className={styles.menu__item}><NavLink to="/contact" className={styles.menu__link}>Contact Us</NavLink></li>
      </ul>
    </nav>
  )
}