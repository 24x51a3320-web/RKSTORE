import React, { useState } from 'react'

const Handler1 = () => {
    const [name, setName] = useState("")

    return (
        <div className="card-item">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', textAlign: 'left' }}>
                <h3 style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    👤 Store Personalization
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', minHeight: '40px' }}>
                    Enter your name to personalize your premium shopping session experience.
                </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%', marginTop: 'auto' }}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name..."
                    className="input-field"
                />
                <div style={{
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: name ? 'var(--primary)' : 'var(--text-secondary)',
                    textAlign: 'center',
                    padding: '8px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--primary-glow)',
                    border: '1px dashed var(--border)'
                }}>
                    {name ? `Welcome back, ${name}! 👋` : "Viewing store as Guest"}
                </div>
            </div>
        </div>
    )
}

export default Handler1