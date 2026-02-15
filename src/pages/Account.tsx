import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import Header from '../components/Header'

interface AccountProps {
  onLogout: () => void
  user: any
}

export default function Account({ onLogout, user }: AccountProps) {
  const [fullName, setFullName] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (user?.user_metadata?.full_name) {
      setFullName(user.user_metadata.full_name)
    }
  }, [user])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    const { error } = await supabase.auth.updateUser({
      data: { full_name: fullName }
    })

    if (error) {
      setMessage(error.message)
    } else {
      setMessage('Profile updated successfully!')
    }
    setLoading(false)
  }

  return (
    <div className="dashboard">
      <Header onLogout={onLogout} user={user} />
      <main>
        <h2>Account Settings</h2>
        <div className="account-container">
          <div className="account-section">
            <h3>Profile Information</h3>
            <form onSubmit={handleSubmit}>
              {message && (
                <div style={{ 
                  color: message.includes('success') ? '#50fa7b' : '#ff5555', 
                  marginBottom: '1rem' 
                }}>
                  {message}
                </div>
              )}
              <div className="form-group">
                <label>Email</label>
                <input type="email" value={user?.email || ''} disabled />
              </div>
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter your full name"
                />
              </div>
              <button type="submit" disabled={loading}>
                {loading ? 'Saving...' : 'Save Changes'}
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}
