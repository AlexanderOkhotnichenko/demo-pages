import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Content } from '../../Components/Content';
import { Navbar } from './Navbar';
import { BurgerMenu } from './BurgerMenu';
import { Socialbar } from './Socialbar';
import { SiNutanix } from "react-icons/si";
import header from '../../styles/header.module.scss';

export function Header() {
  const [open, setOpen] = useState(false);

  const getState = () => setOpen(!open);

  const removeClass = () => setOpen(false);

  return (
    <header className={header.header}>
      <div className={header.header__container}>
        <Content className={`${header.header__content} ${header.content}`}>
          <span className={header.header__line}></span>
          <Link to="/" className={`${header.logo} trigger-cursor`}><SiNutanix /></Link>
          <Navbar openMenu={open} removeOpenClass={removeClass} />
          <BurgerMenu setOpenClass={getState} addOpenClass={open} />
          <Socialbar />
        </Content>
      </div>
    </header>
  )
}