import React, { useState, useRef } from "react";

import { useLocoScroll } from "../../hooks/useLocoScroll";
import { useGSAPAnimation } from "./useGSAPAnimation";
import { Loading } from "../../library/Loading";
import { randomNumber } from "../../Components/randomNumber";
import { CustomCursor } from "../../Components/CustomCursor";
import { Home } from "./Home";
import { About } from "./About";
import { Banner } from "./Banner";
import { Finish } from "./Finish/Finish";
import demoFour from "../../styles/demo-four/home.module.scss";

export function DemoFour() {
  const [loading, setLoading] = useState(true);
  const ref = useRef(null);

  useLocoScroll(!loading);
  useGSAPAnimation();

  setTimeout(() => {
    setLoading(false);
  }, `${randomNumber(1, 5)}000`);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <CustomCursor />
          <div
            className={demoFour.demo_four}
            data-scroll-container
            id="main-section"
            ref={ref}
          >
            <div className={demoFour.demo_four__container}>
              <div className={demoFour.demo_four__overlay}>
                <span></span>
              </div>
              <Home />
              <About />
              <Banner />
              <Finish />
            </div>
          </div>
        </>
      )}
    </>
  );
}
