import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import { gsap, Power3, Power2, Expo } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Navigation, Pagination, EffectFade } from "swiper";
import { Loading } from "../../library/Loading";
import { ButtonNavigation } from "../ButtonNavigation";
import { ParallaxJs } from "../../library/ParallaxJs";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "./styles.scss";

gsap.registerPlugin(ScrollTrigger);

export function Slider({ juices = [], loading }) {
  const [swiper, setSwiper] = useState();
  const buttonPrevRef = useRef();
  const buttonNextRef = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".slide-preview-title.--i-1", {
        delay: 1,
        duration: 1,
        opacity: 0,
        x: 20,
        ease: Power3.easeInOut,
        scrollTrigger: {
          trigger: ".slide-preview-title.--i-1",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".slide-preview-title.--i-2", {
        delay: 1.3,
        duration: 1.3,
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: ".slide-preview-title.--i-2",
          toggleActions: "play none none none",
        },
      });
  
      gsap.from(".swiper-pagination", {
        delay: 1.5,
        duration: 1.3,
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: ".swiper-pagination",
          toggleActions: "play none none none",
        },
      });
  
      gsap.from(".slide-link", {
        delay: 1.4,
        duration: 1.3,
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: ".slide-link",
          toggleActions: "play none none none",
        },
      });
  
      gsap.from(".slide-description.--i-1", {
        delay: 1.4,
        duration: 1.3,
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: ".slide-description.--i-1",
          toggleActions: "play none none none",
        },
      });
  
      gsap.from(".slide-description.--i-2", {
        delay: 1.5,
        duration: 1.3,
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: ".slide-description.--i-2",
          toggleActions: "play none none none",
        },
      });

      gsap.set(".slide-preview-image", { 
        yPercent: -22, 
        xPercent: -50 
      });

      gsap.timeline().from(".slide-preview-image", {
        delay: 2.2,
        duration: 1,
        opacity: 0,
        y: -400,
        ease: "power2.inOut"
      })
      .to(".slide-preview-image", {
        repeat: -1,
        yoyo: true,
        yPercent: -32,
        duration: 2,
        ease: "power2.inOut"
      });
  
      gsap.from(".leaf.--i-1", {
        delay: 2,
        duration: 1,
        opacity: 0,
        y: -400,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: ".leaf.--i-1",
          toggleActions: "play none none none",
        },
      })
  
      gsap.from(".leaf.--i-2", {
        delay: 2.1,
        duration: 1,
        opacity: 0,
        y: -500,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: ".leaf.--i-2",
          toggleActions: "play none none none",
        },
      })
  
      gsap.from(".leaf.--i-3", {
        delay: 2.2,
        duration: 1,
        opacity: 0,
        y: -600,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: ".leaf.--i-3",
          toggleActions: "play none none none",
        },
      })
  
      gsap.from(".leaf.--i-4", {
        delay: 2.3,
        opacity: 0,
        duration: 1,
        y: -700,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: ".leaf.--i-4",
          toggleActions: "play none none none",
        },
      })
  
      gsap.from(".leaf.--i-5", {
        delay: 2.4,
        duration: 1,
        opacity: 0,
        y: -800,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: ".leaf.--i-5",
          toggleActions: "play none none none",
        },
      })
  
      gsap.from(".custom-button-prev", {
        delay: 2.4,
        opacity: 0,
        x: -40,
        ease: Power3.easeInOut,
        scrollTrigger: {
          trigger: ".custom-button-prev",
          toggleActions: "play none none none",
        },
      })
  
      gsap.from(".custom-button-next", {
        delay: 2.4,
        opacity: 0,
        x: 40,
        ease: Power3.easeInOut,
        scrollTrigger: {
          trigger: ".custom-button-next",
          toggleActions: "play none none none",
        },
      })
    })
  
    return () => ctx.revert();
  });

  useEffect(() => {
    if (swiper) {
      swiper.params.navigation.prevEl = buttonPrevRef.current;
      swiper.params.navigation.nextEl = buttonNextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiper]);

  const onSlideChangeAnimation = () => {
    gsap.from(".swiper-pagination", {
      delay: 1,
      duration: 1,
      opacity: 0,
      y: -20,
      ease: Expo.easeInOut,
      scrollTrigger: {
        trigger: ".swiper-pagination",
        toggleActions: "play none none none",
      },
    });

    gsap.from(".slide-preview-image", {
      delay: 1.3,
      duration: 0.8,
      opacity: 0,
      scale: 0.6,
      ease: Expo.easeInOut,
      scrollTrigger: {
        trigger: ".slide-preview-image",
        toggleActions: "play none none none",
      },
    });

    gsap.from(".slide-preview-title.--i-1", {
      opacity: 0,
      duration: 1,
      x: -70,
      ease: Power2.easeInOut,
      scrollTrigger: {
        trigger: ".slide-preview-title.--i-1",
        toggleActions: "play none none none",
      },
    });

    gsap.from(".slide-preview-title.--i-2", {
      delay: 0.5,
      direction: 1,
      opacity: 0,
      x: 40,
      ease: Power2.easeInOut,
      scrollTrigger: {
        trigger: ".slide-preview-title.--i-2",
        toggleActions: "play none none none",
      },
    });

    gsap.from(".slide-description.--i-1", {
      delay: 0.7,
      direction: 1,
      opacity: 0,
      y: 30,
      ease: Power2.easeIn,
      scrollTrigger: {
        trigger: ".slide-description.--i-1",
        toggleActions: "play none none none",
      },
    });

    gsap.from(".slide-description.--i-2", {
      delay: 0.8,
      direction: 1,
      opacity: 0,
      y: 40,
      ease: Power2.easeIn,
      scrollTrigger: {
        trigger: ".slide-description.--i-2",
        toggleActions: "play none none none",
      },
    });

    gsap.from(".slide-link", {
      delay: 0.9,
      direction: 1,
      opacity: 0,
      y: -40,
      ease: Power2.easeInOut,
      scrollTrigger: {
        trigger: ".slide-link",
        toggleActions: "play none none none",
      },
    });
  }

  const blockingSwipe = () => {
    buttonPrevRef.current.disabled = true;
    buttonNextRef.current.disabled = true;
    setTimeout(() => {
      buttonPrevRef.current.disabled = false;
      buttonNextRef.current.disabled = false;
    }, 1500);
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Swiper
            onSwiper={setSwiper}
            allowTouchMove={false}
            effect={"fade"}
            onSlideChange={() => onSlideChangeAnimation()}
            navigation={{
              clickable: true,
              prevEl: buttonPrevRef?.current,
              nextEl: buttonNextRef?.current,
            }}
            pagination={{
              type: "fraction",
              clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination]}
            className="slider">
              {juices.map((item, index) => (
                <SwiperSlide className="slider-slide" key={index}>
                  <div className="slide-content">
                    <img src={item.url.src} alt={item.url.alt} className="slide-preview-image"/>
                    <div className="slide-desc-box">
                      <h4 className="slide-preview-title --i-2">{item.title[0]}</h4>
                      <h1 className="slide-preview-title --i-1">{item.title[1]}</h1>
                      <Link to="/catallog" className="slide-link"><span>{item.buttonText}</span></Link>
                      <div className="slide-desc-wrapper">
                        <h2 className="slide-description --i-1">Your <span>healthy</span> life starts here with us.</h2>
                        <p className="slide-description --i-2">{item.description[1]}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
          <ButtonNavigation
            buttonRef={buttonPrevRef}
            nameClass="custom-button-prev"
            nameSvg="svg-prev"
            namePath="slider-arrow-button-prev"
            click={blockingSwipe}
          />
          <ButtonNavigation
            buttonRef={buttonNextRef}
            nameClass="custom-button-next"
            nameSvg="svg-next"
            namePath="slider-arrow-button-next"
            click={blockingSwipe}
          />
          <ParallaxJs />
        </>
      )}
    </>
  );
}
