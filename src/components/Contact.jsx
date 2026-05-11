import {
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt
} from 'react-icons/fa'

import './Contact.css'

function Contact() {

    return (

        <section className="contact-section" id="contact">

            <h2>
                Contact Me
            </h2>


            <div className="contact-container">


                {/* LEFT SIDE */}

                <div className="contact-info">

                    <div className="contact-card">

                        <div className="contact-icon">
                            <FaEnvelope />
                        </div>

                        <div>

                            <h3>Email</h3>

                            <p>
                                meem15-4979@diu.edu.bd
                            </p>

                        </div>

                    </div>


                    <div className="contact-card">

                        <div className="contact-icon">
                            <FaPhoneAlt />
                        </div>

                        <div>

                            <h3>Phone</h3>

                            <p>
                                +880 1343888683
                            </p>

                        </div>

                    </div>


                    <div className="contact-card">

                        <div className="contact-icon">
                            <FaMapMarkerAlt />
                        </div>

                        <div>

                            <h3>Location</h3>

                            <p>
                                Dhaka, Bangladesh
                            </p>

                        </div>

                    </div>

                </div>


                {/* RIGHT SIDE */}

                <form className="contact-form">

                    <input
                        type="text"
                        placeholder="Your Name"
                    />

                    <input
                        type="email"
                        placeholder="Your Email"
                    />

                    <textarea
                        rows="7"
                        placeholder="Your Message"
                    ></textarea>

                    <button type="submit">

                        Send Message

                    </button>

                </form>

            </div>

        </section>
    )
}

export default Contact