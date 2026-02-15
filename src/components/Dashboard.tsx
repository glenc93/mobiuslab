import { Link } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div className="dashboard">
      <nav>
        <h1>MobiusLab</h1>
        <Link to="/downloads">Downloads</Link>
      </nav>
      <main>
        <h2>Welcome to MobiusLab</h2>
        <p>Your personal workspace</p>
      </main>
    </div>
  )
}
