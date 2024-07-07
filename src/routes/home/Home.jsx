import React from "react"
import Hero from "../hero/Hero"
import About from "../about/About"
import Products from "../products/Products"
import Services from "../services/Services"
import Contact from "../contact/Contact"
import WhyUs from "../why-us/WhyUs"
import PricingPlans from "../pricing-plans/PricingPlans"
import "./home.scss"

const Home = () => {
  return (
    <>
      <div className="hero-section hero-overlay" id="home">
        <Hero />
      </div>
      <div className="services-section" id="services">
        <Services />
      </div>
      <div className="why-us-section" id="why-us">
        <WhyUs />
      </div>
      <div className="product-section" id="our-work">
        <Products />
      </div>

      <div className="about-section" id="about">
        <About />
      </div>
      <div className="pricing-section" id="pricing">
        <PricingPlans />
      </div>
      <div className="contact-section" id="contact">
        <Contact />
      </div>
    </>
  )
}

export default Home
