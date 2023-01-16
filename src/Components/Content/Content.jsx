import React from 'react'

export function Content({ children, ...props }) {
  return (
    <div {...props}>{children}</div>
  )
}