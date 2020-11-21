import React from 'react'
import logo from '../Assets/Beer/Logo.png'

export default function Navbar() {
    return (
        <nav>
            <div id="logo">
                <a href="#Home"><img src={logo} alt="" /></a>
            </div>

            <div className="rule"></div>

            <ul className="navigation">
                <li><a href="#About" className="nav-item">About</a></li>
                <li><a href="#Brewery" className="nav-item">Brewery</a></li>
                <li><a href="#Events" className="nav-item">Events</a></li>
            </ul>
        </nav>
    )
}
