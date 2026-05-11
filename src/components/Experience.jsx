import {
    FaBriefcase,
    FaCode,
    FaLaptopCode,
    FaCertificate
} from 'react-icons/fa'

import './Experience.css'

function Experience() {

    return (

        <section
            className="experience-section"
            id="experience"
        >

            <h2>
                Experience & Journey
            </h2>


            <div className="experience-container">


                {/* CARD 1 */}

                <div className="experience-card">

                    <div className="experience-icon">
                        <FaCode />
                    </div>

                    <h3>
                        Frontend Development
                    </h3>

                    <span>
                        2024 - Present
                    </span>

                    <p>
                        Building modern responsive
                        websites using React,
                        JavaScript and Firebase.
                    </p>

                </div>


                {/* CARD 2 */}

                <div className="experience-card">

                    <div className="experience-icon">
                        <FaLaptopCode />
                    </div>

                    <h3>
                        Personal Projects
                    </h3>

                    <span>
                        10+ Projects
                    </span>

                    <p>
                        Developed portfolio websites,
                        dashboard UI, authentication
                        systems and responsive apps.
                    </p>

                </div>


                {/* CARD 3 */}

                <div className="experience-card">

                    <div className="experience-icon">
                        <FaCertificate />
                    </div>

                    <h3>
                        Learning Journey
                    </h3>

                    <span>
                        Continuous Learning
                    </span>

                    <p>
                        Improving skills in React,
                        Next.js, Firebase and
                        modern frontend technologies.
                    </p>

                </div>


                {/* CARD 4 */}

                <div className="experience-card">

                    <div className="experience-icon">
                        <FaBriefcase />
                    </div>

                    <h3>
                        Future Goals
                    </h3>

                    <span>
                        Frontend Engineer
                    </span>

                    <p>
                        Passionate about working
                        on real-world projects and
                        building impactful products.
                    </p>

                </div>

            </div>

        </section>
    )
}

export default Experience