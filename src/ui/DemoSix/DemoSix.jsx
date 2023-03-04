import React, { useEffect, useRef } from "react";
import { useGSAPAnimation } from "./useGSAPAnimation";
import { Section } from "../../Components/Section";
import { Content } from "../../Components/Content";
import { TopBar } from "./TopBar";
import { TopFigure }  from "./TopFigure";
import { OutlineCenterArc } from "./OutlineCenterArc";
import { CenterBoxTitle } from "./CenterBoxTitle";
import { SocialBar } from "./SocialBar";
import { BtnScrollBottom } from "./BtnScrollBottom";
import { CenterMotoBox } from "./CenterMotoBox";
import { BottomBar } from "./BottomBar";
import demoSix from "../../styles/demo-six/demo-six.module.scss";

export function DemoSix() {
  const arcHeroRef = useRef();
  useGSAPAnimation();

  useEffect(() => {
    const collectionPoints = document.querySelectorAll(`.${demoSix.point}`);

    const modeMouseFocus = (event) => {
      let currentTarget = event.target;
      let parentEl = currentTarget.closest(`.${demoSix.point_box}`);
      let number = [...collectionPoints].indexOf(currentTarget);

      arcHeroRef.current.classList.add(demoSix[`is_${number}`]);
      parentEl.classList.add(`${demoSix.focus}`);
      currentTarget.closest(`.${demoSix.point}`) &&
        currentTarget.classList.remove(`${demoSix.anim}`);

      [...parentEl.parentElement.children]
        .filter(
          (el) =>
            el.classList.contains(`${demoSix.point_box}`) &&
            el !== currentTarget.closest(`.${demoSix.point_box}`)
        )
        .forEach((wrap) => {
          wrap.style.opacity = "0";
        });
    };

    const modeMouseLeave = (event) => {
      let currentTarget = event.target;
      let parentEl = currentTarget.closest(`.${demoSix.point_box}`);
      let number = [...collectionPoints].indexOf(currentTarget);

      arcHeroRef.current.classList.remove(demoSix[`is_${number}`]);
      parentEl.classList.remove(`${demoSix.focus}`);
      currentTarget.closest(`.${demoSix.point}`) &&
        currentTarget.classList.add(`${demoSix.anim}`);

      [...parentEl.parentElement.children].forEach((el) => {
        if (el.classList.contains(`${demoSix.point_box}`) && el !== parentEl) {
          el.style.opacity = "1";
        }
      });
    };

    collectionPoints.forEach((point) => {
      point.addEventListener("mouseenter", modeMouseFocus);
      point.addEventListener("mouseleave", modeMouseLeave);
    });
  }, []);

  return (
    <Section className={demoSix.demoSix}>
      <div className={demoSix.demoSix__container}>
        <Content className={`${demoSix.content} ${demoSix.one}`}>
          <TopBar />
          <TopFigure />
          <OutlineCenterArc />
          <CenterBoxTitle />
          <SocialBar />
          <BtnScrollBottom />
          <CenterMotoBox arcHeroRef={arcHeroRef} />
        </Content>
        <Content className={`${demoSix.content} ${demoSix.two}`}>
          <BottomBar />
        </Content>
      </div>
    </Section>
  );
}
