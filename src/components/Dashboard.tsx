import { Link, useNavigate } from 'react-router-dom'

interface DashboardProps {
  onLogout: () => void
}

export default function Dashboard({ onLogout }: DashboardProps) {
  const navigate = useNavigate()

  const handleLogout = () => {
    onLogout()
    navigate('/login')
  }

  return (
    <div className="dashboard">
      <nav>
        <h1>MobiusLab</h1>
        <div>
          <Link to="/downloads">Downloads</Link>
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>
      </nav>
      <main>
        <h2>Welcome to MobiusLab</h2>
        <p>Your personal workspace</p>
      </main>
    </div>
  )
}
