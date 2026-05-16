import { useState } from 'react'
import myPhoto from '../assets/myphoto.jpg'
import cvFile from '../assets/cv.pdf'

import './Hero.css'

function Hero() {

    const [showAvailability, setShowAvailability] = useState(false)

    return (

        <section className="hero-section" id="home">

            <div className="hero-text">

                <h3>Hello, I'm</h3>

                <h1>
                    Most Tanjila Ahmmed
                    <br />
                    Meem
                </h1>

                <h2>
                    Frontend Developer
                </h2>

                <p>
                    I am a passionate Frontend Developer
                    skilled in HTML, CSS, JavaScript,
                    React and Next.js. I enjoy building
                    modern, responsive and user-friendly
                    web applications.
                </p>

                <div className="hero-buttons">

                    <button
                        className="hero-btn"
                        onClick={() =>
                            setShowAvailability(!showAvailability)
                        }
                    >
                        Hire Me
                    </button>


                    <a
                        href={cvFile}
                        download
                        className="hero-btn outline-btn"
                    >
                        Download CV
                    </a>

                </div>


                {/* AVAILABILITY CARD */}

                {
                    showAvailability && (

                        <div className="availability-card">

                            <h4>
                                Available for Work
                            </h4>

                            <p>
                                Status:
                                <span className="online">
                                    Currently Available
                                </span>
                            </p>

                            <p>
                                Response Time:
                                Within 2-4 Hours
                            </p>

                            <p>
                                Remote / Freelance Projects
                            </p>

                        </div>

                    )
                }

            </div>


            <div className="hero-image">

                <div className="image-circle">

                    <img src={myPhoto} alt="profile" />

                </div>

            </div>

        </section>
    )
}

export default Hero