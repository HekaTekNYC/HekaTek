import React from "react"
import Hero from "../hero/Hero"
import Products from "../products/Products"
import Services from "../services/Services"
import Contact from "../contact/Contact"
// import ScrollingIcons from "../../components/iconRows/ScrollingIcons"
import HexagonIcon from "../../components/hexagon-icon/HexagonIcon"
import "./home.scss"

const Home = () => {
  return (
    <>
      <div>
        <div className="hero-section" id="hero">
          <Hero />
        </div>
        <div className="" >
          {/* <ScrollingIcons /> */}
        </div>
        <div className="product-section" id="our-work">
          {/* <Products /> */}
        </div>
        <div className="services-section" id="services">
          {/* <Services /> */}
        </div>

        <div className="contact-section" id="contact">
          {/* <Contact /> */}
          
        </div>
        <HexagonIcon />
      </div>
    </>
  )
}

export default Home
