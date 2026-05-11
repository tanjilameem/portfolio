import {
    FaGithub,
    FaLinkedin,
    FaFacebook
} from 'react-icons/fa'

import './Footer.css'

function Footer() {

    return (

        <footer className="footer">

            <h2>
                Most Tanjila Ahmmed Meem
            </h2>

            <p>
                Frontend Developer
            </p>


            <div className="footer-icons">

                {/* GITHUB */}

                <a
                    href="https://github.com/tanjilameem"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaGithub />
                </a>


                {/* LINKEDIN */}

                <a
                    href="https://www.linkedin.com/in/most-tanjila-ahmmed-meem-06060a299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaLinkedin />
                </a>


                {/* FACEBOOK */}

                <a
                    href="https://www.facebook.com/tanjila.meem"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaFacebook />
                </a>

            </div>


            <span>
                © 2026 All Rights Reserved
            </span>

        </footer>
    )
}

export default Footer