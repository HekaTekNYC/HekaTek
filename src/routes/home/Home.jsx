import React from "react"
import Hero from "../hero/Hero"
import Products from "../products/Products"
import About from "../about/About"
import Contact from "../contact/Contact"

import "./home.scss"

const Home = () => {
  return (
    <>
      <div className="hero-section" id="hero">
        <Hero />
      </div>

      <div className="product-section" id="product">
        <Products />
      </div>
      <div className="about-section " id="about">
        <About />
      </div>
      <div className="contact-section" id="contact">
        <Contact />
      </div>
    </>
  )
}

export default Home
