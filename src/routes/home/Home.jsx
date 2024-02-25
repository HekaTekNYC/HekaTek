import React from "react"
import Hero from "../hero/Hero"
import Products from "../products/Products"
import Services from "../services/Services"
import Contact from "../contact/Contact"
// import ScrollingIcons from "../../components/iconRows/ScrollingIcons"
import TechStack from "../../routes/tech-stack/TechStack"
import "./home.scss"

const Home = () => {
  return (
    <>
      <div>
        <div className="hero-section" id="hero">
          <Hero />
        </div>

        <div className="services-section" id="services">

          {/* <Services /> */}
        </div>
        <div className="tech-stack-section" >
          <TechStack />

        </div>
        <div className="tech-stack-section">{/* <TechStack /> */}</div>
        <div className="product-section" id="our-work">
          <Products />
        </div>
        <div className="contact-section" id="contact">
          <Contact />
        </div>
      </div>
    </>
  )
}

export default Home
