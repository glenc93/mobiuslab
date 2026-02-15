import Header from '../components/Header'

interface DashboardProps {
  onLogout: () => void
  user: any
}

export default function Dashboard({ onLogout, user }: DashboardProps) {
  return (
    <div className="dashboard">
      <Header onLogout={onLogout} user={user} />
      <main>
        <h2>Welcome to MobiusLab</h2>
        <p>Your personal workspace</p>
      </main>
    </div>
  )
}
