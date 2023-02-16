import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSRulePlugin } from "gsap/all";
import { Content } from "../../Components/Content";
import { splitText } from "../../Components/splitText";
import { randomNumber } from "../../Components/randomNumber";
import { Loading } from "../../library/Loading";
import demoThree from "../../styles/demo-three.module.scss";

gsap.registerPlugin(ScrollTrigger, CSSRulePlugin);

export function DemoThree() {
  const [loading, setLoading] = useState(true);
  const titleRef = useRef();
  const subtitleRef = useRef();
  const titleDemoRef = useRef();

  setTimeout(() => {
    setLoading(false);
  }, `${randomNumber(1,5)}000`)

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      titleRef.current && splitText(titleRef.current);
      subtitleRef.current && splitText(subtitleRef.current);
      titleDemoRef.current && splitText(titleDemoRef.current);

      let timeline = gsap.timeline({ delay: 0.5 });

      timeline.fromTo(CSSRulePlugin.getRule(`.${demoThree.demoThree}::before`), {
        duration: 2,
        left: '0',
        ease: "expo.inOut"
      }, {
        duration: 2,
        left: '100%',
        ease: "expo.inOut"
      });

      timeline.to(CSSRulePlugin.getRule(`.${demoThree.demoThree}::after`), {
        duration: 2,
        top: '-100%',
        ease:"expo.inOut"
      }, ">-1.2");

      timeline.fromTo(`.${demoThree.content__content_preview_title__title} span`, {
        duration: 0.8,
        opacity: 0,
        top: 20,
        ease: "back.out(5)"
      }, {
        duration: 0.8,
        opacity: 1,
        top: 0,
        stagger: 0.15,
        ease: "back.out(5)"
      }, ">-0.8");

      timeline.fromTo(`.${demoThree.content__content_preview_title__subtitle} span`, {
        duration: 0.8,
        opacity: 0,
        top: -20,
        ease: "back.out(3)"
      }, {
        duration: 0.8,
        opacity: 1,
        top: 0,
        stagger: 0.1,
        ease: "back.out(3)"
      }, ">-0.5");

      timeline.fromTo(`.${demoThree.content__content_title} span`, {
        duration: 0.5,
        opacity: 0,
        top: 20,
        ease: "back.out(4)"
      }, {
        duration: 0.5,
        opacity: 1,
        top: 0,
        stagger: {
          each: 0.05,
          from: "center"
        },
        ease: "back.out(4)"
      }, ">-0.5");

      timeline.fromTo(`.${demoThree.content__content_image} img`, {
        duration: 1,
        opacity: 0,
        scale: 0.8,
        ease: "power3.out"
      }, {
        duration: 1,
        opacity: 1,
        scale: 1,
        ease: "power3.out"
      }, ">-1");

      timeline.fromTo(`.${demoThree.random_vis_item}`, {
        duration: 1.5,
        opacity: 0,
        scale: 0.6,
        ease: "back.out(3)"
      }, {
        duration: 1.5,
        opacity: 1,
        scale: 1,
        ease: "back.out(3)"
      }, ">-0.4");

      timeline.fromTo(`.${demoThree.content__content_left_panel_ingredients_box} span`, {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: "bounce.out"
      }, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "bounce.out"
      }, ">-1");

      timeline.fromTo(`.${demoThree.content__content_right_panel_ingredients_box} span`, {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: "bounce.out"
      }, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "bounce.out"
      }, ">-1");

      timeline.fromTo('#demo-3-svg', {
        opacity: 0,
        scale: 0.5,
      }, {
        duration: 0.3,
        opacity: 1,
        scale: 1,
        ease: "back.out(4)",
        stagger: {
          each: 0.15,
          from: "random"
        }
      }, ">-0.3");

      timeline.fromTo(CSSRulePlugin.getRule(`.${demoThree.content__content_image}::before`), {
        duration: 1.5,
        opacity: 0,
        ease: "none.none"
      }, {
        duration: 1.5,
        opacity: 1,
        ease: "none.none"
      });
    });

    return () => ctx.revert();
  });

  return (
    <>
      {
        loading 
        ? <Loading /> 
        : <section className={`${demoThree.demoThree} ${demoThree.font}`} data-scroll-section>
            <div className={demoThree.demoThree__container}>
              <Content className={`${demoThree.demoThree__content} ${demoThree.content}`}>
                <div className={demoThree.content__wrapper}>
                  <div className={`${demoThree.content__box} ${demoThree.i_1}`}>
                    <div className={demoThree.content__content_preview_title}>
                      <span ref={subtitleRef} className={`${demoThree.content__content_preview_title__subtitle}`}>Dakiry</span>
                      <h1 ref={titleRef} className={`${demoThree.content__content_preview_title__title}`}>Sheet Thomas</h1>
                    </div>
                  </div>
                  <div className={`${demoThree.content__box} ${demoThree.i_2}`}>
                    <h1 ref={titleDemoRef} className={demoThree.content__content_title}>Из чего мы готовим капкейки?</h1>
                    <div className={demoThree.content__content_content}>
                      <div className={demoThree.content__content_left_panel_ingredients}>
                        <div className={demoThree.content__content_left_panel_ingredients_box}>
                          <img src="./img/demo-3/flour.webp" alt="Flour" className={demoThree.random_vis_item} />
                          <span>Пшеничная мука</span>
                        </div>
                        <div className={demoThree.content__content_left_panel_ingredients_box}>
                          <img src="./img/demo-3/cream.webp" alt="Cream" className={demoThree.random_vis_item} />
                          <span>Свежая сметана</span>
                        </div>
                        <div className={demoThree.content__content_left_panel_ingredients_box}>
                          <img src="./img/demo-3/berries.webp" alt="Berries" className={demoThree.random_vis_item} />
                          <span>Натуральные добавки (фрукты, орешки)</span>
                        </div>
                      </div>
                      <div className={demoThree.content__content_image}>
                        <img src="./img/demo-3/cupcake-1.webp" alt="Cupcake" />
                        <div className={demoThree.content__content_list_svg}>
                          <div className={demoThree.content__content_list_svg__item}>
                            <svg id="demo-3-svg" width="140px" height="140px" viewBox="0 -76.5 193 193" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M173.928 21.1292C115.811 44.9386 58.751 45.774 0 26.1417C4.22669 21.7558 7.81938 23.4266 10.5667 24.262C31.7002 29.9011 53.4676 30.5277 75.0238 31.3631C106.09 32.6162 135.465 25.5151 164.207 14.0282C165.475 13.6104 166.532 12.775 169.068 11.1042C154.486 8.18025 139.903 13.1928 127.223 7.34485C127.435 6.50944 127.435 5.46513 127.646 4.62971C137.156 4.00315 146.877 3.37658 156.388 2.54117C165.898 1.70575 175.196 0.661517 184.706 0.0349538C191.68 -0.382755 194.639 2.9589 192.103 9.22453C188.933 17.3698 184.495 24.8886 180.48 32.6162C180.057 33.4516 179.423 34.4959 178.578 34.9136C176.253 35.749 173.928 35.9579 171.392 36.5845C170.97 34.4959 169.913 32.1985 170.124 30.3188C170.547 27.8126 172.026 25.724 173.928 21.1292Z" fill="#FB92B0"/>
                            </svg>
                          </div>
                          <div className={demoThree.content__content_list_svg__item}>
                            <svg id="demo-3-svg" width="140px" height="140px" viewBox="0 -76.5 193 193" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M173.928 21.1292C115.811 44.9386 58.751 45.774 0 26.1417C4.22669 21.7558 7.81938 23.4266 10.5667 24.262C31.7002 29.9011 53.4676 30.5277 75.0238 31.3631C106.09 32.6162 135.465 25.5151 164.207 14.0282C165.475 13.6104 166.532 12.775 169.068 11.1042C154.486 8.18025 139.903 13.1928 127.223 7.34485C127.435 6.50944 127.435 5.46513 127.646 4.62971C137.156 4.00315 146.877 3.37658 156.388 2.54117C165.898 1.70575 175.196 0.661517 184.706 0.0349538C191.68 -0.382755 194.639 2.9589 192.103 9.22453C188.933 17.3698 184.495 24.8886 180.48 32.6162C180.057 33.4516 179.423 34.4959 178.578 34.9136C176.253 35.749 173.928 35.9579 171.392 36.5845C170.97 34.4959 169.913 32.1985 170.124 30.3188C170.547 27.8126 172.026 25.724 173.928 21.1292Z" fill="#FB92B0"/>
                            </svg>
                          </div>
                          <div className={demoThree.content__content_list_svg__item}>
                            <svg id="demo-3-svg" width="140px" height="140px" viewBox="0 -76.5 193 193" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M173.928 21.1292C115.811 44.9386 58.751 45.774 0 26.1417C4.22669 21.7558 7.81938 23.4266 10.5667 24.262C31.7002 29.9011 53.4676 30.5277 75.0238 31.3631C106.09 32.6162 135.465 25.5151 164.207 14.0282C165.475 13.6104 166.532 12.775 169.068 11.1042C154.486 8.18025 139.903 13.1928 127.223 7.34485C127.435 6.50944 127.435 5.46513 127.646 4.62971C137.156 4.00315 146.877 3.37658 156.388 2.54117C165.898 1.70575 175.196 0.661517 184.706 0.0349538C191.68 -0.382755 194.639 2.9589 192.103 9.22453C188.933 17.3698 184.495 24.8886 180.48 32.6162C180.057 33.4516 179.423 34.4959 178.578 34.9136C176.253 35.749 173.928 35.9579 171.392 36.5845C170.97 34.4959 169.913 32.1985 170.124 30.3188C170.547 27.8126 172.026 25.724 173.928 21.1292Z" fill="#FB92B0"/>
                            </svg>
                          </div>
                          <div className={demoThree.content__content_list_svg__item}>
                            <svg id="demo-3-svg" width="140px" height="140px" viewBox="0 -76.5 193 193" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M173.928 21.1292C115.811 44.9386 58.751 45.774 0 26.1417C4.22669 21.7558 7.81938 23.4266 10.5667 24.262C31.7002 29.9011 53.4676 30.5277 75.0238 31.3631C106.09 32.6162 135.465 25.5151 164.207 14.0282C165.475 13.6104 166.532 12.775 169.068 11.1042C154.486 8.18025 139.903 13.1928 127.223 7.34485C127.435 6.50944 127.435 5.46513 127.646 4.62971C137.156 4.00315 146.877 3.37658 156.388 2.54117C165.898 1.70575 175.196 0.661517 184.706 0.0349538C191.68 -0.382755 194.639 2.9589 192.103 9.22453C188.933 17.3698 184.495 24.8886 180.48 32.6162C180.057 33.4516 179.423 34.4959 178.578 34.9136C176.253 35.749 173.928 35.9579 171.392 36.5845C170.97 34.4959 169.913 32.1985 170.124 30.3188C170.547 27.8126 172.026 25.724 173.928 21.1292Z" fill="#FB92B0"/>
                            </svg>
                          </div>
                          <div className={demoThree.content__content_list_svg__item}>
                            <svg id="demo-3-svg" width="140px" height="140px" viewBox="0 -76.5 193 193" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M173.928 21.1292C115.811 44.9386 58.751 45.774 0 26.1417C4.22669 21.7558 7.81938 23.4266 10.5667 24.262C31.7002 29.9011 53.4676 30.5277 75.0238 31.3631C106.09 32.6162 135.465 25.5151 164.207 14.0282C165.475 13.6104 166.532 12.775 169.068 11.1042C154.486 8.18025 139.903 13.1928 127.223 7.34485C127.435 6.50944 127.435 5.46513 127.646 4.62971C137.156 4.00315 146.877 3.37658 156.388 2.54117C165.898 1.70575 175.196 0.661517 184.706 0.0349538C191.68 -0.382755 194.639 2.9589 192.103 9.22453C188.933 17.3698 184.495 24.8886 180.48 32.6162C180.057 33.4516 179.423 34.4959 178.578 34.9136C176.253 35.749 173.928 35.9579 171.392 36.5845C170.97 34.4959 169.913 32.1985 170.124 30.3188C170.547 27.8126 172.026 25.724 173.928 21.1292Z" fill="#FB92B0"/>
                            </svg>
                          </div>
                          <div className={demoThree.content__content_list_svg__item}>
                            <svg id="demo-3-svg" width="140px" height="140px" viewBox="0 -76.5 193 193" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M173.928 21.1292C115.811 44.9386 58.751 45.774 0 26.1417C4.22669 21.7558 7.81938 23.4266 10.5667 24.262C31.7002 29.9011 53.4676 30.5277 75.0238 31.3631C106.09 32.6162 135.465 25.5151 164.207 14.0282C165.475 13.6104 166.532 12.775 169.068 11.1042C154.486 8.18025 139.903 13.1928 127.223 7.34485C127.435 6.50944 127.435 5.46513 127.646 4.62971C137.156 4.00315 146.877 3.37658 156.388 2.54117C165.898 1.70575 175.196 0.661517 184.706 0.0349538C191.68 -0.382755 194.639 2.9589 192.103 9.22453C188.933 17.3698 184.495 24.8886 180.48 32.6162C180.057 33.4516 179.423 34.4959 178.578 34.9136C176.253 35.749 173.928 35.9579 171.392 36.5845C170.97 34.4959 169.913 32.1985 170.124 30.3188C170.547 27.8126 172.026 25.724 173.928 21.1292Z" fill="#FB92B0"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className={demoThree.content__content_right_panel_ingredients}>
                        <div className={demoThree.content__content_right_panel_ingredients_box}>
                          <img src="./img/demo-3/eag.webp" alt="Eag" className={demoThree.random_vis_item} />
                          <span>Куринные яйца</span>
                        </div>
                        <div className={demoThree.content__content_right_panel_ingredients_box}>
                          <img src="./img/demo-3/milk.webp" alt="Milk" className={demoThree.random_vis_item} />
                          <span>Коровье молоко</span>
                        </div>
                        <div className={demoThree.content__content_right_panel_ingredients_box}>
                          <img src="./img/demo-3/oil.webp" alt="Oil" className={demoThree.random_vis_item} />
                          <span>Cливочное масло</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Content>
            </div>
          </section>
      }
    </>
  );
}
