import React from 'react';
import { Link } from 'react-router-dom';
import footer from "./footer.module.scss";

export function Footer() {
  const textTitle = 'CLEAN JUICE';
  const textGetStart = 'Are you not with us yet?';
  const textGetStartDescription = 'Join our friendly community now!';
  const textGetStartLink = 'Get started';
  const textRights = '©2020 letsone ltd. All rights reserved.';
  const textPolicy = 'Privacy Policy';

  return (
    <footer className={footer.footer}>
      <div className={footer.footer__container}>
        <div className={`${footer.footer__content} ${footer.content}`}>
          <div className={`${footer.box} ${footer.title}`}>
            <h2>{textTitle}</h2>
          </div>
          <div className={`${footer.box} ${footer.getStart}`}>
            <h2>{textGetStart}</h2>
            <p>{textGetStartDescription}</p>
            <Link to="/auth"><span>{textGetStartLink}</span></Link>
          </div>
          <div className={`${footer.box} ${footer.policy}`}>
            <span>{textRights}</span>
            <Link to="/">{textPolicy}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
