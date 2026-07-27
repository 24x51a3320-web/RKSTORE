import React from 'react'

const Handler = () => {
    function claimPromo() {
        alert("🎉 Code ACTIVATED! Use code 'ANTIGRAVITY20' for 20% off at checkout!")
    }

    return (
        <div className="card-item">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', textAlign: 'left' }}>
                <h3 style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    🏷️ Premium Promo
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', minHeight: '40px' }}>
                    Activate our exclusive weekly coupon to get massive discounts on all orders.
                </p>
            </div>
            <button onClick={claimPromo} className="btn-primary" style={{ width: '100%', marginTop: 'auto' }}>
                Claim Discount Code
            </button>
        </div>
    )
}

export default Handler