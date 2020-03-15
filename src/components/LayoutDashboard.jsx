import React from 'react'
import { SideBar } from './SideBar'
import { Header } from '../atoms/Header'

export const LayoutDashboard = ({ children }) => (
  <div style={{ display: 'flex' }}>
    <SideBar />
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 'var(--side-bar-width)',
      }}
    >
      <Header />
      <main
        style={{
          margin: 'var(--gutter-width) 40px',
        }}
      >
        {children}
      </main>
    </div>
  </div>
)
