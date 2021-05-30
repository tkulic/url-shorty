import React from 'react'

export default function Nav(props) {
    return (
        <nav className={`nav-header ${props.isOpen ? "visible" : ""}`}>
            <ul>
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Resources</a></li>
            </ul>
            <div className="auth-container">
                <button className="button-secondary">Login</button>
                <button className="button-primary">Sign up</button>
            </div>
        </nav>
    )
}
