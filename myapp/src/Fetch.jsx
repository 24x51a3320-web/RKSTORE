import React, { useState, useEffect } from 'react'

const Fetch = () => {
    const [data, setdata] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        fetch("https://fakestoreapi.com/products")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch products")
                }
                return res.json()
            })
            .then((dat) => {
                setdata(dat)
                setLoading(false)
            })
            .catch((err) => {
                console.error("something is wrong in api", err)
                setError(err.message)
                setLoading(false)
            })
    }, [])

    const renderStars = (rate) => {
        const roundedRate = Math.round(rate)
        return Array.from({ length: 5 }, (_, i) => (
            <span key={i} style={{ color: i < roundedRate ? 'var(--warning)' : '#e2e8f0' }}>★</span>
        ))
    }

    if (error) {
        return (
            <div className="card-item" style={{ textAlign: 'center', padding: '40px', borderColor: '#ef4444', margin: '40px 0' }}>
                <h3 style={{ color: '#ef4444', marginBottom: '8px' }}>Unable to Load Products</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>{error}</p>
                <button className="btn-primary" onClick={() => window.location.reload()}>
                    Retry
                </button>
            </div>
        )
    }

    return (
        <div className="products-container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
                <div style={{ textAlign: 'left' }}>
                    <h2 style={{ fontSize: '1.75rem', fontWeight: 800 }}>Explore Collection</h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Premium products curated just for you</p>
                </div>
                <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--primary)', padding: '6px 12px', borderRadius: '12px', backgroundColor: 'var(--primary-glow)', border: '1px solid var(--border)' }}>
                    {data.length} Items Available
                </div>
            </div>

            {loading ? (
                <div className="products-grid">
                    {Array.from({ length: 8 }).map((_, idx) => (
                        <div key={idx} className="skeleton-card">
                            <div className="skeleton-image skeleton-anim"></div>
                            <div className="skeleton-text-sm skeleton-anim"></div>
                            <div className="skeleton-text-lg skeleton-anim"></div>
                            <div className="skeleton-text-md skeleton-anim"></div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 'auto' }}>
                                <div className="skeleton-text-sm skeleton-anim" style={{ width: '30%' }}></div>
                                <div className="skeleton-text-sm skeleton-anim" style={{ width: '25%' }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="products-grid">
                    {data.map((product) => (
                        <div key={product.id} className="product-card">
                            <div className="product-img-wrapper">
                                <img src={product.image} alt={product.title} className="product-img" loading="lazy" />
                                {product.rating.rate > 4.5 && (
                                    <span className="product-badge">Best Seller</span>
                                )}
                            </div>
                            <div className="product-info">
                                <span className="product-category">{product.category}</span>
                                <h3 className="product-title" title={product.title}>{product.title}</h3>
                                <div className="product-rating">
                                    <div className="star-rating">
                                        {renderStars(product.rating.rate)}
                                    </div>
                                    <span style={{ fontSize: '0.8rem', marginLeft: '4px' }}>({product.rating.count} reviews)</span>
                                </div>
                                <div className="product-price-row">
                                    <span className="product-price">${product.price.toFixed(2)}</span>
                                    <button className="product-btn" onClick={() => alert(`Added "${product.title}" to cart!`)}>
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Fetch