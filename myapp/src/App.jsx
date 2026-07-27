import React, { useState } from 'react'
import './App.css'
import Handler from './Handler'
import Handler1 from './Handler1'
import Conditional from './Conditional'
import Darkmode from './Darkmode'
import Fetch from './Fetch'

function App() {
  const [dark, setDark] = useState(false)

  return (
    <div className={`card ${dark ? 'dark' : ''}`}>
      {/* Premium Header/Navigation */}
      <header className="header-nav">
        <div className="brand">
          <span style={{ fontSize: '1.8rem' }}>🛸</span>
          <span className="brand-logo">RKSTORES Store</span>
        </div>
        <Darkmode dark={dark} setDark={setDark} />
      </header>

      {/* Hero / Welcome Intro */}
      <div style={{ textAlign: 'left', marginBottom: '32px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '8px' }}>
          Discover Limitless <span style={{ color: 'var(--primary)' }}>Possibilities</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px' }}>
          Welcome to the next generation of e-commerce. Explore trending products, claim hourly rewards, and unlock custom content gates.
        </p>
      </div>

      {/* Dashboard Grid of Widgets */}
      <div className="dashboard-grid">
        <Handler />
        <Handler1 />
        <Conditional />
      </div>

      {/* Main E-Store Catalog */}
      <main style={{ marginBottom: '60px' }}>
        <Fetch />
      </main>

      {/* Premium Footer */}
      <footer style={{
        marginTop: 'auto',
        padding: '24px 0',
        borderTop: '1px solid var(--border)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '12px',
        fontSize: '0.9rem',
        color: 'var(--text-secondary)'
      }}>
        <div>© 2026 Antigravity Store. All rights reserved.</div>
        <div style={{ display: 'flex', gap: '16px' }}>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</a>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Service</a>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Help Center</a>
        </div>
      </footer>
    </div>
  )
}

export default App
