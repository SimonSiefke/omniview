import React from 'react'

export const Header = ({ user }) => {
  const initials =
    user === null ? '' : `${user.firstName[0]}${user.lastName[0]}`.toUpperCase()
  return (
    <header
      style={{
        background: 'white',
        height: 'var(--header-height)',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '0 var(--gutter-width)',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <button
          style={{
            background: 'var(--medium-blue)',
            color: 'white',
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
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button
            aria-label="Search"
            style={{
              color: 'var(--text-light-gray)',
              fontSize: '23px',
              border: 'none',
              height: '40px',
              width: '40px',
            }}
            title="Search"
          >
            <i className="el-icon-search"></i>
          </button>
          <button
            aria-label="Help"
            style={{
              color: 'var(--text-light-gray)',
              fontSize: '23px',
              border: 'none',
              marginLeft: '20px',
              height: '40px',
              width: '40px',
            }}
            title="Help"
          >
            <i className="el-icon-information"></i>
          </button>
          <button
            aria-label="Notifications"
            style={{
              color: 'var(--text-light-gray)',
              fontSize: '23px',
              border: 'none',
              marginLeft: '20px',
              height: '40px',
              width: '40px',
            }}
            title="Notifications"
          >
            <i className="el-icon-message"></i>
          </button>
          <button
            aria-label="Your account"
            style={{
              color: 'var(--text-light-gray)',
              fontSize: '20px',
              border: 'none',
              marginLeft: '20px',
              height: '55px',
              width: '55px',
              borderRadius: '50%',
              background: 'var(--background-lighter-gray)',
            }}
            title="Your Account"
          >
            {initials}
          </button>
        </div>
      </div>
    </header>
  )
}
