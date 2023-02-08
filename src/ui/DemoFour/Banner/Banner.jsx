import React from "react";
import { Section } from "../../../Components/Section";
import { Content } from "../../../Components/Content";
import banner from "../../../styles/demo-four/banner.module.scss";

export function Banner() {
  return (
    <Section className={banner.banner} data-scroll-section>
      <Content className={banner.banner__content} id="direction">
        <div className={banner.wrapper} data-scroll data-scroll-target="#direction" id="direction-item">
          <div className={`${banner.item} ${banner.b1}`}>
            <span className={banner.direction}data-scroll data-scroll-speed="6" data-scroll-direction="horizontal" data-scroll-target="#direction-item">scroll item locomotivescroll</span>
          </div>
          <div className={`${banner.item} ${banner.b2}`}>
            <span className={banner.direction} data-scroll data-scroll-speed="-8" data-scroll-direction="horizontal" data-scroll-target="#direction-item">scroll item locomotivescroll</span>
          </div>
          <div className={`${banner.item} ${banner.b3}`} data-scroll data-scroll-speed="9" data-scroll-delay="0.15" >
            <span className={banner.direction}>scroll item locomotivescroll</span>
          </div>
          <div className={`${banner.item} ${banner.b4}`}>
            <span className={banner.direction} data-scroll data-scroll-speed="14" data-scroll-direction="horizontal" data-scroll-target="#direction-item">scroll item locomotivescroll</span>
          </div>
          <div className={`${banner.item} ${banner.b5}`}>
            <span className={banner.direction} data-scroll data-scroll-speed="9" data-scroll-delay="0.25" data-scroll-direction="horizontal" data-scroll-target="#direction-item">scroll item locomotivescroll</span>
          </div>
          <div className={`${banner.item} ${banner.b6}`} data-scroll data-scroll-speed="-7" data-scroll-delay="0.5">
            <span className={banner.direction}>scroll item locomotivescroll</span>
          </div>
        </div>
      </Content>
    </Section>
  );
}
