import React, { useState } from 'react';

export function LoadApp() {
  const [item, setItem] = useState(0);

  const getItemsLenght = () => {
    return Array.from(document.getElementsByClassName('preload')).length;
  }

  // const loadItems = (event) => {
  //   const target = event.target;
  //   setItem((prev) => prev + 1);
  // }

  if (item === getItemsLenght()) {
    console.log('Все ок!');
  }

  return (
    <></>
  )
}
