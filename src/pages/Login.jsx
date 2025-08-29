import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const handleGuest = () => navigate('/home')

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="elephant">🐘</div>
        <h1>Welcome to JumBah!</h1>
        <p>Log in to start your adventure or continue as a guest.</p>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button className="btn" style={{width:'100%', marginTop:8}}>Log In</button>
        <button className="btn secondary" style={{width:'100%', marginTop:8}} onClick={handleGuest}>Continue as Guest</button>
      </div>
    </div>
  )
}
