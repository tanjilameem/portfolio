import { useState, useEffect } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollTop from './components/ScrollTop'

import './App.css'

function App() {

  // DARK MODE STATE

  const [darkMode, setDarkMode] = useState(true)


  // LOAD SAVED THEME

  useEffect(() => {

    const savedTheme =
      localStorage.getItem('theme')

    if (savedTheme === 'light') {

      setDarkMode(false)

    }

  }, [])


  // SAVE THEME

  useEffect(() => {

    localStorage.setItem(
      'theme',
      darkMode ? 'dark' : 'light'
    )

  }, [darkMode])


  return (

    <div className={darkMode ? 'app dark' : 'app'}>

      {/* SCROLL TO TOP */}

      <ScrollTop />


      {/* NAVBAR */}

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />


      {/* HERO */}

      <Hero />


      {/* ABOUT */}

      <About />


      {/* SKILLS */}

      <Skills />


      {/* SERVICES */}

      <Services />


      {/* PROJECTS */}

      <Projects />


      {/* EXPERIENCE */}

      <Experience />


      {/* CONTACT */}

      <Contact />


      {/* FOOTER */}

      <Footer />

    </div>
  )
}

export default App