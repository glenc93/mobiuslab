import { Link, useNavigate } from 'react-router-dom'

interface HeaderProps {
  onLogout: () => void
  user: any
}

export default function Header({ onLogout, user }: HeaderProps) {
  const navigate = useNavigate()

  const handleLogout = () => {
    onLogout()
    navigate('/login')
  }

  return (
    <nav>
      <Link to="/dashboard"><h1>MobiusLab</h1></Link>
      <div>
        <Link to="/resources">Resources</Link>
        <button className="logout-btn">
          {user?.user_metadata?.full_name?.[0]?.toUpperCase() || user?.email?.[0]?.toUpperCase() || 'U'}
          <div className="profile-dropdown">
            <div className="dropdown-user-info">
              {user?.user_metadata?.full_name || user?.email}
            </div>
            <Link to="/account">Account</Link>
            <div onClick={handleLogout} className="dropdown-logout">Logout</div>
          </div>
        </button>
      </div>
    </nav>
  )
}
