import { useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import demoFive from "../../styles/demo-five/demo-five.module.scss";

export function useGSAPAnimation(number) {
  const desktopScreen = window.matchMedia('(min-width: 471px)');
  const mobileScreen = window.matchMedia('(max-width: 470px)');
  let numberCount = number.current;

  useEffect(() => {
    numberCount = number.current;
  });

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const progressCountUp = (self) => numberCount.textContent = Math.round(self.progress * 83);

      let timeline = gsap.timeline({
        scrollTrigger: {
          trigger: `.${demoFive.demoFive}`,
          start: "top top",
          end: "bottom bottom",
          ease: "none",
          scrub: 1.5,
          onUpdate: progressCountUp
        },
        delay: 0.5
      });
      let previewTimeline = gsap.timeline({ delay: 0.5 });

      previewTimeline.to(document.body, {
        overflow: "hidden"
      }, ">-0.5").fromTo(`.${demoFive.preview_line}.${demoFive.top}`, {
        scaleX: 0,
      }, {
        transformOrigin: "left",
        scaleX: 1,
        duration: 0.6,
        ease: "none"
      }).fromTo(`.${demoFive.preview_line}.${demoFive.right}`, {
        scaleY: 0,
      }, {
        transformOrigin: "top",
        scaleY: 1,
        duration: 0.6,
        ease: "none"
      }).fromTo(`.${demoFive.preview_line}.${demoFive.bottom}`, {
        scaleX: 0,
      }, {
        transformOrigin: "right",
        scaleX: 1,
        duration: 0.6,
        ease: "none"
      }).fromTo(`.${demoFive.preview_line}.${demoFive.left}`, {
        scaleY: 0,
      }, {
        transformOrigin: "bottom",
        scaleY: 1,
        duration: 0.6,
        ease: "none"
      }).to(`.${demoFive.preview_line}.${demoFive.top}`, {
        scaleX: 0,
        duration: 0.6,
        ease: "none",
        transformOrigin: "right",
      }).to(`.${demoFive.preview_line}.${demoFive.right}`, {
        scaleY: 0,
        duration: 0.6,
        ease: "none",
        transformOrigin: "bottom",
      }).to(`.${demoFive.preview_line}.${demoFive.bottom}`, {
        scaleX: 0,
        duration: 0.6,
        ease: "none",
        transformOrigin: "left",
      }).to(`.${demoFive.preview_line}.${demoFive.left}`, {
        scaleY: 0,
        duration: 0.6,
        ease: "none",
        transformOrigin: "top",
      }).to(`.${demoFive.preview_wrapper}`, {
        top: "-25%",
        duration: 1.5,
        ease: "expo.inOut"
      }).from(`.${demoFive.gsap_section}`, {
        scale: 0.6,
        duration: 1.4,
        ease: "expo.out"
      }, ">-0.8").to(document.body, {
        overflow: "visible"
      });

      if (desktopScreen.matches) {
        timeline.to(`.${demoFive.land_image}`, {
          width: "100%",
          left: "0%",
          duration: 1,
          ease: "none"
        }).to(`.${demoFive.land_image}`, {
          height: "50%",
          top: "50%",
          duration: 1,
          ease: "none"
        }).to(`.${demoFive.land_image}`, {
          width: "60%",
          duration: 1,
          ease: "none"
        }).to(`.${demoFive.land_image}`, {
          height: "25%",
          duration: 1,
          ease: "none"
        }).to(`.${demoFive.land_image}`, {
          width: "30%",
          left: "30%",
          duration: 1,
          ease: "none"
        }).to(`.${demoFive.land_image}`, {
          height: "12.5%",
          top: "62.5%",
          duration: 1,
          ease: "none"
        }).to(`.${demoFive.land_image}`, {
          width: "15%",
          duration: 1,
          ease: "none"
        }).to(`.${demoFive.land_image}`, {
          height: "6.25%",
          duration: 1,
          ease: "none"
        }).to(`.${demoFive.land_image}`, {
          width: "7.5%",
          left: "37.5%",
          duration: 1,
          ease: "none"
        }).from(`.${demoFive.left_text_wrapper}`, {
          opacity: 0,
          top: "2em",
          duration: 0.5,
          ease: "none"
        }, 1).to(`.${demoFive.land_image} img`, {
          scale: 3,
          duration: 9,
          ease: "none"
        }, 0);
      }

      if (mobileScreen.matches) {
        timeline.to(`.${demoFive.land_image}`, {
          top: "50%",
          height: "50%",
          duration: 1,
          ease: "none"
        }).to(`.${demoFive.land_image}`, {
          width: "60%",
          duration: 1,
          ease: "none"
        }).to(`.${demoFive.land_image}`, {
          height: "25%",
          duration: 1,
          ease: "none"
        }).to(`.${demoFive.land_image}`, {
          width: "30%",
          left: "30%",
          duration: 1,
          ease: "none"
        }).to(`.${demoFive.land_image}`, {
          height: "12.5%",
          top: "62.5%",
          duration: 1,
          ease: "none"
        }).to(`.${demoFive.land_image}`, {
          width: "15%",
          duration: 1,
          ease: "none"
        }).to(`.${demoFive.land_image}`, {
          height: "6.25%",
          duration: 1,
          ease: "none"
        }).to(`.${demoFive.land_image}`, {
          width: "7.5%",
          left: "37.5%",
          duration: 1,
          ease: "none"
        }).from(`.${demoFive.left_text_wrapper}`, {
          opacity: 0,
          bottom: "2em",
          duration: 1,
          ease: "none"
        }, 4.5).to(`.${demoFive.land_image} img`, {
          scale: 1.5,
          duration: 9,
          ease: "none"
        }, 0).from(`.${demoFive.subtitle}`, {
          opacity: 0,
          top: "1.5em",
          duration: 1,
          ease: "none"
        }, 1).from(`.${demoFive.title}`, {
          opacity: 0,
          top: "1.5em",
          duration: 1,
          ease: "none"
        }, 1.5)
      }
    });

    return () => ctx.revert();
  });
}