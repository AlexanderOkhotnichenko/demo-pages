import React, { useLayoutEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSRulePlugin } from 'gsap/all';
import { SiNutanix } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { Content } from '../../Components/Content';
import footer from "../../styles/footer.module.scss";

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
      let timeline = gsap.timeline({delay: 0.5});

      ScrollTrigger.create({
        trigger: `.${footer.footer}`,
        scrub: 3,
      });

      timeline.from(`.${footer.box}.${footer.logo}`, {
        animation: gsap.to(CSSRulePlugin.getRule(`.${footer.box}.${footer.logo}::before`), {
          duration: 2,
          ease: "none",
          cssRule: {
            width: '100%',
          }}),
      });

      timeline.from(`.${footer.boxWrapper} svg`, {
        duration: 0.8,
        y: 20,
        opacity: 0,
        ease: "back.out",
      });

      timeline.from(`.${footer.box}.${footer.start} h2`, {
        y: 80,
        duration: 1,
        opacity: 0,
        ease: "back.out",
      });
      
      timeline.from(`.${footer.box}.${footer.start} p`, {
        y: 80,
        duration: 1,
        opacity: 0,
        ease: "back.out",
      }, "1");

      timeline.from(`.${footer.box}.${footer.policy}`, {
        duration: 0.8,
        opacity: 0,
        ease: "power1.easeInOut",
      });

      timeline.from(`.${footer.wrLink}`, {
        duration: 1,
        ease: "power0.out",
        animation: gsap.to(CSSRulePlugin.getRule(`.${footer.wrLink}::before`), {
            duration: 1,
            delay: 2.3,
            cssRule: {
              y: '100%'
            }
        })
      });
    });
    return () => ctx.revert();
  });

  return (
    <footer className={footer.footer}>
      <div className={footer.footer__container}>
        <Content className={`${footer.footer__content} ${footer.content}`}>
          <Content className={`${footer.box} ${footer.logo}`}>
            <div className={footer.boxWrapper}>
              <SiNutanix />
            </div>
          </Content>
          <Content className={`${footer.box} ${footer.start}`}>
            <h2>{textGetStart}</h2>
            <p>{textGetStartDescription}</p>
            <div className={footer.wrLink}>
              <Link to="contact"><span>{textGetStartLink}</span></Link>
              <div className={footer.wr}></div>
            </div>
          </Content>
          <Content className={`${footer.box} ${footer.policy}`}>
            <span>{textRights}</span>
            <Link to="/">{textPolicy}</Link>
          </Content>
        </Content>
        </div>
    </footer>
  )
}
