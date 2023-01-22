import React, { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { Header } from "./ui/Header";
import { Main } from "./ui/Main";
import { Footer } from "./ui/Footer";
import "./App.scss";
import "locomotive-scroll/src/locomotive-scroll.scss";

function App() {
  const ref = useRef(null);

  const options = {
    smooth: true,
    smartphone: true
  } 

  return (
    <div className="App">
      <Header />
      <LocomotiveScrollProvider options={options} containerRef={ref}>
          <div data-scroll-container ref={ref}>
            <Main />
            <Footer />
          </div>
      </LocomotiveScrollProvider>
    </div>
  );
}

export default App;
