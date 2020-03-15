import React from 'react'
import src from './logo.png'

export const Logo = ({ style }) => (
  <img
    src={src}
    alt="Omniview"
    draggable={false}
    style={{
      height: '100%',

      ...style,
    }}
  />
)
