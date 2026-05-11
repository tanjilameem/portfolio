import './Skills.css'

function Skills() {

    return (

        <section className="skills-section" id="skills">

            <h3>
                Why you choose me
            </h3>
            <h2>
                Skills

            </h2>


            <div className="skills-container">

                <div className="skill-card">

                    <h3>HTML</h3>

                    <div className="progress-bar">
                        <div className="progress html"></div>
                    </div>

                    <span>98%</span>

                </div>


                <div className="skill-card">

                    <h3>CSS</h3>

                    <div className="progress-bar">
                        <div className="progress css"></div>
                    </div>

                    <span>95%</span>

                </div>


                <div className="skill-card">

                    <h3>JavaScript</h3>

                    <div className="progress-bar">
                        <div className="progress js"></div>
                    </div>

                    <span>90%</span>

                </div>


                <div className="skill-card">

                    <h3>React</h3>

                    <div className="progress-bar">
                        <div className="progress react"></div>
                    </div>

                    <span>90%</span>

                </div>


                <div className="skill-card">

                    <h3>Firebase</h3>

                    <div className="progress-bar">
                        <div className="progress firebase"></div>
                    </div>

                    <span>80%</span>

                </div>


                <div className="skill-card">

                    <h3>GitHub</h3>

                    <div className="progress-bar">
                        <div className="progress github"></div>
                    </div>

                    <span>85%</span>

                </div>

            </div>

        </section>
    )
}

export default Skills