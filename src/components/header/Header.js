import React, { useState } from 'react'
import Nav from './Nav'

import MenuOpen from '../../images/MenuOpen'
import Logo from '../../images/Logo'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header>
            <div className="flex-container">
                <Logo />
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="menu-open"
                >
                    <MenuOpen />
                </button>
            </div>

            <Nav isOpen={isMenuOpen} />
        </header>
    )
}
