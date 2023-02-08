import React from 'react';
import { Section } from '../../../Components/Section';
import { Content } from '../../../Components/Content';
import finish from "../../../styles/demo-four/finish.module.scss";
import "./locostyles.scss";

export function Finish() {
  return (
    <Section className={finish.finish} data-scroll-section>
      <Content className={finish.finish__content}>
        <div className={finish.left}>
          <h2 className={`${finish.subtitle} scroll-subtitle`} data-scroll data-scroll-speed="0.5" data-scroll-offset="50">600ds.</h2>
          <h1 className={`${finish.title} scroll-title`} data-scroll data-scroll-offset="400">Crafted by designer for designers</h1>
          <p className={`${finish.text} scroll-text`} data-scroll data-scroll-offset="300">600ds is an add-on to speed-up your worflow when working on creative projects.</p>
          <div className={finish.plugin}>
            <h4 className={`${finish.plugin__title} scroll-plugin-title`} data-scroll data-scroll-offset="300">plug <span>&#46;</span> in <span className={`${finish.line} line`}></span></h4>
            <p className={`${finish.plugin__text} scroll-plugin-text`} data-scroll data-scroll-offset="300">We are still build a lite & smooth add-on to simplify your workflow</p>
            <div className={finish.stack}>
              <div className='scroll-stack-el' data-scroll data-scroll-offset="100">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.871 16.871">
                  <path d="M6.847,5.772H6.822c-0.127,0.511-0.254,1.16-0.395,1.657L5.917,9.25h1.898L7.28,7.429
                    C7.128,6.919,6.975,6.283,6.847,5.772z"/>
                  <path d="M15.837,0H1.033C0.462,0,0,0.462,0,1.033v14.805c0,0.57,0.462,1.033,1.033,1.033h14.805
                    c0.57,0,1.033-0.463,1.033-1.033V1.033C16.871,0.463,16.408,0,15.837,0z M8.758,12.905l-0.663-2.203H5.638l-0.612,2.203H3.014
                    l2.624-8.583h2.546l2.663,8.583H8.758z M13.793,12.905h-1.937V6.678h1.937V12.905z M12.813,5.914
                    c-0.611,0-1.019-0.434-1.007-0.969c-0.012-0.561,0.396-0.979,1.021-0.979c0.623,0,1.018,0.419,1.03,0.979
                    C13.857,5.48,13.45,5.914,12.813,5.914z"/>
                </svg>
              </div>
              <div className='scroll-stack-el' data-scroll data-scroll-offset="100">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.871 16.871">
                  <path d="M6.847,5.772H6.822c-0.127,0.511-0.254,1.16-0.395,1.657L5.917,9.25h1.898L7.28,7.429
                    C7.128,6.919,6.975,6.283,6.847,5.772z"/>
                  <path d="M15.837,0H1.033C0.462,0,0,0.462,0,1.033v14.805c0,0.57,0.462,1.033,1.033,1.033h14.805
                    c0.57,0,1.033-0.463,1.033-1.033V1.033C16.871,0.463,16.408,0,15.837,0z M8.758,12.905l-0.663-2.203H5.638l-0.612,2.203H3.014
                    l2.624-8.583h2.546l2.663,8.583H8.758z M13.793,12.905h-1.937V6.678h1.937V12.905z M12.813,5.914
                    c-0.611,0-1.019-0.434-1.007-0.969c-0.012-0.561,0.396-0.979,1.021-0.979c0.623,0,1.018,0.419,1.03,0.979
                    C13.857,5.48,13.45,5.914,12.813,5.914z"/>
                </svg>
              </div>
              <div className='scroll-stack-el' data-scroll data-scroll-offset="100">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.871 16.871">
                  <path d="M6.847,5.772H6.822c-0.127,0.511-0.254,1.16-0.395,1.657L5.917,9.25h1.898L7.28,7.429
                    C7.128,6.919,6.975,6.283,6.847,5.772z"/>
                  <path d="M15.837,0H1.033C0.462,0,0,0.462,0,1.033v14.805c0,0.57,0.462,1.033,1.033,1.033h14.805
                    c0.57,0,1.033-0.463,1.033-1.033V1.033C16.871,0.463,16.408,0,15.837,0z M8.758,12.905l-0.663-2.203H5.638l-0.612,2.203H3.014
                    l2.624-8.583h2.546l2.663,8.583H8.758z M13.793,12.905h-1.937V6.678h1.937V12.905z M12.813,5.914
                    c-0.611,0-1.019-0.434-1.007-0.969c-0.012-0.561,0.396-0.979,1.021-0.979c0.623,0,1.018,0.419,1.03,0.979
                    C13.857,5.48,13.45,5.914,12.813,5.914z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className={finish.right}>
          <div className={`${finish.images_content} scroll-image-content`} data-scroll data-scroll-offset="100">
            <div className={`${finish.image_item} ${finish.one} scroll-item`}>
              <img src="./img/demo-4/finish/woman.webp" alt="Woman" />
            </div>
            <div className={`${finish.image_item} ${finish.two} scroll-item`}>
              <img src="./img/demo-4/finish/woman.webp" alt="Woman" />
            </div>
            <div className={`${finish.image_item} ${finish.three} scroll-item`}>
              <img src="./img/demo-4/finish/woman.webp" alt="Woman" />
            </div>
          </div>
        </div>
      </Content>
    </Section>
  )
}