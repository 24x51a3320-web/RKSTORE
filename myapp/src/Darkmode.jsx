import React from 'react'

const Darkmode = ({ dark, setDark }) => {
    return (
        <button
            onClick={() => setDark(!dark)}
            className="theme-toggle-btn"
            aria-label="Toggle dark mode"
        >
            <span className="theme-toggle-icon">
                {dark ? '☀️' : '🌙'}
            </span>
            <span className="theme-toggle-text">
                {dark ? 'Light Theme' : 'Dark Theme'}
            </span>
        </button>
    )
}

export default Darkmode