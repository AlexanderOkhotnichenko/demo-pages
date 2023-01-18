import React from 'react';
import "../../styles/show-more-button.scss"

export function ShowMoreButton({children, ...props}) {
  return (
    <button {...props}>{children}</button>
  )
}
