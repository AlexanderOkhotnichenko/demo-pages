import React, { useRef, useEffect } from 'react';
import customCursor from "../../styles/custom-cursor/custom-cursor.module.scss";

export function CustomCursor() {
  const innerCursorRef = useRef();
  const outorCursorRef = useRef();
  
  useEffect(() => {
    const links = Array.from(document.querySelectorAll("a"));

    const overCursor = () => innerCursorRef.current.classList.add(`${customCursor.grow}`);
    const leaveCursor = () => innerCursorRef.current.classList.remove(`${customCursor.grow}`);
    
    const moveCursor = (event) => {
      let x = event.clientX;
      let y = event.clientY;
      
      innerCursorRef.current.style.left = `${x}px`;
      innerCursorRef.current.style.top = `${y}px`;
      outorCursorRef.current.style.left = `${x}px`;
      outorCursorRef.current.style.top = `${y}px`;
    }

    links.forEach((link) => {
      link.addEventListener("mouseover", overCursor);
      link.addEventListener("mouseleave", leaveCursor);
    });
    document.addEventListener('mousemove', moveCursor);
  }, []);

  return (
    <>
      <div ref={innerCursorRef} className={customCursor.inner_cursor}></div>
      <div ref={outorCursorRef} className={customCursor.outor_cursor}></div>
    </>
  )
}
