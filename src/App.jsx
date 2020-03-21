import React from 'react'
import { LayoutDashboard } from './components/LayoutDashboard'
import { PageOverview } from './components/PageOverview'
import { User } from './components/User'

export const App = () => (
  <User>
    {({ user }) => (
      <LayoutDashboard user={user}>
        <PageOverview user={user} />
      </LayoutDashboard>
    )}
  </User>
)
