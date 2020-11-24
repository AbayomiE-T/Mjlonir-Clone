import React, { useRef } from 'react'
import logo from '../Assets/Beer/Logo.png'
import { Link } from 'react-scroll'

export default function Navbar() {

    const navRef = useRef()
    const burgerRef = useRef()

    const handleClick = () => {
        //For toggling the nav
        navRef.current.classList.toggle("nav-active")
        const navLinks = Array.from(navRef.current.childNodes)

        //Animate the links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            }
            else {
                link.style.animation = `navItemFade 0.5s ease forwards ${index / 7 + 0.2}s`
            }
        })

        //Animate the burger
        burgerRef.current.classList.toggle('toggle-burger')
    }

    return (
        <nav>
            <div id="logo">
                <Link className="nav-item" to="Home"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    <img src={logo} alt="" />
                </Link>
            </div>

            <div className="rule"></div>

            <ul ref={navRef} className="navigation">
                <li>
                    <Link className="nav-item" to="About"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={2}
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
                        offset={2}
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
                        offset={2}
                        duration={500}
                    >
                        Events
                    </Link>
                </li>
            </ul>

            <div ref={burgerRef} className="burger" onClick={handleClick}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    )
}
