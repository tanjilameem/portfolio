import './About.css'

function About() {

    return (

        <section className="about-section" id="about">

            <div className="about-top">

                <h2>
                    About Me
                </h2>

                <p>
                    I’m a passionate Frontend Developer
                    skilled in HTML, CSS, JavaScript,
                    React and Next.js. I enjoy building
                    modern, responsive and user-friendly
                    web applications.
                </p>

            </div>


            <div className="about-bottom">

                <div className="about-card">

                    <h3>10+</h3>

                    <p>
                        Completed Projects
                    </p>

                </div>


                <div className="about-card">

                    <h3>3+</h3>

                    <p>
                        years working
                    </p>

                </div>


                <div className="about-card">

                    <h3>100%</h3>

                    <p>
                        Responsive Design
                    </p>

                </div>

            </div>

        </section>

    )
}

export default About