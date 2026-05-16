import { useState, useEffect } from 'react'

import logo from '../assets/logo.png'

import {
    FaBars,
    FaTimes,
    FaMoon,
    FaSun
} from 'react-icons/fa'

import './Navbar.css'

function Navbar({ darkMode, setDarkMode }) {

    const [menuOpen, setMenuOpen] = useState(false)

    const [active, setActive] = useState('home')


    // ACTIVE SECTION

    useEffect(() => {

        const handleScroll = () => {

            const sections =
                document.querySelectorAll('section')

            sections.forEach(section => {

                const top =
                    window.scrollY

                const offset =
                    section.offsetTop - 200

                const height =
                    section.offsetHeight

                const id =
                    section.getAttribute('id')

                if (
                    top >= offset &&
                    top < offset + height
                ) {

                    setActive(id)

                }

            })

        }

        window.addEventListener(
            'scroll',
            handleScroll
        )

        return () => {

            window.removeEventListener(
                'scroll',
                handleScroll
            )

        }

    }, [])


    // CLOSE MENU AFTER CLICK

    const closeMenu = () => {

        setMenuOpen(false)

    }


    return (

        <nav className="navbar">

            {/* LOGO */}

            <div className="logo">

                <img
                    src={logo}
                    alt="logo"
                />

            </div>


            {/* NAV LINKS */}

            <ul
                className={
                    menuOpen
                        ? 'nav-links active'
                        : 'nav-links'
                }
            >

                <li>

                    <a
                        href="#home"

                        className={
                            active === 'home'
                                ? 'active-link'
                                : ''
                        }

                        onClick={closeMenu}
                    >

                        Home

                    </a>

                </li>


                <li>

                    <a
                        href="#about"

                        className={
                            active === 'about'
                                ? 'active-link'
                                : ''
                        }

                        onClick={closeMenu}
                    >

                        About

                    </a>

                </li>


                <li>

                    <a
                        href="#skills"

                        className={
                            active === 'skills'
                                ? 'active-link'
                                : ''
                        }

                        onClick={closeMenu}
                    >

                        Skills

                    </a>

                </li>


                <li>

                    <a
                        href="#services"

                        className={
                            active === 'services'
                                ? 'active-link'
                                : ''
                        }

                        onClick={closeMenu}
                    >

                        Services

                    </a>

                </li>


                <li>

                    <a
                        href="#projects"

                        className={
                            active === 'projects'
                                ? 'active-link'
                                : ''
                        }

                        onClick={closeMenu}
                    >

                        Projects

                    </a>

                </li>


                <li>

                    <a
                        href="#experience"

                        className={
                            active === 'experience'
                                ? 'active-link'
                                : ''
                        }

                        onClick={closeMenu}
                    >

                        Experience

                    </a>

                </li>


                <li>

                    <a
                        href="#contact"

                        className={
                            active === 'contact'
                                ? 'active-link'
                                : ''
                        }

                        onClick={closeMenu}
                    >

                        Contact

                    </a>

                </li>

            </ul>


            {/* RIGHT SIDE */}

            <div className="nav-right">


                {/* THEME TOGGLE */}

                <button
                    className="theme-btn"
                    onClick={() =>
                        setDarkMode(!darkMode)
                    }
                >

                    {
                        darkMode
                            ? <FaSun />
                            : <FaMoon />
                    }

                </button>


                {/* HAMBURGER */}

                <div
                    className="menu-icon"

                    onClick={() =>
                        setMenuOpen(!menuOpen)
                    }
                >

                    {
                        menuOpen
                            ? <FaTimes />
                            : <FaBars />
                    }

                </div>

            </div>

        </nav>
    )
}

export default Navbar