import './Projects.css'

function Projects() {

    return (

        <section className="projects-section" id="projects">

            <h2 className="projects-title">
                My Projects
            </h2>


            <div className="projects-container">
                <div className="project-card">

                    <img
                        src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
                        alt="project"
                    />

                    <div className="project-content">

                        <h3>
                            My portfolio
                        </h3>

                        <p>
                            Modern responsive portfolio
                            website built using html, Javascript, React and CSS.
                        </p>

                        <div className="project-tech">

                            <span>Html</span>

                            <span>Javascript</span>

                            <span>React</span>

                            <span>CSS</span>

                        </div>

                        <div className="project-buttons">

                            <a
                                href="https://github.com/tanjilameem/my_portfolio"
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitHub
                            </a>

                        </div>

                    </div>

                </div>



                {/* PROJECT 2 */}

                <div className="project-card">

                    <img
                        src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
                        alt="project"
                    />

                    <div className="project-content">

                        <h3>
                            Retrieve-and-Display-Data-from-the-Database-on-a-Webpage
                        </h3>

                        <p>
                            Modern responsive
                            website built using Php and CSS.
                        </p>

                        <div className="project-tech">

                            <span>Php</span>

                            <span>CSS</span>

                            <span>Html</span>

                        </div>

                        <div className="project-buttons">

                            <a
                                href="https://github.com/tanjilameem/Retrieve-and-Display-Data-from-the-Database-on-a-Webpage"
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitHub
                            </a>

                        </div>

                    </div>

                </div>


                {/* PROJECT 3 */}

                <div className="project-card">

                    <img
                        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                        alt="project"
                    />

                    <div className="project-content">

                        <h3>
                            Data-Insertion-System-from-the-user-interface-to-the-database
                        </h3>

                        <p>
                            Smart UI
                            application with responsive design.
                        </p>

                        <div className="project-tech">

                            <span>Html</span>

                            <span>Php</span>

                            <span>CSS</span>

                        </div>

                        <div className="project-buttons">

                            <a
                                href="https://github.com/tanjilameem/Data-Insertion-System-from-the-user-interface-to-the-database"
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitHub
                            </a>

                        </div>

                    </div>

                </div>


                {/* PROJECT 4 */}

                <div className="project-card">

                    <img
                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                        alt="project"
                    />

                    <div className="project-content">

                        <h3>
                            Musify
                        </h3>

                        <p>
                            Modern music application
                            using C.
                        </p>

                        <div className="project-tech">

                            <span>C</span>

                        </div>

                        <div className="project-buttons">

                            <a
                                href="https://github.com/tanjilameem/DS-project"
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitHub
                            </a>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Projects