import React, { useLayoutEffect } from 'react';
import { gsap, Power0, Power1, Back } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSRulePlugin } from 'gsap/all';
import { SiNutanix } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { Content } from '../Content';
import { BoxContent } from "./BoxContent";
import footer from "./footer.module.scss";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSRulePlugin);

export function Footer() {
  const textGetStart = 'Interested in collaborating?';
  const textGetStartDescription = 'Fill in the form to contact me!';
  const textGetStartLink = 'Get started';
  const textRights = '©2022 letsone ltd. All rights reserved.';
  const textPolicy = 'Privacy Policy';
  
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: `.${footer.box}.${footer.logo}`,
        delay: 0.3,
        duration: 2.5,
        scroller: 'body',
        start: 'top bottom',
        ease: Power0.easeNone,
        animation: gsap.to( CSSRulePlugin.getRule(`.${footer.box}.${footer.logo}::before`), {
          duration: 3,
          cssRule: {
            width: '100%',
          }}),
      });

      gsap.from(`.${footer.boxWrapper} svg`, {
        delay: 0.9,
        duration: 0.8,
        y: 20,
        opacity: 0,
        ease: Back.easeInOut,
        scrollTrigger: {
          trigger: `.${footer.boxWrapper} svg`,
          toggleActions: 'play none none none'
        }
      });

      gsap.from(`.${footer.box}.${footer.getstart} h2`, {
        y: 80,
        delay: 1.6,
        duration: 1,
        opacity: 0,
        ease: Back.easeOut,
        scrollTrigger: {
          trigger: `.${footer.box}.${footer.getstart} h2`,
          toggleActions: 'play none none none'
        }
      });

      gsap.from(`.${footer.box}.${footer.getstart} p`, {
        y: 80,
        delay: 1.75,
        duration: 1,
        opacity: 0,
        ease: Back.easeOut,
        scrollTrigger: {
          trigger: `.${footer.box}.${footer.getstart} p`,
          toggleActions: 'play none none none'
        }
      });
      
      ScrollTrigger.create({
        trigger: `.${footer.wrLink}::before`,
        duration: 1,
        delay: 2.3,
        scroller: 'body',
        start: 'top center',
        ease: Power0.easeInOut,
        animation: gsap.to( CSSRulePlugin.getRule(`.${footer.wrLink}::before`), {
          duration: 1,
          delay: 2.3,
          cssRule: {
            y: '100%'
          }}),
      });

      gsap.from(`.${footer.box}.${footer.policy}`, {
        delay: 2,
        duration: 0.8,
        opacity: 0,
        ease: Power1.easeInOut,
        scrollTrigger: {
          trigger: `.${footer.box}.${footer.policy}`,
          toggleActions: 'play none none none'
        }
      });

    });
    return () => ctx.revert();
  });

  return (
    <footer className={footer.footer}>
      <div className={footer.footer__container}>
        <Content className={`${footer.footer__content} ${footer.content}`}>
          <BoxContent className={`${footer.box} ${footer.logo}`}>
            <div className={footer.boxWrapper}>
              <SiNutanix />
            </div>
          </BoxContent>
          <BoxContent className={`${footer.box} ${footer.getstart}`}>
            <h2>{textGetStart}</h2>
            <p>{textGetStartDescription}</p>
            <div className={footer.wrLink}>
              <Link to="contact"><span>{textGetStartLink}</span></Link>
              <div className={footer.wr}></div>
            </div>
          </BoxContent>
          <BoxContent className={`${footer.box} ${footer.policy}`}>
            <span>{textRights}</span>
            <Link to="/">{textPolicy}</Link>
          </BoxContent>
        </Content>
        </div>
    </footer>
  )
}
