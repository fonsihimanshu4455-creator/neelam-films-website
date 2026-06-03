import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

/**
 * Guards admin routes. Redirects to /admin (login) when not authenticated.
 */
export default function ProtectedRoute({ children }) {
  const { isAuthed } = useAuth()
  const location = useLocation()

  if (!isAuthed) {
    return <Navigate to="/admin" state={{ from: location }} replace />
  }
  return children
}
