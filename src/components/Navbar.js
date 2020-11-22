import React from 'react'
import logo from '../Assets/Beer/Logo.png'
import { Link, animateScroll as scroll } from 'react-scroll'

export default function Navbar() {
    return (
        <nav>
            <div id="logo">
                <Link className="nav-item" to="Home"><img src={logo} alt="" /></Link>
            </div>

            <div className="rule"></div>

            <ul className="navigation">
                <li>
                    <Link className="nav-item" to="About"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link className="nav-item" to="Brewery"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        Brewery
                    </Link>
                </li>
                <li>
                    <Link className="nav-item" to="Events"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        Events
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
