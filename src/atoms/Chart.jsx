import React from 'react'
import src from './chart.png'

// TODO use a library
export const Chart = ({ transactions }) => {
  return (
    <img
      src={src}
      alt="Transaction chart"
      style={{ maxWidth: '100%', maxHeight: '300px' }}
    />
  )
}
