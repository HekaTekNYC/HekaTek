import React from "react"
import Hero from "../hero/Hero"
import About from "../about/About"
import Products from "../products/Products"
import Services from "../services/Services"
import Contact from "../contact/Contact"
import WhyUs from '../why-us/WhyUs'
import "./home.scss"

const Home = () => {
  return (
    <>
      {/* <div className="background-dots"> */}
      <div className="hero-section hero-overlay" id="home">
        <Hero />
      </div>
      <div className="about-section" id="about">
        <About />
      </div>
      <div className="services-section" id="services">
        <Services />
      </div>

      <div>
        <WhyUs />
      </div>
      <div className="product-section" id="our-work">
        <Products />
      </div>
      <div className="contact-section" id="contact">
        <Contact />
      </div>
      {/* </div> */}
    </>
  )
}

export default Home