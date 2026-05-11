import {
    FaCode,
    FaPaintBrush,
    FaMobileAlt
} from 'react-icons/fa'

import './Services.css'

function Services() {

    return (

        <section className="services-section" id="services">

            <h1 className="services-title">
                Services
            </h1>

            <div className="services-container">


                <div className="service-card">

                    <div className="service-icon">
                        <FaCode />
                    </div>

                    <h3>
                        Frontend Development
                    </h3>

                    <p>
                        Modern responsive websites using
                        React, JavaScript, Next.js and modern UI.
                    </p>

                </div>


                <div className="service-card">

                    <div className="service-icon">
                        <FaPaintBrush />
                    </div>

                    <h3>
                        UI / UX Design
                    </h3>

                    <p>
                        Clean modern interfaces with
                        smooth user experiences.
                    </p>

                </div>


                <div className="service-card">

                    <div className="service-icon">
                        <FaMobileAlt />
                    </div>

                    <h3>
                        Responsive Design
                    </h3>

                    <p>
                        Fully responsive websites for
                        desktop, tablet and mobile devices.
                    </p>

                </div>

            </div>

        </section>
    )
}

export default Services