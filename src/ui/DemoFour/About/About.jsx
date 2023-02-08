import React from "react";
import { Section } from "../../../Components/Section";
import { Content } from "../../../Components/Content";
import about from "../../../styles/demo-four/about.module.scss";
import "./locostyles.scss";

export function About() {

  return (
    <Section className={about.about} data-scroll-section>
      <Content className={about.about__content}>
        <div className={about.big_circle} data-scroll data-scroll-speed="1"></div>
        <div className={about.small_circle} data-scroll data-scroll-speed="-1.5" data-scroll-direction="horizontal"></div>
        <div className={about.left}>
          <div className={about.left__wrapper}>
            <div className={`${about.left__heroWrapper} scroll-image`} data-scroll data-scroll-speed="1.5" data-scroll-offset="400">
              <svg viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg" data-scroll>
                <rect x="5" y="5" width="290" height="390" rx="145" strokeWidth="10" />
              </svg>
              <img src="./img/demo-4/about/woman.webp" alt="Woman" />
            </div>
            <div className={about.left__socials}>
              <div className={`${about.left__socials__icon} ${about.twitter} scroll-socials`} data-scroll data-scroll-offset="100">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="scroll-twitter">
                  <path d="M21.9999 5.9246C21.2644 6.25051 20.4744 6.47071 19.6437 6.57025C20.4911 6.06289 21.1411 5.25782 21.4477 4.29948C20.6549 4.76984 19.7767 5.1116 18.8422 5.29481C18.0935 4.49855 17.0277 4 15.8474 4C13.5819 4 11.7445 5.8374 11.7445 8.10464C11.7445 8.42526 11.7815 8.73707 11.8502 9.03832C8.43877 8.86656 5.41666 7.23263 3.39252 4.75046C3.04019 5.35823 2.8376 6.06289 2.8376 6.81335C2.8376 8.23677 3.56252 9.4937 4.66267 10.2292C3.98972 10.2072 3.35729 10.0231 2.80413 9.71567V9.76852C2.80413 11.7565 4.21786 13.4151 6.09577 13.7921C5.75049 13.8855 5.38847 13.9348 5.015 13.9348C4.75075 13.9348 4.49267 13.9102 4.24252 13.8626C4.76485 15.4921 6.27987 16.6795 8.07587 16.7112C6.67095 17.8122 4.90137 18.4684 2.97942 18.4684C2.64823 18.4684 2.32144 18.449 1.99994 18.4112C3.8162 19.5765 5.97246 20.2547 8.28903 20.2547C15.8377 20.2547 19.9644 14.0026 19.9644 8.58029C19.9644 8.40412 19.9599 8.2262 19.952 8.05003C20.7536 7.47045 21.4494 6.74905 21.9982 5.92724L21.9999 5.9246Z" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={`${about.left__socials__icon} ${about.linkedin} scroll-socials`} data-scroll data-scroll-offset="100">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" className="scroll-linkedin">
                  <path fill="none" d="M0 0h24v24H0z" strokeWidth="2"/>
                  <path fill="none" d="M12 9.55C12.917 8.613 14.111 8 15.5 8a5.5 5.5 0 0 1 5.5 5.5V21h-2v-7.5a3.5 3.5 0 0 0-7 0V21h-2V8.5h2v1.05zM5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-1 2h2V21H4V8.5z" />
                </svg>
              </div>
              <div className={`${about.left__socials__icon} ${about.instagram} scroll-socials`} data-scroll data-scroll-offset="50">
                <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="scroll-instagram">
                  <path d="M40.4,5.5H35.6c-1.434,0-2.6,1.166-2.6,2.6V12.9c0,1.434,1.166,2.6,2.6,2.6H40.4c1.434,0,2.6-1.166,2.6-2.6V8.1 C43,6.666,41.834,5.5,40.4,5.5z M41,12.9c0,0.331-0.269,0.6-0.6,0.6H35.6c-0.331,0-0.6-0.269-0.6-0.6V8.1 c0-0.331,0.269-0.6,0.6-0.6H40.4c0.331,0,0.6,0.269,0.6,0.6V12.9z" strokeWidth="1"/>
                  <path d="M37.8,0.5H10.2C4.576,0.5,0,5.089,0,10.731V17.5v2v17.77C0,42.911,4.576,47.5,10.2,47.5h27.6 c5.624,0,10.2-4.589,10.2-10.23V19.5v-2v-6.769C48,5.089,43.424,0.5,37.8,0.5z M46,37.27c0,4.538-3.679,8.23-8.2,8.23H10.2 c-4.522,0-8.2-3.692-8.2-8.23V19.5h12.221C11.62,22.043,10,25.584,10,29.5c0,7.72,6.28,14,14,14s14-6.28,14-14 c0-3.916-1.62-7.457-4.221-10H46V37.27z M36,29.5c0,6.617-5.383,12-12,12s-12-5.383-12-12s5.383-12,12-12S36,22.883,36,29.5z M31.174,17.5c-2.101-1.261-4.55-2-7.174-2s-5.073,0.739-7.174,2H2v-6.769C2,6.192,5.679,2.5,10.2,2.5h27.6 c4.521,0,8.2,3.692,8.2,8.231V17.5H31.174z" strokeWidth="1"/>
                  <path d="M15,29.5c0,4.962,4.037,9,9,9s9-4.038,9-9s-4.037-9-9-9S15,24.538,15,29.5z M31,29.5c0,3.86-3.141,7-7,7s-7-3.14-7-7 s3.141-7,7-7S31,25.64,31,29.5z" strokeWidth="1"/>
                </svg>
              </div>
            </div>
          </div>
          <div className={`${about.left__panel} scroll-panel`}>
            <p data-scroll data-scroll-speed="1" data-scroll-delay="0.1" data-scroll-offset="50">Social Media Seriously</p>
            <p data-scroll data-scroll-speed="1" data-scroll-delay="0.6" data-scroll-offset="0">Harm Your Mental Health</p>
          </div>
        </div>
        <div className={about.right}>
          <h1 className={`${about.right__title} scroll-title`} data-scroll data-scroll-speed="1" data-scroll-direction="horizontal" data-scroll-offset="300"><span>About Me.</span></h1>
          <div className={`${about.right__text} scroll-text`} data-scroll data-scroll-offset="300">
            <p>
              <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
              <span>Accusamusimpedit ex, dolore ut veniam nemo, nostrum</span>
              <span>debitis nostrum debitis dolor explicabo</span>
              <span>ducimus vel suscipit voluptates quisquam alias.</span>
              <span>Reprehenderit odio fuga sed consequatur?</span>
            </p>
          </div>
          <div className={about.right__description}>
            <div className={`${about.right__points} scroll-points`} data-scroll data-scroll-offset="200">
              <div className={about.right__circle}></div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis laborum sapiente hic molestiae a</p>
            </div>
            <div className={`${about.right__points} scroll-points`} data-scroll data-scroll-offset="200">
              <div className={about.right__circle}></div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis laborum sapiente hic molestiae a</p>
            </div>
            <div className={`${about.right__points} scroll-points`} data-scroll data-scroll-offset="200">
              <div className={about.right__circle}></div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis laborum sapiente hic molestiae a</p>
            </div>
          </div>
        </div>
      </Content>
    </Section>
  );
}
