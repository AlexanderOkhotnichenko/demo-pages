import React, { useRef, useState } from "react";
import { Loading } from "../../library/Loading";
import { randomNumber } from "../../Components/randomNumber";
import { useGSAPAnimation } from "./useGSAPAnimation";
import { Section } from "../../Components/Section";
import { Content } from "../../Components/Content";
import demoFive from "../../styles/demo-five/demo-five.module.scss";

export function DemoFive() {
  const [loading, setLoading] = useState(true);
  const number = useRef();

  useGSAPAnimation(number);

  const renderContent = () => {
    return (
      <div className={demoFive.demoFive}>
        <div className={`${demoFive.preview_wrapper}`}>
          <Content className={demoFive.preview_content}>
            <div className={`${demoFive.preview_line} ${demoFive.top}`}></div>
            <div className={`${demoFive.preview_line} ${demoFive.right}`}></div>
            <div className={`${demoFive.preview_line} ${demoFive.bottom}`}></div>
            <div className={`${demoFive.preview_line} ${demoFive.left}`}></div>
          </Content>
        </div>
        <div className={demoFive.demoFive__container}>
          <Section className={`${demoFive.section} ${demoFive.gsap_section}`}>
            <Content className={`${demoFive.content} ${demoFive.left}`}>
              <div className={demoFive.left_wrapper}>
                <div className={demoFive.left_title_wrapper}>
                  <h1 className={demoFive.subtitle}>JUST Egg uses</h1>
                  <h2 className={demoFive.title}>
                    <span className={demoFive.number} ref={number}>
                      0
                    </span>
                    %
                    <br />
                    less land
                  </h2>
                </div>
                <div className={demoFive.left_text_wrapper}>
                  <p className={demoFive.text}>
                    More than three-quarters of the world’s farmable land goes
                    to animal agriculture, yet it produces just 18% of our
                    calories. By making JUST Egg directly from plants, we use
                    83% less land.
                  </p>
                </div>
              </div>
            </Content>
            <Content className={`${demoFive.content} ${demoFive.land}`}>
              <div className={demoFive.land_top}></div>
              <div className={demoFive.land_bottom}>
                <div className={demoFive.land_bottom_left}>
                  <div className={demoFive.land_small}>
                    <div className={demoFive.land_small_left}></div>
                    <div className={demoFive.land_small_right}>
                      <div className={demoFive.land_small_right_bottom}>
                        <div className={demoFive.land_smallest}>
                          <div className={demoFive.land_smallest_top}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={demoFive.land_image}>
                <img src="./img/demo-5/land.webp" alt="Land" />
              </div>
            </Content>
          </Section>
        </div>
      </div>
    );
  };

  setTimeout(() => {
    setLoading(false);
  }, `${randomNumber(1, 5)}000`);

  return <>{loading ? <Loading /> : renderContent()}</>;
}
