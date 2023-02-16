import React, { useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from 'react-router-dom';
import { Content } from "../../Components/Content";
import { Loading } from '../../library/Loading';
import { randomNumber } from "../../Components/randomNumber";
import demoTwo from "../../styles/demo-two.module.scss";

gsap.registerPlugin(ScrollTrigger);

export function DemoTwo() {
  const [loading , setLoading] = useState(true);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let timeline = gsap.timeline({delay: 0.5});

      ScrollTrigger.create({
        trigger: `.${demoTwo.demoTwo__content}`,
        start: "top top",
        end: "bottom bottom",
        scrub: 3
      });

      timeline.fromTo(`.${demoTwo.content__content_description} h3`, {
        x: 30,
        opacity: 0,
        ease: "elastic.out(1, 0.4)",
      }, {
        x: 0,
        duration: 1.5,
        opacity: 1,
        ease: "elastic.out(1, 0.4)",
      });

      timeline.fromTo(`.${demoTwo.content__content_description} h1`, {
        x: 50,
        opacity: 0,
        ease: "elastic.out(1, 0.4)",
      }, {
        x: 0,
        duration: 1.5,
        opacity: 1,
        ease: "elastic.out(1, 0.4)",
      },
      0.2);

      timeline.fromTo(`.${demoTwo.content__content_description} p`, {
        x: 70,
        opacity: 0,
        ease: "elastic.out(1, 0.4)",
      }, {
        x: 0,
        duration: 1.5,
        opacity: 1,
        ease: "elastic.out(1, 0.4)",
      },
      0.4);

      timeline.fromTo(`.${demoTwo.content__content_mass_row} span:first-child`, {
        y: -30,
        opacity: 0,
        ease: "elastic.out(1, 0.4)",
      }, {
        y: 0,
        duration: 1.5,
        opacity: 1,
        ease: "elastic.out(1, 0.4)",
      },
      0.5);

      timeline.fromTo(`.${demoTwo.content__content_mass_row} span:last-child`, {
        y: 30,
        opacity: 0,
        ease: "elastic.out(1, 0.4)",
      }, {
        y: 0,
        duration: 1.5,
        opacity: 1,
        ease: "elastic.out(1, 0.4)",
      },
      0.6);

      timeline.fromTo(`.${demoTwo.content__content_mass_row_media}`, {
        y: 30,
        opacity: 0,
        ease: "elastic.out(1, 0.4)",
      }, {
        y: 0,
        duration: 1.5,
        opacity: 1,
        ease: "elastic.out(1, 0.4)",
      },
      0.6);

      timeline.fromTo(`.${demoTwo.content__content_mass_products__item}`, {
        y: -30,
        scale: 0.5,
        opacity: 0,
        ease: "bounce.out",
      }, {
        y: 0,
        scale: 1,
        duration: 1.5,
        opacity: 1,
        stagger: 0.25,
        ease: "bounce.out",
      },
      0.8);

      timeline.fromTo(`.${demoTwo.content__content_mass_table__tr}.${demoTwo.i_3}`, {
        width: 0,
        duration: 1,
        opacity: 0,
        ease: "power2.out"
      }, {
        width: '65%',
        maxWidth: '155px',
        duration: 1,
        opacity: 1,
        ease: "power2.out"
      }, 2);

      timeline.fromTo(`.${demoTwo.content__content_mass_table__tr}.${demoTwo.i_1}`, {
        width: 0,
        paddingLeft: 0,
        paddingRight: 0,
        duration: 1,
        opacity: 0,
        ease: "power1.out"
      }, {
        paddingLeft: 20,
        paddingRight: 20,
        width: '35%',
        maxWidth: '68px',
        duration: 1,
        opacity: 1,
        ease: "power1.out"
      }, 2.5);

      timeline.fromTo(`.${demoTwo.content__content_mass_table__td }`, {
        x: 30,
        scale: 1.2,
        duration: 1.5,
        opacity: 0,
        ease: "back.out(1.7)"
      }, {
        x: 0,
        scale: 1,
        duration: 1.5,
        opacity: 1,
        ease: "back.out(1.7)",
        stagger: 0.15,
      },
      3);

      timeline.fromTo(`.${demoTwo.content__content_bubbles__bubble}.${demoTwo.i_1}`, {
        opacity: 0,
        scale: 0.6,
        ease: "back.out(3)",
      }, {
        scale: 1,
        duration: 1,
        opacity: 1,
        ease: "back.out(3)",
      }, 2.8);

      timeline.fromTo(`.${demoTwo.content__content_bubbles__bubble}.${demoTwo.i_6}`, {
        opacity: 0,
        scale: 0,
        ease: "back.out(2)",
      }, {
        scale: 1,
        duration: 0.5,
        opacity: 1,
        ease: "back.out(2)",
      }, 3)

      timeline.fromTo(`.${demoTwo.content__content_bubbles__bubble}.${demoTwo.i_3}`, {
        opacity: 0,
        scale: 0,
        ease: "back.out(2)",
      }, {
        scale: 1,
        duration: 0.5,
        opacity: 1,
        ease: "back.out(2)",
      }, 3.2);

      timeline.fromTo(`.${demoTwo.content__content_bubbles__bubble}.${demoTwo.i_4}`, {
        opacity: 0,
        scale: 0,
        ease: "back.out(2)",
      }, {
        scale: 1,
        duration: 0.5,
        opacity: 1,
        ease: "back.out(2)",
      }, 3.4);

      timeline.fromTo(`.${demoTwo.content__content_bubbles__bubble}.${demoTwo.i_5}`, {
        opacity: 0,
        scale: 0,
        ease: "back.out(2)",
      }, {
        scale: 1,
        duration: 0.5,
        opacity: 1,
        ease: "back.out(2)",
      }, 3.6);

      timeline.fromTo(`.${demoTwo.content__content_buttle} img`, {
        x: '-50%',
        scale: 0.6,
        opacity: 0,
        duration: 2,
        ease: "elastic.out(1, 0.3)",
      }, {
        x: '-50%',
        scale: 1,
        opacity: 1,
        duration: 2,
        ease: "elastic.out(1, 0.3)",
      }, 3.8);

      timeline.fromTo(`.${demoTwo.content__content_link}`, {
        y: -60,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(3)",
      }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(3)",
      }, 4.1);
    })
  
    return () => ctx.revert();
  });

  setTimeout(() => {
    setLoading(false);
  }, `${randomNumber(1,5)}000`);
  
  return (
    <>
      {
        loading
        ? <Loading />
        : <section className={`${demoTwo.demoTwo} ${demoTwo.font}`} data-scroll-section>
          <div className={demoTwo.demoTwo__container}>
            <Content className={`${demoTwo.demoTwo__content} ${demoTwo.content}`}>
              <div className={demoTwo.content__wrapper}>
                <div className={demoTwo.content__box}>
                  <div className={demoTwo.content__content_bubbles}>
                    <div className={`${demoTwo.content__content_bubbles__bubble} ${demoTwo.i_1}`}></div>
                    <div className={`${demoTwo.content__content_bubbles__bubble} ${demoTwo.i_6}`}></div>
                    <div className={`${demoTwo.content__content_bubbles__bubble} ${demoTwo.i_3}`}></div>
                    <div className={`${demoTwo.content__content_bubbles__bubble} ${demoTwo.i_4}`}></div>
                    <div className={`${demoTwo.content__content_bubbles__bubble} ${demoTwo.i_5}`}></div>
                  </div>
                  <div className={demoTwo.content__content_buttle}>
                    <img src="./img/demo-2/bottle.webp" alt="Bottle" />
                  </div>
                </div>
                <div className={demoTwo.content__box}>
                  <div className={demoTwo.content__content_description}>
                    <h3>Smoothies</h3>
                    <h1>Tropical Kiwi Mix</h1>
                    <p>This fresh-flavored smoothie can start a day out right or perk up  an afternoon</p>
                  </div>
                  <div className={demoTwo.content__content_mass}>
                    <div className={`${demoTwo.content__content_mass_row} ${demoTwo.i_1}`}>
                      <span>Contents:</span>
                      <span>Nutritional values:</span>
                    </div>
                    <div className={`${demoTwo.content__content_mass_row} ${demoTwo.i_2}`}>
                      <div className={demoTwo.content__content_mass_products}>
                        <div className={demoTwo.content__content_mass_products__item}>
                          <img src="./img/demo-2/kiwi.webp" alt="Kiwi" />
                        </div>
                        <div className={demoTwo.content__content_mass_products__item}>
                          <img src="./img/demo-2/banana.webp" alt="Banana" />
                        </div>
                        <div className={demoTwo.content__content_mass_products__item}>
                          <img src="./img/demo-2/cherry.webp" alt="Cherry" />
                        </div>
                        <div className={demoTwo.content__content_mass_products__item}>
                          <img src="./img/demo-2/avocado.webp" alt="Avocado" />
                        </div>
                      </div>
                      <span className={demoTwo.content__content_mass_row_media}>Nutritional values:</span>
                      <table className={demoTwo.content__content_mass_table}>
                        <tbody className={demoTwo.content__content_mass_table__body}>
                          <tr className={`${demoTwo.content__content_mass_table__tr} ${demoTwo.i_1}`}>
                            <td className={demoTwo.content__content_mass_table__td}>196</td>
                            <td className={demoTwo.content__content_mass_table__td}>1g</td>
                            <td className={demoTwo.content__content_mass_table__td}>46g</td>
                            <td className={demoTwo.content__content_mass_table__td}>5g</td>
                          </tr>
                          <tr className={`${demoTwo.content__content_mass_table__tr} ${demoTwo.i_3}`}>
                            <td className={demoTwo.content__content_mass_table__td}>kcal</td>
                            <td className={demoTwo.content__content_mass_table__td}>fats</td>
                            <td className={demoTwo.content__content_mass_table__td}>carbohydrates</td>
                            <td className={demoTwo.content__content_mass_table__td}>protein</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <Link to="#" className={demoTwo.content__content_link}>
                    <span>Order now</span>
                  </Link>
                </div>
              </div>
            </Content>
          </div>
          </section>
      }
    </>
  )
}
