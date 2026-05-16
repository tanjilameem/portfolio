import { useRef } from 'react'

import emailjs from '@emailjs/browser'

import './Contact.css'

function Contact() {

    const form = useRef()

    const sendEmail = (e) => {

        e.preventDefault()

        emailjs.sendForm(

            'service_bpcqdgj',
            'template_vgydgdh',
            form.current,
            'pxoNi4PfUib_q0nN6'

        )

            .then(() => {

                alert('Message Sent Successfully!')

                e.target.reset()

            })

            .catch((error) => {

                console.log(error)

                alert(error.text)

            })

    }

    return (

        <section className="contact-section" id="contact">

            <h2>
                Contact Me
            </h2>

            <form
                ref={form}
                onSubmit={sendEmail}
                className="contact-form"
            >

                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                />

                <textarea
                    name="message"
                    placeholder="Your Message"
                    required
                ></textarea>

                <button type="submit">

                    Send Message

                </button>

            </form>

        </section>
    )
}

export default Contact