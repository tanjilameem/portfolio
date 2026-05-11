import { useState, useEffect } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Experience from './components/Experience'

import './App.css'

function App() {

  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {

    const savedTheme =
      localStorage.getItem('theme')

    if (savedTheme === 'light') {
      setDarkMode(false)
    }

  }, [])


  useEffect(() => {

    localStorage.setItem(
      'theme',
      darkMode ? 'dark' : 'light'
    )

  }, [darkMode])


  return (

    <div className={darkMode ? 'app dark' : 'app'}>

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Hero />

      <About />

      <Skills />

      <Services />

      <Projects />

      <Experience />

      <Contact />

      <Footer />

    </div>
  )
}

export default App
