import React, { useRef } from "react"
import Hero from "../hero/Hero"
import Products from "../products/Products"
import About from "../about/About"
import Contact from "../contact/Contact"
import Spacepink from "../../assets/images/pink_space.png"
import SparklesOverlay from "../../components/sparkles/Sparkles"

import Space from "../../assets/images/space_bussy2.png"

import "./home.scss"

const Home = () => {
  const ref = useRef()
  // const url = (name, wrap) =>
  //   `${wrap ? "url(" : ""}http://localhost:8080/build/assets/${name}.svg${
  //     wrap ? ")" : ""
  //   }`
  return (
    <>
      <div>
        <div className="hero-section" id="hero">
          <Hero />
        </div>
        <div className="bg">
          <div className="another-overlay">
            <div className="content"></div>

            <div className="product-section" id="product">
              {/* <div className="product-overlay"></div> */}
              <Products />
            </div>

            <div className="about-section " id="about">
              <div className="space-layer">
                <img src={Space} alt={"space"} className="fuck" />
              </div>
              <div className="about-layer">
                <About />
              </div>
            </div>

            <div className="contact-section" id="contact">
              {/* <div className="spacepink-layer">
                <img src={Spacepink} alt={"space"} className="fuck1" />
              </div>
              <div className="contact-layer"> */}
              <Contact />

              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
