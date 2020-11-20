import React from 'react'

export default function Navbar() {
    return (
        <nav>
            <div id="logo">
                <h1>Mjlonir</h1>
            </div>

            <ul className="navigation">
                <li><a href="#About" className="nav-item">About</a></li>
                <li><a href="#Brewery" className="nav-item">Brewery</a></li>
                <li><a href="Events" className="nav-item">Events</a></li>
            </ul>
        </nav>
    )
}
