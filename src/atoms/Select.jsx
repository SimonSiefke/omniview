import React from 'react'
import selectArrows from './select_arrows.png'

export const Select = ({ ariaLabel, children, defaultValue, onInput }) => (
  <select
    aria-label={ariaLabel}
    defaultValue={defaultValue}
    onInput={event => {
      // @ts-ignore
      onInput(event.target.value)
    }}
    style={{
      background: 'var(--background-blue-gray)',
      color: 'var(--text-blue)',
      padding: '8px',
      paddingRight: 'calc(8px + 10px)',
      marginRight: '14px',
      appearance: 'none',
      MozAppearance: 'none', // TODO why doesn't autoprefixer do this
      backgroundImage: `url(${selectArrows})`,
      backgroundSize: '25px 25px',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: `calc(100% - 0px)`,
    }}
  >
    {children}
  </select>
)
