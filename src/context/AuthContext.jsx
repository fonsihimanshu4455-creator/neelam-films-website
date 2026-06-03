import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

// Hard-coded credentials (no backend yet)
const ADMIN_USER = 'himanshu'
const ADMIN_PASS = 'neelam@2026'
const AUTH_KEY = 'neelam_admin_auth'

export function AuthProvider({ children }) {
  const [isAuthed, setIsAuthed] = useState(() => {
    try {
      return localStorage.getItem(AUTH_KEY) === 'true'
    } catch {
      return false
    }
  })

  const login = (username, password) => {
    if (username === ADMIN_USER && password === ADMIN_PASS) {
      setIsAuthed(true)
      try {
        localStorage.setItem(AUTH_KEY, 'true')
      } catch {
        // ignore
      }
      return true
    }
    return false
  }

  const logout = () => {
    setIsAuthed(false)
    try {
      localStorage.removeItem(AUTH_KEY)
    } catch {
      // ignore
    }
  }

  return (
    <AuthContext.Provider value={{ isAuthed, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider')
  return ctx
}

export default AuthContext
