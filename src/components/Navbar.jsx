import { useState } from 'react'
import logo from '../assets/logo.png'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'

function Navbar({ darkMode, setDarkMode }) {

    const [menuOpen, setMenuOpen] = useState(false)

    return (

        <nav className="navbar">

            {/* LOGO */}

            <div className="logo">

                <img src={logo} alt="logo" />

            </div>


            {/* NAV LINKS */}

            <ul className={menuOpen ? "nav-links active" : "nav-links"}>

                <li>
                    <a href="#home">
                        Home
                    </a>
                </li>

                <li>
                    <a href="#about">
                        About
                    </a>
                </li>

                <li>
                    <a href="#skills">
                        Skills
                    </a>
                </li>

                <li>
                    <a href="#services">
                        Services
                    </a>
                </li>
                <li>
                    <a href="#projects">
                        Projects
                    </a>
                </li>

                <li>
                    <a href="#experience">
                        Experience
                    </a>
                </li>



                <li>
                    <a href="#contact">
                        Contact
                    </a>
                </li>

            </ul>


            {/* THEME TOGGLE */}

            <div
                className={darkMode ? "switch dark" : "switch"}
                onClick={() => setDarkMode(!darkMode)}
            >

                <div className="toggle"></div>

            </div>


            {/* HAMBURGER */}

            <div
                className="menu-icon"
                onClick={() => setMenuOpen(!menuOpen)}
            >

                {
                    menuOpen
                        ? <FaTimes />
                        : <FaBars />
                }

            </div>

        </nav>
    )
}

export default Navbar