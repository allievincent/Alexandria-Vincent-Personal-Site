import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Hero from './Hero.jsx'
import About from './About.jsx'
import Experience from './Experience.jsx'
import Skills from './Skills.jsx'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'

export default function Home() {
  const { state } = useLocation()
  const navigate = useNavigate()

  // if you clicked a nav link from the research page, scroll to that section
  useEffect(() => {
    if (state?.scrollTo) {
      setTimeout(() => document.getElementById(state.scrollTo)?.scrollIntoView(), 50)
      navigate('.', { replace: true, state: null })
    }
  }, [state, navigate])

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}
