import React, { useEffect, useRef } from 'react';
import Parallax from 'parallax-js';
import "./parallax-styles.scss";

export function ParallaxJs({loadItem}) {
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
      <img src="./img/home_page/leaf_1.png" alt="Leaf" className="leaf --i-1 preload" data-depth="0.3" onLoad={loadItem}/>
      <img src="./img/home_page/leaf_2.png" alt="Leaf" className="leaf --i-2 preload" data-depth="-0.7" onLoad={loadItem}/>
      <img src="./img/home_page/leaf_3.png" alt="Leaf" className="leaf --i-3 preload" data-depth="0.65" onLoad={loadItem}/>
      <img src="./img/home_page/leaf_4.png" alt="Leaf" className="leaf --i-4 preload" data-depth="0.15" onLoad={loadItem}/>
      <img src="./img/home_page/leaf_5.png" alt="Leaf" className="leaf --i-5 preload" data-depth="-0.45" onLoad={loadItem}/>
    </div>
  )
}
