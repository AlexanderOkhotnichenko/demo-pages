import React from 'react';
import { Content } from "../../../Components/Content";
import { Section } from "../../../Components/Section";
import demoFour from "../../../styles/demo-four/home.module.scss";


export function Home() {
  return (
    <Section className={demoFour.home} data-scroll-section>
              <Content className={demoFour.home__content}>
                <div className={`${demoFour.home__zone} ${demoFour.zone}`}>
                  <p className={demoFour.home__textLeft}>
                    <span data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">Access to this author is blocked</span>
                    <span data-scroll data-scroll-speed="-1.5" data-scroll-direction="horizontal">To view this voter, you nood to</span>
                    <span data-scroll data-scroll-speed="-1" data-scroll-direction="horizontal">login in the community pootle</span>
                  </p>
                  <div className={demoFour.zone__imageWrapper}>
                    <img
                      src="./img/demo-4/home/background.webp"
                      alt="Face"
                      data-scroll
                      data-scroll-speed="2"
                    />
                    <div className={demoFour.zone__circle} data-scroll
                      data-scroll-speed="1.5" data-scroll-direction="horizontal">
                      <svg
                        width="120"
                        height="120"
                        viewBox="0 0 120 120"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={demoFour.circle}
                      >
                        <circle
                          cx="60"
                          cy="60"
                          r="58.5"
    
                          strokeWidth="3"
                        />
                      </svg>
                      <svg
                        width="120"
                        height="10"
                        viewBox="0 0 120 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={demoFour.arrow}
                      >
                        <path d="M107 3.5L2.26555 2.03176C1.01949 2.01429 0 3.01959 0 4.26577C0 5.4997 1.0003 6.5 2.23423 6.5H47.5H107V8.9298C107 9.66142 107.76 10.1454 108.423 9.83599L119.379 4.72291C120.24 4.32129 120.109 3.0587 119.184 2.84289L108.227 0.286354C107.6 0.139998 107 0.61611 107 1.26019V3.5Z" />
                      </svg>
                    </div>
                  </div>
                  <h1 className={demoFour.zone__title} data-scroll data-scroll-speed="-1">
                    <span data-scroll data-scroll-speed="2" data-scroll-direction="horizontal">Out</span>
                    <span data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">zone</span>
                  </h1>
                </div>
                <p className={demoFour.home__textRight}>
                  <span data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">Creativity is a work of authorship</span>
                  <span data-scroll data-scroll-speed="-1.5" data-scroll-direction="horizontal">and the community is part of the family</span>
                  <span data-scroll data-scroll-speed="-1" data-scroll-direction="horizontal">helping to make a difference</span>
                </p>
              </Content>
            </Section>
  )
}
