import { Logo } from '../atoms/Logo'
import React from 'react'

const SideBarLink = ({ href, children, style = {} }) => {
  const isActive = href === '/overview'
  if (isActive) {
    return (
      <a
        draggable={false}
        style={{
          padding: '20px',
          paddingLeft: 'var(--side-bar-margin-left)',
          display: 'flex',
          borderTopRightRadius: '5px',
          borderBottomRightRadius: '5px',
          background: 'var(--medium-blue)',
          color: 'white',
          marginRight: '-5px',
          boxShadow: 'var(--box-shadow-bottom-and-right)',
          ...style,
        }}
        href={href}
      >
        {children}
      </a>
    )
  }
  return (
    <a
      draggable={false}
      style={{
        padding: '20px',
        paddingLeft: 'var(--side-bar-margin-left)',
        display: 'flex',
        color: 'var(--text-light-gray)',
        ...style,
      }}
      href={href}
    >
      {children}
    </a>
  )
}

export const SideBar = () => (
  <div
    style={{
      background: 'white',
      boxShadow: 'var(--box-shadow-right)',
      position: 'fixed',
      width: 'var(--side-bar-width)',
      top: 0,
      bottom: 0,
    }}
  >
    <div
      style={{
        height: 'var(--header-height)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', height: '30px' }}>
        <button
          aria-label="Toggle Menu"
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginLeft: 'calc(var(--side-bar-margin-left) - 15px)', // subtract padding
            padding: '15px',
          }}
          onClick={() => {
            alert('toggle menu')
          }}
        >
          <span
            style={{
              display: 'inline-block',
              width: '20px',
              height: '2px',
              background: 'var(--text-light-gray)',
              marginBottom: '5px',
            }}
          ></span>
          <span
            style={{
              display: 'inline-block',
              width: '20px',
              height: '2px',
              background: 'var(--text-light-gray)',
              marginBottom: '5px',
            }}
          ></span>
          <span
            style={{
              display: 'inline-block',
              width: '20px',
              height: '2px',
              background: 'var(--text-light-gray)',
            }}
          ></span>
        </button>
        <Logo style={{ marginLeft: '10px' }} />
      </div>
    </div>
    <hr />
    <nav
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <SideBarLink href="/overview" style={{ marginTop: '20px' }}>
        <i className="el-icon-menu"></i>
        <span style={{ marginLeft: 'var(--side-bar-margin-left)' }}>
          Overview
        </span>
      </SideBarLink>
      <SideBarLink href="/bank-accounts">
        <i className="el-icon-menu"></i>
        <span style={{ marginLeft: 'var(--side-bar-margin-left)' }}>
          Bank accounts
        </span>
      </SideBarLink>
      <SideBarLink href="/tradefx">
        <i className="el-icon-menu"></i>
        <span style={{ marginLeft: 'var(--side-bar-margin-left)' }}>
          TradeFx
        </span>
      </SideBarLink>
      <SideBarLink href="/transactions">
        <i className="el-icon-menu"></i>
        <span style={{ marginLeft: 'var(--side-bar-margin-left)' }}>
          Transactions
        </span>
      </SideBarLink>
      <SideBarLink
        href="/settings"
        style={{
          marginTop: 'auto',
          transform: 'translateY(-100px)', // TODO Why?
        }}
      >
        <i className="el-icon-setting"></i>
        <span style={{ marginLeft: '10px' }}>Settings</span>
      </SideBarLink>
    </nav>
  </div>
)
