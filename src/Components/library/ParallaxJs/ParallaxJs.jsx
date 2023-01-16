import React, { useEffect, useRef } from 'react';
import Parallax from 'parallax-js';
import "./parallax-styles.scss";

export function ParallaxJs() {
  const sceneEl = useRef(null);
  
  useEffect(() => {
    setTimeout(() => {
      const parallaxInstance = new Parallax(sceneEl.current);
      parallaxInstance.enable();
      return () => parallaxInstance.disable();
    }, 4000);
  }, []);

  return (
    <div className="parallax-js-content" ref={sceneEl}>
      <img src="./img/demo-1/leaf_1.webp" alt="Leaf" className="leaf --i-1" data-depth="0.3" />
      <img src="./img/demo-1/leaf_2.webp" alt="Leaf" className="leaf --i-2" data-depth="-0.7" />
      <img src="./img/demo-1/leaf_3.webp" alt="Leaf" className="leaf --i-3" data-depth="0.65" />
      <img src="./img/demo-1/leaf_4.webp" alt="Leaf" className="leaf --i-4" data-depth="0.15" />
      <img src="./img/demo-1/leaf_5.webp" alt="Leaf" className="leaf --i-5" data-depth="-0.45" />
    </div>
  )
}
