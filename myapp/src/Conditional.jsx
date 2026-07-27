import React, { useState } from 'react'

const Conditional = () => {
    const [age, setAge] = useState(15)

    return (
        <div className="card-item">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', textAlign: 'left' }}>
                <h3 style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    🔞 Age-Gate Verification
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', minHeight: '40px' }}>
                    Verify your age to unlock restricted collections and mature listings.
                </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%', marginTop: 'auto' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Your Age:</label>
                    <input
                        type="number"
                        value={age}
                        onChange={(e) => setAge(Math.max(0, parseInt(e.target.value) || 0))}
                        className="input-field"
                        style={{ width: '80px' }}
                    />
                </div>

                <div style={{
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    padding: '8px 12px',
                    borderRadius: 'var(--radius-sm)',
                    textAlign: 'center',
                    backgroundColor: age >= 18 ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)',
                    color: age >= 18 ? '#10b981' : '#ef4444',
                    border: '1px solid currentColor',
                    transition: 'var(--transition)'
                }}>
                    {age >= 18 ? "🔓 ACCESS GRANTED (18+)" : "🔒 ACCESS RESTRICTED (Under 18)"}
                </div>
            </div>
        </div>
    )
}

export default Conditional
