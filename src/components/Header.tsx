import React from 'react';

const Header: React.FC = () => (
    <header className="app-header">
        <div className="header-content header-left">
            <span className="header-icon" role="img" aria-label="calendar">🗓️</span>
            <div>
                <h1>PlanPal Board</h1>
            </div>
        </div>
        <nav className="nav-links">
            <a href="#features">Features</a>
            <a href="#how-it-works">How it works</a>
            <a href="#demo">Demo</a>
        </nav>
    </header>
);

export default Header;