import { useEffect, useState } from 'react'

import { FaArrowUp } from 'react-icons/fa'

import './ScrollTop.css'

function ScrollTop() {

    const [show, setShow] = useState(false)

    useEffect(() => {

        const handleScroll = () => {

            if (window.scrollY > 400) {
                setShow(true)
            }
            else {
                setShow(false)
            }

        }

        window.addEventListener(
            'scroll',
            handleScroll
        )

    }, [])


    const scrollTop = () => {

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })

    }

    return (

        <div>

            {
                show &&

                <button
                    className="scroll-top"
                    onClick={scrollTop}
                >

                    <FaArrowUp />

                </button>
            }

        </div>
    )
}

export default ScrollTop