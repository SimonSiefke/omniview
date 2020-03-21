import { useState, useEffect } from 'react'
import * as api from '../api/api'

export const User = ({ children }) => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    ;(async () => {
      setUser(await api.getUser())
    })()
  }, [])
  return children({ user })
}
