import React from 'react';

export function Section({children, ...props}) {
  return (
    <section {...props}>{children}</section>
  )
}
