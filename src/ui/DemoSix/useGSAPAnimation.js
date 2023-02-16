import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import demoSix from "../../styles/demo-six/demo-six.module.scss";
import topBar from "../../styles/demo-six/top-bar/top-bar.module.scss";

export function useGSAPAnimation() {
  const desktopScreen = window.matchMedia('(min-width: 471px)');

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let timeline = gsap.timeline({ delay: 0.5 });

      ScrollTrigger.create({
        trigger: `.${demoSix.content}.${demoSix.one}`,
        start: "100px top",
        toggleClass: {
          targets: `.${demoSix.content}.${demoSix.two}`,
          className: `${demoSix.show}`
        },
        scrub: 1.5
      })

      if (desktopScreen.matches) {
        timeline.fromTo(`.${demoSix.arc_outline} svg path:nth-child(2)`, {
          opacity: 0,
        }, {
          opacity: 1,
          duration: 0.6,
        }).fromTo(`.${demoSix.arc_outline} svg path:nth-child(3)`, {
          opacity: 0,
        }, {
          duration: 0.6,
          opacity: 1,
        }, ">=-0.5").fromTo(`.${demoSix.arc_outline} svg path:last-child`, {
          opacity: 0,
        }, {
          duration: 0.6,
          opacity: 1,
        }, ">=-0.5").fromTo(`.${demoSix.arc_outline} svg path:first-child`, {
          opacity: 0,
        }, {
          duration: 0.6,
          opacity: 1,
        }, ">=-0.5").fromTo(`.${demoSix.arc_outline}`, {
          scale: 2,
          top: "30%",
        }, {
          scale: 1,
          duration: 1.8,
          ease: "power4.inOut",
        }).to(`.${demoSix.arc_outline}`, {
          top: "9.5%",
          duration: 1.5,
          ease: "power4.inOut",
        }, ">=-1.4").fromTo(`.${topBar.svg_logo} path:nth-child(2)`, {
          y: "105%"
        }, {
          y: 0,
          duration: 1,
          ease: "power4.inOut",
        }).fromTo(`.${topBar.svg_logo} g`, {
          y: "105%"
        }, {
          y: 0,
          duration: 1,
          ease: "power4.inOut",
        }, ">=-0.85").fromTo(`.${topBar.svg_logo} path:first-child`, {
          y: "105%"
        }, {
          y: 0,
          duration: 1,
          ease: "power4.inOut",
        }, ">=-0.85").fromTo(`.${topBar.svg_line} path`, {
          x: "100%"
        }, {
          x: "0",
          duration: 1,
          stagger: 0.15,
          ease: "power2.out",
        }, ">=-1").fromTo(`.${demoSix.socialBar} li`, {
          opacity: 0,
          y: 30,
        }, {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power4.inOut",
        }, ">=-1.8").fromTo(`.${demoSix.btn_scroll_bottom}`, {
          opacity: 0,
          y: 30,
        }, {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power4.inOut",
        }, ">=-1").fromTo(`.${demoSix.arc_hero}`, {
          y: 60,
          opacity: 0,
        }, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "sine.inOut"
        }, ">=-1.5").fromTo(`.${demoSix.point}`, {
          scale: 0.3,
          opacity: 0,
          pointerEvents: "none"
        }, {
          scale: 1,
          pointerEvents: "inherit",
          duration: 1,
          opacity: 1,
          ease: "back.out(5)",
          stagger: 0.2
        }, ">-0.1").fromTo(`.${demoSix.point} svg`, {
          opacity: 0,
        }, {
          opacity: 1,
          duration: 0.8,
          stagger: 0.15
        }, ">=-1.5").fromTo(`.${demoSix.box_title} h1 span`, {
          opacity: 0,
          skewY: "5deg",
          y: 60
        }, {
          skewY: 0,
          y: 0,
          opacity: 1,
          duration: 1.5,
          stagger: 0.02,
          ease: "power4.inOut",
        }, ">=-2").fromTo(`.${demoSix.box_title} p span`, {
          opacity: 0,
          skewY: "5deg",
          y: 30
        }, {
          skewY: 0,
          y: 0,
          opacity: 1,
          duration: 1.5,
          stagger: 0.02,
          ease: "power4.inOut",
        }, ">=-2").fromTo(`.${demoSix.figure}`, {
          width: 0,
        }, {
          width: "125px",
          duration: 1,
          ease: "power2.inOut",
        }, ">=-1");
      }
    });

    return () => ctx.revert();
  });
}