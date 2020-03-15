import React from 'react'

export const ShadowContainer = ({ children, style = {} }) => (
  <div
    style={{
      boxShadow: 'var(--box-shadow-around)',
      background: 'white',
      borderRadius: '3px',
      padding: '20px',
      height: '100%',
      ...style,
    }}
  >
    {children}
  </div>
)
