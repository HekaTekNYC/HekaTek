import React from "react"
import Hero from "../hero/Hero"
import Projects from "../projects/Projects"
import About from "../about/About"
import Contact from "../contact/Contact"
import Navigation from "../../components/navigation/Navigation"

import "./home.scss"

const Home = () => {
  return (
    <>
      <div className="home-section">
        <div className="hero-section" id="hero">
          <Hero />
        </div>
        <div className="projects-section" id="projects">
          <Projects />
        </div>
        <div className="about-section " id="about">
          <About />
        </div>
        <div className="contact-section" id="contact">
          <Contact />
        </div>
      </div>
    </>
  )
}

export default Home
