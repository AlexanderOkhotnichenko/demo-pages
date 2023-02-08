import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/all";
import demoFour from "../../styles/demo-four/home.module.scss";

export function useGSAPAnimation() {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let timeline = gsap.timeline({ delay: 0.5 });

      timeline.fromTo(`.${demoFour.home__zone} img`, {
        y: 20,
        scale: 0.8,
        clipPath: 'polygon(0% 100%, 0% 100%, 0% 0%, 0% 0%)'
      }, {
        y: 0,
        scale: 1,
        duration: 1.5,
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
        ease: "none.none",
      });

      timeline.fromTo(`.${demoFour.home__textLeft} span`, {
        y: -30,
        rotate: '5deg',
        clipPath: "polygon(100% 100%, 0% 100%, 0% 100%, 100% 100%)",
      },
      {
        y: 0,
        clipPath: "polygon(100% 100%, 0% 100%, 0% 0%, 100% 0%)",
        duration: 1,
        rotate: 0,
        stagger: 0.2,
        ease: "power3.inOut"
      }, ">-1");

      timeline.fromTo(`.${demoFour.home__textRight} span`, {
        y: 30,
        rotate: '5deg',
        clipPath: "polygon(100% 100%, 0% 100%, 0% 100%, 100% 100%)",
      },
      {
        y: 0,
        clipPath: "polygon(100% 100%, 0% 100%, 0% 0%, 100% 0%)",
        duration: 1,
        rotate: 0,
        stagger: 0.2,
        ease: "power3.inOut"
      }, ">-1.2");

      timeline.fromTo(`.${demoFour.zone__title} span:last-child`, {
        x: 60,
        clipPath: "polygon(100% 100%, 100% 100%, 100% 0%, 100% 0%)",
      },
      {
        x: 0,
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        duration: 1,
        ease: "none.none"
      }, ">-0.5");

      timeline.fromTo(`.${demoFour.zone__title} span:first-child`, {
        x: 60,
        clipPath: "polygon(100% 100%, 100% 100%, 100% 0%, 100% 0%)",
      },
      {
        x: 0,
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        duration: 1,
        ease: "none.none"
      }, ">-0.15");

      timeline.fromTo(`.${demoFour.circle}`, {
        strokeDashoffset: 367,
        strokeDasharray: 367,
      },
      {
        strokeDashoffset: 0,
        duration: 1.5,
        ease: "none.none",
      } , ">-0.5");

      timeline.fromTo(`.${demoFour.arrow}`, {
        x: -30,
        clipPath: 'polygon(0% 100%, 0% 100%, 0% 0%, 0% 0%)',
      },
      {
        x: 0,
        clipPath: 'polygon(100% 100%, 0% 100%, 0% 0%, 100% 0%)',
        duration: 1,
        ease: "power3.out",
      }, ">-0.7");

      timeline.fromTo(CSSRulePlugin.getRule(`.${demoFour.zone}::before`), {
        scale: 0.6,
        opacity: 0,
      }, {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power4.out"
      }, ">-1.7");
    });

    return () => ctx.revert();
  });
}