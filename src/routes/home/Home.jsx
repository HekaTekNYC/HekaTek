import React, { useRef, useState } from "react"
import Hero from "../hero/Hero"
import Products from "../products/Products"
import About from "../about/About"
import Contact from "../contact/Contact"
import Sparkles from "../../components/sparkles/Sparkles"
import Services from "../services/Services"

import Space from "../../assets/images/space_buddy2.png"

import "./home.scss"

const Home = () => {
  const ref = useRef()

  return (
    <>
      <div>
        <div className="sparkles-container">
          <Sparkles count={100} />
        </div>

        <div className="hero-section" id="hero">
          <Hero />
        </div>

        <div className="product-section" id="our-work">
          <Products />
        </div>
        <div className="services-section">
          <Services />
        </div>
        <div className="about-section " id="about">
          <div className="space-layer">
            <img src={Space} alt={"space"} className="pink-space" />
          </div>
          <div className="about-layer">
            <About />
          </div>
        </div>

        <div className="contact-section" id="contact">
          <Contact />
        </div>
      </div>
    </>
  )
}

export default Home
