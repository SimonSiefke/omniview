import React from 'react'

export const Header = () => (
  <header
    style={{
      background: 'white',
      height: 'var(--header-height)',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
    }}
  >
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <button
        style={{
          background: 'var(--medium-blue)',
          color: 'white',
          marginLeft: 'var(--gutter-width)',
          borderRadius: '5px',
          height: '40px',
          padding: '0 24px',
        }}
        onClick={() => {
          alert('added transaction.')
        }}
      >
        New transaction <span aria-hidden>+</span>
      </button>
      <div>
        <button
          aria-label="Search"
          style={{
            color: 'var(--medium-gray)',
            fontSize: '23px',
            border: 'none',
          }}
        >
          <i className="el-icon-search"></i>
        </button>
        <button
          aria-label="Help"
          style={{
            color: 'var(--medium-gray)',
            fontSize: '23px',
            border: 'none',
          }}
        >
          <i className="el-icon-information"></i>
        </button>
        <button
          aria-label="Notifications"
          style={{
            color: 'var(--medium-gray)',
            fontSize: '23px',
            border: 'none',
          }}
        >
          <i className="el-icon-message"></i>
        </button>
        <button aria-label="Your account">CK</button>
      </div>
    </div>
  </header>
)
