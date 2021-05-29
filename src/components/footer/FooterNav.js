import React from 'react'

export default function FooterNav(props) {
    return (
        <div>
            <h4>{props.footerNavTitle}</h4>
            <nav className="nav-footer">
                <ul>
                    {props.footerNavLinks.map(item => (
                        <li>{item}</li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}
