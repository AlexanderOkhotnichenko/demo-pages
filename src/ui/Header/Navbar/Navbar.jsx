import React from 'react';
import { NavLink } from "react-router-dom";
import navbar from "../../../styles/navbar.module.scss";
import "./active.scss";

export function Navbar({openMenu, removeOpenClass}) {
  const getOpenClass = (open) => open ? navbar.open : '';

  return (
    <nav className={`${navbar.nav} ${getOpenClass(openMenu)}`}>
      <ul className={navbar.menu}>
        <li className={`${navbar.menu__item} --i-1`}><NavLink to="catallog" className={`${navbar.menu__link} --i-1`} onClick={removeOpenClass}>Catallog</NavLink></li>
        <li className={`${navbar.menu__item} --i-2`}><NavLink to="404" className={`${navbar.menu__link} --i-2`} onClick={removeOpenClass}>404</NavLink></li>
      </ul>
    </nav>
  )
}