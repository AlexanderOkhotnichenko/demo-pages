import React, { useLayoutEffect } from "react";
import { gsap, Power3, Expo } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function PluginScrollTrigger() {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {

      //HEADER
      gsap.from(".styles_content__logo__LSUTH", {
        x: -20,
        opacity: 0,
        ease: Expo.ease,
        scrollTrigger: {
          trigger: ".styles_content__logo__LSUTH",
          toggleActions: 'play none none none'
        }
      });

      gsap.from(".styles_menu__item__W6ft5", {
        x: -20,
        opacity: 0,
        ease: Power3.easeInOut,
        scrollTrigger: {
          trigger: ".styles_menu__item__W6ft5",
          toggleActions: 'play none none none'
        }
      }, 0.1);

      gsap.from(".styles_basket__CwJeQ", {
        delay: .5,
        opacity: 0,
        x: -20,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: ".styles_basket__CwJeQ",
          toggleActions: 'play none none none'
        }
      });

      gsap.from(".slide-preview-title.--i-1", {
        delay: 1,
        opacity: 0,
        x: 20,
        ease: "easeInOut",
        scrollTrigger: {
          trigger: ".slide-preview-title.--i-1",
          toggleActions: 'play none none none'
        }
      });

      gsap.from(".slide-preview-title.--i-2", {
        delay: 1,
        opacity: 0,
        x: 20,
        ease: "easeInOut",
        scrollTrigger: {
          trigger: ".slide-preview-title.--i-2",
          toggleActions: 'play none none none'
        }
      });

    });
    return () => ctx.revert();
  });

  return (<></>);
}